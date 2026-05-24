"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  once?: boolean;
  threshold?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  y = 28,
  blur = 8,
  once = true,
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${y}px, 0)`,
        filter: isVisible ? "blur(0px)" : `blur(${blur}px)`,
        transition: [
          `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          `filter ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        ].join(", "),
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}