"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Landmark } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { brandAssets } from "@/lib/content/brand-assets";
import { event } from "@/config/event";
import { DUR, EASE } from "@/lib/motion";

const nodes = [
  {
    label: "Organiza",
    value: "Technology on Business",
    src: brandAssets.tobImagotipoBlancoHorizontal,
    width: 140,
    height: 40,
  },
  {
    label: "Sede",
    value: "Tecnológico de Costa Rica",
    src: brandAssets.tecLogo,
    width: 120,
    height: 40,
  },
  {
    label: "Demo Day",
    value: event.demoDayVenue,
    src: null as string | null,
    width: 0,
    height: 0,
  },
];

export function Trust() {
  return (
    <Section id="respaldo" label="Respaldo institucional" index={2} accent="cyan">
      <Reveal>
        <Eyebrow>Respaldo</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          ToB → TEC → HackaToB → Demo Day
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          HackaToB es la experiencia de innovación aplicada de Technology on
          Business, con sede en el Campus Central del TEC en Cartago.
        </p>
      </Reveal>

      <div className="relative mt-12">
        <motion.svg
          className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-8 w-full -translate-y-1/2 md:block"
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.line
            x1="8"
            y1="4"
            x2="92"
            y2="4"
            stroke="color-mix(in srgb, var(--tob-cyan-bright) 45%, transparent)"
            strokeWidth="0.4"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DUR.slow, ease: EASE }}
          />
        </motion.svg>

        <ol className="grid gap-4 md:grid-cols-3">
          {nodes.map((org, i) => (
            <Reveal key={org.label}>
              <li className="relative z-10 flex items-center gap-4 border border-line/80 bg-white/[0.03] px-5 py-5">
                <span className="font-display text-xs text-spark/80">0{i + 1}</span>
                <div className="grid h-14 w-28 shrink-0 place-items-center">
                  {org.src ? (
                    <Image
                      src={org.src}
                      alt={org.value}
                      width={org.width}
                      height={org.height}
                      className="max-h-10 w-auto object-contain"
                    />
                  ) : (
                    <Landmark className="h-6 w-6 text-cyan" strokeWidth={1.5} />
                  )}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted">
                    {org.label}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-white">
                    {org.value}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={0.1} className="mt-8">
        <Button href="#experiencia" variant="secondary" showArrow>
          Ver la experiencia
        </Button>
      </Reveal>
    </Section>
  );
}
