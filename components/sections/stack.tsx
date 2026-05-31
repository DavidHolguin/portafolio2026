import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/primitives/section-heading";
import { stack } from "@/lib/content";

export function Stack() {
  return (
    <section
      className="relative border-t border-border bg-card/30 py-24 sm:py-32 lg:py-40"
      aria-labelledby="stack-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={stack.eyebrow}
            title={<span id="stack-title">{stack.title}</span>}
            description={stack.description}
          />
        </Reveal>

        <Stagger
          as="ul"
          className="mt-16 grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4"
        >
          {stack.categories.map((category) => (
            <StaggerItem
              as="li"
              key={category.label}
              className="flex flex-col gap-5 bg-background p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-ember">
                  {category.label}
                </span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-ember" />
              </div>
              <ul className="flex flex-col gap-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-base font-medium text-foreground/90 hover:text-foreground transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
