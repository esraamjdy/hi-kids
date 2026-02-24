import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Trophy, Settings, Globe, ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Why Join HiKids",
};

export default async function WhyJoinPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.whyJoin;

  const icons = [TrendingUp, Trophy, Settings, Globe];

  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl text-balance">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-card-foreground">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href={`/${lang}/franchise/inquiry`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
            >
              {dict.common.cta.applyNow}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
