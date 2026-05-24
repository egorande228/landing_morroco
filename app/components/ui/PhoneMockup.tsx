"use client";

import type { ReactNode } from "react";

type PhoneMockupProps = {
  children?: ReactNode;
  className?: string;
  frameClassName?: string;
  screenClassName?: string;
};

export default function PhoneMockup({
  children,
  className = "",
  frameClassName = "",
  screenClassName = "",
}: PhoneMockupProps) {
  return (
    <div
      className={[
        "relative h-[640px] w-[320px] shrink-0",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "relative h-full w-full overflow-hidden rounded-[54px]",
          "border border-[var(--color-black)]/10",
          "bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.08)_100%)]",
          "p-[10px]",
          "shadow-[0_40px_100px_rgba(0,0,0,0.24)]",
          frameClassName,
        ].join(" ")}
      >
        <div className="absolute left-1/2 top-[9px] z-20 h-[5px] w-[96px] -translate-x-1/2 rounded-full bg-[var(--color-black)]/70" />

        <div className="absolute left-1/2 top-[18px] z-20 flex h-[34px] w-[126px] -translate-x-1/2 items-center justify-center rounded-full bg-[var(--color-black)]/92 shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
          <div className="absolute left-[14px] h-[10px] w-[10px] rounded-full bg-[var(--color-black)]/80 ring-1 ring-[var(--color-white)]/6" />
          <div className="h-[8px] w-[56px] rounded-full bg-[var(--color-black)]/65" />
          <div className="absolute right-[14px] h-[8px] w-[8px] rounded-full bg-[var(--color-black)]/75 ring-1 ring-[var(--color-white)]/5" />
        </div>

        <div className="absolute left-[-2px] top-[132px] h-[76px] w-[3px] rounded-r-full bg-[var(--color-black)]/14" />
        <div className="absolute left-[-2px] top-[224px] h-[76px] w-[3px] rounded-r-full bg-[var(--color-black)]/14" />
        <div className="absolute right-[-2px] top-[188px] h-[108px] w-[3px] rounded-l-full bg-[var(--color-black)]/16" />

        <div
          className={[
            "relative h-full w-full overflow-hidden rounded-[44px]",
            "bg-[var(--color-surface-2)]",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
            screenClassName,
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </div>
  );
}