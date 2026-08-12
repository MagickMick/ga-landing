import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site-config";

export function ProcessTimeline() {
  return (
    <section id="werkwijze" className="py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Werkwijze"
          title="Zo werken we samen"
          description="Van kennismaking tot doorlopende optimalisatie."
        />

        <ol className="relative flex w-full max-w-3xl flex-col gap-8 border-l border-border pl-8">
          {processSteps.map((step) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-primary"
              />
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {step.timeframe}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
