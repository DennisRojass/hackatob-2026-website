import type { Metadata } from "next";
import Link from "next/link";
import { ContactLinks } from "@/components/shared/ContactLinks";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contacto | HackaToB 2026",
  description:
    "Canales oficiales de Technology on Business y Coordinación de Innovación para HackaToB 2026.",
};

export default function ContactoPage() {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">
        Contacto
      </p>
      <h1 className="font-display text-display-lg mt-4 text-white">
        Hablemos
      </h1>
      <p className="mt-4 text-muted">
        Technology on Business · {site.location}. Usa los canales oficiales
        para alianzas, postulación o mentores.
      </p>
      <ContactLinks className="mt-10" />
      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link href={site.applyUrl} className="text-spark hover:underline">
          Ir a postular →
        </Link>
        <Link href="/" className="text-cyan hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
