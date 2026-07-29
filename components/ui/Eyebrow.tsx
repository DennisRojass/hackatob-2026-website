import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--section-accent)]",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--section-accent)] opacity-35" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--section-accent)] shadow-[0_0_12px_var(--section-accent)]" />
      </span>
      {children}
    </p>
  );
}
