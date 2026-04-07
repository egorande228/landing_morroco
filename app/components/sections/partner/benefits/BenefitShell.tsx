type BenefitShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BenefitShell({
  children,
  className = "",
}: BenefitShellProps) {
  return (
    <article
      className={[
        "relative overflow-hidden rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm",
        className,
      ].join(" ")}
    >
      {children}
    </article>
  );
}