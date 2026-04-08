"use client";

type RollingLabelProps = {
  text: string;
  active?: boolean;
  baseColorClass?: string;
  hoverColorClass?: string;
};

function isArabicText(value: string) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(value);
}

export default function RollingLabel({
  text,
  active = false,
  baseColorClass = "text-[var(--color-black)]",
  hoverColorClass = "text-[var(--color-primary)]",
}: RollingLabelProps) {
  const arabic = isArabicText(text);

  if (arabic) {
    return (
      <span className="relative inline-grid whitespace-pre leading-none" dir="rtl">
        <span
          className={[
            "col-start-1 row-start-1 inline-block transition-all duration-300 ease-out",
            active
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0",
            baseColorClass,
          ].join(" ")}
        >
          {text}
        </span>

        <span
          className={[
            "col-start-1 row-start-1 inline-block transition-all duration-300 ease-out",
            active
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
            hoverColorClass,
          ].join(" ")}
        >
          <span className="inline-block translate-x-[4px]">{text}</span>
        </span>
      </span>
    );
  }

  const chars = text.split("");

  return (
    <span className="relative inline-grid whitespace-pre leading-none">
      <span className="col-start-1 row-start-1 inline-flex">
        {chars.map((char, index) => (
          <span
            key={`top-${index}`}
            className={[
              "inline-block transition-all duration-300 ease-out",
              active
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0",
              baseColorClass,
              char === " " ? "w-[0.35em]" : "",
            ].join(" ")}
            style={{ transitionDelay: `${index * 18}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      <span className="col-start-1 row-start-1 inline-flex">
        {chars.map((char, index) => (
          <span
            key={`bottom-${index}`}
            className={[
              "inline-block translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100",
              active ? "!translate-y-0 !opacity-100" : "",
              hoverColorClass,
              char === " " ? "w-[0.35em]" : "",
            ].join(" ")}
            style={{ transitionDelay: `${index * 18}ms` }}
          >
            <span className="inline-block translate-x-[4px]">
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}