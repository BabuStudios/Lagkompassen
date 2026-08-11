/*
 * Lagkompassen – dataset över svenska lagar och förordningar inom
 * miljö och hållbarhet som berör företag.
 *
 * VIKTIGT: Innehållet är en sammanfattande vägledning i informationssyfte
 * och utgör inte juridisk rådgivning. Kontrollera alltid den senaste
 * lydelsen på riksdagen.se / lagrummet.se och stäm av med din
 * tillsynsmyndighet. Checklistorna är ett stöd för egenkontroll, inte en
 * uttömmande lista över alla krav i respektive författning.
 */

const LAWS = [
  {
    id: "miljobalken",
    title: "Miljöbalken",
    sfs: "SFS 1998:808",
    category: "Övergripande",
    authority: "Länsstyrelsen / kommunens miljönämnd / Naturvårdsverket",
    updated: "Senast ändrad 2024",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/miljobalk-1998808_sfs-1998-808",
    summary:
      "Sveriges centrala miljölagstiftning. Samlar de grundläggande hänsynsreglerna, krav på tillstånd och anmälan för miljöfarlig verksamhet, samt principen att verksamhetsutövaren har bevisbördan och ansvar för att förebygga skada på människa och miljö.",
    appliesTo:
      "Alla verksamhetsutövare. Särskilda krav för den som bedriver miljöfarlig verksamhet (A-, B-, C- och U-verksamheter).",
    keywords: ["hänsynsregler", "tillstånd", "anmälan", "miljöfarlig verksamhet", "bevisbörda", "försiktighetsprincipen", "egenkontroll"],
    checklist: [
      "Kartlägg om verksamheten klassas som A-, B-, C- eller U-verksamhet enligt miljöprövningsförordningen.",
      "Säkerställ att rätt tillstånd (A/B) finns eller att anmälan (C) lämnats till tillsynsmyndigheten.",
      "Tillämpa de allmänna hänsynsreglerna (2 kap.): kunskapskrav, försiktighetsmått, produktval, hushållning och lokalisering.",
      "Dokumentera hur försiktighetsprincipen och bästa möjliga teknik beaktas i verksamheten.",
      "Inför ett system för egenkontroll med ansvarsfördelning och rutiner.",
      "Upprätta rutin för att rapportera driftstörningar och olyckor till tillsynsmyndigheten.",
      "Håll en aktuell förteckning över de miljö- och hälsorisker verksamheten medför."
    ]
  },
  {
    id: "egenkontroll",
    title: "Förordning om verksamhetsutövares egenkontroll",
    sfs: "SFS 1998:901",
    category: "Egenkontroll",
    authority: "Kommunens miljönämnd / Länsstyrelsen",
    updated: "Senast ändrad 2020",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1998901-om-verksamhetsutovares_sfs-1998-901",
    summary:
      "Preciserar kraven på egenkontroll för tillstånds- och anmälningspliktiga verksamheter. Kräver dokumenterad ansvarsfördelning, riskbedömning och rutiner för kontroll av utrustning.",
    appliesTo: "Tillstånds- eller anmälningspliktiga miljöfarliga verksamheter (A-, B- och C-verksamheter).",
    keywords: ["egenkontroll", "ansvarsfördelning", "riskbedömning", "kemikalieförteckning", "rutiner"],
    checklist: [
      "Fastställ och dokumentera ansvarsfördelningen för miljöfrågor i organisationen.",
      "Genomför och dokumentera fortlöpande riskbedömning av verksamhetens miljöpåverkan.",
      "Upprätta rutiner för kontroll och underhåll av utrustning som kan påverka miljön.",
      "För en förteckning över kemiska produkter som hanteras och som kan innebära risk.",
      "Säkerställ att rutinerna hålls uppdaterade och är kända i organisationen.",
      "Spara dokumentationen så att den kan visas upp vid tillsyn."
    ]
  },
  {
    id: "miljofarlig-verksamhet",
    title: "Förordning om miljöfarlig verksamhet och hälsoskydd",
    sfs: "SFS 1998:899",
    category: "Tillstånd & anmälan",
    authority: "Kommunens miljönämnd / Länsstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1998899-om-miljofarlig-verksamhet_sfs-1998-899",
    summary:
      "Reglerar anmälnings- och tillståndsplikt för miljöfarlig verksamhet samt krav kopplade till hälsoskydd, t.ex. avloppsanläggningar och värmepumpar.",
    appliesTo: "Verksamheter som ger utsläpp till mark, luft eller vatten, eller hanterar avfall/avlopp.",
    keywords: ["anmälan", "tillstånd", "hälsoskydd", "avlopp", "värmepump", "utsläpp"],
    checklist: [
      "Avgör om verksamheten kräver anmälan (C) eller tillstånd (A/B).",
      "Lämna anmälan minst sex veckor innan verksamheten startar eller ändras väsentligt.",
      "Anmäl installation av berg-/ytjordvärmepump till kommunen.",
      "Säkerställ att enskilt avlopp har erforderligt tillstånd.",
      "Beakta krav på skydd mot olägenhet för människors hälsa i lokaler."
    ]
  },
  {
    id: "avfallsforordningen",
    title: "Avfallsförordningen",
    sfs: "SFS 2020:614",
    category: "Avfall",
    authority: "Naturvårdsverket / kommunen / Länsstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/avfallsforordning-2020614_sfs-2020-614",
    summary:
      "Reglerar hantering, klassificering och spårbarhet av avfall, inklusive farligt avfall. Kräver att avfall sorteras ut och att uppgifter om farligt avfall rapporteras till det nationella avfallsregistret.",
    appliesTo: "Alla verksamheter som producerar, transporterar, samlar in eller behandlar avfall.",
    keywords: ["avfall", "farligt avfall", "avfallsregister", "anteckningsskyldighet", "källsortering", "transport"],
    checklist: [
      "Sortera ut avfall i fraktioner och håll farligt avfall åtskilt.",
      "För anteckningar om farligt avfall: typ, mängd, ursprung och mottagare.",
      "Rapportera uppgifter om farligt avfall till Naturvårdsverkets avfallsregister i tid.",
      "Anlita endast transportörer och mottagare med rätt tillstånd/anmälan.",
      "Säkerställ att transportdokument upprättas vid transport av farligt avfall.",
      "Kontrollera om eget transporttillstånd eller anmälan om transport krävs.",
      "Märk behållare med farligt avfall tydligt och förvara säkert."
    ]
  },
  {
    id: "fgaser",
    title: "Förordning om fluorerade växthusgaser (köldmedier)",
    sfs: "SFS 2016:1128",
    category: "Köldmedier & utsläpp",
    authority: "Kommunens miljönämnd",
    updated: "Kompletterar EU 517/2014",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20161128-om-fluorerade_sfs-2016-1128",
    summary:
      "Kompletterar EU:s f-gasförordning. Ställer krav på läckagekontroll, certifierad personal och årlig rapportering för aggregat som innehåller köldmedier (t.ex. kyl, frys, värmepump, luftkonditionering).",
    appliesTo: "Operatörer av utrustning med fluorerade växthusgaser över vissa mängdgränser (ton CO2e).",
    keywords: ["köldmedier", "f-gas", "läckagekontroll", "köldmedierapport", "certifiering", "CO2-ekvivalenter"],
    checklist: [
      "Inventera all utrustning som innehåller f-gas och beräkna mängd i ton CO2e.",
      "Säkerställ att läckagekontroll utförs med rätt intervall av certifierad personal.",
      "Anlita endast certifierat kyl-/värmepumpsföretag för installation och service.",
      "Lämna årlig köldmedierapport till kommunen senast 31 mars om gränsen 14 ton CO2e nås.",
      "Anmäl nyinstallation av aggregat ≥ 14 ton CO2e till miljönämnden i förväg.",
      "För register över påfylld och omhändertagen köldmediemängd.",
      "Fasa ut köldmedier med hög GWP enligt utfasningsplanen i EU-förordningen."
    ]
  },
  {
    id: "kemikalier-reach",
    title: "Reach – registrering och begränsning av kemikalier (EU)",
    sfs: "EU 1907/2006",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen (KemI)",
    updated: "EU-förordning, uppdateras löpande",
    link: "https://www.kemi.se/lagar-och-regler/reach-forordningen",
    summary:
      "EU:s kemikalieförordning som reglerar registrering, utvärdering, godkännande och begränsning av kemiska ämnen. Ställer krav på säkerhetsdatablad och information i leverantörskedjan.",
    appliesTo: "Tillverkare, importörer och nedströmsanvändare av kemiska ämnen och blandningar.",
    keywords: ["reach", "kemikalier", "säkerhetsdatablad", "SVHC", "kandidatförteckning", "begränsning", "registrering"],
    checklist: [
      "Identifiera din roll: tillverkare, importör eller nedströmsanvändare.",
      "Samla in och håll säkerhetsdatablad (SDS) aktuella för alla kemiska produkter.",
      "Kontrollera om använda ämnen finns på kandidatförteckningen (SVHC).",
      "Informera kunder om varor innehåller > 0,1 vikt-% SVHC-ämne (SCIP-anmälan till ECHA).",
      "Säkerställ att begränsade ämnen (bilaga XVII) inte används otillåtet.",
      "Kontrollera om något ämne kräver tillstånd (bilaga XIV) innan användning.",
      "Verifiera att importerade ämnen över 1 ton/år är registrerade."
    ]
  },
  {
    id: "clp",
    title: "CLP – klassificering och märkning av kemikalier (EU)",
    sfs: "EU 1272/2008",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen (KemI)",
    updated: "EU-förordning",
    link: "https://www.kemi.se/lagar-och-regler/clp---klassificering-och-markning",
    summary:
      "Reglerar hur kemiska produkter ska klassificeras, märkas och förpackas utifrån sina faror, och hur faroinformation kommuniceras med faropiktogram och faroangivelser.",
    appliesTo: "Tillverkare, importörer och distributörer som släpper ut kemiska produkter på marknaden.",
    keywords: ["clp", "klassificering", "märkning", "faropiktogram", "faroangivelser", "förpackning"],
    checklist: [
      "Klassificera kemiska produkter utifrån fysikaliska, hälso- och miljöfaror.",
      "Märk förpackningar med rätt faropiktogram, signalord och faroangivelser.",
      "Säkerställ att märkning är på svenska för produkter på den svenska marknaden.",
      "Använd barnsäkra förslutningar och kännbar varningsmärkning där det krävs.",
      "Anmäl klassificering och märkning till ECHA:s C&L-register vid behov.",
      "Säkerställ att märkning och säkerhetsdatablad är samstämmiga."
    ]
  },
  {
    id: "producentansvar-forpackningar",
    title: "Förordning om producentansvar för förpackningar",
    sfs: "SFS 2022:1274",
    category: "Producentansvar",
    authority: "Naturvårdsverket",
    updated: "Trädde i kraft 2023",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20221274-om-producentansvar-for_sfs-2022-1274",
    summary:
      "Producenter som släpper ut förpackningar eller förpackade varor på marknaden ansvarar för att förpackningarna samlas in och materialåtervinns. Kräver registrering och rapportering till Naturvårdsverket.",
    appliesTo: "Företag som tillverkar, importerar eller fyller förpackningar samt e-handlare som skickar varor till Sverige.",
    keywords: ["förpackningar", "producentansvar", "återvinning", "rapportering", "anslutning", "EPR"],
    checklist: [
      "Avgör om företaget är producent enligt definitionen (tillverkar/importerar/fyller/säljer).",
      "Registrera företaget hos Naturvårdsverket som förpackningsproducent.",
      "Anslut dig till ett godkänt producentansvarssystem för insamling.",
      "Rapportera mängden förpackningar (per materialslag) som satts på marknaden.",
      "Designa förpackningar för återvinningsbarhet där det är möjligt.",
      "Säkerställ korrekt märkning för källsortering till konsument."
    ]
  },
  {
    id: "producentansvar-elutrustning",
    title: "Förordning om producentansvar för elutrustning (WEEE)",
    sfs: "SFS 2014:1075",
    category: "Producentansvar",
    authority: "Naturvårdsverket",
    updated: "Senast ändrad 2022",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20141075-om-producentansvar-for_sfs-2014-1075",
    summary:
      "Producenter av elektrisk och elektronisk utrustning ansvarar för insamling och återvinning av elavfall. Kräver registrering, märkning och rapportering.",
    appliesTo: "Företag som tillverkar, för in till Sverige eller säljer elektrisk/elektronisk utrustning.",
    keywords: ["elavfall", "weee", "elektronik", "producentansvar", "återvinning", "registrering"],
    checklist: [
      "Registrera dig i Naturvårdsverkets EE- och batteriregister.",
      "Märk produkter med symbolen överkryssad soptunna och producentidentifikation.",
      "Anslut dig till ett insamlingssystem för elavfall.",
      "Rapportera mängd utrustning som satts på marknaden och samlats in.",
      "Säkerställ att produktinformation om återvinning finns tillgänglig.",
      "Hantera retur och återtag av uttjänt utrustning enligt kraven."
    ]
  },
  {
    id: "producentansvar-batterier",
    title: "Förordning om producentansvar för batterier",
    sfs: "SFS 2008:834",
    category: "Producentansvar",
    authority: "Naturvårdsverket",
    updated: "Kompletteras av EU 2023/1542",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2008834-om-producentansvar-for_sfs-2008-834",
    summary:
      "Reglerar producenters ansvar för insamling och återvinning av batterier och ackumulatorer, inklusive batterier inbyggda i produkter.",
    appliesTo: "Företag som yrkesmässigt tillverkar eller för in batterier till Sverige.",
    keywords: ["batterier", "ackumulatorer", "producentansvar", "insamling", "återvinning"],
    checklist: [
      "Registrera dig i Naturvårdsverkets batteriregister.",
      "Anslut batterierna till ett godkänt insamlingssystem.",
      "Märk batterier enligt gällande krav (t.ex. överkryssad soptunna, kemiska symboler).",
      "Rapportera mängd batterier som satts på marknaden.",
      "Säkerställ att inbyggda batterier går att avlägsna för återvinning.",
      "Följ kommande krav i EU:s batteriförordning (batteripass m.m.)."
    ]
  },
  {
    id: "engangsplast",
    title: "Förordning om engångsprodukter (engångsplast)",
    sfs: "SFS 2021:996",
    category: "Plast & produkter",
    authority: "Naturvårdsverket",
    updated: "Genomför EU 2019/904",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2021996-om-engangsprodukter_sfs-2021-996",
    summary:
      "Genomför EU:s engångsplastdirektiv. Förbjuder vissa engångsplastprodukter, ställer krav på märkning samt nedskräpningsavgifter för vissa produkter.",
    appliesTo: "Företag som producerar, importerar eller tillhandahåller engångsprodukter, t.ex. restauranger och caféer.",
    keywords: ["engångsplast", "plast", "nedskräpning", "märkning", "förbud", "muggar"],
    checklist: [
      "Identifiera vilka engångsprodukter verksamheten tillhandahåller.",
      "Sluta tillhandahålla förbjudna engångsplastprodukter (t.ex. bestick, sugrör, tallrikar).",
      "Säkerställ korrekt märkning på berörda produkter (t.ex. våtservetter, muggar).",
      "Registrera dig hos Naturvårdsverket om nedskräpningsavgift gäller dina produkter.",
      "Rapportera mängder och betala fastställd nedskräpningsavgift.",
      "Erbjud återanvändbara alternativ där det är möjligt."
    ]
  },
  {
    id: "plastbarkassar",
    title: "Förordning om plastbärkassar",
    sfs: "SFS 2016:1041",
    category: "Plast & produkter",
    authority: "Naturvårdsverket",
    updated: "Senast ändrad 2020",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20161041-om-plastbarkassar_sfs-2016-1041",
    summary:
      "Ställer krav på att den som tillhandahåller plastbärkassar informerar om deras miljöpåverkan och rapporterar antalet kassar som sätts på marknaden.",
    appliesTo: "Företag som tillverkar, för in eller tillhandahåller plastbärkassar (t.ex. butiker).",
    keywords: ["plastbärkassar", "information", "rapportering", "minskad förbrukning"],
    checklist: [
      "Informera kunder om plastbärkassars miljöpåverkan och nyttan av minskad förbrukning.",
      "För den som producerar/för in kassar: rapportera antal till Naturvårdsverket.",
      "Verka för att minska förbrukningen av tunna plastbärkassar.",
      "Undvik att tillhandahålla mycket tunna kassar gratis där det inte krävs."
    ]
  },
  {
    id: "energikartlaggning",
    title: "Lag om energikartläggning i stora företag",
    sfs: "SFS 2014:266",
    category: "Energi",
    authority: "Energimyndigheten",
    updated: "Senast ändrad 2020",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-2014266-om-energikartlaggning-i-stora_sfs-2014-266",
    summary:
      "Stora företag ska göra en energikartläggning minst vart fjärde år för att identifiera möjligheter till energieffektivisering.",
    appliesTo: "Stora företag (≥ 250 anställda, eller omsättning > 50 MEUR och balansomslutning > 43 MEUR).",
    keywords: ["energikartläggning", "energieffektivisering", "stora företag", "energianvändning"],
    checklist: [
      "Avgör om företaget räknas som stort företag enligt definitionen.",
      "Genomför energikartläggning minst vart fjärde år.",
      "Låt kartläggningen utföras av eller kvalitetssäkras av certifierad energikartläggare.",
      "Kartlägg energianvändningen för byggnader, processer och transporter.",
      "Identifiera och dokumentera kostnadseffektiva energieffektiviseringsåtgärder.",
      "Rapportera till Energimyndigheten att kartläggningen genomförts."
    ]
  },
  {
    id: "utslappsratter",
    title: "Lag om vissa utsläpp av växthusgaser (EU ETS)",
    sfs: "SFS 2020:1173",
    category: "Köldmedier & utsläpp",
    authority: "Naturvårdsverket / Länsstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20201173-om-vissa-utslapp-av_sfs-2020-1173",
    summary:
      "Reglerar handeln med utsläppsrätter (EU ETS). Anläggningar inom systemet måste ha tillstånd, övervaka utsläpp och varje år överlämna utsläppsrätter motsvarande sina utsläpp.",
    appliesTo: "Energiintensiva anläggningar och industri som omfattas av EU:s handelssystem.",
    keywords: ["utsläppsrätter", "ets", "växthusgaser", "övervakningsplan", "verifiering", "koldioxid"],
    checklist: [
      "Avgör om anläggningen omfattas av handelssystemet (EU ETS).",
      "Säkerställ tillstånd för utsläpp av växthusgaser.",
      "Upprätta och följ en godkänd övervakningsplan för utsläpp.",
      "Övervaka och beräkna utsläpp enligt EU:s övervakningsförordning.",
      "Låt utsläppsrapporten verifieras av ackrediterad kontrollör.",
      "Överlämna utsläppsrätter motsvarande föregående års utsläpp i tid."
    ]
  },
  {
    id: "reduktionsplikt",
    title: "Lag om reduktion av växthusgasutsläpp från drivmedel",
    sfs: "SFS 2017:1201",
    category: "Köldmedier & utsläpp",
    authority: "Energimyndigheten",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20171201-om-reduktion-av_sfs-2017-1201",
    summary:
      "Reduktionsplikten kräver att drivmedelsleverantörer minskar växthusgasutsläppen från bensin och diesel genom inblandning av förnybara drivmedel.",
    appliesTo: "Leverantörer av bensin, diesel och annan reduktionspliktig energi.",
    keywords: ["reduktionsplikt", "drivmedel", "biodrivmedel", "växthusgaser", "inblandning"],
    checklist: [
      "Avgör om företaget är reduktionspliktig leverantör.",
      "Beräkna årets reduktionsnivå utifrån levererade volymer.",
      "Säkerställ tillräcklig inblandning av förnybara drivmedel.",
      "Säkerställ hållbarhetsbesked för biodrivmedel som tillgodoräknas.",
      "Rapportera till Energimyndigheten enligt fastställda tidsfrister."
    ]
  },
  {
    id: "hallbarhetsrapport",
    title: "Hållbarhetsrapportering enligt årsredovisningslagen (CSRD)",
    sfs: "SFS 1995:1554, 6 kap.",
    category: "Hållbarhetsrapportering",
    authority: "Bolagsverket / Finansinspektionen",
    updated: "Genomför CSRD-direktivet",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/arsredovisningslag-19951554_sfs-1995-1554",
    summary:
      "Krav på att större företag upprättar en hållbarhetsrapport som beskriver miljö, sociala förhållanden, personal, mänskliga rättigheter och antikorruption. Utökas successivt genom CSRD och ESRS-standarderna.",
    appliesTo: "Större företag och företag av allmänt intresse som överskrider tröskelvärden för anställda, omsättning och balansomslutning.",
    keywords: ["hållbarhetsrapport", "csrd", "esrs", "dubbel väsentlighet", "esg", "redovisning", "scope"],
    checklist: [
      "Avgör om företaget omfattas och från vilket räkenskapsår kraven gäller.",
      "Genomför en dubbel väsentlighetsanalys (påverkan samt finansiell risk).",
      "Identifiera tillämpliga ESRS-standarder och relevanta upplysningskrav.",
      "Samla in data för miljö (klimat, vatten, biologisk mångfald), sociala och styrningsfrågor.",
      "Beräkna och redovisa växthusgasutsläpp (scope 1, 2 och relevant scope 3).",
      "Integrera hållbarhetsrapporten i förvaltningsberättelsen i digitalt format.",
      "Säkerställ extern granskning (bestyrkande) av hållbarhetsrapporten."
    ]
  },
  {
    id: "taxonomin",
    title: "EU:s taxonomiförordning",
    sfs: "EU 2020/852",
    category: "Hållbarhetsrapportering",
    authority: "Finansinspektionen",
    updated: "EU-förordning",
    link: "https://finansinspektionen.se/sv/hallbarhet/regler/taxonomiforordningen/",
    summary:
      "Klassificeringssystem för miljömässigt hållbara ekonomiska verksamheter. Företag som omfattas redovisar hur stor andel av omsättning, capex och opex som är taxonomiförenlig.",
    appliesTo: "Företag som omfattas av hållbarhetsrapporteringskraven samt finansmarknadsaktörer.",
    keywords: ["taxonomi", "hållbara investeringar", "capex", "opex", "do no significant harm", "klimat"],
    checklist: [
      "Avgör om företaget omfattas av taxonomirapporteringen.",
      "Kartlägg vilka verksamheter som kan vara taxonomiförenliga.",
      "Bedöm väsentligt bidrag till något av de sex miljömålen.",
      "Säkerställ att kriterierna 'orsaka inte betydande skada' (DNSH) uppfylls.",
      "Verifiera att minimiskyddsåtgärder för sociala frågor uppfylls.",
      "Beräkna och redovisa andel taxonomiförenlig omsättning, capex och opex."
    ]
  },
  {
    id: "industriutslapp",
    title: "Industriutsläppsförordningen",
    sfs: "SFS 2013:250",
    category: "Tillstånd & anmälan",
    authority: "Länsstyrelsen / Naturvårdsverket",
    updated: "Genomför IED-direktivet",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/industriutslappsforordning-2013250_sfs-2013-250",
    summary:
      "Genomför EU:s industriutsläppsdirektiv (IED). Ställer krav på bästa tillgängliga teknik (BAT), BAT-slutsatser och statusrapport för större industrianläggningar.",
    appliesTo: "Större industrianläggningar (industriutsläppsverksamheter) inom IED:s tillämpningsområde.",
    keywords: ["ied", "bat", "bästa tillgängliga teknik", "statusrapport", "utsläppsnivåer", "industri"],
    checklist: [
      "Avgör om anläggningen är en industriutsläppsverksamhet enligt förordningen.",
      "Identifiera tillämpliga BAT-slutsatser för branschen.",
      "Säkerställ att utsläppsvärden ligger inom BAT-relaterade utsläppsnivåer (BAT-AEL).",
      "Upprätta statusrapport om mark och grundvatten vid behov.",
      "Anpassa verksamheten inom fyra år efter nya BAT-slutsatser.",
      "Rapportera till tillsynsmyndigheten enligt kraven."
    ]
  },
  {
    id: "rohs",
    title: "RoHS – farliga ämnen i elektronik",
    sfs: "SFS 2012:861",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen (KemI)",
    updated: "Genomför EU 2011/65",
    link: "https://www.kemi.se/lagar-och-regler/ytterligare-eu-regler/rohs-direktivet-farliga-amnen-i-elektronik",
    summary:
      "Begränsar användningen av vissa farliga ämnen (t.ex. bly, kvicksilver, kadmium, vissa flamskyddsmedel och ftalater) i elektrisk och elektronisk utrustning.",
    appliesTo: "Tillverkare, importörer och distributörer av elektrisk och elektronisk utrustning.",
    keywords: ["rohs", "elektronik", "bly", "kadmium", "ftalater", "ce-märkning", "farliga ämnen"],
    checklist: [
      "Kontrollera att produkter inte överskrider gränsvärdena för begränsade ämnen.",
      "Begär dokumentation om ämnesinnehåll från leverantörer i kedjan.",
      "Upprätta teknisk dokumentation och EU-försäkran om överensstämmelse.",
      "CE-märk berörda produkter.",
      "Säkerställ spårbarhet med typ-, parti- eller serienummer.",
      "Spara dokumentationen i minst tio år."
    ]
  },
  {
    id: "drivmedelslagen",
    title: "Drivmedelslagen",
    sfs: "SFS 2011:319",
    category: "Energi",
    authority: "Energimyndigheten / Naturvårdsverket",
    updated: "Senast ändrad 2021",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/drivmedelslag-2011319_sfs-2011-319",
    summary:
      "Ställer miljö- och kvalitetskrav på drivmedel samt krav på hållbarhetsbesked och information till konsument om drivmedlets klimatpåverkan.",
    appliesTo: "Leverantörer och försäljare av drivmedel.",
    keywords: ["drivmedel", "bränslekvalitet", "hållbarhetsbesked", "klimatdeklaration", "bensin", "diesel"],
    checklist: [
      "Säkerställ att drivmedel uppfyller fastställda miljö- och kvalitetskrav.",
      "Tillhandahåll hållbarhetsbesked för biodrivmedel.",
      "Informera konsumenter om drivmedlens växthusgaspåverkan vid pump.",
      "Rapportera uppgifter om levererade drivmedel till myndigheten."
    ]
  },
  {
    id: "naturvardslagen-strandskydd",
    title: "Strandskydd och områdesskydd (miljöbalken 7 kap.)",
    sfs: "SFS 1998:808, 7 kap.",
    category: "Mark & natur",
    authority: "Länsstyrelsen / kommunen",
    updated: "Del av miljöbalken",
    link: "https://www.naturvardsverket.se/amnesomraden/skyddad-natur/strandskydd/",
    summary:
      "Reglerar strandskydd, naturreservat, Natura 2000 och andra skyddade områden. Åtgärder och etableringar inom skyddade områden kräver dispens eller tillstånd.",
    appliesTo: "Företag som planerar byggnation, anläggning eller verksamhet nära stränder eller i skyddade områden.",
    keywords: ["strandskydd", "natura 2000", "naturreservat", "dispens", "biologisk mångfald", "områdesskydd"],
    checklist: [
      "Kontrollera om planerad åtgärd ligger inom strandskydd (normalt 100 m, ibland utvidgat).",
      "Utred om åtgärden berör Natura 2000-område eller annat områdesskydd.",
      "Ansök om strandskyddsdispens eller tillstånd innan åtgärd påbörjas.",
      "Bedöm påverkan på växt- och djurliv samt allmänhetens tillgång till stranden.",
      "Säkerställ att särskilda skäl för dispens kan dokumenteras."
    ]
  },
  {
    id: "vattenverksamhet",
    title: "Vattenverksamhet (miljöbalken 11 kap.)",
    sfs: "SFS 1998:808, 11 kap.",
    category: "Mark & natur",
    authority: "Mark- och miljödomstolen / Länsstyrelsen",
    updated: "Del av miljöbalken",
    link: "https://www.lansstyrelsen.se/vattenverksamhet",
    summary:
      "Åtgärder i vatten – t.ex. muddring, anläggning av brygga, dammar, uttag av vatten och markavvattning – utgör vattenverksamhet som kräver tillstånd eller anmälan.",
    appliesTo: "Verksamheter som utför arbeten i eller påverkar vattenområden och grundvatten.",
    keywords: ["vattenverksamhet", "muddring", "markavvattning", "brygga", "vattenuttag", "tillstånd"],
    checklist: [
      "Avgör om den planerade åtgärden utgör vattenverksamhet.",
      "Bedöm om åtgärden kräver tillstånd (domstol) eller anmälan (länsstyrelsen).",
      "Säkerställ att du har rådighet över vattnet/området.",
      "Utred påverkan på vattenmiljö, fisk och närliggande fastigheter.",
      "Lämna anmälan minst åtta veckor innan arbetet påbörjas, om anmälan räcker.",
      "Beakta miljökvalitetsnormer för vatten."
    ]
  },
  {
    id: "avfallsforbranning",
    title: "Förordning om förbränning av avfall",
    sfs: "SFS 2013:253",
    category: "Avfall",
    authority: "Länsstyrelsen / Naturvårdsverket",
    updated: "Genomför IED-krav",
    link: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2013253-om-forbranning-av-avfall_sfs-2013-253",
    summary:
      "Reglerar utsläpps- och kontrollkrav vid förbränning och samförbränning av avfall, inklusive mätning av utsläpp till luft och vatten.",
    appliesTo: "Anläggningar som förbränner eller samförbränner avfall.",
    keywords: ["avfallsförbränning", "utsläpp", "samförbränning", "mätning", "rökgas"],
    checklist: [
      "Säkerställ tillstånd för förbränning eller samförbränning av avfall.",
      "Följ gränsvärden för utsläpp till luft och vatten.",
      "Genomför kontinuerlig och periodisk mätning av utsläpp.",
      "Säkerställ rätt förbränningstemperatur och uppehållstid.",
      "Rapportera mätresultat och driftstörningar till tillsynsmyndigheten.",
      "Hantera restprodukter (slagg, aska) som avfall enligt gällande regler."
    ]
  },
  {
    id: "cbam",
    title: "CBAM – gränsjusteringsmekanism för koldioxid (EU)",
    sfs: "EU 2023/956",
    category: "Köldmedier & utsläpp",
    authority: "Naturvårdsverket",
    updated: "Övergångsperiod sedan 2023",
    link: "https://www.naturvardsverket.se/cbam",
    summary:
      "EU:s mekanism för koldioxidjustering vid import av vissa varor (t.ex. järn/stål, aluminium, cement, gödsel, väte och el). Importörer rapporterar inbäddade utsläpp och köper successivt CBAM-certifikat.",
    appliesTo: "Företag som importerar berörda varor till EU.",
    keywords: ["cbam", "import", "koldioxid", "inbäddade utsläpp", "certifikat", "stål", "aluminium"],
    checklist: [
      "Kartlägg om importerade varor omfattas av CBAM (KN-nummer).",
      "Ansök om status som godkänd CBAM-deklarant inför definitiva fasen.",
      "Samla in data om inbäddade utsläpp från leverantörer utanför EU.",
      "Lämna kvartalsvisa CBAM-rapporter under övergångsperioden.",
      "Förbered inköp och överlämning av CBAM-certifikat i definitiva fasen.",
      "Inför rutin för dokumentation och verifiering av utsläppsdata."
    ]
  },
  {
    id: "miljoprovningsforordningen",
    title: "Miljöprövningsförordningen",
    sfs: "SFS 2013:251",
    category: "Tillstånd & anmälan",
    authority: "Länsstyrelsen / kommunens miljönämnd",
    updated: "Senast ändrad 2024",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/miljoprovningsforordning-2013251_sfs-2013-251/",
    summary:
      "Anger vilka verksamheter som är tillstånds- eller anmälningspliktiga och delar in dem i A-, B- och C-verksamheter. Avgör vilken prövningsnivå och vilken myndighet som gäller för din verksamhet.",
    appliesTo:
      "Verksamheter vars bransch finns uppräknad i förordningen (t.ex. tillverkning, livsmedel, lantbruk, avfall, energi, ytbehandling).",
    keywords: ["miljöprövning", "A-verksamhet", "B-verksamhet", "C-verksamhet", "verksamhetskod", "tillståndsplikt", "anmälningsplikt"],
    checklist: [
      "Slå upp din bransch i förordningen och identifiera rätt verksamhetskod.",
      "Fastställ prövningsnivå: A (mark- och miljödomstol), B (länsstyrelsen) eller C (anmälan till kommunen).",
      "Sök tillstånd (A/B) eller lämna anmälan (C) innan verksamheten startar eller ändras väsentligt.",
      "Kontrollera om en planerad ändring är anmälnings- eller tillståndspliktig.",
      "Dokumentera vilken verksamhetskod och prövningsnivå som gäller i egenkontrollen."
    ]
  },
  {
    id: "miljorapport",
    title: "Miljörapport för tillståndspliktig verksamhet",
    sfs: "NFS 2016:8 (MB 26 kap.)",
    category: "Egenkontroll",
    authority: "Naturvårdsverket / Länsstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.naturvardsverket.se/vagledning-och-stod/miljorapport/",
    summary:
      "Tillståndspliktiga miljöfarliga verksamheter (A och B) ska varje år lämna en miljörapport som redovisar hur villkoren i tillståndet följts. Rapporten lämnas digitalt i Svenska Miljörapporteringsportalen (SMP).",
    appliesTo: "A- och B-verksamheter med tillstånd enligt miljöbalken.",
    keywords: ["miljörapport", "smp", "villkor", "årlig rapportering", "tillstånd", "utsläpp"],
    checklist: [
      "Säkerställ att verksamheten är registrerad i Svenska Miljörapporteringsportalen (SMP).",
      "Sammanställ grunddel, textdel och utsläppsdeklaration enligt NFS 2016:8.",
      "Redovisa hur varje tillståndsvillkor har följts under året.",
      "Rapportera utsläpp till luft och vatten samt avfallsmängder.",
      "Lämna miljörapporten senast den 31 mars för föregående kalenderår.",
      "Låt behörig person granska och signera rapporten."
    ]
  },
  {
    id: "miljosanktionsavgifter",
    title: "Förordning om miljösanktionsavgifter",
    sfs: "SFS 2012:259",
    category: "Tillstånd & anmälan",
    authority: "Tillsynsmyndigheten (kommun/länsstyrelse)",
    updated: "Senast ändrad 2024",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2012259-om-miljosanktionsavgifter_sfs-2012-259/",
    summary:
      "Anger fasta avgifter som tas ut när vissa krav i miljölagstiftningen inte följs, t.ex. utebliven anmälan, försenad köldmedierapport eller saknat tillstånd. Avgiften tas ut även utan uppsåt eller oaktsamhet.",
    appliesTo: "Alla verksamhetsutövare som omfattas av anmälnings-, tillstånds- eller rapporteringskrav.",
    keywords: ["miljösanktionsavgift", "sanktion", "förseelse", "anmälan", "köldmedier", "avgift"],
    checklist: [
      "Kartlägg vilka anmälningar, tillstånd och rapporter verksamheten måste lämna.",
      "Inför rutiner och bevakning av tidsfrister (t.ex. köldmedierapport, anmälan).",
      "Säkerställ att åtgärder som kräver anmälan inte påbörjas för tidigt.",
      "Åtgärda brister omgående om en förseelse upptäcks.",
      "Dokumentera lämnade anmälningar och rapporter som bevis."
    ]
  },
  {
    id: "deponering",
    title: "Förordning om deponering av avfall",
    sfs: "SFS 2001:512",
    category: "Avfall",
    authority: "Länsstyrelsen / kommunens miljönämnd",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2001512-om-deponering-av-avfall_sfs-2001-512/",
    summary:
      "Reglerar krav vid deponering av avfall, inklusive klassificering av deponier, mottagningskriterier, karakterisering av avfall och förbud mot att deponera vissa avfallsslag (t.ex. utsorterat brännbart och organiskt avfall).",
    appliesTo: "Verksamheter som deponerar avfall eller lämnar avfall till deponi.",
    keywords: ["deponi", "deponering", "mottagningskriterier", "karakterisering", "brännbart avfall", "farligt avfall"],
    checklist: [
      "Karakterisera avfallet innan det lämnas till deponi.",
      "Säkerställ att avfallet uppfyller mottagningskriterierna för rätt deponiklass.",
      "Deponera inte utsorterat brännbart eller organiskt avfall.",
      "Dokumentera avfallets ursprung, mängd och egenskaper.",
      "Kontrollera att mottagande deponi har tillstånd."
    ]
  },
  {
    id: "producentansvar-dack",
    title: "Förordning om producentansvar för däck",
    sfs: "SFS 1994:1236",
    category: "Producentansvar",
    authority: "Naturvårdsverket",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-19941236-om-producentansvar-for_sfs-1994-1236/",
    summary:
      "Producenter av däck ansvarar för att uttjänta däck samlas in och återvinns eller återanvänds.",
    appliesTo: "Företag som tillverkar eller för in däck (även däck på fordon) till Sverige.",
    keywords: ["däck", "producentansvar", "insamling", "återvinning"],
    checklist: [
      "Avgör om företaget är producent av däck enligt förordningen.",
      "Anslut dig till ett insamlingssystem för uttjänta däck.",
      "Säkerställ att uttjänta däck tas emot och återvinns.",
      "Informera om var däck kan lämnas.",
      "Rapportera mängder enligt systemets krav."
    ]
  },
  {
    id: "producentansvar-bilar",
    title: "Förordning om producentansvar för bilar",
    sfs: "SFS 2007:185",
    category: "Producentansvar",
    authority: "Naturvårdsverket / Transportstyrelsen",
    updated: "Senast ändrad 2022",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2007185-om-producentansvar-for-bilar_sfs-2007-185/",
    summary:
      "Bilproducenter ansvarar för att uttjänta personbilar och lätta lastbilar tas om hand, återanvänds och återvinns kostnadsfritt för bilägaren.",
    appliesTo: "Företag som yrkesmässigt tillverkar eller för in bilar till Sverige.",
    keywords: ["bilar", "uttjänta fordon", "producentansvar", "skrotning", "återvinning"],
    checklist: [
      "Avgör om företaget är bilproducent enligt förordningen.",
      "Säkerställ ett rikstäckande mottagningssystem för uttjänta bilar.",
      "Säkerställ att återvinningsmålen för fordon uppfylls.",
      "Lämna uppgifter om återanvändning och återvinning till myndigheten.",
      "Tillhandahåll demonteringsinformation till auktoriserade bilskrotare."
    ]
  },
  {
    id: "avfallstransport-gransoverskridande",
    title: "Gränsöverskridande transport av avfall",
    sfs: "EU 1013/2006 (ersätts av 2024/1157)",
    category: "Avfall",
    authority: "Naturvårdsverket",
    updated: "Ny förordning tillämpas successivt",
    link: "https://www.naturvardsverket.se/vagledning-och-stod/avfall/gransoverskridande-transporter-av-avfall/",
    summary:
      "Reglerar export, import och transitering av avfall mellan länder. Vissa avfallstransporter kräver anmälan och tillstånd (notifiering); export av farligt avfall för bortskaffande är förbjuden inom vissa områden.",
    appliesTo: "Företag som transporterar, exporterar eller importerar avfall över landsgränser.",
    keywords: ["avfallstransport", "export", "import", "notifiering", "farligt avfall", "transitering"],
    checklist: [
      "Avgör om avfallet får transporteras över gräns och under vilket förfarande.",
      "Skilj på grön-listat avfall (informationskrav) och avfall som kräver notifiering.",
      "Ansök om notifiering och tillstånd hos Naturvårdsverket vid behov.",
      "Säkerställ ekonomisk säkerhet och avtal med mottagare.",
      "Bifoga korrekta transportdokument under hela transporten.",
      "Kontrollera att mottagningsanläggningen har tillstånd."
    ]
  },
  {
    id: "biocider",
    title: "Biocidförordningen (EU)",
    sfs: "EU 528/2012",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen (KemI)",
    updated: "EU-förordning",
    link: "https://www.kemi.se/lagar-och-regler/bekampningsmedel/biocidprodukter",
    summary:
      "Reglerar godkännande och användning av biocidprodukter, t.ex. desinfektionsmedel, träskyddsmedel, råttgift och båtbottenfärg. Produkter måste vara godkända och innehålla godkända verksamma ämnen.",
    appliesTo: "Företag som tillverkar, säljer eller yrkesmässigt använder biocidprodukter.",
    keywords: ["biocider", "desinfektion", "träskydd", "bekämpningsmedel", "godkännande", "verksamt ämne"],
    checklist: [
      "Kartlägg vilka biocidprodukter verksamheten använder eller säljer.",
      "Kontrollera att produkterna är godkända i Sverige/EU.",
      "Säkerställ att eventuell behörighet/utbildning finns för yrkesmässig användning.",
      "Följ villkor för användning, dosering och skyddsåtgärder.",
      "Håll säkerhetsdatablad och godkännandenummer tillgängliga."
    ]
  },
  {
    id: "vaxtskyddsmedel",
    title: "Växtskyddsmedel och bekämpningsmedel",
    sfs: "EU 1107/2009 / SFS 2014:425",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen / kommunen / Länsstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.kemi.se/lagar-och-regler/bekampningsmedel/vaxtskyddsmedel",
    summary:
      "Reglerar godkännande och användning av växtskyddsmedel (kemiska bekämpningsmedel för växtodling). Ställer krav på behörighet, dokumentation, skyddsavstånd och i vissa fall tillstånd eller anmälan för spridning.",
    appliesTo: "Lantbruk, trädgård, golfbanor och andra som yrkesmässigt använder växtskyddsmedel.",
    keywords: ["växtskyddsmedel", "bekämpningsmedel", "spridning", "behörighet", "integrerat växtskydd", "skyddsavstånd"],
    checklist: [
      "Använd endast i Sverige godkända växtskyddsmedel.",
      "Säkerställ giltig användningsbehörighet (utbildning) för berörd personal.",
      "Tillämpa principerna för integrerat växtskydd (IPM).",
      "Anmäl eller sök tillstånd för spridning där det krävs (t.ex. känsliga områden).",
      "För sprutjournal med preparat, dos, plats och tidpunkt.",
      "Håll skyddsavstånd till vattendrag och förvara medlen säkert."
    ]
  },
  {
    id: "pops",
    title: "POPs-förordningen – långlivade organiska föroreningar (EU)",
    sfs: "EU 2019/1021",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen / Naturvårdsverket",
    updated: "EU-förordning",
    link: "https://www.kemi.se/lagar-och-regler/ytterligare-eu-regler/pops-forordningen",
    summary:
      "Förbjuder eller starkt begränsar långlivade organiska föroreningar (POPs) i varor och kemiska produkter, samt ställer krav på hantering av avfall som innehåller POPs.",
    appliesTo: "Tillverkare, importörer och avfallsinnehavare som hanterar berörda ämnen eller varor.",
    keywords: ["pops", "långlivade organiska föroreningar", "pfas", "förbud", "avfall", "begränsning"],
    checklist: [
      "Kontrollera om produkter eller varor kan innehålla POPs-ämnen.",
      "Säkerställ att förbjudna ämnen inte används eller släpps ut på marknaden.",
      "Hantera avfall som innehåller POPs enligt särskilda krav (destruktion).",
      "Begär information om ämnesinnehåll från leverantörer.",
      "Dokumentera kontroller och åtgärder."
    ]
  },
  {
    id: "pcb",
    title: "Förordning om PCB m.m.",
    sfs: "SFS 2007:19",
    category: "Kemikalier",
    authority: "Kommunens miljönämnd",
    updated: "Senast ändrad 2016",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-200719-om-pcb-mm_sfs-2007-19/",
    summary:
      "Kräver inventering och sanering av PCB i byggnader och anläggningar uppförda eller renoverade 1956–1973, t.ex. i fogmassor, golvmassor, isolerrutor och kondensatorer.",
    appliesTo: "Fastighetsägare till byggnader och anläggningar från aktuell tidsperiod.",
    keywords: ["pcb", "fogmassa", "sanering", "inventering", "fastighet", "byggnad"],
    checklist: [
      "Inventera byggnader uppförda/renoverade 1956–1973 efter PCB.",
      "Anmäl sanering till kommunen i god tid (normalt minst tre veckor innan).",
      "Sanera PCB-haltiga produkter inom föreskrivna tidsfrister.",
      "Hantera PCB-avfall som farligt avfall.",
      "Dokumentera inventering och utförd sanering."
    ]
  },
  {
    id: "cisterner",
    title: "Cisterner och hantering av brandfarliga vätskor/spillolja",
    sfs: "NFS 2021:10",
    category: "Kemikalier",
    authority: "Kommunens miljönämnd",
    updated: "Gäller från 2022",
    link: "https://www.naturvardsverket.se/vagledning-och-stod/fororeningar-och-sanering/cisterner/",
    summary:
      "Naturvårdsverkets föreskrifter om skydd mot mark- och vattenförorening vid hantering av brandfarliga vätskor och spilloljor. Ställer krav på återkommande kontroll, information till tillsynsmyndighet och förstärkt skydd inom vattenskyddsområde.",
    appliesTo: "Verksamheter och fastigheter med cisterner för t.ex. eldningsolja, diesel eller spillolja.",
    keywords: ["cistern", "olja", "diesel", "spillolja", "kontroll", "vattenskyddsområde", "invallning"],
    checklist: [
      "Inventera cisterner och rörledningar samt deras volym och placering.",
      "Informera tillsynsmyndigheten innan en cistern installeras.",
      "Låt ackrediterat företag utföra installations- och återkommande kontroll.",
      "Säkerställ sekundärt skydd (invallning) där det krävs, särskilt inom vattenskyddsområde.",
      "Anmäl cistern som tas ur bruk och töm och rengör den.",
      "Spara kontrollrapporter och åtgärda anmärkningar."
    ]
  },
  {
    id: "kemikalieskatt",
    title: "Lag om skatt på kemikalier i viss elektronik",
    sfs: "SFS 2016:1067",
    category: "Skatter & avgifter",
    authority: "Skatteverket",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20161067-om-skatt-pa-kemikalier-i-viss_sfs-2016-1067/",
    summary:
      "Punktskatt på viss elektronik (t.ex. vitvaror och annan elektronik) baserad på vikt, med avdrag för produkter som inte innehåller vissa flamskyddsmedel. Syftar till att minska farliga ämnen i hemmiljön.",
    appliesTo: "Företag som tillverkar, för in eller importerar skattepliktig elektronik yrkesmässigt.",
    keywords: ["kemikalieskatt", "elektronik", "flamskyddsmedel", "punktskatt", "vitvaror", "avdrag"],
    checklist: [
      "Avgör om dina produkter är skattepliktig elektronik (KN-nummer och vikt).",
      "Registrera dig som lagerhållare hos Skatteverket om förutsättningarna uppfylls.",
      "Beräkna skatten utifrån produktens vikt och tillämpliga avdrag.",
      "Dokumentera förekomst av flamskyddsmedel för att kunna yrka avdrag.",
      "Deklarera och betala punktskatten i rätt tid."
    ]
  },
  {
    id: "vattentjanster",
    title: "Lag om allmänna vattentjänster",
    sfs: "SFS 2006:412",
    category: "Vatten & avlopp",
    authority: "Kommunen / VA-huvudman / Länsstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2006412-om-allmanna-vattentjanster_sfs-2006-412/",
    summary:
      "Reglerar kommunal vattenförsörjning och avlopp samt skyldigheter för den som är ansluten till det allmänna VA-nätet, inklusive krav på hantering av dag- och spillvatten.",
    appliesTo: "Företag och fastighetsägare anslutna till kommunalt vatten och avlopp.",
    keywords: ["vatten", "avlopp", "va", "spillvatten", "dagvatten", "anslutning", "abva", "oljeavskiljare"],
    checklist: [
      "Kartlägg verksamhetens anslutning till kommunalt vatten och avlopp.",
      "Följ de allmänna bestämmelserna för VA (ABVA) i kommunen.",
      "Släpp inte ut ämnen som kan skada ledningsnät eller reningsverk.",
      "Installera olje- eller fettavskiljare där verksamheten kräver det.",
      "Stäm av krav på industriellt avloppsvatten med VA-huvudmannen."
    ]
  },
  {
    id: "vattenforvaltning",
    title: "Vattenförvaltning och miljökvalitetsnormer för vatten",
    sfs: "SFS 2004:660",
    category: "Vatten & avlopp",
    authority: "Vattenmyndigheterna / Länsstyrelsen",
    updated: "Senast ändrad 2024",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2004660-om-forvaltning-av_sfs-2004-660/",
    summary:
      "Genomför EU:s ramdirektiv för vatten. Fastställer miljökvalitetsnormer (MKN) för yt- och grundvatten som verksamheter inte får bidra till att överskrida. Påverkar tillståndsprövningar och utsläppsvillkor.",
    appliesTo: "Verksamheter som påverkar vattenkvaliteten genom utsläpp eller vattenuttag.",
    keywords: ["miljökvalitetsnormer", "mkn", "vattendirektivet", "ekologisk status", "grundvatten", "utsläpp"],
    checklist: [
      "Identifiera vilka vattenförekomster verksamheten kan påverka.",
      "Ta reda på gällande miljökvalitetsnormer och status för dessa.",
      "Bedöm om verksamhetens utsläpp riskerar att försämra statusen.",
      "Vidta åtgärder så att normerna inte överskrids.",
      "Beakta MKN i tillståndsansökningar och egenkontroll."
    ]
  },
  {
    id: "luftkvalitet",
    title: "Luftkvalitetsförordningen",
    sfs: "SFS 2010:477",
    category: "Luft & buller",
    authority: "Naturvårdsverket / kommunen / Länsstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/luftkvalitetsforordning-2010477_sfs-2010-477/",
    summary:
      "Fastställer miljökvalitetsnormer för utomhusluft (t.ex. kvävedioxid, partiklar PM10 och PM2,5, bensen). Verksamheter får inte medverka till att normerna överskrids.",
    appliesTo: "Verksamheter med utsläpp till luft eller som ger upphov till trafik som påverkar luftkvaliteten.",
    keywords: ["luftkvalitet", "miljökvalitetsnormer", "partiklar", "kvävedioxid", "utsläpp till luft", "pm10"],
    checklist: [
      "Kartlägg verksamhetens utsläpp till luft och berörda föroreningar.",
      "Kontrollera gällande miljökvalitetsnormer för området.",
      "Bedöm om verksamheten bidrar till att normer riskerar att överskridas.",
      "Vidta åtgärder för att begränsa utsläpp och damning.",
      "Beakta luftnormer i lokalisering och tillståndsprövning."
    ]
  },
  {
    id: "verksamhetsbuller",
    title: "Buller från industri och annan verksamhet",
    sfs: "Miljöbalken 2 & 26 kap.",
    category: "Luft & buller",
    authority: "Kommunens miljönämnd / Länsstyrelsen",
    updated: "Naturvårdsverkets vägledning",
    link: "https://www.naturvardsverket.se/vagledning-och-stod/buller/industri--och-annat-verksamhetsbuller/",
    summary:
      "Buller från verksamheter regleras genom miljöbalkens hänsynsregler och Naturvårdsverkets vägledning med riktvärden för ljudnivå vid bostäder. Verksamheten ska förebygga och begränsa störande buller mot omgivningen.",
    appliesTo:
      "Verksamheter som ger upphov till buller mot bostäder eller känsliga områden (industri, fläktar, transporter, restaurang m.m.).",
    keywords: ["buller", "ljudnivå", "riktvärden", "omgivning", "störning", "bostäder"],
    checklist: [
      "Identifiera bullerkällor och närliggande bostäder eller känsliga punkter.",
      "Jämför verksamhetens ljudnivåer mot Naturvårdsverkets riktvärden.",
      "Genomför bullermätning eller beräkning vid behov.",
      "Vidta åtgärder (inkapsling, drifttider, ljuddämpning) för att klara riktvärdena.",
      "Hantera klagomål och dokumentera åtgärder i egenkontrollen."
    ]
  },
  {
    id: "ekodesign-espr",
    title: "Ekodesign för hållbara produkter (ESPR)",
    sfs: "EU 2024/1781",
    category: "Plast & produkter",
    authority: "Energimyndigheten / Naturvårdsverket / Kemikalieinspektionen",
    updated: "I kraft 2024, krav införs successivt",
    link: "https://www.naturvardsverket.se/amnesomraden/cirkular-ekonomi/eu-forordningen-om-ekodesign-for-hallbara-produkter-espr/",
    summary:
      "EU:s ekodesignförordning som ersätter ekodesigndirektivet (2009/125). Ställer krav på produkters hållbarhet, reparerbarhet, återvinningsbarhet och ett digitalt produktpass. Krav införs per produktgrupp genom delegerade akter och den förbjuder förstöring av osålda konsumentprodukter.",
    appliesTo:
      "Tillverkare, importörer och distributörer av produkter som omfattas av delegerade akter (successivt allt fler produktgrupper).",
    keywords: ["ekodesign", "espr", "digitalt produktpass", "cirkulär ekonomi", "reparerbarhet", "återvinningsbarhet"],
    checklist: [
      "Bevaka vilka delegerade akter och produktgrupper som berör dina produkter.",
      "Kartlägg krav på hållbarhet, reparerbarhet och återvinningsbarhet.",
      "Förbered framtagande av digitalt produktpass för berörda produkter.",
      "Säkerställ att produktinformation och dokumentation finns tillgänglig.",
      "Inför rutiner för att inte förstöra osålda konsumentprodukter där förbud gäller.",
      "Följ tidplanen för respektive produktgrupp."
    ]
  },
  {
    id: "energimarkning",
    title: "Energimärkningsförordningen (EU)",
    sfs: "EU 2017/1369",
    category: "Energi",
    authority: "Energimyndigheten",
    updated: "EU-förordning",
    link: "https://www.energimyndigheten.se/energieffektivisering/produkter-med-energimarkning/",
    summary:
      "Kräver att energirelaterade produkter (t.ex. vitvaror, belysning, bildskärmar) förses med EU:s energimärkningsetikett och produktinformationsblad samt registreras i EPREL-databasen.",
    appliesTo: "Tillverkare, importörer och återförsäljare av energimärkta produkter.",
    keywords: ["energimärkning", "eprel", "energietikett", "vitvaror", "produktblad", "energiklass"],
    checklist: [
      "Kontrollera om produkterna omfattas av energimärkningskrav.",
      "Registrera produkter i EU:s produktdatabas EPREL.",
      "Förse produkter med korrekt energietikett och produktinformationsblad.",
      "Säkerställ att etiketten visas i butik och vid distansförsäljning.",
      "Håll teknisk dokumentation tillgänglig för marknadskontroll."
    ]
  },
  {
    id: "energideklaration",
    title: "Lag om energideklaration för byggnader",
    sfs: "SFS 2006:985",
    category: "Energi",
    authority: "Boverket",
    updated: "Senast ändrad 2020",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2006985-om-energideklaration-for_sfs-2006-985/",
    summary:
      "Kräver energideklaration för många byggnader, bl.a. vid uthyrning och försäljning samt för större lokaler som ofta besöks av allmänheten. Deklarationen visar byggnadens energiprestanda och förslag på åtgärder.",
    appliesTo: "Ägare av byggnader som hyrs ut, säljs eller utgör större publika lokaler.",
    keywords: ["energideklaration", "byggnad", "energiprestanda", "uthyrning", "försäljning", "lokal"],
    checklist: [
      "Avgör om byggnaden ska ha en giltig energideklaration.",
      "Anlita en certifierad energiexpert för att upprätta deklarationen.",
      "Säkerställ att deklarationen registreras hos Boverket.",
      "Anslå energideklarationen i större publika lokaler.",
      "Visa energiprestanda vid annonsering inför uthyrning eller försäljning.",
      "Förnya deklarationen minst vart tionde år."
    ]
  },
  {
    id: "energiskatt",
    title: "Lag om skatt på energi (energi- och koldioxidskatt)",
    sfs: "SFS 1994:1776",
    category: "Skatter & avgifter",
    authority: "Skatteverket",
    updated: "Senast ändrad 2024",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-19941776-om-skatt-pa-energi_sfs-1994-1776/",
    summary:
      "Reglerar energiskatt, koldioxidskatt och svavelskatt på bränslen och el. Innehåller även regler om avdrag, nedsättning och återbetalning för vissa verksamheter (t.ex. industri och jordbruk).",
    appliesTo: "Företag som förbrukar el och bränslen, samt producenter och leverantörer av energi.",
    keywords: ["energiskatt", "koldioxidskatt", "bränsle", "el", "återbetalning", "punktskatt"],
    checklist: [
      "Kartlägg verksamhetens förbrukning av el och bränslen.",
      "Kontrollera om verksamheten har rätt till nedsättning eller återbetalning.",
      "Ansök om återbetalning av energi- eller koldioxidskatt där det är möjligt.",
      "Säkerställ korrekt hantering om företaget är skattskyldigt (t.ex. egen produktion).",
      "Dokumentera underlag för avdrag och deklarera i rätt tid."
    ]
  },
  {
    id: "seveso",
    title: "Seveso – allvarliga kemikalieolyckor",
    sfs: "SFS 1999:381 / förordn. 2015:236",
    category: "Risk & säkerhet",
    authority: "Länsstyrelsen / MSB / kommunen",
    updated: "Genomför Seveso III-direktivet",
    link: "https://www.msb.se/sv/amnesomraden/skydd-mot-olyckor-och-farliga-amnen/farliga-amnen/seveso/",
    summary:
      "Gäller verksamheter som hanterar stora mängder farliga kemikalier. Ställer krav på förebyggande av allvarliga kemikalieolyckor, anmälan eller säkerhetsrapport, handlingsprogram och information till allmänheten.",
    appliesTo: "Verksamheter som hanterar farliga ämnen över Sevesodirektivets mängdtrösklar (lägre eller högre kravnivå).",
    keywords: ["seveso", "kemikalieolycka", "säkerhetsrapport", "farliga ämnen", "handlingsprogram", "risk"],
    checklist: [
      "Summera mängderna av farliga ämnen och jämför mot Sevesotrösklarna.",
      "Avgör om verksamheten omfattas av lägre eller högre kravnivå.",
      "Lämna anmälan (lägre nivå) eller säkerhetsrapport (högre nivå) till länsstyrelsen.",
      "Upprätta handlingsprogram och säkerhetsledningssystem för att förebygga olyckor.",
      "Ta fram intern plan för räddningsinsatser och samverka om extern plan.",
      "Informera allmänheten om risker och skyddsåtgärder."
    ]
  },
  {
    id: "eudr",
    title: "Avskogningsförordningen (EUDR)",
    sfs: "EU 2023/1115",
    category: "Leverantörskedja",
    authority: "Skogsstyrelsen / Länsstyrelsen",
    updated: "Tillämpas 30 dec 2026 (små företag 30 juni 2027)",
    link: "https://www.skogsstyrelsen.se/lag-och-tillsyn/avskogningsforordningen/",
    summary:
      "Förbjuder att vissa råvaror och produkter som bidragit till avskogning släpps ut på EU-marknaden. Omfattar nötkött, trä, soja, palmolja, kakao, kaffe och gummi samt produkter av dessa. Kräver tillbörlig aktsamhet (due diligence) och geografisk spårbarhet.",
    appliesTo: "Företag som släpper ut, handlar med eller exporterar berörda råvaror och produkter.",
    keywords: ["eudr", "avskogning", "due diligence", "spårbarhet", "soja", "kaffe", "trä", "palmolja"],
    checklist: [
      "Kartlägg om dina produkter omfattas (nötkött, trä, soja, palmolja, kakao, kaffe, gummi).",
      "Bygg upp ett system för tillbörlig aktsamhet (due diligence).",
      "Samla in geografiska koordinater för var råvaran producerats.",
      "Bedöm och minimera risken för avskogning och olaglig produktion.",
      "Lämna förklaring om tillbörlig aktsamhet i EU:s informationssystem.",
      "Säkerställ att rätt tidsfrist tillämpas (stora företag dec 2026, små juni 2027)."
    ]
  },
  {
    id: "konfliktmineraler",
    title: "Konfliktmineralförordningen (EU)",
    sfs: "EU 2017/821",
    category: "Leverantörskedja",
    authority: "Kommerskollegium",
    updated: "EU-förordning",
    link: "https://www.kommerskollegium.se/",
    summary:
      "Kräver att importörer av tenn, tantal, volfram och guld (3TG) gör tillbörlig aktsamhet i leverantörskedjan för att säkerställa att mineralerna inte finansierar konflikter eller kränkningar i högriskområden.",
    appliesTo: "Företag som importerar tenn, tantal, volfram, guld eller deras malmer till EU över vissa volymtrösklar.",
    keywords: ["konfliktmineraler", "3tg", "tenn", "tantal", "volfram", "guld", "due diligence"],
    checklist: [
      "Avgör om företaget importerar 3TG-mineraler över volymtröskeln.",
      "Inför ett system för tillbörlig aktsamhet enligt OECD:s vägledning.",
      "Identifiera smältverk och raffinaderier i leverantörskedjan.",
      "Bedöm och hantera risker kopplade till konfliktområden.",
      "Låt en oberoende part granska aktsamheten och rapportera årligen."
    ]
  }
];

// Exportera till global scope för app.js (ingen modul-bundler behövs).
if (typeof window !== "undefined") {
  window.LAWS = LAWS;
}
