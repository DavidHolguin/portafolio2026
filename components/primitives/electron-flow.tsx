"use client";

import { useEffect, useRef } from "react";

/** La rejilla del hero son líneas cada 80 px (ver `hero.tsx`). */
const CELDA = 80;
/** Cuántos electrones pueden estar viajando a la vez. */
const MAX = 5;

/**
 * Electrones viajando por la rejilla del hero: puntos de luz con estela que
 * recorren una línea de la cuadrícula, como corriente dentro de un conductor.
 *
 * Se generan **al azar**: cada tanto se elige una línea distinta (horizontal o
 * vertical), un sentido, un largo de estela y una velocidad. Antes eran cinco
 * recorridos fijos en CSS y se notaba el patrón (siempre los mismos tiempos y
 * las mismas líneas); ahora no hay dos pasadas iguales.
 *
 * Con `prefers-reduced-motion` no se lanza ninguno. También corre en móvil: la
 * rejilla se ve ahí, así que la corriente también.
 */
export function ElectronFlow() {
  const contenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const capa = contenedor.current;
    if (!capa) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let vivo = true;
    const enVuelo = new Set<Animation>();
    const temporizadores: number[] = [];

    const lanzar = () => {
      if (!vivo || !capa) return;
      if (enVuelo.size >= MAX) return;

      const ancho = capa.clientWidth;
      const alto = capa.clientHeight;
      if (!ancho || !alto) return;

      const horizontal = Math.random() < 0.62;
      const estela = 130 + Math.random() * 220;
      const duracion = 5200 + Math.random() * 6200;
      const derecha = Math.random() < 0.5;
      const brillo = 0.5 + Math.random() * 0.35;

      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.pointerEvents = "none";
      el.style.willChange = "transform, opacity";

      const punto = document.createElement("span");
      punto.style.position = "absolute";
      punto.style.height = "5px";
      punto.style.width = "5px";
      punto.style.borderRadius = "999px";
      punto.style.background = "#5697ff";
      punto.style.boxShadow = `0 0 12px 3px rgba(86,151,255,${brillo})`;

      const linea = Math.max(
        CELDA,
        Math.round((Math.random() * (horizontal ? alto : ancho)) / CELDA) * CELDA,
      );

      if (horizontal) {
        el.style.height = "1px";
        el.style.width = `${estela}px`;
        el.style.top = `${linea}px`;
        el.style.left = derecha ? `-${estela}px` : `${ancho}px`;
        el.style.background = `linear-gradient(${derecha ? "90deg" : "270deg"}, transparent, rgba(86,151,255,${brillo}))`;
        punto.style.top = "-2px";
        punto.style[derecha ? "right" : "left"] = "-2px";
      } else {
        el.style.width = "1px";
        el.style.height = `${estela}px`;
        el.style.left = `${linea}px`;
        el.style.top = derecha ? `-${estela}px` : `${alto}px`;
        el.style.background = `linear-gradient(${derecha ? "180deg" : "0deg"}, transparent, rgba(86,151,255,${brillo}))`;
        punto.style.left = "-2px";
        punto.style[derecha ? "bottom" : "top"] = "-2px";
      }

      el.appendChild(punto);
      capa.appendChild(el);

      const distancia = horizontal ? ancho + estela * 2 : alto + estela * 2;
      const recorrido = horizontal
        ? `translate3d(${derecha ? distancia : -distancia}px, 0, 0)`
        : `translate3d(0, ${derecha ? distancia : -distancia}px, 0)`;

      const anim = el.animate(
        [
          { transform: "translate3d(0,0,0)", opacity: 0 },
          { opacity: 1, offset: 0.13 },
          { opacity: 1, offset: 0.84 },
          { transform: recorrido, opacity: 0 },
        ],
        { duration: duracion, easing: "linear", fill: "forwards" },
      );

      enVuelo.add(anim);
      anim.onfinish = () => {
        el.remove();
        enVuelo.delete(anim);
      };
    };

    // Arranque escalonado y luego latidos irregulares: así tampoco el ritmo es fijo.
    for (let i = 0; i < 3; i++) temporizadores.push(window.setTimeout(lanzar, 400 + i * 700));

    let siguiente = window.setTimeout(function latido() {
      if (!vivo) return;
      if (Math.random() < 0.8) lanzar();
      siguiente = window.setTimeout(latido, 1800 + Math.random() * 2600);
    }, 2200);
    temporizadores.push(siguiente);

    return () => {
      vivo = false;
      for (const t of temporizadores) window.clearTimeout(t);
      for (const a of enVuelo) a.cancel();
      capa.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={contenedor}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
      }}
    />
  );
}
