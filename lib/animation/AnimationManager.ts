export const AnimationManager = {
  reveal: {
    heroTitle: {
      delay: 700,
      duration: 1100,
      y: 34,
      blur: 10,
    },
    heroTitleSecond: {
      delay: 1650,
      duration: 1100,
      y: 34,
      blur: 10,
    },
    heroSubtitle: {
      delay: 2450,
      duration: 900,
      y: 24,
      blur: 8,
    },
    heroCta: {
      delay: 3100,
      duration: 850,
      y: 22,
      blur: 6,
    },
    heroPhone: {
      delay: 0,
      duration: 1400,
      y: 180,
      blur: 14,
    },
    heroSidePlus: {
      delay: 3650,
      duration: 700,
      y: 18,
      blur: 6,
    },
    heroSideText: {
      delay: 3820,
      duration: 800,
      y: 20,
      blur: 6,
    },
  },

  typewriter: {
    heroMetric: {
      startDelay: 4300,
      charDelay: 22,
    },
    heroMetricText: {
      startDelay: 4300,
      charDelay: 12,
    },
  },
} as const;