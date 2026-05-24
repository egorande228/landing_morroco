import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getMoroccoDirection, buildMoroccoLanguageOptions } from "@/lib/locale";
import type { FooterContent, HeaderContent, MoroccoLocale } from "@/schemas/landing";

export default function MarketPageFrame({
  children,
  pathname,
  locale,
  header,
  footer,
}: {
  children: React.ReactNode;
  pathname: string;
  locale: MoroccoLocale;
  header: HeaderContent;
  footer: FooterContent;
}) {
  const direction = getMoroccoDirection(locale);

  return (
    <div className="page-shell" dir={direction} lang={locale}>
      <Header content={header} languages={buildMoroccoLanguageOptions(pathname, locale)} />
      <main className="page-main">{children}</main>
      <Footer content={footer} />
    </div>
  );
}
