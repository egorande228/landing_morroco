import Image from "next/image";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import type { HomeContent } from "@/schemas/landing";

export default function HomeGamesSection({
  content,
  assets,
}: {
  content: HomeContent["games"];
  assets: string[];
}) {
  return (
    <SectionShell id="games" density="tight">
      <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />

      <div className="mt-8 grid gap-[var(--grid-gap)] lg:grid-cols-3">
        {content.cards.map((card, index) => (
          <SurfaceCard key={card.title} variant={index === 1 ? "accent" : "glass"} className="card-stack h-full">
            <div className="media-shell">
              <Image
                src={assets[index] ?? assets[0]}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="media-shell__image media-shell__image--contain"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <p className="eyebrow text-[var(--color-secondary)]">{card.eyebrow}</p>
                {card.metric ? <span className="pill pill--soft">{card.metric}</span> : null}
              </div>
              <h3 className="type-card-title text-[var(--color-foreground)]">{card.title}</h3>
              <p className="type-body text-[var(--color-foreground-soft)]">{card.body}</p>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
