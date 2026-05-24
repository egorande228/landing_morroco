import type { Metadata } from "next";
import MarketPageFrame from "@/components/layout/MarketPageFrame";
import Button from "@/components/ui/Button";
import FinalCtaSection from "@/components/sections/partnership/FinalCtaSection";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { getMoroccoAboutContent } from "@/content/markets/morocco";
import { resolveMoroccoLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const defaultContent = getMoroccoAboutContent("en");

export const metadata: Metadata = {
  title: defaultContent.seo.title,
  description: defaultContent.seo.description,
};

export default async function AboutPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const locale = resolveMoroccoLocale(resolvedSearchParams);
  const content = getMoroccoAboutContent(locale);

  return (
    <MarketPageFrame pathname="/about" locale={locale} header={content.nav} footer={content.footer}>
      <SectionShell id="top" density="hero">
        <SurfaceCard variant="stage" className="cta-panel">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--color-secondary)]">{content.hero.eyebrow}</p>
            <h1 className="type-display mt-4 max-w-[13ch] text-[var(--color-foreground)]">{content.hero.title}</h1>
            <p className="type-body-lg mt-5 text-[var(--color-foreground-soft)]">{content.hero.body}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={content.hero.primaryCta.href}>
              {content.hero.primaryCta.label}
            </Button>
            <Button href={content.hero.secondaryCta.href} intent="secondary">
              {content.hero.secondaryCta.label}
            </Button>
          </div>
        </SurfaceCard>
      </SectionShell>

      <SectionShell density="tight">
        <SectionHeader
          eyebrow={content.pillars.eyebrow}
          title={content.pillars.title}
          body={content.pillars.body}
        />

        <div className="mt-8 grid gap-[var(--grid-gap)] lg:grid-cols-3">
          {content.pillars.items.map((item, index) => (
            <SurfaceCard key={item.title} variant={index === 1 ? "accent" : "glass"} className="card-stack h-full">
              <span className="pill w-fit">{item.badge}</span>
              <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
              <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <FinalCtaSection content={content.finalCta} />
    </MarketPageFrame>
  );
}
