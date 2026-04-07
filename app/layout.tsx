import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import { LanguageProvider } from "@/app/components/providers/LanguageProvider";
import LanguageToggle from "@/app/components/layout/LanguageToggle";
import LenisProvider from "@/app/components/providers/LenisProvider";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing page project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <LenisProvider>
            <Navbar />
            <LanguageToggle />
            {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}