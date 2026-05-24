import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import MarketBackdrop from "@/components/layout/MarketBackdrop";
import { getMoroccoHomeContent } from "@/content/markets/morocco";
import { moroccoGlobalVars } from "@/config/morocco.globals";
import { moroccoThemeVars } from "@/themes/morocco";

const defaultContent = getMoroccoHomeContent("en");

export const metadata: Metadata = {
  title: defaultContent.seo.title,
  description: defaultContent.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="h-full" suppressHydrationWarning>
      <body
        style={{ ...moroccoThemeVars, ...moroccoGlobalVars } as CSSProperties}
        className="min-h-full bg-[var(--color-canvas-base)] text-[var(--color-text-base)] antialiased"
      >
        <div className="app-root">
          <MarketBackdrop />
          {children}
        </div>
      </body>
    </html>
  );
}
