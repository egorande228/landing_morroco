import type { MarketTheme } from "@/schemas/landing";
import { createCssVars } from "@/themes/base";

export const moroccoTheme: MarketTheme = {
  font: {
    display: '"Aptos Display", "Segoe UI Variable Display", "Trebuchet MS", sans-serif',
    body: '"Aptos", "Segoe UI Variable Text", "Segoe UI", sans-serif',
  },
  color: {
    canvas: {
      top: "#181413",
      base: "#0c0a09",
      bottom: "#060505",
    },
    text: {
      base: "#f1ece4",
      strong: "#fffaf2",
      soft: "rgba(241, 236, 228, 0.72)",
      muted: "rgba(241, 236, 228, 0.5)",
      onLight: "#1f1813",
      onLightSoft: "rgba(31, 24, 19, 0.58)",
      onBrand: "#fff8f1",
    },
    brand: {
      primary: "#c35b3d",
      primarySoft: "rgba(195, 91, 61, 0.16)",
      primaryStrong: "#e18963",
      secondary: "#d77956",
      secondarySoft: "rgba(215, 121, 86, 0.14)",
      accent: "#b85438",
      accentSoft: "rgba(184, 84, 56, 0.14)",
      accentStrong: "#e18963",
    },
    surface: {
      base: "rgba(17, 14, 13, 0.82)",
      raised: "rgba(11, 9, 8, 0.94)",
      accent: "rgba(30, 23, 20, 0.96)",
      overlay: "rgba(21, 17, 16, 0.92)",
      light: "rgba(245, 239, 230, 0.97)",
      lightStrong: "#fffaf4",
    },
    line: {
      soft: "rgba(241, 236, 228, 0.09)",
      strong: "rgba(195, 91, 61, 0.24)",
      neutral: "rgba(241, 236, 228, 0.12)",
      nav: "rgba(241, 236, 228, 0.08)",
    },
    fx: {
      grid: "rgba(241, 236, 228, 0.026)",
      glow: "rgba(195, 91, 61, 0.12)",
      glowAccent: "rgba(215, 121, 86, 0.1)",
    },
    utility: {
      white: "#fffaf2",
      black: "#0a0807",
    },
    bg: "var(--color-canvas-base)",
    bgTop: "var(--color-canvas-top)",
    foreground: "var(--color-text-base)",
    foregroundSoft: "var(--color-text-soft)",
    primary: "var(--color-brand-primary)",
    primarySoft: "var(--color-brand-primary-soft)",
    primaryStrong: "var(--color-brand-primary-strong)",
    secondary: "var(--color-brand-secondary)",
    accent: "var(--color-brand-accent)",
    accentSoft: "var(--color-brand-accent-soft)",
    surfaceStrong: "var(--color-surface-raised)",
    surfaceLightForeground: "var(--color-text-on-light)",
    borderSoft: "var(--color-line-soft)",
    borderStrong: "var(--color-line-strong)",
    border: "var(--color-line-neutral)",
    navBorder: "var(--color-line-nav)",
    gridLine: "var(--color-fx-grid)",
    glow: "var(--color-fx-glow)",
    white: "var(--color-utility-white)",
    black: "var(--color-utility-black)",
    fg: "var(--color-text-base)",
    muted: "var(--color-text-soft)",
    "surface-2": "var(--color-surface-light)",
  },
  shadow: {
    soft: "0 18px 48px rgba(0, 0, 0, 0.26)",
    card: "0 28px 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
    hero: "0 38px 120px rgba(0, 0, 0, 0.48), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
  },
};

export const moroccoThemeVars = createCssVars(moroccoTheme);
