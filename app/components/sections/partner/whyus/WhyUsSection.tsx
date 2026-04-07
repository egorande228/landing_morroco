"use client";

import { useEffect, useRef, useState } from "react";
import WhyUsCard from "./WhyUsCard";

const cards = [
  {
    title: "Flexible models",
    text: "Work with structures that adapt to your strategy and scale with your growth.",
  },
  {
    title: "Clear tracking",
    text: "Understand performance, activity, and results through a cleaner system.",
  },
  {
    title: "Real support",
    text: "Grow with guidance and onboarding that actually help you move forward.",
  },
];

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

export default function WhyUsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const total = rect.height - vh;
      if (total <= 0) return;

      const scrolled = clamp(-rect.top, 0, total);
      setProgress(scrolled / total);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[340vh] px-[var(--section-padding-x)]"
    >
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[var(--container-main)]">

          {/* ================= HEADER ================= */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex rounded-full border border-[var(--color-border)] px-4 py-2 text-[var(--text-small)] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Why us
            </div>

            <h2 className="mt-6 max-w-[var(--text-max)] text-[var(--text-title)] font-medium leading-[1.05] tracking-[-0.04em] text-[var(--color-fg)]">
              Experience a partnership model built for clarity and growth.
            </h2>
          </div>

          {/* ================= CARDS ================= */}
          <div className="relative mt-[160px] h-[420px]">
            {cards.map((card, i) => {
              const intro = 0.15;
              const totalCards = cards.length;
              const cardZone = 1 - intro;
              const phase = cardZone / totalCards;

              const start = intro + i * phase;
              const end = start + phase;

              const local = clamp((progress - start) / (phase * 0.7), 0, 1);

              let opacity = 0;
              let blur = 18;
              let y = 50;

              // ENTRY
              if (progress >= start && progress <= end) {
                opacity = local;
                blur = 18 - local * 18;
                y = 50 - local * 50;
              }

              // FADE OUT (smooth, not instant)
              if (progress > end) {
                const fadeOut = clamp((progress - end) / (phase * 0.8), 0, 1);

                opacity = 1 - fadeOut * 0.8;
                blur = 6 + fadeOut * 8;
                y = -10 - fadeOut * 10;
              }

              return (
                <WhyUsCard
                  key={card.title}
                  index={i}
                  title={card.title}
                  text={card.text}
                  style={{
                    opacity,
                    transform: `translateY(${y}px)`,
                    filter: `blur(${blur}px)`,
                    zIndex: i + 1,
                  }}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}