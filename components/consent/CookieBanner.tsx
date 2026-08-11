"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { updateConsent } from "@/lib/consent";

/**
 * vanilla-cookieconsent (orestbida/cookieconsent v3) drives the banner UI.
 * Two gate-able categories map onto Google Consent Mode v2 (see
 * lib/consent.ts): "analytics" -> analytics_storage, "marketing" ->
 * ad_storage/ad_user_data/ad_personalization. "necessary" is always on.
 */
function pushConsentFromCookie(cookie: CookieConsent.CookieValue) {
  updateConsent({
    statistics: cookie.categories.includes("analytics"),
    marketing: cookie.categories.includes("marketing"),
  });
}

export function CookieBanner() {
  useEffect(() => {
    CookieConsent.run({
      mode: "opt-in",
      guiOptions: {
        consentModal: {
          layout: "bar",
          position: "bottom",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }],
          },
        },
        marketing: {},
      },
      onFirstConsent: ({ cookie }) => pushConsentFromCookie(cookie),
      onConsent: ({ cookie }) => pushConsentFromCookie(cookie),
      onChange: ({ cookie }) => pushConsentFromCookie(cookie),
      language: {
        default: "nl",
        translations: {
          nl: {
            consentModal: {
              title: "We gebruiken cookies",
              description:
                "We gebruiken noodzakelijke cookies om deze site te laten werken, en optioneel statistiekcookies om te zien hoe de site gebruikt wordt. Lees meer in ons <a href=\"/privacy\">privacy- en cookiebeleid</a>.",
              acceptAllBtn: "Alles accepteren",
              acceptNecessaryBtn: "Alleen noodzakelijk",
              showPreferencesBtn: "Instellingen beheren",
            },
            preferencesModal: {
              title: "Cookie-instellingen",
              acceptAllBtn: "Alles accepteren",
              acceptNecessaryBtn: "Alleen noodzakelijk",
              savePreferencesBtn: "Voorkeuren opslaan",
              closeIconLabel: "Sluiten",
              sections: [
                {
                  title: "Noodzakelijk",
                  description:
                    "Nodig om de site goed te laten werken. Kan niet worden uitgezet.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Statistieken",
                  description:
                    "Helpt ons te begrijpen hoe bezoekers de site gebruiken (Google Analytics), zodat we 'm kunnen verbeteren.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Wordt gebruikt om advertenties relevanter te maken, bijvoorbeeld via Google Ads-retargeting.",
                  linkedCategory: "marketing",
                },
                {
                  title: "Meer informatie",
                  description:
                    "Vragen over ons cookiebeleid? Neem contact met ons op via de contactgegevens in de footer.",
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
