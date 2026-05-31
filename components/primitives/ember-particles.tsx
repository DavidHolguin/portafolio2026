"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function EmberParticles({ count = 14, className }: { count?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    setSize();
    let width = canvas.width;
    let height = canvas.height;

    const onResize = () => {
      setSize();
      width = canvas.width;
      height = canvas.height;
    };
    window.addEventListener("resize", onResize);

    const make = (): Particle => {
      const maxLife = 600 + Math.random() * 600;
      return {
        x: Math.random() * width,
        y: height + Math.random() * 80,
        radius: (Math.random() * 1.6 + 0.4) * window.devicePixelRatio,
        speedY: -(0.18 + Math.random() * 0.45) * window.devicePixelRatio,
        speedX: (Math.random() - 0.5) * 0.18 * window.devicePixelRatio,
        opacity: 0,
        life: 0,
        maxLife,
      };
    };

    const particles: Particle[] = Array.from({ length: count }, make);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life += 1;

        const lifeFraction = p.life / p.maxLife;
        if (lifeFraction < 0.15) p.opacity = lifeFraction / 0.15;
        else if (lifeFraction > 0.85) p.opacity = (1 - lifeFraction) / 0.15;
        else p.opacity = 1;

        if (p.life >= p.maxLife || p.y < -20) {
          particles[i] = make();
          continue;
        }

        const r = p.radius;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        gradient.addColorStop(0, `rgba(86, 151, 255, ${p.opacity * 0.95})`);
        gradient.addColorStop(0.4, `rgba(26, 115, 232, ${p.opacity * 0.45})`);
        gradient.addColorStop(1, "rgba(26, 115, 232, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
