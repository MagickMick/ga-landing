import Script from "next/script";

/**
 * Sets every Consent Mode v2 signal to "denied" as early as possible —
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
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          wait_for_update: 500
        });
      `}
    </Script>
  );
}
