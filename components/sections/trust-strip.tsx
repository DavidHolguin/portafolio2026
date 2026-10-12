import { Container } from "@/components/layout/container";
import { trustStrip } from "@/lib/content";

interface Brand {
  slug: string;
  name: string;
  src: string | null;
  height: number;
  plate: boolean;
  /** false = el archivo es solo el símbolo y hay que escribir el nombre al lado */
  wordmark: boolean;
}

const brands = trustStrip.brands as Brand[];

/**
 * Franja de clientes. Los logos son los oficiales (archivos en /public/logos);
 * las herramientas viven en la sección de stack, no aquí: mezclarlas bajo
 * «he trabajado con» hacía creer que un software era un cliente.
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
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
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
                  className="flex shrink-0 items-center gap-2.5 opacity-70 transition-opacity duration-300 hover:opacity-100"
                >
                  {brand.src ? (
                    <>
                      {brand.plate ? (
                        <span className="inline-flex items-center rounded-md bg-white/95 px-2.5 py-1.5">
                          {/* biome-ignore lint/performance/noImgElement: logo SVG local */}
                          <img
                            src={brand.src}
                            alt={brand.name}
                            style={{ height: brand.height }}
                            className="block w-auto select-none"
                          />
                        </span>
                      ) : (
                        // biome-ignore lint/performance/noImgElement: logo SVG local
                        <img
                          src={brand.src}
                          alt={brand.name}
                          style={{ height: brand.height }}
                          className="block w-auto select-none"
                        />
                      )}
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
