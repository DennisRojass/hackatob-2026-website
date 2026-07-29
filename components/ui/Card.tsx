import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "outline" | "feature";
  hover?: boolean;
};

export function Card({
  children,
  className,
  variant = "glass",
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "card-gradient relative overflow-hidden p-5 md:p-6",
        hover && "card-glow transition duration-300 hover:-translate-y-1",
        variant === "outline" && "bg-transparent",
        variant === "feature" && "p-6 md:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
