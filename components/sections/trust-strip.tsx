import { Container } from "@/components/layout/container";
import { BrandLogo } from "@/components/primitives/brand-logo";
import { trustStrip } from "@/lib/content";

export function TrustStrip() {
  // Duplicate for seamless marquee
  const items = [...trustStrip.brands, ...trustStrip.brands];

  // Brands without a Simple Icons slug — render as text
  const textOnlyBrands = new Set(["rappi", "icbf", "pari", "anthropic", "googlesearchconsole", "googletag", "looker"]);

  return (
    <section
      aria-label={trustStrip.label}
      className="relative border-y border-border bg-card/40 py-10 overflow-hidden"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
          <span className="shrink-0 text-xs font-mono uppercase tracking-[0.22em] text-subtle">
            {trustStrip.label}
          </span>

          <div className="group relative flex-1 overflow-hidden">
            {/* Edge fades */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background via-background/80 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background via-background/80 to-transparent"
            />

            <ul className="flex w-max items-center gap-10 animate-marquee group-hover:[animation-play-state:paused]">
              {items.map((brand, idx) => (
                <li
                  key={idx < trustStrip.brands.length ? brand.slug : `dup-${brand.slug}`}
                  className="flex items-center gap-2.5 shrink-0 grayscale opacity-55 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                >
                  {textOnlyBrands.has(brand.slug) ? (
                    <span className="text-sm font-semibold tracking-tight text-muted-foreground">
                      {brand.name}
                    </span>
                  ) : (
                    <>
                      <BrandLogo slug={brand.slug} name={brand.name} size={22} color="A1A1AA" />
                      <span className="text-sm font-medium text-muted-foreground">{brand.name}</span>
                    </>
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
