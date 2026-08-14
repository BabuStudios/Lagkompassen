/*
 * Lagkompassen – Excel-export.
 * Exporterar en sparad lista till en riktig .xlsx-fil (utan externa bibliotek).
 * Kolumner: ID, Lagnamn, Beteckning, Lagtyp, Länk till lagtext, Ansvarig.
 *
 * Fristående modul: lägger en exportknapp i "Mina listor" (per lista) och
 * läser lagdata från window.LAWS samt listor från localStorage.
 */
(function (global) {
  "use strict";

  var LISTS_KEY = "lagkompassen.lists.v1";
  var enc = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
  function str(s) {
    return enc.encode(s);
  }

  function xmlEsc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  // Härled lagtyp (instrumenttyp) från beteckning och namn.
  function deriveLagtyp(law) {
    var b = law.sfs || "";
    var s = ((law.title || "") + " " + b).toLowerCase();
    if (/afs/i.test(b)) return "Föreskrift (AFS)";
    if (/nfs/i.test(b)) return "Föreskrift (NFS)";
    if (/^\s*eu\b/i.test(b)) return /direktiv/.test(s) ? "EU-direktiv" : "EU-förordning";
    if (/förordning|förordn\./.test(s)) return "Förordning";
    if (/balk/.test(s)) return "Balk (lag)";
    if (/\blag\b|lagen\b|lag om/.test(s)) return "Lag";
    return "Lag";
  }

  // ---- CRC32 ----
  var crcTable = (function () {
    var t = [];
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(bytes) {
    var c = 0xffffffff;
    for (var i = 0; i < bytes.length; i++) c = (c >>> 8) ^ crcTable[(c ^ bytes[i]) & 0xff];
    return (c ^ 0xffffffff) >>> 0;
  }

  // ---- ZIP (store, ingen komprimering) ----
  function u16(n) {
    return new Uint8Array([n & 255, (n >>> 8) & 255]);
  }
  function u32(n) {
    return new Uint8Array([n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255]);
  }
  function concat(chunks) {
    var len = 0,
      i;
    for (i = 0; i < chunks.length; i++) len += chunks[i].length;
    var out = new Uint8Array(len),
      o = 0;
    for (i = 0; i < chunks.length; i++) {
      out.set(chunks[i], o);
      o += chunks[i].length;
    }
    return out;
  }
  function zip(files) {
    var localChunks = [],
      central = [],
      offset = 0;
    files.forEach(function (f) {
      var name = str(f.name);
      var crc = crc32(f.data);
      var local = concat([
        u32(0x04034b50), u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(f.data.length), u32(f.data.length),
        u16(name.length), u16(0), name, f.data
      ]);
      localChunks.push(local);
      central.push(
        concat([
          u32(0x02014b50), u16(20), u16(20), u16(0), u16(0), u16(0), u16(0),
          u32(crc), u32(f.data.length), u32(f.data.length),
          u16(name.length), u16(0), u16(0), u16(0), u16(0), u32(0),
          u32(offset), name
        ])
      );
      offset += local.length;
    });
    var cd = concat(central);
    var end = concat([
      u32(0x06054b50), u16(0), u16(0),
      u16(files.length), u16(files.length),
      u32(cd.length), u32(offset), u16(0)
    ]);
    return concat(localChunks.concat([cd, end]));
  }

  // ---- XLSX ----
  var COLS = ["A", "B", "C", "D", "E", "F"];
  function cellStr(ref, val, style) {
    return (
      '<c r="' + ref + '" t="inlineStr"' + (style ? ' s="' + style + '"' : "") +
      "><is><t xml:space=\"preserve\">" + xmlEsc(val) + "</t></is></c>"
    );
  }
  function cellNum(ref, val) {
    return '<c r="' + ref + '"><v>' + val + "</v></c>";
  }

  // headers: string[6]; rows: array of [id, namn, bet, typ, lank, ansvarig]; linkCol: index (0-based)
  function buildWorkbook(headers, rows, linkCol) {
    var headerRow =
      '<row r="1">' +
      headers.map(function (h, i) {
        return cellStr(COLS[i] + "1", h, 1);
      }).join("") +
      "</row>";

    var hyperlinks = [];
    var rels = [];
    var dataRows = rows
      .map(function (row, ri) {
        var r = ri + 2;
        var cells = row
          .map(function (val, ci) {
            var ref = COLS[ci] + r;
            if (ci === 0) return cellNum(ref, val);
            if (ci === linkCol && val) {
              var id = "rId" + (hyperlinks.length + 1);
              hyperlinks.push('<hyperlink ref="' + ref + '" r:id="' + id + '"/>');
              rels.push(
                '<Relationship Id="' + id +
                  '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="' +
                  xmlEsc(val) + '" TargetMode="External"/>'
              );
            }
            return cellStr(ref, val);
          })
          .join("");
        return '<row r="' + r + '">' + cells + "</row>";
      })
      .join("");

    var cols =
      '<cols>' +
      '<col min="1" max="1" width="6" customWidth="1"/>' +
      '<col min="2" max="2" width="50" customWidth="1"/>' +
      '<col min="3" max="3" width="24" customWidth="1"/>' +
      '<col min="4" max="4" width="18" customWidth="1"/>' +
      '<col min="5" max="5" width="60" customWidth="1"/>' +
      '<col min="6" max="6" width="26" customWidth="1"/>' +
      "</cols>";

    var sheet =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
      cols +
      '<sheetData>' + headerRow + dataRows + "</sheetData>" +
      (hyperlinks.length ? "<hyperlinks>" + hyperlinks.join("") + "</hyperlinks>" : "") +
      "</worksheet>";

    var contentTypes =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
      '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>' +
      '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' +
      "</Types>";

    var rootRels =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>' +
      "</Relationships>";

    var workbook =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
      '<sheets><sheet name="Laglista" sheetId="1" r:id="rId1"/></sheets></workbook>';

    var wbRels =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>' +
      '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
      "</Relationships>";

    var styles =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
      '<fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts>' +
      '<fills count="1"><fill><patternFill patternType="none"/></fill></fills>' +
      '<borders count="1"><border/></borders>' +
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
      '<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>' +
      '<xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs>' +
      "</styleSheet>";

    var filesArr = [
      { name: "[Content_Types].xml", data: str(contentTypes) },
      { name: "_rels/.rels", data: str(rootRels) },
      { name: "xl/workbook.xml", data: str(workbook) },
      { name: "xl/_rels/workbook.xml.rels", data: str(wbRels) },
      { name: "xl/styles.xml", data: str(styles) },
      { name: "xl/worksheets/sheet1.xml", data: str(sheet) }
    ];
    if (rels.length) {
      filesArr.push({
        name: "xl/worksheets/_rels/sheet1.xml.rels",
        data: str(
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
            rels.join("") +
            "</Relationships>"
        )
      });
    }
    return zip(filesArr);
  }

  var HEADERS = ["ID", "Lagnamn", "Beteckning", "Lagtyp", "Länk till lagtext", "Ansvarig"];

  function rowsForList(list, laws) {
    var byId = {};
    (laws || []).forEach(function (l) {
      byId[l.id] = l;
    });
    var rows = [];
    (list.lawIds || []).forEach(function (id) {
      var law = byId[id];
      if (!law) return;
      rows.push([
        rows.length + 1,
        law.title || "",
        law.sfs || "",
        deriveLagtyp(law),
        law.link || "",
        "" // Ansvarig – fylls i av användaren
      ]);
    });
    return rows;
  }

  // ---- Browser: nedladdning + UI ----
  function loadLists() {
    try {
      var d = JSON.parse(localStorage.getItem(LISTS_KEY));
      return Array.isArray(d) ? d : [];
    } catch (e) {
      return [];
    }
  }
  function sanitize(name) {
    return (name || "lista").replace(/[^\wåäöÅÄÖ\- ]+/g, "").trim().replace(/\s+/g, "-") || "lista";
  }
  function download(bytes, filename) {
    var blob = new Blob([bytes], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }
  function exportList(list) {
    var rows = rowsForList(list, global.LAWS || []);
    var bytes = buildWorkbook(HEADERS, rows, 4);
    download(bytes, "lagkompassen-" + sanitize(list.name) + ".xlsx");
  }
  function exportById(id) {
    var list = loadLists().filter(function (l) {
      return l.id === id;
    })[0];
    if (list) exportList(list);
  }

  var EXPORT_SVG =
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';

  function injectIntoModal() {
    var mb = document.getElementById("listsModalBody");
    if (!mb) return;
    mb.querySelectorAll(".list-item").forEach(function (item) {
      var actions = item.querySelector(".list-item-actions");
      if (!actions || actions.querySelector(".lkx-btn")) return;
      var id = item.getAttribute("data-list");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "icon-btn lkx-btn";
      btn.title = "Exportera till Excel";
      btn.setAttribute("aria-label", "Exportera listan till Excel");
      btn.innerHTML = EXPORT_SVG;
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        exportById(id);
      });
      actions.insertBefore(btn, actions.firstChild);
    });
  }

  function initUI() {
    var mb = document.getElementById("listsModalBody");
    if (!mb) return;
    var obs = new MutationObserver(function () {
      injectIntoModal();
    });
    obs.observe(mb, { childList: true, subtree: true });
    injectIntoModal();
  }

  if (global.document) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initUI);
    } else {
      initUI();
    }
  }

  // Exportera pure-funktioner för test i Node.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { buildWorkbook, zip, crc32, deriveLagtyp, rowsForList, HEADERS };
  }
})(typeof window !== "undefined" ? window : globalThis);
