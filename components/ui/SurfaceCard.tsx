import { cn } from "@/lib/format";

export default function SurfaceCard({
  children,
  variant = "glass",
  className,
}: {
  children: React.ReactNode;
  variant?: "glass" | "accent" | "stage" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "surface",
        variant === "glass" && "surface--glass",
        variant === "accent" && "surface--accent",
        variant === "stage" && "surface--stage",
        variant === "light" && "surface--light",
        className,
      )}
    >
      {children}
    </div>
  );
}
