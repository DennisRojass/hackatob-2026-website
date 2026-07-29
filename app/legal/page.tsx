import type { Metadata } from "next";
import Link from "next/link";
import { legalPages } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Legal | HackaToB 2026",
  description:
    "Documentos legales de HackaToB 2026: privacidad, reglamento, propiedad intelectual y más.",
};

export default function LegalIndexPage() {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-purple">
        Legal
      </p>
      <h1 className="font-display text-display-lg mt-4 text-white">
        Documentos oficiales
      </h1>
      <p className="mt-4 text-muted">
        Los documentos completos se publicarán antes del inicio del evento.
        Mientras tanto, estas páginas confirman el marco legal previsto.
      </p>
      <ul className="mt-10 space-y-2">
        {legalPages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/legal/${page.slug}`}
              className="flex items-center justify-between rounded-xl border border-line bg-panel/40 px-4 py-3 text-sm text-white transition hover:border-cyan/35 hover:text-cyan"
            >
              <span>{page.title}</span>
              <span className="text-muted">→</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-10 inline-block text-sm text-cyan hover:underline">
        ← Volver al inicio
      </Link>
    </div>
  );
}
