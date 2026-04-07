"use client";

import BenefitShell from "./BenefitShell";

type BenefitCardSupportProps = {
  badge: string;
  title: string;
  text: string;
};

export default function BenefitCardSupport({
  badge,
  title,
  text,
}: BenefitCardSupportProps) {
  return (
    <BenefitShell className="min-h-[640px] px-10 py-10">
      <div className="grid h-full grid-cols-[520px_1fr] gap-16">
        <div className="relative flex items-center justify-center">
          <div className="relative h-[420px] w-[420px] rounded-[34px] bg-[linear-gradient(135deg,var(--color-primary-soft),rgba(255,255,255,0.55))] p-8">
            <div className="absolute left-[24px] top-[32px] rounded-full bg-[var(--color-white)] px-5 py-3 text-[14px] text-[var(--color-fg)] shadow-[var(--shadow-soft)]">
              Dedicated manager
            </div>

            <div className="absolute right-[24px] top-[88px] rounded-full bg-[var(--color-white)] px-5 py-3 text-[14px] text-[var(--color-fg)] shadow-[var(--shadow-soft)]">
              Quick replies
            </div>

            <div className="absolute left-[42px] bottom-[62px] rounded-full bg-[var(--color-white)] px-5 py-3 text-[14px] text-[var(--color-fg)] shadow-[var(--shadow-soft)]">
              Real guidance
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] text-[52px] text-[var(--color-white)] shadow-[0_20px_45px_rgba(0,0,0,0.12)]">
              ✦
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="max-w-[560px]">
            <div className="text-[16px] font-medium text-[var(--color-primary)]">
              • {badge}
            </div>

            <h3 className="mt-8 text-[64px] font-medium leading-[0.95] tracking-[-0.05em] text-[var(--color-fg)]">
              {title}
            </h3>

            <p className="mt-8 text-[22px] leading-[1.5] text-[var(--color-muted)]">
              {text}
            </p>

            <div className="mt-10 space-y-5 text-[18px] text-[var(--color-fg)]">
              <div className="flex items-center gap-4">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  ✓
                </span>
                <span>More confidence in daily work.</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  ✓
                </span>
                <span>Less friction when scaling.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BenefitShell>
  );
}