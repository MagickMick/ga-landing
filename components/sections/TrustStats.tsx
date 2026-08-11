import { Container } from "@/components/ui/Container";
import { trustStats } from "@/lib/site-config";

export function TrustStats() {
  return (
    <section className="border-y border-border bg-surface py-10">
      <Container>
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </dd>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
