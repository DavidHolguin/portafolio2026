import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md";
  href?: string;
  className?: string;
}

export function Logo({ size = "sm", href = "/", className }: LogoProps) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 transition-opacity",
        href && "hover:opacity-80",
        className,
      )}
    >
      {/* Monogram CH */}
      <span
        className={cn(
          "relative flex items-center justify-center rounded-lg bg-ember/10 border border-ember/20 font-mono font-bold tracking-tight text-ember shrink-0",
          "shadow-[0_0_20px_-4px_rgba(26,115,232,0.5)]",
          size === "sm" ? "h-7 w-7 text-xs" : "h-9 w-9 text-sm",
        )}
      >
        CH
        <span
          aria-hidden
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-ember/20 to-transparent"
        />
      </span>

      <span
        className={cn(
          "font-semibold tracking-tight text-foreground",
          size === "sm" ? "text-sm" : "text-base",
        )}
      >
        Cristian
        <span className="text-muted-foreground"> Holguin</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Cristian Holguin — portafolio">
        {content}
      </Link>
    );
  }
  return content;
}
