import { Globe, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/primitives/social-icons";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { Separator } from "@/components/ui/separator";
import { footer, site, whatsappUrl } from "@/lib/content";
import { Container } from "./container";
import { Logo } from "./logo";

/** Contacto: cada canal con su disco, igual que el de WhatsApp. */
const canales = [
  {
    label: site.contact.whatsappDisplay,
    href: whatsappUrl("Hola Cristian, vengo del footer de tu portafolio. Quiero conversar."),
    icono: <WhatsAppIcon className="h-4 w-4" brand />,
    externo: true,
  },
  {
    label: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icono: <Mail className="h-4 w-4" strokeWidth={1.5} />,
    externo: false,
  },
  {
    label: site.url.replace("https://", ""),
    href: site.url,
    icono: <Globe className="h-4 w-4" strokeWidth={1.5} />,
    externo: true,
  },
];

const redes = [
  {
    nombre: "LinkedIn",
    href: site.social.linkedin,
    icono: <LinkedInIcon className="h-3.5 w-3.5" />,
  },
  {
    nombre: "GitHub",
    href: site.social.github,
    icono: <GitHubIcon className="h-3.5 w-3.5" />,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-16 pb-10">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo size="md" href={undefined} />
            <p className="mt-4 text-pretty text-sm text-muted-foreground">{footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-subtle">
                Portafolio
              </h3>
              <ul className="flex flex-col gap-2.5">
                {footer.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-subtle">
                Contacto
              </h3>
              <ul className="flex flex-col gap-3">
                {canales.map((canal) => (
                  <li key={canal.label}>
                    <a
                      href={canal.href}
                      {...(canal.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="text-foreground/70">{canal.icono}</span>
                      {canal.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-subtle">
                Redes
              </h3>
              <ul className="flex flex-col gap-2.5">
                {redes.map((red) => (
                  <li key={red.nombre}>
                    <a
                      href={red.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="text-foreground/70">{red.icono}</span>
                      {red.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex items-center gap-2">
            {redes.map((red) => (
              <li key={red.nombre}>
                <a
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.nombre}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  {red.icono}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs tracking-wider text-subtle">
            v2.0 · {site.contact.location.toUpperCase()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
