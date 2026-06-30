"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { nav, whatsappUrl } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Logo } from "./logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "border-b border-transparent",
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Logo />

        <ul className="hidden md:flex items-center gap-1">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a
              href={whatsappUrl("Hola Cristian, vengo de tu portafolio y quiero conversar.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {nav.cta.label}
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full text-foreground hover:bg-accent transition-colors"
              aria-label="Abrir menú"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="p-8 pt-24 border-x-0 rounded-b-3xl">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <ul className="flex flex-col">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 text-2xl font-medium text-foreground border-b border-border hover:text-ember-bright transition-colors"
                  >
                    {link.label}
                    <span className="text-muted-foreground text-base">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button size="lg" className="w-full" asChild>
                <a
                  href={whatsappUrl("Hola Cristian, vengo de tu portafolio y quiero conversar.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {nav.cta.label}
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
