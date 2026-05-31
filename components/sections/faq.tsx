import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/content";

export function FAQ() {
  return (
    <section
      className="relative border-t border-border py-24 sm:py-32 lg:py-40"
      aria-labelledby="faq-title"
    >
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            eyebrow={faq.eyebrow}
            title={<span id="faq-title">{faq.title}</span>}
            align="center"
          />
        </Reveal>

        <Reveal className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((item, idx) => (
              <AccordionItem key={item.q} value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
