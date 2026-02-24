import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Franchise Model",
};

export default async function ModelPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.model;

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

      {/* Steps Timeline */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-px"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-12">
              {t.steps.map((step, i) => (
                <div
                  key={step.title}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Number */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md ${
                      i % 2 === 0 ? "md:mr-[calc(50%+24px)]" : "md:ml-[calc(50%+24px)]"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(var(--muted))" />

      {/* Investment */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.investment.title}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {t.investment.description}
          </p>
          <Link
            href={`/${lang}/franchise/inquiry`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
          >
            {t.investment.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
