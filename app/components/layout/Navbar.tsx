"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "@/app/components/layout/NavItem";
import { useLanguage } from "../providers/LanguageProvider";

export default function Navbar() {
  const { dictionary } = useLanguage();
  const pathname = usePathname();

  return (
    <header
      dir="ltr"
      className="fixed inset-x-0 top-0 z-50 w-full px-6 pt-4 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-6">
        <Link
          href="/partner"
          aria-label={dictionary.nav.logo}
          className="justify-self-start"
        >
          <div className="relative h-[clamp(22px,2.6vw,30px)] w-[clamp(86px,10vw,124px)]">
            <Image
              src="/logo.png"
              alt={dictionary.nav.logo}
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        <nav
          dir="ltr"
          className="mx-auto flex h-[clamp(48px,6vw,56px)] w-[min(560px,100%)] items-center rounded-full border border-[var(--color-nav-border)] bg-[var(--color-white)] px-1 backdrop-blur-md"
        >
          <Link href="/" className="flex h-full flex-1">
            <NavItem label={dictionary.nav.home} active={pathname === "/"} />
          </Link>

          <Link href="/partner" className="flex h-full flex-1">
            <NavItem
              label={dictionary.nav.joinUs}
              active={pathname === "/partner"}
            />
          </Link>

          <Link href="/about" className="flex h-full flex-1">
            <NavItem
              label={dictionary.nav.aboutUs}
              active={pathname === "/about"}
            />
          </Link>
        </nav>

        <div className="justify-self-end">
          <Link
            href="/partner#final-cta"
            className="text-[clamp(13px,1.4vw,16px)] font-medium leading-none tracking-[-0.03em] text-[var(--color-fg)] transition-colors duration-300 hover:text-[var(--color-accent)]"
          >
            {dictionary.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}