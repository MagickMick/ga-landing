import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/lib/site-config";
import { buildFaqJsonLd } from "@/lib/structured-data";

export function Faq() {
  return (
    <section id="faq" className="bg-surface-alt py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Veelgestelde vragen" title="Nog vragen?" />

        <div className="w-full max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
          {faq.map((item) => (
            <details key={item.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                {item.question}
                <span
                  aria-hidden
                  className="shrink-0 text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
