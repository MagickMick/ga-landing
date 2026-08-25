"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

export function CalendlyInlineEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;

      // Dynamically resize the embed to fit Calendly's content
      if (e.data?.event === "calendly.page_height" && containerRef.current) {
        const raw = e.data.payload?.height;
        const height = typeof raw === "number" ? raw : parseInt(raw, 10);
        if (!isNaN(height) && height > 0) {
          containerRef.current.style.height = `${height}px`;
        }
      }

      if (e.data?.event === "calendly.event_scheduled") {
        // Push to GTM dataLayer (fires GA4 tag if consent given)
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "calendly_booking_completed" });

        // Anonymous counter — no personal data, no cookies, just a tally.
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
        ref={containerRef}
        className="calendly-inline-widget w-full min-w-[280px] rounded-2xl border border-border"
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
