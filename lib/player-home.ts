import type { Language } from "@/lib/dictionary";

type PlayerCard = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  metric?: string;
};

type HomeContent = {
  nav: {
    games: string;
    sports: string;
    offers: string;
    support: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    chips: string[];
    stats: {
      label: string;
      value: string;
    }[];
    feature: PlayerCard;
    supportCard: PlayerCard;
  };
  games: {
    eyebrow: string;
    title: string;
    body: string;
    cards: PlayerCard[];
  };
  sports: {
    eyebrow: string;
    title: string;
    body: string;
    lead: PlayerCard;
    rails: PlayerCard[];
  };
  offers: {
    eyebrow: string;
    title: string;
    body: string;
    cards: PlayerCard[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  footer: {
    body: string;
    homeLabel: string;
    routesLabel: string;
    supportLabel: string;
  };
};

const content: Record<Language, HomeContent> = {
  en: {
    nav: {
      games: "Games",
      sports: "Sports",
      offers: "Offers",
      support: "Support",
    },
    hero: {
      eyebrow: "Morocco Matchday",
      title: "Bet live football, open the casino, and unlock daily offers in one fast start.",
      body:
        "Move from the biggest matches of the day to live casino tables, fast slots, and player rewards without losing pace. The whole flow stays sharp on mobile and easy to open.",
      primary: "Get your 200% now!",
      secondary: "See today's offers",
      chips: ["Live football", "Slots and casino", "Welcome bonus", "Fast support"],
      stats: [
        { label: "Live action", value: "24/7" },
        { label: "Top lanes", value: "Sports + Casino" },
        { label: "Quick access", value: "Direct" },
      ],
      feature: {
        eyebrow: "Football first",
        title: "Start with the biggest football fixtures, then move straight into casino action.",
        body: "Matchday stays front and center so the first click feels obvious from the first scroll.",
        image: "/phone.png",
        metric: "Live football",
      },
      supportCard: {
        eyebrow: "Fast help",
        title: "Claim welcome rewards and reach support without leaving the flow.",
        body: "Promos and support stay one step away when a player wants to move quickly.",
        image: "/player/support/morocco-fast-support.png",
        metric: "Fast support",
      },
    },
    games: {
      eyebrow: "Casino and games",
      title: "Open three strong player lanes: live casino, slots, and instant-play action.",
      body:
        "Whether you want dealer tables, short slot sessions, or faster instant rounds, you can jump into the right lane without slowing down.",
      cards: [
        {
          eyebrow: "Live casino",
          title: "Join dealer tables, roulette, blackjack, and real-time casino sessions.",
          body: "Step into live rooms built for players who want a sharper casino feel after sports.",
          image: "/player/games/morocco-live-casino.png",
          metric: "Live casino",
        },
        {
          eyebrow: "Slots",
          title: "Spin popular slot games built for quick rounds and repeat visits.",
          body: "From short breaks to longer sessions, the slots lane keeps the action light, fast, and easy to reopen.",
          image: "/player/games/morocco-slots.png",
          metric: "Slots",
        },
        {
          eyebrow: "Instant games",
          title: "Open crash and instant games when you want speed over long sessions.",
          body: "Fast cycles and mobile-friendly pacing make this lane easy to revisit any time.",
          image: "/player/games/morocco-crash.png",
          metric: "Instant",
        },
      ],
    },
    sports: {
      eyebrow: "Sports",
      title: "Keep football, basketball, tennis, and big-event nights within easy reach.",
      body:
        "Open the wider sports picture on the lead card, then jump into dedicated lanes for football, basketball, tennis, and headline events.",
      lead: {
        eyebrow: "Sports overview",
        title: "Move across the biggest sports moments of the day from one strong match hub.",
        body: "Keep the full sports picture in view before choosing the lane that fits your session best.",
        image: "/player/sports/morocco-sports-lead.png",
        metric: "All sports",
      },
      rails: [
        {
          eyebrow: "Football",
          title: "Follow football fixtures, derby nights, and live match momentum in one lane.",
          body: "Stay close to the matches that drive the strongest player attention across the day.",
          image: "/player/sports/morocco-football.png",
          metric: "Football",
        },
        {
          eyebrow: "Basketball",
          title: "Back basketball when you want quicker swings and higher tempo.",
          body: "A strong second lane for players who like nonstop movement and short momentum shifts.",
          image: "/player/sports/morocco-basketball.png",
          metric: "Fast pace",
        },
        {
          eyebrow: "Tennis",
          title: "Jump into tennis for sharper point-by-point movement and live value.",
          body: "Perfect for players who want a more tactical rhythm during the day.",
          image: "/player/sports/morocco-tennis.png",
          metric: "In-play",
        },
        {
          eyebrow: "Prime nights",
          title: "Catch standout events, headline games, and late-night action in one place.",
          body: "Big-event traffic stays easy to spot when the day turns into the main evening window.",
          image: "/player/sports/morocco-event-night.png",
          metric: "Prime picks",
        },
      ],
    },
    offers: {
      eyebrow: "Offers and rewards",
      title: "Use welcome bonuses, match boosts, and cashback to keep the session moving.",
      body:
        "New players can start with a welcome push, football fans can look for event-driven boosts, and returning players still have a reason to come back tonight.",
      cards: [
        {
          eyebrow: "Welcome",
          title: "Start with a welcome offer built for a stronger first session.",
          body: "Open the account, claim the first-player value available, and head straight into sports or casino.",
          image: "/offer/morocco-welcome-bonus.png",
          metric: "Welcome bonus",
        },
        {
          eyebrow: "Match boost",
          title: "Take extra value into the biggest football fixtures of the day.",
          body: "A clean boost lane gives matchday players one more reason to bet when the schedule heats up.",
          image: "/offer/morocco-match-boost.png",
          metric: "Match boost",
        },
        {
          eyebrow: "Cashback",
          title: "Stay active longer with cashback aimed at repeat evening play.",
          body: "A softer reward keeps the session attractive when players come back for another round.",
          image: "/offer/morocco-night-cashback.png",
          metric: "Cashback",
        },
      ],
    },
    finalCta: {
      eyebrow: "",
      title: "Need help before you play or while you move between offers?",
      body: "Open Telegram or email for a faster reply and a simpler route back into the games, sports, or bonus flow.",
      primary: "Telegram",
      secondary: "Mail",
    },
    footer: {
      body: "Live sports, casino action, daily offers, and direct support stay within easy reach.",
      homeLabel: "Home",
      routesLabel: "Explore",
      supportLabel: "Support",
    },
  },
  ar: {
    nav: {
      games: "الألعاب",
      sports: "الرياضة",
      offers: "العروض",
      support: "الدعم",
    },
    hero: {
      eyebrow: "الصفحة الرئيسية للاعبين",
      title: "حركة مباريات أسرع، اكتشاف كازينو أوضح، وعروض تغلق الصفحة بقوة.",
      body:
        "صفحة منزلية أكثر اكتمالاً للسوق المغربي تمزج بين تقسيم رياضي أنضج ومسار ألعاب أقوى وإغلاق ترويجي أوضح مع الحفاظ على الطابع الأحمر والأخضر المحلي.",
      primary: "استكشف الألعاب",
      secondary: "شاهد العروض",
      chips: ["كرة قدم مباشرة", "طاولات كازينو", "جولات سريعة", "موبايل أولاً"],
      stats: [
        { label: "سرعة الدخول", value: "سريع" },
        { label: "تركيز مباشر", value: "24/7" },
        { label: "تدفق اللاعبين", value: "موبايل" },
      ],
      feature: {
        eyebrow: "الواجهة المباشرة",
        title: "تبقى كرة القدم عنصر الجذب الأول ثم تتوسع الجلسة إلى الكازينو والعروض.",
        body: "الصفحة المغربية تتبع الآن إيقاعاً أقوى للاعب بدلاً من أن تبدو كهيكل فارغ.",
        image: "/phone.png",
        metric: "مباشر الآن",
      },
      supportCard: {
        eyebrow: "دعم سريع",
        title: "تظل العروض وروابط الدعم والبداية السريعة سهلة الوصول.",
        body: "الإغلاق يحافظ على الزخم بدلاً من ترك اللاعب عند حافة ضعيفة في التذييل.",
        image: "/player/support/morocco-fast-support.png",
        metric: "الدعم",
      },
    },
    games: {
      eyebrow: "الألعاب والكازينو",
      title: "بلوك اكتشاف أقوى للكازينو والألعاب السريعة والعودة المتكررة.",
      body:
        "هذا القسم يستعير من الصفحات المكتملة فكرة بطاقة اكتشاف أكبر مع بطاقات فئات داعمة تبدو مقصودة وواضحة على الموبايل.",
      cards: [
        {
          eyebrow: "كازينو مباشر",
          title: "طاولات مباشرة وجلسات حية بسطح مميز وأنظف.",
          body: "مسار كازينو أوضح يمنح اللاعب خطوة ثانية قوية بعد وصوله من الرياضة.",
          image: "/player/games/morocco-live-casino.png",
          metric: "طاولات",
        },
        {
          eyebrow: "سلوتس",
          title: "جولات سريعة وترفيه أخف للجلسات القصيرة.",
          body: "مسار السلوتس يحافظ على طاقة الصفحة ويمنع تحول كل شيء إلى شبكة بطاقات مكررة.",
          image: "/player/games/morocco-slots.png",
          metric: "سريع",
        },
        {
          eyebrow: "كرash وألعاب فورية",
          title: "دورات أسرع لسلوك لاعب يعتمد على الموبايل.",
          body: "المسار الثالث يوسع الصفحة بدون أن يثقل أول تمرير.",
          image: "/player/games/morocco-crash.png",
          metric: "سريع",
        },
      ],
    },
    sports: {
      eyebrow: "الرياضة",
      title: "استخدم بطاقة مباراة رئيسية واحدة ثم قسّم الباقي إلى مسارات داعمة أوضح.",
      body:
        "تعتمد البنية على أنماط الأردن والعراق الأقوى: سطح رئيسي واضح ثم بطاقات دعم لعمق الدوريات والإيقاع المباشر وتنوع الأحداث.",
      lead: {
        eyebrow: "مسار كرة القدم الرئيسي",
        title: "تقود كرة القدم القرار الأول بوزن بصري أقوى.",
        body: "البطاقة الرياضية الرئيسية تجعل الصفحة تبدو ناضجة من أول لحظة وتدعم الطابع المغربي الأسرع.",
        image: "/player/sports/morocco-main-football.png",
        metric: "يوم المباراة",
      },
      rails: [
        {
          eyebrow: "كرة القدم",
          title: "يبقي مسار كرة القدم المباريات الكبرى والدوريات الحية في واجهة الحركة.",
          body: "مفيد كبطاقة دعم واضحة للاعب الذي يريد الدخول مباشرة إلى أهم المواجهات.",
          image: "/player/sports/morocco-football.png",
          metric: "كرة القدم",
        },
        {
          eyebrow: "كرة السلة",
          title: "طبقة أسرع للاعب الذي يريد إيقاعاً أعلى.",
          body: "مفيدة كمسار رياضي ثانٍ قوي بعد كرة القدم.",
          image: "/player/sports/morocco-basketball.png",
          metric: "سريع",
        },
        {
          eyebrow: "التنس",
          title: "حركة أوضح داخل اللعب وزخم أنظف للمباراة.",
          body: "تضيف إيقاعاً أكثر تكتيكية إلى التقسيم الرياضي.",
          image: "/player/sports/morocco-tennis.png",
          metric: "داخل اللعب",
        },
        {
          eyebrow: "الليالي الكبرى",
          title: "تبقى حركة الأحداث الكبرى ظاهرة للجلسات عالية النية.",
          body: "بطاقة الليل الكبرى تساعد القسم الرياضي على الإغلاق بثقة أكبر.",
          image: "/player/sports/morocco-event-night.png",
          metric: "مميز",
        },
      ],
    },
    offers: {
      eyebrow: "العروض والمكافآت",
      title: "اختم الصفحة بحوافز أقوى وسبب أوضح للاستمرار.",
      body:
        "إغلاق العروض يتبع الصفحات الناضجة عبر جمع قيمة الترحيب وطاقة يوم المباراة وبطاقة احتفاظ أخف في صف واحد متوازن.",
      cards: [
        {
          eyebrow: "الترحيب",
          title: "مكافأة بداية سريعة",
          body: "مكان صورة واضح لعرض ترحيبي مغربي مستقبلي.",
          image: "/offer/morocco-welcome-bonus.png",
          metric: "مكان صورة",
        },
        {
          eyebrow: "تعزيز المباراة",
          title: "عرض كرة قدم للمباريات اليومية الكبيرة",
          body: "مسار ترويجي مباشر للاعبين الذين يفتحون الصفحة أثناء ذروة الأحداث.",
          image: "/offer/morocco-match-boost.png",
          metric: "مكان صورة",
        },
        {
          eyebrow: "كاش باك",
          title: "دعم العودة للجلسات المسائية المتكررة",
          body: "إغلاق أخف يحافظ على توازن الصفحة وأناقتها.",
          image: "/offer/morocco-night-cashback.png",
          metric: "مكان صورة",
        },
      ],
    },
    finalCta: {
      eyebrow: "",
      title: "اجعل الخطوة الأخيرة بسيطة مع تواصل سريع ومسار واضح للاعب.",
      body: "يبقى تيليجرام والبريد ظاهرين حتى يشعر اللاعب أن الإجراء الأخير مقصود وليس عاماً.",
      primary: "تيليجرام",
      secondary: "البريد",
    },
    footer: {
      body: "هيكل مغربي موجّه للاعبين مع إيقاع رياضي أقوى واكتشاف كازينو أوضح وإغلاق عروض أكثر قصدية.",
      homeLabel: "الرئيسية",
      routesLabel: "المسارات",
      supportLabel: "الدعم",
    },
  },
  fr: {
    nav: {
      games: "Jeux",
      sports: "Sport",
      offers: "Offres",
      support: "Support",
    },
    hero: {
      eyebrow: "Accueil joueurs Maroc",
      title: "Plus d'energie live, un casino plus clair, et des offres qui ferment mieux la page.",
      body:
        "Une page d'accueil joueurs plus complete pour le Maroc, avec un meilleur split sport, une vraie couche casino-jeux, et une fermeture promo plus confiante.",
      primary: "Explorer les jeux",
      secondary: "Voir les offres",
      chips: ["Football live", "Tables casino", "Tours rapides", "Mobile d'abord"],
      stats: [
        { label: "Entree", value: "Rapide" },
        { label: "Live", value: "24/7" },
        { label: "Flux", value: "Mobile" },
      ],
      feature: {
        eyebrow: "Scene live",
        title: "Le football attire d'abord, puis la session s'ouvre vers le casino et les offres.",
        body: "La page Maroc suit maintenant un rythme joueur plus mature au lieu de ressembler a une coquille vide.",
        image: "/phone.png",
        metric: "Live",
      },
      supportCard: {
        eyebrow: "Support rapide",
        title: "Promos, support et demarrage rapide restent faciles a trouver.",
        body: "La fermeture garde l'elan au lieu de tomber dans un footer faible.",
        image: "/player/support/morocco-fast-support.png",
        metric: "Support",
      },
    },
    games: {
      eyebrow: "Jeux et casino",
      title: "Un bloc de decouverte plus fort pour le casino, le quick-play et les retours.",
      body:
        "Cette section reprend des pages matures l'idee d'un grand bloc de decouverte plus des cartes categories plus nettes sur mobile.",
      cards: [
        {
          eyebrow: "Casino live",
          title: "Tables croupiers et sessions live dans une coque plus premium.",
          body: "Un meilleur lane casino donne au joueur une vraie deuxieme etape apres le sport.",
          image: "/player/games/morocco-live-casino.png",
          metric: "Tables",
        },
        {
          eyebrow: "Slots",
          title: "Tours rapides et divertissement plus leger.",
          body: "La couche slots garde l'energie de la page sans transformer tout en simple grille generique.",
          image: "/player/games/morocco-slots.png",
          metric: "Rapide",
        },
        {
          eyebrow: "Crash et instant",
          title: "Des cycles plus rapides pour un usage tres mobile.",
          body: "La troisieme voie elargit la page sans alourdir le premier scroll.",
          image: "/player/games/morocco-crash.png",
          metric: "Mobile",
        },
      ],
    },
    sports: {
      eyebrow: "Sport",
      title: "Gardez football, basketball, tennis et grandes nuits sportives a portee de main.",
      body:
        "Ouvrez d'abord une vue sport plus large, puis passez vers des lanes dedies pour le football, le basketball, le tennis, et les grands evenements.",
      lead: {
        eyebrow: "Vue sport",
        title: "Passez par un hub sport plus large avant de choisir votre match lane.",
        body: "Gardez la vue d'ensemble avant d'ouvrir le sport qui correspond a votre session.",
        image: "/player/sports/morocco-sports-lead.png",
        metric: "Tous sports",
      },
      rails: [
        {
          eyebrow: "Football",
          title: "Retrouvez les grands matchs, les derbys, et le rythme live dans une seule voie.",
          body: "Le football garde sa propre carte pour les joueurs qui veulent aller droit aux grandes affiches.",
          image: "/player/sports/morocco-football.png",
          metric: "Football",
        },
        {
          eyebrow: "Basketball",
          title: "Une couche plus rapide pour les joueurs qui veulent du rythme.",
          body: "Utile comme deuxieme voie sport apres le football.",
          image: "/player/sports/morocco-basketball.png",
          metric: "Rapide",
        },
        {
          eyebrow: "Tennis",
          title: "Mieux pour le in-play et le changement de momentum.",
          body: "Ajoute une note plus tactique au split sport.",
          image: "/player/sports/morocco-tennis.png",
          metric: "In-play",
        },
        {
          eyebrow: "Grandes nuits",
          title: "Les grands evenements gardent leur poids sur la page.",
          body: "Une carte premium de soiree aide la section sport a finir avec plus d'assurance.",
          image: "/player/sports/morocco-event-night.png",
          metric: "Prime",
        },
      ],
    },
    offers: {
      eyebrow: "Offres et recompenses",
      title: "Fermez la page avec de meilleurs incentives et une raison claire de rester.",
      body:
        "Le close promo reprend les pages matures en melangeant bonus de bienvenue, energie match-day et retention plus douce.",
      cards: [
        {
          eyebrow: "Bienvenue",
          title: "Bonus de demarrage rapide",
          body: "Un slot image propre pour une future offre de bienvenue Maroc.",
          image: "/offer/morocco-welcome-bonus.png",
          metric: "Placeholder",
        },
        {
          eyebrow: "Boost match",
          title: "Offre football pour les grandes affiches",
          body: "Une voie promo directe pour les sessions ouvertes pendant les pics d'evenement.",
          image: "/offer/morocco-match-boost.png",
          metric: "Placeholder",
        },
        {
          eyebrow: "Cashback",
          title: "Soutien retention pour les sessions du soir",
          body: "Une fermeture plus douce qui garde la page equilibree et premium.",
          image: "/offer/morocco-night-cashback.png",
          metric: "Placeholder",
        },
      ],
    },
    finalCta: {
      eyebrow: "",
      title: "Gardez la derniere etape simple avec un contact rapide et clair.",
      body: "Telegram et email restent visibles pour une fin de page utile.",
      primary: "Telegram",
      secondary: "Mail",
    },
    footer: {
      body: "Une coque Maroc orientee joueurs avec un meilleur rythme sport, une decouverte casino plus claire et une fermeture offres plus forte.",
      homeLabel: "Accueil",
      routesLabel: "Routes",
      supportLabel: "Support",
    },
  },
};

export function getPlayerHomeContent(language: Language) {
  return content[language];
}
