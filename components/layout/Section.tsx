"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { DUR, EASE } from "@/lib/motion";

type Accent = "cyan" | "spark" | "purple" | "health" | "green" | "fin" | "blue";

const accentMap: Record<Accent, string> = {
  cyan: "var(--cyan)",
  spark: "var(--spark)",
  purple: "var(--purple)",
  health: "var(--health)",
  green: "var(--green)",
  fin: "var(--fin)",
  blue: "var(--blue)",
};

type SectionProps = {
  id: string;
  label?: string;
  index?: number;
  total?: number;
  accent?: Accent;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  label,
  index,
  total = 16,
  accent = "cyan",
  className,
  children,
}: SectionProps) {
  const reduce = useReducedMotion();

  return (
    <section
      id={id}
      className={cn("relative scroll-mt-32 overflow-hidden py-20 md:py-28", className)}
      style={{ ["--section-accent" as string]: accentMap[accent] }}
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--section-accent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {(label || index !== undefined) && (
          <motion.div
            className="mb-8 flex items-end justify-between gap-4"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: DUR.base, ease: EASE }}
          >
            {label ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--section-accent)]">
                {label}
              </p>
            ) : (
              <span />
            )}
            {index !== undefined && (
              <p className="font-display tabular text-xs text-muted/80">
                <span className="text-white">{String(index).padStart(2, "0")}</span>
                <span className="mx-1.5 text-line">/</span>
                {String(total).padStart(2, "0")}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>

      <motion.div
        className="section-rule mx-auto mt-20 max-w-6xl origin-left md:mt-24"
        initial={reduce ? { opacity: 1, scaleX: 1 } : { opacity: 0.4, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: DUR.slow, ease: EASE }}
        aria-hidden
      />
    </section>
  );
}
