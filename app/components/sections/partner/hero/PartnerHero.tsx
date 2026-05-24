"use client";

import { motion } from "framer-motion";
import HeroStage from "@/app/components/sections/partner/hero/HeroStage";
import PhoneMockup from "@/app/components/ui/PhoneMockup";
import PhoneData from "./PhoneData";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { heroMotionPresets } from "@/lib/animation/presets";
import PhoneParallax from "@/app/components/ui/PhoneParallax";
import Link from "next/link";
export default function PartnerHero() {
  const { dictionary, direction } = useLanguage();
  const isRTL = direction === "rtl";

  return (
    <section className="relative overflow-hidden px-6 pt-[86px] md:px-20">
      <div className="mx-auto max-w-[1520px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[48%] top-[84px] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/8 blur-[80px]" />
          <div className="absolute left-[58%] top-[208px] h-[390px] w-[390px] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/8 blur-[120px]" />
        </div>

        <div className="relative z-20 grid grid-cols-[1.05fr_0.95fr_0.65fr] items-start gap-6">
          <div className="pt-[74px]">
            <div
              dir={isRTL ? "rtl" : "ltr"}
              className={isRTL ? "text-right" : "text-left"}
            >
              <motion.div
                {...heroMotionPresets.title1}
                className="max-w-[700px] text-[84px] font-medium leading-[0.88] tracking-[-0.07em] text-[var(--color-fg)]"
              >
                {dictionary.partnerHero.titleLine1}
              </motion.div>

              <motion.div
                {...heroMotionPresets.title2}
                className="max-w-[700px] text-[84px] font-medium leading-[0.88] tracking-[-0.07em] text-[var(--color-fg)]"
              >
                {dictionary.partnerHero.titleLine2}
              </motion.div>
            </div>

            <motion.div
              {...heroMotionPresets.subtitle}
              className="mt-2 flex items-center gap-8"
            >
              <div className="h-px w-[108px] shrink-0 bg-[var(--color-border)]" />
              <div
                dir={isRTL ? "rtl" : "ltr"}
                className={[
                  "text-[80px] font-normal tracking-[-0.07em] text-[var(--color-muted)]",
                  isRTL ? "text-right" : "text-left",
                ].join(" ")}
              >
                {dictionary.partnerHero.subtitle}
              </div>
            </motion.div>

            <motion.div
              {...heroMotionPresets.cta}
              className="mt-4 flex items-center"
            >
<Link
  href="/partner#final-cta"
  dir={isRTL ? "rtl" : "ltr"}
  className={[
    "flex h-[48px] items-center rounded-full bg-[var(--color-primary-soft)] text-[22px] font-medium tracking-[-0.04em] text-[var(--color-fg)]",
    isRTL ? "pr-10 pl-0" : "pl-10 pr-0",
  ].join(" ")}
>
  <span>{dictionary.partnerHero.cta}</span>
  <span
    className={[
      "flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[var(--color-primary)] text-[38px] text-[var(--color-white)]",
      isRTL ? "mr-8" : "ml-8",
    ].join(" ")}
  />
</Link>
            </motion.div>
          </div>
          <div className="relative flex min-h-[690px] items-start justify-end">
            <div className="pointer-events-none absolute right-[-12%] top-[58px] h-[320px] w-[320px] rounded-full bg-[var(--color-primary)]/8 blur-[90px]" />

            <motion.div
              initial={{
                opacity: 0,
                y: 180,
                scale: 0.92,
                rotate: isRTL ? -18 : 18,
                filter: "blur(14px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
                x: isRTL ? 182 : 0,
              }}
              transition={{
                delay: 0,
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-30 mt-[16px] mr-[164px]"
            >
              <PhoneParallax>
                <div className={isRTL ? "rotate-[-28deg]" : "rotate-[28deg]"}>
                  <PhoneMockup>
                    <PhoneData />
                  </PhoneMockup>
                </div>
              </PhoneParallax>
            </motion.div>
          </div>

          <div className="pt-[124px]">
            <motion.p
              {...heroMotionPresets.sideText}
              dir={isRTL ? "rtl" : "ltr"}
              className={[
                "max-w-[360px] text-[26px] leading-[1.35] tracking-[-0.03em] text-[var(--color-fg)]",
                isRTL ? "text-right" : "text-left",
              ].join(" ")}
            >
              {dictionary.partnerHero.sideText}
            </motion.p>

            <motion.div
              {...heroMotionPresets.sidePlus}
              className="mt-[68px] flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <div className="h-[54px] w-[54px] rounded-full border-2 border-[var(--color-white)] bg-[#d98a2f]" />
                <div className="h-[54px] w-[54px] rounded-full border-2 border-[var(--color-white)] bg-[#bbb3a3]" />
                <div className="h-[54px] w-[54px] rounded-full border-2 border-[var(--color-white)] bg-[#1d1d1d]" />
              </div>

              <div
                dir={isRTL ? "rtl" : "ltr"}
                className={isRTL ? "text-right" : "text-left"}
              >
                <div className="text-[64px] font-medium leading-none tracking-[-0.05em] text-[var(--color-fg)]">
                  {dictionary.partnerHero.metric}
                </div>

                <div className="mt-2 max-w-[220px] text-[16px] leading-[1.2] text-[var(--color-muted)]">
                  {dictionary.partnerHero.metricText}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 mt-10 pb-8">
          <HeroStage />
        </div>
      </div>
    </section>
  );
}