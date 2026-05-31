"use client";

import { motion, type Variants } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

interface RevealProps {
  as?: "div" | "section" | "article" | "header" | "h1" | "h2" | "h3" | "p" | "li" | "span";
  variants?: Variants;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function Reveal({
  as = "div",
  variants = fadeInUp,
  className,
  children,
  delay = 0,
}: RevealProps) {
  const MotionComp = motion[as] as React.ElementType;
  return (
    <MotionComp
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
    >
      {children}
    </MotionComp>
  );
}
