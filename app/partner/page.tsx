import { redirect } from "next/navigation";
import { localizeHref, resolveMoroccoLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LegacyPartnerPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const locale = resolveMoroccoLocale(resolvedSearchParams);
  redirect(localizeHref("/partnership", locale));
}
