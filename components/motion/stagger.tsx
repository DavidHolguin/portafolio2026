"use client";

import { motion, type Variants } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

interface StaggerProps {
  as?: "div" | "ul" | "ol" | "section";
  className?: string;
  children: React.ReactNode;
  container?: Variants;
}

export function Stagger({
  as = "div",
  className,
  children,
  container = staggerContainer,
}: StaggerProps) {
  const MotionComp = motion[as] as React.ElementType;
  return (
    <MotionComp
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={container}
      className={cn(className)}
    >
      {children}
    </MotionComp>
  );
}

interface StaggerItemProps {
  as?: "div" | "li" | "section" | "article" | "p" | "span" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
  variants?: Variants;
}

export function StaggerItem({
  as = "div",
  className,
  children,
  variants = fadeInUp,
}: StaggerItemProps) {
  const MotionComp = motion[as] as React.ElementType;
  return (
    <MotionComp variants={variants} className={cn(className)}>
      {children}
    </MotionComp>
  );
}
