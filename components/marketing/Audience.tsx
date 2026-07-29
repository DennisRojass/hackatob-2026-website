import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { event } from "@/config/event";
import { audienceFamilies } from "@/lib/content/site";

const accents = ["var(--cyan)", "var(--purple)", "var(--green)"];

export function Audience() {
  return (
    <Section
      id="participantes"
      label="Quiénes pueden participar"
      index={4}
      accent="purple"
    >
      <Reveal>
        <Eyebrow>Participantes</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          Hasta {event.capacity} personas. Equipos de hasta {event.maxTeamSize}.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Postulación individual o por equipo. No hace falta experiencia previa
          obligatoria. No todos deben programar.
        </p>
      </Reveal>

      <Stagger className="mt-12 grid gap-0 md:grid-cols-3">
        {audienceFamilies.map((family, i) => (
          <StaggerItem key={family.title}>
            <article
              className="h-full border-t-2 bg-white/[0.02] px-5 py-6 md:border-t-0 md:border-l-2"
              style={{ borderColor: accents[i] }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Perfil 0{i + 1}
              </p>
              <h3 className="font-display mt-3 text-lg font-semibold text-white">
                {family.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {family.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: accents[i] }}
                      aria-hidden
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1} className="mt-8">
        <Button href="#participar" variant="secondary" showArrow>
          Revisar requisitos
        </Button>
      </Reveal>
    </Section>
  );
}
