import Button from "@/components/ui/Button";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import type { LinkItem, PartnershipContent } from "@/schemas/landing";

function CtaButton({ link }: { link: LinkItem }) {
  return (
    <Button href={link.href} external={link.external} iconSrc={link.iconSrc} className="w-full sm:w-auto">
      {link.label}
    </Button>
  );
}

export default function FinalCtaSection({
  content,
  id = "final-cta",
}: {
  content: PartnershipContent["finalCta"] | {
    eyebrow: string;
    title: string;
    body: string;
    primary: LinkItem;
    secondary: LinkItem;
  };
  id?: string;
}) {
  return (
    <SectionShell id={id} density="tight">
      <SurfaceCard variant="stage" className="cta-panel">
        <div className="max-w-3xl">
          {content.eyebrow ? <p className="eyebrow text-[var(--color-secondary)]">{content.eyebrow}</p> : null}
          <h2 className="type-heading mt-4 text-[var(--color-foreground)]">{content.title}</h2>
          <p className="type-body-lg mt-4 text-[var(--color-foreground-soft)]">{content.body}</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CtaButton link={content.primary} />
          <Button
            href={content.secondary.href}
            external={content.secondary.external}
            intent="secondary"
            iconSrc={content.secondary.iconSrc}
            className="w-full sm:w-auto"
          >
            {content.secondary.label}
          </Button>
        </div>
      </SurfaceCard>
    </SectionShell>
  );
}
