/*
 * Lagkompassen – komplettering för fullständig ISO 14001-laglista.
 * Miljörelaterade författningar som vanligen ingår i en företags-laglista men
 * saknades: tillsyn, bygg/mark, områdesskydd, kulturmiljö, miljöansvar,
 * strålskydd/radon, brandskydd och vissa miljöskatter.
 * Lägger till posterna i window.LAWS (laddas efter data.js).
 */
var ISO_KOMPLETTERING_LAWS = [
  {
    id: "miljotillsynsforordningen",
    title: "Miljötillsynsförordningen",
    sfs: "SFS 2011:13",
    category: "Tillstånd & anmälan",
    authority: "Länsstyrelsen / kommunens miljönämnd / Naturvårdsverket",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/miljotillsynsforordning-201113_sfs-2011-13/",
    summary:
      "Reglerar hur tillsynen enligt miljöbalken är organiserad och fördelad mellan myndigheter. Styr bl.a. vilken myndighet som är tillsynsmyndighet för din verksamhet och verksamhetsutövarens skyldigheter vid tillsyn.",
    appliesTo: "Alla verksamhetsutövare som står under miljötillsyn.",
    keywords: ["tillsyn", "tillsynsmyndighet", "miljöbalken", "tillsynsplan", "ansvarsfördelning"],
    checklist: [
      "Ta reda på vilken myndighet som är tillsynsmyndighet för verksamheten.",
      "Medverka vid tillsyn och lämna de uppgifter myndigheten begär.",
      "Åtgärda brister som påtalas vid tillsyn.",
      "Se till att egenkontrollen möter tillsynens krav."
    ]
  },
  {
    id: "plan-bygglagen",
    title: "Plan- och bygglagen (PBL)",
    sfs: "SFS 2010:900",
    category: "Mark & natur",
    authority: "Kommunen (byggnadsnämnden) / Länsstyrelsen",
    updated: "Senast ändrad 2024",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan--och-bygglag-2010900_sfs-2010-900/",
    summary:
      "Reglerar planläggning av mark och vatten samt byggande. Ställer krav på bygglov, anmälan, kontrollplan och att byggnader uppfyller krav på bl.a. energihushållning, miljö och tillgänglighet.",
    appliesTo: "Företag som bygger, ändrar eller river byggnader, eller bedriver verksamhet som kräver bygglov.",
    keywords: ["bygglov", "bygganmälan", "kontrollplan", "kontrollansvarig", "detaljplan", "slutbesked"],
    checklist: [
      "Sök bygglov eller gör bygganmälan i god tid innan åtgärd.",
      "Utse kontrollansvarig där det krävs.",
      "Upprätta och följ en kontrollplan.",
      "Beakta krav på energihushållning, miljö och tillgänglighet.",
      "Säkerställ slutbesked innan byggnaden tas i bruk."
    ]
  },
  {
    id: "omradesskydd-natura2000",
    title: "Områdesskydd och Natura 2000 (miljöbalken 7 kap.)",
    sfs: "SFS 1998:808, 7 kap. / förordn. 1998:1252",
    category: "Mark & natur",
    authority: "Länsstyrelsen / Naturvårdsverket",
    updated: "Del av miljöbalken",
    link: "https://www.naturvardsverket.se/amnesomraden/skyddad-natur/",
    summary:
      "Reglerar skyddade områden som nationalparker, naturreservat, biotopskydd och Natura 2000. Verksamhet eller åtgärder som kan påverka ett skyddat område kan kräva tillstånd eller dispens.",
    appliesTo: "Företag som bedriver verksamhet eller åtgärder i eller nära skyddade områden.",
    keywords: ["naturreservat", "natura 2000", "biotopskydd", "nationalpark", "dispens", "områdesskydd"],
    checklist: [
      "Kontrollera om åtgärden ligger i eller nära ett skyddat område eller Natura 2000.",
      "Sök tillstånd eller dispens hos länsstyrelsen vid behov.",
      "Bedöm påverkan på områdets skyddsvärden.",
      "Anpassa verksamheten för att undvika skada."
    ]
  },
  {
    id: "skogsvardslagen",
    title: "Skogsvårdslagen",
    sfs: "SFS 1979:429",
    category: "Mark & natur",
    authority: "Skogsstyrelsen",
    updated: "Senast ändrad 2022",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skogsvardslag-1979429_sfs-1979-429/",
    summary:
      "Reglerar skötsel av skog med hänsyn till både produktion och miljö. Kräver bl.a. avverkningsanmälan och hänsyn till natur- och kulturmiljövärden vid skogsbruk.",
    appliesTo: "Skogsägare och företag som bedriver skogsbruk.",
    keywords: ["skogsbruk", "avverkningsanmälan", "miljöhänsyn", "återbeskogning", "skogsstyrelsen"],
    checklist: [
      "Anmäl avverkning till Skogsstyrelsen i tid.",
      "Ta miljöhänsyn (hänsynsytor, kantzoner mot vatten).",
      "Återbeskoga efter avverkning enligt kraven.",
      "Beakta fridlysta arter och kulturlämningar."
    ]
  },
  {
    id: "stralskyddslagen",
    title: "Strålskyddslagen (inkl. radon)",
    sfs: "SFS 2018:396",
    category: "Risk & säkerhet",
    authority: "Strålsäkerhetsmyndigheten / kommunen",
    updated: "Senast ändrad 2021",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/stralskyddslag-2018396_sfs-2018-396/",
    summary:
      "Skyddar mot skadlig verkan av joniserande och icke-joniserande strålning, bl.a. radon i lokaler, röntgen och andra strålkällor. Ställer krav på mätning, referensvärden och i vissa fall tillstånd.",
    appliesTo: "Verksamheter med strålkällor samt arbetsgivare med förhöjda radonhalter i lokaler.",
    keywords: ["strålskydd", "radon", "joniserande strålning", "referensvärde", "mätning", "tillstånd"],
    checklist: [
      "Mät radon i arbetslokaler och vidta åtgärder över referensvärdet.",
      "Säkerställ tillstånd för verksamhet med strålkällor.",
      "Skydda personal och allmänhet mot strålning.",
      "Dokumentera mätningar och åtgärder."
    ]
  },
  {
    id: "skydd-mot-olyckor",
    title: "Lag om skydd mot olyckor (brandskydd)",
    sfs: "SFS 2003:778",
    category: "Risk & säkerhet",
    authority: "MSB / kommunens räddningstjänst",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2003778-om-skydd-mot-olyckor_sfs-2003-778/",
    summary:
      "Ställer krav på skäligt brandskydd och förmåga att hantera olyckor. Ägare och nyttjanderättshavare ska vidta brandförebyggande åtgärder och bedriva systematiskt brandskyddsarbete (SBA).",
    appliesTo: "Ägare och verksamhetsutövare i byggnader och anläggningar.",
    keywords: ["brandskydd", "sba", "systematiskt brandskyddsarbete", "utrymning", "olycka", "räddningstjänst"],
    checklist: [
      "Bedriv systematiskt brandskyddsarbete (SBA) med rutiner och ansvar.",
      "Vidta skäliga brandförebyggande åtgärder.",
      "Säkerställ utrymningsvägar, larm och släckutrustning.",
      "Dokumentera brandskyddet och genomför regelbunden kontroll."
    ]
  },
  {
    id: "kulturmiljolagen",
    title: "Kulturmiljölagen (fornlämningar m.m.)",
    sfs: "SFS 1988:950",
    category: "Mark & natur",
    authority: "Länsstyrelsen",
    updated: "Senast ändrad 2021",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/kulturmiljolag-1988950_sfs-1988-950/",
    summary:
      "Skyddar fornlämningar, byggnadsminnen och andra kulturmiljövärden. Åtgärder som berör en fornlämning kräver tillstånd, och påträffade fornlämningar ska anmälas.",
    appliesTo: "Företag som gräver, bygger eller bedriver verksamhet som kan påverka fornlämningar eller kulturmiljöer.",
    keywords: ["fornlämning", "kulturmiljö", "byggnadsminne", "tillstånd", "markarbete", "arkeologi"],
    checklist: [
      "Kontrollera om fornlämningar eller kulturmiljöer berörs innan markarbete.",
      "Sök tillstånd hos länsstyrelsen för ingrepp i fornlämning.",
      "Avbryt arbetet och anmäl om en fornlämning påträffas.",
      "Anpassa arbeten för att skydda kulturvärden."
    ]
  },
  {
    id: "allvarliga-miljoskador",
    title: "Förordning om allvarliga miljöskador (miljöansvar)",
    sfs: "SFS 2007:667",
    category: "Mark & natur",
    authority: "Länsstyrelsen / kommunens miljönämnd",
    updated: "Genomför EU:s miljöansvarsdirektiv",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2007667-om-allvarliga-miljoskador_sfs-2007-667/",
    summary:
      "Genomför EU:s miljöansvarsdirektiv. Den som orsakar en allvarlig miljöskada på mark, vatten eller skyddade arter och livsmiljöer ska förebygga och avhjälpa skadan – principen att förorenaren betalar.",
    appliesTo: "Verksamhetsutövare som kan orsaka betydande miljöskador.",
    keywords: ["miljöansvar", "allvarlig miljöskada", "förorenaren betalar", "avhjälpande", "skyddade arter", "mark och vatten"],
    checklist: [
      "Bedöm risken för allvarlig miljöskada i verksamheten.",
      "Vidta omedelbara åtgärder vid överhängande hot eller inträffad skada.",
      "Underrätta tillsynsmyndigheten utan dröjsmål.",
      "Genomför avhjälpande åtgärder och dokumentera."
    ]
  },
  {
    id: "avfallsskatt",
    title: "Lag om skatt på avfall",
    sfs: "SFS 1999:673",
    category: "Skatter & avgifter",
    authority: "Skatteverket",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1999673-om-skatt-pa-avfall_sfs-1999-673/",
    summary:
      "Punktskatt på avfall som deponeras, i syfte att minska deponering och öka återvinning.",
    appliesTo: "Deponier och verksamheter som för avfall till skattepliktig deponi.",
    keywords: ["avfallsskatt", "deponi", "punktskatt", "återvinning", "skatteverket"],
    checklist: [
      "Avgör om verksamheten är skattskyldig för avfall till deponi.",
      "Registrera dig hos Skatteverket vid behov.",
      "Beräkna och deklarera avfallsskatt.",
      "Håll underlag för avdrag (t.ex. avfall som förs ut från anläggningen)."
    ]
  },
  {
    id: "naturgrusskatt",
    title: "Lag om skatt på naturgrus",
    sfs: "SFS 1995:1667",
    category: "Skatter & avgifter",
    authority: "Skatteverket",
    updated: "Senast ändrad 2022",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-19951667-om-skatt-pa-naturgrus_sfs-1995-1667/",
    summary:
      "Punktskatt på brytning av naturgrus, för att gynna hushållning med naturgrus och användning av alternativa material.",
    appliesTo: "Företag som bryter naturgrus (grus- och sandtäkter).",
    keywords: ["naturgrus", "täkt", "punktskatt", "hushållning", "skatteverket"],
    checklist: [
      "Avgör om verksamheten är skattskyldig för naturgrus.",
      "Registrera dig som skattskyldig hos Skatteverket.",
      "Beräkna och deklarera skatt på uttaget naturgrus."
    ]
  },
  {
    id: "bekampningsmedelsskatt",
    title: "Lag om skatt på bekämpningsmedel",
    sfs: "SFS 1984:410",
    category: "Skatter & avgifter",
    authority: "Skatteverket",
    updated: "Senast ändrad 2021",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1984410-om-skatt-pa-bekampningsmedel_sfs-1984-410/",
    summary:
      "Punktskatt på kemiska bekämpningsmedel (växtskyddsmedel och vissa biocider) som säljs i Sverige.",
    appliesTo: "Tillverkare och importörer av bekämpningsmedel.",
    keywords: ["bekämpningsmedel", "punktskatt", "växtskyddsmedel", "biocider", "skatteverket"],
    checklist: [
      "Avgör om produkterna är skattepliktiga bekämpningsmedel.",
      "Registrera dig som skattskyldig hos Skatteverket.",
      "Beräkna och deklarera skatten och håll underlag."
    ]
  },
  {
    id: "utvinningsavfall",
    title: "Förordning om utvinningsavfall",
    sfs: "SFS 2013:319",
    category: "Avfall",
    authority: "Länsstyrelsen",
    updated: "Senast ändrad 2022",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2013319-om-utvinningsavfall_sfs-2013-319/",
    summary:
      "Reglerar hantering av avfall från utvinningsindustrin (gruvor och täkter), inklusive avfallshanteringsplan och krav på avfallsanläggningar.",
    appliesTo: "Gruvor, täkter och annan utvinningsverksamhet.",
    keywords: ["utvinningsavfall", "gruva", "täkt", "avfallshanteringsplan", "avfallsanläggning"],
    checklist: [
      "Upprätta en avfallshanteringsplan för utvinningsavfallet.",
      "Klassificera avfallsanläggningen (t.ex. riskanläggning).",
      "Sök tillstånd och ställ ekonomisk säkerhet där det krävs.",
      "Förebygg förorening av mark och vatten."
    ]
  }
];

if (typeof window !== "undefined") {
  window.LAWS = (window.LAWS || []).concat(ISO_KOMPLETTERING_LAWS);
}
