import type { Metadata } from "next";
import Link from "next/link";
import {
  Key,
  BookOpen,
  Palette,
  Megaphone,
  GraduationCap,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "What You Get",
};

export default async function WhatYouGetPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.whatYouGet;

  const icons = [Key, BookOpen, Palette, Megaphone, GraduationCap, Smartphone];

  return (
    <>
      <section className="bg-gradient-to-b from-secondary/5 to-background py-20 lg:py-28">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href={`/${lang}/franchise/inquiry`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
            >
              {dict.common.cta.getStarted}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
