/*
 * Lagkompassen – Kemikalieinspektionens krav och andra ISO 14001-relevanta
 * källor. Kompletterar laglistan för certifierade (ISO 14001) verksamheter.
 * Lägger till posterna i window.LAWS (laddas efter data.js).
 */
var KEMI_ISO_LAWS = [
  {
    id: "kifs-kemiska-produkter",
    title: "Kemikalieinspektionens föreskrifter om kemiska produkter (KIFS 2017:7)",
    sfs: "KIFS 2017:7",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen (KemI)",
    updated: "Senast ändrad 2023",
    link: "https://www.kemi.se/lagar-och-regler/lagstiftningar-inom-kemikalieomradet/kifs---kemikalieinspektionens-foreskrifter",
    summary:
      "Kemikalieinspektionens föreskrifter med svenska särkrav för kemiska produkter och biotekniska organismer – bl.a. förbud och begränsningar, krav på tillstånd för särskilt farliga produkter samt regler om bekämpningsmedel.",
    appliesTo: "Företag som tillverkar, importerar, säljer eller yrkesmässigt använder kemiska produkter och bekämpningsmedel.",
    keywords: ["kifs", "kemiska produkter", "tillstånd", "särskilt farliga", "bekämpningsmedel", "begränsning"],
    checklist: [
      "Kontrollera om produkter omfattas av svenska förbud eller begränsningar (KIFS).",
      "Säkerställ tillstånd för yrkesmässig hantering av särskilt farliga kemiska produkter.",
      "Följ krav på godkännande och märkning för bekämpningsmedel.",
      "Håll dokumentation om produkternas innehåll och användning aktuell.",
      "Bevaka ändringar i Kemikalieinspektionens föreskrifter."
    ]
  },
  {
    id: "scip-svhc",
    title: "SCIP-anmälan – farliga ämnen i varor",
    sfs: "EU 2008/98 (avfallsdirektivet), art. 9",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen / ECHA",
    updated: "Gäller sedan 2021",
    link: "https://www.kemi.se/lagar-och-regler/reach-forordningen/scip-anmalan",
    summary:
      "Företag som släpper ut varor på EU-marknaden som innehåller särskilt farliga ämnen (SVHC) över 0,1 vikt-% ska anmäla information om varan och ämnet till ECHA:s SCIP-databas.",
    appliesTo: "Tillverkare, importörer och distributörer av varor som innehåller kandidatförteckningens ämnen (SVHC).",
    keywords: ["scip", "svhc", "kandidatförteckning", "varor", "echa", "farliga ämnen"],
    checklist: [
      "Kartlägg om era varor innehåller SVHC-ämnen över 0,1 vikt-%.",
      "Begär in ämnesinformation från leverantörer i kedjan.",
      "Lämna SCIP-anmälan till ECHA för berörda varor.",
      "Informera mottagare och på begäran konsumenter om SVHC-innehåll.",
      "Uppdatera anmälan när varan eller ämnesinnehållet ändras."
    ]
  },
  {
    id: "tvatt-rengoringsmedel",
    title: "Förordning om tvätt- och rengöringsmedel (EU)",
    sfs: "EU 648/2004",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen (KemI)",
    updated: "EU-förordning",
    link: "https://www.kemi.se/lagar-och-regler/ytterligare-eu-regler/tvatt--och-rengoringsmedel",
    summary:
      "Ställer krav på tvätt- och rengöringsmedel, bl.a. biologisk nedbrytbarhet av tensider, begränsning av fosfater samt innehållsdeklaration och märkning.",
    appliesTo: "Tillverkare, importörer och distributörer av tvätt- och rengöringsmedel.",
    keywords: ["tvättmedel", "rengöringsmedel", "tensider", "fosfater", "nedbrytbarhet", "märkning"],
    checklist: [
      "Säkerställ att tensider är biologiskt nedbrytbara enligt kraven.",
      "Håll fosfathalten inom tillåtna gränser för konsumentprodukter.",
      "Märk produkterna med innehåll och doseringsanvisning.",
      "Tillhandahåll ingrediensdatablad vid behov.",
      "Säkerställ märkning på svenska för den svenska marknaden."
    ]
  },
  {
    id: "godselprodukter",
    title: "EU:s förordning om gödselprodukter",
    sfs: "EU 2019/1009",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen / Jordbruksverket",
    updated: "Tillämpas sedan 2022",
    link: "https://www.kemi.se/lagar-och-regler/ytterligare-eu-regler/godselprodukter",
    summary:
      "Reglerar CE-märkta gödselprodukter som släpps ut på EU-marknaden, med krav på innehåll, gränsvärden för föroreningar (t.ex. kadmium), märkning och överensstämmelse.",
    appliesTo: "Tillverkare, importörer och distributörer av gödselprodukter.",
    keywords: ["gödsel", "gödselprodukter", "ce-märkning", "kadmium", "näringsämnen", "överensstämmelse"],
    checklist: [
      "Avgör om produkten släpps ut som CE-märkt gödselprodukt enligt förordningen.",
      "Säkerställ att gränsvärden för föroreningar (t.ex. kadmium) uppfylls.",
      "Genomför bedömning av överensstämmelse och CE-märk produkten.",
      "Märk med innehåll, näringsämnen och bruksanvisning.",
      "Håll teknisk dokumentation tillgänglig."
    ]
  },
  {
    id: "forbud-kemiska-produkter",
    title: "Förordning om förbud m.m. vid hantering av kemiska produkter",
    sfs: "SFS 1998:944",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen / Naturvårdsverket",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1998944-om-forbud-mm-i-vissa-fall_sfs-1998-944/",
    summary:
      "Innehåller nationella förbud och begränsningar vid hantering, införsel och utförsel av vissa kemiska produkter, t.ex. kadmium, vissa lösningsmedel (trikloreten), rengöringsmedel och spolarvätska.",
    appliesTo: "Företag som hanterar, importerar eller säljer berörda kemiska produkter.",
    keywords: ["förbud", "begränsning", "kadmium", "trikloreten", "kemiska produkter", "dispens"],
    checklist: [
      "Kontrollera om era produkter omfattas av nationella förbud eller begränsningar.",
      "Sluta använda förbjudna ämnen eller ansök om dispens där det är möjligt.",
      "Säkerställ att produkter uppfyller krav på t.ex. spolarvätska och rengöringsmedel.",
      "Dokumentera kontroller och eventuella dispenser."
    ]
  },
  {
    id: "enskilt-avlopp",
    title: "Små avloppsanläggningar (enskilt avlopp)",
    sfs: "Miljöbalken 9 kap. / HVMFS 2016:17",
    category: "Vatten & avlopp",
    authority: "Kommunens miljönämnd / Havs- och vattenmyndigheten",
    updated: "Havs- och vattenmyndighetens föreskrifter",
    link: "https://www.havochvatten.se/vagledning-foreskrifter-och-lagar/vagledningar/sma-avlopp.html",
    summary:
      "Krav på små avloppsanläggningar (enskilt avlopp) som inte är anslutna till kommunalt nät – tillstånd eller anmälan, rening av avloppsvatten och skydd av mark och vatten.",
    appliesTo: "Verksamheter och fastigheter med eget avlopp utanför kommunalt VA (t.ex. på landsbygden).",
    keywords: ["enskilt avlopp", "små avlopp", "avloppsanläggning", "tillstånd", "rening", "landsbygd"],
    checklist: [
      "Kartlägg om verksamheten har eget avlopp som kräver tillstånd eller anmälan.",
      "Sök tillstånd hos kommunen innan en anläggning inrättas eller ändras.",
      "Säkerställ att reningen uppfyller kraven för skyddsnivån i området.",
      "Sköt och underhåll anläggningen och dokumentera egenkontroll.",
      "Beakta skyddsavstånd till dricksvattenbrunnar och vattendrag."
    ]
  }
];

if (typeof window !== "undefined") {
  window.LAWS = (window.LAWS || []).concat(KEMI_ISO_LAWS);
}
