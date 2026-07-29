import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { legalBodies } from "@/lib/content/legal";
import { legalPages, site } from "@/lib/content/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  return {
    title: page ? `${page.title} | HackaToB 2026` : "Legal | HackaToB 2026",
    description: page
      ? `${page.title} provisional de HackaToB 2026. Documento sujeto a actualización antes del evento.`
      : undefined,
    robots: { index: false, follow: true },
  };
}

export default async function LegalStubPage({ params }: Props) {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const body = legalBodies[slug] ?? {
    status: "En preparación",
    paragraphs: [
      `El documento oficial de ${page.title} se publicará antes del inicio de HackaToB 2026.`,
    ],
  };

  return (
    <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-purple">
        Legal · {body.status}
      </p>
      <h1 className="font-display text-display-lg mt-4 text-white">
        {page.title}
      </h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted md:text-base">
        {body.paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
        <p>
          Consultas:{" "}
          <a className="text-cyan hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link href="/legal" className="text-cyan hover:underline">
          ← Índice legal
        </Link>
        <Link href="/" className="text-muted hover:text-white">
          Inicio
        </Link>
      </div>
    </div>
  );
}
