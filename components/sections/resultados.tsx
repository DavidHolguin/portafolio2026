import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Metric } from "@/components/primitives/metric";
import { SectionHeading } from "@/components/primitives/section-heading";
import { resultados } from "@/lib/content";

export function Resultados() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="resultados-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={resultados.eyebrow}
            title={<span id="resultados-title">{resultados.title}</span>}
            description={resultados.description}
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-border bg-card/40 overflow-hidden">
          {resultados.metrics.map((metric) => (
            <Metric key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
