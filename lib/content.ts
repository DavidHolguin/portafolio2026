export const site = {
  name: "Prometheus Labs",
  shortName: "Prometheus",
  tagline: "Agencia de IA empresarial",
  description:
    "Construimos agentes IA a medida e integraciones empresariales para equipos que están listos para tomar el fuego.",
  url: "https://prometheuslabs.com.co",
  locale: "es_CO",
  contact: {
    email: "ceo@prometheuslabs.com.co",
    calendarUrl: "https://cal.com/prometheuslabs/intro",
    location: "Colombia",
  },
  social: {
    linkedin: "https://linkedin.com/company/prometheuslabs",
    github: "https://github.com/prometheuslabs",
    x: "https://x.com/prometheuslabs",
  },
};

export const nav = {
  links: [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#manifiesto", label: "Manifiesto" },
    { href: "#contacto", label: "Contacto" },
  ],
  cta: { href: "#contacto", label: "Conversemos" },
};

export const hero = {
  eyebrow: "Agencia de IA empresarial",
  headline: ["Traemos el fuego", "de la IA a tu operación."],
  description:
    "Construimos agentes a medida e integraciones empresariales para equipos que ya saben que la próxima ventaja competitiva no espera a nadie.",
  primaryCta: { label: "Agendar una sesión", href: "#contacto" },
  secondaryCta: { label: "Ver servicios", href: "#servicios" },
};

export const trustStrip = {
  label: "Construimos con",
  brands: [
    { slug: "openai", name: "OpenAI" },
    { slug: "anthropic", name: "Anthropic" },
    { slug: "google", name: "Google" },
    { slug: "meta", name: "Meta" },
    { slug: "vercel", name: "Vercel" },
    { slug: "nextdotjs", name: "Next.js" },
    { slug: "supabase", name: "Supabase" },
    { slug: "tailwindcss", name: "Tailwind" },
    { slug: "react", name: "React" },
    { slug: "typescript", name: "TypeScript" },
    { slug: "postgresql", name: "Postgres" },
    { slug: "redis", name: "Redis" },
    { slug: "cloudflare", name: "Cloudflare" },
    { slug: "huggingface", name: "Hugging Face" },
  ],
};

export const servicios = {
  eyebrow: "Servicios",
  title: "Dos formas de empezar.",
  description:
    "Cada engagement se ajusta a tu madurez técnica y al riesgo que estás dispuesto a tomar. Sin paquetes preempaquetados.",
  items: [
    {
      slug: "agentes-a-medida",
      icon: "agent",
      title: "Agentes a medida",
      description:
        "Diseñamos, entrenamos y desplegamos agentes específicos para los flujos donde tu equipo pierde más tiempo.",
      capabilities: [
        "Diagnóstico de procesos automatizables",
        "Orquestación multi-modelo con AI Gateway",
        "Integración con tus herramientas internas",
        "Observabilidad y trazabilidad por defecto",
      ],
      cta: "Ver cómo lo hacemos",
    },
    {
      slug: "integracion-empresarial",
      icon: "stack",
      title: "Integración IA empresarial",
      description:
        "Conectamos modelos de lenguaje y agentes con tus sistemas existentes — ERP, CRM, data warehouses, herramientas internas.",
      capabilities: [
        "RAG sobre tu base de conocimiento",
        "Pipelines de ingesta y normalización",
        "Seguridad, RBAC y data residency",
        "Migración progresiva, sin big bang",
      ],
      cta: "Ver cómo lo hacemos",
    },
  ],
};

export const proceso = {
  eyebrow: "Cómo trabajamos",
  title: "Tres pasos. Sin humo.",
  description:
    "Engagements cortos con entregables verificables. Si no hay valor en cuatro semanas, no continuamos.",
  steps: [
    {
      number: "01",
      title: "Diagnóstico",
      description:
        "Una semana. Mapeamos tus procesos, identificamos los puntos de mayor ROI y validamos viabilidad técnica.",
    },
    {
      number: "02",
      title: "Diseño",
      description:
        "Dos semanas. Arquitectura, prototipos navegables, plan de despliegue. Apruebas antes de escribir código de producción.",
    },
    {
      number: "03",
      title: "Despliegue",
      description:
        "Cuatro a doce semanas. Build, integración, despliegue gradual y transferencia de conocimiento a tu equipo.",
    },
  ],
};

export const resultados = {
  eyebrow: "Resultados",
  title: "Lo que medimos.",
  description:
    "Métricas reales de engagements anteriores. Las cifras dependen del contexto, pero el orden de magnitud no.",
  metrics: [
    { value: "10×", label: "Throughput en procesos automatizados" },
    { value: "70%", label: "Reducción de costo operacional promedio" },
    { value: "4 sem", label: "Tiempo a primer entregable productivo" },
    { value: "0", label: "Migraciones forzadas — trabajamos sobre tu stack" },
  ],
};

export const stack = {
  eyebrow: "Stack",
  title: "Trabajamos con la infraestructura que ya tienes.",
  description:
    "O te ayudamos a elegir la siguiente. Sin lock-in, sin vendor magic. Modelos, plataformas y herramientas se eligen por mérito técnico.",
  categories: [
    {
      label: "Modelos",
      caption: "Los LLMs más capaces, ruteados sin lock-in.",
      items: [
        { slug: "openai", name: "OpenAI" },
        { slug: "anthropic", name: "Anthropic" },
        { slug: "google", name: "Google" },
        { slug: "meta", name: "Meta" },
        { slug: "mistralai", name: "Mistral" },
        { slug: "huggingface", name: "Hugging Face" },
      ],
    },
    {
      label: "Frameworks",
      caption: "Stack moderno para web, APIs y agentes.",
      items: [
        { slug: "nextdotjs", name: "Next.js" },
        { slug: "react", name: "React" },
        { slug: "typescript", name: "TypeScript" },
        { slug: "tailwindcss", name: "Tailwind" },
        { slug: "hono", name: "Hono" },
        { slug: "drizzle", name: "Drizzle" },
      ],
    },
    {
      label: "Plataforma",
      caption: "Donde corre y se entrega tu aplicación.",
      items: [
        { slug: "vercel", name: "Vercel" },
        { slug: "supabase", name: "Supabase" },
        { slug: "aws", name: "AWS" },
        { slug: "cloudflare", name: "Cloudflare" },
        { slug: "github", name: "GitHub" },
        { slug: "docker", name: "Docker" },
      ],
    },
    {
      label: "Datos",
      caption: "Persistencia, caché y memoria de agentes.",
      items: [
        { slug: "postgresql", name: "Postgres" },
        { slug: "redis", name: "Redis" },
        { slug: "qdrant", name: "Qdrant" },
        { slug: "mongodb", name: "MongoDB" },
        { slug: "neon", name: "Neon" },
        { slug: "upstash", name: "Upstash" },
      ],
    },
  ],
};

export const manifiesto = {
  eyebrow: "Manifiesto",
  title: "Prometeo entregó el fuego.",
  body: "No vendemos magia, vendemos infraestructura. Cada agente que construimos lo entendemos línea por línea — y tu equipo también. Cuando entregamos, entregamos código que sabes operar, no una caja negra. Esa es la diferencia entre traer el fuego y arrendar una linterna.",
  signature: "— Equipo Prometheus Labs",
};

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que nos preguntan en la primera llamada.",
  items: [
    {
      q: "¿Cuánto cuesta un engagement?",
      a: "El diagnóstico inicial es de costo fijo y bajo (referencia: 1 a 2 semanas). Los siguientes módulos se cotizan por alcance acordado. Trabajamos con tarifas por proyecto, no por hora — alineamos incentivos al resultado.",
    },
    {
      q: "¿Quién es dueño del código?",
      a: "Tú. Todo el código se entrega bajo tu organización en GitHub o GitLab, sin candados ni dependencias propietarias hacia nosotros. Si decides terminar la relación, tu equipo continúa sin fricción.",
    },
    {
      q: "¿Qué pasa con la seguridad de los datos?",
      a: "Por defecto, los datos sensibles nunca salen de tu infraestructura. Diseñamos con RBAC, encriptación en reposo y en tránsito, y trazabilidad completa de qué modelo accedió a qué información. Para clientes regulados, podemos operar dentro de tu VPC.",
    },
    {
      q: "¿Qué modelos usan?",
      a: "Los que mejor resuelvan tu problema. Trabajamos a través de Vercel AI Gateway, lo que nos permite enrutar dinámicamente entre Claude, GPT, Gemini, modelos open-source y otros. Si sale uno mejor, el cambio es de configuración, no de código.",
    },
    {
      q: "¿Cuánto tarda un proyecto típico?",
      a: "El primer entregable productivo es a las 4 semanas. Un agente complejo en producción, entre 8 y 12 semanas. Engagements más grandes (plataforma multi-agente) se dividen en fases trimestrales con valor entregable en cada una.",
    },
    {
      q: "¿Trabajan con empresas pequeñas o solo enterprise?",
      a: "Ambas. La diferencia está en el alcance del primer engagement, no en la calidad. Para equipos pequeños solemos arrancar con un agente vertical bien acotado; para enterprise diseñamos roadmaps por trimestre.",
    },
    {
      q: "¿Cómo miden el éxito?",
      a: "Definimos métricas en el diagnóstico — siempre cuantitativas (tiempo ahorrado, throughput, costo por transacción). Si las métricas no se mueven, no se cobra el siguiente módulo.",
    },
  ],
};

export const ctaFinal = {
  eyebrow: "Conversemos",
  title: "Listos para entregar el fuego.",
  description:
    "Una llamada de 30 minutos. Sin agenda comercial. Si hay encaje, seguimos; si no, te dejamos las recomendaciones que aplicarías sin nosotros.",
  primary: { label: "Agendar 30 minutos", href: "https://cal.com/prometheuslabs/intro" },
  secondary: {
    label: "Escribir a ceo@prometheuslabs.com.co",
    href: "mailto:ceo@prometheuslabs.com.co",
  },
};

export const footer = {
  tagline: "Agentes IA e integraciones empresariales hechas en LATAM.",
  copyright: `© ${new Date().getFullYear()} Prometheus Labs. Hecho con fuego en Colombia.`,
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Manifiesto", href: "#manifiesto" },
    { label: "Contacto", href: "#contacto" },
  ],
};
