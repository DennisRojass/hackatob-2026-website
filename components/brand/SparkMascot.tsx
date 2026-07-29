"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { brandAssets } from "@/lib/content/brand-assets";
import { AMBIENT, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SparkState = "idle" | "point" | "celebrate";

type SparkMascotProps = {
  className?: string;
  size?: number;
  state?: SparkState;
  priority?: boolean;
};

export function SparkMascot({
  className,
  size = 300,
  state = "idle",
  priority = false,
}: SparkMascotProps) {
  const reduce = useReducedMotion();
  const isCelebrate = state === "celebrate";
  const isPoint = state === "point";

  return (
    <motion.div
      className={cn("relative mx-auto select-none", className)}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.86, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      whileHover={
        reduce
          ? undefined
          : {
              scale: 1.06,
              rotate: isPoint ? 8 : 4,
              transition: { type: "spring", stiffness: 260, damping: 14 },
            }
      }
      whileTap={reduce ? undefined : { scale: 0.96 }}
    >
      {/* Soft glow pulse */}
      <motion.div
        className="absolute inset-[-12%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,213,31,0.42), transparent 62%)",
        }}
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.35, 0.9, 0.35],
                scale: [0.92, 1.12, 0.92],
              }
        }
        transition={{
          duration: isCelebrate ? 2.2 : AMBIENT.glow,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />

      {/* Orbit sparkles */}
      {!reduce &&
        [0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-spark"
            style={{ boxShadow: "0 0 10px rgba(255,213,31,0.9)" }}
            animate={{
              x: [0, Math.cos((i * Math.PI) / 2) * (size * 0.42)],
              y: [0, Math.sin((i * Math.PI) / 2) * (size * 0.42)],
              opacity: [0, 1, 0],
              scale: [0.4, 1.2, 0.3],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              delay: i * 0.45,
              ease: "easeInOut",
            }}
            aria-hidden
          />
        ))}

      <motion.div
        animate={
          reduce
            ? undefined
            : {
                y: [0, isCelebrate ? -18 : -12, 0],
                rotate: isPoint
                  ? [-10, -4, -10]
                  : isCelebrate
                    ? [-6, 6, -6]
                    : [-2.5, 2.5, -2.5],
                scale: isCelebrate ? [1, 1.05, 1] : [1, 1.02, 1],
              }
        }
        transition={{
          y: {
            duration: isCelebrate ? 2.4 : AMBIENT.float,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: isCelebrate ? 3.2 : 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src={brandAssets.sparkPrincipal}
          alt="Spark, mascota oficial de HackaToB"
          width={size}
          height={size}
          className="relative z-10 object-contain drop-shadow-[0_0_48px_rgba(255,213,31,0.45)]"
          priority={priority}
        />
      </motion.div>

      {!reduce && (
        <>
          <motion.span
            className="absolute right-[18%] top-[16%] h-2 w-2 rounded-full bg-white"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.4, 1.3, 0.2],
              y: [0, -18, -28],
              x: [0, 10, 18],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            aria-hidden
          />
          <motion.span
            className="absolute left-[20%] top-[28%] h-1.5 w-1.5 rounded-full bg-spark"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.3, 1.1, 0.2],
              y: [0, -14, -24],
              x: [0, -8, -14],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.7,
            }}
            aria-hidden
          />
        </>
      )}
    </motion.div>
  );
}
