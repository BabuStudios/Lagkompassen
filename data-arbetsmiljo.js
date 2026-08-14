/*
 * Lagkompassen – arbetsmiljölagar.
 * Kompletterar data.js med lagar och föreskrifter inom arbetsmiljö.
 * Lägger till posterna i window.LAWS (laddas efter data.js, före app.js).
 *
 * OBS: Arbetsmiljöverket införde en ny föreskriftsstruktur den 1 januari 2025
 * där de tidigare ~67 AFS:erna ersattes av 15 nya (AFS 2023:1–2023:15).
 * Referenserna nedan följer den nya strukturen. Här ingår samtliga 15
 * föreskrifter samt centrala arbetsmiljö- och arbetstidslagar.
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
    id: "planering-organisering-am",
    title: "Planering och organisering av arbetsmiljöarbete",
    sfs: "AFS 2023:2",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20232/",
    summary:
      "Grundläggande skyldigheter för arbetsgivare att planera och organisera arbetsmiljöarbetet – bl.a. att fördela arbetsmiljöuppgifter, ge tillräckliga kunskaper och resurser samt anlita företagshälsovård vid behov.",
    appliesTo: "Alla arbetsgivare.",
    keywords: ["planering", "organisering", "uppgiftsfördelning", "kunskap", "företagshälsovård", "resurser"],
    checklist: [
      "Fördela arbetsmiljöuppgifter skriftligt till personer med rätt kunskap och befogenhet.",
      "Säkerställ att de som fått uppgifter har tillräcklig kunskap och tid.",
      "Ge chefer och arbetsledare arbetsmiljöutbildning.",
      "Anlita företagshälsovård eller motsvarande när egen kompetens saknas.",
      "Ge tillräckliga resurser för arbetsmiljöarbetet."
    ]
  },
  {
    id: "projektering-byggsamordning",
    title: "Projektering och byggarbetsmiljösamordning",
    sfs: "AFS 2023:3",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20233/",
    summary:
      "Grundläggande skyldigheter vid projektering och byggarbetsmiljösamordning. Riktar sig till byggherrar, projektörer och byggarbetsmiljösamordnare (BAS-P/BAS-U) som förbereder och samordnar byggnads- och anläggningsarbete.",
    appliesTo: "Byggherrar, projektörer, arkitekter och byggarbetsmiljösamordnare.",
    keywords: ["projektering", "byggherre", "bas-p", "bas-u", "samordning", "arbetsmiljöplan"],
    checklist: [
      "Beakta arbetsmiljö och risker redan i projekteringen.",
      "Utse byggarbetsmiljösamordnare för planering/projektering (BAS-P) och utförande (BAS-U).",
      "Säkerställ att arbetsmiljöplan upprättas när det krävs.",
      "Samordna arbetsmiljöfrågor mellan olika aktörer på byggarbetsplatsen.",
      "Lämna över underlag om kvarstående risker till kommande drift och underhåll."
    ]
  },
  {
    id: "produkter-maskiner",
    title: "Produkter – maskiner",
    sfs: "AFS 2023:4",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20234/",
    summary:
      "Krav på maskiners konstruktion, tillverkning och säkerhet innan de släpps ut på marknaden, inklusive CE-märkning och EU-försäkran om överensstämmelse.",
    appliesTo: "Tillverkare, importörer och distributörer av maskiner.",
    keywords: ["maskiner", "ce-märkning", "eu-försäkran", "teknisk dokumentation", "bruksanvisning", "produktsäkerhet"],
    checklist: [
      "Riskbedöm maskinen och uppfyll de grundläggande hälso- och säkerhetskraven.",
      "Ta fram teknisk dokumentation och bruksanvisning på svenska.",
      "Gör tillämplig bedömning av överensstämmelse.",
      "Upprätta EU-försäkran om överensstämmelse och CE-märk maskinen.",
      "Spara dokumentationen enligt kraven."
    ]
  },
  {
    id: "produkter-tryckbarande",
    title: "Produkter – tryckbärande anordningar",
    sfs: "AFS 2023:5",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20235/",
    summary:
      "Krav på konstruktion och tillverkning av tryckbärande anordningar (t.ex. pannor, tryckkärl och rörledningar) innan de släpps ut på marknaden.",
    appliesTo: "Tillverkare och importörer av tryckbärande anordningar.",
    keywords: ["tryckbärande", "tryckkärl", "panna", "rörledning", "ce-märkning", "överensstämmelse"],
    checklist: [
      "Klassificera anordningen utifrån tryck, volym och fluidgrupp.",
      "Uppfyll de väsentliga säkerhetskraven för konstruktion och tillverkning.",
      "Genomför tillämplig bedömning av överensstämmelse (ev. med anmält organ).",
      "CE-märk och upprätta försäkran om överensstämmelse.",
      "Ta fram instruktioner och teknisk dokumentation."
    ]
  },
  {
    id: "produkter-enkla-tryckkarl",
    title: "Produkter – enkla tryckkärl",
    sfs: "AFS 2023:6",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20236/",
    summary:
      "Krav på enkla tryckkärl (t.ex. luftbehållare till kompressorer) innan de släpps ut på marknaden.",
    appliesTo: "Tillverkare och importörer av enkla tryckkärl.",
    keywords: ["enkla tryckkärl", "luftbehållare", "kompressor", "ce-märkning", "överensstämmelse"],
    checklist: [
      "Kontrollera att kärlet omfattas av föreskriften (tryck och volym).",
      "Uppfyll konstruktions- och tillverkningskraven.",
      "Genomför bedömning av överensstämmelse.",
      "CE-märk och upprätta försäkran om överensstämmelse.",
      "Bifoga bruksanvisning och spara teknisk dokumentation."
    ]
  },
  {
    id: "produkter-atex",
    title: "Produkter – utrustning för explosiv atmosfär (ATEX)",
    sfs: "AFS 2023:7",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20237/",
    summary:
      "Krav på utrustning och skyddssystem avsedda för användning i explosionsfarlig (potentiellt explosiv) atmosfär, ATEX, innan de släpps ut på marknaden.",
    appliesTo: "Tillverkare och importörer av ATEX-utrustning och skyddssystem.",
    keywords: ["atex", "explosiv atmosfär", "ex-märkning", "utrustningsgrupp", "ce-märkning", "zonklassning"],
    checklist: [
      "Bestäm utrustningsgrupp och kategori utifrån avsedd användningszon.",
      "Uppfyll de väsentliga hälso- och säkerhetskraven.",
      "Genomför bedömning av överensstämmelse med anmält organ där det krävs.",
      "CE-märk samt Ex-märk utrustningen korrekt.",
      "Ta fram instruktioner och teknisk dokumentation."
    ]
  },
  {
    id: "produkter-rojsagsverktyg",
    title: "Produkter – förbud mot vissa skärverktyg för röjsågar",
    sfs: "AFS 2023:8",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20238/",
    summary:
      "Förbud mot att på marknaden släppa ut ledade skärverktyg (t.ex. kätting eller slagor) avsedda för bärbara handhållna röjsågar, på grund av risken för allvarliga skador.",
    appliesTo: "Tillverkare, importörer och återförsäljare av röjsågstillbehör.",
    keywords: ["röjsåg", "skärverktyg", "förbud", "ledade verktyg", "marknadskontroll"],
    checklist: [
      "Släpp inte ut förbjudna ledade skärverktyg för röjsågar på marknaden.",
      "Gå igenom sortimentet och ta bort berörda produkter.",
      "Informera återförsäljare och kunder.",
      "Hantera eventuell återkallelse."
    ]
  },
  {
    id: "produkter-hojdutrustning",
    title: "Produkter – stegar, ställningar och utrustning för arbete på höjd",
    sfs: "AFS 2023:9",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20239/",
    summary:
      "Krav på stegar, ställningar och viss annan utrustning för arbete på höjd, samt vissa trycksatta anordningar, innan de släpps ut på marknaden.",
    appliesTo: "Tillverkare och importörer av stegar, ställningar och höjdutrustning.",
    keywords: ["stegar", "ställningar", "arbete på höjd", "hållfasthet", "märkning", "provning"],
    checklist: [
      "Uppfyll konstruktions- och hållfasthetskraven för produkten.",
      "Genomför nödvändig provning och bedömning.",
      "Märk produkten och ta fram bruksanvisning på svenska.",
      "Spara teknisk dokumentation enligt kraven."
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
    id: "risker-vissa-arbeten",
    title: "Risker vid vissa typer av arbeten (bygg, asbest m.m.)",
    sfs: "AFS 2023:13",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-202313/",
    summary:
      "Krav vid särskilt riskfyllda arbeten, bl.a. bygg- och anläggningsarbete (byggarbetsmiljösamordnare BAS-P/BAS-U), arbete med asbest och kvarts, arbete på hög höjd och i slutna utrymmen samt minderårigas arbete.",
    appliesTo: "Byggherrar, entreprenörer och arbetsgivare som utför riskfyllda arbeten.",
    keywords: ["bygg", "bas-p", "bas-u", "asbest", "kvarts", "arbete på höjd", "arbetsmiljöplan", "minderåriga"],
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
    id: "gransvarden-luftvagsexponering",
    title: "Gränsvärden för luftvägsexponering i arbetsmiljön",
    sfs: "AFS 2023:14",
    category: "Arbetsmiljö",
    authority: "Arbetsmiljöverket",
    updated: "Gäller från 1 jan 2025",
    link: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-202314/",
    summary:
      "Innehåller hygieniska gränsvärden för hur mycket av ett ämne som får finnas i inandningsluften på arbetsplatsen. Arbetsgivaren ska se till att exponeringen hålls under gränsvärdena, bl.a. genom mätning och åtgärder.",
    appliesTo: "Arbetsgivare där luftföroreningar (damm, gaser, ånga, rök) kan förekomma.",
    keywords: ["hygieniska gränsvärden", "luftvägsexponering", "damm", "exponeringsmätning", "ventilation", "kvarts"],
    checklist: [
      "Identifiera vilka luftburna föroreningar som kan förekomma i arbetet.",
      "Jämför förekomsten med gällande hygieniska gränsvärden.",
      "Mät exponeringen när det behövs för att bedöma nivån.",
      "Vidta åtgärder (ventilation, inkapsling, skyddsutrustning) för att klara gränsvärdena.",
      "Dokumentera mätningar och åtgärder."
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
  },
  {
    id: "arbetstid-vagtransport",
    title: "Lag om arbetstid vid visst vägtransportarbete",
    sfs: "SFS 2005:395",
    category: "Arbetsmiljö",
    authority: "Transportstyrelsen / Arbetsmiljöverket",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2005395-om-arbetstid-vid-visst_sfs-2005-395/",
    summary:
      "Reglerar arbetstid, raster och nattarbete för mobila arbetstagare i vägtransporter, utöver EU:s kör- och vilotidsregler.",
    appliesTo: "Företag med förare och annan mobil personal i vägtransportarbete.",
    keywords: ["vägtransport", "arbetstid", "förare", "nattarbete", "raster", "kör- och vilotid"],
    checklist: [
      "Håll den genomsnittliga veckoarbetstiden inom lagens gräns.",
      "Säkerställ raster och begränsa nattarbete enligt lagen.",
      "För register över arbetstiden och spara det.",
      "Samordna med EU:s kör- och vilotidsregler."
    ]
  },
  {
    id: "arbetstid-flyg",
    title: "Lag om arbetstid m.m. för flygpersonal inom civilflyget",
    sfs: "SFS 2005:426",
    category: "Arbetsmiljö",
    authority: "Transportstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2005426-om-arbetstid-mm-for-flygpersonal_sfs-2005-426/",
    summary:
      "Reglerar arbetstid och vila för flygande personal (kabin- och cockpitpersonal) inom civilflyget.",
    appliesTo: "Flygbolag och arbetsgivare med flygande personal.",
    keywords: ["flyg", "flygpersonal", "blocktid", "tjänstgöring", "vila", "lediga dagar"],
    checklist: [
      "Begränsa blocktid och sammanlagd tjänstgöringstid enligt lagen.",
      "Säkerställ föreskriven vila och lediga dagar.",
      "För register över arbets- och flygtid.",
      "Beakta reglernas samspel med EU:s flygarbetstidsregler."
    ]
  },
  {
    id: "vilotid-sjoman",
    title: "Lag om vilotid för sjömän",
    sfs: "SFS 1998:958",
    category: "Arbetsmiljö",
    authority: "Transportstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1998958-om-vilotid-for-sjoman_sfs-1998-958/",
    summary:
      "Reglerar vilotid och arbetstid för sjömän ombord på fartyg, för att förebygga trötthet och olyckor till sjöss.",
    appliesTo: "Redare och arbetsgivare med sjömän ombord på fartyg.",
    keywords: ["sjömän", "vilotid", "fartyg", "arbetstid", "trötthet", "arbetsordning"],
    checklist: [
      "Säkerställ minsta vilotid per dygn och vecka för ombordanställda.",
      "Anslå en arbetsordning ombord.",
      "För journal över arbets- och vilotid.",
      "Beakta särskilda regler för minderåriga ombord."
    ]
  }
];

if (typeof window !== "undefined") {
  window.LAWS = (window.LAWS || []).concat(ARBETSMILJO_LAWS);
}
