import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import { CtaFinal } from "@/components/sections/cta-final";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Manifiesto } from "@/components/sections/manifiesto";
import { Proceso } from "@/components/sections/proceso";
import { Resultados } from "@/components/sections/resultados";
import { Servicios } from "@/components/sections/servicios";
import { Stack } from "@/components/sections/stack";
import { TrustStrip } from "@/components/sections/trust-strip";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="relative overflow-x-clip">
        <Hero />
        <TrustStrip />
        <Servicios />
        <Proceso />
        <Resultados />
        <Stack />
        <Manifiesto />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
