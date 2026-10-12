import { cn } from "@/lib/utils";

/** Los países donde hay proyectos. Los archivos viven en `public/logos/flags`. */
const PAISES: Record<string, string> = {
  CO: "Colombia",
  MX: "México",
  BR: "Brasil",
};

interface FlagProps {
  /** Código ISO de dos letras: CO · MX · BR */
  codigo: string;
  className?: string;
}

/**
 * Banderita junto al cliente o al caso. Es un PNG de 80 px de ancho (unas
 * centenas de bytes) en vez de emoji: los emoji de bandera no se dibujan en
 * Windows y aquí la bandera es información, no adorno.
 */
export function Flag({ codigo, className }: FlagProps) {
  const nombre = PAISES[codigo];
  if (!nombre) return null;

  // biome-ignore lint/performance/noImgElement: PNG local de 80 px, no necesita optimización
  return (
    <img
      src={`/logos/flags/${codigo.toLowerCase()}.png`}
      alt={nombre}
      title={nombre}
      className={cn(
        "inline-block h-3 w-[18px] shrink-0 rounded-[2px] object-cover ring-1 ring-inset ring-white/15",
        className,
      )}
    />
  );
}

export { PAISES };
