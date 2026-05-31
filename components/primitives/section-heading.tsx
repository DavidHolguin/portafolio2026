import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_12px_2px_rgba(26,115,232,0.6)]"
          />
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-ember">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-pretty text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
