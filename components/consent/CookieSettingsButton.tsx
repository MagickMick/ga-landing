"use client";

// vanilla-cookieconsent already augments `Window.CookieConsent` globally
// (see its types/index.d.ts) once CookieBanner.tsx imports the package, so
// no local `declare global` is needed here — redeclaring it would conflict.

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.CookieConsent?.showPreferences()}
      className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
    >
      Cookie-instellingen
    </button>
  );
}
