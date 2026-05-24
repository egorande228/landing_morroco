export type MoroccoLocale = "en" | "ar" | "fr";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  iconSrc?: string;
};

export type BrandInfo = {
  eyebrow?: string;
  title: string;
  href: string;
  logoSrc: string;
  logoAlt: string;
};

export type StatItem = {
  label: string;
  value: string;
  note?: string;
};

export interface ThemeTokenTree {
  [key: string]: string | ThemeTokenTree;
}

export type MarketTheme = {
  font: {
    display: string;
    body: string;
  };
  color: ThemeTokenTree;
  shadow: {
    soft: string;
    card: string;
    hero: string;
  };
};

export type DesignTokens = {
  density: "compact" | "balanced" | "editorial";
  containerWidth: string;
  containerX: string;
  sectionY: string;
  sectionYTight: string;
  heroTop: string;
  heroBottom: string;
  gridGap: string;
  cardPadding: string;
  buttonMinHeight: string;
  headerHeight: string;
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    pill: string;
  };
  type: {
    display: string;
    heading: string;
    cardTitle: string;
    bodyLg: string;
    body: string;
    label: string;
    meta: string;
    metric: string;
  };
};

export type CountryPageGlobals = {
  market: string;
  slug: string;
  locales: MoroccoLocale[];
  defaultLocale: MoroccoLocale;
  directionByLocale: Record<MoroccoLocale, "ltr" | "rtl">;
  contact: {
    telegram: string;
    whatsapp: string;
    email: string;
  };
  routes: {
    home: string;
    partnership: string;
    legacyPartnership: string;
    about: string;
  };
  anchors: {
    home: string[];
    partnership: string[];
  };
  design: DesignTokens;
  pages: {
    home: {
      enabledSections: Array<"hero" | "games" | "sports" | "offers" | "finalCta">;
      variants: {
        hero: "tile";
        games: "grid";
        sports: "lead-plus-grid";
        offers: "cards";
      };
      assets: {
        hero: string[];
        games: string[];
        sports: string[];
        offers: string[];
      };
    };
    partnership: {
      enabledSections: Array<"hero" | "benefits" | "steps" | "paths" | "tools" | "finalCta">;
      variants: {
        hero: "split";
        benefits: "glass-grid";
        steps: "cards";
        paths: "choice-cards";
        tools: "showcase";
      };
      assets: {
        hero: string[];
        steps: string[];
        routes: string[];
      };
    };
  };
};

export type HeaderContent = {
  brand: BrandInfo;
  links: LinkItem[];
  primaryCta?: LinkItem;
};

export type FooterContent = {
  brand: string;
  body: string;
  navigationLabel: string;
  navigationLinks: LinkItem[];
  routeLabel: string;
  routeLinks: LinkItem[];
  contactLabel: string;
  contactLinks: LinkItem[];
  legal: string;
};

export type HomeHeroTile = {
  title: string;
  badge: string;
  href: string;
};

export type HomeCard = {
  eyebrow: string;
  title: string;
  body: string;
  badge?: string;
  metric?: string;
  href?: string;
};

export type HomeContent = {
  seo: {
    title: string;
    description: string;
  };
  nav: HeaderContent;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    highlights: string[];
    stats: StatItem[];
    tiles: HomeHeroTile[];
  };
  games: {
    eyebrow: string;
    title: string;
    body: string;
    cards: HomeCard[];
  };
  sports: {
    eyebrow: string;
    title: string;
    body: string;
    lead: HomeCard;
    cards: HomeCard[];
  };
  offers: {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    cards: HomeCard[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: LinkItem;
    secondary: LinkItem;
  };
  footer: FooterContent;
};

export type PartnershipContent = {
  seo: {
    title: string;
    description: string;
  };
  nav: HeaderContent;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: LinkItem;
    secondaryCta?: LinkItem;
    stats: StatItem[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{
      title: string;
      body: string;
      bullets: string[];
    }>;
  };
  steps: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{
      step: string;
      title: string;
      body: string;
    }>;
  };
  paths: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{
      type: "agent" | "partner";
      label: string;
      title: string;
      body: string;
      bullets: string[];
    }>;
  };
  tools: {
    eyebrow: string;
    title: string;
    body: string;
    stats: StatItem[];
    items: Array<{
      title: string;
      body: string;
      tags: string[];
    }>;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: LinkItem;
    secondary: LinkItem;
  };
  footer: FooterContent;
};

export type AboutContent = {
  seo: {
    title: string;
    description: string;
  };
  nav: HeaderContent;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
  };
  pillars: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{
      title: string;
      body: string;
      badge: string;
    }>;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: LinkItem;
    secondary: LinkItem;
  };
  footer: FooterContent;
};
