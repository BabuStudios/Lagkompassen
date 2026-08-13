/*
 * Lagkompassen – arbetsmiljölagar.
 * Kompletterar data.js med lagar och föreskrifter inom arbetsmiljö.
 * Lägger till posterna i window.LAWS (laddas efter data.js, före app.js).
 *
 * OBS: Arbetsmiljöverket införde en ny föreskriftsstruktur den 1 januari 2025
 * där de tidigare ~67 AFS:erna ersattes av 15 nya (AFS 2023:1–2023:15).
 * Referenserna nedan följer den nya strukturen.
 */
var ARBETSMILJO_LAWS = [
  {
    id: "arbetsmiljolagen",
    title: "Arbetsmiljölagen",
    sfs: "SFS 1977:1160",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Senast ändrad 2024",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/arbetsmiljolag-19771160_sfs-1977-1160/",
    summary:
      "Grundlagen för arbetsmiljön. Arbetsgivaren ansvarar för att förebygga ohälsa och olycksfall och för att arbetsförhållandena är säkra. Reglerar bl.a. samverkan med skyddsombud och skyddskommitté.",
    appliesTo: "Alla arbetsgivare med anställd personal (och i vissa delar även inhyrd personal och egenföretagare).",
    keywords: ["arbetsmiljö", "arbetsgivaransvar", "skyddsombud", "ohälsa", "olycksfall", "arbetsmiljöpolicy"],
    checklist: [
      "Säkerställ att arbetsmiljöansvaret är tydligt utpekat i organisationen.",
      "Förebygg ohälsa och olycksfall genom att undersöka och åtgärda risker.",
      "Utse skyddsombud vid minst fem anställda och samverka kring arbetsmiljön.",
      "Anmäl allvarliga olyckor och tillbud till Arbetsmiljöverket utan dröjsmål.",
      "Ge introduktion och information så att arbetstagare kan arbeta säkert.",
      "Håll arbetsmiljöpolicy och rutiner tillgängliga och aktuella."
    ]
  },
  {
    id: "arbetsmiljoforordningen",
    title: "Arbetsmiljöförordningen",
    sfs: "SFS 1977:1166",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/arbetsmiljoforordning-19771166_sfs-1977-1166/",
    summary:
      "Kompletterar arbetsmiljölagen med bl.a. krav på anmälan av olycksfall och allvarliga tillbud, anslag om skyddsombud samt Arbetsmiljöverkets rätt till tillsyn.",
    appliesTo: "Alla arbetsgivare.",
    keywords: ["anmälan", "tillbud", "olycksfall", "skyddsombud", "tillsyn", "anslag"],
    checklist: [
      "Anmäl dödsfall, svårare personskada och allvarliga tillbud till Arbetsmiljöverket utan dröjsmål.",
      "Sätt upp anslag med information om arbetsmiljölagstiftningen och skyddsombud.",
      "Håll dokumentation tillgänglig vid inspektion.",
      "Följ Arbetsmiljöverkets förelägganden och förbud."
    ]
  },
  {
    id: "systematiskt-arbetsmiljoarbete",
    title: "Systematiskt arbetsmiljöarbete (SAM)",
    sfs: "AFS 2023:1",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20231/",
    summary:
      "Navet i arbetsmiljöreglerna. Arbetsgivaren ska fortlöpande undersöka, riskbedöma, åtgärda och följa upp arbetsmiljön. Ersatte den 1 januari 2025 den tidigare AFS 2001:1.",
    appliesTo: "Alla arbetsgivare, oavsett storlek och bransch.",
    keywords: ["sam", "riskbedömning", "handlingsplan", "uppföljning", "arbetsmiljöpolicy", "rutiner"],
    checklist: [
      "Undersök arbetsmiljön regelbundet (fysisk, organisatorisk och social).",
      "Riskbedöm och dokumentera riskerna, även vid förändringar i verksamheten.",
      "Åtgärda risker och upprätta handlingsplan för det som inte kan göras direkt.",
      "Fördela arbetsmiljöuppgifter och säkerställ tillräcklig kunskap.",
      "Följ årligen upp att det systematiska arbetsmiljöarbetet fungerar.",
      "Dokumentera arbetsmiljöpolicy och rutiner (skriftligt vid minst 10 anställda)."
    ]
  },
  {
    id: "risker-arbetsmiljo",
    title: "Risker i arbetsmiljön (OSA, kemi, buller, ergonomi m.m.)",
    sfs: "AFS 2023:10",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-202310/",
    summary:
      "Samlar krav på vanliga risker i arbetet: organisatorisk och social arbetsmiljö (OSA – t.ex. arbetsbelastning, arbetstid och kränkande särbehandling), kemiska riskkällor, buller, vibrationer, belastningsergonomi, smittrisker samt våld och hot.",
    appliesTo: "Alla arbetsgivare, i den mån riskerna förekommer i verksamheten.",
    keywords: ["osa", "arbetsbelastning", "kränkande särbehandling", "kemiska risker", "buller", "ergonomi", "hot och våld", "smitta"],
    checklist: [
      "Bedöm och hantera organisatorisk och social arbetsmiljö (arbetsbelastning, arbetstid, otydliga krav).",
      "Ta fram rutiner mot kränkande särbehandling och trakasserier.",
      "Inventera och riskbedöm kemiska riskkällor och för en förteckning.",
      "Bedöm och åtgärda buller, vibrationer och belastningsergonomiska risker.",
      "Bedöm risk för hot, våld och smitta och vidta åtgärder.",
      "Ge instruktioner, skyddsåtgärder och vid behov utbildning."
    ]
  },
  {
    id: "arbetsplatsens-utformning",
    title: "Utformning av arbetsplatser",
    sfs: "AFS 2023:12",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-202312/",
    summary:
      "Krav på hur arbetsplatser och lokaler ska utformas: ventilation, luftkvalitet, ljus och belysning, klimat, personalutrymmen, utrymning och tillgänglighet, så att ohälsa och olycksfall förebyggs.",
    appliesTo: "Arbetsgivare och den som låter uppföra eller ändra en arbetsplats eller lokal.",
    keywords: ["arbetsplats", "lokaler", "ventilation", "belysning", "personalutrymmen", "utrymning", "tillgänglighet"],
    checklist: [
      "Säkerställ god ventilation och luftkvalitet i lokalerna.",
      "Se till att belysning, klimat och ljudmiljö är lämpliga för arbetet.",
      "Ordna personalutrymmen (t.ex. omklädning, paus, toalett) efter behov.",
      "Säkerställ tydliga utrymningsvägar och en utrymningsplan.",
      "Beakta tillgänglighet för personer med nedsatt rörelse- eller orienteringsförmåga.",
      "Beakta kraven redan vid projektering och ändring av lokaler."
    ]
  },
  {
    id: "arbetsutrustning-ppe",
    title: "Arbetsutrustning och personlig skyddsutrustning – säker användning",
    sfs: "AFS 2023:11",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-202311/",
    summary:
      "Krav på säker användning av maskiner, verktyg, lyftanordningar, tryckbärande anordningar och personlig skyddsutrustning – inklusive kontroll, underhåll och instruktioner.",
    appliesTo: "Arbetsgivare som använder arbetsutrustning eller tillhandahåller personlig skyddsutrustning.",
    keywords: ["maskiner", "arbetsutrustning", "skyddsutrustning", "ppe", "besiktning", "lyftanordning", "underhåll"],
    checklist: [
      "Säkerställ att arbetsutrustning är lämplig, CE-märkt och säker för arbetet.",
      "Genomför och dokumentera återkommande kontroller/besiktningar där det krävs.",
      "Underhåll utrustning och åtgärda fel innan fortsatt användning.",
      "Tillhandahåll rätt personlig skyddsutrustning kostnadsfritt och se till att den används.",
      "Ge instruktioner och utbildning för säker användning.",
      "Säkerställ särskild behörighet eller tillstånd för t.ex. truck- och lyftarbete."
    ]
  },
  {
    id: "medicinska-kontroller",
    title: "Medicinska kontroller i arbetslivet",
    sfs: "AFS 2023:15",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-202315/",
    summary:
      "Krav på medicinska kontroller (t.ex. läkarundersökning och tjänstbarhetsbedömning) för arbetstagare som utsätts för vissa risker, t.ex. härdplaster, vissa kemikalier, buller, vibrationer, nattarbete och arbete på hög höjd.",
    appliesTo: "Arbetsgivare med arbete som omfattas av krav på medicinska kontroller.",
    keywords: ["medicinska kontroller", "tjänstbarhetsintyg", "härdplast", "nattarbete", "vibrationer", "buller", "företagshälsovård"],
    checklist: [
      "Kartlägg om något arbete kräver medicinska kontroller enligt föreskriften.",
      "Anordna kontroller innan arbetet påbörjas och därefter med rätt intervall.",
      "Säkerställ tjänstbarhetsbedömning där sådan krävs (t.ex. härdplast, höjd).",
      "Anlita företagshälsovård eller annan kompetent resurs för kontrollerna.",
      "Dokumentera och spara resultat samt agera på tjänstbarhetsbeslut.",
      "Erbjud kontrollerna kostnadsfritt för arbetstagaren."
    ]
  },
  {
    id: "risker-vissa-arbeten",
    title: "Risker vid vissa typer av arbeten (bygg, asbest m.m.)",
    sfs: "AFS 2023:13",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-202313/",
    summary:
      "Krav vid särskilt riskfyllda arbeten, bl.a. bygg- och anläggningsarbete (byggarbetsmiljösamordnare BAS-P/BAS-U), arbete med asbest och kvarts, arbete på hög höjd och i slutna utrymmen.",
    appliesTo: "Byggherrar, entreprenörer och arbetsgivare som utför riskfyllda arbeten.",
    keywords: ["bygg", "bas-p", "bas-u", "asbest", "kvarts", "arbete på höjd", "arbetsmiljöplan"],
    checklist: [
      "Utse byggarbetsmiljösamordnare (BAS-P och BAS-U) för bygg- och anläggningsarbete.",
      "Upprätta arbetsmiljöplan innan byggarbetsplatsen etableras när det krävs.",
      "Lämna förhandsanmälan till Arbetsmiljöverket för större byggprojekt.",
      "Säkerställ tillstånd och rätt skydd vid arbete med asbest.",
      "Vidta fallskydd vid arbete på höjd och särskilda åtgärder i slutna utrymmen.",
      "Säkerställ rätt utbildning och skyddsåtgärder för respektive arbete."
    ]
  },
  {
    id: "arbetstidslagen",
    title: "Arbetstidslagen",
    sfs: "SFS 1982:673",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/arbetstidslag-1982673_sfs-1982-673/",
    summary:
      "Reglerar arbetstid: ordinarie tid, övertid, dygns- och veckovila, raster och nattarbete. Delar av lagen kan ersättas genom kollektivavtal.",
    appliesTo: "Arbetsgivare med anställda (med vissa undantag, t.ex. företagsledande ställning).",
    keywords: ["arbetstid", "övertid", "dygnsvila", "veckovila", "raster", "nattarbete", "kollektivavtal"],
    checklist: [
      "Håll ordinarie arbetstid inom 40 timmar per vecka i genomsnitt.",
      "Säkerställ minst 11 timmars dygnsvila och 36 timmars veckovila.",
      "Håll övertid och mertid inom lagens gränser och för anteckningar om övertid.",
      "Säkerställ raster och pauser under arbetsdagen.",
      "Beakta särskilda regler för nattarbete och begränsningsperioder.",
      "Kontrollera vad kollektivavtalet säger – det kan ersätta lagens regler."
    ]
  }
];

if (typeof window !== "undefined") {
  window.LAWS = (window.LAWS || []).concat(ARBETSMILJO_LAWS);
}
