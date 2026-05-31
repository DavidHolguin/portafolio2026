import { Bot, Network } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { ServiceCard } from "@/components/primitives/service-card";
import { servicios } from "@/lib/content";

const iconMap = {
  agent: <Bot className="h-6 w-6" strokeWidth={1.5} />,
  stack: <Network className="h-6 w-6" strokeWidth={1.5} />,
} as const;

export function Servicios() {
  return (
    <section
      id="servicios"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicios-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={servicios.eyebrow}
            title={<span id="servicios-title">Dos formas de empezar.</span>}
            description={servicios.description}
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {servicios.items.map((service) => (
            <ServiceCard
              key={service.slug}
              icon={iconMap[service.icon as keyof typeof iconMap]}
              title={service.title}
              description={service.description}
              capabilities={service.capabilities}
              cta={service.cta}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
