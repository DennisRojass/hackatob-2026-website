import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { modalities } from "@/lib/content/site";

export function Modalities() {
  return (
    <Section id="modalidades" label="Modalidades" index={7} accent="purple">
      <Reveal>
        <Eyebrow>Madurez de entrega</Eyebrow>
        <h2 className="font-display text-display-lg mt-4 max-w-3xl text-white">
          Tres peldaños. Un mismo estándar.
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-muted md:text-base">
          La evaluación es proporcional a la modalidad. Más código no significa
          automáticamente una mejor solución.
        </p>
      </Reveal>

      <Stagger className="mt-12 space-y-0">
        {modalities.map((mod, index) => (
          <StaggerItem key={mod.slug}>
            <article
              className="grid gap-4 border-l-2 border-purple/40 py-6 pl-6 md:grid-cols-[140px_1fr]"
              style={{ marginLeft: `${index * 12}px` }}
            >
              <div>
                <p className="text-xs font-bold text-spark">0{index + 1}</p>
                <h3 className="font-display mt-1 text-xl font-semibold text-white">
                  {mod.name}
                </h3>
              </div>
              <div>
                <p className="text-sm text-muted">{mod.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {mod.deliverables.map((item) => (
                    <li
                      key={item}
                      className="border border-line/70 px-2.5 py-1 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
