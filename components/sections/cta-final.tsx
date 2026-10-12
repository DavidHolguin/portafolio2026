import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { GrainOverlay } from "@/components/primitives/grain-overlay";
import { LeadForm } from "@/components/primitives/lead-form";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { ctaFinal, whatsappUrl } from "@/lib/content";

export function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative isolate border-t border-border overflow-hidden"
      aria-labelledby="cta-final-title"
    >
      <EmberGlow intensity="strong" position="center" className="-z-10" />
      <GrainOverlay />

      <Container className="relative py-20 sm:py-24 lg:py-32">
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
              style={{ fontSize: "clamp(2.25rem, 5.5vw + 0.5rem, 5rem)" }}
            >
              {ctaFinal.title}
            </h2>

            <p className="max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
              {ctaFinal.description}
            </p>

            <div className="mt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={whatsappUrl(ctaFinal.waMessage)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  Escribir por WhatsApp
                  <ArrowRight />
                </a>
              </Button>
            </div>

            <div className="mt-6 flex w-full max-w-xl items-center gap-3">
              <span aria-hidden className="h-px flex-1 bg-border" />
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-subtle">
                o déjame tu contacto
              </span>
              <span aria-hidden className="h-px flex-1 bg-border" />
            </div>

            <div className="relative mt-4 w-full max-w-xl">
              {/* La luz que levanta el bloque del formulario: sobre negro puro se veía apagado */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-16 -inset-y-10 -z-10 rounded-[40px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(26,115,232,0.16), rgba(26,115,232,0.04) 45%, transparent 72%)",
                }}
              />
              <LeadForm source="Cristian Holguin · Portafolio" className="w-full text-left" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
