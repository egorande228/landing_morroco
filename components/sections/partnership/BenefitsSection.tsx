import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import type { PartnershipContent } from "@/schemas/landing";

export default function BenefitsSection({ content }: { content: PartnershipContent["benefits"] }) {
  return (
    <SectionShell id="benefits" density="tight">
      <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />

      <div className="mt-8 grid gap-[var(--grid-gap)] lg:grid-cols-3">
        {content.items.map((item, index) => (
          <SurfaceCard key={item.title} variant={index === 1 ? "accent" : "glass"} className="card-stack h-full">
            <span className="pill w-fit">{`0${index + 1}`}</span>
            <div className="space-y-3">
              <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
              <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
            </div>
            <ul className="grid gap-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="feature-row">
                  <span className="feature-row__dot" aria-hidden />
                  <span className="type-body text-[var(--color-foreground)]">{bullet}</span>
                </li>
              ))}
            </ul>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
