"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { trackSparkBySlug } from "@/lib/content/brand-assets";
import { tracks } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function Tracks() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section id="tracks" label="Áreas de impacto" index={5} accent="cyan">
      <Reveal>
        <Eyebrow>Tracks</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          Cuatro territorios. Un Top 3 global.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Elige el área donde quieres impactar. Todos los equipos compiten por
          el mismo podio.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line md:grid-cols-2">
        {tracks.map((track, i) => {
          const spark = trackSparkBySlug[track.slug];
          const dimmed = active !== null && active !== track.slug;
          const featured = active === track.slug || (active === null && i === 0);
          return (
            <article
              key={track.slug}
              onMouseEnter={() => setActive(track.slug)}
              onMouseLeave={() => setActive(null)}
              className={cn(
                "group relative bg-[#071528] p-6 transition duration-500 md:p-8",
                dimmed && "opacity-55",
                featured && !dimmed && "z-[1]",
              )}
              style={{ ["--section-accent" as string]: track.color }}
            >
              <div className="relative flex items-start justify-between gap-4">
                <div className="relative h-14 w-14 shrink-0">
                  {spark ? (
                    <Image
                      src={spark}
                      alt={`Spark de ${track.name}`}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  ) : null}
                </div>
                <span className="font-mono text-xs text-muted/70">
                  {["HT", "GT", "FT", "TNBT"][i]}
                </span>
              </div>

              <div className="relative mt-6">
                <h3
                  className="font-display text-2xl font-bold tracking-tight md:text-[1.75rem]"
                  style={{ color: track.color }}
                >
                  {track.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-white">
                  {track.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {track.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {track.lines.map((line) => (
                    <li
                      key={line}
                      className="border border-white/10 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
