"use client";

import { useState } from "react";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import type { Language } from "@/lib/dictionary";

const languages: Language[] = ["en", "ar", "fr"];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-[100]">
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-black/10 bg-black text-[12px] font-medium uppercase tracking-[0.08em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition hover:scale-[1.03]"
        >
          {language}
        </button>

        <div
          className={[
            "absolute bottom-[54px] left-0 flex flex-col gap-2 transition-all duration-200",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0",
          ].join(" ")}
        >
          {languages
            .filter((item) => item !== language)
            .map((item) => (
              <button
                key={item}
                onClick={() => {
                  setLanguage(item);
                  setOpen(false);
                }}
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-black/10 bg-white text-[11px] font-medium uppercase tracking-[0.08em] text-black shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:scale-[1.03]"
              >
                {item}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}