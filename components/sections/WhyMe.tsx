import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalIntro, usps } from "@/lib/site-config";

/**
 * Merged "Waarom ik" + personal-intro section: photo on the left, and on
 * the right the section heading, the personal blurb, and the USP list —
 * all stacked as one cohesive, personal pitch rather than two separate
 * sections.
 */
export function WhyMe() {
  return (
    // Section itself has no bottom padding — the photo (self-end, no
    // padding of its own) bleeds straight to this section's edge. The text
    // column carries its own bottom padding instead, so it still gets
    // normal breathing room without pushing the photo down with it.
    <section className="pt-20 sm:pt-24">
      <Container className="grid items-start md:grid-cols-[320px_1fr] md:gap-12">
        {/* On mobile the photo stacks below the "Waarom ik" content;
            on desktop it moves back to the left column. */}
        <div className="order-2 mx-auto w-full max-w-[320px] md:order-1 md:self-end">
          <Image
            src={personalIntro.image.src}
            alt={personalIntro.image.alt}
            width={personalIntro.image.width}
            height={personalIntro.image.height}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="order-1 flex flex-col gap-8 pb-20 sm:pb-24 md:order-2">
          <SectionHeading
            align="left"
            eyebrow="Waarom klanten kiezen voor ons"
            title="Persoonlijk, betaalbaar en transparant."
          />

          <ul className="flex flex-col gap-5">
            {usps.map((usp) => (
              <li key={usp.title} className="flex gap-3">
                <span aria-hidden className="mt-1 text-primary">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{usp.title}</h3>
                  <p className="text-sm text-muted">{usp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
