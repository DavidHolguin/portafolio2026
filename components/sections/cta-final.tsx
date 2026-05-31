import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { GrainOverlay } from "@/components/primitives/grain-overlay";
import { Button } from "@/components/ui/button";
import { ctaFinal } from "@/lib/content";

export function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative isolate border-t border-border overflow-hidden"
      aria-labelledby="cta-final-title"
    >
      <EmberGlow intensity="strong" position="center" className="-z-10" />
      <GrainOverlay />

      <Container className="relative py-28 sm:py-36 lg:py-44">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="inline-flex items-center gap-2.5">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_14px_3px_rgba(26,115,232,0.7)]"
              />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-ember">
                {ctaFinal.eyebrow}
              </span>
            </div>

            <h2
              id="cta-final-title"
              className="text-balance font-semibold tracking-tighter text-foreground leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5.5rem)" }}
            >
              {ctaFinal.title}
            </h2>

            <p className="max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
              {ctaFinal.description}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={ctaFinal.primary.href} target="_blank" rel="noopener noreferrer">
                  {ctaFinal.primary.label}
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={ctaFinal.secondary.href}>
                  <Mail />
                  Escribir por correo
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
