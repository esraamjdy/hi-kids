import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle2, Key, BookOpen, Palette, Megaphone, GraduationCap, Smartphone } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What You Get | HiKids Franchise Support",
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
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20 pt-16 lg:pt-24">
      
      {/* ─── CREATIVE HEADER (No Hero) ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-visible">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-slate-100 pb-12 mb-4">
            {/* peeking mascot */}
            <MotionWrapper type="scale" className="relative w-48 h-48 lg:w-64 lg:h-64 -mb-16 lg:-mb-24 z-10">
              <Image src="/images/Moka-Dance.png" alt="Moka" fill className="object-contain drop-shadow-2xl" />
            </MotionWrapper>

            <div className="flex-1 text-center lg:text-left pt-8">
              <MotionWrapper direction="right">
                {/* Tag Removed */}
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
                  {t.title.replace('?', '').split(' ').slice(0, -1).join(' ')} <span className="text-white text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "12px #00AEEF",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                    }}>
                    {t.title.replace('?', '').split(' ').slice(-1).join(' ')}
                  </span> <span className="text-slate-900">?</span>
                </h1>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          {/* Subtitle fix: Match why-join scale and alignment */}
          <p className="text-lg lg:text-3xl text-slate-600 leading-relaxed font-medium mb-16 text-center max-w-4xl mx-auto -mt-8">
            {t.subtitle}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <MotionItem
                  key={item.title}
                  className="group relative rounded-[3rem] bg-blue-100/50 p-10 lg:p-14 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-blue-100 overflow-hidden"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border border-blue-200 text-hikids-blue group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-fredoka font-bold text-slate-900 mb-6 group-hover:text-hikids-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium text-balance">
                    {item.description}
                  </p>
                </MotionItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="pt-0 pb-0 lg:pt-0 lg:pb-0 lg:-mb-16 bg-blue-100/50 relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center lg:-mt-40 lg:translate-x-48">

            {/* Left Column: Mascot */}
            <div className="lg:col-span-5 flex justify-center lg:justify-center order-2 lg:order-1 mt-12 lg:mt-0">
              <MotionWrapper type="scale" className="relative w-[550px] h-[550px] lg:w-[1700px] lg:h-[1700px] lg:-ml-96 lg:-my-80">
                <Image src="/images/eating-together.png" alt="Start Your Journey" fill className="object-contain drop-shadow-2xl" />
              </MotionWrapper>
            </div>

            {/* Right Column: Text */}
            <div className="lg:col-span-7 space-y-10 order-1 lg:order-2 lg:pl-12">
              <MotionWrapper direction="left">
                <div className="space-y-6 text-center lg:text-left">
                  {/* Tag Removed */}
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-900 leading-[1.1] tracking-tight">
                    {t.cta.title.split(' ').slice(0, -2).join(' ')} <br className="sm:hidden" />
                    <span className="text-white text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                      }}>
                      {t.cta.title.split(' ').slice(-2).join(' ')}
                    </span>
                  </h2>
                  <p className="text-lg lg:text-2xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed">
                    {t.cta.subtitle}
                  </p>
                </div>
              </MotionWrapper>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  href={`/${lang}/franchise/inquiry`}
                  className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:shadow-2xl transition-all"
                >
                  {t.cta.applyNow} <ArrowRight className="h-6 w-6 ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
