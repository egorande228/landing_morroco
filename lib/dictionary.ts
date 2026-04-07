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

  whyPartner: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      text: string;
    }[];
  };

  benefits: {
    intro: {
      badge: string;
      title: string;
      text: string;
    };
    models: {
      badge: string;
      title: string;
      text: string;
    };
    onboarding: {
      badge: string;
      title: string;
      text: string;
    };
    support: {
      badge: string;
      title: string;
      text: string;
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

    whyPartner: {
      badge: "Why Partner With Us",
      title: "A partnership model built for growth, clarity, and long-term value.",
      subtitle:
        "Everything is structured to help affiliates and agents scale with confidence.",
      items: [
        {
          title: "Competitive Models",
          text: "Flexible earning structures designed to reward consistency and performance.",
        },
        {
          title: "Fast Onboarding",
          text: "A clean entry point for new partners so they can start moving quickly.",
        },
        {
          title: "Reliable Tracking",
          text: "Clear visibility into results, activity, and performance over time.",
        },
        {
          title: "Real Support",
          text: "A partnership experience backed by responsive communication and guidance.",
        },
      ],
    },

    benefits: {
      intro: {
        badge: "Why Partner With Us",
        title: "See where growth is coming from.",
        text: "A clearer view of your partner activity helps you understand what is working and where to push further.",
      },
      models: {
        badge: "Flexible Models",
        title: "Choose structures that fit your strategy.",
        text: "Work with models that support both short-term wins and long-term value depending on how you grow.",
      },
      onboarding: {
        badge: "Fast Onboarding",
        title: "Move from interest to action faster.",
        text: "A smoother onboarding path helps new partners and agents start with less friction and more confidence.",
      },
      support: {
        badge: "Real Support",
        title: "Scale with guidance that stays useful.",
        text: "Responsive communication and real partner support make daily work easier and growth more sustainable.",
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

    whyPartner: {
      badge: "لماذا الشراكة معنا",
      title: "نموذج شراكة مبني على النمو والوضوح والقيمة على المدى الطويل.",
      subtitle: "كل شيء منظم لمساعدة الوكلاء والشركاء على التوسع بثقة.",
      items: [
        {
          title: "نماذج تنافسية",
          text: "هياكل ربح مرنة تكافئ الاستمرارية والأداء الحقيقي.",
        },
        {
          title: "انضمام سريع",
          text: "بداية واضحة وسلسة تساعد الشركاء الجدد على الانطلاق بسرعة.",
        },
        {
          title: "تتبع موثوق",
          text: "رؤية واضحة للنتائج والنشاط والأداء مع الوقت.",
        },
        {
          title: "دعم حقيقي",
          text: "تجربة شراكة مدعومة بتواصل سريع وإرشاد مستمر.",
        },
      ],
    },

    benefits: {
      intro: {
        badge: "لماذا الشراكة معنا",
        title: "اعرف من أين يأتي النمو.",
        text: "رؤية أوضح لنشاط الشراكة تساعدك على فهم ما ينجح وأين يجب أن تدفع أكثر.",
      },
      models: {
        badge: "نماذج مرنة",
        title: "اختر الهيكل الذي يناسب استراتيجيتك.",
        text: "اعمل بنماذج تدعم الأرباح السريعة والقيمة الطويلة المدى حسب طريقة نموك.",
      },
      onboarding: {
        badge: "انضمام سريع",
        title: "انتقل من الاهتمام إلى التنفيذ بسرعة أكبر.",
        text: "مسار انضمام أكثر سلاسة يساعد الشركاء والوكلاء الجدد على البدء بثقة أكبر واحتكاك أقل.",
      },
      support: {
        badge: "دعم حقيقي",
        title: "توسع بدعم يبقى مفيدًا.",
        text: "التواصل السريع والدعم الحقيقي للشركاء يجعلان العمل اليومي أسهل والنمو أكثر استقرارًا.",
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

    whyPartner: {
      badge: "Pourquoi nous rejoindre",
      title:
        "Un modèle de partenariat conçu pour la croissance, la clarté et la valeur à long terme.",
      subtitle:
        "Tout est structuré pour aider les affiliés et les agents à évoluer avec confiance.",
      items: [
        {
          title: "Modèles compétitifs",
          text: "Des structures de gains flexibles conçues pour récompenser la régularité et la performance.",
        },
        {
          title: "Intégration rapide",
          text: "Un point d’entrée clair pour permettre aux nouveaux partenaires d’avancer rapidement.",
        },
        {
          title: "Suivi fiable",
          text: "Une visibilité claire sur les résultats, l’activité et les performances dans le temps.",
        },
        {
          title: "Vrai support",
          text: "Une expérience de partenariat soutenue par une communication réactive et un accompagnement utile.",
        },
      ],
    },

    benefits: {
      intro: {
        badge: "Pourquoi nous rejoindre",
        title: "Voyez d’où vient la croissance.",
        text: "Une vision plus claire de votre activité partenaire vous aide à comprendre ce qui fonctionne et où accélérer.",
      },
      models: {
        badge: "Modèles flexibles",
        title: "Choisissez la structure adaptée à votre stratégie.",
        text: "Travaillez avec des modèles qui soutiennent à la fois les gains rapides et la valeur durable selon votre croissance.",
      },
      onboarding: {
        badge: "Intégration rapide",
        title: "Passez plus vite de l’intérêt à l’action.",
        text: "Un parcours d’intégration plus fluide aide les nouveaux partenaires et agents à démarrer avec plus de confiance.",
      },
      support: {
        badge: "Vrai support",
        title: "Évoluez avec un accompagnement utile.",
        text: "Une communication réactive et un vrai support rendent le travail quotidien plus simple et la croissance plus durable.",
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