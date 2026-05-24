"use client";

import { motion } from "framer-motion";
import type { WhyUsVisualProps } from "../WhyUsCard";

export default function WhyUsVisualOnboarding({
  visualLabels = [],
}: WhyUsVisualProps) {
  return (
    <div className="relative mx-auto mt-10 flex h-[240px] w-[240px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.65,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute h-[200px] w-[200px] rounded-full border border-[var(--color-border)] bg-[var(--color-white)]/75"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.65,
          delay: 0.16,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute h-[140px] w-[140px] rounded-full border border-[var(--color-border)] bg-[var(--color-primary-soft)]/45"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.55,
          delay: 0.24,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[var(--color-primary)] text-[34px] text-[var(--color-white)] shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
      >
        +
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -14, y: 6 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.32,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute left-[6px] top-[74px] rounded-full bg-[var(--color-white)] px-4 py-2 text-[14px] text-[var(--color-black)] shadow-[var(--shadow-soft)]"
      >
        {visualLabels[0] ?? ""}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 14, y: -6 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute right-[0px] top-[20px] rounded-full bg-[var(--color-white)] px-4 py-2 text-[14px] text-[var(--color-black)] shadow-[var(--shadow-soft)]"
      >
        {visualLabels[1] ?? ""}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 14, y: 8 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.48,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute right-[8px] bottom-[70px] rounded-full bg-[var(--color-white)] px-4 py-2 text-[14px] text-[var(--color-black)] shadow-[var(--shadow-soft)]"
      >
        {visualLabels[2] ?? ""}
      </motion.div>
    </div>
  );
}