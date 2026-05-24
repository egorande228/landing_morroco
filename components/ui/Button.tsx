import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/format";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  intent?: "primary" | "secondary" | "ghost";
  iconSrc?: string;
  iconAlt?: string;
  external?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  intent = "primary",
  iconSrc,
  iconAlt = "",
  external = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "button",
    intent === "primary" && "button--primary",
    intent === "secondary" && "button--secondary",
    intent === "ghost" && "button--ghost",
    className,
  );

  const content = (
    <>
      {iconSrc ? <Image src={iconSrc} alt={iconAlt} width={16} height={16} className="button__icon" /> : null}
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
