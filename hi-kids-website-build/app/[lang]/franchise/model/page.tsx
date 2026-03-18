import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";
import Image from "next/image";

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
      <section className="bg-hikids-yellow relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-48 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none mix-blend-darken" />
        
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full">
          <MotionWrapper className="mx-auto max-w-5xl text-center" type="fade" direction="up">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-fredoka font-black text-slate-900 tracking-tight leading-[0.95] mb-12">
              {t.title}
            </h1>
            <p className="mt-10 text-xl md:text-2xl lg:text-4xl text-slate-800 font-medium leading-relaxed opacity-90 text-balance">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>
        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-32 lg:py-56 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24">
          <div className="relative">
            {/* Vertical line - Premium gradient */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-hikids-yellow via-hikids-blue to-hikids-blue -translate-x-1/2 opacity-20 hidden sm:block rounded-full"
              aria-hidden="true"
            />

            <MotionContainer className="flex flex-col gap-24 lg:gap-40">
              {t.steps.map((step: any, i: number) => (
                <MotionItem
                  key={step.title}
                  className={`relative flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24 lg:gap-32 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  direction={i % 2 === 0 ? "right" : "left"}
                >
                  {/* Step Number - Large & Prominent */}
                  <div className="relative z-10 flex h-24 w-24 shrink-0 items-center justify-center rounded-[2rem] bg-slate-900 text-3xl font-black text-white shadow-2xl md:absolute md:left-1/2 md:-translate-x-1/2 border-4 border-white">
                    {i + 1}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 rounded-[4rem] bg-slate-50 p-12 lg:p-20 transition-all hover:shadow-2xl hover:-translate-y-2 duration-500 border border-slate-100 hover:bg-white group ${i % 2 === 0 ? "md:mr-[calc(50%+60px)]" : "md:ml-[calc(50%+60px)]"
                      }`}
                  >
                    <span className="text-hikids-blue font-black uppercase tracking-[0.3em] text-sm mb-6 block">Step {i + 1}</span>
                    <h3 className="text-3xl lg:text-5xl font-fredoka font-black text-slate-900 mb-8 group-hover:text-hikids-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed font-medium text-balance">
                      {step.description}
                    </p>
                  </div>
                </MotionItem>
              ))}
            </MotionContainer>
          </div>
        </div>
      </section>

      {/* Investment Information */}
      <section className="bg-slate-900 py-32 lg:py-56 min-h-[90vh] flex flex-col justify-center relative overflow-hidden m-6 lg:m-12 rounded-[5rem]">
        {/* Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hikids-yellow/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="mx-auto max-w-[1600px] w-full px-6 lg:px-16 xl:px-24 text-center relative z-10">
          <MotionWrapper type="scale">
            <h2 className="text-6xl md:text-8xl font-fredoka font-black text-white mb-12 tracking-tight">
              {t.investment.title}
            </h2>
            <p className="text-xl md:text-3xl lg:text-4xl text-slate-300 leading-relaxed font-medium mb-20 max-w-4xl mx-auto text-balance">
              {t.investment.description}
            </p>
            <Link
              href={`/${lang}/franchise/inquiry`}
              className="group inline-flex items-center gap-6 rounded-[2.5rem] bg-hikids-yellow px-14 py-8 text-xl md:text-2xl font-black text-slate-900 shadow-2xl shadow-hikids-yellow/20 transition-all hover:bg-hikids-yellow/90 hover:-translate-y-2 hover:scale-105"
            >
              {t.investment.cta}
              <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform" strokeWidth={3} />
            </Link>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
