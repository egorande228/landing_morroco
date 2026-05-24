import { cn } from "@/lib/format";

export default function SectionHeader({
  eyebrow,
  title,
  body,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "section-header",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-start",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow text-[var(--color-secondary)]">{eyebrow}</p> : null}
      <h2 className="type-heading mt-3 text-[var(--color-foreground)]">{title}</h2>
      {body ? <p className="type-body-lg mt-4 text-[var(--color-foreground-soft)]">{body}</p> : null}
    </div>
  );
}
