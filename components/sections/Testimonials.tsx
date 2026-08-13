import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site-config";

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-label={`${rating} van de 5 sterren`} className="text-accent">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-surface-alt py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Reviews" title="Wat klanten zeggen" />
      </Container>

      {/* Single horizontal scroll on all screen sizes.
          Cards are 72vw on mobile, fixed 320px on sm+, so ~3 fit on desktop. */}
      <div className="mt-8 overflow-x-auto px-10 pb-4">
        <div className="flex gap-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex w-[72vw] shrink-0 flex-col gap-3 sm:w-80">
              <Stars rating={testimonial.rating} />
              <p className="text-sm text-muted">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-auto pt-2">
                <div className="text-sm font-semibold text-ink">{testimonial.name}</div>
                <div className="text-xs text-muted">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
