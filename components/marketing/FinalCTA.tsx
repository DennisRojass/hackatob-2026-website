import { Reveal } from "@/components/motion/Reveal";
import { SparkMascot } from "@/components/brand/SparkMascot";
import { ContactLinks } from "@/components/shared/ContactLinks";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { event } from "@/config/event";
import { getPrimaryCta } from "@/lib/content/site";

export function FinalCTA() {
  const cta = getPrimaryCta();

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ ["--section-accent" as string]: "var(--spark)" }}
    >
      <div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-spark/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-cyan/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.25fr_0.75fr]">
        <Reveal>
          <Eyebrow>Siguiente paso</Eyebrow>
          <h2 className="font-display text-display-lg mt-5 text-white md:text-[3.4rem]">
            Costa Rica tiene retos.
            <span className="mt-3 block text-gradient-spark">
              La próxima solución puede empezar contigo.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Forma parte de hasta {event.capacity} participantes de HackaToB
            2026 — la experiencia de innovación aplicada de Technology on
            Business.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={cta.href}>{cta.label}</Button>
            <Button href="/#retos" variant="secondary" showArrow>
              Explorar retos
            </Button>
          </div>
          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Canales oficiales
            </p>
            <ContactLinks />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative mx-auto">
          <div
            className="pointer-events-none absolute inset-[-10%] rounded-full border border-dashed border-spark/25"
            aria-hidden
          />
          <SparkMascot size={280} state="point" />
        </Reveal>
      </div>
    </section>
  );
}
