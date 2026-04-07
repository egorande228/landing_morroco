"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
  text: string;
  startDelay?: number;
  charDelay?: number;
  className?: string;
};

export default function Typewriter({
  text,
  startDelay = 0,
  charDelay = 20,
  className = "",
}: TypewriterProps) {
  const characters = useMemo(() => Array.from(text), [text]);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    setVisibleCount(0);

    timeoutId = setTimeout(() => {
      let index = 0;

      intervalId = setInterval(() => {
        index += 1;
        setVisibleCount(index);

        if (index >= characters.length && intervalId) {
          clearInterval(intervalId);
        }
      }, charDelay);
    }, startDelay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [characters.length, startDelay, charDelay, text]);

  return (
    <span className={className}>
      {characters.slice(0, visibleCount).join("")}
    </span>
  );
}