"use client";

type RollingTextProps = {
  text: string;
  active?: boolean;
  className?: string;
  staggerMs?: number;
  shiftX?: number;
};

export default function RollingText({
  text,
  active = false,
  className = "",
  staggerMs = 22,
  shiftX = 6,
}: RollingTextProps) {
  return (
    <span
      className={["inline-flex whitespace-pre leading-none", className].join(" ")}
      aria-label={text}
    >
      {text.split("").map((char, index) => {
        const isSpace = char === " ";

        return (
          <span
            key={`${char}-${index}`}
            className={[
              "relative inline-block h-[1.15em] overflow-hidden align-top",
              isSpace ? "w-[0.34em]" : "",
            ].join(" ")}
          >
            <span
              className={[
                "flex flex-col will-change-transform transition-transform duration-350 ease-out",
                active ? "-translate-y-[1.15em]" : "group-hover:-translate-y-[1.15em]",
              ].join(" ")}
              style={{ transitionDelay: `${index * staggerMs}ms` }}
            >
              <span className="flex h-[1.15em] items-center whitespace-pre">
                {isSpace ? "\u00A0" : char}
              </span>

              <span
                className="flex h-[1.15em] items-center whitespace-pre"
                style={{ transform: `translateX(${shiftX}px)` }}
              >
                {isSpace ? "\u00A0" : char}
              </span>
            </span>
          </span>
        );
      })}
    </span>
  );
}