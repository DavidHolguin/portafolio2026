"use client";

import { motion } from "motion/react";
import { ease } from "@/lib/motion-presets";

export function AnimatedFlow() {
  return (
    <svg
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-32 sm:h-40"
      aria-hidden
    >
      <defs>
        <linearGradient id="flow-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1A73E8" stopOpacity="0" />
          <stop offset="15%" stopColor="#1A73E8" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#5697FF" stopOpacity="1" />
          <stop offset="85%" stopColor="#1A73E8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1A73E8" stopOpacity="0" />
        </linearGradient>

        <filter id="flow-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* baseline */}
      <line
        x1="60"
        y1="100"
        x2="1140"
        y2="100"
        stroke="#1a1a1a"
        strokeWidth="1"
        strokeDasharray="2 4"
      />

      {/* node circles (3 hubs) */}
      {[200, 600, 1000].map((cx, i) => (
        <motion.g
          key={cx}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.25, ease }}
        >
          <circle cx={cx} cy="100" r="32" fill="#0a0a0a" stroke="#262626" strokeWidth="1" />
          <circle cx={cx} cy="100" r="6" fill="#1A73E8" />
          <circle
            cx={cx}
            cy="100"
            r="14"
            fill="none"
            stroke="#1A73E8"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
        </motion.g>
      ))}

      {/* animated connectors */}
      <motion.path
        d="M 232 100 L 568 100"
        stroke="url(#flow-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#flow-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, delay: 0.5, ease }}
      />
      <motion.path
        d="M 632 100 L 968 100"
        stroke="url(#flow-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#flow-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, delay: 0.95, ease }}
      />
    </svg>
  );
}
