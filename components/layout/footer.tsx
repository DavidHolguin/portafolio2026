import { Separator } from "@/components/ui/separator";
import { footer, site, whatsappUrl } from "@/lib/content";
import { Container } from "./container";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-16 pb-10">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
          <div className="max-w-sm">
            <Logo size="md" href={undefined} />
            <p className="mt-4 text-sm text-muted-foreground text-pretty">{footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-medium text-subtle uppercase tracking-wider mb-4">
                Portafolio
              </h3>
              <ul className="flex flex-col gap-2.5">
                {footer.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium text-subtle uppercase tracking-wider mb-4">
                Contacto
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href={whatsappUrl("Hola Cristian, vengo del footer de tu portafolio. Quiero conversar.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    WhatsApp {site.contact.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium text-subtle uppercase tracking-wider mb-4">
                Redes
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">{footer.copyright}</p>
          <p className="text-xs text-subtle font-mono tracking-wider">
            v2.0 · {site.contact.location.toUpperCase()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
