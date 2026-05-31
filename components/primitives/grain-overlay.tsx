import { cn } from "@/lib/utils";

export function GrainOverlay({ className }: { className?: string }) {
  return <div aria-hidden className={cn("grain-overlay", className)} />;
}
