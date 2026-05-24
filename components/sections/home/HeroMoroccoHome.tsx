import Button from "@/components/ui/Button";
import SurfaceCard from "@/components/ui/SurfaceCard";
import SectionShell from "@/components/layout/SectionShell";
import type { HomeContent } from "@/schemas/landing";

export default function HeroMoroccoHome({ content }: { content: HomeContent["hero"] }) {
  return (
    <SectionShell id="top" density="hero">
      <SurfaceCard variant="stage" className="overflow-hidden p-5 sm:p-6 lg:p-8">
        <div className="hero-copy">
          <span className="eyebrow text-[var(--color-secondary)]">{content.eyebrow}</span>
          <h1 className="type-display mx-auto mt-4 max-w-[14ch] text-[var(--color-foreground)]">{content.title}</h1>
          <p className="type-body-lg mx-auto mt-5 max-w-3xl text-[var(--color-foreground-soft)]">{content.body}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
            <Button href={content.secondaryCta.href} intent="secondary">
              {content.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {content.highlights.map((item) => (
              <span key={item} className="pill pill--soft">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="type-meta text-[var(--color-secondary)]">{stat.label}</p>
                <p className="type-metric mt-2 text-[var(--color-foreground)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </SurfaceCard>
    </SectionShell>
  );
}
