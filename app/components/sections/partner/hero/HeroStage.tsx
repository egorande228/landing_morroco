"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import HeroPartnerItem from "./HeroPartnerItem";
import { heroPartnerItems } from "@/lib/heroStageData";

const stageContainerMotion = {
  initial: {
    opacity: 0,
    y: 48,
    filter: "blur(12px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    delay: 4.6,
    duration: 1,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

const melbetMotion = {
  initial: {
    opacity: 0,
    y: -22,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    delay: 4.9,
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

const starMotion = {
  initial: {
    opacity: 0,
    scale: 0.86,
    rotate: -10,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
  },
  transition: {
    delay: 5.15,
    duration: 0.95,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

const stageTextMotion = {
  initial: {
    opacity: 0,
    y: 22,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    delay: 5.4,
    duration: 0.85,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

const carouselMotion = {
  initial: {
    opacity: 0,
    y: 26,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    delay: 5.65,
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export default function HeroStage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      {...stageContainerMotion}
      className="relative h-[640px] overflow-hidden rounded-[44px] bg-[var(--color-primary)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.18),transparent_36%)]" />

      <div className="pointer-events-none absolute left-1/2 top-[128px] h-px w-[90%] -translate-x-1/2 bg-white/18" />

      <motion.div
        {...melbetMotion}
        className="pointer-events-none absolute left-1/2 top-[42px] -translate-x-1/2 whitespace-nowrap text-[164px] font-semibold uppercase leading-none tracking-[-0.07em] text-white/24"
      >
        M E L B E T
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.14),transparent_60%)]" />

      <motion.div
        {...starMotion}
        className="pointer-events-none absolute left-1/2 top-[49%] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1.2, 0, -1.2, 0],
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 5.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="absolute left-1/2 top-[73%] h-8 w-36 -translate-x-1/2 rounded-full bg-black/35 blur-xl" />

          <svg
            className="relative z-10 h-64 w-64 overflow-visible"
            fill="none"
            viewBox="120 45 225 195"
          >
            <defs>
              <filter id="morocco-star-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00A85A" floodOpacity="0.5" />
                <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#00A85A" floodOpacity="0.18" />
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.28" />
              </filter>
            </defs>

            <path
              d="M 225 75 L 269.0835 210.6765 L 153.6705 126.8235 L 296.3295 126.8235 L 180.9165 210.6765 Z"
              stroke="#006233"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#morocco-star-glow)"
            />
          </svg>
        </motion.div>
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-8 pb-8">
        <motion.p
          {...stageTextMotion}
          className="mt-12 max-w-[980px] text-center text-[34px] font-normal leading-[1.12] tracking-[-0.05em] text-white"
        >
          Partnering with top tier brands to revolutionize the E-gaming industry.
        </motion.p>

        <motion.div
          {...carouselMotion}
          className="mt-4 w-full overflow-hidden px-16 py-5"
        >
          <div className="hero-partner-marquee flex w-max flex-nowrap items-start gap-16">
            {[...heroPartnerItems, ...heroPartnerItems, ...heroPartnerItems].map(
              (item, index) => (
                <HeroPartnerItem
                  key={`${item.id}-${index}`}
                  item={item}
                  isActive={hoveredId === item.id}
                  isDimmed={hoveredId !== null && hoveredId !== item.id}
                  onHoverStart={() => setHoveredId(item.id)}
                  onHoverEnd={() => setHoveredId(null)}
                />
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}