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
            {siteConfig.contact.email && <span>{siteConfig.contact.email}</span>}
            {siteConfig.contact.phone && <span> · {siteConfig.contact.phone}</span>}
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
