/*
 * Lagkompassen – kompletterande miljö-, risk- och hållbarhetsförfattningar.
 * Breddar täckningen mot en fullständig företagslaglista (Notisum-stil).
 * Lägger till posterna i window.LAWS (laddas efter data.js).
 */
var MILJO_TILLAGG_LAWS = [
  {
    id: "kemiska-produkter-produktregister",
    title: "Förordning om kemiska produkter och anmälan till produktregistret",
    sfs: "SFS 2008:245",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen (KemI)",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2008245-om-kemiska-produkter-och_sfs-2008-245/",
    summary:
      "Grundläggande svenska regler för kemiska produkter och biotekniska organismer. Den som yrkesmässigt tillverkar eller för in kemiska produkter till Sverige över vissa mängder ska anmäla dem till Kemikalieinspektionens produktregister.",
    appliesTo: "Företag som tillverkar eller importerar kemiska produkter (normalt från 100 kg/produkt och år).",
    keywords: ["produktregister", "kemiska produkter", "anmälan", "kemi", "import", "tillverkning"],
    checklist: [
      "Avgör om företaget är anmälningsskyldigt (tillverkar/för in ≥ 100 kg/år av en produkt).",
      "Registrera företaget och anmäl produkterna till Kemikalieinspektionens produktregister.",
      "Uppdatera mängd- och sammansättningsuppgifter årligen.",
      "Håll uppgifter om produkternas funktion och användningsområde aktuella.",
      "Betala årsavgift till produktregistret."
    ]
  },
  {
    id: "kvicksilver",
    title: "Kvicksilverförordningen (EU)",
    sfs: "EU 2017/852",
    category: "Kemikalier",
    authority: "Kemikalieinspektionen / Naturvårdsverket",
    updated: "EU-förordning",
    link: "https://www.kemi.se/lagar-och-regler/ytterligare-eu-regler/kvicksilver",
    summary:
      "Reglerar och begränsar användning, export, import och avfallshantering av kvicksilver och kvicksilverhaltiga varor. I Sverige gäller dessutom ett långtgående nationellt förbud mot kvicksilver.",
    appliesTo: "Företag som hanterar, säljer eller ger upphov till avfall som innehåller kvicksilver.",
    keywords: ["kvicksilver", "förbud", "begränsning", "avfall", "amalgam", "mätinstrument"],
    checklist: [
      "Kartlägg om verksamheten hanterar kvicksilver eller kvicksilverhaltiga varor.",
      "Säkerställ att förbjudna produkter inte tillverkas, importeras eller säljs.",
      "Hantera kvicksilveravfall som farligt avfall och lämna till godkänd mottagare.",
      "Dokumentera förekomst och åtgärder."
    ]
  },
  {
    id: "ozonnedbrytande",
    title: "Förordning om ozonnedbrytande ämnen (EU)",
    sfs: "EU 2024/590",
    category: "Köldmedier & utsläpp",
    authority: "Naturvårdsverket / kommunen",
    updated: "Ersatte EU 1005/2009",
    link: "https://www.naturvardsverket.se/vagledning-och-stod/luft-och-klimat/ozonnedbrytande-amnen/",
    summary:
      "Reglerar ozonnedbrytande ämnen (t.ex. äldre köldmedier som CFC och HCFC samt haloner) och krav på läckagekontroll, återvinning och utfasning. Kompletterar reglerna om fluorerade växthusgaser.",
    appliesTo: "Operatörer av äldre kyl-, frys- och brandsläckningsutrustning samt de som hanterar sådana ämnen.",
    keywords: ["ozonnedbrytande", "cfc", "hcfc", "haloner", "läckagekontroll", "utfasning"],
    checklist: [
      "Inventera utrustning som kan innehålla ozonnedbrytande ämnen.",
      "Säkerställ att förbjudna ämnen fasas ut och inte fylls på.",
      "Låt certifierad personal utföra kontroll, service och återvinning.",
      "Omhänderta uttjänta ämnen som farligt avfall.",
      "Dokumentera kontroller och åtgärder."
    ]
  },
  {
    id: "voc-losningsmedel",
    title: "Förordning om användning av organiska lösningsmedel (VOC)",
    sfs: "SFS 2013:254",
    category: "Luft & buller",
    authority: "Länsstyrelsen / kommunens miljönämnd",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2013254-om-anvandning-av-organiska_sfs-2013-254/",
    summary:
      "Begränsar utsläpp av flyktiga organiska föreningar (VOC) från verksamheter som använder organiska lösningsmedel, t.ex. lackering, tryckeri, ytbehandling, kemtvätt och limning.",
    appliesTo: "Verksamheter som använder organiska lösningsmedel över vissa förbrukningströsklar.",
    keywords: ["voc", "lösningsmedel", "lackering", "tryckeri", "ytbehandling", "utsläpp till luft"],
    checklist: [
      "Beräkna årlig förbrukning av organiska lösningsmedel och jämför med tröskelvärdena.",
      "Anmäl verksamheten och upprätta vid behov en lösningsmedelsbokföring.",
      "Håll utsläppen inom gränsvärdena eller följ en godkänd minskningsplan.",
      "Byt ut farliga lösningsmedel mot mindre skadliga där det går.",
      "Rapportera till tillsynsmyndigheten enligt kraven."
    ]
  },
  {
    id: "fororenade-omraden",
    title: "Förorenade områden och efterbehandling (miljöbalken 10 kap.)",
    sfs: "SFS 1998:808, 10 kap.",
    category: "Mark & natur",
    authority: "Länsstyrelsen / kommunens miljönämnd",
    updated: "Del av miljöbalken",
    link: "https://www.naturvardsverket.se/amnesomraden/fororenade-omraden/",
    summary:
      "Reglerar ansvar för att utreda och efterbehandla förorenad mark, byggnader, grundvatten och sediment. Den som upptäcker en förorening är skyldig att genast underrätta tillsynsmyndigheten.",
    appliesTo: "Verksamhetsutövare och fastighetsägare som orsakar eller upptäcker föroreningar.",
    keywords: ["förorenad mark", "efterbehandling", "sanering", "upplysningsskyldighet", "grundvatten", "ansvar"],
    checklist: [
      "Underrätta genast tillsynsmyndigheten om en förorening upptäcks.",
      "Utred föroreningens omfattning och risker vid misstanke.",
      "Anmäl avhjälpandeåtgärder (sanering) till tillsynsmyndigheten i god tid.",
      "Hantera förorenade massor som avfall enligt gällande regler.",
      "Beakta ansvarsfrågan vid förvärv och överlåtelse av fastigheter."
    ]
  },
  {
    id: "artskyddsforordningen",
    title: "Artskyddsförordningen",
    sfs: "SFS 2007:845",
    category: "Mark & natur",
    authority: "Länsstyrelsen",
    updated: "Senast ändrad 2022",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/artskyddsforordning-2007845_sfs-2007-845/",
    summary:
      "Skyddar vilda djur- och växtarter. Förbjuder bl.a. att skada eller störa fridlysta arter och deras livsmiljöer. Åtgärder som kan påverka skyddade arter kan kräva dispens.",
    appliesTo: "Företag som planerar mark-, bygg- eller anläggningsarbete eller skogsbruk som kan påverka skyddade arter.",
    keywords: ["artskydd", "fridlysning", "biologisk mångfald", "dispens", "livsmiljö", "natura 2000"],
    checklist: [
      "Utred förekomst av fridlysta arter innan mark- eller byggåtgärder.",
      "Bedöm om åtgärden kan skada eller störa skyddade arter eller deras livsmiljöer.",
      "Sök dispens hos länsstyrelsen när det krävs.",
      "Anpassa tidpunkt och metod för att minska påverkan.",
      "Dokumentera inventering och hänsynsåtgärder."
    ]
  },
  {
    id: "miljobedomning-mkb",
    title: "Miljöbedömningar och miljökonsekvensbeskrivning (MKB)",
    sfs: "SFS 2017:966 (MB 6 kap.)",
    category: "Tillstånd & anmälan",
    authority: "Länsstyrelsen / kommunen",
    updated: "Senast ändrad 2021",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/miljobedomningsforordning-2017966_sfs-2017-966/",
    summary:
      "Krav på att bedöma en verksamhets eller plans miljöpåverkan. Vid tillståndsprövning ska en miljökonsekvensbeskrivning (MKB) tas fram, och samråd hållas med myndigheter och berörda.",
    appliesTo: "Verksamheter och planer som är tillståndspliktiga eller kan medföra betydande miljöpåverkan.",
    keywords: ["mkb", "miljöbedömning", "samråd", "betydande miljöpåverkan", "tillståndsprövning"],
    checklist: [
      "Avgör om verksamheten/planen kräver en specifik miljöbedömning.",
      "Genomför undersökningssamråd och avgränsningssamråd.",
      "Ta fram en miljökonsekvensbeskrivning (MKB) med rätt innehåll.",
      "Samråd med länsstyrelse, tillsynsmyndighet och berörda parter.",
      "Bifoga MKB:n till tillståndsansökan."
    ]
  },
  {
    id: "nedskrapning",
    title: "Nedskräpningsförbud (miljöbalken 15 kap.)",
    sfs: "SFS 1998:808, 15 kap.",
    category: "Avfall",
    authority: "Kommunens miljönämnd / Länsstyrelsen",
    updated: "Del av miljöbalken",
    link: "https://www.naturvardsverket.se/amnesomraden/nedskrapning/",
    summary:
      "Förbjuder nedskräpning utomhus på platser som allmänheten har tillträde till. Verksamheter ansvarar för att inte skräpa ned och att hålla ordning på sina områden.",
    appliesTo: "Alla verksamheter, särskilt de med utomhusytor, kundflöden eller hantering av förpackat material.",
    keywords: ["nedskräpning", "skräp", "renhållning", "utomhus", "ordning"],
    checklist: [
      "Håll verksamhetens ytor rena och förhindra att skräp sprids.",
      "Placera ut och töm papperskorgar där det behövs.",
      "Säkra lagring av material så att det inte blåser iväg.",
      "Åtgärda nedskräpning i anslutning till verksamheten."
    ]
  },
  {
    id: "byggrivningsavfall",
    title: "Bygg- och rivningsavfall (utsortering)",
    sfs: "Avfallsförordningen 3 kap. (SFS 2020:614)",
    category: "Avfall",
    authority: "Kommunens miljönämnd",
    updated: "Senast ändrad 2023",
    link: "https://www.naturvardsverket.se/vagledning-och-stod/avfall/bygg--och-rivningsavfall/",
    summary:
      "Ställer krav på att bygg- och rivningsavfall sorteras ut i fraktioner (t.ex. trä, mineral, metall, glas, plast, gips) redan på plats, och att farligt avfall och material för återbruk hanteras särskilt.",
    appliesTo: "Företag som utför bygg-, rivnings- eller anläggningsarbete.",
    keywords: ["bygg- och rivningsavfall", "utsortering", "återbruk", "farligt avfall", "materialåtervinning"],
    checklist: [
      "Planera avfallshanteringen innan bygg- eller rivningsarbetet startar.",
      "Sortera ut minst de lagstadgade fraktionerna på arbetsplatsen.",
      "Inventera och hantera farligt avfall (t.ex. asbest, PCB, impregnerat trä) särskilt.",
      "Undersök möjligheten till återbruk och materialåtervinning.",
      "Anlita transportörer och mottagare med rätt tillstånd."
    ]
  },
  {
    id: "farligt-gods",
    title: "Lag om transport av farligt gods",
    sfs: "SFS 2006:263",
    category: "Risk & säkerhet",
    authority: "MSB / Transportstyrelsen",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2006263-om-transport-av-farligt-gods_sfs-2006-263/",
    summary:
      "Reglerar transport av farligt gods på väg, järnväg, till sjöss och i luften (ADR/RID). Ställer krav på klassificering, förpackning, märkning, dokumentation och i vissa fall säkerhetsrådgivare.",
    appliesTo: "Företag som transporterar, lämnar eller tar emot farligt gods (t.ex. kemikalier, drivmedel, gaser).",
    keywords: ["farligt gods", "adr", "transport", "säkerhetsrådgivare", "märkning", "klassificering"],
    checklist: [
      "Klassificera godset och avgör om ADR/RID är tillämpligt.",
      "Förpacka, märka och etikettera farligt gods korrekt.",
      "Upprätta transportdokument och säkerställ rätt utbildning för personalen.",
      "Utse säkerhetsrådgivare om verksamheten omfattas av kravet.",
      "Säkerställ att fordon och utrustning uppfyller kraven."
    ]
  },
  {
    id: "brandfarliga-explosiva",
    title: "Lag om brandfarliga och explosiva varor (LBE)",
    sfs: "SFS 2010:1011",
    category: "Risk & säkerhet",
    authority: "MSB / kommunen",
    updated: "Senast ändrad 2022",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20101011-om-brandfarliga-och-explosiva_sfs-2010-1011/",
    summary:
      "Reglerar hantering, förvaring, import och överföring av brandfarliga och explosiva varor (t.ex. gasol, bensin, diesel, aerosoler, fyrverkerier). Kräver ofta tillstånd och en föreståndare.",
    appliesTo: "Verksamheter som hanterar eller förvarar brandfarliga eller explosiva varor över vissa mängder.",
    keywords: ["brandfarligt", "explosivt", "gasol", "tillstånd", "föreståndare", "förvaring"],
    checklist: [
      "Kartlägg mängder och typ av brandfarliga och explosiva varor.",
      "Ansök om tillstånd hos kommunen när mängderna kräver det.",
      "Utse och anmäl en föreståndare för hanteringen.",
      "Klassa riskområden och vidta skyddsåtgärder mot brand och explosion.",
      "Håll utrustning, förvaring och dokumentation i enlighet med kraven."
    ]
  },
  {
    id: "provnings-tillsynsavgift",
    title: "Avgifter för prövning och tillsyn enligt miljöbalken",
    sfs: "SFS 1998:940",
    category: "Skatter & avgifter",
    authority: "Länsstyrelsen / kommunen",
    updated: "Senast ändrad 2023",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1998940-om-avgifter-for-provning_sfs-1998-940/",
    summary:
      "Reglerar de avgifter som verksamhetsutövare betalar för myndigheternas prövning och tillsyn av miljöfarlig verksamhet, t.ex. årlig tillsynsavgift.",
    appliesTo: "Tillstånds- och anmälningspliktiga verksamheter som står under tillsyn.",
    keywords: ["tillsynsavgift", "prövningsavgift", "miljöbalken", "avgift", "tillsyn"],
    checklist: [
      "Kontrollera vilken avgiftsklass verksamheten tillhör.",
      "Budgetera för årlig tillsynsavgift och eventuell prövningsavgift.",
      "Stäm av avgiften med kommunens taxa eller länsstyrelsen.",
      "Meddela tillsynsmyndigheten vid ändringar som påverkar avgiften."
    ]
  },
  {
    id: "elcertifikat",
    title: "Lag om elcertifikat",
    sfs: "SFS 2011:1200",
    category: "Energi",
    authority: "Energimyndigheten",
    updated: "Senast ändrad 2021",
    link: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20111200-om-elcertifikat_sfs-2011-1200/",
    summary:
      "System som ger producenter av förnybar el elcertifikat, medan elleverantörer och vissa elanvändare är kvotpliktiga. Systemet fasas ut men gäller för godkända anläggningar.",
    appliesTo: "Producenter av förnybar el samt kvotpliktiga elleverantörer och vissa elintensiva företag.",
    keywords: ["elcertifikat", "förnybar el", "kvotplikt", "energimyndigheten", "produktion"],
    checklist: [
      "Avgör om anläggningen är godkänd för tilldelning av elcertifikat.",
      "Ansök om godkännande och kontoföring hos Energimyndigheten.",
      "Om kvotpliktig: beräkna och annullera rätt antal certifikat i tid.",
      "Rapportera produktion respektive elförsäljning enligt kraven."
    ]
  },
  {
    id: "eu-batteriforordning",
    title: "EU:s batteriförordning",
    sfs: "EU 2023/1542",
    category: "Producentansvar",
    authority: "Naturvårdsverket",
    updated: "Tillämpas successivt från 2024",
    link: "https://www.naturvardsverket.se/vagledning-och-stod/producentansvar/producentansvar-for-batterier/",
    summary:
      "EU:s nya batteriförordning som successivt ersätter tidigare batteriregler. Inför krav på hållbarhet, koldioxidavtryck, återvunnet innehåll, märkning och digitalt batteripass, samt utökat producentansvar.",
    appliesTo: "Tillverkare, importörer och distributörer av batterier och produkter med batterier.",
    keywords: ["batteriförordning", "batteripass", "återvunnet innehåll", "koldioxidavtryck", "märkning", "producentansvar"],
    checklist: [
      "Kartlägg vilka batterikategorier ni sätter på marknaden.",
      "Följ krav på märkning, information och (successivt) digitalt batteripass.",
      "Säkerställ krav på koldioxidavtryck och återvunnet innehåll där de gäller.",
      "Se till att batterier är avlägsnbara och utbytbara enligt kraven.",
      "Uppfyll det utökade producentansvaret för insamling och återvinning."
    ]
  },
  {
    id: "csddd",
    title: "Direktivet om tillbörlig aktsamhet för hållbarhet (CSDDD)",
    sfs: "EU 2024/1760",
    category: "Hållbarhetsrapportering",
    authority: "EU / kommande svensk tillsynsmyndighet",
    updated: "Genomförs i svensk rätt successivt",
    link: "https://finansinspektionen.se/sv/hallbarhet/",
    summary:
      "EU-direktiv som kräver att stora företag genomför tillbörlig aktsamhet för mänskliga rättigheter och miljö i sin verksamhet och värdekedja. Införs stegvis och genomförs i svensk lag.",
    appliesTo: "Mycket stora företag (över vissa tröskelvärden för anställda och omsättning); påverkar även leverantörer.",
    keywords: ["csddd", "tillbörlig aktsamhet", "due diligence", "värdekedja", "mänskliga rättigheter", "miljö"],
    checklist: [
      "Bevaka från vilket år företaget omfattas utifrån storlek.",
      "Kartlägg faktiska och potentiella negativa effekter i verksamhet och värdekedja.",
      "Inför rutiner för att förebygga, begränsa och åtgärda skador.",
      "Ta fram en klimatomställningsplan där det krävs.",
      "Inrätta klagomålsmekanism och följ upp åtgärder."
    ]
  }
];

if (typeof window !== "undefined") {
  window.LAWS = (window.LAWS || []).concat(MILJO_TILLAGG_LAWS);
}
