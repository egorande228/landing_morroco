import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import type { HomeContent } from "@/schemas/landing";

export default function HomeOffersSection({
  content,
  assets,
  ctaHref,
}: {
  content: HomeContent["offers"];
  assets: string[];
  ctaHref: string;
}) {
  return (
    <SectionShell id="offers" density="tight">
      <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} align="start" />

      <div className="mt-8 grid gap-[var(--grid-gap)] lg:grid-cols-3">
        {content.cards.map((card, index) => (
          <SurfaceCard key={card.title} variant="glass" className="offer-card h-full">
            <div className="media-shell">
              <Image
                src={assets[index] ?? assets[0]}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="media-shell__image media-shell__image--contain"
              />
            </div>

            <div className="offer-card__body">
              <div className="flex items-center justify-between gap-3">
                <p className="eyebrow text-[var(--color-secondary)]">{card.eyebrow}</p>
                {card.metric ? <span className="pill">{card.metric}</span> : null}
              </div>
              <div className="space-y-3">
                <h3 className="type-card-title text-[var(--color-foreground)]">{card.title}</h3>
                <p className="type-body text-[var(--color-foreground-soft)]">{card.body}</p>
              </div>
              <Button href={ctaHref} intent={index === 1 ? "primary" : "secondary"} className="mt-auto w-full">
                {content.ctaLabel}
              </Button>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
