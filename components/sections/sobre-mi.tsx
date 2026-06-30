"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { sobreMi } from "@/lib/content";

export function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="relative isolate py-24 sm:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="sobre-mi-title"
    >
      <EmberGlow intensity="medium" position="center" className="-z-10 opacity-40" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24 items-start">

          {/* Left — About text */}
          <Reveal>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_12px_2px_rgba(26,115,232,0.6)]"
                  />
                  <span className="text-xs font-mono uppercase tracking-[0.22em] text-ember">
                    {sobreMi.eyebrow}
                  </span>
                </div>
                <h2
                  id="sobre-mi-title"
                  className="text-balance font-semibold tracking-tight text-foreground"
                  style={{ fontSize: "clamp(1.75rem, 4vw + 0.5rem, 3rem)", lineHeight: 1.1 }}
                >
                  {sobreMi.title}
                </h2>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                {sobreMi.body}
              </p>

              {/* Filosofía quote */}
              <blockquote className="relative border-l-2 border-ember/60 pl-5">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  &ldquo;{sobreMi.filosofia}&rdquo;
                </p>
              </blockquote>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {sobreMi.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-ember/40 hover:text-foreground transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — Timeline */}
          <Reveal>
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div
                aria-hidden
                className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-ember/60 via-border to-transparent"
              />

              {sobreMi.timeline.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* Node */}
                  <div className="relative flex-shrink-0 flex items-start justify-center w-10 pt-0.5">
                    <div className="relative h-10 w-10 flex items-center justify-center rounded-full border border-border-strong bg-background shadow-[0_0_24px_-8px_rgba(26,115,232,0.5)]">
                      <span className="text-[10px] font-mono text-ember">{event.year.slice(-2)}</span>
                      {/* pulse ring for first item */}
                      {i === sobreMi.timeline.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-full border border-ember/50 animate-node-pulse"
                        />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 pt-1.5 pb-2">
                    <span className="font-mono text-xs text-ember tracking-widest">{event.year}</span>
                    <h3 className="text-base font-semibold text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
