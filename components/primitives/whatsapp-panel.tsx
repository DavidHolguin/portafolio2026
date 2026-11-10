import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

interface WhatsAppPanelProps {
  /** Mensaje pre-llenado: la conversación arranca con el contexto puesto. */
  message: string;
  /** Línea de apoyo bajo el número. Si no llega, usa la general. */
  note?: string;
  className?: string;
}

/**
 * La tarjeta de contacto directo: el WhatsApp personal del dueño.
 *
 * Sustituye al formulario. El número se ve, se puede copiar y abre la
 * conversación con el mensaje ya escrito; no hay campos que llenar.
 */
export function WhatsAppPanel({ message, note, className }: WhatsAppPanelProps) {
  const url = whatsappUrl(message);

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-foreground/15 bg-[#08090a] p-6 text-left sm:p-8",
        className,
      )}
    >
      {/* La luz de la tarjeta: sobre negro puro el bloque se veía apagado */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-16 -inset-y-12 -z-10"
        style={{
          background: "radial-gradient(ellipse at 20% 0%, rgba(37,211,102,0.11), transparent 62%)",
        }}
      />

      <div className="flex items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10">
          <WhatsAppIcon className="h-5 w-5" brand />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            WhatsApp directo
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-xl font-semibold tracking-tight text-foreground tabular-nums transition-colors duration-200 hover:text-ember-bright"
          >
            {site.contact.whatsappDisplay}
          </a>
        </div>
      </div>

      <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
        {note ?? "Te contesto yo, no un bot. Cuéntame qué necesitas y te digo cómo lo resolvería."}
      </p>

      <Button asChild size="lg" className="mt-5 w-full">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="h-4 w-4" />
          Abrir la conversación
          <ArrowRight />
        </a>
      </Button>
    </div>
  );
}
