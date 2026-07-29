"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  allyTypes,
  site,
  sponsors,
  sponsorsConfirmed,
} from "@/lib/content/site";

export function Allies() {
  return (
    <Section id="aliados" label="Aliados" index={13} accent="cyan">
      <Reveal>
        <Eyebrow>Aliados</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          {sponsorsConfirmed
            ? "Organizaciones confirmadas"
            : "Estamos conformando el ecosistema de aliados de HackaToB 2026"}
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          {sponsorsConfirmed
            ? "Aliados formalmente confirmados de HackaToB 2026."
            : "Solo publicamos organizaciones con autorización escrita. TEC es sede institucional, no aparece como sponsor comercial."}
        </p>
      </Reveal>

      {sponsorsConfirmed ? (
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 border border-line bg-white/[0.03] p-5 transition hover:border-cyan/40"
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={110}
                height={36}
                className="h-7 w-auto object-contain"
              />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.16em] opacity-80"
                style={{ color: s.color }}
              >
                Partner
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-wrap gap-2">
          {allyTypes.map((type) => (
            <span
              key={type}
              className="border border-line px-3 py-1.5 text-[11px] text-muted"
            >
              {type}
            </span>
          ))}
        </div>
      )}

      <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={`mailto:${site.email}?subject=Alianza%20HackaToB%202026`}>
          Ser aliado
        </Button>
        <Button href={site.challengeMailto} variant="secondary" showArrow>
          Proponer un reto
        </Button>
      </Reveal>
    </Section>
  );
}
