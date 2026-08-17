/*
 * Lagkompassen – Bevis (evidens) per checklistpunkt.
 * Låter användaren ladda upp filer (foto, PDF, protokoll m.m.) som bevis på
 * att en checklistpunkt följs. Filerna sparas LOKALT i webbläsaren via
 * IndexedDB (ingen server) och är därmed per enhet.
 *
 * Fristående modul: hakar in i lagmodalens checklista (#modalBody) utan att
 * ändra app.js. Nyckel per punkt = lagId + punktens index (från data-index).
 */
(function () {
  "use strict";

  if (!("indexedDB" in window)) return; // graciöst: gör inget om stöd saknas

  var DB_NAME = "lagkompassen-evidens";
  var STORE = "files";
  var dbPromise = null;

  function openDB() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve, reject) {
      var req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains(STORE)) {
          var os = db.createObjectStore(STORE, { keyPath: "id", autoIncrement: true });
          os.createIndex("byItem", "itemKey", { unique: false });
        }
      };
      req.onsuccess = function () {
        resolve(req.result);
      };
      req.onerror = function () {
        reject(req.error);
      };
    });
    return dbPromise;
  }
  function store(mode) {
    return openDB().then(function (db) {
      return db.transaction(STORE, mode).objectStore(STORE);
    });
  }
  function addFile(rec) {
    return store("readwrite").then(function (os) {
      return new Promise(function (res, rej) {
        var r = os.add(rec);
        r.onsuccess = function () {
          res(r.result);
        };
        r.onerror = function () {
          rej(r.error);
        };
      });
    });
  }
  function getFiles(itemKey) {
    return store("readonly").then(function (os) {
      return new Promise(function (res, rej) {
        var r = os.index("byItem").getAll(itemKey);
        r.onsuccess = function () {
          res(r.result || []);
        };
        r.onerror = function () {
          rej(r.error);
        };
      });
    });
  }
  function deleteFile(id) {
    return store("readwrite").then(function (os) {
      return new Promise(function (res, rej) {
        var r = os.delete(id);
        r.onsuccess = function () {
          res();
        };
        r.onerror = function () {
          rej(r.error);
        };
      });
    });
  }

  function currentLawId() {
    var h = (location.hash || "").replace(/^#/, "");
    return h.indexOf("lag/") === 0 ? h.slice(4) : null;
  }
  function fmtSize(n) {
    if (n < 1024) return n + " B";
    if (n < 1048576) return Math.round(n / 1024) + " kB";
    return (n / 1048576).toFixed(1) + " MB";
  }

  var PAPERCLIP =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a5 5 0 0 1-7.07-7.07l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>';

  function renderFiles(container, files, refresh) {
    container.innerHTML = "";
    files.forEach(function (f) {
      var chip = document.createElement("span");
      chip.className = "ev-chip";

      var a = document.createElement("a");
      a.className = "ev-open";
      a.href = "#";
      a.textContent = f.name;
      a.title = "Öppna " + f.name;
      a.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var url = URL.createObjectURL(f.blob);
        window.open(url, "_blank");
        setTimeout(function () {
          URL.revokeObjectURL(url);
        }, 30000);
      });

      var meta = document.createElement("span");
      meta.className = "ev-meta";
      meta.textContent = fmtSize(f.size);

      var del = document.createElement("button");
      del.type = "button";
      del.className = "ev-del";
      del.setAttribute("aria-label", "Ta bort bevis");
      del.innerHTML = "&times;";
      del.addEventListener("click", function (e) {
        e.stopPropagation();
        if (window.confirm('Ta bort beviset "' + f.name + '"?')) {
          deleteFile(f.id).then(refresh);
        }
      });

      chip.appendChild(a);
      chip.appendChild(meta);
      chip.appendChild(del);
      container.appendChild(chip);
    });
  }

  function attachPanel(li, lawId) {
    if (li.querySelector(".ev-panel")) return;
    var index = li.getAttribute("data-index");
    if (index == null) return;
    var itemKey = lawId + "::" + index;

    var panel = document.createElement("div");
    panel.className = "ev-panel";
    // Klick i panelen ska inte bocka av checklistpunkten.
    panel.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    panel.innerHTML =
      '<div class="ev-head">' + PAPERCLIP + "<span>Bevis</span></div>" +
      '<div class="ev-files"></div>' +
      '<button type="button" class="ev-add">' + PAPERCLIP + "Ladda upp bevis</button>" +
      '<input type="file" class="ev-input" multiple hidden />';
    li.appendChild(panel);

    var headSpan = panel.querySelector(".ev-head span");
    var filesEl = panel.querySelector(".ev-files");
    var input = panel.querySelector(".ev-input");
    var addBtn = panel.querySelector(".ev-add");

    function refresh() {
      getFiles(itemKey).then(function (files) {
        renderFiles(filesEl, files, refresh);
        headSpan.textContent = files.length ? "Bevis (" + files.length + ")" : "Bevis";
        li.classList.toggle("has-evidence", files.length > 0);
      });
    }

    addBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      input.click();
    });
    input.addEventListener("change", function () {
      var list = Array.prototype.slice.call(input.files);
      if (!list.length) return;
      Promise.all(
        list.map(function (f) {
          return addFile({
            itemKey: itemKey,
            lawId: lawId,
            item: Number(index),
            name: f.name,
            type: f.type,
            size: f.size,
            blob: f,
            added: Date.now()
          });
        })
      ).then(function () {
        input.value = "";
        refresh();
      });
    });

    refresh();
  }

  function injectAll() {
    var mb = document.getElementById("modalBody");
    if (!mb) return;
    var lawId = currentLawId();
    if (!lawId) return;
    mb.querySelectorAll(".check-item").forEach(function (li) {
      attachPanel(li, lawId);
    });
  }

  function injectStyles() {
    if (document.getElementById("ev-styles")) return;
    var css =
      ".check-item{flex-wrap:wrap}" +
      ".ev-panel{flex-basis:100%;width:100%;margin-left:32px;margin-top:8px;padding-top:8px;border-top:1px dashed var(--border);display:flex;flex-direction:column;gap:7px}" +
      ".ev-head{display:flex;align-items:center;gap:6px;font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;font-weight:700;color:var(--ink-faint)}" +
      ".ev-files{display:flex;flex-wrap:wrap;gap:6px}" +
      ".ev-files:empty{display:none}" +
      ".ev-chip{display:inline-flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:4px 5px 4px 10px;font-size:.82rem;max-width:100%}" +
      ".ev-open{color:var(--primary-dark);font-weight:600;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:190px}" +
      ".ev-open:hover{text-decoration:underline}" +
      ".ev-meta{color:var(--ink-faint);font-size:.74rem;white-space:nowrap}" +
      ".ev-del{border:none;background:var(--bg);color:var(--ink-soft);width:22px;height:22px;border-radius:6px;cursor:pointer;line-height:1;font-size:1.1rem;flex:none}" +
      ".ev-del:hover{background:#fbe9e7;color:#c0392b}" +
      ".ev-add{align-self:flex-start;display:inline-flex;align-items:center;gap:7px;border:1px dashed var(--border);background:var(--surface);color:var(--primary-dark);font-family:inherit;font-weight:600;font-size:.82rem;padding:7px 13px;border-radius:8px;cursor:pointer}" +
      ".ev-add:hover{border-color:var(--primary);background:var(--primary-soft)}" +
      ".check-item.has-evidence>span:first-of-type::after{content:'';display:inline-block;width:7px;height:7px;margin-left:7px;border-radius:50%;background:var(--primary);vertical-align:middle}" +
      "@media print{.ev-add,.ev-del,.ev-input{display:none !important}.ev-chip{border-color:#bbb}}";
    var style = document.createElement("style");
    style.id = "ev-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function init() {
    injectStyles();
    var mb = document.getElementById("modalBody");
    if (mb) {
      new MutationObserver(function () {
        injectAll();
      }).observe(mb, { childList: true, subtree: true });
    }
    injectAll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
