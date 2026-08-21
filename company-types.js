/*
 * Lagkompassen – "Vilka företag berörs?"
 * Visar scanbara verksamhets-/branschtaggar högst upp i varje lags detaljvy,
 * som komplement till fältet "Gäller för". Fristående modul: injicerar i
 * lagmodalen (#modalBody) och läser lag-id från URL:ens #lag/<id>.
 *
 * Mappningen nedan täcker samtliga lagar. Nya lagar utan mappning visas utan
 * taggblock (graciöst).
 */
(function () {
  "use strict";

  var COMPANY_TYPES = {
    // ---- Miljö / hållbarhet (data.js) ----
    miljobalken: ["Alla verksamheter"],
    egenkontroll: ["Tillstånds-/anmälningspliktiga", "Industri", "Verkstad", "Lantbruk"],
    "miljofarlig-verksamhet": ["Industri", "Verkstad", "Lantbruk", "Avfallsverksamhet"],
    avfallsforordningen: ["Alla verksamheter"],
    fgaser: ["Kyl/frys/värmepump/AC", "Livsmedelsbutik", "Fastighet", "Restaurang"],
    "kemikalier-reach": ["Kemikalieföretag", "Tillverkning", "Importörer"],
    clp: ["Kemikalietillverkare", "Importörer", "Distributörer"],
    "producentansvar-forpackningar": ["Tillverkare", "Importörer", "E-handel", "Butik"],
    "producentansvar-elutrustning": ["Elektroniktillverkare", "Importörer", "Elektronikhandel"],
    "producentansvar-batterier": ["Batteritillverkare", "Importörer"],
    engangsplast: ["Restaurang & café", "Take-away", "Handel"],
    plastbarkassar: ["Butik", "Dagligvaruhandel"],
    energikartlaggning: ["Stora företag"],
    utslappsratter: ["Energiintensiv industri", "Kraft-/värmeverk"],
    reduktionsplikt: ["Drivmedelsleverantörer"],
    hallbarhetsrapport: ["Stora företag"],
    taxonomin: ["Stora företag", "Finansaktörer"],
    industriutslapp: ["Stor industri"],
    rohs: ["Elektroniktillverkare", "Importörer", "Distributörer"],
    drivmedelslagen: ["Drivmedelsleverantörer", "Bensinstationer"],
    "naturvardslagen-strandskydd": ["Bygg & anläggning", "Exploatörer", "Fastighetsägare"],
    vattenverksamhet: ["Bygg & anläggning", "Marina", "Fastighet vid vatten"],
    avfallsforbranning: ["Förbränningsanläggningar", "Avfallsverksamhet"],
    cbam: ["Importörer (stål, aluminium, cement m.m.)"],
    miljoprovningsforordningen: ["Industri", "Tillverkning", "Lantbruk", "Avfall"],
    miljorapport: ["Tillståndspliktig industri (A/B)"],
    miljosanktionsavgifter: ["Alla med anmälnings-/tillståndskrav"],
    deponering: ["Deponier", "Avfallsverksamhet", "Bygg"],
    "producentansvar-dack": ["Däcktillverkare", "Importörer", "Bilverkstad"],
    "producentansvar-bilar": ["Biltillverkare", "Bilimportörer"],
    "avfallstransport-gransoverskridande": ["Avfallstransportörer", "Export/import"],
    biocider: ["Städ & desinfektion", "Träindustri", "Marina", "Lantbruk"],
    vaxtskyddsmedel: ["Lantbruk", "Trädgård", "Golfbana"],
    pops: ["Kemikalieföretag", "Tillverkning", "Importörer"],
    pcb: ["Fastighetsägare (byggnader 1956–1973)"],
    cisterner: ["Oljetank/cistern", "Lantbruk", "Fastighet", "Åkeri"],
    kemikalieskatt: ["Elektronikimportörer", "Elektroniktillverkare"],
    vattentjanster: ["Anslutna till kommunalt VA"],
    vattenforvaltning: ["Verksamheter med utsläpp till vatten"],
    luftkvalitet: ["Industri", "Verksamheter med luftutsläpp"],
    verksamhetsbuller: ["Industri", "Restaurang", "Verksamhet nära bostäder"],
    "ekodesign-espr": ["Produkttillverkare", "Importörer"],
    energimarkning: ["Tillverkare/handel av energiprodukter"],
    energideklaration: ["Fastighetsägare", "Uthyrare"],
    energiskatt: ["El-/bränsleförbrukande företag", "Industri"],
    seveso: ["Kemikalieintensiv industri"],
    eudr: ["Handel med trä, soja, kaffe m.m."],
    konfliktmineraler: ["Metallimportörer (tenn, tantal, volfram, guld)"],

    // ---- Kompletterande miljö (data-miljo-tillagg.js) ----
    "kemiska-produkter-produktregister": ["Kemikalietillverkare", "Importörer"],
    kvicksilver: ["Kemikalieföretag", "Tandvård", "Industri"],
    ozonnedbrytande: ["Äldre kyl/frys", "Brandskyddsanläggningar"],
    "voc-losningsmedel": ["Lackering", "Tryckeri", "Ytbehandling", "Kemtvätt"],
    "fororenade-omraden": ["Industri", "Fastighetsägare", "Bygg"],
    artskyddsforordningen: ["Bygg & anläggning", "Skogsbruk", "Exploatörer"],
    "miljobedomning-mkb": ["Tillståndspliktiga verksamheter & projekt"],
    nedskrapning: ["Alla verksamheter med utomhusytor"],
    byggrivningsavfall: ["Bygg, rivning & anläggning"],
    "farligt-gods": ["Transport", "Kemikalie-/drivmedelshantering"],
    "brandfarliga-explosiva": ["Gasol/bränsle", "Industri", "Verkstad", "Handel"],
    "provnings-tillsynsavgift": ["Tillstånds-/anmälningspliktiga"],
    elcertifikat: ["Elproducenter (förnybart)", "Elleverantörer"],
    "eu-batteriforordning": ["Batteritillverkare", "Importörer", "Produkttillverkare"],
    csddd: ["Mycket stora företag"],

    // ---- Arbetsmiljö (data-arbetsmiljo.js) ----
    arbetsmiljolagen: ["Alla arbetsgivare"],
    arbetsmiljoforordningen: ["Alla arbetsgivare"],
    "systematiskt-arbetsmiljoarbete": ["Alla arbetsgivare"],
    "planering-organisering-am": ["Alla arbetsgivare"],
    "projektering-byggsamordning": ["Byggherrar", "Projektörer", "Bygg"],
    "produkter-maskiner": ["Maskintillverkare", "Importörer"],
    "produkter-tryckbarande": ["Tillverkare av tryckkärl/pannor"],
    "produkter-enkla-tryckkarl": ["Tillverkare av tryckkärl/kompressorer"],
    "produkter-atex": ["Tillverkare av ATEX-utrustning"],
    "produkter-rojsagsverktyg": ["Tillverkare/handel av skogsredskap"],
    "produkter-hojdutrustning": ["Tillverkare av stegar/ställningar"],
    "risker-arbetsmiljo": ["Alla arbetsgivare"],
    "arbetsutrustning-ppe": ["Arbetsgivare med maskiner/skyddsutrustning"],
    "arbetsplatsens-utformning": ["Alla arbetsgivare med lokaler"],
    "risker-vissa-arbeten": ["Bygg", "Industri med farliga arbeten"],
    "gransvarden-luftvagsexponering": ["Industri", "Verkstad", "Bygg (damm/rök)"],
    "medicinska-kontroller": ["Arbetsgivare med riskfyllt arbete"],
    arbetstidslagen: ["Alla arbetsgivare"],
    "arbetstid-vagtransport": ["Transport & åkeri"],
    "arbetstid-flyg": ["Flygbolag"],
    "vilotid-sjoman": ["Rederier & sjöfart"],
    diskrimineringslagen: ["Alla arbetsgivare"],
    arbetsskadeforsakring: ["Alla arbetsgivare"]
  };

  function currentLawId() {
    var h = (location.hash || "").replace(/^#/, "");
    return h.indexOf("lag/") === 0 ? h.slice(4) : null;
  }
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function inject() {
    var mb = document.getElementById("modalBody");
    if (!mb || mb.querySelector(".ct-block")) return;
    var lawId = currentLawId();
    if (!lawId) return;
    var tags = COMPANY_TYPES[lawId];
    if (!tags || !tags.length) return;

    var block = document.createElement("div");
    block.className = "ct-block";
    block.innerHTML =
      '<div class="ct-label">' +
      '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path></svg>' +
      "Vilka företag berörs?</div>" +
      '<div class="ct-tags">' +
      tags
        .map(function (t) {
          return '<span class="ct-tag">' + escapeHtml(t) + "</span>";
        })
        .join("") +
      "</div>";

    var metaGrid = mb.querySelector(".meta-grid");
    if (metaGrid && metaGrid.parentNode) {
      metaGrid.parentNode.insertBefore(block, metaGrid);
    } else {
      var head = mb.querySelector(".modal-head");
      if (head) head.appendChild(block);
      else mb.insertBefore(block, mb.firstChild);
    }
  }

  function injectStyles() {
    if (document.getElementById("ct-styles")) return;
    var css =
      ".ct-block{margin:0 0 20px;padding:14px 16px;background:var(--primary-soft);border:1px solid #cfe6da;border-radius:12px}" +
      ".ct-label{display:flex;align-items:center;gap:7px;font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;font-weight:700;color:var(--primary-dark);margin-bottom:10px}" +
      ".ct-tags{display:flex;flex-wrap:wrap;gap:7px}" +
      ".ct-tag{display:inline-block;background:var(--surface);border:1px solid #cfe6da;color:var(--ink);font-size:.84rem;font-weight:600;padding:5px 11px;border-radius:999px}";
    var style = document.createElement("style");
    style.id = "ct-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function init() {
    injectStyles();
    var mb = document.getElementById("modalBody");
    if (mb) {
      new MutationObserver(function () {
        inject();
      }).observe(mb, { childList: true, subtree: true });
    }
    inject();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
