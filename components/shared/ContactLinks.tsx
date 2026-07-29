import Link from "next/link";
import { AtSign, ExternalLink, Mail, MessageCircle } from "lucide-react";
import { social } from "@/lib/content/site";
import { cn } from "@/lib/utils";

function isUsableUrl(value: string) {
  if (!value || !value.trim()) return false;
  if (/X{3,}|placeholder|example\.com/i.test(value)) return false;
  return true;
}

export function ContactLinks({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const links = [
    {
      label: "Correo ToB",
      href: `mailto:${social.emailMain}`,
      detail: social.emailMain,
      icon: Mail,
      show: true,
    },
    {
      label: "Innovación",
      href: `mailto:${social.emailInnovation}`,
      detail: social.emailInnovation,
      icon: Mail,
      show: true,
    },
    {
      label: "WhatsApp",
      href: social.whatsapp,
      detail: "Escribir por WhatsApp",
      icon: MessageCircle,
      external: true,
      show: isUsableUrl(social.whatsapp),
    },
    {
      label: "Instagram",
      href: social.instagram,
      detail: "Instagram",
      icon: AtSign,
      external: true,
      show: isUsableUrl(social.instagram),
    },
    {
      label: "LinkedIn",
      href: social.linkedin,
      detail: "Technology on Business",
      icon: ExternalLink,
      external: true,
      show: isUsableUrl(social.linkedin),
    },
  ].filter((l) => l.show);

  return (
    <div
      className={cn(
        compact
          ? "flex flex-wrap gap-2"
          : "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label + item.href}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className={cn(
              "group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-0.5 hover:border-cyan/35 hover:bg-white/[0.06]",
              compact ? "px-3 py-2" : "p-4",
            )}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan/25 bg-cyan/10 text-cyan">
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {item.label}
              </span>
              <span className="mt-0.5 block truncate text-sm text-white group-hover:text-cyan">
                {item.detail}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
