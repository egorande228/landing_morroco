export type Language = "en" | "ar" | "fr";

export type Dictionary = {
  nav: {
    logo: string;
    home: string;
    joinUs: string;
    aboutUs: string;
    cta: string;
  };

  partnerHero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
    sideText: string;
    metric: string;
    metricText: string;
    phone: {
      affIdLabel: string;
      affIdValue: string;
      titleLine1: string;
      titleLine2: string;
      description: string;
      depositsLabel: string;
      depositsValue: string;
      depositsRange: string;
      chartDayMon: string;
      chartDayTue: string;
      chartDayWed: string;
      chartDayThu: string;
      chartDayFri: string;
      chartDaySat: string;
      chartDaySun: string;
      cpaLabel: string;
      cpaValue: string;
      revShareLabel: string;
      revShareValue: string;
      activePlayersLabel: string;
      activePlayersValue: string;
    };
  };

  whyUs: {
    badge: string;
    title: string;
    items: {
      badge: string;
      title: string;
      text: string;
      points: string[];
      visualLabels: string[];
      visualTitle?: string;
    }[];
  };

  footer: {
    badge: string;
    title: string;
    text: string;
    marketLabel: string;
    copyright: string;
    links: {
      home: string;
      whyUs: string;
      joinUs: string;
    };
  };

  finalCta: {
    badge: string;
    title: string;
    telegram: string;
    whatsapp: string;
    cards: {
      agent: {
        badge: string;
        title: string;
        text: string;
        points: string[];
        visualTag: string;
        visualTitle: string;
        visualText: string;
        visualLetter: string;
      };
      partner: {
        badge: string;
        title: string;
        text: string;
        points: string[];
        visualTag: string;
        visualTitle: string;
        visualText: string;
        visualLetter: string;
      };
    };
  };
};

export const dictionaries: Record<Language, Dictionary> = {
  en: {
    nav: {
      logo: "MELBET",
      home: "Home",
      joinUs: "Join Us",
      aboutUs: "About Us",
      cta: "Start Earning",
    },

    partnerHero: {
      titleLine1: "Grow with",
      titleLine2: "MELBET Morocco",
      subtitle: "Choose the route that fits your network and start with direct manager support",
      cta: "Talk to a manager",
      sideText:
        "Get promo tools, performance tracking, and a work model shaped around your role and volume.",
      metric: "2.3M+",
      metricText: "Global brand reach across 140+ countries",
      phone: {
        affIdLabel: "AFF ID",
        affIdValue: "XXXXXXXXX",
        titleLine1: "Partner",
        titleLine2: "Dashboard",
        description:
          "Track players, deals, and daily performance from one clear view.",
        depositsLabel: "Tracked Volume",
        depositsValue: "Live",
        depositsRange: "7D",
        chartDayMon: "Mon",
        chartDayTue: "Tue",
        chartDayWed: "Wed",
        chartDayThu: "Thu",
        chartDayFri: "Fri",
        chartDaySat: "Sat",
        chartDaySun: "Sun",
        cpaLabel: "CPA",
        cpaValue: "Flexible",
        revShareLabel: "Rev Share",
        revShareValue: "Custom",
        activePlayersLabel: "Active Players",
        activePlayersValue: "Tracked",
      },
    },

    whyUs: {
      badge: "Why MELBET",
      title: "Choose a route that gives you tools, support, and room to grow.",
      items: [
        {
          badge: "Deals",
          title: "Work with a model that matches how you bring value.",
          text: "Choose a partner or agent route, discuss terms with a manager, and move forward with clearer expectations from day one.",
          points: [
            "Partner and agent routes stay separate.",
            "Terms are shaped around role, volume, and agreement.",
          ],
          visualTitle: "Deal Fit",
          visualLabels: [],
        },
        {
          badge: "Onboarding",
          title: "Start faster with direct contact and a simple next step.",
          text: "You do not need to guess where to begin. Speak to the team, confirm your route, and get moving with less delay.",
          points: [
            "Direct contact instead of a dead-end form.",
            "A clearer route from first message to launch.",
          ],
          visualLabels: ["Contact", "Confirm route", "Launch"],
        },
        {
          badge: "Support",
          title: "Stay close to a manager while you build your results.",
          text: "Promo direction, performance follow-up, and day-to-day questions stay easier when you have a real contact behind the route.",
          points: [
            "Useful guidance when you need it.",
            "Better follow-up as your activity grows.",
          ],
          visualLabels: [
            "Dedicated manager",
            "Promo support",
            "Fast replies",
          ],
        },
      ],
    },

    footer: {
      badge: "MELBET MOROCCO",
      title: "Player traffic, partner growth, and direct support in one market route.",
      text: "Explore the player side, choose your partnership route, and contact the team when you are ready to move.",
      marketLabel: "Morocco Market",
      copyright: "© 2026 MELBET MOROCCO. All rights reserved.",
      links: {
        home: "Home",
        whyUs: "Why MELBET",
        joinUs: "Join us",
      },
    },

    finalCta: {
      badge: "PARTNER WITH MELBET",
      title: "Pick the route that fits your network, audience, or local reach",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      cards: {
        agent: {
          badge: "For Agents",
          title: "Agent Route",
          text: "Support local player deposits and withdrawals, stay close to your market, and grow through a role built for on-the-ground operations.",
          points: [
            "Suitable for local payment support",
            "Direct contact for daily coordination",
            "Built for city-by-city player service",
            "Terms depend on role and activity level",
          ],
          visualTag: "Local Reach",
          visualTitle: "AGENT",
          visualText:
            "Handle local player needs with a practical, operational route.",
          visualLetter: "A",
        },
        partner: {
          badge: "For Partners",
          title: "Partner Route",
          text: "Promote with a private code or traffic source, track performance, and grow with manager support aimed at long-term value.",
          points: [
            "Built for promoters, creators, and community owners",
            "Promo codes and tracking support",
            "Flexible deal discussion with a manager",
            "Designed for repeat growth, not one-off traffic",
          ],
          visualTag: "Audience Growth",
          visualTitle: "PARTNER",
          visualText:
            "Turn traffic, community, or content into a clearer earning route.",
          visualLetter: "P",
        },
      },
    },
  },

  ar: {
    nav: {
      logo: "MELBET",
      home: "الرئيسية",
      joinUs: "انضم إلينا",
      aboutUs: "من نحن",
      cta: "ابدأ الآن",
    },

    partnerHero: {
      titleLine1: "نمُ مع",
      titleLine2: "MELBET المغرب",
      subtitle: "اختر المسار الذي يناسب شبكتك وابدأ بدعم مباشر من مدير مختص",
      cta: "تحدث إلى مدير",
      sideText: "احصل على أدوات ترويجية، وتتبع للأداء، ونموذج عمل مصمم وفق دورك وحجمك.",
      metric: "2.3M+",
      metricText: "انتشار العلامة التجارية عالميًا عبر أكثر من 140 دولة",
      phone: {
        affIdLabel: "معرّف الشريك",
        affIdValue: "XXXXXXXXX",
        titleLine1: "لوحة",
        titleLine2: "الشريك",
        description: "تتبّع اللاعبين والصفقات والأداء اليومي من عرض واحد واضح.",
        depositsLabel: "الحجم المتتبع",
        depositsValue: "مباشر",
        depositsRange: "7D",
        chartDayMon: "الإثنين",
        chartDayTue: "الثلاثاء",
        chartDayWed: "الأربعاء",
        chartDayThu: "الخميس",
        chartDayFri: "الجمعة",
        chartDaySat: "السبت",
        chartDaySun: "الأحد",
        cpaLabel: "CPA",
        cpaValue: "مرن",
        revShareLabel: "نسبة الأرباح",
        revShareValue: "مخصصة",
        activePlayersLabel: "اللاعبون النشطون",
        activePlayersValue: "مرصود",
      },
    },

    whyUs: {
      badge: "لماذا نحن",
      title: "اكتشف عالماً جديداً بالكامل من الفرص الرقمية",
      items: [
        {
          badge: "الأداء",
          title: "شاهد القيمة بوضوح أكبر.",
          text: "هيكل أفضل يمنحك رؤية أوضح للأداء والاتجاه وإمكانيات النمو على المدى الطويل.",
          points: [
            "مقارنة أوضح بين النماذج.",
            "رؤية أفضل للقيمة طويلة المدى.",
          ],
          visualTitle: "الأداء",
          visualLabels: [],
        },
        {
          badge: "بداية سهلة",
          title: "انتقل من الاهتمام إلى التنفيذ بسرعة أكبر.",
          text: "مسار انضمام أكثر سلاسة يساعد الشركاء والوكلاء الجدد على البدء بثقة أكبر واحتكاك أقل.",
          points: [
            "تجربة أولى أكثر سلاسة.",
            "انتقال أسرع من الاهتمام إلى التنفيذ.",
          ],
          visualLabels: ["سجل", "احصل على الموافقة", "ابدأ الربح"],
        },
        {
          badge: "دعم حقيقي",
          title: "اعمل بإرشاد يفيد فعلاً.",
          text: "التواصل الواضح والدعم العملي يجعل العمل اليومي أسهل وأنظف وأكثر قابلية للتوسع مع الوقت.",
          points: [
            "ثقة أكبر في العمل اليومي.",
            "احتكاك أقل عند التوسع.",
          ],
          visualLabels: ["مدير مخصص", "ردود سريعة", "إرشاد حقيقي"],
        },
      ],
    },

    footer: {
      badge: "MELBET MOROCCO",
      title: "مسار أوضح للوكلاء والشركاء المستعدين للنمو.",
      text: "هيكل بسيط وفرص أوضح ونهج أكثر تركيزًا نحو النمو الرقمي طويل المدى.",
      marketLabel: "السوق المغربي",
      copyright: "© 2026 MELBET MOROCCO. جميع الحقوق محفوظة.",
      links: {
        home: "الرئيسية",
        whyUs: "لماذا نحن",
        joinUs: "انضم الينا",
      },
    },

    finalCta: {
      badge: "اعمل معنا",
      title: "اختر المسار الذي يناسب الطريقة التي تريد أن تنمو بها",
      telegram: "تيليجرام",
      whatsapp: "واتساب",
      cards: {
        agent: {
          badge: "للوكلاء",
          title: "برنامج الوكلاء",
          text: "ابدأ بسرعة، اجذب اللاعبين، وابنِ دخلاً ثابتًا من خلال نموذج بسيط وقابل للتوسع.",
          points: [
            "مسار انضمام بسيط",
            "مصمم للعمل الميداني المباشر",
            "تواصل سريع ودعم واضح",
            "طريق واضح لبدء الربح",
          ],
          visualTag: "موجه للعمل الميداني",
          visualTitle: "وكيل",
          visualText: "نموذج سريع الحركة للوصول المباشر والتحويلات اليومية.",
          visualLetter: "و",
        },
        partner: {
          badge: "للشركاء",
          title: "برنامج الشركاء",
          text: "ابنِ شبكة طويلة المدى بهيكل مصمم للوصول والاحتفاظ والقيمة المتكررة.",
          points: [
            "هيكل ربح طويل المدى",
            "رؤية أوضح للنمو",
            "نموذج استحواذ قابل للتوسع",
            "مصمم للتوسع الجاد",
          ],
          visualTag: "نمو طويل المدى",
          visualTitle: "شريك",
          visualText:
            "مصمم للتوسع والاحتفاظ وبناء قيمة أقوى على المدى الطويل.",
          visualLetter: "ش",
        },
      },
    },
  },

  fr: {
    nav: {
      logo: "MELBET",
      home: "Accueil",
      joinUs: "Rejoignez-nous",
      aboutUs: "À propos",
      cta: "Commencer",
    },

    partnerHero: {
      titleLine1: "Commencez votre parcours",
      titleLine2: "vers une vie",
      subtitle: "de liberté financière",
      cta: "Commencer",
      sideText:
        "Gagnez avec des modèles flexibles qui récompensent le travail et la régularité.",
      metric: "2.3M+",
      metricText: "Adopté par des millions de joueurs dans plus de 140 pays",
      phone: {
        affIdLabel: "ID AFF",
        affIdValue: "XXXXXXXXX",
        titleLine1: "Tableau",
        titleLine2: "partenaire",
        description:
          "Suivi des affiliés, intégration et visibilité des performances.",
        depositsLabel: "Dépôts totaux",
        depositsValue: "+18.4K $",
        depositsRange: "7J",
        chartDayMon: "Lun",
        chartDayTue: "Mar",
        chartDayWed: "Mer",
        chartDayThu: "Jeu",
        chartDayFri: "Ven",
        chartDaySat: "Sam",
        chartDaySun: "Dim",
        cpaLabel: "CPA",
        cpaValue: "20$",
        revShareLabel: "Part des revenus",
        revShareValue: "35%",
        activePlayersLabel: "Joueurs actifs",
        activePlayersValue: "274",
      },
    },

    whyUs: {
      badge: "Pourquoi nous",
      title: "Découvrez un tout nouveau monde d’opportunités en ligne",
      items: [
        {
          badge: "Performance",
          title: "Voyez la valeur plus clairement.",
          text: "Une meilleure structure vous donne une vision plus claire de la performance, de la direction et du potentiel de croissance à long terme.",
          points: [
            "Comparaison des modèles plus claire.",
            "Meilleure visibilité sur la valeur à long terme.",
          ],
          visualTitle: "Performance",
          visualLabels: [],
        },
        {
          badge: "Départ simple",
          title: "Passez plus vite de l’intérêt à l’action.",
          text: "Un parcours d’intégration plus fluide aide les nouveaux partenaires et agents à démarrer avec moins de friction et plus de confiance.",
          points: [
            "Une première expérience plus fluide.",
            "Un passage plus rapide de l’intérêt à l’action.",
          ],
          visualLabels: ["S’inscrire", "Être approuvé", "Commencer à gagner"],
        },
        {
          badge: "Vrai support",
          title: "Travaillez avec un accompagnement vraiment utile.",
          text: "Une communication claire et un support pratique rendent le travail quotidien plus simple, plus propre et plus évolutif dans le temps.",
          points: [
            "Plus de confiance au quotidien.",
            "Moins de friction lors du passage à l’échelle.",
          ],
          visualLabels: [
            "Manager dédié",
            "Réponses rapides",
            "Vrai accompagnement",
          ],
        },
      ],
    },

    footer: {
      badge: "MELBET MOROCCO",
      title: "Une voie plus claire pour les agents et partenaires prêts à grandir.",
      text: "Construit avec une structure plus simple, des opportunités plus claires et une approche plus concentrée sur la croissance numérique à long terme.",
      marketLabel: "Marché marocain",
      copyright: "© 2026 MELBET MOROCCO. Tous droits réservés.",
      links: {
        home: "Accueil",
        whyUs: "Pourquoi nous",
        joinUs: "Rejoignez-nous",
      },
    },

    finalCta: {
      badge: "TRAVAILLEZ AVEC NOUS",
      title: "Choisissez la voie qui correspond à votre façon de grandir",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      cards: {
        agent: {
          badge: "Pour les agents",
          title: "Programme Agent",
          text: "Démarrez vite, attirez des joueurs et construisez un revenu régulier grâce à un modèle simple et évolutif.",
          points: [
            "Processus d’intégration simple",
            "Conçu pour le travail terrain",
            "Communication rapide et support clair",
            "Voie claire pour commencer à gagner",
          ],
          visualTag: "Orienté terrain",
          visualTitle: "AGENT",
          visualText:
            "Un modèle rapide pour l’approche directe et les conversions quotidiennes.",
          visualLetter: "A",
        },
        partner: {
          badge: "Pour les partenaires",
          title: "Programme Partenaire",
          text: "Développez un réseau sur le long terme avec une structure pensée pour la portée, la rétention et la valeur récurrente.",
          points: [
            "Structure de revenus long terme",
            "Meilleure visibilité sur la croissance",
            "Modèle d’acquisition évolutif",
            "Conçu pour une expansion sérieuse",
          ],
          visualTag: "Croissance long terme",
          visualTitle: "PARTENAIRE",
          visualText:
            "Pensé pour l’échelle, la rétention et une valeur durable plus forte.",
          visualLetter: "P",
        },
      },
    },
  },
};

export function getDictionary(language: Language) {
  return dictionaries[language];
}

export function getDirection(language: Language): "ltr" | "rtl" {
  return language === "ar" ? "rtl" : "ltr";
}
