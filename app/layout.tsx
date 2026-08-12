import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConsentDefaultScript } from "@/components/consent/ConsentDefaultScript";
import { GtmLoader } from "@/components/consent/GtmLoader";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { pricing, siteConfig } from "@/lib/site-config";
import { buildProfessionalServiceJsonLd } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Meer kwalitatieve leads via Google Ads | Magick Media",
  description: `Google Ads beheer met rechtstreeks contact — geen accountmanager. Duidelijke prijzen vanaf ${pricing.monthly.price} per maand. Plan een vrijblijvend adviesgesprek.`,
  openGraph: {
    title: "Meer kwalitatieve leads via Google Ads",
    description:
      "Google Ads beheer met rechtstreeks contact — geen accountmanager. Duidelijke prijzen, geen verrassingen.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ConsentDefaultScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildProfessionalServiceJsonLd()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GtmLoader />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
