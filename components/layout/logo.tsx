import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md";
  withWordmark?: boolean;
  href?: string;
  className?: string;
}

export function Logo({ size = "sm", withWordmark = true, href = "/", className }: LogoProps) {
  const dim = size === "sm" ? 24 : 32;

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 transition-opacity",
        href && "hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/logo-prometheus.png"
        alt="Prometheus Labs"
        width={dim}
        height={dim}
        priority
        style={{ height: dim, width: "auto" }}
      />
      {withWordmark && (
        <span
          className={cn(
            "font-semibold tracking-tight text-foreground",
            size === "sm" ? "text-sm" : "text-base",
          )}
        >
          Prometheus
          <span className="text-muted-foreground"> Labs</span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Prometheus Labs — inicio">
        {content}
      </Link>
    );
  }
  return content;
}
