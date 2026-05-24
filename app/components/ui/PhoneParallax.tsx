"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type PhoneParallaxProps = {
  children: ReactNode;
};

export default function PhoneParallax({ children }: PhoneParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const px = e.clientX / vw;
        const py = e.clientY / vh;

        const moveX = (px - 0.5) * 28;
        const moveY = (py - 0.5) * 22;

        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    }

    function handleMouseLeaveWindow() {
      const el = ref.current;
      if (!el) return;

      el.style.transform = "translate3d(0px, 0px, 0)";
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeaveWindow);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="transform-gpu transition-transform duration-500 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}