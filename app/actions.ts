"use server";

import { z } from "zod";
import { whatsappUrl } from "@/lib/content";
import { normalizarTelefono, registrarLead } from "@/lib/leads";

const LeadSchema = z.object({
  name: z
    .string({ error: "Cuéntame tu nombre." })
    .trim()
    .min(2, "Cuéntame tu nombre.")
    .max(80, "Eso es muy largo."),
  phone: z
    .string({ error: "Necesito tu celular para contactarte." })
    .trim()
    .min(7, "El número parece incompleto.")
    .max(20, "El número parece demasiado largo.")
    .regex(/^[\d+\s()-]+$/, "Solo dígitos, espacios o + ( ) -"),
  /** Página o caso de donde vino el lead — viaja como origen. */
  source: z.string().trim().max(120).optional().default("Portafolio"),
});

export type LeadState = {
  ok: boolean;
  error?: string;
  /** Enlace a WhatsApp para que el lead pueda seguir la conversación. */
  whatsappUrl?: string;
};

/**
 * Recibe el lead del formulario: valida y lo reparte a los tres destinos de la
 * casa (Twenty, Chatwoot y Telegram) en `lib/leads.ts`.
 *
 * Si **ningún** destino lo recibe, devuelve un error claro y ofrece WhatsApp:
 * nunca se simula un éxito que no ocurrió.
 */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const parsed = LeadSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    source: formData.get("source"),
  });

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Revisa los campos.";
    return { ok: false, error: firstError };
  }

  const { name, phone, source } = parsed.data;
  const telefono = normalizarTelefono(phone);

  const { ok, motivos } = await registrarLead({
    nombre: name,
    origen: source,
    telefono,
    telefonoCrudo: phone,
  });

  if (!ok) {
    console.error("[submitLead] ningún destino recibió el lead:", motivos.join(" | "));
    return {
      ok: false,
      error:
        "No pude registrar tus datos en este momento. Escríbeme directamente por WhatsApp y te atiendo igual.",
    };
  }

  return {
    ok: true,
    whatsappUrl: whatsappUrl(
      `Hola Cristian, soy ${name}. Acabo de dejar mis datos en tu portafolio${
        source && source !== "Portafolio" ? ` (vi el caso de ${source})` : ""
      } y quiero conversar.`,
    ),
  };
}
