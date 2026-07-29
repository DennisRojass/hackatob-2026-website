"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { faq } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" label="FAQ" index={15} accent="cyan">
      <Reveal>
        <Eyebrow>Preguntas</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 text-white">
          Preguntas frecuentes
        </h2>
        <p className="mt-4 text-muted">
          Resuelve las dudas principales antes de postularte.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faq.map((item, index) => {
          const isOpen = open === index;
          return (
            <Reveal key={item.q} delay={index * 0.03}>
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border transition duration-300",
                  isOpen
                    ? "glass border-cyan/35 shadow-[0_0_40px_-20px_rgba(92,225,255,0.45)]"
                    : "border-line bg-white/[0.02] hover:border-white/15",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span
                    className={cn(
                      "h-8 w-1 shrink-0 rounded-full transition",
                      isOpen ? "bg-cyan" : "bg-line",
                    )}
                    aria-hidden
                  />
                  <span className="flex-1 font-display text-sm font-semibold text-white md:text-base">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <X className="h-4 w-4 text-cyan" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-4 w-4 text-muted" strokeWidth={1.5} />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className="border-t border-line px-5 py-4 pl-10 text-sm text-muted"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
