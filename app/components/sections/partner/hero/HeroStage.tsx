"use client";

import { useState } from "react";
import HeroPartnerItem from "./HeroPartnerItem";
import { heroPartnerItems } from "@/lib/heroBlueStageData";

export default function HeroBlueStage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative h-[600px] overflow-hidden rounded-[44px] bg-[var(--color-primary)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.18),transparent_36%)]" />

      <div className="pointer-events-none absolute left-1/2 top-[118px] h-px w-[90%] -translate-x-1/2 bg-white/18" />

      <div className="pointer-events-none absolute left-1/2 top-[44px] -translate-x-1/2 whitespace-nowrap text-[156px] font-semibold uppercase leading-none tracking-[-0.07em] text-white/24">
        MELBET
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.14),transparent_60%)]" />

      {/* Moroccan Flag Star - Centered */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          className="h-60 w-60"
          fill="none"
          stroke="#006233"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="120 45 225 195"
        >
          <path d="M 225 75 L 269.0835 210.6765 L 153.6705 126.8235 L 296.3295 126.8235 L 180.9165 210.6765 Z" />
        </svg>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-8 pb-12">
        <p className="max-w-[980px] text-center text-[34px] font-normal leading-[1.12] tracking-[-0.05em] text-white">
          Partnering with top tier brands to revolutionize the E-gaming industry.
        </p>

        <div className="mt-8 w-full overflow-hidden py-5">
          <div className="hero-partner-marquee flex flex-nowrap items-start gap-16">
            {[...heroPartnerItems, ...heroPartnerItems].map((item, index) => (
              <HeroPartnerItem
                key={`${item.id}-${index}`}
                item={item}
                isActive={hoveredId === item.id}
                isDimmed={hoveredId !== null && hoveredId !== item.id}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}