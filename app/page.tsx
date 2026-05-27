import type { Metadata } from "next";
import MarketPageFrame from "@/components/layout/MarketPageFrame";
import FinalCtaSection from "@/components/sections/partnership/FinalCtaSection";
import HeroMoroccoHome from "@/components/sections/home/HeroMoroccoHome";
import HomeGamesSection from "@/components/sections/home/HomeGamesSection";
import HomeOffersSection from "@/components/sections/home/HomeOffersSection";
import HomeSportsSection from "@/components/sections/home/HomeSportsSection";
import { moroccoGlobals } from "@/config/morocco.globals";
import { getMoroccoHomeContent } from "@/content/markets/morocco";
import { REFERRAL_LINKS } from "@/lib/links";
import { resolveMoroccoLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const defaultContent = getMoroccoHomeContent("en");

export const metadata: Metadata = {
  title: defaultContent.seo.title,
  description: defaultContent.seo.description,
};

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const locale = resolveMoroccoLocale(resolvedSearchParams);
  const content = getMoroccoHomeContent(locale);
  const assets = moroccoGlobals.pages.home.assets;
  const enabled = new Set(moroccoGlobals.pages.home.enabledSections);

  return (
    <MarketPageFrame pathname="/" locale={locale} header={content.nav} footer={content.footer}>
      {enabled.has("hero") ? <HeroMoroccoHome content={content.hero} /> : null}
      {enabled.has("games") ? <HomeGamesSection content={content.games} assets={assets.games} /> : null}
      {enabled.has("sports") ? <HomeSportsSection content={content.sports} assets={assets.sports} /> : null}
      {enabled.has("offers") ? (
        <HomeOffersSection
          content={content.offers}
          assets={assets.offers}
          ctaHref={REFERRAL_LINKS.default}
        />
      ) : null}
      {enabled.has("finalCta") ? (
        <FinalCtaSection content={content.finalCta} id="support" />
      ) : null}
    </MarketPageFrame>
  );
}
