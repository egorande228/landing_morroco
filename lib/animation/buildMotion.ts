type RevealInput = {
  delay: number;
  duration: number;
  y: number;
  blur?: number;
  scale?: number;
};

export function buildRevealMotion({
  delay,
  duration,
  y,
  blur = 0,
  scale = 1,
}: RevealInput) {
  return {
    initial: {
      opacity: 0,
      y,
      scale,
      ...(blur > 0 ? { filter: `blur(${blur}px)` } : {}),
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      ...(blur > 0 ? { filter: "blur(0px)" } : {}),
    },
    transition: {
      delay: delay / 1000,
      duration: duration / 1000,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

type TypewriterInput = {
  startDelay: number;
  charDelay: number;
};

export function buildTypewriterTiming({
  startDelay,
  charDelay,
}: TypewriterInput) {
  return {
    startDelayMs: startDelay,
    charDelayMs: charDelay,
    startDelaySec: startDelay / 1000,
    charDelaySec: charDelay / 1000,
  } as const;
}