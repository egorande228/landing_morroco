"use client";

import { useLanguage } from "@/app/components/providers/LanguageProvider";
import BenefitCardIntro from "@/app/components/sections/partner/benefits/BenefitCardIntro";
import BenefitCardModels from "@/app/components/sections/partner/benefits/BenefitCardModels";
import BenefitCardOnboarding from "@/app/components/sections/partner/benefits/BenefitCardOnboarding";
import BenefitCardSupport from "@/app/components/sections/partner/benefits/BenefitCardSupport";
export default function BenefitsSection() {
  const { dictionary } = useLanguage();

  return (
    <section className="relative px-6 py-24 md:px-20 md:py-28">
      <div className="mx-auto flex max-w-[1520px] flex-col gap-8">
        <BenefitCardIntro
          badge={dictionary.benefits.intro.badge}
          title={dictionary.benefits.intro.title}
          text={dictionary.benefits.intro.text}
        />

        <BenefitCardModels
          badge={dictionary.benefits.models.badge}
          title={dictionary.benefits.models.title}
          text={dictionary.benefits.models.text}
        />

        <BenefitCardOnboarding
          badge={dictionary.benefits.onboarding.badge}
          title={dictionary.benefits.onboarding.title}
          text={dictionary.benefits.onboarding.text}
        />

        <BenefitCardSupport
          badge={dictionary.benefits.support.badge}
          title={dictionary.benefits.support.title}
          text={dictionary.benefits.support.text}
        />
      </div>
    </section>
  );
}