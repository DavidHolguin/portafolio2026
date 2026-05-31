import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { manifiesto } from "@/lib/content";

export function Manifiesto() {
  return (
    <section
      id="manifiesto"
      className="relative isolate py-32 sm:py-40 lg:py-48 overflow-hidden"
      aria-labelledby="manifiesto-title"
    >
      <EmberGlow intensity="medium" position="center" className="-z-10 opacity-60" />

      <Container size="narrow">
        <Reveal>
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="inline-flex items-center gap-2.5">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_12px_2px_rgba(26,115,232,0.6)]"
              />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-ember">
                {manifiesto.eyebrow}
              </span>
            </div>

            <h2
              id="manifiesto-title"
              className="text-balance font-semibold tracking-tight text-foreground italic"
              style={{
                fontSize: "clamp(2rem, 5vw + 0.5rem, 3.75rem)",
                lineHeight: 1.1,
                fontFeatureSettings: '"ss01" 1',
              }}
            >
              {manifiesto.title}
            </h2>

            <p
              className="text-pretty text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              style={{ fontFeatureSettings: '"ss01" 1' }}
            >
              {manifiesto.body}
            </p>

            <p className="text-sm font-mono tracking-wider text-subtle">{manifiesto.signature}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
