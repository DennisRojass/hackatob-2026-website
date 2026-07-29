"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Clock3 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { agendaDays, site } from "@/lib/content/site";
import { cn } from "@/lib/utils";

const dayColors = ["#2F6BFF", "#7A3FF2", "#11CFF3", "#FFD51F"];

function useCountdown(targetIso: string) {
  const [parts, setParts] = useState({ d: 0, h: 0, m: 0, s: 0, done: false });

  useEffect(() => {
    const target = new Date(targetIso).getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setParts({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
        done: diff === 0,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  return parts;
}

function useActiveAgendaIndex() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const start = new Date(agendaDays[0].startIso).getTime();
      if (now < start) {
        setIndex(0);
        return;
      }
      let current = agendaDays.length - 1;
      for (let i = 0; i < agendaDays.length; i++) {
        const s = new Date(agendaDays[i].startIso).getTime();
        const e = new Date(agendaDays[i].endIso).getTime();
        if (now >= s && now <= e) {
          current = i;
          break;
        }
        if (now > e) current = Math.min(i + 1, agendaDays.length - 1);
      }
      setIndex(current);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return index;
}

export function Agenda() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 40%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const c = useCountdown(site.startIso);
  const active = useActiveAgendaIndex();
  const nextDay = useMemo(() => agendaDays[active], [active]);

  return (
    <Section id="programa" label="Programa" index={8} accent="blue">
      <Reveal>
        <Eyebrow>Agenda</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          Aprender. Construir. Conectar.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Prepárate antes. Construye durante cuatro días en el TEC Cartago.
          Demo Day en el Centro de las Artes.
        </p>
      </Reveal>

      <Reveal delay={0.04} className="mt-8">
        <div className="rounded-2xl border border-purple/25 bg-purple/5 px-5 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-purple">
            Fase 0 · Pre-HackaToB
          </p>
          <p className="mt-2 text-sm text-muted">
            Workshops y onboarding previos (fecha por confirmar): reglas, retos,
            team matching, herramientas y validación — para llegar al evento con
            claridad.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-10">
        <div className="glass relative overflow-hidden rounded-[28px] p-5 md:p-7">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/15 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                <Clock3 className="h-3.5 w-3.5" strokeWidth={1.5} />
                Cuenta regresiva · próximo hito
              </p>
              <p className="font-display mt-3 text-2xl font-bold text-white md:text-3xl">
                {nextDay.day} · {nextDay.name}
              </p>
              <p className="mt-2 max-w-md text-sm text-muted">
                {nextDay.focus}. Resultado: {nextDay.result}
              </p>
            </div>

            <div
              className="grid grid-cols-4 gap-2 sm:gap-3"
              aria-live="polite"
              aria-atomic="true"
              aria-label={
                c.done
                  ? "El evento ha comenzado"
                  : `Faltan ${c.d} días, ${c.h} horas, ${c.m} minutos y ${c.s} segundos`
              }
            >
              {[
                { label: "Días", value: c.d },
                { label: "Horas", value: c.h },
                { label: "Min", value: c.m },
                { label: "Seg", value: c.s },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="min-w-[64px] rounded-2xl border border-white/10 bg-[#071528]/80 px-3 py-3 text-center"
                >
                  <p className="font-display tabular text-2xl font-bold text-white md:text-3xl">
                    {String(unit.value).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted">
                    {unit.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div ref={ref} className="relative mt-12 pl-8 md:pl-12">
        <div className="absolute left-3 top-0 h-full w-px bg-white/10 md:left-5" />
        <motion.div
          className="absolute left-3 top-0 w-px origin-top bg-gradient-to-b from-cyan via-purple to-spark md:left-5"
          style={{ height }}
        />

        <div className="space-y-6">
          {agendaDays.map((day, i) => (
            <Reveal key={day.day} delay={i * 0.05}>
              <article className="relative">
                <span
                  className={cn(
                    "absolute -left-[1.65rem] top-6 h-3 w-3 rounded-full border-2 border-bg md:-left-[2.15rem]",
                    active === i && "ring-4 ring-cyan/25",
                  )}
                  style={{ background: dayColors[i] }}
                />
                <div
                  className={cn(
                    "card-gradient p-5 transition md:p-6",
                    active === i &&
                      "shadow-[0_0_0_1px_rgba(92,225,255,0.28),0_24px_60px_-30px_rgba(92,225,255,0.55)]",
                  )}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: dayColors[i] }}
                        >
                          {day.day}
                        </p>
                        {active === i && (
                          <span className="rounded-full border border-cyan/35 bg-cyan/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan">
                            En foco
                          </span>
                        )}
                      </div>
                      <h3 className="font-display mt-1 text-xl font-semibold">
                        {day.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{day.focus}</p>
                      <p className="mt-3 text-sm text-white">
                        Resultado: {day.result}
                      </p>
                    </div>
                    <div className="w-full md:w-44">
                      <div className="mb-2 flex justify-between text-xs text-muted">
                        <span>Avance</span>
                        <span className="tabular">{day.progress}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${day.progress}%`,
                            background: dayColors[i],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
