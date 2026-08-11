import { GoogleTagManager } from "@next/third-parties/google";
import { siteConfig } from "@/lib/site-config";

/**
 * GTM loads on every pageview regardless of consent (the correct "Advanced
 * Consent Mode" pattern) — what fires or doesn't is decided per-tag inside
 * GTM's own Consent Settings (configured once in tagmanager.google.com:
 * the GA4 Configuration tag requires `analytics_storage`, any future Ads
 * remarketing/conversion tag requires `ad_storage`). No code change is
 * needed here to add that tag later.
 */
export function GtmLoader() {
  if (!siteConfig.gtmId) return null;
  return <GoogleTagManager gtmId={siteConfig.gtmId} />;
}
