import type { Dictionary } from "@/lib/dictionary";
import WhyUsVisualPerformance from "./visuals/WhyUsVisualPerformance";
import WhyUsVisualOnboarding from "./visuals/WhyUsVisualOnboarding";
import WhyUsVisualSupport from "./visuals/WhyUsVisualSupport";

export function getWhyUsData(dictionary: Dictionary) {
  return [
    {
      badge: dictionary.whyUs.items[0].badge,
      title: dictionary.whyUs.items[0].title,
      text: dictionary.whyUs.items[0].text,
      points: dictionary.whyUs.items[0].points,
      visualTitle: dictionary.whyUs.items[0].visualTitle ?? "",
      visualLabels: dictionary.whyUs.items[0].visualLabels ?? [],
      Visual: WhyUsVisualPerformance,
    },
    {
      badge: dictionary.whyUs.items[1].badge,
      title: dictionary.whyUs.items[1].title,
      text: dictionary.whyUs.items[1].text,
      points: dictionary.whyUs.items[1].points,
      visualTitle: dictionary.whyUs.items[1].visualTitle ?? "",
      visualLabels: dictionary.whyUs.items[1].visualLabels ?? [],
      Visual: WhyUsVisualOnboarding,
    },
    {
      badge: dictionary.whyUs.items[2].badge,
      title: dictionary.whyUs.items[2].title,
      text: dictionary.whyUs.items[2].text,
      points: dictionary.whyUs.items[2].points,
      visualTitle: dictionary.whyUs.items[2].visualTitle ?? "",
      visualLabels: dictionary.whyUs.items[2].visualLabels ?? [],
      Visual: WhyUsVisualSupport,
    },
  ] as const;
}