"use client";

import RollingLabel from "@/app/components/ui/RollingLabel";

type NavItemProps = {
  label: string;
  active?: boolean;
};

export default function NavItem({
  label,
  active = false,
}: NavItemProps) {
  return (
    <button
      className={[
        "group flex h-full flex-1 items-center justify-center rounded-full px-6 text-[16px] font-medium leading-none tracking-[-0.03em] transition-colors duration-300",
        active ? "bg-[var(--color-primary-soft)]" : "bg-transparent",
      ].join(" ")}
      type="button"
    >
      <span className="mr-2 flex w-[10px] items-center justify-center overflow-hidden">
        <span
          className={[
            "text-[16px] leading-none text-[var(--color-accent)] transition-all duration-300",
            active
              ? "translate-y-0 opacity-100"
              : "translate-y-[8px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
          ].join(" ")}
        >
          •
        </span>
      </span>

      <RollingLabel text={label} active={active} />
    </button>
  );
}