import type { CSSProperties } from "react";

/**
 * Electrones viajando por la rejilla del hero.
 *
 * La rejilla del hero son dos gradientes lineales cada 80 px (ver `hero.tsx`),
 * así que las líneas están en múltiplos de 80 desde el borde superior del
 * bloque. Aquí se dibujan sobre esas mismas líneas unos puntos de luz con
 * estela —como corriente recorriendo un conductor—: dos horizontales y una
 * vertical, cada uno con su propia velocidad y desfase para que no se vean
 * sincronizados.
 *
 * Sin JavaScript: son keyframes de CSS. Con `prefers-reduced-motion` el
 * `globals.css` deja la animación en 0.01 ms, o sea que el punto queda quieto
 * en su línea y no molesta.
 */

/** Línea (múltiplo de 80 px) y tiempo de cada electrón. */
const HORIZONTALES = [
  { top: 160, dur: "13s", delay: "-2s", largo: 200 },
  { top: 480, dur: "19s", delay: "-9s", largo: 260 },
  { top: 800, dur: "16s", delay: "-13s", largo: 170 },
];

const VERTICALES = [
  { left: 240, dur: "21s", delay: "-5s", largo: 220 },
  { left: 720, dur: "17s", delay: "-11s", largo: 190 },
];

export function ElectronFlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden sm:block"
      style={{
        // La misma máscara que la rejilla: los electrones viven donde la rejilla se ve.
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
      }}
    >
      {HORIZONTALES.map((e) => (
        <div key={`h-${e.top}`} className="absolute left-0 right-0" style={{ top: e.top }}>
          <div
            className="animate-electron-x absolute h-px"
            style={
              {
                width: e.largo,
                background: "linear-gradient(90deg, transparent, rgba(86,151,255,0.75))",
                "--electron-dur": e.dur,
                "--electron-delay": e.delay,
              } as CSSProperties
            }
          >
            <span
              className="absolute -right-[3px] top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-ember-bright"
              style={{ boxShadow: "0 0 12px 3px rgba(86,151,255,0.55)" }}
            />
          </div>
        </div>
      ))}

      {VERTICALES.map((e) => (
        <div key={`v-${e.left}`} className="absolute bottom-0 top-0" style={{ left: e.left }}>
          <div
            className="animate-electron-y absolute w-px"
            style={
              {
                height: e.largo,
                background: "linear-gradient(180deg, transparent, rgba(86,151,255,0.6))",
                "--electron-dur": e.dur,
                "--electron-delay": e.delay,
              } as CSSProperties
            }
          >
            <span
              className="absolute -bottom-[3px] left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-ember-bright"
              style={{ boxShadow: "0 0 12px 3px rgba(86,151,255,0.45)" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
