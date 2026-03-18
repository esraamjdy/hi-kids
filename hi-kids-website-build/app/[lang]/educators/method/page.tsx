import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, BookOpen } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Teaching Method | HiKids Global",
};

export default async function MethodPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.method;

  return (
    <>
      {/* Hero - Pedagogical & Premium */}
      <section className="bg-hikids-blue relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-48 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none mix-blend-overlay" />
        
        {/* Layered Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block -translate-x-1/4 drop-shadow-3xl">
            <Image src="/images/5.png" alt="" width={600} height={600} className="object-contain" />
          </div>
          <div className="absolute right-[10%] top-20 h-80 w-80 bg-white/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full text-center">
          <MotionWrapper className="mx-auto max-w-5xl" type="fade" direction="up">
            <div className="mb-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm md:text-base font-black text-white shadow-soft backdrop-blur-md uppercase tracking-[0.2em]">
              <Sparkles className="h-5 w-5 fill-white text-white" />
              World-Class Pedagogical Framework
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-fredoka font-black text-white tracking-tight leading-[0.95] mb-12">
              {t.title}
            </h1>
            <p className="mt-10 text-xl md:text-2xl lg:text-4xl text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-balance opacity-90">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      <section className="py-32 lg:py-56 relative overflow-hidden bg-white min-h-[95vh] flex flex-col justify-center">
        {/* Floating mascot */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block translate-x-1/4 animate-float-slow grayscale-0">
          <Image src="/images/Whisk_998be7f5470b4334f59ae78964d88e0bdr.png" alt="" width={650} height={650} />
        </div>

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10">
          <MotionWrapper type="fade" className="mb-32 max-w-5xl mx-auto">
             <div className="relative p-12 lg:p-20 rounded-[4rem] bg-slate-50 border border-slate-100 shadow-xl italic">
               <div className="absolute top-8 left-8 text-8xl text-hikids-blue/10 font-serif">&ldquo;</div>
               <p className="text-2xl lg:text-4xl xl:text-5xl font-fredoka font-black text-slate-700 leading-tight text-center text-pretty">
                 {t.overview}
               </p>
               <div className="absolute bottom-4 right-8 text-8xl text-hikids-blue/10 font-serif rotate-180">&ldquo;</div>
             </div>
          </MotionWrapper>

          <MotionContainer className="flex flex-col gap-12 lg:gap-24">
            {t.sections.map((section: { title: string; description: string }, i: number) => (
              <MotionItem
                key={section.title}
                className="group relative rounded-[4rem] p-12 lg:p-24 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 overflow-hidden border border-slate-100 bg-slate-50/50 hover:bg-white"
                direction={i % 2 === 0 ? "right" : "left"}
              >
                <div className="absolute top-0 right-0 p-24 opacity-0 group-hover:opacity-10 transition-all duration-1000 translate-x-12 -translate-y-12 group-hover:translate-0 text-hikids-blue pointer-events-none">
                  <BookOpen className="h-48 w-48 lg:h-[25rem] lg:w-[25rem]" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-10 lg:gap-20 mb-8 relative z-10">
                   <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] bg-white shadow-xl border border-slate-100 text-3xl font-black text-slate-300 group-hover:bg-hikids-blue group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                    0{i + 1}
                  </div>
                  <h2 className="text-3xl lg:text-6xl font-fredoka font-black text-slate-900 tracking-tight group-hover:text-hikids-blue transition-colors leading-none">
                    {section.title}
                  </h2>
                </div>

                <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed font-medium relative z-10 text-balance opacity-90 max-w-5xl">
                  {section.description}
                </p>

                <div className="mt-16 h-2 z-10 relative w-24 rounded-full bg-slate-200 group-hover:bg-hikids-blue group-hover:w-full transition-all duration-[1000ms]" />
              </MotionItem>
            ))}
          </MotionContainer>

          <div className="mt-32 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* High-Impact Final CTA */}
          <MotionWrapper type="scale" className="mt-32 relative overflow-hidden rounded-[5rem] bg-slate-900 p-16 lg:p-32 text-center shadow-3xl mx-auto max-w-[1400px]">
             {/* Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hikids-blue/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hikids-yellow/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 space-y-16">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-white tracking-tight leading-[0.95] text-balance">
                Ready to Transform <br className="hidden lg:block" /> Early Education?
              </h2>
              <Link
                href={`/${lang}/educators/certification`}
                className="group inline-flex items-center gap-6 rounded-[2.5rem] bg-hikids-blue px-14 py-8 text-xl md:text-2xl lg:text-3xl font-black text-white shadow-3xl transition-all hover:bg-hikids-blue/90 hover:scale-105 hover:-translate-y-2"
              >
                Get Certified Today
                <ArrowRight className="h-10 w-10 transition-transform group-hover:translate-x-4" strokeWidth={3} />
              </Link>
            </div>

            {/* Subtle mascot accent */}
            <div className="absolute -bottom-20 -right-20 opacity-20 pointer-events-none drop-shadow-3xl lg:scale-150 animate-float-slow">
              <Image src="/images/7.png" alt="" width={350} height={350} />
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
