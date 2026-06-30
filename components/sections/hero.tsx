"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
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

      {/* Grid lines */}
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
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Left — Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContainer}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            
            <h1
              id="hero-title"
              className="text-balance font-semibold tracking-tighter leading-[0.95] text-foreground"
              style={{ fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5.5rem)" }}
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
              className="mt-8 max-w-xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              {hero.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={heroLine}
              className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-border pt-8 w-full max-w-xl"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5 items-center lg:items-start text-center lg:text-left">
                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground leading-tight max-w-[80px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={heroLine}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-3 w-full sm:w-auto"
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

          {/* Right — Photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center mt-12 lg:mt-0 w-full"
          >
            {/* Outer glow */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(26,115,232,0.25) 0%, transparent 70%)",
                filter: "blur(32px)",
              }}
            />

            {/* Photo card */}
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl border border-border-strong overflow-hidden bg-card shadow-2xl">
              {/* Glassmorphism top bar */}
              <div className="absolute top-0 inset-x-0 z-10 flex items-center gap-2 px-4 py-3 bg-background/40 backdrop-blur-xl border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ember/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                </div>
                <span className="ml-auto font-mono text-[10px] text-subtle tracking-widest uppercase">
                  Cristian Holguin · 2026
                </span>
              </div>

              <Image
                src="/cristian-holguin.png"
                alt="Cristian Holguin — Consultor de Tecnología, Growth e IA"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Bottom overlay card */}
              <div className="absolute bottom-0 inset-x-0 z-10 p-4 bg-background/60 backdrop-blur-xl border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Cristian Holguin</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Ingeniería · Growth · IA · GEO
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      aria-hidden
                      className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]"
                    />
                    <span className="text-xs text-emerald-400 font-mono">Disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge — GEO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease }}
              className="absolute -right-6 top-1/3 z-20"
            >
              <div className="flex items-center gap-2 rounded-xl border border-ember/30 bg-card/80 backdrop-blur-xl px-3.5 py-2.5 shadow-lg">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_2px_rgba(26,115,232,0.8)]"
                />
                <span className="text-xs font-mono text-ember uppercase tracking-wider">
                  GEO Pioneer
                </span>
              </div>
            </motion.div>

            {/* Floating badge — 12 años */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease }}
              className="absolute -left-6 bottom-1/3 z-20"
            >
              <div className="flex items-center gap-2 rounded-xl border border-border-strong bg-card/80 backdrop-blur-xl px-3.5 py-2.5 shadow-lg">
                <span className="text-sm font-bold text-foreground">12+</span>
                <span className="text-xs text-muted-foreground">años</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
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
