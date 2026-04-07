"use client";

import { useEffect, useRef, useState } from "react";

type StackedCardsScrollProps = {
  children: (progress: number) => React.ReactNode;
  className?: string;
  stickyClassName?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function StackedCardsScroll({
  children,
  className = "",
  stickyClassName = "",
}: StackedCardsScrollProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const node = sectionRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const passed = -rect.top;
      const next = scrollable <= 0 ? 0 : clamp(passed / scrollable, 0, 1);

      setProgress(next);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div ref={sectionRef} className={`relative h-[170vh] ${className}`}>
      <div
        className={`sticky top-[96px] flex h-[calc(100vh-96px)] items-center justify-center overflow-hidden ${stickyClassName}`}
      >
        {children(progress)}
      </div>
    </div>
  );
}