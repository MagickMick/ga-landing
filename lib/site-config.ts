/**
 * Central place for every piece of copy/data on the landing page.
 *
 * Anything marked "TODO" below is a placeholder — either a number we don't
 * have real data for yet, or a business term (contract length, guarantees)
 * that must come from the client before this goes live. Search this file
 * for "TODO" before shipping.
 */

export const siteConfig = {
  name: "Magick Media",
  legalName: "Magick Media", // TODO: volledige handelsnaam indien anders
  tagline: "Google Ads specialist voor MKB",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sea.magickmedia.nl",
  locale: "nl_NL",
  contact: {
    email: "info@magickmedia.nl", // TODO: bevestig echte e-mailadres
    phone: "", // TODO: telefoonnummer (leeg = niet tonen)
    kvk: "", // TODO: KVK-nummer
    btw: "", // TODO: BTW-nummer
  },
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/TODO-vul-in",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
};

export const nav = [
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Prijzen", href: "#prijzen" },
  { label: "Reviews", href: "#reviews" },
  { label: "Veelgestelde vragen", href: "#faq" },
];

export const hero = {
  eyebrow: "Google Ads specialist — geen bureau, geen accountmanager",
  headline: "Meer kwalitatieve leads via Google Ads",
  subheadline:
    "Ik zet je advertentiebudget om in klanten, met korte lijntjes en rechtstreeks contact. Geen accountmanager, geen wachtrij: je werkt altijd direct met mij.",
  primaryCta: { label: "Plan een vrijblijvend adviesgesprek", href: "#plan-gesprek" },
  secondaryCta: { label: "Bekijk de prijzen", href: "#prijzen" },
};

// Defensible today: the 5 published reviews are all 5-star. The other two
// stats are realistic placeholders — replace with real figures before launch.
export const trustStats = [
  { value: "5,0/5", label: "klantbeoordeling" },
  { value: "100%", label: "rechtstreeks contact, geen accountmanager" },
  { value: "8+", label: "jaar ervaring" }, // TODO: bevestig echt aantal jaar
  { value: "50+", label: "klanten geholpen" }, // TODO: bevestig echt aantal klanten
];

export const usps = [
  {
    title: "Rechtstreeks contact met mij",
    description:
      "Geen accountmanager of tussenpersoon: je schakelt altijd direct met de specialist die je campagnes ook echt beheert.",
  },
  {
    title: "Snel resultaat",
    description:
      "Binnen een paar dagen staat je campagne live — geen weken wachten op een trage overdracht tussen verschillende mensen.",
  },
  {
    title: "Transparante rapportage",
    description:
      "Je ziet precies waar je budget naartoe gaat en wat het oplevert. Geen vage dashboards, gewoon heldere taal.",
  },
  {
    title: "Eerlijke, vaste prijzen",
    description:
      "Geen verrassingen achteraf: je weet vooraf exact wat je betaalt, elke maand.",
  },
];

export const pricing = {
  intro:
    "Duidelijke prijzen, geen kleine lettertjes. Dit is precies wat je betaalt.",
  monthly: {
    price: "€249",
    period: "per maand",
    title: "Google Ads beheer",
    description:
      "All-in beheer en optimalisatie van je Google Ads campagne — inclusief hosting en onderhoud van je landingspagina. Geen aparte kostenpost.",
    features: [
      "Doorlopende optimalisatie van biedingen, zoekwoorden en advertenties",
      "Hosting & onderhoud van je landingspagina inbegrepen",
      "Maandelijkse rapportage in heldere taal",
      "Rechtstreeks contact met mij, geen accountmanager",
    ],
  },
  setup: {
    price: "€250",
    originalPrice: "€500",
    period: "eenmalig",
    badge: "50% korting voor nieuwe klanten",
    title: "Landingspagina-opzet",
    description:
      "Een landingspagina die is gemaakt om bezoekers om te zetten in leads, speciaal afgestemd op je campagne.",
    features: [
      "Op maat gemaakte, conversiegerichte landingspagina",
      "Nu 50% korting: €250 in plaats van €500",
      "Eenmalige kosten, geen abonnement",
    ],
  },
  disclaimer:
    "Prijzen zijn exclusief btw. Advertentiebudget aan Google zelf is hier niet in inbegrepen en betaal je rechtstreeks aan Google.", // TODO: bevestig excl./incl. btw
};

export const personalIntro = {
  heading: "Hoi, ik ben Mick",
  body: [
    "Ik run Magick Media in mijn eentje — bewust. Zo blijf ik altijd het directe aanspreekpunt voor je campagnes, zonder lagen ertussen.",
    "Geen account manager die jouw vragen doorzet naar een specialist. Geen wisselende contactpersonen. Gewoon rechtstreeks contact met de persoon die ook echt aan je campagne werkt.",
  ],
  // Placeholder slot: a fixed-aspect-ratio image, swapped later for an
  // AI-generated comic/cartoon avatar (client is producing this separately).
  image: {
    src: "/images/mick-avatar-placeholder.svg",
    alt: "Mick van Magick Media",
    width: 480,
    height: 480,
  },
};

export const processSteps = [
  {
    timeframe: "Week 1",
    title: "Kennismaking & doelen",
    description:
      "In een vrijblijvend gesprek bespreken we je doelen, doelgroep en budget.",
  },
  {
    timeframe: "Week 1-2",
    title: "Opzet campagne & landingspagina",
    description:
      "Ik bouw je Google Ads-campagne en een landingspagina die is gemaakt om te converteren.",
  },
  {
    timeframe: "Week 2",
    title: "Livegang",
    description: "Je campagne gaat live en de eerste data komt binnen.",
  },
  {
    timeframe: "Doorlopend",
    title: "Optimalisatie",
    description:
      "Op basis van de resultaten stuur ik regelmatig bij op zoekwoorden, biedingen en advertenties.",
  },
  {
    timeframe: "Maandelijks",
    title: "Heldere rapportage",
    description: "Je ontvangt een begrijpelijk overzicht van resultaten — geen jargon.",
  },
  {
    timeframe: "Altijd",
    title: "Rechtstreeks contact",
    description: "Vragen? Je mailt of belt met mij, niet met een supportdesk.",
  },
];

// Verbatim quotes reused from the current sea.magickmedia.nl page, as
// requested. Note: these speak to hosting/webdesign work rather than SEA
// results specifically — worth supplementing with SEA-specific testimonials
// once available.
export const testimonials = [
  {
    name: "Cora",
    company: "Pink Roccade",
    rating: 5,
    quote:
      "De hosting van de website 'jouw gemeente mijn gemeente' hosten we sinds een tijdje via Magick Media. We zijn daar erg tevreden over. De lijntjes zijn kort. Dit resulteert in snelle antwoorden op onze vragen.",
  },
  {
    name: "Marco",
    company: "Work in Flow",
    rating: 5,
    quote:
      "Ik ken Mick van Magick Media als iemand die een goed gevoel heeft voor wat zijn klanten willen en daar flexibel op in weet te spelen. Hij is betrokken, heeft kennis van zaken en is open. Door de persoonlijke aanpak staat Magick Media voor mij apart van het gros van de andere partijen waar je nadat een dienst bij ze afneemt, nooit meer iets van hoort.",
  },
  {
    name: "Ronne",
    company: "Ronne Design",
    rating: 5,
    quote:
      "De hosting van mijn website heb ik via Magick Media geregeld, ik ben erg blij met hoe snel en gemakkelijk dit geregeld is. Ik ben zelf webdesigner dus een goede hosting partij is voor mij erg belangrijk. Daarnaast heb ik af en toe wat vragen of extra wensen en tot nu toe werd er dan telkens snel geschakeld. Echt een super goede service en korte lijntjes, ik ben blij dat ik voor Magick Media gekozen heb en ga hem ook aanraden voor mijn eigen klanten die een (nieuwe) hosting partij zoeken.",
  },
  {
    name: "Leroy",
    company: "Allooi Boekhouders & Belastingadviseurs",
    rating: 5,
    quote:
      "Als eigenaar van boekhoudkantoor Allooi ben ik zeer tevreden met de website gemaakt door Magick Media. Dankzij hun aandacht voor detail, creativiteit en technische expertise hebben we een aantrekkelijke en functionele site gekregen. Dankzij het persoonlijk contact, responsieve houding en bereidheid tot aanpassingen hebben we onze online aanwezigheid geoptimaliseerd, wat heeft geleid tot een toename van klanten. Ik beveel Magick Media dus zeker aan.",
  },
  {
    name: "Belinda",
    company: "Ribadogfood & more",
    rating: 5,
    quote:
      "Super tevreden!! Duidelijke communicatie en no nonsense!!! Heldere afspraken en geen gedoe! Zeer zeker een aanrader!!!!",
  },
];

export const faq = [
  {
    question: "Wat kost het om mijn Google Ads uit te besteden?",
    answer:
      "Je betaalt €249 per maand voor het volledige beheer en de optimalisatie van je campagne, inclusief hosting van je landingspagina. Voor de opzet van een nieuwe landingspagina geldt momenteel een introductieprijs van €250 (normaal €500). Je advertentiebudget aan Google zelf betaal je rechtstreeks aan Google, los van dit bedrag.",
  },
  {
    question: "Zit ik vast aan een langdurig contract?",
    // TODO: bevestig daadwerkelijke contractduur/opzegtermijn met klant —
    // onderstaande tekst doet bewust geen harde toezegging totdat dit vaststaat.
    answer:
      "Ik werk het liefst met korte lijntjes en duidelijke afspraken, geen kleine lettertjes. De exacte voorwaarden bespreken we vooraf tijdens het adviesgesprek, zodat je precies weet waar je aan toe bent voordat je start.",
  },
  {
    question: "Hoe snel zie ik resultaat?",
    answer:
      "Je campagne kan binnen een paar dagen live staan. De eerste inzichten volgen al snel daarna, maar structurele verbetering ontstaat meestal na de eerste weken optimaliseren — Google Ads werkt het beste met een paar weken data om op te sturen.",
  },
  {
    question: "Wat zit er precies inbegrepen bij het maandbedrag?",
    answer:
      "Doorlopend beheer en optimalisatie van je campagne (zoekwoorden, biedingen, advertentieteksten), maandelijkse rapportage in begrijpelijke taal, én de hosting van je landingspagina. Alles in één vast maandbedrag, geen losse hostingfactuur.",
  },
  {
    question: "Ik heb eerder een minder goede ervaring gehad met een bureau — wat is hier anders?",
    answer:
      "Bij een bureau werk je vaak met een accountmanager die je vragen doorzet naar een specialist die je nooit spreekt. Bij mij is dat niet zo: ik ben de enige die aan je campagne werkt, dus je krijgt altijd rechtstreeks antwoord van degene die het ook daadwerkelijk doet.",
  },
  {
    question: "Moet ik zelf ook tijd investeren?",
    answer:
      "Vooral aan het begin: voor de kennismaking en om je doelen en doelgroep scherp te krijgen. Daarna neem ik het beheer volledig uit handen — je hoeft alleen de maandelijkse rapportage door te nemen.",
  },
];

export const finalCta = {
  heading: "Plan een vrijblijvend adviesgesprek in",
  subheading:
    "Geen verkooppraatje, gewoon een eerlijk gesprek over je doelen en of Google Ads daarbij past. Kies zelf een moment dat jou uitkomt.",
};

export const footerLinks = {
  privacy: { label: "Privacy- en cookiebeleid", href: "/privacy" },
};
