"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
  cta: string;
  href?: string;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  capabilities,
  cta,
  href = "#contacto",
  className,
}: ServiceCardProps) {
  return (
    <motion.a
      href={href}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative flex flex-col gap-8 p-8 sm:p-10",
        "bg-card border border-border rounded-2xl",
        "transition-all duration-300",
        "hover:border-ember/40 hover:bg-elevated",
        "hover:shadow-[0_0_60px_-20px_rgba(26,115,232,0.35)]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div
          aria-hidden
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember-soft text-ember border border-ember/20"
        >
          {icon}
        </div>
        <ArrowUpRight className="h-5 w-5 text-subtle group-hover:text-ember transition-colors duration-300" />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-base text-muted-foreground text-pretty leading-relaxed">{description}</p>
      </div>

      <ul className="flex flex-col gap-2.5 pt-2 border-t border-border">
        {capabilities.map((cap) => (
          <li key={cap} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span aria-hidden className="mt-2 h-px w-3 bg-ember/60 shrink-0" />
            <span>{cap}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-ember-bright transition-colors">
        {cta}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </motion.a>
  );
}
