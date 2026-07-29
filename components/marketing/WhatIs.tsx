import {
  BookOpen,
  Boxes,
  CheckCircle2,
  Link2,
  Mic2,
  PencilRuler,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { event } from "@/config/event";
import { processSteps } from "@/lib/content/site";

const icons = [BookOpen, PencilRuler, Boxes, CheckCircle2, Mic2, Link2];

export function WhatIs() {
  return (
    <Section id="experiencia" label="Experiencia HackaToB" index={3} accent="blue">
      <Reveal>
        <Eyebrow>Experiencia</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          Cuatro días para investigar, construir y presentar
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Del {event.datesLabel}, equipos interdisciplinarios trabajan retos
          reales, reciben mentoría y cierran con Demo Day en el{" "}
          {event.demoDayVenue}.
        </p>
      </Reveal>

      <Stagger className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-6">
        {processSteps.map((step, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem key={step.id} className="relative">
              {i < processSteps.length - 1 && (
                <span
                  className="absolute left-[calc(50%+28px)] top-8 hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-cyan/50 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <article className="relative z-10 mx-1 h-full border-l border-cyan/25 px-4 py-4 text-left transition hover:border-cyan/60">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-cyan/30 bg-cyan/10">
                  <Icon className="h-4 w-4 text-cyan" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-[11px] font-bold text-spark">{step.id}</p>
                <h3 className="font-display mt-1 text-sm font-semibold">{step.title}</h3>
                <p className="mt-2 text-xs text-muted">{step.description}</p>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal delay={0.1} className="mt-8">
        <Button href="#participar" variant="secondary" showArrow>
          Cómo participar
        </Button>
      </Reveal>
    </Section>
  );
}
