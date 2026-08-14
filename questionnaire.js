/*
 * Lagkompassen – Lagguiden.
 * En självständig modul som ställer frågor om organisationen och genererar
 * rekommendationer om vilka lagar som är relevanta. Rekommendationerna kan
 * sparas som en lista (samma lagringsformat som "Mina listor").
 *
 * Modulen är fristående: den injicerar egen knapp, egen guide (modal) och
 * egna stilar, och läser lagdata från window.LAWS.
 */
(function () {
  "use strict";

  var LISTS_KEY = "lagkompassen.lists.v1";
  var laws = window.LAWS || [];
  var lawById = {};
  laws.forEach(function (l) {
    lawById[l.id] = l;
  });

  // Lagar som gäller praktiskt taget alla verksamheter.
  var BASELINE = ["miljobalken", "avfallsforordningen"];
  var BASELINE_REASON = "Gäller praktiskt taget alla verksamheter";

  var QUESTIONS = [
    {
      id: "storlek",
      title: "Hur stort är företaget?",
      help: "Räkna ungefär antal anställda och årsomsättning. Enkelt uttryckt: ju större företag, desto fler krav – riktigt stora företag måste t.ex. göra en hållbarhetsrapport och en energikartläggning. Är du osäker, välj det som ligger närmast.",
      multi: false,
      options: [
        { label: "Litet – färre än ca 50 anställda", laws: [] },
        { label: "Medelstort – ca 50–249 anställda", laws: [] },
        {
          label:
            "Stort – minst 250 anställda, eller omsättning över ~500 mkr och balansomslutning över ~430 mkr",
          laws: ["energikartlaggning", "hallbarhetsrapport", "taxonomin", "csddd"]
        }
      ]
    },
    {
      id: "anstallda",
      title: "Har ni anställd personal?",
      help: "Så fort ni har minst en anställd har ni ett arbetsgivaransvar för arbetsmiljön. Då gäller flera grundläggande arbetsmiljöregler – t.ex. att jobba systematiskt med arbetsmiljön, se till att lokaler och utrustning är säkra och att följa arbetstidsreglerna. Är ni ett enmansföretag utan anställda? Välj Nej.",
      multi: false,
      options: [
        {
          label: "Ja, vi har anställd personal",
          laws: [
            "arbetsmiljolagen",
            "arbetsmiljoforordningen",
            "systematiskt-arbetsmiljoarbete",
            "planering-organisering-am",
            "risker-arbetsmiljo",
            "arbetsplatsens-utformning",
            "arbetstidslagen",
            "diskrimineringslagen",
            "arbetsskadeforsakring"
          ]
        },
        { label: "Nej, inga anställda (t.ex. enmansföretag)", laws: [] }
      ]
    },
    {
      id: "arbetsmiljo",
      title: "Förekommer något av detta i arbetet?",
      help: "Vissa arbetsmoment har extra arbetsmiljöregler. Maskiner, verktyg och skyddsutrustning kräver säker användning och ibland besiktning. Bygg- och anläggningsarbete samt asbest kräver särskild samordning och skydd. Och vissa arbeten – t.ex. med härdplaster, mycket buller, vibrationer eller nattarbete – kräver regelbundna hälsokontroller. Kryssa i det som stämmer.",
      multi: true,
      options: [
        { label: "Maskiner, verktyg, lyftanordningar eller personlig skyddsutrustning", laws: ["arbetsutrustning-ppe"] },
        { label: "Bygg- och anläggningsarbete, eller arbete med asbest/kvarts", laws: ["risker-vissa-arbeten", "projektering-byggsamordning"] },
        { label: "Arbete som kan kräva hälsokontroller (härdplast, buller, vibrationer, nattarbete, höjd)", laws: ["medicinska-kontroller"] },
        { label: "Luftföroreningar som damm, rök, gaser eller ånga", laws: ["gransvarden-luftvagsexponering"] }
      ]
    },
    {
      id: "tillstand",
      title: "Behöver ni ett godkännande (tillstånd eller anmälan) för att driva verksamheten?",
      help: "Menar: måste ni ha ett ja från kommunen eller länsstyrelsen innan ni får bedriva verksamheten? Det är vanligt för t.ex. verkstäder, lackerare, livsmedelstillverkning, lantbruk med djur samt bygg- och avfallsanläggningar. \"A/B\" betyder att det krävs ett tillstånd, \"C\" att det räcker med en anmälan. Vet du inte? Fråga kommunens miljökontor, eller välj \"Nej eller osäker\".",
      multi: false,
      options: [
        {
          label: "Ja – tillståndspliktig (A- eller B-verksamhet)",
          laws: [
            "miljofarlig-verksamhet",
            "miljoprovningsforordningen",
            "egenkontroll",
            "miljosanktionsavgifter",
            "miljorapport",
            "miljobedomning-mkb",
            "provnings-tillsynsavgift"
          ]
        },
        {
          label: "Ja – anmälningspliktig (C-verksamhet)",
          laws: [
            "miljofarlig-verksamhet",
            "miljoprovningsforordningen",
            "egenkontroll",
            "miljosanktionsavgifter",
            "provnings-tillsynsavgift"
          ]
        },
        { label: "Nej eller osäker", laws: [] }
      ]
    },
    {
      id: "industri",
      title: "Är ni en stor, tung industri?",
      help: "Det här gäller bara riktigt stora industrier som släpper ut mycket – t.ex. raffinaderier, stålverk, massabruk och stora kemi- eller energianläggningar. Är ni ett kontor, en butik, en verkstad eller ett mindre företag? Då väljer du \"Nej\".",
      multi: false,
      options: [
        { label: "Ja", laws: ["industriutslapp"] },
        { label: "Nej", laws: [] }
      ]
    },
    {
      id: "kemikalier",
      title: "Använder eller säljer ni kemiska produkter?",
      help: "Med kemiska produkter menas vardagliga saker som rengöringsmedel, lösningsmedel, färg, lim, oljor och sprayer – sånt som har en innehållsförteckning och ofta varningssymboler på förpackningen. Använder ni bara sådant i verksamheten? Välj det första. Tillverkar, importerar eller säljer ni själva kemiska produkter? Kryssa även i det andra. (Välj det som stämmer.)",
      multi: true,
      options: [
        { label: "Vi använder kemiska produkter i verksamheten", laws: ["kemikalier-reach", "egenkontroll", "voc-losningsmedel"] },
        { label: "Vi tillverkar, importerar eller säljer kemiska produkter", laws: ["kemikalier-reach", "clp", "kemiska-produkter-produktregister", "farligt-gods"] }
      ]
    },
    {
      id: "specialkem",
      title: "Hanterar ni några särskilt reglerade ämnen?",
      help: "Det här är kemikalier med extra hårda regler. Biocider är ämnen som dödar organismer – t.ex. handsprit, myggmedel, träskyddsmedel, båtbottenfärg och råttgift. Växtskyddsmedel bekämpar ogräs och insekter i odling. PFAS och flamskyddsmedel finns bl.a. i impregnering, brandsläckningsskum och viss elektronik. Känner du inte igen något av detta? Hoppa bara vidare.",
      multi: true,
      options: [
        { label: "Biocider (desinfektion, träskydd, råttgift, båtbottenfärg)", laws: ["biocider"] },
        { label: "Växtskyddsmedel (odling, golfbana, trädgård)", laws: ["vaxtskyddsmedel"] },
        { label: "PFAS, flamskyddsmedel eller andra långlivade ämnen", laws: ["pops"] },
        { label: "Kvicksilver eller kvicksilverhaltiga varor", laws: ["kvicksilver"] }
      ]
    },
    {
      id: "koldmedier",
      title: "Har ni kyl, frys, värmepump eller luftkonditionering?",
      help: "Köldmedier är gasen som gör att kyla fungerar, och den finns i kylar, frysar, kylrum, värmepumpar och luftkonditionering. Har ni sådan utrustning i verksamheten? Välj Ja. (Reglerna börjar gälla från en viss mängd, men det är bra att känna till dem oavsett.)",
      multi: false,
      options: [
        { label: "Ja", laws: ["fgaser", "ozonnedbrytande"] },
        { label: "Nej", laws: [] }
      ]
    },
    {
      id: "cistern",
      title: "Har ni en tank (cistern) för olja, diesel eller spillolja?",
      help: "En cistern är helt enkelt en tank där man lagrar vätska – oftast eldningsolja, diesel eller spillolja. Den kan stå i källaren, garaget eller ute på gården. Har ni någon sådan tank? Välj Ja.",
      multi: false,
      options: [
        { label: "Ja", laws: ["cisterner", "brandfarliga-explosiva"] },
        { label: "Nej", laws: [] }
      ]
    },
    {
      id: "fastighet",
      title: "Äger eller sköter ni byggnader eller mark?",
      help: "Frågan gäller om ni äger eller förvaltar hus eller mark. Varför det spelar roll: hus byggda eller renoverade 1956–1973 kan innehålla giftig PCB i fogar; uthyrning, försäljning och stora publika lokaler kräver ofta en energideklaration; och bygge nära stränder/naturområden eller arbeten i vatten (brygga, muddring, dränering) kräver oftast tillstånd. Kryssa i det som stämmer.",
      multi: true,
      options: [
        { label: "Vi äger byggnader byggda eller renoverade 1956–1973", laws: ["pcb"] },
        { label: "Vi hyr ut, säljer eller har större publika lokaler", laws: ["energideklaration"] },
        { label: "Vi planerar bygge/verksamhet nära strand eller skyddat naturområde", laws: ["naturvardslagen-strandskydd", "artskyddsforordningen"] },
        { label: "Vi utför arbeten i vatten (muddring, brygga, markavvattning, vattenuttag)", laws: ["vattenverksamhet"] },
        { label: "Vi äger eller använder industri-/verksamhetsmark (risk för förorening)", laws: ["fororenade-omraden"] }
      ]
    },
    {
      id: "produkter",
      title: "Tillverkar, importerar eller säljer ni fysiska produkter?",
      help: "Detta gäller om ni sätter produkter på marknaden – alltså tillverkar dem, tar in dem från utlandet eller säljer dem vidare – inte om ni bara använder dem själva. Kryssa i de produkttyper det gäller. Varje typ har egna krav på t.ex. märkning, återvinning och vilka ämnen som är tillåtna.",
      multi: true,
      options: [
        {
          label: "Elektronik / elutrustning",
          laws: ["producentansvar-elutrustning", "rohs", "kemikalieskatt", "ekodesign-espr", "energimarkning"]
        },
        { label: "Batterier (även inbyggda i produkter)", laws: ["producentansvar-batterier", "eu-batteriforordning"] },
        { label: "Däck", laws: ["producentansvar-dack"] },
        { label: "Bilar eller lätta lastbilar", laws: ["producentansvar-bilar"] },
        { label: "Energirelaterade produkter (vitvaror, belysning m.m.)", laws: ["energimarkning", "ekodesign-espr"] },
        { label: "Maskiner, tryckkärl, ställningar eller ATEX-utrustning (som ni tillverkar/släpper ut på marknaden)", laws: ["produkter-maskiner", "produkter-tryckbarande", "produkter-enkla-tryckkarl", "produkter-atex", "produkter-hojdutrustning"] }
      ]
    },
    {
      id: "forpackningar",
      title: "Skickar ni ut förpackningar eller förpackade varor på marknaden?",
      help: "Med förpackning menas allt som omsluter en vara: kartonger, wellådor, plastpåsar, burkar – även själva lådan ni packar era produkter i. Det gäller också import och e-handel som skickar varor till svenska kunder. Gör ni något av detta? Välj Ja.",
      multi: false,
      options: [
        { label: "Ja", laws: ["producentansvar-forpackningar"] },
        { label: "Nej", laws: [] }
      ]
    },
    {
      id: "konsument",
      title: "Säljer ni till privatpersoner?",
      help: "Frågan gäller försäljning direkt till konsument. Två saker har extra regler: butiker som lämnar ut plastkassar, och serveringsställen (restaurang, café, take-away) som använder engångsartiklar som muggar, matlådor och bestick. Kryssa i det som stämmer för er.",
      multi: true,
      options: [
        { label: "Butik som tillhandahåller plastbärkassar", laws: ["plastbarkassar"] },
        { label: "Restaurang, café eller take-away med engångsartiklar", laws: ["engangsplast", "producentansvar-forpackningar"] }
      ]
    },
    {
      id: "avfall",
      title: "Hanterar ni avfall på något särskilt sätt?",
      help: "Utöver den vanliga sopsorteringen som alla har: skickar ni avfall till eller från utlandet, lämnar ni avfall till deponi (soptipp) eller eldar/förbränner ni avfall? Kryssa i det som stämmer. Gör ni inget av detta – hoppa bara vidare.",
      multi: true,
      options: [
        { label: "Vi transporterar avfall över landsgräns (export/import)", laws: ["avfallstransport-gransoverskridande"] },
        { label: "Vi deponerar avfall eller lämnar avfall till deponi", laws: ["deponering"] },
        { label: "Vi förbränner eller samförbränner avfall", laws: ["avfallsforbranning"] },
        { label: "Vi bedriver bygg-, rivnings- eller anläggningsarbete (bygg- och rivningsavfall)", laws: ["byggrivningsavfall"] }
      ]
    },
    {
      id: "utslapp",
      title: "Påverkar er verksamhet luft, vatten eller ljudnivå i omgivningen?",
      help: "Frågan handlar om vad som lämnar er verksamhet och kan störa omgivningen: rök, damm eller avgaser till luften; utsläpp till eller uttag av vatten; buller som grannar kan störas av; eller smutsigt process- eller spillvatten som går till avloppet. Kryssa i det som stämmer.",
      multi: true,
      options: [
        { label: "Utsläpp till luft (processer, förbränning, damning)", laws: ["luftkvalitet"] },
        { label: "Buller mot bostäder eller omgivning", laws: ["verksamhetsbuller"] },
        { label: "Utsläpp till vatten eller vattenuttag", laws: ["vattenforvaltning"] },
        { label: "Industriellt avloppsvatten till kommunalt nät", laws: ["vattentjanster"] }
      ]
    },
    {
      id: "energiklimat",
      title: "Berörs ni av något på energi- och klimatområdet?",
      help: "Det här är mest för energitunga företag och importörer. Kort förklarat: EU ETS = stora anläggningar som måste köpa utsläppsrätter för sin koldioxid; drivmedel = ni säljer bensin, diesel eller biobränsle; CBAM = ni importerar stål, aluminium, cement m.m. från länder utanför EU; stor el- eller bränsleförbrukning kan ge rätt till återbetald skatt. Kryssa i det som stämmer, annars hoppa vidare.",
      multi: true,
      options: [
        { label: "Energiintensiv anläggning inom EU:s utsläppshandel (EU ETS)", laws: ["utslappsratter"] },
        { label: "Vi levererar drivmedel (bensin, diesel, biodrivmedel)", laws: ["reduktionsplikt", "drivmedelslagen"] },
        { label: "Vi importerar stål, aluminium, cement, gödsel, väte eller el (CBAM)", laws: ["cbam"] },
        { label: "Stor förbrukning av el eller bränsle (möjlig energiskatteåterbetalning)", laws: ["energiskatt"] },
        { label: "Vi producerar förnybar el", laws: ["elcertifikat"] }
      ]
    },
    {
      id: "leverantorskedja",
      title: "Köper ni in eller säljer vidare något av dessa råvaror?",
      help: "Frågan handlar om vad ni köper in eller säljer vidare. Tre saker har särskilda krav: råvaror kopplade till skövling av skog (trä, soja, palmolja, kakao, kaffe, gummi, nötkött), så kallade konfliktmineraler (tenn, tantal, volfram och guld – finns bl.a. i elektronik), och stora mängder farliga kemikalier. Kryssa i det som stämmer.",
      multi: true,
      options: [
        { label: "Trä, soja, palmolja, kakao, kaffe, gummi eller nötkött", laws: ["eudr"] },
        { label: "Mineralerna tenn, tantal, volfram eller guld (3TG)", laws: ["konfliktmineraler"] },
        { label: "Stora mängder farliga kemikalier (möjlig Seveso-verksamhet)", laws: ["seveso"] }
      ]
    }
  ];

  // ---- Tillstånd ----
  var answers = {}; // qid -> [optionIndex,...]
  var step = -1; // -1 = intro, 0..n-1 = frågor, n = resultat
  var companyName = "";
  var overlay, modal, body;

  // ---- Lagring av listor (samma format som app.js) ----
  function loadLists() {
    try {
      var d = JSON.parse(localStorage.getItem(LISTS_KEY));
      return Array.isArray(d) ? d : [];
    } catch (e) {
      return [];
    }
  }
  function saveLists(lists) {
    try {
      localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
    } catch (e) {
      /* ignorera */
    }
  }
  function uid() {
    return "l" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---- Rekommendationer ----
  function computeRecommendations() {
    var map = {}; // lawId -> {law, reasons:{}}
    function add(lawId, reason) {
      if (!lawById[lawId]) return;
      if (!map[lawId]) map[lawId] = { law: lawById[lawId], reasons: {} };
      map[lawId].reasons[reason] = true;
    }
    BASELINE.forEach(function (id) {
      add(id, BASELINE_REASON);
    });
    QUESTIONS.forEach(function (q) {
      var sel = answers[q.id] || [];
      sel.forEach(function (i) {
        var opt = q.options[i];
        if (!opt) return;
        opt.laws.forEach(function (lawId) {
          add(lawId, opt.label);
        });
      });
    });
    var out = [];
    Object.keys(map).forEach(function (id) {
      out.push({ law: map[id].law, reasons: Object.keys(map[id].reasons) });
    });
    out.sort(function (a, b) {
      return (
        a.law.category.localeCompare(b.law.category, "sv") ||
        a.law.title.localeCompare(b.law.title, "sv")
      );
    });
    return out;
  }

  // ---- DOM: bygg guide-modal och knapp ----
  function buildShell() {
    overlay = document.createElement("div");
    overlay.className = "lkq-overlay";
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="lkq-modal" role="dialog" aria-modal="true" aria-label="Lagguiden">' +
      '<button type="button" class="lkq-close" aria-label="Stäng">&times;</button>' +
      '<div class="lkq-body"></div>' +
      "</div>";
    document.body.appendChild(overlay);
    body = overlay.querySelector(".lkq-body");
    overlay.querySelector(".lkq-close").addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !overlay.hidden) close();
    });
  }

  function buildCta() {
    var host = document.querySelector(".hero .container") || document.querySelector("main");
    if (!host) return;
    var cta = document.createElement("div");
    cta.className = "lkq-cta";
    cta.innerHTML =
      '<div class="lkq-cta-text">' +
      "<strong>Vet du inte vilka lagar som gäller er?</strong>" +
      "<span>Svara på ett par frågor om verksamheten så föreslår vi relevanta lagar – och sparar dem som en lista.</span>" +
      "</div>" +
      '<button type="button" class="lkq-cta-btn">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>' +
      "Starta lagguiden</button>";
    var filters = host.querySelector("#categoryFilters");
    if (filters && filters.parentNode === host) host.insertBefore(cta, filters);
    else host.appendChild(cta);
    cta.querySelector(".lkq-cta-btn").addEventListener("click", open);
  }

  function open() {
    step = -1;
    answers = {};
    render();
    overlay.hidden = false;
    document.body.classList.add("modal-open");
  }
  function close() {
    overlay.hidden = true;
    if (document.getElementById("modalOverlay") && document.getElementById("modalOverlay").hidden) {
      document.body.classList.remove("modal-open");
    }
  }

  // ---- Rendering ----
  function render() {
    if (step === -1) return renderIntro();
    if (step >= QUESTIONS.length) return renderResults();
    return renderQuestion();
  }

  function renderIntro() {
    body.innerHTML =
      '<div class="lkq-intro">' +
      '<div class="lkq-badge">Lagguiden</div>' +
      "<h2>Vilka lagar gäller er?</h2>" +
      "<p>Svara på " +
      QUESTIONS.length +
      " korta frågor om er verksamhet. Varje fråga förklaras med vardagliga ord och exempel. Utifrån svaren föreslår vi vilka miljö-, hållbarhets- och arbetsmiljölagar som troligen berör er. Det tar under en minut.</p>" +
      '<label class="lkq-field"><span>Företagets namn (valfritt)</span>' +
      '<input type="text" id="lkqCompany" maxlength="80" placeholder="t.ex. Exempel AB" value="' +
      escapeHtml(companyName) +
      '" /></label>' +
      '<div class="lkq-actions"><button type="button" class="lkq-primary" id="lkqStart">Starta guiden</button></div>' +
      '<p class="lkq-note">Guiden ger vägledning, inte juridisk rådgivning. Inget skickas någonstans – dina svar stannar i webbläsaren.</p>' +
      "</div>";
    body.querySelector("#lkqStart").addEventListener("click", function () {
      var inp = body.querySelector("#lkqCompany");
      companyName = inp ? inp.value.trim() : "";
      step = 0;
      render();
    });
  }

  function renderQuestion() {
    var q = QUESTIONS[step];
    var sel = answers[q.id] || [];
    var pct = Math.round(((step + 1) / QUESTIONS.length) * 100);
    var opts = q.options
      .map(function (opt, i) {
        var on = sel.indexOf(i) !== -1;
        return (
          '<button type="button" class="lkq-opt' +
          (on ? " on" : "") +
          '" data-i="' +
          i +
          '">' +
          '<span class="lkq-mark" aria-hidden="true"></span>' +
          '<span class="lkq-opt-label">' +
          escapeHtml(opt.label) +
          "</span>" +
          "</button>"
        );
      })
      .join("");

    body.innerHTML =
      '<div class="lkq-qhead">' +
      '<div class="lkq-progress"><div class="lkq-progress-fill" style="width:' +
      pct +
      '%"></div></div>' +
      '<div class="lkq-step">Fråga ' +
      (step + 1) +
      " av " +
      QUESTIONS.length +
      "</div>" +
      "</div>" +
      '<div class="lkq-q">' +
      "<h2>" +
      escapeHtml(q.title) +
      "</h2>" +
      (q.help ? '<p class="lkq-help">' + escapeHtml(q.help) + "</p>" : "") +
      '<div class="lkq-options' +
      (q.multi ? " multi" : "") +
      '">' +
      opts +
      "</div>" +
      "</div>" +
      '<div class="lkq-actions">' +
      '<button type="button" class="lkq-ghost" id="lkqBack">Tillbaka</button>' +
      (q.multi
        ? '<button type="button" class="lkq-primary" id="lkqNext">' +
          (step === QUESTIONS.length - 1 ? "Visa resultat" : "Nästa") +
          "</button>"
        : "") +
      "</div>";

    body.querySelectorAll(".lkq-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var i = Number(btn.dataset.i);
        var cur = answers[q.id] || [];
        if (q.multi) {
          var pos = cur.indexOf(i);
          if (pos === -1) cur = cur.concat([i]);
          else cur = cur.filter(function (x) { return x !== i; });
          answers[q.id] = cur;
          btn.classList.toggle("on");
        } else {
          answers[q.id] = [i];
          // enkelval går vidare automatiskt
          next();
        }
      });
    });
    body.querySelector("#lkqBack").addEventListener("click", back);
    var nextBtn = body.querySelector("#lkqNext");
    if (nextBtn) nextBtn.addEventListener("click", next);
  }

  function next() {
    step++;
    render();
  }
  function back() {
    step--;
    if (step < -1) step = -1;
    render();
  }

  function renderResults() {
    var recs = computeRecommendations();
    var lists = loadLists();
    var who = companyName ? escapeHtml(companyName) : "er verksamhet";

    // Gruppera per kategori
    var groups = {};
    recs.forEach(function (r) {
      (groups[r.law.category] = groups[r.law.category] || []).push(r);
    });
    var cats = Object.keys(groups).sort(function (a, b) {
      return a.localeCompare(b, "sv");
    });

    var listHtml = cats
      .map(function (cat) {
        var items = groups[cat]
          .map(function (r) {
            return (
              '<label class="lkq-rec">' +
              '<input type="checkbox" class="lkq-rec-cb" data-id="' +
              escapeHtml(r.law.id) +
              '" checked />' +
              '<span class="lkq-rec-main">' +
              '<span class="lkq-rec-title">' +
              escapeHtml(r.law.title) +
              ' <span class="lkq-rec-sfs">' +
              escapeHtml(r.law.sfs) +
              "</span></span>" +
              '<span class="lkq-rec-why">' +
              escapeHtml(r.reasons.join(" · ")) +
              "</span>" +
              "</span>" +
              '<button type="button" class="lkq-rec-open" data-open="' +
              escapeHtml(r.law.id) +
              '">Läs mer</button>' +
              "</label>"
            );
          })
          .join("");
        return '<div class="lkq-group"><div class="lkq-group-title">' + escapeHtml(cat) + "</div>" + items + "</div>";
      })
      .join("");

    var existingOpts = lists
      .map(function (l) {
        return '<option value="' + escapeHtml(l.id) + '">' + escapeHtml(l.name) + " (" + l.lawIds.length + ")</option>";
      })
      .join("");

    body.innerHTML =
      '<div class="lkq-results">' +
      '<div class="lkq-badge">Resultat</div>' +
      "<h2>Rekommenderade lagar för " +
      who +
      "</h2>" +
      '<p class="lkq-results-sub">Baserat på dina svar bör <strong>' +
      recs.length +
      " lagar</strong> vara relevanta. Bocka av de du vill spara och lägg dem i en lista.</p>" +
      '<div class="lkq-rec-list">' +
      listHtml +
      "</div>" +
      '<div class="lkq-save">' +
      '<div class="lkq-save-row">' +
      '<input type="text" id="lkqListName" maxlength="60" placeholder="Namn på ny lista" value="' +
      escapeHtml(companyName ? "Lagar för " + companyName : "Våra lagar") +
      '" />' +
      '<button type="button" class="lkq-primary" id="lkqSaveNew">Skapa lista</button>' +
      "</div>" +
      (lists.length
        ? '<div class="lkq-save-row"><select id="lkqExisting"><option value="">Lägg till i befintlig lista…</option>' +
          existingOpts +
          '</select><button type="button" class="lkq-ghost" id="lkqSaveExisting">Lägg till</button></div>'
        : "") +
      '<div class="lkq-save-msg" id="lkqSaveMsg" hidden></div>' +
      "</div>" +
      '<div class="lkq-actions">' +
      '<button type="button" class="lkq-ghost" id="lkqBack">Tillbaka</button>' +
      '<button type="button" class="lkq-ghost" id="lkqRestart">Börja om</button>' +
      "</div>" +
      '<p class="lkq-note">Vägledning, inte juridisk rådgivning. Kontrollera alltid aktuell lydelse och stäm av med din tillsynsmyndighet.</p>' +
      "</div>";

    function selectedIds() {
      return Array.prototype.slice
        .call(body.querySelectorAll(".lkq-rec-cb"))
        .filter(function (cb) { return cb.checked; })
        .map(function (cb) { return cb.dataset.id; });
    }

    body.querySelectorAll(".lkq-rec-open").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var id = btn.dataset.open;
        close();
        location.hash = "lag/" + id; // app.js öppnar lagen
      });
    });

    body.querySelector("#lkqSaveNew").addEventListener("click", function () {
      var ids = selectedIds();
      if (!ids.length) return showMsg("Välj minst en lag att spara.", false);
      var name = (body.querySelector("#lkqListName").value || "").trim() || "Våra lagar";
      var lists2 = loadLists();
      var list = { id: uid(), name: name, lawIds: ids.slice(), createdAt: Date.now() };
      lists2.push(list);
      saveLists(lists2);
      afterSave(name, ids.length);
    });

    var saveExisting = body.querySelector("#lkqSaveExisting");
    if (saveExisting) {
      saveExisting.addEventListener("click", function () {
        var sel = body.querySelector("#lkqExisting");
        var id = sel ? sel.value : "";
        if (!id) return showMsg("Välj en lista.", false);
        var ids = selectedIds();
        if (!ids.length) return showMsg("Välj minst en lag att spara.", false);
        var lists2 = loadLists();
        var list = lists2.filter(function (l) { return l.id === id; })[0];
        if (!list) return showMsg("Listan hittades inte.", false);
        var added = 0;
        ids.forEach(function (lid) {
          if (list.lawIds.indexOf(lid) === -1) {
            list.lawIds.push(lid);
            added++;
          }
        });
        saveLists(lists2);
        afterSave(list.name, added);
      });
    }

    body.querySelector("#lkqBack").addEventListener("click", back);
    body.querySelector("#lkqRestart").addEventListener("click", function () {
      step = -1;
      answers = {};
      render();
    });

    function showMsg(text, ok) {
      var el = body.querySelector("#lkqSaveMsg");
      el.hidden = false;
      el.className = "lkq-save-msg" + (ok ? " ok" : " warn");
      el.innerHTML = escapeHtml(text);
    }
    function afterSave(name, count) {
      var el = body.querySelector("#lkqSaveMsg");
      el.hidden = false;
      el.className = "lkq-save-msg ok";
      el.innerHTML =
        "✓ Sparade " +
        count +
        " lag" +
        (count === 1 ? "" : "ar") +
        " i listan <strong>" +
        escapeHtml(name) +
        "</strong>. " +
        '<button type="button" class="lkq-link" id="lkqReload">Visa i Mina listor</button>';
      var r = el.querySelector("#lkqReload");
      if (r) r.addEventListener("click", function () { location.reload(); });
    }
  }

  // ---- Stilar ----
  function injectStyles() {
    if (document.getElementById("lkq-styles")) return;
    var css =
      ".lkq-cta{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:18px;padding:16px 20px;background:linear-gradient(100deg,var(--primary-soft),#fff);border:1px solid #cfe6da;border-radius:14px}" +
      ".lkq-cta-text{display:flex;flex-direction:column;gap:2px}" +
      ".lkq-cta-text strong{font-size:1rem;color:var(--ink)}" +
      ".lkq-cta-text span{font-size:.88rem;color:var(--ink-soft)}" +
      ".lkq-cta-btn{flex:none;display:inline-flex;align-items:center;gap:8px;border:none;background:var(--primary);color:#fff;font-family:inherit;font-weight:700;font-size:.92rem;padding:12px 18px;border-radius:10px;cursor:pointer}" +
      ".lkq-cta-btn:hover{background:var(--primary-dark)}" +
      ".lkq-overlay{position:fixed;inset:0;z-index:55;background:rgba(15,28,21,.55);backdrop-filter:blur(3px);display:flex;align-items:flex-start;justify-content:center;padding:5vh 16px;overflow-y:auto}" +
      ".lkq-overlay[hidden]{display:none}" +
      ".lkq-modal{position:relative;background:var(--surface);border-radius:18px;max-width:640px;width:100%;box-shadow:0 20px 60px rgba(20,36,28,.22)}" +
      ".lkq-close{position:absolute;top:14px;right:14px;width:40px;height:40px;border:none;border-radius:10px;background:var(--bg);font-size:1.6rem;line-height:1;cursor:pointer;color:var(--ink-soft);z-index:2}" +
      ".lkq-close:hover{background:var(--border)}" +
      ".lkq-body{padding:32px 32px 28px}" +
      ".lkq-badge{display:inline-block;padding:5px 11px;border-radius:999px;background:var(--primary-soft);color:var(--primary-dark);font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px}" +
      ".lkq-body h2{margin:0 0 8px;font-size:1.4rem;letter-spacing:-.02em;line-height:1.2}" +
      ".lkq-intro p{color:var(--ink-soft);font-size:.98rem;margin:0 0 18px}" +
      ".lkq-field{display:block;margin-bottom:18px}" +
      ".lkq-field span{display:block;font-size:.82rem;font-weight:600;color:var(--ink-soft);margin-bottom:6px}" +
      ".lkq-field input{width:100%;border:1px solid var(--border);border-radius:10px;padding:11px 14px;font-family:inherit;font-size:.98rem}" +
      ".lkq-field input:focus-visible{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-soft)}" +
      ".lkq-note{font-size:.8rem;color:var(--ink-faint);margin:16px 0 0}" +
      ".lkq-qhead{margin-bottom:18px}" +
      ".lkq-progress{height:8px;background:var(--border);border-radius:999px;overflow:hidden;margin-bottom:8px}" +
      ".lkq-progress-fill{height:100%;background:linear-gradient(90deg,var(--primary),var(--accent));border-radius:999px;transition:width .25s ease}" +
      ".lkq-step{font-size:.8rem;color:var(--ink-faint);font-weight:600}" +
      ".lkq-help{color:var(--ink-soft);font-size:.94rem;line-height:1.5;margin:0 0 18px;padding:12px 14px;background:var(--bg);border-radius:10px;border-left:3px solid var(--primary)}" +
      ".lkq-options{display:flex;flex-direction:column;gap:9px}" +
      ".lkq-opt{display:flex;align-items:flex-start;gap:12px;width:100%;text-align:left;border:1px solid var(--border);background:var(--surface);border-radius:11px;padding:14px 15px;cursor:pointer;font-family:inherit;font-size:.96rem;color:var(--ink);transition:border-color .14s,background .14s}" +
      ".lkq-opt:hover{border-color:var(--primary)}" +
      ".lkq-opt.on{border-color:var(--primary);background:var(--primary-soft)}" +
      ".lkq-mark{flex:none;width:22px;height:22px;border:2px solid var(--border);border-radius:50%;margin-top:1px;position:relative}" +
      ".lkq-options.multi .lkq-mark{border-radius:7px}" +
      ".lkq-opt.on .lkq-mark{border-color:var(--primary);background:var(--primary)}" +
      ".lkq-opt.on .lkq-mark:after{content:'';position:absolute;left:6px;top:2px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}" +
      ".lkq-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:22px}" +
      ".lkq-primary{border:none;background:var(--primary);color:#fff;font-family:inherit;font-weight:700;font-size:.94rem;padding:12px 20px;border-radius:10px;cursor:pointer}" +
      ".lkq-primary:hover{background:var(--primary-dark)}" +
      ".lkq-ghost{border:1px solid var(--border);background:var(--surface);color:var(--ink-soft);font-family:inherit;font-weight:600;font-size:.92rem;padding:11px 18px;border-radius:10px;cursor:pointer}" +
      ".lkq-ghost:hover{border-color:var(--primary);color:var(--primary-dark)}" +
      ".lkq-results-sub{color:var(--ink-soft);font-size:.95rem;margin:0 0 18px}" +
      ".lkq-rec-list{display:flex;flex-direction:column;gap:18px;margin-bottom:22px}" +
      ".lkq-group-title{font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;font-weight:700;color:var(--ink-faint);margin-bottom:8px}" +
      ".lkq-rec{display:flex;align-items:flex-start;gap:12px;padding:12px 14px;border:1px solid var(--border);border-radius:11px;margin-bottom:8px;cursor:pointer}" +
      ".lkq-rec:hover{border-color:#cfe0d6}" +
      ".lkq-rec-cb{margin:2px 0 0;width:20px;height:20px;flex:none;accent-color:var(--primary);cursor:pointer}" +
      ".lkq-rec-main{flex:1;display:flex;flex-direction:column;gap:3px;min-width:0}" +
      ".lkq-rec-title{font-weight:700;font-size:.96rem;color:var(--ink)}" +
      ".lkq-rec-sfs{font-weight:600;font-size:.8rem;color:var(--ink-faint)}" +
      ".lkq-rec-why{font-size:.84rem;color:var(--ink-soft)}" +
      ".lkq-rec-open{flex:none;align-self:center;border:1px solid var(--border);background:var(--surface);color:var(--primary-dark);font-family:inherit;font-weight:600;font-size:.82rem;padding:7px 12px;border-radius:8px;cursor:pointer}" +
      ".lkq-rec-open:hover{border-color:var(--primary);background:var(--primary-soft)}" +
      ".lkq-save{background:var(--bg);border-radius:12px;padding:16px;margin-bottom:18px}" +
      ".lkq-save-row{display:flex;gap:8px;margin-bottom:10px}" +
      ".lkq-save-row:last-child{margin-bottom:0}" +
      ".lkq-save-row input,.lkq-save-row select{flex:1;min-width:0;border:1px solid var(--border);border-radius:9px;padding:10px 12px;font-family:inherit;font-size:.92rem;background:var(--surface)}" +
      ".lkq-save-row input:focus-visible,.lkq-save-row select:focus-visible{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-soft)}" +
      ".lkq-save-msg{font-size:.9rem;margin-top:4px}" +
      ".lkq-save-msg.ok{color:var(--primary-dark)}" +
      ".lkq-save-msg.warn{color:#c0392b}" +
      ".lkq-link{border:none;background:none;color:var(--primary);font-family:inherit;font-weight:700;cursor:pointer;padding:0;text-decoration:underline;font-size:.9rem}" +
      "@media (max-width:560px){.lkq-body{padding:26px 18px 22px}.lkq-rec-open{display:none}}";
    var style = document.createElement("style");
    style.id = "lkq-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ---- Init ----
  function init() {
    if (!laws.length) return;
    injectStyles();
    buildShell();
    buildCta();
    // Varna i konsolen om någon fråga refererar ett okänt lag-id.
    QUESTIONS.forEach(function (q) {
      q.options.forEach(function (o) {
        o.laws.forEach(function (id) {
          if (!lawById[id]) console.warn("Lagguiden: okänt lag-id", id);
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
