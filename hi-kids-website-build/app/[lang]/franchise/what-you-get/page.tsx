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
      <section className="bg-accent relative overflow-hidden pt-28 pb-32 lg:pb-48 min-h-[95vh] flex flex-col justify-center py-32 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-kids-pattern mix-blend-overlay pointer-events-none" />
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <div className="mx-auto max-w-[1200px] w-full text-center">
            <h1 className="font-bold tracking-tight text-white text-balance leading-tight">
              {t.title}
            </h1>
            <p className="mt-8  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-white/90 leading-relaxed text-pretty">
              {t.subtitle}
            </p>
          </div>
        </div>
        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      <section className=" py-32 lg:py-48 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="mx-auto max-w-[1700px] px-4 lg:px-8">
          <div className="grid gap-20 xl:gap-32 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
            {t.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-[2.5rem] border border-slate-100 bg-[#fafafa] p-14 lg:p-20 lg:p-16 transition-all hover:shadow-2xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] hover:-translate-y-4 lg:hover:-translate-y-6 duration-500"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-[3rem] lg:rounded-[4rem] lg:rounded-[2.5rem] bg-white shadow-sm text-secondary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className=" text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                    <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest">Included</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Link
              href={`/${lang}/franchise/inquiry`}
              className="group inline-flex items-center gap-5 rounded-full bg-[var(--hikids-blue)] px-12 py-7  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-white shadow-[0_20px_40px_-10px_rgba(75,184,233,0.3)] transition-all hover:bg-[#3ba0cc] hover:-translate-y-1 hover:scale-105"
            >
              {dict.common.cta.getStarted}
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
