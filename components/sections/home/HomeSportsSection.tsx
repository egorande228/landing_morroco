import Image from "next/image";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import type { HomeContent } from "@/schemas/landing";

export default function HomeSportsSection({
  content,
  assets,
}: {
  content: HomeContent["sports"];
  assets: string[];
}) {
  return (
    <SectionShell id="sports" density="tight">
      <div className="grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div className="flex h-full flex-col gap-6">
          <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />

          <SurfaceCard variant="stage" className="sport-lead-card flex-1">
            <div className="media-shell media-shell--wide">
              <Image
                src={assets[0] ?? assets[1]}
                alt={content.lead.title}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="media-shell__image media-shell__image--contain"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <p className="eyebrow text-[var(--color-secondary)]">{content.lead.eyebrow}</p>
                {content.lead.metric ? <span className="pill pill--soft">{content.lead.metric}</span> : null}
              </div>
              <h3 className="text-[clamp(1.25rem,1.9vw,1.55rem)] font-[650] leading-[1.02] tracking-[-0.025em] text-[var(--color-foreground)]">
                {content.lead.title}
              </h3>
            </div>
          </SurfaceCard>
        </div>

        <div className="grid gap-[var(--grid-gap)] sm:grid-cols-2">
          {content.cards.map((card, index) => (
            <SurfaceCard key={`${card.title}-${index}`} variant={index === 2 ? "accent" : "glass"} className="card-stack h-full">
              <div className="media-shell media-shell--square">
                <Image
                  src={assets[index + 1] ?? assets[index] ?? assets[0]}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="media-shell__image media-shell__image--contain"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow text-[var(--color-secondary)]">{card.eyebrow}</p>
                  {card.metric ? <span className="pill pill--soft">{card.metric}</span> : null}
                </div>
                <h3 className="text-[clamp(1rem,1.35vw,1.18rem)] font-[650] leading-[1.06] tracking-[-0.02em] text-[var(--color-foreground)]">
                  {card.title}
                </h3>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
