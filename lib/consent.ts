/**
 * Google Consent Mode v2 helpers.
 *
 * Consent Mode v2 uses four signals. We map our two user-facing categories
 * (statistics, marketing) onto them:
 *  - "statistics" -> analytics_storage
 *  - "marketing"  -> ad_storage, ad_user_data, ad_personalization
 *
 * The "necessary" category has no signal — it's always on and never gated.
 */

export type ConsentCategory = "necessary" | "statistics" | "marketing";

export type ConsentModeSignals = {
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  analytics_storage: "granted" | "denied";
};

// Intentionally a local type rather than a `declare global` augmentation:
// @next/third-parties already declares a (differently-typed) global
// `Window.dataLayer`, and TS requires merged declarations to match exactly.
type WindowWithDataLayer = Window & { dataLayer?: unknown[] };

function pushToDataLayer(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as WindowWithDataLayer;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

/**
 * Called once, as early as possible (before GTM loads), to set every signal
 * to "denied" by default. See components/consent/ConsentDefaultScript.tsx —
 * that inline script does this synchronously; this JS version exists for
 * completeness/testing but the inline script is what actually runs first.
 */
export function setConsentDefaults() {
  pushToDataLayer("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
}

/**
 * Called whenever the visitor makes or changes a cookie choice. Maps our
 * two gate-able categories onto the four Consent Mode v2 signals and pushes
 * a `consent update` event, which GTM/GA4 pick up immediately.
 */
export function updateConsent(categories: {
  statistics: boolean;
  marketing: boolean;
}) {
  const signals: ConsentModeSignals = {
    analytics_storage: categories.statistics ? "granted" : "denied",
    ad_storage: categories.marketing ? "granted" : "denied",
    ad_user_data: categories.marketing ? "granted" : "denied",
    ad_personalization: categories.marketing ? "granted" : "denied",
  };
  pushToDataLayer("consent", "update", signals);
}
