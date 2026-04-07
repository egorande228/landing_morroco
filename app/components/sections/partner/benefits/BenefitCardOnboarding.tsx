"use client";

import BenefitShell from "./BenefitShell";

type BenefitCardOnboardingProps = {
  badge: string;
  title: string;
  text: string;
};

export default function BenefitCardOnboarding({
  badge,
  title,
  text,
}: BenefitCardOnboardingProps) {
  return (
    <BenefitShell className="min-h-[640px] px-10 py-10">
      <div className="grid h-full grid-cols-[520px_1fr] gap-16">
        <div className="relative flex items-center justify-center">
          <div className="relative h-[420px] w-[420px] rounded-[34px] bg-[linear-gradient(135deg,var(--color-primary-soft),rgba(255,255,255,0.55))] p-8">
            <div className="relative mx-auto mt-10 flex h-[290px] w-[290px] items-center justify-center">
              <div className="absolute h-[240px] w-[240px] rounded-full border border-[var(--color-border)] bg-[var(--color-white)]/70" />
              <div className="absolute h-[170px] w-[170px] rounded-full border border-[var(--color-border)] bg-[var(--color-primary-soft)]/50" />
              <div className="absolute h-[90px] w-[90px] rounded-full bg-[var(--color-primary)] text-center text-[34px] leading-[90px] text-[var(--color-white)]">
                +
              </div>

              <div className="absolute left-[6px] top-[84px] rounded-full bg-[var(--color-white)] px-4 py-2 text-[14px] text-[var(--color-fg)] shadow-[var(--shadow-soft)]">
                Sign up
              </div>
              <div className="absolute right-[0px] top-[24px] rounded-full bg-[var(--color-white)] px-4 py-2 text-[14px] text-[var(--color-fg)] shadow-[var(--shadow-soft)]">
                Get approved
              </div>
              <div className="absolute right-[6px] bottom-[84px] rounded-full bg-[var(--color-white)] px-4 py-2 text-[14px] text-[var(--color-fg)] shadow-[var(--shadow-soft)]">
                Start earning
              </div>
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
                <span>A smoother first experience.</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  ✓
                </span>
                <span>Faster movement from interest to action.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BenefitShell>
  );
}