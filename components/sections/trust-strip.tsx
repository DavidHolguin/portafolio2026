import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { trustStrip } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="relative border-y border-border bg-card/40 py-10 overflow-hidden">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-subtle shrink-0">
            {trustStrip.label}
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-end sm:flex-1">
            {trustStrip.items.map((item) => (
              <li
                key={item}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
