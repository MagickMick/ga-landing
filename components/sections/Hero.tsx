import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface-alt">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-primary-soft blur-3xl"
      />
      <Container className="relative flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted">
          {hero.eyebrow}
        </span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          {hero.headline}
        </h1>
        <p className="max-w-2xl text-lg text-muted sm:text-xl">
          {hero.subheadline}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
