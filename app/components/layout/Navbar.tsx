"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedMarketLogo } from "@/components/logo";
import { useLanguage } from "../providers/LanguageProvider";
import { getPlayerHomeContent } from "@/lib/player-home";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const languageLabels = {
  en: "EN",
  ar: "AR",
  fr: "FR",
} as const;

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const { language, setLanguage, dictionary, direction } = useLanguage();
  const home = getPlayerHomeContent(language);

  const navItems = [
    { href: "/", label: dictionary.nav.home, active: pathname === "/" },
    { href: "/#games", label: home.nav.games, active: false },
    { href: "/#sports", label: home.nav.sports, active: false },
    { href: "/#offers", label: home.nav.offers, active: false },
    { href: "/about", label: dictionary.nav.aboutUs, active: isActive(pathname, "/about") },
  ];

  return (
    <header
      dir={direction}
      className="sticky top-0 z-50 w-full px-4 pt-4 md:px-6 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative overflow-hidden rounded-[30px] border border-[var(--color-nav-border)] bg-[linear-gradient(180deg,rgba(12,12,12,0.94),rgba(8,8,8,0.84))] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-5">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/45 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-[var(--color-primary-soft)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />

          <div className="relative flex items-center gap-3 lg:gap-5">
            <div className="flex flex-1 items-center">
              <div
                dir="ltr"
                className="relative grid min-h-[44px] min-w-[112px] grid-cols-3 rounded-full border border-white/10 bg-white/[0.04] p-1"
              >
                <span
                  className={[
                    "pointer-events-none absolute bottom-1 top-1 rounded-full bg-[var(--color-primary)] transition-transform duration-300",
                    language === "en"
                      ? "translate-x-0"
                      : language === "ar"
                        ? "translate-x-[100%]"
                        : "translate-x-[200%]",
                  ].join(" ")}
                  style={{ left: 4, width: "calc(33.333% - 4px)" }}
                />

                {(["en", "ar", "fr"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLanguage(item)}
                    className={[
                      "relative z-10 min-h-[34px] rounded-full px-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors",
                      language === item ? "text-black" : "text-white/70 hover:text-white",
                    ].join(" ")}
                  >
                    {languageLabels[item]}
                  </button>
                ))}
              </div>
            </div>

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "inline-flex min-h-[44px] items-center justify-center rounded-full border px-4 text-[15px] font-medium transition-all duration-300",
                    item.active
                      ? "border-[var(--color-primary)]/40 bg-[var(--color-primary-soft)] text-white"
                      : "border-transparent bg-transparent text-white/70 hover:border-white/10 hover:bg-white/[0.05] hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-1 items-center justify-end gap-3">
              <Link
                href="/partner"
                className={[
                  "hidden min-h-[44px] items-center rounded-full border px-4 text-sm font-semibold transition-all duration-300 sm:inline-flex",
                  isActive(pathname, "/partner")
                    ? "border-[var(--color-accent)]/50 bg-[var(--color-accent-soft)] text-white"
                    : "border-white/10 bg-white/[0.04] text-white/84 hover:border-[var(--color-accent)]/35 hover:bg-white/[0.08] hover:text-white",
                ].join(" ")}
              >
                {dictionary.nav.cta}
              </Link>

              <Link href="/" aria-label={dictionary.nav.logo} className="shrink-0">
                <AnimatedMarketLogo ariaLabel={dictionary.nav.logo} preset="header" wrapperClassName="inline-flex" />
              </Link>
            </div>
          </div>

          <div className="relative mt-3 lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "inline-flex min-h-[40px] shrink-0 items-center rounded-full border px-4 text-[14px] font-medium transition-all duration-300",
                    item.active
                      ? "border-[var(--color-primary)]/40 bg-[var(--color-primary-soft)] text-white"
                      : "border-white/10 bg-white/[0.04] text-white/72",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/partner"
                className={[
                  "inline-flex min-h-[40px] shrink-0 items-center rounded-full border px-4 text-[14px] font-medium transition-all duration-300",
                  isActive(pathname, "/partner")
                    ? "border-[var(--color-accent)]/50 bg-[var(--color-accent-soft)] text-white"
                    : "border-white/10 bg-white/[0.04] text-white/72",
                ].join(" ")}
              >
                {dictionary.nav.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
