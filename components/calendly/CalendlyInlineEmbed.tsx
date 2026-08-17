"use client";

import { useEffect } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

/**
 * Raw Calendly embed (not the react-calendly package — the widget.js
 * Calendly maintains directly stays current with zero extra dependency
 * weight). Loaded lazily since this section sits below the fold.
 *
 * Calendly fires a postMessage event (calendly.event_scheduled) when a
 * booking is completed. We push this to the dataLayer so GTM can fire a
 * Google Ads / GA4 conversion tag on it — no paid Calendly plan needed.
 */
export function CalendlyInlineEmbed() {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (
        e.origin === "https://calendly.com" &&
        e.data?.event === "calendly.event_scheduled"
      ) {
        // Push to GTM dataLayer (fires GA4 tag if consent given)
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "calendly_booking_completed" });

        // Anonymous counter — no personal data, no cookies, just a tally.
        // View counts at: https://counterapi.dev/
        fetch("https://api.counterapi.dev/v1/magickmedia/bookings/up", {
          method: "GET",
          keepalive: true,
        }).catch(() => {/* silently ignore if counter is unavailable */});
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

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
