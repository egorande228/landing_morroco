"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedMarketLogo } from "@/components/logo";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { moroccoGlobals } from "@/config/morocco.globals";
import { getPlayerHomeContent } from "@/lib/player-home";

const supportLinks = [
  { href: moroccoGlobals.contact.telegram, key: "telegram", image: "/telegram.png" },
  { href: moroccoGlobals.contact.email, key: "mail" },
] as const;

export default function Footer() {
  const { dictionary, language, direction } = useLanguage();
  const home = getPlayerHomeContent(language);

  const homeLinks = [
    { href: "/#games", label: home.nav.games },
    { href: "/#sports", label: home.nav.sports },
    { href: "/#offers", label: home.nav.offers },
    { href: "/#support", label: home.nav.support },
  ];

  const routeLinks = [
    { href: "/", label: dictionary.nav.home },
    { href: "/partner", label: dictionary.nav.joinUs },
    { href: "/about", label: dictionary.nav.aboutUs },
  ];

  return (
    <footer dir={direction} className="px-4 py-10 md:px-6 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-[34px] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-white)_0%,rgba(255,255,255,0.94)_100%)] shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,11,11,0.08),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,158,96,0.06),transparent_24%)]" />

          <div className="relative z-10 px-8 py-10 md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr]">
              <div className="space-y-5">
                <Link href="/" aria-label={dictionary.nav.logo} className="inline-flex">
                  <AnimatedMarketLogo
                    ariaLabel={dictionary.nav.logo}
                    preset="footer"
                    wrapperClassName="inline-flex rounded-full bg-[var(--color-black)] px-3 py-2 shadow-[0_14px_32px_rgba(0,0,0,0.18)]"
                  />
                </Link>
                <p className="max-w-[32rem] text-[15px] leading-7 text-[var(--color-black)]/62">
                  {home.footer.body}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  {home.footer.homeLabel}
                </p>
                <div className="flex flex-col gap-3">
                  {homeLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[15px] text-[var(--color-black)]/68 transition-colors duration-300 hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  {home.footer.routesLabel}
                </p>
                <div className="flex flex-col gap-3">
                  {routeLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[15px] text-[var(--color-black)]/68 transition-colors duration-300 hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  {home.footer.supportLabel}
                </p>
                <div className="flex flex-col gap-3">
                  {supportLinks.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      target={item.key === "telegram" ? "_blank" : undefined}
                      rel={item.key === "telegram" ? "noreferrer" : undefined}
                      className="inline-flex min-h-[44px] items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 text-[15px] text-[var(--color-black)]/72 transition-all duration-300 hover:-translate-y-[1px] hover:border-[var(--color-primary)]/25 hover:text-[var(--color-primary)]"
                    >
                      {"image" in item ? (
                        <Image src={item.image} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                      ) : null}
                      {item.key === "telegram" ? dictionary.finalCta.telegram : dictionary.finalCta.whatsapp}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[var(--color-border)] pt-5 text-[14px] text-[var(--color-black)]/42">
              {dictionary.footer.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
