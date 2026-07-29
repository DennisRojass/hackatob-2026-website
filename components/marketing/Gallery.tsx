"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { gallery } from "@/lib/content/site";

export function Gallery() {
  return (
    <Section id="galeria" label="Eventos anteriores" index={11} total={14} accent="purple">
      <Reveal>
        <Eyebrow>Memoria viva</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          Lo que ya construyó Technology on Business
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Escenario, comunidad y cultura — el mismo espíritu que llega a
          HackaToB 2026.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
        <Reveal className="group relative md:col-span-7">
          <figure className="relative overflow-hidden rounded-[28px] border border-white/10">
            <div className="relative aspect-[16/10] md:aspect-[5/4]">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/25 to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
                ToB · archivo
              </p>
              <p className="font-display mt-2 text-lg text-white md:text-xl">
                {gallery[0].caption}
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.08} className="group relative md:col-span-5">
          <figure className="relative h-full overflow-hidden rounded-[28px] border border-white/10">
            <div className="relative aspect-[4/5] md:absolute md:inset-0 md:aspect-auto">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/20 to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-spark">
                Cultura · TEC
              </p>
              <p className="font-display mt-2 text-lg text-white md:text-xl">
                {gallery[1].caption}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
