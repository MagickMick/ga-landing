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
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://googleads.magickmedia.nl",
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
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Betaalbare Google Ads voor het MKB",
  // {before/highlight/after} so "kwalitatieve leads" can be styled in
  // purple (--color-magic) without hardcoding the sentence in the component.
  headline: {
    before: "Ontvang meer ",
    highlight: "kwalitatieve leads",
    after: " via Google Ads",
  },
  // Same pattern — "magisch" styled in purple, echoing the Magick Media name.
  subheadline: {
    line1: "Meetbaar meer klanten uit Google Ads.",
    before: "Persoonlijk, transparant en een beetje ",
    highlight: "magie",
    after: ".",
  },
  primaryCta: { label: "Plan een vrijblijvend adviesgesprek", href: "#plan-gesprek" },
  secondaryCta: { label: "Bekijk de prijzen", href: "#prijzen" },
  // Absolutely-positioned promo "sticker" in the corner of the hero —
  // replaces the old banner that used to sit under the pricing card.
  sticker: {
    kicker: "50% korting",
    label: "Landingspagina",
  },
};

export const usps = [
  {
    title: "Snel resultaat",
    description:
      "Binnen een paar dagen staat je campagne live. Korte lijnen zorgen voor een snelle uitvoering.",
  },
  {
    title: "Transparante rapportage",
    description:
      "Je ziet precies waar je budget naartoe gaat en wat het oplevert. Altijd eerlijk advies, waarbij het beëindigen van die ene campagne soms de beste oplossing kan zijn.",
  },
  {
    title: "Betaal nooit teveel",
    description:
      "Ik streef naar de beste balans tussen kwaliteit en prijs, met volledige transparantie. Zo draagt elke investering echt bij aan de groei van je bedrijf.",
  },
];

export const pricing = {
  intro:
    "Geen verborgen kosten. Jij weet elke maand precies wat je betaalt.",
  monthly: {
    price: "€299",
    period: "per maand, per campagne",
    title: "Google Ads beheer",
    description:
      "Van campagneopzet tot maandelijkse rapportage. Volledige ontzorging van A tot Z.",
    features: [
      "Doorlopende optimalisatie van biedingen, zoekwoorden en advertenties",
      "Hosting & onderhoud van je landingspagina inbegrepen",
      "Maandelijkse rapportage in heldere taal",
      "Rechtstreeks contact met mij",
    ],
  },
  disclaimer:
    "Advertentiebudget is niet inbegrepen en betaal je rechtstreeks aan Google. Prijzen zijn exclusief btw. ", // TODO: bevestig excl./incl. btw
};

export const personalIntro = {
  body: [
    "Als Google Ads specialist houd ik mijn onderneming graag klein. Zo blijf ik altijd het directe aanspreekpunt voor je campagnes, zodat we snel kunnen schakelen."
  ],
  // The wizard illustration — a photo of Mick composited into a "toveraar"
  // theme, with its own headline/tagline baked in. Compressed to a 95KB
  // JPEG (from a 1.9MB source) since static export has no server-side
  // image optimization; the pristine original is kept as
  // Magick_Media_Avatar-original.png for non-web use.
  image: {
    src: "/images/mick-avatar-wizard.jpg",
    alt: "Mick van Magick Media als tovenaar met een toverstaf, met de tekst 'Meer resultaat uit je Google Ads campagnes? Ik tover het voor je.'",
    width: 533,
    height: 800,
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
    description: "Je ontvangt een begrijpelijk overzicht van resultaten. Zodat je meteen weet hoe het ervoor staat.",
  },
  {
    timeframe: "Altijd",
    title: "Rechtstreeks contact",
    description: "Vragen? Je belt, appt of mailt direct met mij, niet met een supportdesk.",
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
      "We zijn erg tevreden over de dienstverlening van Magick Media. De lijntjes zijn kort. Dit resulteert in snelle antwoorden op onze vragen.",
  },
  {
    name: "Bert",
    company: "Sol Stijlvol Hekwerk",
    rating: 5,
    quote:
      "Erg prettig samenwerken met Mick van Magick Media. Veel persoonlijk contact en schakelt snel. Zeker een aanrader!",
  },
  {
    name: "Marco",
    company: "Work in Flow",
    rating: 5,
    quote:
      "Ik ken Mick van Magick Media als iemand die een goed gevoel heeft voor wat zijn klanten willen en daar flexibel op in weet te spelen. Hij is betrokken, heeft kennis van zaken en is open. Door de persoonlijke aanpak staat Magick Media voor mij apart van het gros van de andere partijen waar je nadat een dienst bij ze afneemt, nooit meer iets van hoort.",
  },
  {
    name: "Leroy",
    company: "Allooi Boekhouders & Belastingadviseurs",
    rating: 5,
    quote:
      "Als eigenaar van boekhoudkantoor Allooi ben ik zeer tevreden met de dienstverlening van Magick Media. Dankzij hun aandacht voor detail, creativiteit en technische expertise hebben we een aantrekkelijke en functionele site gekregen. Dankzij het persoonlijk contact, responsieve houding en bereidheid tot aanpassingen hebben we onze online aanwezigheid geoptimaliseerd, wat heeft geleid tot een toename van klanten. Ik beveel Magick Media dus zeker aan.",
  },
  {
    name: "Ronne",
    company: "Ronne Design",
    rating: 5,
    quote:
      "De hosting van mijn website heb ik via Magick Media geregeld, ik ben erg blij met hoe snel en gemakkelijk dit geregeld is. Ik ben zelf webdesigner dus een goede hosting partij is voor mij erg belangrijk. Daarnaast heb ik af en toe wat vragen of extra wensen en tot nu toe werd er dan telkens snel geschakeld. Echt een super goede service en korte lijntjes, ik ben blij dat ik voor Magick Media gekozen heb en ga hem ook aanraden voor mijn eigen klanten die een (nieuwe) hosting partij zoeken.",
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
      "Je betaalt €299 per maand voor het volledige beheer en de optimalisatie van je campagne, inclusief hosting van je landingspagina. Je advertentiebudget aan Google zelf betaal je rechtstreeks aan Google, los van dit bedrag.",
  },
  {
    question: "Zit ik vast aan een langdurig contract?",
    // TODO: bevestig daadwerkelijke contractduur/opzegtermijn met klant —
    // onderstaande tekst doet bewust geen harde toezegging totdat dit vaststaat.
    answer:
      "Onze dienstverlening is maandelijks opzegbaar. Mocht je onverhoopt binnen één jaar de samenwerking willen beëindigen, dan betaal je eenmalig €799 per campagne. Deze campagne blijft dan werkend staan binnen jouw Google Ads account. Ook de landingspagina is over te nemen voor €499 eenmalig.",
  },
  {
    question: "Hoe snel zie ik resultaat?",
    answer:
      "Je campagne kan binnen een paar dagen live staan. De eerste inzichten volgen al snel daarna, maar structurele verbetering ontstaat meestal na de eerste weken optimaliseren. Google Ads werkt het beste met een paar maanden data om op te sturen.",
  },
  {
    question: "Wat zit er precies inbegrepen bij het maandbedrag?",
    answer:
      "Doorlopend beheer en optimalisatie van je campagne, maandelijkse rapportage in begrijpelijke taal, én de hosting van je landingspagina. Alles in één vast maandbedrag, geen aparte kosten.",
  },
  {
    question: "Ik heb eerder een minder goede ervaring gehad met een bureau, wat is hier anders?",
    answer:
      "Bij een bureau werk je vaak met een accountmanager die je vragen doorzet naar een specialist die je nooit spreekt. Bij Magick Media is dat niet zo: ik ben de enige die aan je campagne werkt, dus je krijgt altijd rechtstreeks antwoord van degene die het ook daadwerkelijk doet.",
  },
  {
    question: "Moet ik zelf ook tijd investeren?",
    answer:
      "Vooral aan het begin: voor de kennismaking en om je doelen en doelgroep scherp te krijgen. Daarna neem ik het beheer volledig uit handen. Je hoeft alleen de maandelijkse rapportage door te nemen.",
  },
];

export const finalCta = {
  // Second (and last) "magisch" moment on the page — a callback to the
  // "Klaar voor Magische Google Ads?" line from the current site.
  kicker: {
    before: "Klaar voor ",
    highlight: "magische",
    after: " Google Ads?",
  },
  heading: "Plan een vrijblijvend adviesgesprek in",
  subheading:
    "Geen verkooppraatje, gewoon een eerlijk gesprek over je doelen en of Google Ads daarbij past. Kies zelf een moment dat jou uitkomt.",
};

export const footerLinks = {
  privacy: { label: "Privacy- en cookiebeleid", href: "/privacy" },
};
