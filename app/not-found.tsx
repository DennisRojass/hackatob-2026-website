import Link from "next/link";
import { getPrimaryCta } from "@/lib/content/site";

export default function NotFound() {
  const cta = getPrimaryCta();
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-4 py-20">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-spark">
        404
      </p>
      <h1 className="font-display text-display-lg mt-4 text-white">
        Esta página no existe
      </h1>
      <p className="mt-4 text-muted">
        El enlace puede estar roto o la ruta aún no forma parte de HackaToB
        2026.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-full bg-spark px-6 py-3 text-sm font-semibold text-[#151000]"
        >
          Ir al inicio
        </Link>
        <Link href={cta.href} className="text-sm font-semibold text-cyan hover:underline">
          {cta.label} →
        </Link>
      </div>
    </div>
  );
}
