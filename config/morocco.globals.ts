import type { CountryPageGlobals } from "@/schemas/landing";
import { createCssVars } from "@/themes/base";

export const moroccoGlobals: CountryPageGlobals = {
  market: "Morocco",
  slug: "morocco",
  locales: ["en", "ar", "fr"],
  defaultLocale: "en",
  directionByLocale: {
    en: "ltr",
    ar: "rtl",
    fr: "ltr",
  },
  contact: {
    telegram: "https://t.me/TeamCash_MENA",
    whatsapp: "mailto:PAYPARTNERS-NORTHAFRICA@MELBET.COM",
    email: "mailto:PAYPARTNERS-NORTHAFRICA@MELBET.COM",
  },
  routes: {
    home: "/",
    partnership: "/partnership",
    legacyPartnership: "/partner",
    about: "/about",
  },
  anchors: {
    home: ["top", "games", "sports", "offers"],
    partnership: ["top", "benefits", "steps", "paths", "final-cta"],
  },
  design: {
    density: "balanced",
    containerWidth: "1180px",
    containerX: "clamp(16px, 4vw, 40px)",
    sectionY: "clamp(3.2rem, 6.8vw, 5rem)",
    sectionYTight: "clamp(2.2rem, 4.5vw, 3.2rem)",
    heroTop: "clamp(3.8rem, 7vw, 5.5rem)",
    heroBottom: "clamp(2.4rem, 4.8vw, 3.5rem)",
    gridGap: "clamp(0.9rem, 1.8vw, 1.35rem)",
    cardPadding: "clamp(1rem, 1.8vw, 1.35rem)",
    buttonMinHeight: "48px",
    headerHeight: "70px",
    radius: {
      sm: "14px",
      md: "20px",
      lg: "28px",
      xl: "36px",
      pill: "999px",
    },
    type: {
      display: "clamp(2.8rem, 5.8vw, 5.25rem)",
      heading: "clamp(2rem, 3.8vw, 3.5rem)",
      cardTitle: "clamp(1.1rem, 1.7vw, 1.4rem)",
      bodyLg: "clamp(1rem, 1.4vw, 1.12rem)",
      body: "0.98rem",
      label: "0.75rem",
      meta: "0.72rem",
      metric: "clamp(1.6rem, 2.8vw, 2.4rem)",
    },
  },
  pages: {
    home: {
      enabledSections: ["hero", "games", "sports", "offers", "finalCta"],
      variants: {
        hero: "tile",
        games: "grid",
        sports: "lead-plus-grid",
        offers: "cards",
      },
      assets: {
        hero: [
          "/morocco/home/hero/hero-01.png",
          "/morocco/home/hero/hero-02.png",
          "/morocco/home/hero/hero-03.png",
        ],
        games: [
          "/morocco/home/games/casino.png",
          "/morocco/home/games/slots.png",
          "/morocco/home/games/instant.png",
        ],
        sports: [
          "/morocco/home/sports/lead.png",
          "/morocco/home/sports/football.png",
          "/morocco/home/sports/basketball.png",
          "/morocco/home/sports/tennis.png",
          "/morocco/home/sports/event.png",
        ],
        offers: [
          "/morocco/home/offers/welcome.png",
          "/morocco/home/offers/boost.png",
          "/morocco/home/offers/cashback.png",
        ],
      },
    },
    partnership: {
      enabledSections: ["hero", "benefits", "steps", "paths", "finalCta"],
      variants: {
        hero: "split",
        benefits: "glass-grid",
        steps: "cards",
        paths: "choice-cards",
        tools: "showcase",
      },
      assets: {
        hero: ["/morocco/partnership/hero/hero-stage.png"],
        steps: [
          "/morocco/partnership/steps/route.png",
          "/morocco/partnership/steps/model.png",
          "/morocco/partnership/steps/lunch.png",
        ],
        routes: [
          "/morocco/partnership/routes/agent.png",
          "/morocco/partnership/routes/partner.png",
        ],
      },
    },
  },
};

export const moroccoGlobalVars = createCssVars(moroccoGlobals.design);
