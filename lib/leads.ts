/**
 * Alta de un lead del portafolio de Cristian Holguin.
 *
 * Tres destinos, los tres de la casa, en paralelo y sin que uno tumbe a los otros:
 *   1. Twenty (`pipeline.prometheuslabs.com.co`) → persona + oportunidad en la
 *      primera etapa del embudo, con `origen: PORTAFOLIO` (opción creada el
 *      12-oct-2026 en el select `origen` de la oportunidad). Es el registro
 *      comercial y lo que permite **contar** cuántos leads trae el portafolio.
 *   2. Chatwoot (`bandeja.prometheuslabs.com.co`) → contacto + conversación
 *      «pendiente» en la bandeja de WhatsApp, con nota privada del origen, para
 *      que quien atienda escriba desde ahí.
 *   3. Telegram → aviso inmediato al chat configurado, que es lo que hace que un
 *      lead no se enfríe esperando a que alguien abra el CRM.
 *
 * Reglas aprendidas en este ecosistema:
 *   - El teléfono va a Twenty en E.164 (código de país aparte): con un número
 *     suelto, Twenty rechaza el alta entera.
 *   - El nombre de la oportunidad lleva el origen, que es lo que la hace legible.
 *   - Ningún destino puede tumbar a los demás: si uno falla, se registra en el
 *     log y el lead se guarda con el que sí funcione.
 *
 * Variables de entorno (en Coolify, nunca en el repo):
 *   TWENTY_API_URL · TWENTY_API_KEY
 *   CHATWOOT_API_URL · CHATWOOT_API_TOKEN · CHATWOOT_ACCOUNT_ID · CHATWOOT_INBOX_ID
 *   TELEGRAM_BOT_TOKEN · TELEGRAM_CHAT_ID
 */

const TWENTY_URL = (process.env.TWENTY_API_URL ?? "https://pipeline.prometheuslabs.com.co").replace(
  /\/$/,
  "",
);
const TWENTY_KEY = process.env.TWENTY_API_KEY ?? "";

const CHATWOOT_URL = (
  process.env.CHATWOOT_API_URL ?? "https://bandeja.prometheuslabs.com.co"
).replace(/\/$/, "");
const CHATWOOT_TOKEN = process.env.CHATWOOT_API_TOKEN ?? "";
const CHATWOOT_ACCOUNT = process.env.CHATWOOT_ACCOUNT_ID ?? "1";
const CHATWOOT_INBOX = Number(process.env.CHATWOOT_INBOX_ID ?? "2");

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? "";
const TELEGRAM_CHAT = process.env.TELEGRAM_CHAT_ID ?? "";

/** Primera etapa del embudo de la casa (`opportunity.stage`). */
const ETAPA_NUEVA = "NUEVO";
/** Opción del select `origen` de la oportunidad para el portafolio personal. */
const ORIGEN_PORTAFOLIO = "PORTAFOLIO";

export interface Telefono {
  nacional: string;
  prefijo: string;
  pais: string;
  e164: string;
}

/**
 * Normaliza lo que escribió la persona. El portafolio se mueve en LATAM, así que
 * un número de 10 dígitos (o de 12 que ya traiga el 57) es de Colombia; el resto
 * se deja como internacional y lo valida Twenty.
 */
export function normalizarTelefono(crudo: string): Telefono | null {
  const digitos = crudo.replace(/\D/g, "");
  if (!digitos) return null;

  if (digitos.length === 12 && digitos.startsWith("57")) {
    return { nacional: digitos.slice(2), prefijo: "+57", pais: "CO", e164: `+${digitos}` };
  }
  if (digitos.length === 10) {
    return { nacional: digitos, prefijo: "+57", pais: "CO", e164: `+57${digitos}` };
  }
  if (digitos.length > 10) {
    return { nacional: digitos, prefijo: "", pais: "", e164: `+${digitos}` };
  }
  return null;
}

export interface DatosLead {
  nombre: string;
  /** De dónde vino: «Portafolio», «Caso Rappi», «Agente de ventas»… */
  origen: string;
  telefono: Telefono | null;
  telefonoCrudo: string;
}

export interface Resultado {
  ok: boolean;
  /** Motivo legible cuando falla (nunca se muestra al visitante). */
  motivo?: string;
}

export function twentyConfigurado(): boolean {
  return Boolean(TWENTY_KEY);
}

async function graphql(
  query: string,
  variables: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const r = await fetch(`${TWENTY_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${TWENTY_KEY}` },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  const json = (await r.json()) as {
    data?: Record<string, unknown>;
    errors?: { message: string }[];
  };
  if (json.errors?.length) throw new Error(json.errors.map((e) => e.message).join(" · "));
  return json.data ?? {};
}

/** Persona + oportunidad en el Twenty de la casa. */
export async function altaEnTwenty(
  datos: DatosLead,
): Promise<Resultado & { personaId?: string; oportunidadId?: string }> {
  if (!TWENTY_KEY) return { ok: false, motivo: "sin llave de Twenty configurada" };

  try {
    let persona: { id?: string } | undefined;
    if (datos.telefono) {
      const conTelefono = await graphql(
        `mutation($nombre:String!,$tel:String!,$prefijo:String!,$pais:String){
           createPerson(data:{
             name:{firstName:$nombre},
             phones:{primaryPhoneNumber:$tel,primaryPhoneCallingCode:$prefijo,primaryPhoneCountryCode:$pais}
           }){ id } }`,
        {
          nombre: datos.nombre,
          tel: datos.telefono.nacional,
          prefijo: datos.telefono.prefijo,
          pais: datos.telefono.pais,
        },
      ).catch(() => null);
      persona = conTelefono?.createPerson as { id?: string } | undefined;
    }
    if (!persona) {
      const sinTelefono = await graphql(
        `mutation($nombre:String!){ createPerson(data:{ name:{firstName:$nombre} }){ id } }`,
        { nombre: datos.nombre },
      );
      persona = sinTelefono.createPerson as { id?: string } | undefined;
    }
    if (!persona?.id) return { ok: false, motivo: "Twenty no devolvió la persona" };

    const telefonoTexto = datos.telefono?.e164 ?? datos.telefonoCrudo;
    const con = await graphql(
      `mutation($nombre:String!,$etapa:String!,$contacto:UUID,$origen:String){
         createOpportunity(data:{
           name:$nombre, stage:$etapa, pointOfContactId:$contacto, origen:$origen
         }){ id } }`,
      {
        nombre: `${datos.nombre} · ${datos.origen}${datos.telefono ? "" : ` (${telefonoTexto})`}`,
        etapa: ETAPA_NUEVA,
        contacto: persona.id,
        origen: ORIGEN_PORTAFOLIO,
      },
    );
    const oportunidad = con.createOpportunity as { id?: string } | undefined;

    return { ok: true, personaId: persona.id, oportunidadId: oportunidad?.id };
  } catch (e) {
    return { ok: false, motivo: `Twenty: ${e instanceof Error ? e.message : String(e)}` };
  }
}

/**
 * Contacto + conversación en la bandeja de WhatsApp de la casa, con una nota
 * privada del origen. La conversación nace «pendiente» para que aparezca sin
 * atender, que es justo lo que hay que hacer con ella.
 */
export async function avisoEnChatwoot(
  datos: DatosLead,
): Promise<Resultado & { conversacionId?: number }> {
  if (!CHATWOOT_TOKEN) return { ok: false, motivo: "sin token de Chatwoot configurado" };

  const api = async (ruta: string, cuerpo: unknown) => {
    const r = await fetch(`${CHATWOOT_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT}${ruta}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", api_access_token: CHATWOOT_TOKEN },
      body: JSON.stringify(cuerpo),
      cache: "no-store",
    });
    if (!r.ok) throw new Error(`Chatwoot ${r.status} en ${ruta}`);
    return (await r.json()) as Record<string, unknown>;
  };

  try {
    const telefono = datos.telefono?.e164 ?? datos.telefonoCrudo;
    const contacto = (await api("/contacts", {
      inbox_id: CHATWOOT_INBOX,
      name: datos.nombre,
      phone_number: telefono,
    })) as {
      payload?: { contact?: { id: number }; contact_inbox?: { source_id: string } };
    };
    const contactId = contacto.payload?.contact?.id;
    const sourceId = contacto.payload?.contact_inbox?.source_id ?? telefono.replace(/\D/g, "");
    if (!contactId) return { ok: false, motivo: "Chatwoot no devolvió el contacto" };

    const conversacion = (await api("/conversations", {
      source_id: sourceId,
      inbox_id: CHATWOOT_INBOX,
      contact_id: contactId,
      status: "pending",
    })) as { id?: number };
    if (!conversacion?.id) return { ok: false, motivo: "Chatwoot no devolvió la conversación" };

    await api(`/conversations/${conversacion.id}/messages`, {
      content: `Lead del portafolio (portafolio.prometheuslabs.com.co) · interés: ${datos.origen} · contacto: ${telefono}`,
      message_type: "outgoing",
      private: true,
    });

    return { ok: true, conversacionId: conversacion.id };
  } catch (e) {
    return { ok: false, motivo: `Chatwoot: ${e instanceof Error ? e.message : String(e)}` };
  }
}

export function telegramConfigurado(): boolean {
  return Boolean(TELEGRAM_TOKEN && TELEGRAM_CHAT);
}

/**
 * Aviso inmediato por Telegram. Es el destino que hace la diferencia: el lead
 * llega al teléfono de quien vende, no a un panel que hay que acordarse de abrir.
 */
export async function avisoEnTelegram(datos: DatosLead): Promise<Resultado> {
  if (!telegramConfigurado()) return { ok: false, motivo: "sin Telegram configurado" };

  const telefono = datos.telefono?.e164 ?? datos.telefonoCrudo;
  const texto = [
    "Nuevo lead · portafolio de Cristian",
    `Nombre: ${datos.nombre}`,
    `WhatsApp: ${telefono}`,
    `Interés: ${datos.origen}`,
  ].join("\n");

  try {
    const r = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT, text: texto, disable_web_page_preview: true }),
      cache: "no-store",
    });
    if (!r.ok) throw new Error(`Telegram ${r.status}`);
    return { ok: true };
  } catch (e) {
    return { ok: false, motivo: `Telegram: ${e instanceof Error ? e.message : String(e)}` };
  }
}

/**
 * Reparte el lead a los tres destinos en paralelo y devuelve si **alguno** lo
 * recibió. Nunca simula un éxito: si todos fallan, el formulario lo dice y ofrece
 * WhatsApp.
 */
export async function registrarLead(datos: DatosLead): Promise<{ ok: boolean; motivos: string[] }> {
  const [twenty, chatwoot, telegram] = await Promise.all([
    altaEnTwenty(datos),
    avisoEnChatwoot(datos),
    avisoEnTelegram(datos),
  ]);

  const intentos = [
    { nombre: "Twenty", r: twenty },
    { nombre: "Chatwoot", r: chatwoot },
    { nombre: "Telegram", r: telegram },
  ];
  const motivos = intentos.filter((i) => !i.r.ok).map((i) => `${i.nombre}: ${i.r.motivo}`);
  const ok = intentos.some((i) => i.r.ok);

  if (motivos.length) console.warn("[lead] destinos con problema:", motivos.join(" | "));
  console.info(
    `[lead] ${datos.nombre} · ${datos.origen} · twenty:${twenty.ok} chatwoot:${chatwoot.ok} telegram:${telegram.ok}`,
  );

  return { ok, motivos };
}
