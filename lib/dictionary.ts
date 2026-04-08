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
      cta: "Get Started",
    },

    partnerHero: {
      titleLine1: "Start your journey",
      titleLine2: "to a life",
      subtitle: "of financial freedom",
      cta: "Get Started",
      sideText:
        "Earn with flexible models, that reward hard work and consistency.",
      metric: "2.3M+",
      metricText: "Trusted to use by millions of players over 140 countries",
      phone: {
        affIdLabel: "AFF ID",
        affIdValue: "XXXXXXXXX",
        titleLine1: "Partner",
        titleLine2: "Dashboard",
        description:
          "Affiliate tracking, onboarding, and performance visibility.",
        depositsLabel: "Total Deposits",
        depositsValue: "+18.4K $",
        depositsRange: "7D",
        chartDayMon: "Mon",
        chartDayTue: "Tue",
        chartDayWed: "Wed",
        chartDayThu: "Thu",
        chartDayFri: "Fri",
        chartDaySat: "Sat",
        chartDaySun: "Sun",
        cpaLabel: "CPA",
        cpaValue: "20$",
        revShareLabel: "Rev Share",
        revShareValue: "35%",
        activePlayersLabel: "Active Players",
        activePlayersValue: "274",
      },
    },

    whyUs: {
      badge: "Why Us",
      title: "Explore a whole new world of online opportunities",
      items: [
        {
          badge: "Performance",
          title: "See the value more clearly.",
          text: "A better structure gives you a clearer view of performance, direction, and long-term growth potential.",
          points: [
            "Clearer model comparison.",
            "Better visibility into long-term value.",
          ],
          visualTitle: "Performance",
          visualLabels: [],
        },
        {
          badge: "Simple Start",
          title: "Move from interest to action faster.",
          text: "A smoother onboarding path helps new partners and agents start with less friction and more confidence.",
          points: [
            "A smoother first experience.",
            "Faster movement from interest to action.",
          ],
          visualLabels: ["Sign up", "Get approved", "Start earning"],
        },
        {
          badge: "Real Support",
          title: "Work with guidance that actually helps.",
          text: "Clear communication and practical support make daily work easier, cleaner, and more scalable over time.",
          points: [
            "More confidence in daily work.",
            "Less friction when scaling.",
          ],
          visualLabels: [
            "Dedicated manager",
            "Quick replies",
            "Real guidance",
          ],
        },
      ],
    },

    footer: {
      badge: "MELBET MOROCCO",
      title: "A clean path for agents and partners ready to grow.",
      text: "A simple structure, clear opportunities, and a more focused approach to long-term digital growth.",
      marketLabel: "Morocco Market",
      copyright: "© 2026 MELBET MOROCCO. All rights reserved.",
      links: {
        home: "Home",
        whyUs: "Why Us",
        joinUs: "Join us",
      },
    },

    finalCta: {
      badge: "WORK WITH US",
      title: "Choose the path that fits the way you want to grow",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      cards: {
        agent: {
          badge: "For Agents",
          title: "Agent Program",
          text: "Start fast, bring players, and build steady income through a simple and scalable model.",
          points: [
            "Simple onboarding process",
            "Built for direct field work",
            "Fast communication and support",
            "Clear path to start earning",
          ],
          visualTag: "Field Driven",
          visualTitle: "AGENT",
          visualText:
            "Fast-moving model for direct outreach and daily conversions.",
          visualLetter: "A",
        },
        partner: {
          badge: "For Partners",
          title: "Partner Program",
          text: "Grow a long-term network with a structure designed for reach, retention, and recurring value.",
          points: [
            "Long-term revenue structure",
            "Better visibility into growth",
            "Scalable acquisition model",
            "Designed for serious expansion",
          ],
          visualTag: "Long-Term Growth",
          visualTitle: "PARTNER",
          visualText:
            "Structured for scale, retention, and stronger long-term value.",
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
      titleLine1: "ابدأ رحلتك",
      titleLine2: "نحو حياة",
      subtitle: "من الحرية المالية",
      cta: "ابدأ الآن",
      sideText: "اربح من خلال نماذج مرنة تكافئ العمل الجاد والاستمرارية.",
      metric: "2.3M+",
      metricText: "موثوق به من ملايين اللاعبين في أكثر من 140 دولة",
      phone: {
        affIdLabel: "معرّف الشريك",
        affIdValue: "XXXXXXXXX",
        titleLine1: "لوحة",
        titleLine2: "الشريك",
        description: "تتبع الشراكات والانضمام ومراقبة الأداء بوضوح.",
        depositsLabel: "إجمالي الإيداعات",
        depositsValue: "+18.4K $",
        depositsRange: "7D",
        chartDayMon: "الإثنين",
        chartDayTue: "الثلاثاء",
        chartDayWed: "الأربعاء",
        chartDayThu: "الخميس",
        chartDayFri: "الجمعة",
        chartDaySat: "السبت",
        chartDaySun: "الأحد",
        cpaLabel: "CPA",
        cpaValue: "20$",
        revShareLabel: "نسبة الربح",
        revShareValue: "35%",
        activePlayersLabel: "اللاعبون النشطون",
        activePlayersValue: "274",
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