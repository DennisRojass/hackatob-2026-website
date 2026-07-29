import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { prizes } from "@/lib/content/site";

export function Prizes() {
  return (
    <Section id="premios" label="Reconocimiento" index={12} accent="purple">
      <Reveal>
        <Eyebrow>Premios</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          Reconocer el resultado. Abrir la siguiente oportunidad.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Los premios y oportunidades se anunciarán junto con los aliados
          oficiales. Mientras tanto, el marco de reconocimiento es este.
        </p>
      </Reveal>

      <Stagger className="mt-12 space-y-0 border border-line">
        {prizes.map((prize, i) => (
          <StaggerItem key={prize.title}>
            <article
              className={`flex gap-4 px-5 py-5 ${i < prizes.length - 1 ? "border-b border-line" : ""}`}
            >
              <p className="font-mono w-12 shrink-0 text-sm text-spark">
                {prize.place}
              </p>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {prize.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{prize.detail}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
