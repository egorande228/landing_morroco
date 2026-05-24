import Image from "next/image";
import Link from "next/link";
import type { FooterContent } from "@/schemas/landing";

export default function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="footer-shell px-4 pb-10 pt-6 md:px-6">
      <div className="container-main">
        <div className="footer-panel">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
            <div>
              <p className="eyebrow text-[var(--color-secondary)]">{content.brand}</p>
              <p className="mt-4 max-w-[34rem] text-[var(--color-foreground-soft)]">{content.body}</p>
            </div>

            <div>
              <p className="type-meta text-[var(--color-secondary)]">{content.navigationLabel}</p>
              <div className="mt-4 grid gap-3">
                {content.navigationLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="type-meta text-[var(--color-secondary)]">{content.routeLabel}</p>
              <div className="mt-4 grid gap-3">
                {content.routeLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="type-meta text-[var(--color-secondary)]">{content.contactLabel}</p>
              <div className="mt-4 grid gap-3">
                {content.contactLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="footer-contact"
                  >
                    {link.iconSrc ? (
                      <Image src={link.iconSrc} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                    ) : null}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/8 pt-4 text-sm text-[var(--color-foreground-soft)]">
            {content.legal}
          </div>
        </div>
      </div>
    </footer>
  );
}
