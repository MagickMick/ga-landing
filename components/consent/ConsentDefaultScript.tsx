import Script from "next/script";

/**
 * Sets every Consent Mode v2 signal to "denied" (or to the visitor's stored
 * choice, if they already made one) as early as possible —
 * this MUST run before GTM loads, so it's injected with
 * strategy="beforeInteractive" straight into <head> from the root layout.
 */
export function ConsentDefaultScript() {
  return (
    // The `no-before-interactive-script-outside-document` lint rule predates
    // the App Router; placing beforeInteractive scripts in the root layout's
    // <head> is the documented, correct pattern here (there is no
    // pages/_document.js in App Router).
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script id="consent-default" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        // Returning visitors: read their stored choice from vanilla-cookieconsent's
        // cc_cookie right away, so tags don't have to wait for React to hydrate.
        var cats = [];
        try {
          var m = document.cookie.match(/(?:^|; )cc_cookie=([^;]*)/);
          if (m) cats = JSON.parse(decodeURIComponent(m[1])).categories || [];
        } catch (e) {}
        var ads = cats.indexOf('marketing') > -1 ? 'granted' : 'denied';
        gtag('consent', 'default', {
          ad_storage: ads,
          ad_user_data: ads,
          ad_personalization: ads,
          analytics_storage: cats.indexOf('analytics') > -1 ? 'granted' : 'denied',
          wait_for_update: 500
        });
      `}
    </Script>
  );
}
