"use client";

import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label: string;
  className?: string;
}

export function Metric({ value, label, className }: MetricProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={cn(
        "relative flex flex-col gap-4 p-8 sm:p-10",
        "border-t border-border md:border-t-0 md:border-l first:border-l-0 first:border-t-0",
        "group",
        className,
      )}
    >
      <span
        className={cn(
          "text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-none",
          "bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-ember-bright/80",
        )}
      >
        {value}
      </span>
      <span className="text-sm text-muted-foreground text-pretty leading-relaxed max-w-[18rem]">
        {label}
      </span>
    </motion.div>
  );
}
