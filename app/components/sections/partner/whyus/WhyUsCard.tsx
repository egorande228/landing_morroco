type WhyUsCardProps = {
  index: number;
  title: string;
  text: string;
  style?: React.CSSProperties;
};

export default function WhyUsCard({
  index,
  title,
  text,
  style,
}: WhyUsCardProps) {
  return (
    <div style={style} className="absolute inset-0">
      <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-white)] p-[var(--card-padding)] shadow-soft">
        <div className="flex h-full flex-col justify-between">

          <div className="text-[var(--text-small)] text-[var(--color-muted)]">
            0{index + 1}
          </div>

          <div>
            <h3 className="text-[var(--text-subtitle)] font-medium leading-[1.2]">
              {title}
            </h3>

            <p className="mt-4 text-[var(--text-body)] text-[var(--color-muted)] leading-[1.6]">
              {text}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}