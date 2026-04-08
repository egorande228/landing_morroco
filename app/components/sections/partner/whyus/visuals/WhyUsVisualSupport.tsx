"use client";

import { motion } from "framer-motion";
import type { WhyUsVisualProps } from "../WhyUsCard";

export default function WhyUsVisualSupport({
  visualLabels,
}: WhyUsVisualProps) {
  return (
    <div className="relative h-[300px] w-[300px]">
      <motion.div
        initial={{ opacity: 0, x: -14, y: -8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.16,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute left-[20px] top-[28px] rounded-full bg-[var(--color-white)] px-5 py-3 text-[14px] text-[var(--color-black)] shadow-[var(--shadow-soft)]"
      >
        {visualLabels[0]}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 14, y: -8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.26,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute right-[20px] top-[88px] rounded-full bg-[var(--color-white)] px-5 py-3 text-[14px] text-[var(--color-black)] shadow-[var(--shadow-soft)]"
      >
        {visualLabels[1]}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -14, y: 8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.36,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute left-[30px] bottom-[72px] rounded-full bg-[var(--color-white)] px-5 py-3 text-[14px] text-[var(--color-black)] shadow-[var(--shadow-soft)]"
      >
        {visualLabels[2]}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.46,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute left-1/2 top-1/2 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] text-[52px] text-[var(--color-white)] shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
      >
        ✦
      </motion.div>
    </div>
  );
}