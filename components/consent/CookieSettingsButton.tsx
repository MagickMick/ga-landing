"use client";

import * as CookieConsent from "vanilla-cookieconsent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
    >
      Cookie-instellingen
    </button>
  );
}
