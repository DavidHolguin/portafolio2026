"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { useActionState } from "react";
import { type LeadState, submitLead } from "@/app/actions";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/content";

interface LeadFormProps {
  /** De dónde viene el lead: se guarda como `origen` en el CRM. */
  source: string;
  /** Texto del botón. Por defecto: "Enviar mi contacto". */
  submitLabel?: string;
  className?: string;
}

const initialState: LeadState = { ok: false };

/** Fondo del panel: la etiqueta lo repite para «cortar» el borde del campo. */
const PANEL = "bg-[#0c0d0f]";

const campo =
  "peer h-12 w-full rounded-xl border border-border-strong bg-background/60 px-4 text-sm text-foreground transition-colors duration-200 focus:border-ember/70 focus:outline-none focus:ring-2 focus:ring-ember/25";

const etiqueta = `pointer-events-none absolute -top-2 left-3 px-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-200 peer-focus:text-ember-bright ${PANEL}`;

export function LeadForm({ source, submitLabel = "Enviar mi contacto", className }: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);

  const directWaUrl = whatsappUrl(
    `Hola Cristian, vi tu portafolio y quiero conversar sobre un proyecto.`,
  );

  if (state.ok) {
    return (
      <div
        className={`animate-lead-rise rounded-2xl border border-ember/40 bg-ember-soft/30 p-7 text-left ${className ?? ""}`}
        role="status"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ember">Listo</span>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
          Ya tengo tus datos.
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          Te escribo por WhatsApp dentro de las próximas 24 horas. Si quieres adelantarte, ábreme la
          conversación tú.
        </p>
        <a
          href={state.whatsappUrl ?? directWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ember-bright transition-colors hover:text-ember"
        >
          <WhatsAppIcon className="h-4 w-4" brand />
          Abrir la conversación en WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className={`group animate-lead-rise relative flex flex-col gap-6 rounded-2xl border border-border-strong ${PANEL} p-6 transition-[border-color,box-shadow] duration-300 focus-within:border-ember/45 focus-within:shadow-[0_0_60px_-20px_rgba(26,115,232,0.55)] sm:p-7 ${className ?? ""}`}
      aria-label="Déjame tu contacto"
      noValidate
    >
      {/* Luz del panel: sube cuando alguien está escribiendo dentro */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent opacity-60 transition-opacity duration-300 group-focus-within:opacity-100"
      />

      <div className="flex flex-col gap-1.5 text-left">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember-bright">
          Déjame tu contacto
        </span>
        <span className="text-pretty text-sm leading-relaxed text-muted-foreground">
          Te escribo por WhatsApp o te llamo dentro de 24 horas. Sin spam, sin listas de correo.
        </span>
      </div>

      <input type="hidden" name="source" value={source} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative">
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            className={campo}
          />
          <label htmlFor="lead-name" className={etiqueta}>
            Tu nombre
          </label>
        </div>

        <div className="relative">
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            minLength={7}
            maxLength={20}
            pattern="[\d+\s()\-]+"
            className={campo}
          />
          <label htmlFor="lead-phone" className={etiqueta}>
            Tu WhatsApp
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              {submitLabel}
              <ArrowRight />
            </>
          )}
        </Button>

        <a
          href={directWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" brand />o escríbeme a {site.contact.whatsappDisplay}
        </a>
      </div>

      {state.error && (
        <p className="text-xs text-destructive" role="alert">
          {state.error}{" "}
          <a
            href={directWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-ember"
          >
            Abrir WhatsApp
          </a>
        </p>
      )}

      <p className="text-[11px] leading-relaxed text-muted-foreground">
        Al enviar aceptas que te contacte por WhatsApp o llamada. Tus datos quedan en mi CRM y no se
        comparten con terceros.
      </p>
    </form>
  );
}
