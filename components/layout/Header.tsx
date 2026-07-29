"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { getPrimaryCta } from "@/config/campaign";
import { nav, navSecondary } from "@/config/routes";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils";

function sectionIdFromHref(href: string) {
  const hash = href.includes("#") ? href.split("#")[1] : href.replace("#", "");
  return hash || "";
}

export function Header() {
  const cta = getPrimaryCta();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = [...nav, ...navSecondary].map((n) => sectionIdFromHref(n.href));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition duration-300",
        scrolled || open
          ? "border-b border-white/8 bg-[#030914]/88 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-[var(--container-max)] items-center justify-between gap-4 px-4">
        <Logo size={40} />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const id = sectionIdFromHref(item.href);
            const isActive = active === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition",
                  isActive
                    ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                    : "text-muted hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={site.tobUrl}
            className="text-sm text-muted transition hover:text-cyan"
            target="_blank"
            rel="noreferrer"
          >
            ToB
          </Link>
          <Button href={cta.href}>{cta.label}</Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-line text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Signal rail under header */}
      <div
        className="pointer-events-none mx-auto hidden h-px max-w-[var(--container-max)] bg-gradient-to-r from-transparent via-cyan/35 to-transparent lg:block"
        aria-hidden
      />

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav"
            className="relative z-50 border-t border-line bg-[#061426]/98 px-4 py-4 lg:hidden"
          >
            <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-1">
              {[...nav, ...navSecondary].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-3 text-sm text-muted hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={site.tobUrl}
                className="rounded-lg px-2 py-3 text-sm text-cyan"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Ir a ToB
              </Link>
              <Button
                href={cta.href}
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                {cta.label}
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
