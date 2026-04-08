"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/components/providers/LanguageProvider";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Footer() {
  const { dictionary } = useLanguage();

  const footerLinks = [
    { label: dictionary.footer.links.home, href: "#hero" },
    { label: dictionary.footer.links.whyUs, href: "#why-us" },
    { label: dictionary.footer.links.joinUs, href: "#final-cta" },
  ];

  return (
    <footer className="px-6 py-12 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[34px] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-white)_0%,rgba(255,255,255,0.92)_100%)] shadow-[0_18px_60px_rgba(0,0,0,0.06)] backdrop-blur-sm"
        >
          <div className="relative px-8 py-10 md:px-10 md:py-12">
            <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,11,11,0.08),transparent_28%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,158,96,0.06),transparent_24%)]" />

            <div className="relative z-10 flex flex-col gap-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-[760px]">
                  <div className="text-[14px] font-medium uppercase tracking-[0.22em] text-[var(--color-primary)]">
                    {dictionary.footer.badge}
                  </div>

                  <p className="mt-2 max-w-[620px] text-[18px] leading-[1.65] text-[var(--color-black)]/60">
                    {dictionary.footer.text}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-start rounded-full border border-[var(--color-border)] bg-[var(--color-white)]/80 px-5 py-3 text-[15px] text-[var(--color-black)]/65 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_14px_rgba(198,11,11,0.35)]" />
                  {dictionary.footer.marketLabel}
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-6 border-t border-[var(--color-border)] pt-8 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  {footerLinks.map((link) => (
                    <motion.div key={link.label} variants={itemVariants}>
                      <Link
                        href={link.href}
                        className="text-[16px] font-medium text-[var(--color-black)]/65 transition-colors duration-300 hover:text-[var(--color-primary)]"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={itemVariants}
                  className="text-[15px] text-[var(--color-black)]/40"
                >
                  {dictionary.footer.copyright}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}