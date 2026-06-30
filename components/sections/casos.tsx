"use client";

import { ArrowRight, Building2, MapPin, Tag } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { casos, whatsappUrl } from "@/lib/content";

const tagColors: Record<string, string> = {
  IA: "bg-ember/10 text-ember border-ember/20",
  Analítica: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Paid Media": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  CRM: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Automatización: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Desarrollo: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "WhatsApp API": "bg-green-500/10 text-green-400 border-green-500/20",
  Gamificación: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Growth: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  default: "bg-card text-muted-foreground border-border",
};

export function Casos() {
  return (
    <section
      id="casos"
      className="relative border-t border-border bg-card/30 py-24 sm:py-32 lg:py-40"
      aria-labelledby="casos-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={casos.eyebrow}
            title={<span id="casos-title">{casos.title}</span>}
            description={casos.description}
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-8">
          {casos.items.map((caso, i) => (
            <motion.article
              key={caso.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-border bg-card/60 overflow-hidden transition-all duration-300 hover:border-ember/30 hover:bg-card"
            >
              {/* Hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 40% at 0% 50%, rgba(26,115,232,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="relative grid gap-0 md:grid-cols-[1fr_auto]">
                {/* Main content */}
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                          {caso.client}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Building2 className="h-3 w-3" />
                          {caso.sector}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {caso.location}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 ml-auto">
                      {caso.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${tagColors[tag] ?? tagColors.default}`}
                        >
                          <Tag className="h-2.5 w-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* STAR */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-mono uppercase tracking-[0.18em] text-subtle">
                        El Reto
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        {caso.reto}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-mono uppercase tracking-[0.18em] text-subtle">
                        La Estrategia
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        {caso.solucion}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics panel */}
                <div className="flex flex-col justify-center gap-0 border-t border-border md:border-t-0 md:border-l">
                  {/* Big result */}
                  <div className="px-8 py-6 bg-ember/5 border-b border-border flex flex-col items-center justify-center text-center gap-1 min-w-[200px]">
                    <span className="text-xs font-mono uppercase tracking-[0.18em] text-ember mb-1">
                      Resultado
                    </span>
                    <span className="text-2xl font-bold text-foreground leading-tight">
                      {caso.resultado}
                    </span>
                  </div>

                  {/* Individual metrics */}
                  {caso.metricas.map((m, mi) => (
                    <div
                      key={m.label}
                      className={`flex flex-col items-center justify-center text-center gap-0.5 px-8 py-5 ${mi < caso.metricas.length - 1 ? "border-b border-border" : ""}`}
                    >
                      <span className="text-xl font-bold tracking-tight text-foreground">
                        {m.value}
                      </span>
                      <span className="text-xs text-muted-foreground max-w-[140px] leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA below */}
        <Reveal className="mt-12 flex justify-center">
          <a
            href={whatsappUrl("Hola Cristian, vi tus casos de éxito y quiero conversar sobre mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ember transition-colors group"
          >
            ¿Quieres un resultado similar?
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
