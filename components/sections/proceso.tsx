import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
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

        <div className="relative mt-20 lg:mt-24">
          {/* Horizontal connector — desktop only, runs through the center of the number badges */}
          <div
            aria-hidden
            className="hidden md:block absolute top-10 left-[8.33%] right-[8.33%] h-px"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border-strong to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ember/40 to-transparent opacity-50" />
            </div>
          </div>

          <Stagger as="ol" className="grid gap-14 md:grid-cols-3 md:gap-8">
            {proceso.steps.map((step) => (
              <StaggerItem
                as="li"
                key={step.number}
                className="relative flex flex-col items-center text-center md:items-start md:text-left md:px-2"
              >
                {/* Number node */}
                <div className="relative mb-7">
                  {/* Animated pulse ring */}
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-2xl border border-ember/40 animate-node-pulse"
                  />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border-strong bg-background shadow-[0_0_40px_-12px_rgba(26,115,232,0.45)]">
                    <span className="font-mono text-base tracking-[0.18em] text-ember">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-base text-muted-foreground text-pretty leading-relaxed">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
