"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import WhyUsCard from "./WhyUsCard";
import { getWhyUsData } from "./WhyUsData";

const headingMotion = {
  initial: {
    opacity: 0,
    y: 32,
    filter: "blur(10px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  viewport: {
    once: true,
    amount: 0.25,
  },
  transition: {
    duration: 0.85,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 56,
    scale: 0.965,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function WhyUsSection() {
  const { dictionary: t } = useLanguage();
  const whyUsItems = getWhyUsData(t);

  return (
    <section id="why-us" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <motion.div
            {...headingMotion}
            className="inline-flex rounded-full border border-black/10 bg-white px-6 py-3 text-[16px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)] shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
          >
            {t.whyUs.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.95,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mt-6 max-w-[900px] text-[clamp(40px,5vw,72px)] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-fg)]"
          >
            {t.whyUs.title}
          </motion.h2>
        </div>

        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div variants={cardVariants}>
              <WhyUsCard {...whyUsItems[0]} />
            </motion.div>

            <motion.div variants={cardVariants}>
              <WhyUsCard {...whyUsItems[1]} />
            </motion.div>
          </div>

          <div className="mt-8 flex justify-center">
            <motion.div variants={cardVariants} className="w-full max-w-[656px]">
              <WhyUsCard {...whyUsItems[2]} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}