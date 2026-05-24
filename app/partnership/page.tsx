import type { Metadata } from "next";
import MarketPageFrame from "@/components/layout/MarketPageFrame";
import BenefitsSection from "@/components/sections/partnership/BenefitsSection";
import FinalCtaSection from "@/components/sections/partnership/FinalCtaSection";
import HeroMoroccoPartnership from "@/components/sections/partnership/HeroMoroccoPartnership";
import PathsSection from "@/components/sections/partnership/PathsSection";
import StepsSection from "@/components/sections/partnership/StepsSection";
import { moroccoGlobals } from "@/config/morocco.globals";
import { getMoroccoPartnershipContent } from "@/content/markets/morocco";
import { resolveMoroccoLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const defaultContent = getMoroccoPartnershipContent("en");

export const metadata: Metadata = {
  title: defaultContent.seo.title,
  description: defaultContent.seo.description,
};

export default async function PartnershipPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const locale = resolveMoroccoLocale(resolvedSearchParams);
  const content = getMoroccoPartnershipContent(locale);
  const assets = moroccoGlobals.pages.partnership.assets;
  const enabled = new Set(moroccoGlobals.pages.partnership.enabledSections);

  return (
      <MarketPageFrame pathname="/partnership" locale={locale} header={content.nav} footer={content.footer}>
      {enabled.has("hero") ? (
        <HeroMoroccoPartnership content={content.hero} locale={locale} />
      ) : null}
      {enabled.has("benefits") ? <BenefitsSection content={content.benefits} /> : null}
      {enabled.has("steps") ? <StepsSection content={content.steps} assets={assets.steps} /> : null}
      {enabled.has("paths") ? <PathsSection content={content.paths} assets={assets.routes} /> : null}
      {enabled.has("finalCta") ? <FinalCtaSection content={content.finalCta} /> : null}
    </MarketPageFrame>
  );
}
