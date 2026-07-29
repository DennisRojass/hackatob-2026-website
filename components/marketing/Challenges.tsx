import { Bell } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  challengePreviews,
  getPrimaryCta,
  site,
} from "@/lib/content/site";

export function Challenges() {
  const cta = getPrimaryCta();

  return (
    <Section id="retos" label="Retos" index={6} accent="spark">
      <Reveal>
        <Eyebrow>Catálogo en preparación</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          Los retos oficiales serán publicados próximamente
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Publicamos únicamente retos completos con organización responsable.
          Mientras se confirman, estas son las líneas de trabajo por track.
        </p>
      </Reveal>

      <div className="mt-8 flex items-center gap-2 border border-cyan/25 bg-cyan/5 px-4 py-3 text-sm text-muted">
        <Bell className="h-4 w-4 shrink-0 text-cyan" strokeWidth={1.5} />
        <span>
          Estado: <strong className="text-cyan">próximamente</strong> — sin
          briefs inventados
        </span>
      </div>

      <Stagger className="mt-8 space-y-0 border border-line">
        {challengePreviews.map((item, i) => (
          <StaggerItem key={item.code}>
            <article
              className={`grid gap-3 px-5 py-5 md:grid-cols-[88px_1fr] ${
                i < challengePreviews.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <div>
                <p
                  className="font-mono text-sm font-semibold"
                  style={{ color: item.color }}
                >
                  {item.code}
                </p>
                <span className="mt-2 inline-block border border-spark/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-spark">
                  Pendiente
                </span>
              </div>
              <div>
                <h3
                  className="font-display text-lg font-semibold"
                  style={{ color: item.color }}
                >
                  {item.track}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.themes.map((theme) => (
                    <li
                      key={theme}
                      className="border border-white/10 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {theme}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
        <Button href={cta.href}>{cta.label}</Button>
        <Button href={site.challengeMailto} variant="secondary" showArrow>
          Proponer un reto
        </Button>
      </Reveal>
    </Section>
  );
}
