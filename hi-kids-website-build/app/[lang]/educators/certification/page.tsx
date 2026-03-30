import type { Metadata } from "next";
import { Award, CheckCircle2, Sparkles, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CertificationForm } from "./certification-form";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: `${dict.educators.certification.title} | HiKids Global Excellence`,
  };
}

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.certification;

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-yellow/20 pt-0">

      {/* ─── MASSIVE UI HEADER ─── */}
      <section className="py-8 lg:py-12 bg-white relative overflow-visible">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 w-full lg:-translate-x-12 xl:-translate-x-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative">
            <div className="absolute top-0 right-10 w-96 h-96 bg-[#ffde00]/10 rounded-full blur-[140px] -z-10" />
            <MotionWrapper type="fade" className="relative w-full max-w-[20rem] sm:max-w-sm md:max-w-md lg:max-w-[32rem] xl:max-w-[40rem] aspect-[4/3] z-10 mx-auto lg:mx-0 lg:-translate-x-40 xl:-translate-x-80 pointer-events-none">
              <Image src="/images/certificate.png" alt="HiKids Certificate" fill className="object-contain drop-shadow-2xl scale-[1.6] lg:scale-[1.7] xl:scale-[1.8] origin-center" />
            </MotionWrapper>

            <div className="flex-1 text-center lg:text-left pt-2 lg:translate-x-12 xl:translate-x-20">
              <MotionWrapper direction="right" className="space-y-6">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[8rem] font-fredoka font-bold text-slate-900 leading-[0.9] tracking-tight text-balance">
                  {t.heroTitle1} <br />
                  <span className="text-[#ffde00] inline-block transition-transform hover:scale-105 hover:-rotate-2 duration-300 mt-2 lg:mt-6 text-7xl lg:text-[8.5rem] pb-4"
                    style={{
                      WebkitTextStroke: "12px #0f172a",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(6px 10px 0 #0f172a)"
                    }}>
                    {t.heroTitle2}
                  </span>
                </h1>
                <p className="text-xl lg:text-3xl text-slate-700 font-medium leading-relaxed max-w-2xl lg:ml-2">
                  {t.subtitle}
                </p>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS & FORM BLOCK ─── */}
      <section className="pt-8 lg:pt-16 pb-24 lg:pb-40 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full mb-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left Column: Benefits (Flat Minimalist styling) */}
            <div className="lg:col-span-6 space-y-16">
              <MotionWrapper direction="left" className="space-y-8">
                <h2 className="text-5xl lg:text-7xl font-fredoka font-bold text-slate-900 leading-[1.05]">
                  {t.whyTitle}
                </h2>
                <p className="text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed text-pretty">
                  {t.description}
                </p>
              </MotionWrapper>

              <div className="grid gap-6">
                {t.benefits.map((benefit: string, i: number) => (
                  <MotionWrapper direction="left" key={benefit} className="flex items-center gap-6 p-8 rounded-[2rem] bg-[#ffde00] transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-[#ffde00]/20 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-slate-900 text-[#ffde00] flex items-center justify-center font-bold shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                      <GraduationCap size={24} />
                    </div>
                    <span className="text-xl lg:text-2xl font-fredoka font-bold text-slate-900 leading-tight">{benefit}</span>
                  </MotionWrapper>
                ))}
              </div>


            </div>

            {/* Right Column: Deep Navy Form */}
            <div className="lg:col-span-6 sticky top-32">
              <MotionWrapper direction="right">
                <div className="bg-slate-900 p-10 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group border border-slate-800">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffde00]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10 mb-12">
                    <div className="h-2 w-20 bg-[#ffde00] rounded-full mb-8 opacity-80" />
                    <h3 className="text-4xl lg:text-6xl font-fredoka font-bold text-white leading-tight pr-8">{t.cta}</h3>
                  </div>
                  <div className="relative z-10">
                    <CertificationForm dict={dict} />
                  </div>
                </div>
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
