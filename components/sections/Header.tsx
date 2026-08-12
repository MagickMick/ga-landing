"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { nav, siteConfig, hero } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);

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

        <div className="hidden md:block">
          <Button href={hero.primaryCta.href} className="px-5 py-2.5 text-sm">
            {hero.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Menu openen/sluiten"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink md:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-surface md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <Button
              href={hero.primaryCta.href}
              onClick={() => setOpen(false)}
              className="w-full"
            >
              {hero.primaryCta.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
