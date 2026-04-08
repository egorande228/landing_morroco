"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/components/providers/LanguageProvider";

type ChoiceCard = {
  id: "agent" | "partner";
  badge: string;
  title: string;
  text: string;
  points: string[];
  telegramHref: string;
  whatsappHref: string;
  visualTag: string;
  visualTitle: string;
  visualText: string;
  visualLetter: string;
};

const fadeUp = {
  initial: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
};

const cardsWrapVariants = {
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
    scale: 0.97,
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
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardInnerVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const pointVariants = {
  hidden: {
    opacity: 0,
    x: -14,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function ChoiceVisual({
  type,
  visualTag,
  visualTitle,
  visualText,
  visualLetter,
}: {
  type: "agent" | "partner";
  visualTag: string;
  visualTitle: string;
  visualText: string;
  visualLetter: string;
}) {
  if (type === "agent") {
    return (
      <div className="relative h-[260px] overflow-hidden rounded-t-[34px] bg-[linear-gradient(135deg,#1a1a1a_0%,#111111_35%,#1f1a00_100%)]">
        <motion.div
          animate={{ opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute left-8 top-7 text-[18px] font-medium text-white"
        >
          • {visualTag}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute left-8 top-[74px] text-[72px] font-semibold leading-none tracking-[-0.06em] text-white"
        >
          {visualTitle}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute left-8 top-[162px] max-w-[280px] text-[18px] leading-[1.35] text-white/72"
        >
          {visualText}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.86, y: 14, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
            filter: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute right-8 top-8 flex h-[86px] w-[86px] items-center justify-center rounded-full border border-white/12 bg-[var(--color-stage)] text-[34px] font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
        >
          {visualLetter}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative h-[260px] overflow-hidden rounded-t-[34px] bg-[linear-gradient(135deg,#1a1a1a_0%,#111111_35%,#2a1600_100%)]">
      <motion.div
        animate={{ opacity: [0.14, 0.22, 0.14] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        className="absolute left-8 top-7 text-[18px] font-medium text-white"
      >
        • {visualTag}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        className="absolute left-8 top-[74px] text-[72px] font-semibold leading-none tracking-[-0.06em] text-white"
      >
        {visualTitle}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        className="absolute left-8 top-[162px] max-w-[300px] text-[18px] leading-[1.35] text-white/72"
      >
        {visualText}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.86, y: 14, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
          filter: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }}
        viewport={{ once: true, amount: 0.4 }}
        className="absolute right-8 top-8 flex h-[86px] w-[86px] items-center justify-center rounded-full border border-white/12 bg-[var(--color-stage)] text-[34px] font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
      >
        {visualLetter}
      </motion.div>
    </div>
  );
}

function ContactButton({
  href,
  label,
  icon,
  filled = false,
}: {
  href: string;
  label: string;
  icon: string;
  filled?: boolean;
}) {
  return (
    <motion.div whileHover={{ y: -2, scale: 1.015 }} transition={{ duration: 0.22 }}>
      <Link
        href={href}
        className={[
          "group flex h-[58px] items-center justify-center gap-3 rounded-full px-6 text-[18px] font-medium tracking-[-0.03em] transition-all duration-300",
          filled
            ? "bg-[var(--color-primary)] text-black hover:opacity-90"
            : "border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]",
        ].join(" ")}
      >
        <span className="relative h-5 w-5 shrink-0">
          <Image src={icon} alt="" fill className="object-contain" />
        </span>
        <span>{label}</span>
      </Link>
    </motion.div>
  );
}

function FinalChoiceCard({
  card,
  featured = false,
}: {
  card: ChoiceCard;
  featured?: boolean;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="overflow-hidden rounded-[34px] border border-white/10 bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
    >
      <ChoiceVisual
        type={card.id}
        visualTag={card.visualTag}
        visualTitle={card.visualTitle}
        visualText={card.visualText}
        visualLetter={card.visualLetter}
      />

      <div className="rounded-t-[34px] bg-[#f3f3f3] px-8 py-9 text-black">
        <motion.div variants={cardInnerVariants} className="text-[15px] font-medium text-[var(--color-accent)]">
          • {card.badge}
        </motion.div>

        <motion.h3
          variants={cardInnerVariants}
          className="mt-5 text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-black"
        >
          {card.title}
        </motion.h3>

        <motion.p
          variants={cardInnerVariants}
          className="mt-5 max-w-[520px] text-[22px] leading-[1.45] text-black/58"
        >
          {card.text}
        </motion.p>

        <motion.div variants={cardInnerVariants} className="mt-8 h-px w-full bg-black/10" />

        <motion.div className="mt-8 space-y-5">
          {card.points.map((point) => (
            <motion.div key={point} variants={pointVariants} className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[16px] text-black">
                ✓
              </span>
              <span className="text-[18px] leading-[1.4] text-black">
                {point}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={cardInnerVariants} className="mt-10 grid grid-cols-2 gap-4">
          <ContactButton
            href={card.telegramHref}
            label={card.id === "agent" ? "Telegram" : "Telegram"}
            icon="/telegram.png"
            filled={featured}
          />
          <ContactButton
            href={card.whatsappHref}
            label={card.id === "agent" ? "WhatsApp" : "WhatsApp"}
            icon="/whatsapp.png"
            filled={!featured}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FinalCTA() {
  const { dictionary, language } = useLanguage();
  const isArabic = language === "ar";

  const choiceCards: ChoiceCard[] = [
    {
      id: "agent",
      badge: dictionary.finalCta.cards.agent.badge,
      title: dictionary.finalCta.cards.agent.title,
      text: dictionary.finalCta.cards.agent.text,
      points: dictionary.finalCta.cards.agent.points,
      telegramHref: "#",
      whatsappHref: "#",
      visualTag: dictionary.finalCta.cards.agent.visualTag,
      visualTitle: dictionary.finalCta.cards.agent.visualTitle,
      visualText: dictionary.finalCta.cards.agent.visualText,
      visualLetter: dictionary.finalCta.cards.agent.visualLetter,
    },
    {
      id: "partner",
      badge: dictionary.finalCta.cards.partner.badge,
      title: dictionary.finalCta.cards.partner.title,
      text: dictionary.finalCta.cards.partner.text,
      points: dictionary.finalCta.cards.partner.points,
      telegramHref: "#",
      whatsappHref: "#",
      visualTag: dictionary.finalCta.cards.partner.visualTag,
      visualTitle: dictionary.finalCta.cards.partner.visualTitle,
      visualText: dictionary.finalCta.cards.partner.visualText,
      visualLetter: dictionary.finalCta.cards.partner.visualLetter,
    },
  ];

  const orderedCards = isArabic ? [...choiceCards].reverse() : choiceCards;

  return (
    <section id="final-cta" className="px-6 pt-8 pb-16 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <motion.div
            {...fadeUp}
            className="inline-flex rounded-full border border-black/10 bg-white px-6 py-3 text-[16px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)] shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
          >
            {dictionary.finalCta.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-4 max-w-[820px] text-[clamp(40px,5vw,72px)] font-semibold leading-[0.95] tracking-[-0.06em]"
          >
            {dictionary.finalCta.title}
          </motion.h2>
        </div>

        <motion.div
          variants={cardsWrapVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-8 grid gap-8 lg:grid-cols-2"
        >
          {orderedCards.map((card) => (
            <FinalChoiceCard
              key={card.id}
              card={card}
              featured={card.id === "partner"}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}