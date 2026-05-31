"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/layout/container";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { EmberParticles } from "@/components/primitives/ember-particles";
import { GrainOverlay } from "@/components/primitives/grain-overlay";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";
import { ease, heroContainer, heroLine } from "@/lib/motion-presets";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center pt-32 sm:pt-36 pb-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Atmospheric layers */}
      <EmberGlow intensity="strong" position="center" className="-z-10" />

      <div className="absolute inset-0 -z-20 pointer-events-none">
        <EmberParticles count={18} />
      </div>

      <GrainOverlay />

      {/* Subtle grid lines suggesting structure */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={heroLine} className="mb-8 inline-flex items-center gap-2.5">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_16px_3px_rgba(26,115,232,0.7)]"
            />
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
              {hero.eyebrow}
            </span>
          </motion.div>

          <h1
            id="hero-title"
            className="text-balance font-semibold tracking-tighter leading-[0.95] text-foreground"
            style={{ fontSize: "clamp(2.75rem, 7.5vw + 0.5rem, 6.5rem)" }}
          >
            {hero.headline.map((line, idx) => (
              <motion.span key={line} variants={heroLine} className="block">
                {idx === hero.headline.length - 1 ? (
                  <>
                    {line.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="relative">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-ember-bright via-ember to-ember-dim">
                        {line.split(" ").slice(-1)}
                      </span>
                    </span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={heroLine}
            className="mt-8 max-w-2xl text-pretty text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={heroLine}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative scroll indicator, anchored to section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-subtle pointer-events-none"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">scroll</span>
        <span aria-hidden className="h-8 w-px bg-gradient-to-b from-subtle to-transparent" />
      </motion.div>
    </section>
  );
}
