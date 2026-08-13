"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { nav, siteConfig, hero } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink">
          <Image
            src="/images/favicon.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            aria-hidden
          />
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile: compact single-line CTA. Desktop: full label. */}
        <Button
          href={hero.primaryCta.href}
          className="whitespace-nowrap px-4 py-2 text-xs md:hidden"
        >
          Plan gesprek
        </Button>
        <div className="hidden md:block">
          <Button href={hero.primaryCta.href} className="px-5 py-2.5 text-sm">
            {hero.primaryCta.label}
          </Button>
        </div>
      </Container>
    </header>
  );
}
