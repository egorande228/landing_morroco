import Image from "next/image";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import type { PartnershipContent } from "@/schemas/landing";

export default function StepsSection({
  content,
  assets,
}: {
  content: PartnershipContent["steps"];
  assets: string[];
}) {
  return (
    <SectionShell id="steps" density="tight">
      <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />

      <div className="mt-8 grid gap-[var(--grid-gap)] lg:grid-cols-3">
        {content.items.map((item, index) => (
          <SurfaceCard key={item.step} variant={index === 1 ? "accent" : "glass"} className="card-stack h-full">
            <div className="media-shell">
              <Image
                src={assets[index] ?? assets[0]}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className="media-shell__image media-shell__image--contain"
              />
            </div>
            <div className="space-y-3">
              <span className="pill w-fit">{item.step}</span>
              <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
              <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
