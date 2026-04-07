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

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-8 pb-12">
        <p className="max-w-[980px] text-center text-[34px] font-normal leading-[1.12] tracking-[-0.05em] text-white">
          Partnering with top tier brands to revolutionize the E-gaming industry.
        </p>

        <div className="mt-8 w-full overflow-hidden py-5">
          <div className="hero-partner-marquee flex min-w-max items-start gap-16">
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