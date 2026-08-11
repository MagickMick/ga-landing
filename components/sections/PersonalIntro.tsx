import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { personalIntro } from "@/lib/site-config";

export function PersonalIntro() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
        <div className="mx-auto aspect-square w-56 overflow-hidden rounded-full border-4 border-primary-soft md:w-full">
          <Image
            src={personalIntro.image.src}
            alt={personalIntro.image.alt}
            width={personalIntro.image.width}
            height={personalIntro.image.height}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {personalIntro.heading}
          </h2>
          {personalIntro.body.map((paragraph) => (
            <p key={paragraph} className="text-base text-muted sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
