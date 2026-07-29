"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { SparkMascot } from "@/components/brand/SparkMascot";
import { FadeUp, TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { getPrimaryCta } from "@/config/campaign";
import { event } from "@/config/event";
import { metrics } from "@/lib/content/site";

export function Hero() {
  const cta = getPrimaryCta();

  return (
    <section
      id="inicio"
      className="relative overflow-x-clip"
      style={{ ["--section-accent" as string]: "var(--spark)" }}
    >
      {/* Controlled ambient — max 3 elements */}
      <div
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-blue/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-spark/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-32 left-1/3 h-40 w-40 rounded-full bg-cyan/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[min(82vh,860px)] max-w-[var(--container-max)] items-center gap-10 px-4 pb-6 pt-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-8 md:pb-10 md:pt-16">
        <div className="min-w-0">
          <FadeUp>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-lg border border-cyan/25 bg-cyan/5 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-spark" />
              HackaToB 2026 · {event.datesLabel}
            </div>
          </FadeUp>

          <TextReveal
            className="font-display text-display-xl mt-5 max-w-[18ch] text-white [overflow-wrap:anywhere]"
            delay={0.08}
            text={"Cuatro días.\nCuatro áreas."}
          />

          <FadeUp delay={0.32}>
            <p className="font-display text-display-xl mt-1 max-w-[16ch] text-gradient-spark [overflow-wrap:anywhere]">
              Una oportunidad para construir.
            </p>
          </FadeUp>

          <FadeUp delay={0.42}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Hasta {event.capacity} builders. Retos reales de Costa Rica.
              Mentoría de industria. Demo Day en el {event.demoDayVenue}.
            </p>
          </FadeUp>

          <FadeUp delay={0.52} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={cta.href} className="w-full sm:w-auto">
              {cta.label}
            </Button>
            <Button href="/#retos" variant="secondary" showArrow className="w-full sm:w-auto">
              Explorar retos
            </Button>
          </FadeUp>

          <FadeUp
            delay={0.62}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 shrink-0 text-cyan" strokeWidth={1.5} />
              {event.datesLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0 text-cyan" strokeWidth={1.5} />
              {event.locationShort}
            </span>
          </FadeUp>
        </div>

        <FadeUp delay={0.2} className="relative mx-auto w-full max-w-md min-w-0">
          {/* Signal orbit — geometric, not a floating card */}
          <div
            className="pointer-events-none absolute inset-[-6%] rounded-full border border-dashed border-spark/25"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-[8%] -z-10 rounded-full bg-spark/15 blur-3xl"
            aria-hidden
          />
          <div className="relative flex justify-center">
            <SparkMascot size={280} priority />
          </div>
          {/* Signal rail exiting toward next section */}
          <div
            className="pointer-events-none absolute -bottom-6 left-1/2 hidden h-16 w-px -translate-x-1/2 bg-gradient-to-b from-cyan/50 to-transparent md:block"
            aria-hidden
          />
        </FadeUp>
      </div>

      <div className="relative mx-auto max-w-[var(--container-max)] px-4 pb-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.03] sm:grid-cols-5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="border-r border-b border-white/5 px-4 py-4 last:border-r-0 sm:border-b-0"
            >
              <p className="font-display tabular text-xl font-bold tracking-tight text-white md:text-2xl">
                {m.value}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <HeroMarquee />
      <div className="section-rule" aria-hidden />
    </section>
  );
}

function HeroMarquee() {
  const items = [
    "HealthTrack",
    "GreenTrack",
    "FinTrack",
    "The Next Big Thing",
    "Ideación",
    "Prototipado",
    "MVP funcional",
    "Demo Day",
    "Top 3 global",
    "TEC Cartago",
  ];
  const loop = [...items, ...items];

  return (
    <div className="relative mt-2 hidden border-y border-line/60 bg-white/[0.015] py-3 md:block">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent" />
      <div className="overflow-hidden" aria-hidden>
        <div className="marquee gap-8 px-4">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-muted"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-cyan/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
