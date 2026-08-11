"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

/**
 * Raw Calendly embed (not the react-calendly package — the widget.js
 * Calendly maintains directly stays current with zero extra dependency
 * weight). Loaded lazily since this section sits below the fold.
 *
 * Consent classification: treated as functional/necessary and always
 * loaded — it delivers the core, explicitly-requested function of this
 * exact CTA (booking a call), which is defensible under the Dutch
 * Telecommunicatiewet art. 11.7a "strictly necessary" exemption. See
 * /privacy for the note pointing to Calendly's own cookie policy.
 */
export function CalendlyInlineEmbed() {
  return (
    <>
      <div
        className="calendly-inline-widget w-full min-w-[280px] overflow-hidden rounded-2xl border border-border"
        data-url={siteConfig.calendlyUrl}
        style={{ minWidth: "280px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
