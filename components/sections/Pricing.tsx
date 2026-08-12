import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricing, hero } from "@/lib/site-config";

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
          <span aria-hidden className="mt-0.5 text-primary">
            ✓
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  return (
    <section id="prijzen" className="bg-surface-alt py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-8">
        <SectionHeading
          eyebrow="Prijzen"
          title="Eén vast bedrag. Alles inbegrepen."
          description={pricing.intro}
        />

        {/* The fixed, recurring price — the one card that matters most, so
            it's the only one that gets the highlighted purple border. */}
        <Card className="flex w-full max-w-md flex-col gap-5 border-2 border-magic">
          <div>
            <h3 className="text-lg font-semibold text-ink">{pricing.monthly.title}</h3>
            <p className="mt-1 text-sm text-muted">{pricing.monthly.description}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-ink">{pricing.monthly.price}</span>
            <span className="text-sm text-muted">{pricing.monthly.period}</span>
          </div>
          <FeatureList features={pricing.monthly.features} />
        </Card>

        <p className="max-w-2xl text-center text-xs text-muted">{pricing.disclaimer}</p>

        <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
      </Container>
    </section>
  );
}
