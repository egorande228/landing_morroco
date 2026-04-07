"use client";

import BenefitShell from "./BenefitShell";

type BenefitCardModelsProps = {
  badge: string;
  title: string;
  text: string;
};

export default function BenefitCardModels({
  badge,
  title,
  text,
}: BenefitCardModelsProps) {
  return (
    <BenefitShell className="min-h-[640px] px-10 py-10">
      <div className="grid h-full grid-cols-[520px_1fr] gap-16">
        <div className="relative flex items-center justify-center">
          <div className="relative h-[420px] w-[420px] rounded-[34px] bg-[linear-gradient(135deg,var(--color-primary-soft),rgba(255,255,255,0.55))] p-8">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:52px_52px]" />

            <div className="relative mx-auto mt-10 h-[290px] w-[270px] rounded-[30px] border border-[var(--color-border)] bg-[var(--color-white)] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              <div className="text-[18px] font-medium text-[var(--color-fg)]">
                Financial Growth
              </div>

              <div className="mt-8 flex h-[170px] items-end gap-3">
                {[95, 76, 48, 64, 40, 28, 18].map((h, i) => (
                  <div
                    key={i}
                    className="w-[28px] rounded-t-[10px] bg-[linear-gradient(180deg,var(--color-primary),var(--color-primary-soft))]"
                    style={{ height: `${h}px` }}
                  />
                ))}
                <svg
                  className="absolute left-[40px] top-[86px]"
                  width="180"
                  height="120"
                  viewBox="0 0 180 120"
                  fill="none"
                >
                  <path
                    d="M0 98 C28 88, 30 70, 55 58 S96 18, 122 34 S152 10, 180 0"
                    stroke="var(--color-primary)"
                    strokeWidth="4"
                  />
                </svg>
              </div>

              <div className="mt-6 flex items-center justify-between text-[12px] text-[var(--color-muted)]">
                <span>10</span>
                <span>100%</span>
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
                <span>Clearer model comparison.</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  ✓
                </span>
                <span>Better visibility into long-term value.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BenefitShell>
  );
}