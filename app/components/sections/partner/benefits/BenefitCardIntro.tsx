"use client";

import BenefitShell from "./BenefitShell";

type BenefitCardIntroProps = {
  badge: string;
  title: string;
  text: string;
};

export default function BenefitCardIntro({
  badge,
  title,
  text,
}: BenefitCardIntroProps) {
  return (
    <BenefitShell className="min-h-[640px] px-10 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.45),transparent_30%)]" />

      <div className="grid h-full grid-cols-[520px_1fr] gap-16">
        <div className="relative flex items-center justify-center">
          <div className="relative h-[420px] w-[420px] rounded-[34px] bg-[linear-gradient(135deg,var(--color-primary-soft),rgba(255,255,255,0.6))] p-8">
            <div className="absolute left-[26px] top-[66px] h-[220px] w-[220px] opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:44px_44px]" />

            <div className="absolute right-[20px] bottom-[20px] h-[160px] w-[160px] opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:44px_44px]" />

            <div className="relative mx-auto mt-8 h-[300px] w-[260px] rounded-[30px] border border-[var(--color-border)] bg-[var(--color-white)] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <div className="text-[20px] font-medium text-[var(--color-fg)]">
                  Reach
                </div>
                <div className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[12px] text-[var(--color-muted)]">
                  Month
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <div className="relative h-[120px] w-[180px] overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-[100px] rounded-t-[100px] border-[22px] border-b-0 border-[var(--color-primary-soft)]" />
                  <div className="absolute left-[18px] right-[50px] bottom-0 h-[100px] rounded-t-[100px] border-[22px] border-b-0 border-[var(--color-primary)]" />
                  <div className="absolute inset-x-0 bottom-[22px] text-center text-[32px] font-medium text-[var(--color-fg)]">
                    75%
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-[14px]">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[var(--color-primary)]" />
                    <span className="text-[var(--color-fg)]">Affiliates</span>
                  </div>
                  <div className="text-[var(--color-muted)]">55%</div>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[var(--color-primary-soft)]" />
                    <span className="text-[var(--color-fg)]">Agents</span>
                  </div>
                  <div className="text-[var(--color-muted)]">20%</div>
                </div>
              </div>

              <div className="mt-6 rounded-[14px] border border-[var(--color-fg)]/30 px-5 py-4 text-center text-[18px] text-[var(--color-fg)]">
                View all activity →
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
                <span>Better visibility into performance.</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  ✓
                </span>
                <span>Cleaner decision making for growth.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BenefitShell>
  );
}