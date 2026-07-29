import Link from "next/link";
import { getAnnouncementCopy, getPrimaryCta } from "@/config/campaign";

export function AnnouncementBar() {
  const copy = getAnnouncementCopy();
  const cta = getPrimaryCta();

  return (
    <div className="relative z-[60] border-b border-line/70 bg-[#02060f]/95 text-center backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-spark/5" />
      <div className="relative mx-auto flex max-w-[var(--container-max)] items-center justify-center gap-3 px-4 py-2 text-xs text-muted md:gap-4 md:text-sm">
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-spark/30 bg-spark/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-spark">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-spark" aria-hidden />
          {copy.badge}
        </span>
        <p className="hidden min-w-0 truncate sm:block">{copy.text}</p>
        <p className="min-w-0 truncate sm:hidden">{copy.textMobile}</p>
        <Link
          href={cta.href}
          className="shrink-0 font-semibold text-cyan underline-offset-4 transition hover:text-white hover:underline"
        >
          {copy.cta}
        </Link>
      </div>
    </div>
  );
}
