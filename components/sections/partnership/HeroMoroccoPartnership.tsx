import AffiliateDashboardStage from "@/components/sections/partnership/AffiliateDashboardStage";
import Button from "@/components/ui/Button";
import SurfaceCard from "@/components/ui/SurfaceCard";
import SectionShell from "@/components/layout/SectionShell";
import type { MoroccoLocale, PartnershipContent } from "@/schemas/landing";

export default function HeroMoroccoPartnership({
  content,
  locale,
}: {
  content: PartnershipContent["hero"];
  locale: MoroccoLocale;
}) {
  return (
    <SectionShell id="top" density="hero">
      <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <SurfaceCard variant="stage" className="hero-partnership-copy">
          <span className="eyebrow text-[var(--color-secondary)]">{content.eyebrow}</span>
          <h1 className="type-display mt-4 max-w-[12ch] text-[var(--color-foreground)]">{content.title}</h1>
          <p className="type-body-lg mt-5 max-w-2xl text-[var(--color-foreground-soft)]">{content.body}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={content.primaryCta.href} external={content.primaryCta.external}>
              {content.primaryCta.label}
            </Button>
            {content.secondaryCta ? (
              <Button href={content.secondaryCta.href} external={content.secondaryCta.external} intent="secondary">
                {content.secondaryCta.label}
              </Button>
            ) : null}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="type-meta text-[var(--color-secondary)]">{stat.label}</p>
                <p className="type-metric mt-2 text-[var(--color-foreground)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard variant="glass" className="hero-partnership-stage">
          <AffiliateDashboardStage locale={locale} stats={content.stats} />
        </SurfaceCard>
      </div>
    </SectionShell>
  );
}
