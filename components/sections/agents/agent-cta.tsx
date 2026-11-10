import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { GrainOverlay } from "@/components/primitives/grain-overlay";
import { WhatsAppPanel } from "@/components/primitives/whatsapp-panel";
import type { Agent } from "@/lib/agents";

interface AgentCtaProps {
  agent: Agent;
}

export function AgentCta({ agent }: AgentCtaProps) {
  const waMessage = `Hola Cristian, me interesa el ${agent.name}. ¿Cómo arrancamos?`;

  return (
    <section
      id="contacto"
      className="relative isolate border-t border-border overflow-hidden"
      aria-labelledby="agent-cta-title"
    >
      <EmberGlow intensity="strong" position="center" className="-z-10" />
      <GrainOverlay />

      <Container className="relative py-28 sm:py-32 lg:py-40">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="inline-flex items-center gap-2.5">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_14px_3px_rgba(26,115,232,0.7)]"
              />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-ember">
                Listo para empezar
              </span>
            </div>

            <h2
              id="agent-cta-title"
              className="text-balance font-semibold tracking-tighter text-foreground leading-[0.97]"
              style={{ fontSize: "clamp(2.25rem, 5.5vw + 0.5rem, 4.5rem)" }}
            >
              Pongamos al {agent.name} a trabajar.
            </h2>

            <p className="max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
              Una llamada de 30 minutos o un mensaje directo por WhatsApp. Te llevas un diagnóstico
              de viabilidad técnica y un plan de despliegue por fases — entres o no con nosotros.
            </p>

            <WhatsAppPanel
              message={waMessage}
              note={`Te contesto yo directamente. Escríbeme por el ${agent.name} y arrancamos con una llamada de 30 minutos.`}
              className="mt-2 w-full max-w-md text-left"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
