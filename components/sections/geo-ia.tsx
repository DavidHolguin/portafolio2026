"use client";

import { Bot, Shield, Target } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { GrainOverlay } from "@/components/primitives/grain-overlay";
import { geoIa } from "@/lib/content";

const iconMap = {
  target: <Target className="h-5 w-5" strokeWidth={1.5} />,
  shield: <Shield className="h-5 w-5" strokeWidth={1.5} />,
  bot: <Bot className="h-5 w-5" strokeWidth={1.5} />,
} as const;

export function GeoIA() {
  return (
    <section
      id="geo-ia"
      className="relative isolate border-t border-border overflow-hidden py-24 sm:py-32 lg:py-40"
      aria-labelledby="geo-ia-title"
    >
      <EmberGlow intensity="strong" position="center" className="-z-10 opacity-50" />
      <GrainOverlay />

      {/* Neural network lines background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1a73e8 1px, transparent 1px),
            linear-gradient(to bottom, #1a73e8 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Left — Content */}
          <Reveal>
            <div className="flex flex-col gap-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_16px_3px_rgba(26,115,232,0.8)]"
                />
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-ember">
                  {geoIa.eyebrow}
                </span>
              </div>

              <h2
                id="geo-ia-title"
                className="text-balance font-semibold tracking-tighter text-foreground leading-[1.0]"
                style={{ fontSize: "clamp(1.75rem, 4.5vw + 0.5rem, 3.5rem)" }}
              >
                {geoIa.title}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {geoIa.description}
              </p>

              <p className="text-base text-muted-foreground leading-relaxed text-pretty border-l-2 border-ember/40 pl-5">
                {geoIa.body}
              </p>

              {/* Capabilities */}
              <div className="flex flex-col gap-4 pt-2">
                {geoIa.capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg border border-ember/20 bg-ember/10 text-ember shadow-[0_0_20px_-6px_rgba(26,115,232,0.5)]">
                      {iconMap[cap.icon as keyof typeof iconMap]}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-semibold text-foreground">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — Big stat + visual */}
          <Reveal>
            <div className="relative flex flex-col items-center justify-center">
              {/* Big stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-xs rounded-3xl border border-ember/20 bg-card/60 backdrop-blur-xl p-10 flex flex-col items-center gap-4 text-center shadow-[0_0_80px_-20px_rgba(26,115,232,0.3)]"
              >
                {/* Glow center */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(26,115,232,0.12) 0%, transparent 70%)",
                  }}
                />

                <span className="relative text-xs font-mono uppercase tracking-[0.22em] text-ember">
                  Dato clave
                </span>
                <span
                  className="relative font-bold tracking-tighter text-foreground bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                  style={{ fontSize: "clamp(4rem, 12vw, 6rem)", lineHeight: 1 }}
                >
                  {geoIa.stat.value}
                </span>
                <p className="relative text-base text-muted-foreground text-pretty leading-snug max-w-[200px]">
                  {geoIa.stat.label}
                </p>
                <span className="relative text-[10px] font-mono text-subtle tracking-widest">
                  {geoIa.stat.source}
                </span>
              </motion.div>

              {/* Platform pills below */}
              <div className="mt-8 flex flex-wrap gap-2 justify-center">
                {["ChatGPT", "Gemini", "Claude", "Perplexity", "Copilot"].map((platform, i) => (
                  <motion.span
                    key={platform}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-mono text-muted-foreground"
                  >
                    {platform}
                  </motion.span>
                ))}
              </div>
              <p className="mt-3 text-xs text-subtle font-mono text-center">
                ← plataformas donde GEO te posiciona
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
