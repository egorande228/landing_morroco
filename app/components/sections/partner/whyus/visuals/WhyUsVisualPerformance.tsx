"use client";

import { motion } from "framer-motion";
import type { WhyUsVisualProps } from "../WhyUsCard";

export default function WhyUsVisualPerformance({
  visualTitle,
}: WhyUsVisualProps) {
  return (
    <div className="relative h-[300px] w-[300px] rounded-[34px] bg-[linear-gradient(135deg,var(--color-primary-soft),rgba(255,255,255,0.55))] p-5">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="relative mx-auto mt-9 h-[220px] w-[200px] rounded-[30px] border border-[var(--color-border)] bg-[var(--color-white)] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
        <div className="text-[18px] font-medium text-[var(--color-text-on-light)]">
          {visualTitle}
        </div>

        <div className="mt-5 flex h-[150px] items-end gap-2">
          {[18, 28, 40, 52, 64, 78, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleY: 0.2 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.14 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.25 }}
              className="origin-bottom w-[18px] rounded-t-[10px] bg-[linear-gradient(180deg,var(--color-primary),var(--color-primary-soft))]"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
