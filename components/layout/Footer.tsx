import Image from "next/image";
import Link from "next/link";
import { getPrimaryCta, legalPages, site } from "@/lib/content/site";
import { brandAssets } from "@/lib/content/brand-assets";

export function Footer() {
  const cta = getPrimaryCta();
  const columns = [
    {
      title: "HackaToB",
      links: [
        { href: "/#experiencia", label: "El evento" },
        { href: "/#tracks", label: "Tracks" },
        { href: "/#retos", label: "Retos" },
        { href: "/#programa", label: "Programa" },
        { href: "/#faq", label: "FAQ" },
      ],
    },
    {
      title: "Participar",
      links: [
        { href: "/#participar", label: "Requisitos" },
        { href: cta.href, label: cta.label },
        { href: "/#evaluacion", label: "Evaluación" },
        { href: "/#premios", label: "Premios" },
        { href: "/legal/reglamento", label: "Reglamento" },
      ],
    },
    {
      title: "Ecosistema",
      links: [
        { href: "/#ecosistema", label: "Mentores y jurado" },
        { href: "/#trayectoria", label: "Trayectoria" },
        { href: "/#aliados", label: "Aliados" },
        { href: "/contacto", label: "Contacto" },
        { href: site.tobUrl, label: "Technology on Business" },
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-[#040c1b]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 border-b border-line px-4 py-8">
        <Image
          src={brandAssets.hackatobIsotipo}
          alt="HackaToB"
          width={48}
          height={48}
          className="object-contain"
        />
        <Image
          src={brandAssets.tobImagotipoBlancoHorizontal}
          alt="Technology on Business"
          width={140}
          height={40}
          className="h-8 w-auto object-contain"
        />
        <Image
          src={brandAssets.tecLogo}
          alt="Tecnológico de Costa Rica"
          width={120}
          height={40}
          className="h-8 w-auto object-contain"
        />
        <Image
          src={brandAssets.sparkPrincipal}
          alt="Spark"
          width={44}
          height={44}
          className="object-contain"
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-white">
            HackaToB 2026
          </p>
          <p className="mt-2 text-sm text-muted">{site.tagline}</p>
          <p className="mt-4 text-sm text-muted">
            Una iniciativa de Technology on Business · Tecnológico de Costa Rica
          </p>
          <div className="mt-5 space-y-1 text-sm text-muted">
            <p>
              <a className="hover:text-cyan" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <Link
                className="hover:text-cyan"
                href={site.tobUrl}
                target="_blank"
                rel="noreferrer"
              >
                tobcr.com
              </Link>
            </p>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
              {col.title}
            </p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-white"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple">
              Organización y legal
            </p>
            <p className="mt-2 text-xs text-muted">
              Documentos legales en estado provisional hasta aprobación final.
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {legalPages.map((page) => (
                <li key={page.slug}>
                  <Link href={`/legal/${page.slug}`} className="hover:text-white">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        id="legal"
        className="border-t border-line px-4 py-6 text-center text-xs text-muted"
      >
        <p>
          © 2026 HackaToB · Technology on Business · TEC Cartago ·{" "}
          <a className="hover:text-cyan" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
