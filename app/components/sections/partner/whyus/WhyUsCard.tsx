"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import BenefitShell from "../benefits/BenefitShell";
import { useLanguage } from "@/app/components/providers/LanguageProvider";

export type WhyUsVisualProps = {
  visualTitle?: string;
  visualLabels: readonly string[] | string[];
};

type WhyUsCardProps = {
  badge: string;
  title: string;
  text: string;
  points: readonly string[] | string[];
  visualTitle?: string;
  visualLabels: readonly string[] | string[];
  Visual: ComponentType<WhyUsVisualProps>;
};

const visualMotion = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 20,
    filter: "blur(8px)",
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  viewport: {
    once: true,
    amount: 0.25,
  },
};

const textBlockMotion = {
  initial: {
    opacity: 0,
    x: 20,
    filter: "blur(8px)",
  },
  whileInView: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
  transition: {
    duration: 0.75,
    delay: 0.06,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  viewport: {
    once: true,
    amount: 0.25,
  },
};

const bulletMotion = {
  initial: {
    opacity: 0,
    y: 14,
    filter: "blur(6px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
};

export default function WhyUsCard({
  badge,
  title,
  text,
  points,
  visualTitle,
  visualLabels,
  Visual,
}: WhyUsCardProps) {
  const { direction, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <BenefitShell className="h-full border border-black/8 bg-[#f3f3f3] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
      <div
        dir={direction}
        className="grid h-full gap-8 lg:grid-cols-[260px_1fr]"
      >
        <motion.div
          {...visualMotion}
          className={[
            "relative flex items-center justify-center",
            isArabic ? "lg:order-2" : "lg:order-1",
          ].join(" ")}
        >
          <Visual visualTitle={visualTitle} visualLabels={visualLabels} />
        </motion.div>

        <motion.div
          {...textBlockMotion}
          className={[
            "flex items-center",
            isArabic ? "lg:order-1" : "lg:order-2",
          ].join(" ")}
        >
          <div className="max-w-[520px]">
            <div className="text-[16px] font-medium text-[var(--color-primary)]">
              • {badge}
            </div>

            <h3 className="mt-8 text-[32px] font-semibold leading-[1.05] text-black">
              {title}
            </h3>

            <p className="mt-6 text-[18px] leading-[1.6] text-black/58">
              {text}
            </p>

            <div className="mt-10 space-y-4 text-[17px] text-black">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  {...bulletMotion}
                  transition={{
                    duration: 0.5,
                    delay: 0.16 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black/5 text-[var(--color-primary)]">
                    ✓
                  </span>
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </BenefitShell>
  );
}