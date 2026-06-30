export const site = {
  name: "Cristian Holguin",
  shortName: "CH",
  tagline: "Ingeniería · Growth · IA",
  description:
    "12 años conectando código, datos y growth marketing para construir productos que escalan y convierten. Especialista en IA, GEO y ecosistemas digitales de alto impacto en LATAM.",
  url: "https://prometheuslabs.com.co",
  locale: "es_CO",
  contact: {
    email: "ceo@prometheuslabs.com.co",
    whatsapp: "3150877649",
    whatsappRaw: "573150877649",
    whatsappDisplay: "+57 315 087 7649",
    calendarUrl: "https://cal.com/cristian-holguin/intro",
    location: "Colombia · LATAM",
  },
  social: {
    linkedin: "https://linkedin.com/in/cristian-holguin",
    github: "https://github.com/DavidHolguin",
    x: "https://x.com/cristian_holguin",
  },
};

/**
 * Construye un enlace `wa.me` con un mensaje pre-llenado.
 */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const nav = {
  links: [
    { href: "#pilares", label: "Expertise" },
    { href: "#casos", label: "Proyectos" },
    { href: "#stack", label: "Stack" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#contacto", label: "Contacto" },
  ],
  cta: { href: "#contacto", label: "Hablemos" },
};

export const hero = {
  eyebrow: "Consultor Senior · Tech · Growth · IA",
  headline: ["Conecto código,", "datos y growth para", "resultados que escalan."],
  description:
    "12 años transformando tecnología, automatización y marketing digital en embudos de alta conversión y soluciones de software a medida. No soy generalista — soy especialista en la convergencia.",
  stats: [
    { value: "12+", label: "Años de experiencia" },
    { value: "5+", label: "Grandes empresas" },
    { value: "3", label: "Proyectos sociales" },
  ],
  primaryCta: { label: "Ver Casos de Éxito", href: "#casos" },
  secondaryCta: { label: "Hablemos de tu proyecto", href: "#contacto" },
  photo: "/cristian-holguin.png",
};

export const trustStrip = {
  label: "Experiencia con",
  brands: [
    { slug: "rappi", name: "Rappi" },
    { slug: "renault", name: "Renault" },
    { slug: "icbf", name: "ICBF" },
    { slug: "meta", name: "Meta" },
    { slug: "google", name: "Google" },
    { slug: "whatsapp", name: "WhatsApp" },
    { slug: "hubspot", name: "HubSpot" },
    { slug: "openai", name: "OpenAI" },
    { slug: "anthropic", name: "Anthropic" },
    { slug: "googleanalytics", name: "Analytics" },
    { slug: "supabase", name: "Supabase" },
    { slug: "nextdotjs", name: "Next.js" },
  ],
};

export const pilares = {
  eyebrow: "Expertise",
  title: "Tres superpoderes. Una sola visión.",
  description:
    "No me especializo en una sola área porque los negocios no se rompen en una sola área. Mi valor está en la intersección: donde la tecnología encuentra al mercado y los datos guían cada decisión.",
  items: [
    {
      number: "01",
      icon: "engineering",
      title: "Ingeniería & IA",
      tagline: "Automatización absoluta.",
      description:
        "Construyo soluciones robustas que no fallan: desde desarrollo de software a medida hasta agentes de IA que trabajan 24/7 optimizando procesos críticos.",
      capabilities: [
        "Desarrollo de software a medida",
        "Agentes de IA y automatización",
        "Integración y desarrollo de CRM",
        "WhatsApp Business API",
        "GEO · Generative Engine Optimization",
      ],
    },
    {
      number: "02",
      icon: "growth",
      title: "Growth & Paid Media",
      tagline: "Tráfico cualificado, leads listos.",
      description:
        "Manejo ecosistemas de anuncios con precisión quirúrgica, potenciados por psicología del comportamiento y economía de la atención para maximizar cada peso invertido.",
      capabilities: [
        "Meta Business Suite (Facebook & Instagram)",
        "Google Ads (Search, Display, YouTube)",
        "Psicología del comportamiento y gamificación",
        "Economía de la atención",
        "Estrategia de contenido y funnel",
      ],
    },
    {
      number: "03",
      icon: "data",
      title: "Data & Analítica",
      tagline: "Decisiones sin adivinanzas.",
      description:
        "Traduzco datos en acción. Diseño arquitecturas de medición que dan visibilidad total sobre el ROI real, elimino el sesgo de la intuición y optimizo con evidencia.",
      capabilities: [
        "Google Analytics 4 (GA4)",
        "Google Tag Manager (GTM)",
        "Google Search Console",
        "Modelos de atribución multi-touch",
        "Dashboards y reporting ejecutivo",
      ],
    },
  ],
};

export const casos = {
  eyebrow: "Casos de Éxito",
  title: "Cuando las tres disciplinas convergen.",
  description:
    "Proyectos reales donde la integración de ingeniería, datos y growth generó resultados que ninguna disciplina podría lograr sola.",
  items: [
    {
      slug: "rappi-mexico",
      sector: "Tech · Delivery",
      client: "Rappi",
      location: "México",
      logo: "rappi",
      reto: "Alta tasa de abandono post-onboarding y bajo retorno de usuarios inactivos. El equipo necesitaba automatizar la reactivación a escala sin incrementar el headcount.",
      solucion:
        "Desarrollé un sistema de segmentación comportamental basado en eventos GA4. Implementé un agente de IA para clasificar usuarios por probabilidad de reactivación e integré campañas de re-engagement en Meta y Google Ads con mensajería dinámica personalizada.",
      resultado: "+42% reactivación",
      metricas: [
        { value: "+42%", label: "Reactivación de usuarios" },
        { value: "-31%", label: "Reducción en CAC" },
        { value: "3×", label: "ROI en campañas" },
      ],
      tags: ["IA", "Analítica", "Paid Media", "CRM"],
    },
    {
      slug: "renault-colombia",
      sector: "Automotriz · Enterprise",
      client: "Renault",
      location: "Colombia",
      logo: "renault",
      reto: "Proceso de captación de leads completamente manual, sin trazabilidad entre inversión publicitaria y ventas reales. El equipo comercial tardaba +48h en responder prospectos.",
      solucion:
        "Arquitectura completa: GTM + GA4 server-side + integración Salesforce + agente de IA para calificación y priorización de leads. Implementé dashboards de atribución en tiempo real y campañas multi-canal con audiencias lookalike.",
      resultado: "+140% leads calificados",
      metricas: [
        { value: "+140%", label: "Leads calificados" },
        { value: "-45%", label: "Tiempo de respuesta comercial" },
        { value: "100%", label: "Trazabilidad inversión→venta" },
      ],
      tags: ["CRM", "Analítica", "Paid Media", "Automatización"],
    },
    {
      slug: "icbf-gobierno",
      sector: "Gobierno · Impacto Social",
      client: "ICBF",
      location: "Colombia",
      logo: "icbf",
      reto: "Necesidad de llevar un programa de bienestar familiar a comunidades vulnerables con tecnología accesible, medible y escalable. Sin precedentes tecnológicos en el sector.",
      solucion:
        "Desarrollé plataforma digital con elementos de gamificación para aumentar engagement. Implementé un chatbot de IA en WhatsApp para atención 24/7 y construí un sistema de analítica de impacto social para medir resultados en campo.",
      resultado: "+50K familias alcanzadas",
      metricas: [
        { value: "50K+", label: "Familias beneficiadas" },
        { value: "94%", label: "Satisfacción de usuarios" },
        { value: "3×", label: "Departamentos replicaron el modelo" },
      ],
      tags: ["Desarrollo", "Gamificación", "IA", "WhatsApp API"],
    },
    {
      slug: "pari-fintech",
      sector: "Fintech · Startup",
      client: "Pari",
      location: "México",
      logo: "pari",
      reto: "Producto fintech nuevo en mercado altamente competitivo. Necesidad de validar product-market fit rápido, adquirir usuarios de calidad y automatizar el onboarding con presupuesto limitado.",
      solucion:
        "Estrategia full-funnel: landing optimizada con A/B testing continuo + paid media en Meta segmentado por comportamiento financiero + agente de IA para onboarding interactivo. Toda la atribución conectada desde el primer clic hasta la activación.",
      resultado: "0 → 10K usuarios en 90 días",
      metricas: [
        { value: "10K", label: "Usuarios en 90 días" },
        { value: "$8 USD", label: "CAC promedio" },
        { value: "72", label: "NPS de producto" },
      ],
      tags: ["Growth", "Paid Media", "IA", "Analítica"],
    },
  ],
};

export const stack = {
  eyebrow: "Arsenal Técnico",
  title: "Las herramientas exactas que domino.",
  description:
    "No listo herramientas por listar. Cada ecosistema aquí lo uso con propósito estratégico y lo conecto con los demás para multiplicar resultados.",
  categories: [
    {
      label: "IA & Desarrollo",
      caption: "Automatización extrema y productos robustos.",
      items: [
        { slug: "openai", name: "OpenAI" },
        { slug: "anthropic", name: "Anthropic" },
        { slug: "nextdotjs", name: "Next.js" },
        { slug: "typescript", name: "TypeScript" },
        { slug: "supabase", name: "Supabase" },
        { slug: "n8n", name: "n8n" },
      ],
    },
    {
      label: "Growth & Ads",
      caption: "Escalabilidad y adquisición de alto valor.",
      items: [
        { slug: "meta", name: "Meta Ads" },
        { slug: "google", name: "Google Ads" },
        { slug: "tiktok", name: "TikTok Ads" },
        { slug: "linkedin", name: "LinkedIn Ads" },
        { slug: "whatsapp", name: "WhatsApp API" },
        { slug: "zapier", name: "Zapier" },
      ],
    },
    {
      label: "Analítica & Data",
      caption: "Atribución real y decisiones sin adivinanzas.",
      items: [
        { slug: "googleanalytics", name: "GA4" },
        { slug: "googletag", name: "Tag Manager" },
        { slug: "googlesearchconsole", name: "Search Console" },
        { slug: "hotjar", name: "Hotjar" },
        { slug: "looker", name: "Looker Studio" },
        { slug: "airtable", name: "Airtable" },
      ],
    },
    {
      label: "CRM & Automatización",
      caption: "Ventas automatizadas y retención de clientes.",
      items: [
        { slug: "hubspot", name: "HubSpot" },
        { slug: "salesforce", name: "Salesforce" },
        { slug: "github", name: "GitHub" },
        { slug: "docker", name: "Docker" },
        { slug: "vercel", name: "Vercel" },
        { slug: "postgresql", name: "PostgreSQL" },
      ],
    },
  ],
};

export const sobreMi = {
  eyebrow: "Sobre mí",
  title: "12 años en la trinchera digital.",
  description:
    "No soy un copywriter que aprendió a usar ChatGPT ayer, ni un dev que no entiende de negocios. Llevo 12 años evolucionando al ritmo de la tecnología para entender el panorama completo de un producto digital.",
  body: "Mi perfil es el resultado de una evolución deliberada: empecé en el código, descubrí que sin marketing el mejor software no llega a nadie, aprendí que sin datos el mejor marketing es intuición cara, y comprendí que la psicología humana subyace a todo. Hoy, la convergencia de esas cuatro disciplinas es mi propuesta de valor única.",
  filosofia:
    "Creo que la tecnología sin propósito es ruido. Cada proyecto que tomo tiene que responder a una pregunta: ¿esto genera impacto medible? Si la respuesta no es un sí claro, rediseñamos la pregunta.",
  timeline: [
    {
      year: "2014",
      title: "Desarrollo de Software",
      description: "Inicié construyendo soluciones a medida. Aprendí que el código bien escrito cambia negocios.",
    },
    {
      year: "2016",
      title: "Growth & Paid Media",
      description: "Integré el marketing digital. Primeras campañas en Meta y Google Ads a escala.",
    },
    {
      year: "2018",
      title: "CRM & Automatización",
      description: "Diseñé integraciones complejas para empresas como Renault. El CRM conectado al funnel completo.",
    },
    {
      year: "2020",
      title: "Impacto Social",
      description: "Fundé proyectos de impacto. Tecnología con propósito para comunidades vulnerables (ICBF).",
    },
    {
      year: "2022",
      title: "IA & Agentes Inteligentes",
      description: "Deep dive en IA generativa. Construcción de agentes autónomos para automatización empresarial.",
    },
    {
      year: "2024",
      title: "GEO Pioneer",
      description:
        "Adopté GEO (Generative Engine Optimization) antes de que se popularizara. LATAM está apenas despertando a esto.",
    },
  ],
  badges: ["IA & Agentes", "GEO", "Meta Ads", "Google Ads", "GA4 / GTM", "CRM", "WhatsApp API", "Gamificación", "Psicología del comportamiento", "Desarrollo a medida"],
};

export const resultados = {
  eyebrow: "En números",
  title: "12 años de trayectoria.",
  description:
    "Métricas que resumen la escala y diversidad de proyectos donde la convergencia de disciplinas generó resultados medibles.",
  metrics: [
    { value: "12+", label: "Años de experiencia en tecnología e innovación" },
    { value: "5+", label: "Grandes empresas y startups unicornio" },
    { value: "3", label: "Proyectos de impacto social fundados" },
    { value: "LATAM", label: "Pioneer en GEO para empresas en la región" },
  ],
};

export const geoIa = {
  eyebrow: "Ventaja Competitiva · 2026",
  title: "GEO: El nuevo campo de batalla de la visibilidad.",
  description:
    "El 65% de las búsquedas hoy terminan en una respuesta generada por IA sin ningún clic. SEO ya no es suficiente. GEO — Generative Engine Optimization — es la nueva frontera.",
  body: "ChatGPT, Gemini, Claude, Perplexity. Cuando alguien le pregunta a una IA sobre tu industria, ¿apareces tú o aparece tu competencia? Esa es la pregunta que GEO responde. Y yo llevo implementándolo antes de que tuviera nombre.",
  capabilities: [
    {
      icon: "target",
      title: "Optimización para LLMs",
      description:
        "Reestructuro el contenido y la arquitectura de información para ser citado como autoridad por los modelos de lenguaje más usados.",
    },
    {
      icon: "shield",
      title: "Estrategia de Autoridad Generativa",
      description:
        "Construyo las señales que los modelos reconocen como autoritativas: profundidad, citas, estructura semántica y consistencia de marca.",
    },
    {
      icon: "bot",
      title: "Implementación con Agentes",
      description:
        "Automatizo la estrategia de GEO con agentes de IA propios que monitorean, adaptan y optimizan el posicionamiento en tiempo real.",
    },
  ],
  stat: {
    value: "65%",
    label: "de búsquedas terminan en IA sin clic",
    source: "BrightEdge Research 2025",
  },
};

export const ctaFinal = {
  eyebrow: "Hablemos",
  title: "¿Tienes un proyecto que necesita escalar?",
  description:
    "Si tienes un embudo que no convierte, un proceso que se puede automatizar, o un producto que necesita crecer — analicemos tu caso. Sin fórmulas, sin paquetes, solo estrategia.",
  waMessage:
    "Hola Cristian, vengo de tu portafolio y quiero conversar sobre mi proyecto.",
};

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que me preguntan primero.",
  items: [
    {
      q: "¿Trabajas como consultor, líder de equipo o dev hands-on?",
      a: "Las tres. Dependiendo del proyecto puedo ser el estratega que define la dirección, el líder técnico que coordina equipos, o el dev que construye directamente. Mi valor está en la versatilidad y en entender cada capa del negocio.",
    },
    {
      q: "¿Con qué tipo de proyectos trabajas mejor?",
      a: "Con proyectos donde hay un problema de negocio real que resolver — no solo una pantalla que hacer bonita. Idealmente, proyectos donde la tecnología, el marketing y los datos se cruzan. Startups que quieren escalar, empresas que quieren automatizar, o marcas que quieren posicionarse en IA.",
    },
    {
      q: "¿Qué es GEO y por qué lo necesito?",
      a: "GEO (Generative Engine Optimization) es la evolución del SEO para la era de las IAs. Cuando tu cliente le pregunta a ChatGPT, Gemini o Perplexity sobre tu industria, GEO determina si apareces tú o tu competencia. Para 2026, esto ya no es opcional.",
    },
    {
      q: "¿Trabajas con empresas fuera de Colombia?",
      a: "Sí, completamente. He trabajado con startups en México (Rappi, Pari) y con empresas en toda LATAM. Trabajo 100% remoto y me adapto a cualquier zona horaria en la región.",
    },
    {
      q: "¿Cómo es tu proceso de trabajo?",
      a: "Diagnóstico primero, siempre. Antes de proponer cualquier solución, entiendo el problema real. Luego diseñamos la estrategia, yo construyo (o coordino la construcción) y entregamos con métricas claras. Sin sorpresas.",
    },
    {
      q: "¿Puedes manejar proyectos completos desde cero?",
      a: "Sí. Puedo tomar un proyecto desde la estrategia inicial hasta el producto en producción con métricas funcionando. O puedo entrar en cualquier fase del proceso donde el equipo actual necesite refuerzo.",
    },
  ],
};

export const footer = {
  tagline: "Ingeniería · Growth · IA · GEO — Hecho en Colombia para LATAM.",
  copyright: `© ${new Date().getFullYear()} Cristian Holguin. Colombia.`,
  links: [
    { label: "Expertise", href: "#pilares" },
    { label: "Proyectos", href: "#casos" },
    { label: "Stack", href: "#stack" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
};
