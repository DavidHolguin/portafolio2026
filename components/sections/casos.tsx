"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { BrandLogo } from "@/components/primitives/brand-logo";
import { SectionHeading } from "@/components/primitives/section-heading";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { casos, whatsappUrl } from "@/lib/content";

interface LogoSpec {
  src: string;
  height: number;
  plate?: boolean;
  /** false = el archivo es solo el símbolo y hay que escribir el nombre al lado */
  wordmark?: boolean;
  alt: string;
}

interface Caso {
  slug: string;
  client: string;
  logo: LogoSpec | null;
  ally?: LogoSpec & { label: string };
  sector: string;
  location: string | null;
  year: string | null;
  titular: string;
  resumen: string;
  hechos: string[];
  entregables: string[];
  plataformas?: { slug: string; name: string }[];
}

const proyectos = casos.items as unknown as Caso[];

/**
 * Logo del cliente. Los que tienen texto oscuro (ICBF, EAM) van sobre una
 * placa clara: sobre el fondo negro quedarían ilegibles.
 */
function ClientLogo({
  logo,
  nombre,
  className,
}: {
  logo: LogoSpec | null;
  nombre?: string;
  className?: string;
}) {
  if (!logo) {
    return nombre ? (
      <span className="text-base font-semibold tracking-tight text-foreground">{nombre}</span>
    ) : null;
  }

  const img = (
    // biome-ignore lint/performance/noImgElement: logo SVG local, no necesita optimización
    <img
      src={logo.src}
      alt={logo.alt}
      height={logo.height}
      className="block w-auto select-none"
      style={{ height: logo.height }}
    />
  );

  if (logo.plate) {
    return <span className="inline-flex items-center rounded-lg bg-white/95 px-3 py-2">{img}</span>;
  }

  // Marcas cuyo archivo es solo el símbolo (Renault): el nombre va al lado.
  if (logo.wordmark === false && nombre) {
    return (
      <span className="inline-flex items-center gap-2.5">
        {img}
        <span className="text-base font-semibold uppercase tracking-[0.14em] text-foreground">
          {nombre}
        </span>
      </span>
    );
  }

  return <span className={className}>{img}</span>;
}

export function Casos() {
  const [abierto, setAbierto] = useState<string | null>(null);
  const activo = proyectos.find((c) => c.slug === abierto) ?? null;

  return (
    <section
      id="casos"
      className="relative border-t border-border bg-card/30 py-16 sm:py-20 lg:py-24"
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

        <ul className="mt-9 grid gap-5 sm:mt-12 md:grid-cols-2 lg:gap-7">
          {proyectos.map((caso) => (
            <li key={caso.slug} className="h-full">
              <article className="group flex h-full flex-col gap-5 rounded-2xl border border-border bg-card/60 p-6 transition-colors duration-300 hover:border-ember/40 hover:bg-card">
                <div className="flex items-start justify-between gap-4">
                  <ClientLogo logo={caso.logo} nombre={caso.client} className="text-foreground" />
                  {caso.year && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {caso.year}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span>{caso.sector}</span>
                  {caso.location && (
                    <>
                      <span aria-hidden className="text-subtle">
                        ·
                      </span>
                      <span>{caso.location}</span>
                    </>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {caso.titular}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {caso.resumen}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-1.5">
                  {caso.entregables.slice(0, 3).map((e) => (
                    <li
                      key={e}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {e}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setAbierto(caso.slug)}
                  className="inline-flex items-center gap-2 self-start text-sm font-medium text-ember-bright transition-colors hover:text-ember focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
                >
                  Ver el caso
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </article>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10 flex justify-center sm:mt-12">
          <a
            href={whatsappUrl("Hola Cristian, vi tus casos y quiero conversar sobre mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ember"
          >
            ¿Algo así pendiente en tu operación?
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </Container>

      <Dialog open={abierto !== null} onOpenChange={(o) => !o && setAbierto(null)}>
        <DialogContent>
          {activo && (
            <>
              <header className="flex flex-col gap-5 border-b border-border p-6 pr-16">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  <ClientLogo
                    logo={activo.logo}
                    nombre={activo.client}
                    className="text-foreground"
                  />
                  {activo.ally && (
                    <span className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span className="font-mono uppercase tracking-[0.14em]">
                        {activo.ally.label}
                      </span>
                      {/* biome-ignore lint/performance/noImgElement: logo SVG local */}
                      <img
                        src={activo.ally.src}
                        alt={activo.ally.alt}
                        style={{ height: activo.ally.height }}
                        className="block w-auto"
                      />
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {[activo.sector, activo.location, activo.year].filter(Boolean).join(" · ")}
                  </span>
                  <DialogTitle>{activo.titular}</DialogTitle>
                  <DialogDescription>{activo.resumen}</DialogDescription>
                </div>
              </header>

              <div className="flex flex-col gap-7 overflow-y-auto p-6">
                <div className="flex flex-col gap-3">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Qué se hizo
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {activo.hechos.map((hecho) => (
                      <li key={hecho} className="flex gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden />
                        <span className="text-pretty text-sm leading-relaxed text-muted-foreground">
                          {hecho}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Entregables
                  </h4>
                  <ul className="flex flex-wrap gap-1.5">
                    {activo.entregables.map((e) => (
                      <li
                        key={e}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                {activo.plataformas && (
                  <div className="flex flex-col gap-3">
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Plataformas de anuncios
                    </h4>
                    <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                      {activo.plataformas.map((p) => (
                        <li key={p.slug} className="flex items-center gap-2">
                          <BrandLogo slug={p.slug} name={p.name} size={20} color="A1A1AA" />
                          <span className="text-xs text-muted-foreground">{p.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <footer className="border-t border-border p-6">
                <Button asChild size="default" className="w-full sm:w-auto">
                  <a
                    href={whatsappUrl(
                      `Hola Cristian, vi el caso de ${activo.client} y quiero hablar de algo así.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-4 w-4" brand />
                    Hablemos de un proyecto así
                  </a>
                </Button>
              </footer>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
