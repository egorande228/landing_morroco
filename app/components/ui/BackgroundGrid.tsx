type BackgroundGridProps = {
  className?: string;
};

export default function BackgroundGrid({
  className = "",
}: BackgroundGridProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      ].join(" ")}
    >
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.9) 1.2px, transparent 1.2px),
            linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)),
            linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.9))
          `,
          backgroundSize: `
            98px 98px,
            98px 98px,
            98px 98px,
            12px 1px,
            1px 12px
          `,
          backgroundPosition: `
            center 120px,
            center 120px,
            center 120px,
            center 120px,
            center 120px
          `,
          backgroundRepeat: "repeat",
          maskImage:
            "radial-gradient(ellipse at center, black 18%, rgba(0,0,0,0.88) 44%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 18%, rgba(0,0,0,0.88) 44%, transparent 80%)",
        }}
      />
    </div>
  );
}