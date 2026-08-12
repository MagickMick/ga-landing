import { Container } from "@/components/ui/Container";
import { CalendlyInlineEmbed } from "@/components/calendly/CalendlyInlineEmbed";
import { finalCta } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section id="plan-gesprek" className="bg-surface-alt py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-muted">
            {finalCta.kicker.before}
            <span className="text-magic">{finalCta.kicker.highlight}</span>
            {finalCta.kicker.after}
          </span>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {finalCta.heading}
          </h2>
          <p className="max-w-2xl text-base text-muted sm:text-lg">
            {finalCta.subheading}
          </p>
        </div>
        <div className="w-full max-w-2xl">
          <CalendlyInlineEmbed />
        </div>
      </Container>
    </section>
  );
}
