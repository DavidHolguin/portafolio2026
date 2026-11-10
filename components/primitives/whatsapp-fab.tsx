"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { whatsappUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

interface WhatsAppFabProps {
  /** Mensaje pre-llenado de la conversación. */
  message: string;
}

/**
 * Botón flotante de WhatsApp.
 *
 * Aparece al pasar el hero (no compite con el CTA de la portada) y se esconde
 * cuando el bloque de contacto o el pie están en pantalla: ahí el mismo botón
 * vive dentro de la tarjeta y no tiene sentido duplicarlo encima.
 * Respeta el área segura del teléfono y se mantiene al alcance del pulgar.
 */
export function WhatsAppFab({ message }: WhatsAppFabProps) {
  const [pasoElHero, setPasoElHero] = useState(false);
  const [enZonaDeContacto, setEnZonaDeContacto] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setPasoElHero(window.scrollY > 360);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });

    // El bloque de contacto y el pie ya ofrecen WhatsApp: el flotante sobra ahí.
    const destinos = Array.from(document.querySelectorAll("#contacto, footer"));
    const enPantalla = new Set<Element>();
    const observador = destinos.length
      ? new IntersectionObserver(
          (entradas) => {
            for (const entrada of entradas) {
              if (entrada.isIntersecting) enPantalla.add(entrada.target);
              else enPantalla.delete(entrada.target);
            }
            setEnZonaDeContacto(enPantalla.size > 0);
          },
          { rootMargin: "0px 0px -20% 0px" },
        )
      : null;

    for (const destino of destinos) observador?.observe(destino);

    return () => {
      window.removeEventListener("scroll", alHacerScroll);
      observador?.disconnect();
    };
  }, []);

  const visible = pasoElHero && !enZonaDeContacto;

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a mi WhatsApp personal"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      className={cn(
        "group fixed right-4 z-50 inline-flex h-14 items-center gap-3 rounded-full border pl-2 pr-4 sm:right-6 sm:pr-5",
        "border-[#25D366]/35 bg-[#07110c]/90 text-foreground backdrop-blur-xl",
        "shadow-[0_20px_48px_-18px_rgba(0,0,0,0.95)]",
        "transition-[transform,opacity,background-color,border-color] duration-500 ease-out",
        "hover:-translate-y-0.5 hover:border-[#25D366]/70 hover:bg-[#0b1a12]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/12">
        <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
      </span>
      <span className="text-sm font-medium text-foreground/90">
        <span className="sm:hidden">WhatsApp</span>
        <span className="hidden sm:inline">Escríbeme por WhatsApp</span>
      </span>
    </a>
  );
}
