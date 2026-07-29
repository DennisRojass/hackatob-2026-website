"use client";

import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/content/brand-assets";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  showWordmark?: boolean;
  showPoweredBy?: boolean;
  size?: number;
};

export function Logo({
  className,
  href = "/",
  showWordmark = true,
  showPoweredBy = true,
  size = 44,
}: LogoProps) {
  const mark = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className="relative grid place-items-center"
        style={{ width: size, height: size }}
      >
        <Image
          src={brandAssets.hackatobIsotipo}
          alt=""
          width={size}
          height={size}
          className="relative z-10 object-contain"
          priority
        />
      </span>
      {showWordmark && (
        <span className="leading-tight">
          <span className="font-display block text-sm font-bold tracking-wide text-white md:text-[15px]">
            HackaToB
          </span>
          {showPoweredBy ? (
            <span className="mt-0.5 block text-[10px] uppercase tracking-[0.14em] text-muted">
              by <span className="font-semibold text-cyan">Technology on Business</span>
            </span>
          ) : null}
        </span>
      )}
    </span>
  );

  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
      aria-label="HackaToB by Technology on Business"
    >
      {mark}
    </Link>
  );
}
