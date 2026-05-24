"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatedMarketLogo } from "@/components/logo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/format";
import type { HeaderContent, MoroccoLocale } from "@/schemas/landing";

type LanguageOption = {
  code: MoroccoLocale;
  label: string;
  href: string;
  active: boolean;
};

type HeaderDropdownItem = {
  active?: boolean;
  accent?: boolean;
  external?: boolean;
  href: string;
  label: string;
};

type HeaderDropdownGroup = {
  items: HeaderDropdownItem[];
  label: string;
};

function isExternalLink(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

function normalizeItemPath(href: string) {
  const [withoutHash] = href.split("#");
  const [withoutQuery] = withoutHash.split("?");
  return withoutQuery || "/";
}

function isItemActive(href: string, pathname: string) {
  const itemPath = normalizeItemPath(href);

  if (itemPath === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(itemPath);
}

function buildDropdownGroups(content: HeaderContent, pathname: string): HeaderDropdownGroup[] {
  const homeLinks = content.links.filter((link) => normalizeItemPath(link.href) === "/");
  const partnershipLinks = content.links.filter((link) => normalizeItemPath(link.href).startsWith("/partnership"));
  const aboutLinks = content.links.filter((link) => normalizeItemPath(link.href) === "/about");
  const homeLabel =
    content.links.find((link) => normalizeItemPath(link.href) === "/" && link.href.includes("#top"))?.label ??
    homeLinks[0]?.label ??
    "Home";
  const partnershipLabel =
    content.links.find((link) => normalizeItemPath(link.href) === "/partnership" && link.href.includes("#paths"))?.label ??
    content.links.find((link) => normalizeItemPath(link.href) === "/partnership" && link.href.includes("#top"))?.label ??
    partnershipLinks[0]?.label ??
    "Partnership";
  const aboutLabel =
    aboutLinks[0]?.label ??
    "About Us";

  const groups: HeaderDropdownGroup[] = [
    {
      label: homeLabel,
      items: homeLinks.map((link) => ({
        href: link.href,
        label: link.label,
        active: isItemActive(link.href, pathname),
      })),
    },
    {
      label: partnershipLabel,
      items: [
        ...partnershipLinks.map((link) => ({
          href: link.href,
          label: link.label,
          active: isItemActive(link.href, pathname),
        })),
        ...(content.primaryCta
          ? [
              {
                href: content.primaryCta.href,
                label: content.primaryCta.label,
                external: isExternalLink(content.primaryCta.href),
                accent: true,
              },
            ]
          : []),
      ],
    },
    {
      label: aboutLabel,
      items: aboutLinks.map((link) => ({
        href: link.href,
        label: link.label,
        active: isItemActive(link.href, pathname),
      })),
    },
  ];

  return groups.filter((group) => group.items.length > 0);
}

function closeParentDropdown(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const dropdown = target.closest("details");

  if (dropdown instanceof HTMLDetailsElement) {
    dropdown.open = false;
  }
}

function HeaderDropdown({
  align = "center",
  href,
  items,
  label,
  onToggle,
  open = false,
}: {
  align?: "center" | "end";
  href?: string;
  items: HeaderDropdownItem[];
  label: string;
  onToggle?: () => void;
  open?: boolean;
}) {
  const hasActiveItem = items.some((item) => item.active);

  return (
    <div className={cn("header-dropdown", align === "end" && "header-dropdown--end")}>
      {href ? (
        <Link
          href={href}
          className={cn(
            "header-dropdown__toggle header-dropdown__toggle--link",
            hasActiveItem && "header-dropdown__toggle--current",
            open && "header-dropdown__toggle--open",
          )}
        >
          <span>{label}</span>
        </Link>
      ) : (
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "header-dropdown__toggle header-dropdown__toggle--single",
            hasActiveItem && "header-dropdown__toggle--current",
            open && "header-dropdown__toggle--open",
          )}
          aria-expanded={open}
        >
          <span>{label}</span>
          <span className="header-dropdown__caret" aria-hidden />
        </button>
      )}

      {href ? (
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "header-dropdown__toggle header-dropdown__toggle--icon",
            hasActiveItem && "header-dropdown__toggle--current",
            open && "header-dropdown__toggle--open",
          )}
          aria-expanded={open}
          aria-label={`Open ${label} links`}
        >
          <span className="header-dropdown__caret" aria-hidden />
        </button>
      ) : null}

      {open ? (
        <div className="header-dropdown__panel">
        <div className="header-dropdown__list">
          {items.map((item) => {
            const className = cn(
              "header-dropdown__item",
              item.active && "header-dropdown__item--active",
              item.accent && "header-dropdown__item--accent",
            );

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                  onClick={(event) => closeParentDropdown(event.currentTarget)}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={className}
                onClick={(event) => closeParentDropdown(event.currentTarget)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        </div>
      ) : null}
    </div>
  );
}

export default function Header({
  content,
  languages,
}: {
  content: HeaderContent;
  languages: LanguageOption[];
}) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const activeLanguage = languages.find((option) => option.active) ?? languages[0];
  const dropdownGroups = buildDropdownGroups(content, pathname);
  const languageItems = languages.map((option) => ({
    href: option.href,
    label: option.label,
    active: option.active,
  }));

  useEffect(() => {
    const closeMenu = () => {
      setOpen(false);
      setOpenDropdown(null);
    };

    const closeDesktopDropdown = (event: PointerEvent) => {
      if (!(event.target instanceof HTMLElement)) {
        return;
      }

      if (!event.target.closest(".header-dropdown")) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("hashchange", closeMenu);
    window.addEventListener("resize", closeMenu);
    document.addEventListener("pointerdown", closeDesktopDropdown);

    return () => {
      window.removeEventListener("hashchange", closeMenu);
      window.removeEventListener("resize", closeMenu);
      document.removeEventListener("pointerdown", closeDesktopDropdown);
    };
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="container-main">
        <div className="header-shell">
          <div className="relative flex min-h-[var(--header-height)] items-center gap-4 px-4 py-3 sm:px-5 lg:px-6">
            <Link href={content.brand.href} className="brand-mark shrink-0" dir="ltr" onClick={() => setOpen(false)}>
              <AnimatedMarketLogo
                ariaLabel={content.brand.logoAlt}
                preset="headerIraq"
                randomize={false}
                style={
                  {
                    ["--melbet-width" as string]: "124px",
                    ["--melbet-frame-width" as string]: "144px",
                    ["--melbet-frame-pad-x" as string]: "10px",
                    ["--melbet-frame-pad-y" as string]: "8px",
                  }
                }
                wrapperClassName="inline-flex"
              />
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
              {dropdownGroups.map((group) => (
                <HeaderDropdown
                  key={group.label}
                  href={group.items[0]?.href}
                  label={group.label}
                  items={group.items}
                  open={openDropdown === group.label}
                  onToggle={() =>
                    setOpenDropdown((current) => (current === group.label ? null : group.label))
                  }
                />
              ))}
            </div>

            <div className="ml-auto hidden items-center gap-3 lg:flex">
              <HeaderDropdown
                align="end"
                label={activeLanguage?.label ?? "EN"}
                items={languageItems}
                open={openDropdown === "language"}
                onToggle={() =>
                  setOpenDropdown((current) => (current === "language" ? null : "language"))
                }
              />
            </div>

            <div className="ml-auto flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="header-toggle"
                aria-expanded={open}
                aria-controls="header-mobile-menu"
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>

          {open ? (
            <div className="relative lg:hidden">
              <div id="header-mobile-menu" className="header-menu">
                <div className="grid gap-2 pt-4">
                  {content.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "header-menu__link rounded-[18px] border border-white/6 bg-white/[0.03] px-4 py-3 text-sm font-semibold transition-colors",
                        isItemActive(link.href, pathname)
                          ? "text-[var(--color-text-base)]"
                          : "text-[var(--color-text-soft)] hover:text-[var(--color-text-base)]",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div dir="ltr" className="language-switch mobile-language-switch pt-2">
                    {languages.map((option) => (
                      <Link
                        key={option.code}
                        href={option.href}
                        className={cn("language-switch__button", option.active && "language-switch__button--active")}
                        onClick={() => setOpen(false)}
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>

                  {content.primaryCta ? (
                    <Button
                      href={content.primaryCta.href}
                      external={isExternalLink(content.primaryCta.href)}
                      className="w-full"
                    >
                      {content.primaryCta.label}
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
