"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getMoroccoAboutContent, getMoroccoHomeContent, getMoroccoPartnershipContent } from "@/content/markets/morocco";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { buildMoroccoLanguageOptions, getMoroccoDirection, resolveMoroccoLocale } from "@/lib/locale";

export default function MarketPageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const locale = resolveMoroccoLocale(searchParams);
  const direction = getMoroccoDirection(locale);
  const isPartnershipPage = pathname.startsWith("/partnership");
  const isAboutPage = pathname.startsWith("/about");

  const content = isPartnershipPage
    ? getMoroccoPartnershipContent(locale)
    : isAboutPage
      ? getMoroccoAboutContent(locale)
      : getMoroccoHomeContent(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [direction, locale]);

  return (
    <div className="page-shell" dir={direction} lang={locale}>
      <Header content={content.nav} languages={buildMoroccoLanguageOptions(pathname, locale)} />
      <main className="page-main">{children}</main>
      <Footer content={content.footer} />
    </div>
  );
}
