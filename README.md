# Prometheus Labs · Sitio web

Sitio corporativo de **Prometheus Labs** — agencia de IA empresarial. Construimos agentes a medida e integraciones empresariales para equipos que ya saben que la próxima ventaja competitiva no espera a nadie.

## Stack

- **Next.js 16** (App Router, React Server Components, Turbopack)
- **React 19**
- **Tailwind CSS 4** (config CSS-first vía `@theme` en `globals.css`)
- **shadcn/ui** + **Radix UI** primitives
- **Motion** (Framer Motion v12) — animaciones
- **tw-animate-css** — animaciones para componentes shadcn
- **Biome** — linting y formato
- **Vercel Analytics**

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Comandos disponibles:

```bash
pnpm dev       # Servidor de desarrollo (Turbopack)
pnpm build     # Build de producción
pnpm start     # Servidor de producción
pnpm lint      # Biome check
pnpm format    # Biome format --write
```

## Estructura

```
.
├── app/
│   ├── layout.tsx              # Root layout (html lang="es", metadata, fonts)
│   ├── page.tsx                # Home: ensambla todas las secciones
│   ├── globals.css             # Tokens de diseño + Tailwind 4
│   ├── opengraph-image.tsx     # OG image dinámica
│   ├── robots.ts               # robots.txt
│   └── sitemap.ts              # sitemap.xml
├── components/
│   ├── layout/                 # Nav, Footer, Container, Logo
│   ├── motion/                 # Reveal, Stagger (wrappers de Motion)
│   ├── primitives/             # SectionHeading, ServiceCard, Metric, etc.
│   ├── sections/               # Hero, Servicios, Proceso, ... (9 secciones)
│   └── ui/                     # Button, Sheet, Accordion, Separator
├── lib/
│   ├── content.ts              # Copy completo del sitio (i18n-ready)
│   ├── motion-presets.ts       # Variants compartidos
│   └── utils.ts                # cn() helper
└── public/
    └── logo-prometheus.png
```

## Tokens de diseño

Definidos en [`app/globals.css`](app/globals.css) vía `@theme`:

| Token | Valor | Uso |
|---|---|---|
| `--color-background` | `#000` | Fondo principal |
| `--color-foreground` | `#fafafa` | Texto primario |
| `--color-card` | `#0a0a0a` | Cards y elevaciones |
| `--color-ember` | `#1a73e8` | **Acento marca (Prometheus blue)** |
| `--color-muted-foreground` | `#a1a1aa` | Texto secundario |
| `--color-subtle` | `#52525b` | Labels, captions |

## Despliegue

```bash
pnpm dlx vercel link
pnpm dlx vercel --prod
```

## Licencia

© Prometheus Labs.
