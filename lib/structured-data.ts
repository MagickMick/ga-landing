import { faq, siteConfig } from "./site-config";

export function buildProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description:
      "Google Ads (SEA) beheer voor MKB — persoonlijk, transparant en rechtstreeks contact.",
    url: siteConfig.url,
    areaServed: "NL",
    ...(siteConfig.contact.email && { email: siteConfig.contact.email }),
    ...(siteConfig.contact.whatsapp && { telephone: siteConfig.contact.whatsapp }),
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
