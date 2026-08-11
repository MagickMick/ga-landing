import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usps } from "@/lib/site-config";

export function UspGrid() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Waarom ik"
          title="Eén specialist, geen tussenlagen"
          description="Bij een bureau werk je vaak met een accountmanager. Bij mij werk je met de persoon die je campagne ook echt beheert."
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp) => (
            <Card key={usp.title} className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-ink">{usp.title}</h3>
              <p className="text-sm text-muted">{usp.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
