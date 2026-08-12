import { Container } from "@/components/ui/Container";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";
import { siteConfig, footerLinks } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const legalBits = [
    siteConfig.contact.kvk && `KVK ${siteConfig.contact.kvk}`,
    siteConfig.contact.btw && `BTW ${siteConfig.contact.btw}`,
  ].filter(Boolean);

  return (
    <footer className="border-t border-border bg-surface-alt py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <div className="font-semibold text-ink">{siteConfig.name}</div>
          <div className="text-sm text-muted">
            {siteConfig.contact.email && <div>{siteConfig.contact.email}</div>}
            {siteConfig.contact.whatsapp && (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stuur een WhatsApp bericht"
                className="inline-flex items-center gap-1 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#25D366]" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.335-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                WhatsApp
              </a>
            )}
          </div>
          {legalBits.length > 0 && (
            <div className="text-xs text-muted">{legalBits.join(" · ")}</div>
          )}
        </div>

        <div className="flex items-center gap-6">
          <a
            href={footerLinks.privacy.href}
            className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            {footerLinks.privacy.label}
          </a>
          <CookieSettingsButton />
        </div>
      </Container>
      <Container className="mt-6 text-center text-xs text-muted sm:text-left">
        © {year} {siteConfig.name}. Alle rechten voorbehouden.
      </Container>
    </footer>
  );
}
