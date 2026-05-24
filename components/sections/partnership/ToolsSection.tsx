import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import type { PartnershipContent } from "@/schemas/landing";

export default function ToolsSection({ content }: { content: PartnershipContent["tools"] }) {
  return (
    <SectionShell id="tools" density="tight">
      <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="space-y-6">
          <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />

          <div className="grid gap-3 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="type-meta text-[var(--color-secondary)]">{stat.label}</p>
                <p className="type-metric mt-2 text-[var(--color-foreground)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <SurfaceCard variant="stage" className="grid gap-4 p-[var(--card-padding)]">
          {content.items.map((item, index) => (
            <SurfaceCard key={item.title} variant={index === 1 ? "accent" : "glass"} className="tools-item">
              <div className="space-y-3">
                <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
                <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="pill pill--soft">
                    {tag}
                  </span>
                ))}
              </div>
            </SurfaceCard>
          ))}
        </SurfaceCard>
      </div>
    </SectionShell>
  );
}
