"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false,
  onClick,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan";

  const styles = {
    primary:
      "btn-shine bg-spark text-[#151000] shadow-[0_0_0_1px_rgba(255,225,74,0.25),0_12px_40px_-10px_rgba(255,225,74,0.55)] hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(255,225,74,0.4),0_18px_50px_-12px_rgba(255,225,74,0.65)]",
    secondary:
      "glass text-white hover:border-cyan/40 hover:bg-white/10 hover:scale-[1.02]",
    ghost: "text-muted hover:text-white",
  } as const;

  const withArrow = showArrow || variant === "primary";

  return (
    <motion.div whileTap={{ scale: 0.98 }} className={cn(className?.includes("w-full") && "w-full")}>
      <Link
        href={href}
        onClick={onClick}
        className={cn(base, styles[variant], className)}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
        {withArrow && (
          <ArrowRight
            className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        )}
      </Link>
    </motion.div>
  );
}
