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
      {/* Marca CHdev, junto al nombre */}
      {/* biome-ignore lint/performance/noImgElement: PNG local de la marca */}
      <img
        src="/logo-chdev.png"
        alt="CHdev"
        className={cn("block w-auto shrink-0 select-none", size === "sm" ? "h-6" : "h-8")}
      />

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
