import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { AnimatedFlow } from "@/components/primitives/animated-flow";
import { SectionHeading } from "@/components/primitives/section-heading";
import { proceso } from "@/lib/content";

export function Proceso() {
  return (
    <section
      id="proceso"
      className="relative border-t border-border bg-card/30 py-24 sm:py-32 lg:py-40"
      aria-labelledby="proceso-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={proceso.eyebrow}
            title={<span id="proceso-title">Tres pasos. Sin humo.</span>}
            description={proceso.description}
          />
        </Reveal>

        <div className="mt-20 mb-16">
          <AnimatedFlow />
        </div>

        <Stagger as="ul" className="grid gap-12 md:grid-cols-3">
          {proceso.steps.map((step) => (
            <StaggerItem as="li" key={step.number} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-ember tracking-[0.18em]">
                  {step.number}
                </span>
                <span aria-hidden className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground text-pretty leading-relaxed">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
