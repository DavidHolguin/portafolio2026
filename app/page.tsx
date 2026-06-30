import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import { CtaFinal } from "@/components/sections/cta-final";
import { FAQ } from "@/components/sections/faq";
import { GeoIA } from "@/components/sections/geo-ia";
import { Hero } from "@/components/sections/hero";
import { Pilares } from "@/components/sections/pilares";
import { Casos } from "@/components/sections/casos";
import { Resultados } from "@/components/sections/resultados";
import { SobreMi } from "@/components/sections/sobre-mi";
import { Stack } from "@/components/sections/stack";
import { TrustStrip } from "@/components/sections/trust-strip";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="relative overflow-x-clip">
        <Hero />
        <TrustStrip />
        <Pilares />
        <Casos />
        <Stack />
        <Resultados />
        <SobreMi />
        <GeoIA />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
