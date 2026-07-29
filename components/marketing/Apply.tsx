import { ClipboardCheck, ShieldCheck } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { event } from "@/config/event";
import {
  applicationSteps,
  getPrimaryCta,
  requirements,
  site,
} from "@/lib/content/site";

export function Apply() {
  const cta = getPrimaryCta();

  return (
    <Section id="participar" label="Participar" index={9} accent="spark">
      <div id="postular" className="scroll-mt-32">
        <Reveal>
          <div className="relative overflow-hidden border border-spark/25 bg-spark/[0.04] p-6 md:p-8">
            <Eyebrow>Lista de interés</Eyebrow>
            <h2 className="font-display text-display-lg mt-4 max-w-2xl text-white">
              Deja tu interés individualmente o con tu equipo
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Cupos limitados a {event.capacity} participantes. Dejar tus datos
              no garantiza un cupo. El formulario oficial de postulación se
              activará en una siguiente fase. {site.applyDeadline}.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={cta.href}>{cta.label}</Button>
              <Button href="/#faq" variant="secondary" showArrow>
                Resolver dudas
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">
              Entrada:{" "}
              <a className="text-cyan hover:underline" href={site.applyUrl}>
                /postular
              </a>
              {" · "}
              alias <span className="text-muted">/hackatob/postular</span>
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
            <ClipboardCheck className="h-4 w-4 text-spark" strokeWidth={1.5} />
            Proceso
          </div>
          <Stagger className="space-y-2">
            {applicationSteps.slice(0, 6).map((step, i) => (
              <StaggerItem key={step}>
                <div className="flex items-center gap-3 border border-line bg-panel/40 px-3 py-2.5">
                  <span className="font-display tabular text-xs font-bold text-spark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted">{step}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.08}>
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
            <ShieldCheck className="h-4 w-4 text-cyan" strokeWidth={1.5} />
            Requisitos
          </div>
          <ul className="space-y-3">
            {requirements.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/#evaluacion" variant="secondary" showArrow>
              Ver evaluación
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
