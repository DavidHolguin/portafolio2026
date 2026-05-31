import { cn } from "@/lib/utils";

interface EmberGlowProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  position?: "center" | "top" | "bottom";
}

export function EmberGlow({
  className,
  intensity = "medium",
  position = "center",
}: EmberGlowProps) {
  const size = {
    subtle: "h-[400px] w-[400px]",
    medium: "h-[600px] w-[600px]",
    strong: "h-[900px] w-[900px]",
  }[intensity];

  const opacity = {
    subtle: 0.18,
    medium: 0.32,
    strong: 0.48,
  }[intensity];

  const positionClass = {
    center: "top-1/2 -translate-y-1/2",
    top: "top-0 -translate-y-1/3",
    bottom: "bottom-0 translate-y-1/3",
  }[position];

  return (
    <div
      aria-hidden
      className={cn(
        "absolute left-1/2 -translate-x-1/2 pointer-events-none select-none",
        size,
        positionClass,
        className,
      )}
      style={{
        background: `radial-gradient(closest-side, rgba(26,115,232,${opacity}) 0%, rgba(26,115,232,0) 70%)`,
      }}
    />
  );
}
