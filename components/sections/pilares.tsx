"use client";

import { BarChart3, Bot, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { pilares } from "@/lib/content";

const iconMap = {
  engineering: <Bot className="h-6 w-6" strokeWidth={1.5} />,
  growth: <TrendingUp className="h-6 w-6" strokeWidth={1.5} />,
  data: <BarChart3 className="h-6 w-6" strokeWidth={1.5} />,
} as const;

const colorMap = {
  engineering: {
    dot: "bg-ember shadow-[0_0_14px_3px_rgba(26,115,232,0.7)]",
    icon: "border-ember/20 bg-ember/10 text-ember shadow-[0_0_30px_-8px_rgba(26,115,232,0.5)]",
    label: "text-ember",
    hover: "hover:border-ember/40",
    glow: "rgba(26,115,232,0.08)",
    tag: "bg-ember/10 text-ember border-ember/20",
  },
  growth: {
    dot: "bg-violet-500 shadow-[0_0_14px_3px_rgba(139,92,246,0.7)]",
    icon: "border-violet-500/20 bg-violet-500/10 text-violet-400 shadow-[0_0_30px_-8px_rgba(139,92,246,0.5)]",
    label: "text-violet-400",
    hover: "hover:border-violet-500/40",
    glow: "rgba(139,92,246,0.08)",
    tag: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  data: {
    dot: "bg-emerald-500 shadow-[0_0_14px_3px_rgba(16,185,129,0.7)]",
    icon: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_30px_-8px_rgba(16,185,129,0.5)]",
    label: "text-emerald-400",
    hover: "hover:border-emerald-500/40",
    glow: "rgba(16,185,129,0.08)",
    tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
} as const;

export function Pilares() {
  return (
    <section
      id="pilares"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="pilares-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={pilares.eyebrow}
            title={<span id="pilares-title">{pilares.title}</span>}
            description={pilares.description}
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pilares.items.map((pilar, i) => {
            const colors = colorMap[pilar.icon as keyof typeof colorMap];
            return (
              <motion.div
                key={pilar.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col gap-8 rounded-2xl border border-border bg-card/60 p-8 transition-all duration-300 ${colors.hover} hover:bg-card`}
              >
                {/* Soft hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 30% 0%, ${colors.glow} 0%, transparent 60%)`,
                  }}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${colors.icon}`}
                  >
                    {iconMap[pilar.icon as keyof typeof iconMap]}
                  </div>
                  <span className="font-mono text-xs text-subtle">{pilar.number}</span>
                </div>

                {/* Content */}
                <div className="relative flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="inline-flex items-center gap-2 mb-1">
                      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
                      <span className={`text-xs font-mono uppercase tracking-[0.18em] ${colors.label}`}>
                        {pilar.tagline}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {pilar.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {pilar.description}
                  </p>
                </div>

                {/* Capabilities */}
                <ul className="relative flex flex-col gap-2 border-t border-border pt-6">
                  {pilar.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className={`mt-[5px] h-1.5 w-1.5 rounded-full shrink-0 ${colors.dot} opacity-60`}
                      />
                      <span className="text-sm text-muted-foreground">{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
