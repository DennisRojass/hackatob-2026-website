import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { judgeProfiles, rubric } from "@/lib/content/site";

export function Evaluation() {
  return (
    <Section id="evaluacion" label="Evaluación" index={10} accent="cyan">
      <Reveal>
        <Eyebrow>Transparencia</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          Rúbrica pública. Evaluación proporcional a la modalidad.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Más código no equivale automáticamente a una mejor solución. Los
          porcentajes siguientes son el marco operativo publicado; la versión
          firmada del reglamento puede afinar detalles.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="border border-line bg-[#071528] p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold">Rúbrica</h3>
            <ul className="mt-6 space-y-4">
              {rubric.map((item) => (
                <li key={item.criterion}>
                  <div className="mb-1.5 flex justify-between gap-4 text-sm">
                    <span className="text-muted">{item.criterion}</span>
                    <span className="tabular font-semibold text-white">
                      {item.percent}%
                    </span>
                  </div>
                  <div className="h-1 overflow-hidden bg-white/10">
                    <div
                      className="h-full bg-cyan"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted">
              Total 100% · Premios tecnológicos: 60% general + 40% especialista
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
            <h3 className="font-display text-lg font-semibold text-white">
              Perspectivas del jurado
            </h3>
            <p className="mt-2 text-sm text-muted">
              Cinco miradas. Conflictos de interés declarados. Deliberación
              documentada.
            </p>
          </Reveal>
          <Stagger className="mt-5 space-y-0 border border-line">
            {judgeProfiles.map((profile, i) => (
              <StaggerItem key={profile}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 ${
                    i < judgeProfiles.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white">{profile}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
