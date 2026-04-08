import { AnimationManager } from "./AnimationManager";
import { buildRevealMotion, buildTypewriterTiming } from "./buildMotion";

export const heroMotionPresets = {
  title1: buildRevealMotion(AnimationManager.reveal.heroTitle),
  title2: buildRevealMotion(AnimationManager.reveal.heroTitleSecond),
  subtitle: buildRevealMotion(AnimationManager.reveal.heroSubtitle),
  cta: buildRevealMotion(AnimationManager.reveal.heroCta),
  phone: buildRevealMotion(AnimationManager.reveal.heroPhone),
  sidePlus: buildRevealMotion(AnimationManager.reveal.heroSidePlus),
  sideText: buildRevealMotion(AnimationManager.reveal.heroSideText),
} as const;

export const heroTypewriterPresets = {
  metric: buildTypewriterTiming(AnimationManager.typewriter.heroMetric),
  metricText: buildTypewriterTiming(AnimationManager.typewriter.heroMetricText),
} as const;