import { moroccoGlobals } from "@/config/morocco.globals";
import type { LinkItem, MoroccoLocale } from "@/schemas/landing";

type SearchParamsRecord = Record<string, string | string[] | undefined>;

function normalizeLocale(value?: string | null): MoroccoLocale {
  return moroccoGlobals.locales.includes(value as MoroccoLocale)
    ? (value as MoroccoLocale)
    : moroccoGlobals.defaultLocale;
}

export function resolveMoroccoLocale(
  searchParams?: SearchParamsRecord | URLSearchParams,
): MoroccoLocale {
  if (!searchParams) return moroccoGlobals.defaultLocale;

  const candidate = searchParams instanceof URLSearchParams
    ? searchParams.get("lang")
    : Array.isArray(searchParams.lang)
      ? searchParams.lang[0]
      : searchParams.lang;

  return normalizeLocale(candidate);
}

export function getMoroccoDirection(locale: MoroccoLocale) {
  return moroccoGlobals.directionByLocale[locale];
}

export function localizeHref(href: string, locale: MoroccoLocale) {
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return href;
  }

  const [pathWithQuery, hash = ""] = href.split("#");
  const [pathname = "/", query = ""] = pathWithQuery.split("?");
  const params = new URLSearchParams(query);
  params.set("lang", locale);
  const queryString = params.toString();

  return `${pathname || "/"}${queryString ? `?${queryString}` : ""}${hash ? `#${hash}` : ""}`;
}

export function localizeLink<T extends LinkItem>(link: T, locale: MoroccoLocale): T {
  return {
    ...link,
    href: localizeHref(link.href, locale),
  };
}

export function localizeLinks<T extends LinkItem>(links: T[], locale: MoroccoLocale) {
  return links.map((link) => localizeLink(link, locale));
}

export function buildMoroccoLanguageOptions(pathname: string, locale: MoroccoLocale) {
  return moroccoGlobals.locales.map((code) => ({
    code,
    label: code.toUpperCase(),
    href: localizeHref(pathname, code),
    active: code === locale,
  }));
}
