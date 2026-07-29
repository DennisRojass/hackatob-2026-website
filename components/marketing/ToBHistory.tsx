"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Gallery photos remain unpublished until a confirmed documentary set exists.
 * Editorial timeline only — no stock, no invented captions.
 */
export function ToBHistory() {
  return (
    <Section id="trayectoria" label="Trayectoria" index={14} accent="purple">
      <Reveal>
        <Eyebrow>Technology on Business</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          El ecosistema que inspira HackaToB
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          HackaToB nace dentro de Technology on Business, la iniciativa que
          conecta estudiantes, profesionales y organizaciones en tecnología y
          negocios en el TEC.
        </p>
      </Reveal>

      <ol className="mt-12 space-y-0 border-l border-cyan/30 pl-6">
        {[
          {
            t: "ToB",
            d: "Organiza y articula el ecosistema de innovación aplicada.",
          },
          {
            t: "TEC Cartago",
            d: "Sede institucional del Campus Central.",
          },
          {
            t: "HackaToB 2026",
            d: "Cuatro días de construcción, mentoría y Demo Day.",
          },
        ].map((item) => (
          <li key={item.t} className="relative pb-8 last:pb-0">
            <span
              className="absolute -left-[1.91rem] top-1.5 h-3 w-3 rounded-full border-2 border-cyan bg-[#06101f]"
              aria-hidden
            />
            <p className="font-display text-sm font-semibold text-white">{item.t}</p>
            <p className="mt-1 text-sm text-muted">{item.d}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-xs text-muted">
        La galería fotográfica se publicará cuando existan imágenes documentales
        autorizadas.
      </p>
    </Section>
  );
}
