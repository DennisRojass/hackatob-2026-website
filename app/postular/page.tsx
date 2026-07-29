import type { Metadata } from "next";
import Link from "next/link";
import { InterestForm } from "@/components/forms/InterestForm";
import { ContactLinks } from "@/components/shared/ContactLinks";
import { applicationSteps, site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Lista de interés | HackaToB 2026",
  description:
    "Deja tu interés en HackaToB 2026. Hasta 80 participantes · TEC Cartago · 17–20 agosto. El formulario oficial se activará pronto.",
};

export default function PostularPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="aurora opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-spark">
          HackaToB 2026 · Lista de interés
        </p>
        <h1 className="font-display text-display-lg mt-4 text-white">
          Deja tu interés ahora
        </h1>
        <p className="mt-4 text-muted">
          Cupos limitados a 80 participantes. Dejar tus datos no garantiza un
          cupo. {site.applyDeadline}.
        </p>

        <div className="mt-10">
          <InterestForm />
        </div>

        <h2 className="font-display mt-12 text-lg font-semibold text-white">
          Próximos pasos
        </h2>
        <ol className="mt-4 space-y-2">
          {applicationSteps.slice(0, 5).map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-3 rounded-xl border border-line bg-panel/40 px-3 py-2.5"
            >
              <span className="font-display tabular text-xs font-bold text-spark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-muted">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <h2 className="font-display text-lg font-semibold text-white">
            Contacto
          </h2>
          <ContactLinks className="mt-4" />
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link href="/#participar" className="text-cyan hover:underline">
            ← Volver a Participar
          </Link>
          <a href={site.applyMailto} className="text-muted hover:text-white">
            Alternativa por correo
          </a>
        </div>
      </div>
    </div>
  );
}
