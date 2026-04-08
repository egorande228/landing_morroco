"use client";

import { useLanguage } from "@/app/components/providers/LanguageProvider";

type PhoneDataProps = {
  revealDelay?: number;
};

export default function PhoneData({
  revealDelay: _revealDelay,
}: PhoneDataProps) {
  const { dictionary } = useLanguage();
  const phone = dictionary.partnerHero.phone;

  return (
    <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,#d61f2c_0%,#8d0f17_24%,#120203_50%,#0b0b0c_100%)] text-[var(--color-white)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-8%] h-[180px] w-[180px] rounded-full bg-[var(--color-white)]/10 blur-[60px]" />
        <div className="absolute right-[-10%] top-[12%] h-[160px] w-[160px] rounded-full bg-[#006233]/18 blur-[56px]" />
        <div className="absolute left-1/2 top-[42%] h-[140px] w-[86%] -translate-x-1/2 rounded-full bg-[var(--color-black)]/60 blur-[42px]" />
      </div>

      <div className="relative flex h-full flex-col px-5 pb-5 pt-12">
        <div>
          <div className="inline-flex rounded-full border border-[var(--color-white)]/10 bg-[var(--color-white)]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-white)]/78 backdrop-blur-sm">
            {phone.affIdLabel}: {phone.affIdValue}
          </div>

          <h2 className="mt-4 text-[27px] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-white)]">
            {phone.titleLine1}
            <br />
            {phone.titleLine2}
          </h2>

          <p className="mt-3 max-w-[190px] text-[12px] leading-[1.45] text-[var(--color-white)]/72">
            {phone.description}
          </p>

          <div className="mt-5 rounded-[24px] border border-[var(--color-white)]/10 bg-[var(--color-white)]/8 px-4 pb-4 pt-3 shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-white)]/55">
                  {phone.depositsLabel}
                </div>
                <div className="mt-1 text-[16px] font-medium tracking-[-0.04em] text-[var(--color-white)]">
                  {phone.depositsValue}
                </div>
              </div>

              <div className="rounded-full border border-[var(--color-white)]/10 bg-[var(--color-white)]/8 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-[var(--color-white)]/60">
                {phone.depositsRange}
              </div>
            </div>

            <div className="mt-3">
              <svg
                viewBox="0 0 240 90"
                className="h-[84px] w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="heroAffiliateStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                    <stop offset="55%" stopColor="rgba(255,255,255,0.92)" />
                    <stop offset="100%" stopColor="rgba(0,98,51,0.95)" />
                  </linearGradient>

                  <linearGradient id="heroAffiliateFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>

                <line
                  x1="0"
                  y1="16"
                  x2="240"
                  y2="16"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="45"
                  x2="240"
                  y2="45"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="74"
                  x2="240"
                  y2="74"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />

                <path
                  d="M0 78 C18 74, 24 66, 40 62 C55 58, 68 64, 82 54 C96 44, 108 34, 124 36 C140 38, 150 50, 164 40 C180 28, 194 12, 210 16 C224 20, 232 18, 240 10 L240 90 L0 90 Z"
                  fill="url(#heroAffiliateFill)"
                />

                <path
                  d="M0 78 C18 74, 24 66, 40 62 C55 58, 68 64, 82 54 C96 44, 108 34, 124 36 C140 38, 150 50, 164 40 C180 28, 194 12, 210 16 C224 20, 232 18, 240 10"
                  fill="none"
                  stroke="url(#heroAffiliateStroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <circle cx="82" cy="54" r="3.5" fill="rgba(255,255,255,0.85)" />
                <circle cx="164" cy="40" r="3.5" fill="rgba(255,255,255,0.9)" />
                <circle cx="240" cy="10" r="4" fill="#006233" />
              </svg>
            </div>

            <div className="mt-2 flex items-center justify-between text-[9px] uppercase tracking-[0.14em] text-[var(--color-white)]/40">
              <span>{phone.chartDayMon}</span>
              <span>{phone.chartDayTue}</span>
              <span>{phone.chartDayWed}</span>
              <span>{phone.chartDayThu}</span>
              <span>{phone.chartDayFri}</span>
              <span>{phone.chartDaySat}</span>
              <span>{phone.chartDaySun}</span>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="rounded-[28px] border border-[var(--color-white)]/10 bg-[var(--color-white)]/8 p-3 shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[22px] border border-[var(--color-white)]/8 bg-[var(--color-black)]/10 p-4">
                <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-white)]/55">
                  {phone.cpaLabel}
                </div>
                <div className="mt-2 text-[20px] font-medium tracking-[-0.04em] text-[var(--color-white)]">
                  {phone.cpaValue}
                </div>
              </div>

              <div className="rounded-[22px] border border-[var(--color-white)]/8 bg-[var(--color-black)]/10 p-4">
                <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-white)]/55">
                  {phone.revShareLabel}
                </div>
                <div className="mt-2 text-[20px] font-medium tracking-[-0.04em] text-[var(--color-white)]">
                  {phone.revShareValue}
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-[22px] border border-[var(--color-white)]/8 bg-[var(--color-black)]/10 p-4">
              <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-white)]/55">
                {phone.activePlayersLabel}
              </div>
              <div className="mt-2 text-[22px] font-medium tracking-[-0.04em] text-[var(--color-white)]">
                {phone.activePlayersValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}