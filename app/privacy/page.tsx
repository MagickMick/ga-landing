import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy- en cookiebeleid | ${siteConfig.name}`,
  description: "Hoe wij omgaan met jouw gegevens en welke cookies we gebruiken.",
};

/**
 * DRAFT — this is a starting-point template, not legal advice. Review before
 * launch: either replace with your own text, or link out to an existing
 * privacy policy on magickmedia.nl if you'd rather keep one shared policy.
 * TODO: vul contactgegevens/KVK/BTW aan in lib/site-config.ts (worden hieronder
 * automatisch meegenomen) en laat de tekst zo nodig juridisch checken.
 */
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-20">
        <Container className="prose prose-slate max-w-3xl">
          <h1>Privacy- en cookiebeleid</h1>
          <p className="text-sm !text-muted">Laatst bijgewerkt: 12-8-2026</p>

          <h2>Wie we zijn</h2>
          <p>
            Deze website ({siteConfig.url}) wordt beheerd door {siteConfig.name}.
            Voor vragen over dit beleid kun je contact opnemen via{" "}
            {siteConfig.contact.email || "[TODO e-mailadres]"}.
          </p>

          <h2>Welke cookies we gebruiken</h2>
          <p>
            We vragen altijd eerst toestemming voordat we niet-noodzakelijke
            cookies plaatsen. Je kunt je keuze op elk moment aanpassen via de
            knop &ldquo;Cookie-instellingen&rdquo; onderaan de site.
          </p>
          <ul>
            <li>
              <strong>Noodzakelijk</strong> — nodig om de site goed te laten
              functioneren (bijv. het onthouden van je cookievoorkeur). Kan
              niet worden uitgezet.
            </li>
            <li>
              <strong>Statistieken</strong> — Google Analytics (via Google Tag
              Manager), alleen actief na jouw toestemming. Helpt ons te
              begrijpen hoe bezoekers de site gebruiken, zodat we deze kunnen
              verbeteren. We gebruiken hiervoor Google Consent Mode, waarbij
              Google pas gegevens koppelt aan cookies nadat je toestemming
              hebt gegeven.
            </li>
            <li>
              <strong>Marketing</strong> — gereserveerd voor eventuele
              toekomstige Google Ads remarketing, alleen actief na jouw
              toestemming. Hiermee kunnen we je (als je dat toestaat) relevante
              advertenties tonen op basis van een eerder bezoek aan deze site.
            </li>
          </ul>

          <h2>Plannen van een adviesgesprek (Calendly)</h2>
          <p>
            Voor het inplannen van een adviesgesprek gebruiken we Calendly.
            Wanneer je de plansectie gebruikt, worden er door Calendly
            functionele cookies geplaatst die nodig zijn om de afspraakplanner
            te laten werken — dit gebeurt zonder aparte toestemming, omdat het
            noodzakelijk is voor de functie die je op dat moment expliciet
            gebruikt. Meer informatie vind je in het{" "}
            <a
              href="https://calendly.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              privacybeleid van Calendly
            </a>
            .
          </p>

          <h2>Jouw rechten</h2>
          <p>
            Je hebt het recht om je gegevens in te zien, te corrigeren of te
            laten verwijderen. Neem hiervoor contact met ons op via{" "}
            {siteConfig.contact.email || "[TODO e-mailadres]"}.
          </p>

          <h2>Contactgegevens</h2>
          <p>
            {siteConfig.name}
            <br />
            {siteConfig.contact.email && (
              <>
                {siteConfig.contact.email}
                <br />
              </>
            )}
            {siteConfig.contact.kvk && (
              <>
                KVK: {siteConfig.contact.kvk}
                <br />
              </>
            )}
            {siteConfig.contact.btw && <>BTW: {siteConfig.contact.btw}</>}
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
