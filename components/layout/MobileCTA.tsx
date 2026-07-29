"use client";

import Link from "next/link";
import { getPrimaryCta } from "@/lib/content/site";

export function MobileCTA() {
  const cta = getPrimaryCta();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#030914]/92 p-3 backdrop-blur-xl md:hidden">
      <Link
        href={cta.href}
        className="btn-shine flex w-full items-center justify-center rounded-full bg-spark px-6 py-3.5 text-sm font-semibold text-[#151000] shadow-[0_12px_40px_-12px_rgba(255,225,74,0.55)]"
      >
        {cta.short}
      </Link>
    </div>
  );
}
