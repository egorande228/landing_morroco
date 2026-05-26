import Button from "@/components/ui/Button";
import SurfaceCard from "@/components/ui/SurfaceCard";
import SectionShell from "@/components/layout/SectionShell";
import { moroccoGlobals } from "@/config/morocco.globals";
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
          <div className="mx-auto mt-5 w-full max-w-[360px] rounded-[18px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/48">
              For partnership contact
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={moroccoGlobals.contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.06] px-4 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.09]"
              >
                Telegram
              </a>
              <a
                href={moroccoGlobals.contact.email}
                className="inline-flex min-h-[42px] items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.06] px-4 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.09]"
              >
                Mail
              </a>
            </div>
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
