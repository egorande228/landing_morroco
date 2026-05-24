import { cn } from "@/lib/format";

export default function SectionShell({
  children,
  id,
  density = "default",
  className,
}: {
  children: React.ReactNode;
  id?: string;
  density?: "default" | "tight" | "hero";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-shell",
        density === "tight" && "section-shell--tight",
        density === "hero" && "section-shell--hero",
        className,
      )}
    >
      <div className="container-main">{children}</div>
    </section>
  );
}
