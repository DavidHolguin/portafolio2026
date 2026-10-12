import { Container } from "@/components/layout/container";
import { Flag } from "@/components/primitives/flag";
import { trustStrip } from "@/lib/content";

interface Brand {
  slug: string;
  name: string;
  src: string | null;
  height: number;
  plate: boolean;
  /** false = el archivo es solo el símbolo y hay que escribir el nombre al lado */
  wordmark: boolean;
  /** País del cliente: CO · MX · BR (null = proyecto regional) */
  pais: string | null;
}

const brands = trustStrip.brands as Brand[];
const paises = trustStrip.paises as string[];

/**
 * Franja de clientes. Los logos son los oficiales (archivos en /public/logos) y
 * cada uno lleva la bandera de su país, con el renglón de «proyectos en» debajo:
 * lo que hay que entender de un vistazo es que el trabajo no es de un solo país.
 * Las herramientas viven en la sección de stack, no aquí.
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
                      {/* biome-ignore lint/performance/noImgElement: logo SVG local */}
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
                  {brand.pais && <Flag codigo={brand.pais} className="ml-1" />}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Proyectos en
          </span>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {paises.map((codigo) => (
              <li key={codigo} className="flex items-center gap-2">
                <Flag codigo={codigo} className="h-4 w-6" />
                <span className="text-sm text-muted-foreground">
                  {codigo === "CO" ? "Colombia" : codigo === "MX" ? "México" : "Brasil"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
