"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { communityTargets, mentorsConfirmed } from "@/lib/content/people";
import { site } from "@/lib/content/site";

export function Community() {
  return (
    <Section id="ecosistema" label="Ecosistema" index={11} accent="blue">
      <Reveal>
        <Eyebrow>Mentores y jurado</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          {mentorsConfirmed
            ? "Mentores y jurado confirmados"
            : "Próximamente conocerás a quienes te acompañarán"}
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          {mentorsConfirmed
            ? "Perfiles confirmados de mentores, workshops y jurado."
            : "Estamos conformando un equipo de especialistas en tecnología, producto, negocio e impacto. Publicaremos solo perfiles confirmados."}
        </p>
      </Reveal>

      {!mentorsConfirmed ? (
        <>
          <div className="mt-10 grid gap-px overflow-hidden border border-line md:grid-cols-3">
            {[
              { title: "Mentores", value: `Meta ${communityTargets.mentorsGoal}` },
              { title: "Workshops", value: `Meta ${communityTargets.workshopsGoal}` },
              { title: "Jurado", value: `Meta ${communityTargets.judgesGoal}` },
            ].map((stat) => (
              <div
                key={stat.title}
                className="flex items-center justify-between bg-[#071528] px-5 py-4"
              >
                <span className="text-sm text-muted">{stat.title}</span>
                <span className="font-display text-sm font-semibold text-spark">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            Cifras operativas objetivo — no son perfiles confirmados.
          </p>

          <Reveal className="mt-10">
            <div className="border border-line bg-white/[0.03] p-8 md:p-10">
              <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                Sin avatares inventados ni enlaces placeholder. Cuando los
                perfiles estén confirmados, verás fotografía, nombre, cargo,
                organización y especialidad.
              </p>
              <div className="mt-6">
                <Button
                  href={`mailto:${site.innovationEmail}?subject=Ser%20mentor%20HackaToB`}
                  variant="secondary"
                  showArrow
                >
                  Quiero ser mentor
                </Button>
              </div>
            </div>
          </Reveal>
        </>
      ) : null}
    </Section>
  );
}
