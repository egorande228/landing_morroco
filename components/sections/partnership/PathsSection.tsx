import Image from "next/image";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import type { PartnershipContent } from "@/schemas/landing";

export default function PathsSection({
  content,
  assets,
}: {
  content: PartnershipContent["paths"];
  assets: string[];
}) {
  return (
    <SectionShell id="paths" density="tight">
      <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />

      <div className="mt-8 grid gap-[var(--grid-gap)] lg:grid-cols-2">
        {content.items.map((item, index) => (
          <SurfaceCard key={item.title} variant={index === 0 ? "glass" : "accent"} className="card-stack h-full">
            <div className="media-shell media-shell--route">
              <Image
                src={assets[index] ?? assets[0]}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="media-shell__image media-shell__image--contain"
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="pill">{item.label}</span>
              <span className="type-meta text-[var(--color-secondary)]">{`0${index + 1}`}</span>
            </div>
            <div className="space-y-3">
              <h3 className="type-heading text-[var(--color-foreground)]">{item.title}</h3>
              <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
            </div>
            <ul className="grid gap-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="feature-row">
                  <span className="feature-row__dot" aria-hidden />
                  <span className="type-body text-[var(--color-foreground)]">{bullet}</span>
                </li>
              ))}
            </ul>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
