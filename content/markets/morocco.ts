import { moroccoGlobals } from "@/config/morocco.globals";
import { getDirection, getDictionary, type Language } from "@/lib/dictionary";
import { getPlayerHomeContent } from "@/lib/player-home";
import { localizeHref, localizeLink, localizeLinks } from "@/lib/locale";
import type {
  AboutContent,
  FooterContent,
  HeaderContent,
  HomeContent,
  LinkItem,
  MoroccoLocale,
  PartnershipContent,
} from "@/schemas/landing";

type LocaleRecord<T> = Record<MoroccoLocale, T>;

const aff_link = "/#games";

const partnershipNavLabels: LocaleRecord<{
  steps: string;
}> = {
  en: {
    steps: "Steps",
  },
  ar: {
    steps: "الخطوات",
  },
  fr: {
    steps: "Etapes",
  },
};

const offerCtaLabels: LocaleRecord<string> = {
  en: "See the offer",
  ar: "شاهد العرض",
  fr: "Voir l'offre",
};

function buildBrand(locale: MoroccoLocale) {
  const home = getPlayerHomeContent(locale);

  return {
    eyebrow: home.hero.eyebrow,
    title: `${moroccoGlobals.market} Market`,
    href: moroccoGlobals.routes.home,
    logoSrc: "/logo.png",
    logoAlt: `${moroccoGlobals.market} Market`,
  };
}

function buildHomeHeader(locale: MoroccoLocale): HeaderContent {
  const home = getPlayerHomeContent(locale);
  const dictionary = getDictionary(locale);

  return {
    brand: buildBrand(locale),
    links: localizeLinks(
      [
        { label: dictionary.nav.home, href: "/#top" },
        { label: home.nav.games, href: "/#games" },
        { label: home.nav.sports, href: "/#sports" },
        { label: home.nav.offers, href: "/#offers" },
        { label: dictionary.nav.joinUs, href: "/partnership#top" },
        { label: dictionary.nav.aboutUs, href: "/about" },
      ],
      locale,
    ),
    primaryCta: localizeLink(
      {
        label: dictionary.nav.cta,
        href: "/partnership#final-cta",
      },
      locale,
    ),
  };
}

function buildPartnershipHeader(locale: MoroccoLocale): HeaderContent {
  const dictionary = getDictionary(locale);
  const labels = partnershipNavLabels[locale];

  return {
    brand: buildBrand(locale),
    links: localizeLinks(
      [
        { label: dictionary.nav.home, href: "/#top" },
        { label: dictionary.whyUs.badge, href: "/partnership#benefits" },
        { label: labels.steps, href: "/partnership#steps" },
        { label: dictionary.nav.joinUs, href: "/partnership#paths" },
        { label: dictionary.nav.aboutUs, href: "/about" },
      ],
      locale,
    ),
    primaryCta: localizeLink(
      {
        label: dictionary.nav.cta,
        href: "/partnership#final-cta",
      },
      locale,
    ),
  };
}

function buildFooter(locale: MoroccoLocale, routeLabel: string, bodyOverride?: string): FooterContent {
  const home = getPlayerHomeContent(locale);
  const dictionary = getDictionary(locale);

  return {
    brand: `${moroccoGlobals.market} Market`,
    body: bodyOverride ?? home.footer.body,
    navigationLabel: home.footer.homeLabel,
    navigationLinks: localizeLinks(
      [
        { label: dictionary.nav.home, href: "/#top" },
        { label: home.nav.games, href: "/#games" },
        { label: home.nav.sports, href: "/#sports" },
        { label: home.nav.offers, href: "/#offers" },
      ],
      locale,
    ),
    routeLabel,
    routeLinks: localizeLinks(
      [
        { label: dictionary.nav.home, href: "/" },
        { label: dictionary.nav.joinUs, href: "/partnership" },
        { label: dictionary.nav.aboutUs, href: "/about" },
      ],
      locale,
    ),
    contactLabel: home.footer.supportLabel,
    contactLinks: [
      {
        label: dictionary.finalCta.telegram,
        href: moroccoGlobals.contact.telegram,
        external: true,
        iconSrc: "/telegram.png",
      },
      {
        label: dictionary.finalCta.whatsapp,
        href: moroccoGlobals.contact.whatsapp,
        external: false,
      },
    ],
    legal: dictionary.footer.copyright,
  };
}

const extraPartnershipByLocale: LocaleRecord<{
  steps: PartnershipContent["steps"];
  tools: PartnershipContent["tools"];
  about: AboutContent;
}> = {
  en: {
    steps: {
      eyebrow: "Steps",
      title: "Start the right partnership conversation in three simple steps.",
      body:
        "Tell us how you want to work, review the route that fits, and move toward launch with direct support instead of guesswork.",
      items: [
        {
          step: "01",
          title: "Tell us how you want to work",
          body: "Share whether you are bringing traffic, managing a community, or supporting local player payments so the team can guide you to the right route.",
        },
        {
          step: "02",
          title: "Review the deal and support model",
          body: "Talk through tracking, promo tools, local workflow, and the kind of commercial setup that matches your role and volume.",
        },
        {
          step: "03",
          title: "Launch with a manager behind you",
          body: "Move into onboarding with a clear contact, practical next steps, and support that keeps early activity on track.",
        },
      ],
    },
    tools: {
      eyebrow: "Tools",
      title: "Get the tools and visibility needed to grow the route seriously.",
      body:
        "From promo assets and tracking to direct contact and local workflow support, the setup is made to help you move, measure, and improve.",
      stats: [
        { label: "Work routes", value: "2" },
        { label: "Deal options", value: "Flexible" },
        { label: "Manager contact", value: "Direct" },
      ],
      items: [
        {
          title: "Promo tools and private codes",
          body: "Run campaigns with branded materials, promo codes, and cleaner traffic direction for your audience.",
          tags: ["promo codes", "marketing tools", "audience growth"],
        },
        {
          title: "Performance tracking",
          body: "Follow registrations, activity, and deal performance without relying on guesswork or delayed updates.",
          tags: ["tracking", "reporting", "clear visibility"],
        },
        {
          title: "Local workflow support",
          body: "Handle the day-to-day route with faster contact, practical guidance, and support that matches the market.",
          tags: ["manager support", "local workflow", "faster follow-up"],
        },
      ],
    },
    about: {
      seo: {
        title: "Morocco Market | Why Players and Partners Choose MELBET",
        description:
          "See how Morocco Market combines live sports, casino play, daily offers, and real partnership routes in one focused experience.",
      },
      nav: buildHomeHeader("en"),
      hero: {
        eyebrow: "About Morocco Market",
        title: "Built for players who want action and partners who want a real route to grow.",
        body:
          "Morocco Market brings live football, casino discovery, player offers, and direct partner support into one place so both sides can move faster.",
        primaryCta: { label: "See partnership routes", href: "/partnership#top" },
        secondaryCta: { label: "See player offers", href: "/#top" },
      },
      pillars: {
        eyebrow: "Why it works",
        title: "Two audiences, one clear market direction.",
        body:
          "Players get fast access to sports, games, and offers, while partners and agents get direct routes, clearer support, and faster contact.",
        items: [
          {
            badge: "Players",
            title: "Fast entry for sports and casino traffic",
            body: "Football, casino, instant games, and bonus-led offers stay easy to explore from the first scroll.",
          },
          {
            badge: "Partners",
            title: "A clearer route for promoters, agents, and local operators",
            body: "Whether you bring traffic or handle local player support, the path stays easier to understand and quicker to start.",
          },
          {
            badge: "Support",
            title: "Direct contact when you are ready to move",
            body: "Telegram and email stay visible so the next step feels immediate when you are ready to move.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next step",
        title: "Choose your route and speak with the team when you are ready.",
        body:
          "Move to the player side for action, or open the partnership route if you want to grow with MELBET in Morocco.",
        primary: {
          label: "Telegram",
          href: moroccoGlobals.contact.telegram,
          external: true,
        },
        secondary: {
          label: "Mail",
          href: moroccoGlobals.contact.whatsapp,
          external: false,
        },
      },
      footer: buildFooter("en", "Explore", "Live sports, daily offers, and partnership routes stay one message away."),
    },
  },
  fr: {
    steps: {
      eyebrow: "Etapes",
      title: "Passez du premier contact au lancement en trois etapes plus claires.",
      body:
        "Le nouveau profil Maroc garde l'onboarding plus lisible, plus serre, et plus simple a reproduire pour les prochains marches.",
      items: [
        {
          step: "01",
          title: "Partagez votre route",
          body: "Dites si vous avancez comme agent ou partenaire pour garder le bon cadre des le debut.",
        },
        {
          step: "02",
          title: "Validez le fit commercial",
          body: "Revue du support, de la direction revenu, et des attentes avant de finaliser les assets de lancement.",
        },
        {
          step: "03",
          title: "Lancez avec un reporting propre",
          body: "Demarrez avec une structure plus nette, un flux contact plus clair, et une base plus simple a etendre.",
        },
      ],
    },
    tools: {
      eyebrow: "Outils",
      title: "Gardez la page business pratique, pas decorative.",
      body:
        "Le Maroc obtient maintenant un bloc de preuve plus propre au lieu d'une simple zone placeholder.",
      stats: [
        { label: "Densite", value: "Balanced" },
        { label: "Systeme slots", value: "PNG ready" },
        { label: "Modeles", value: "2 paths" },
      ],
      items: [
        {
          title: "Visibilite reporting",
          body: "Une seule coque claire pour le statut, la progression, et la communication.",
          tags: ["tracking", "structure claire", "revue rapide"],
        },
        {
          title: "Slots assets reutilisables",
          body: "Les PNG pays vivent maintenant dans des emplacements predictibles pour reduire les edits JSX.",
          tags: ["png slots", "remplacement simple", "production sure"],
        },
        {
          title: "Identite locale par theme",
          body: "Le style Maroc reste local pendant que la structure et le sizing restent stables.",
          tags: ["theme local", "structure partagee", "moins d'edits"],
        },
      ],
    },
    about: {
      seo: {
        title: "Morocco Market | A propos du build",
        description:
          "Comprendre comment la page Maroc separe identite locale, structure reutilisable, et slots PNG pour la suite.",
      },
      nav: buildHomeHeader("fr"),
      hero: {
        eyebrow: "A propos de ce build",
        title: "Une structure Maroc plus propre pour la production repetee.",
        body:
          "Cette version sert a tester le nouveau profil: globals locaux pour la structure, theme local pour l'identite, et slots PNG prets a remplacer.",
        primaryCta: { label: "Voir la page partenariat", href: "/partnership#top" },
        secondaryCta: { label: "Voir la page joueurs", href: "/#top" },
      },
      pillars: {
        eyebrow: "Ce qui change",
        title: "La page separe maintenant plus proprement structure, style, et assets de remplacement.",
        body:
          "Au lieu de melanger visuels, copy et layout, le Maroc suit maintenant un systeme plus simple a repliquer.",
        items: [
          {
            badge: "Globals",
            title: "La structure reste locale a la page",
            body: "Ordre des sections, sizing, ancres, et chemins PNG sont regroupes dans un seul fichier clair.",
          },
          {
            badge: "Theme",
            title: "L'identite reste locale",
            body: "Le rouge-vert national reste dans le theme Maroc au lieu de contaminer la structure partagee.",
          },
          {
            badge: "Assets",
            title: "Les remplacements PNG deviennent simples",
            body: "Chaque image future a deja une vraie route, ce qui reduit les edits plus tard.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Prochaine etape",
        title: "Reutilisez le meme modele pour le prochain marche avec moins d'effort.",
        body:
          "Une fois ce test Maroc valide, le meme schema peut etre reproduit avec seulement theme local, contenu, et PNG remplaces.",
        primary: { label: "Telegram", href: moroccoGlobals.contact.telegram, external: true },
        secondary: { label: "Mail", href: moroccoGlobals.contact.whatsapp, external: false },
      },
      footer: buildFooter("fr", "Routes"),
    },
  },
  ar: {
    steps: {
      eyebrow: "الخطوات",
      title: "انتقل من أول تواصل إلى الإطلاق عبر ثلاث خطوات أوضح.",
      body:
        "الملف الجديد للمغرب يجعل التهيئة أوضح وأضيق وأسهل في التكرار عند إنتاج صفحات جديدة لاحقاً.",
      items: [
        {
          step: "01",
          title: "شارك مسارك",
          body: "حدد هل تتحرك كوكيل أو كشريك حتى يبقى الإطار الصحيح واضحاً من البداية.",
        },
        {
          step: "02",
          title: "أكد الملاءمة التجارية",
          body: "راجع نموذج الدعم واتجاه الربح وتوقعات التشغيل قبل اعتماد أصول الإطلاق النهائية.",
        },
        {
          step: "03",
          title: "أطلق مع تقارير أنظف",
          body: "ابدأ ببنية أوضح وتدفق تواصل أبسط وقاعدة أسهل للتوسع في الأسواق القادمة.",
        },
      ],
    },
    tools: {
      eyebrow: "الأدوات",
      title: "اجعل الصفحة التجارية عملية وليست زخرفية فقط.",
      body:
        "المغرب يملك الآن كتلة عرض أوضح بدلاً من قسم تجريبي ضعيف، حتى تشرح الصفحة الدعم والرؤية بشكل فعلي.",
      stats: [
        { label: "الكثافة", value: "Balanced" },
        { label: "نظام الملفات", value: "PNG ready" },
        { label: "المسارات", value: "2 paths" },
      ],
      items: [
        {
          title: "وضوح التقارير",
          body: "غلاف واضح واحد للحالة والتقدم والتواصل بدلاً من تشتيت الدليل عبر أقسام متفرقة.",
          tags: ["tracking", "بنية أنظف", "مراجعة أسرع"],
        },
        {
          title: "خانات PNG قابلة لإعادة الاستخدام",
          body: "صور كل بلد أصبحت داخل مسارات متوقعة، وهذا يقلل الحاجة لتعديل JSX عند الاستبدال.",
          tags: ["png slots", "استبدال بسيط", "إنتاج آمن"],
        },
        {
          title: "هوية محلية عبر الثيم",
          body: "يبقى الطابع الأحمر والأخضر محلياً داخل الثيم بينما تظل البنية والمقاسات ثابتة للتوسع.",
          tags: ["ثيم محلي", "بنية مشتركة", "تعديلات أقل"],
        },
      ],
    },
    about: {
      seo: {
        title: "Morocco Market | عن هذا البناء",
        description:
          "تعرف على طريقة فصل الهوية المحلية عن البنية القابلة لإعادة الاستخدام وخانات PNG في صفحة المغرب.",
      },
      nav: buildHomeHeader("ar"),
      hero: {
        eyebrow: "عن هذا البناء",
        title: "بنية مغربية أنظف ومهيأة للإنتاج المتكرر.",
        body:
          "هذه النسخة تختبر الملف الجديد: globals محلية للبنية، theme محلي للهوية، وخانات PNG حقيقية جاهزة للاستبدال لاحقاً.",
        primaryCta: { label: "راجع صفحة الشراكة", href: "/partnership#top" },
        secondaryCta: { label: "شاهد صفحة اللاعبين", href: "/#top" },
      },
      pillars: {
        eyebrow: "ما الذي تغيّر",
        title: "الصفحة تفصل الآن بين البنية والأسلوب وملفات الاستبدال بشكل أوضح.",
        body:
          "بدلاً من خلط الصور والنصوص والتخطيط في مكان واحد، يتبع المغرب الآن نظاماً أسهل في النسخ والإنتاج لاحقاً.",
        items: [
          {
            badge: "Globals",
            title: "البنية أصبحت محلية للصفحة",
            body: "ترتيب الأقسام والمقاسات والأAnchors ومسارات PNG أصبحت مجتمعة في ملف واضح واحد.",
          },
          {
            badge: "Theme",
            title: "الهوية تبقى محلية",
            body: "الطابع الوطني الأحمر والأخضر يبقى داخل ثيم المغرب بدل أن يتسرب إلى منطق البنية المشتركة.",
          },
          {
            badge: "Assets",
            title: "استبدال PNG أصبح أسهل",
            body: "كل صورة مستقبلية تملك مساراً حقيقياً مسبقاً، وهذا يقلل التعديلات البرمجية عند التحديث.",
          },
        ],
      },
      finalCta: {
        eyebrow: "الخطوة التالية",
        title: "أعد استخدام نفس النموذج للسوق القادم مع تعديلات أقل.",
        body:
          "بعد ضبط هذا الاختبار للمغرب، يمكن تكرار نفس الشكل مع تغيير الثيم المحلي والمحتوى وملفات PNG فقط.",
        primary: { label: "Telegram", href: moroccoGlobals.contact.telegram, external: true },
        secondary: { label: "Mail", href: moroccoGlobals.contact.whatsapp, external: false },
      },
      footer: buildFooter("ar", "المسارات"),
    },
  },
};

function buildInternalLink(label: string, href: string, locale: MoroccoLocale): LinkItem {
  return localizeLink({ label, href }, locale);
}

export function getMoroccoHomeContent(locale: MoroccoLocale): HomeContent {
  const source = getPlayerHomeContent(locale);
  const dictionary = getDictionary(locale);

  return {
    seo: {
      title: `${moroccoGlobals.market} Market | Live Sports, Casino Games, and Daily Offers`,
      description:
        source.hero.body,
    },
    nav: buildHomeHeader(locale),
    hero: {
      eyebrow: source.hero.eyebrow,
      title: source.hero.title,
      body: source.hero.body,
      primaryCta: buildInternalLink(source.hero.primary, aff_link, locale),
      secondaryCta: buildInternalLink(source.hero.secondary, "/#offers", locale),
      highlights: source.hero.chips,
      stats: source.hero.stats,
      tiles: [
        {
          title: source.hero.feature.title,
          badge: source.hero.feature.metric ?? source.hero.feature.eyebrow,
          href: localizeHref("/#games", locale),
        },
        {
          title: source.games.cards[0]?.title ?? source.hero.supportCard.title,
          badge: source.games.cards[0]?.metric ?? source.games.cards[0]?.eyebrow ?? source.hero.supportCard.eyebrow,
          href: localizeHref("/#games", locale),
        },
        {
          title: source.offers.cards[0]?.title ?? source.hero.supportCard.title,
          badge: source.offers.cards[0]?.metric ?? source.hero.supportCard.metric ?? source.hero.supportCard.eyebrow,
          href: localizeHref("/#offers", locale),
        },
      ],
    },
    games: {
      eyebrow: source.games.eyebrow,
      title: source.games.title,
      body: source.games.body,
      cards: source.games.cards.map((card) => ({
        eyebrow: card.eyebrow,
        title: card.title,
        body: card.body,
        metric: card.metric,
        badge: card.metric,
        href: localizeHref("/#offers", locale),
      })),
    },
    sports: {
      eyebrow: source.sports.eyebrow,
      title: source.sports.title,
      body: source.sports.body,
      lead: {
        eyebrow: source.sports.lead.eyebrow,
        title: source.sports.lead.title,
        body: source.sports.lead.body,
        metric: source.sports.lead.metric,
      },
      cards: source.sports.rails.map((card) => ({
        eyebrow: card.eyebrow,
        title: card.title,
        body: card.body,
        metric: card.metric,
        badge: card.metric,
      })),
    },
    offers: {
      eyebrow: source.offers.eyebrow,
      title: source.offers.title,
      body: source.offers.body,
      ctaLabel: offerCtaLabels[locale],
      cards: source.offers.cards.map((card) => ({
        eyebrow: card.eyebrow,
        title: card.title,
        body: card.body,
        metric: card.metric,
        badge: card.metric,
      })),
    },
    finalCta: {
      eyebrow: source.finalCta.eyebrow,
      title: source.finalCta.title,
      body: source.finalCta.body,
      primary: {
        label: source.finalCta.primary,
        href: moroccoGlobals.contact.telegram,
        external: true,
        iconSrc: "/telegram.png",
      },
      secondary: {
        label: source.finalCta.secondary,
        href: moroccoGlobals.contact.whatsapp,
        external: false,
      },
    },
    footer: buildFooter(locale, source.footer.routesLabel, source.footer.body),
  };
}

export function getMoroccoPartnershipContent(locale: MoroccoLocale): PartnershipContent {
  const dictionary = getDictionary(locale);
  const extra = extraPartnershipByLocale[locale];
  const direction = getDirection(locale as Language);

  return {
    seo: {
      title: `${moroccoGlobals.market} Partnerships | Partner and Agent Opportunities with MELBET`,
      description:
        `${dictionary.partnerHero.subtitle} ${dictionary.partnerHero.sideText}`,
    },
    nav: buildPartnershipHeader(locale),
    hero: {
      eyebrow: dictionary.footer.marketLabel,
      title: `${dictionary.partnerHero.titleLine1} ${dictionary.partnerHero.titleLine2}`.trim(),
      body: `${dictionary.partnerHero.subtitle}. ${dictionary.partnerHero.sideText}`,
      primaryCta: {
        label: dictionary.partnerHero.cta,
        href: moroccoGlobals.contact.telegram,
        external: true,
      },
      secondaryCta: buildInternalLink(dictionary.nav.aboutUs, "/about", locale),
      stats: [
        {
          label: dictionary.partnerHero.metricText,
          value: dictionary.partnerHero.metric,
        },
        {
          label: dictionary.partnerHero.phone.revShareLabel,
          value: dictionary.partnerHero.phone.revShareValue,
        },
        {
          label: dictionary.partnerHero.phone.activePlayersLabel,
          value: dictionary.partnerHero.phone.activePlayersValue,
        },
      ],
    },
    benefits: {
      eyebrow: dictionary.whyUs.badge,
      title: dictionary.whyUs.title,
      body:
        direction === "rtl"
          ? "تم ترتيب هذا القسم ليحمل نفس الدور الوظيفي الموجود في الصفحات الأقوى: توضيح السبب والثقة والدعم بعد الهيرو مباشرة."
          : locale === "fr"
            ? "Cette section suit maintenant la meme logique que les pages plus matures: confiance, clarte et soutien juste apres le hero."
            : "Choose a route with clearer support, direct manager contact, and stronger reasons to start now.",
      items: dictionary.whyUs.items.map((item) => ({
        title: item.title,
        body: item.text,
        bullets: item.points,
      })),
    },
    steps: extra.steps,
    paths: {
      eyebrow: dictionary.finalCta.badge,
      title: dictionary.finalCta.title,
      body:
        direction === "rtl"
          ? "يبقى المساران الأساسيان واضحين حتى تعرف الصفحة كيف تميز بين الوكيل والشريك بدون تشويش."
          : locale === "fr"
            ? "Les deux routes principales restent claires pour distinguer agent et partenaire sans confusion."
            : "Pick the partner route if you bring audience and traffic, or the agent route if you can support players locally.",
      items: [
        {
          type: "agent",
          label: dictionary.finalCta.cards.agent.badge,
          title: dictionary.finalCta.cards.agent.title,
          body: dictionary.finalCta.cards.agent.text,
          bullets: dictionary.finalCta.cards.agent.points,
        },
        {
          type: "partner",
          label: dictionary.finalCta.cards.partner.badge,
          title: dictionary.finalCta.cards.partner.title,
          body: dictionary.finalCta.cards.partner.text,
          bullets: dictionary.finalCta.cards.partner.points,
        },
      ],
    },
    tools: extra.tools,
    finalCta: {
      eyebrow: dictionary.finalCta.badge,
      title: dictionary.finalCta.title,
      body:
        direction === "rtl"
          ? "استخدم تيليجرام أو البريد للبدء بسرعة، ثم بدّل الأصول لاحقاً داخل نفس مسارات PNG المحددة مسبقاً."
          : locale === "fr"
            ? "Utilisez Telegram ou email pour demarrer vite, puis remplacez les PNG plus tard sans retoucher la structure."
            : "Message the team on Telegram or email, choose the route that fits, and start the conversation with a manager.",
      primary: {
        label: dictionary.finalCta.telegram,
        href: moroccoGlobals.contact.telegram,
        external: true,
        iconSrc: "/telegram.png",
      },
      secondary: {
        label: dictionary.finalCta.whatsapp,
        href: moroccoGlobals.contact.whatsapp,
        external: false,
      },
    },
    footer: buildFooter(locale, dictionary.nav.joinUs, dictionary.footer.text),
  };
}

export function getMoroccoAboutContent(locale: MoroccoLocale): AboutContent {
  const extra = extraPartnershipByLocale[locale].about;

  return {
    ...extra,
    nav: buildHomeHeader(locale),
    hero: {
      ...extra.hero,
      primaryCta: localizeLink(extra.hero.primaryCta, locale),
      secondaryCta: localizeLink(extra.hero.secondaryCta, locale),
    },
    finalCta: {
      ...extra.finalCta,
      primary: extra.finalCta.primary,
      secondary: extra.finalCta.secondary,
    },
    footer: buildFooter(locale, extra.footer.routeLabel, extra.footer.body),
  };
}
