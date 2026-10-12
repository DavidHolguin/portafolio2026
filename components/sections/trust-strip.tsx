import { Container } from "@/components/layout/container";
import { trustStrip } from "@/lib/content";

interface Brand {
  slug: string;
  name: string;
  src: string | null;
  height: number;
  /** false = el archivo es solo el símbolo y hay que escribir el nombre al lado */
  wordmark: boolean;
  /** País del cliente. Hoy solo lo usa la sección de proyectos, no esta franja. */
  pais: string | null;
}

const brands = trustStrip.brands as Brand[];

/**
 * Franja de clientes: la animación del «he trabajado con». Va solo con los logos
 * —sin banderas y sin renglón de países—: el origen de cada empresa se cuenta
 * donde se cuenta cada proyecto, no en esta tira.
 */
export function TrustStrip() {
  // Duplicado para el desplazamiento continuo
  const items = [...brands, ...brands];

  return (
    <section
      aria-label={trustStrip.label}
      className="relative overflow-hidden border-y border-border bg-card/40 py-9"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {trustStrip.label}
          </span>

          <div className="group relative flex-1 overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background via-background/80 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background via-background/80 to-transparent"
            />

            <ul className="flex w-max items-center gap-12 animate-marquee group-hover:[animation-play-state:paused]">
              {items.map((brand, idx) => (
                <li
                  key={idx < brands.length ? brand.slug : `dup-${brand.slug}`}
                  className="flex shrink-0 items-center gap-2.5 opacity-75 transition-opacity duration-300 hover:opacity-100"
                >
                  {brand.src ? (
                    <>
                      {/* biome-ignore lint/performance/noImgElement: logo local, no necesita optimización */}
                      <img
                        src={brand.src}
                        alt={brand.name}
                        style={{ height: brand.height }}
                        className="block w-auto select-none"
                      />
                      {!brand.wordmark && (
                        <span className="text-sm font-medium tracking-tight text-muted-foreground">
                          {brand.name}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-sm font-semibold tracking-tight text-muted-foreground">
                      {brand.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
