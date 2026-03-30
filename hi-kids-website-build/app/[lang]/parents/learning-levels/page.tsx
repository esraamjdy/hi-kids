import type { Metadata } from "next";
import Image from "next/image";
import {
  Zap,
  Check,
  Star,
  Sparkles
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { MotionWrapper } from "@/components/motion-wrapper";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return {
    title: `${dict.parents.learningLevels.title} | ${dict.common.brand} Global Curriculum`,
  };
}

export default async function LearningLevelsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.learningLevels;

  const levelSvgs = ["/images/level-1.svg", "/images/level-2.svg", "/images/level-3.svg", "/images/level-4.svg"];
  const hexColors = ['#ED1C24', '#00AEEF', '#8CC63F', '#f0b952'];

  return (
    <div className="bg-[#faf8c3] overflow-hidden selection:bg-hikids-blue/20 min-h-screen">

      {/* ─── PREMIUM HEADER ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <MotionWrapper direction="up">
            <h1 className="text-6xl lg:text-8xl font-fredoka font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
              {t.journeyHeader} <span className="text-hikids-blue">{t.journeyTitle}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* ─── STAGGERED JOURNEY ─── */}
      <section className="pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-24 lg:space-y-48 relative">
            {/* Vertical Connector Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200/50 -translate-x-1/2 z-0" />

            {t.levels.map((level: any, i: number) => {
              const isEven = i % 2 === 0;
              return (
                <div key={level.name} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-32 relative z-10 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Visual Side */}
                  <div className="flex-1 w-full flex justify-center">
                    <MotionWrapper direction={isEven ? "right" : "left"} className="w-full">
                      <div className="relative group w-full max-w-md aspect-square bg-white rounded-[3rem] border border-slate-100 flex items-center justify-center p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                        {/* Level Number Badge */}
                        <div className="absolute -top-6 -right-6 lg:-right-8 w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl border-4 flex items-center justify-center text-3xl lg:text-4xl font-bold font-fredoka z-20 shadow-xl" style={{ borderColor: hexColors[i], color: hexColors[i] }}>
                          {i + 1}
                        </div>
                        <div className="relative w-full h-full">
                          <Image src={levelSvgs[i]} alt={level.name} fill className="object-contain transition-transform duration-700 group-hover:scale-110" />
                        </div>
                      </div>
                    </MotionWrapper>
                  </div>

                  {/* Content Side */}
                  <div className={`flex-1 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                    <MotionWrapper direction={isEven ? "left" : "right"}>
                      <div className={`space-y-6 ${!isEven && 'lg:items-end flex flex-col'}`}>
                        <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-slate-100 shadow-sm">
                          <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: hexColors[i] }} />
                          <span className="text-xs font-black text-slate-500 tracking-widest uppercase">{level.age}</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-fredoka font-bold text-slate-900 leading-tight">
                          {level.focus}
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
                          {level.description}
                        </p>
                        
                        {/* Skills Grid */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 w-full ${!isEven && 'lg:justify-items-end'}`}>
                          {level.skills.map((skill: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-3 bg-white/60 p-5 rounded-2xl border border-white/80 backdrop-blur-sm transition-colors hover:bg-white hover:border-hikids-blue/20 group">
                              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: `${hexColors[i]}15` }}>
                                <Check size={18} style={{ color: hexColors[i] }} strokeWidth={4} />
                              </div>
                              <span className="text-sm font-bold text-slate-700">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </MotionWrapper>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SUMMARY TRANSITION ─── */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <MotionWrapper className="relative bg-white p-12 lg:p-24 rounded-[4rem] border border-slate-100 overflow-hidden text-center shadow-xl" direction="up">
            <div className="absolute top-0 left-0 w-full h-2 bg-hikids-blue" />
            <h3 className="text-4xl lg:text-6xl font-fredoka font-bold text-slate-900 mb-8 tracking-tight">
              {t.pathTitle} <span className="text-hikids-blue">{t.excellence}</span>
            </h3>
            <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              {t.excellenceDesc}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* ─── CORE VALUES (PROFESSIONAL FOOTER) ─── */}
      <section className="pt-16 lg:pt-24 pb-32 lg:pb-64 bg-white relative border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 text-center space-y-20 relative z-10">
          <MotionWrapper type="scale">
            <h2 className="text-5xl lg:text-7xl font-fredoka font-bold text-slate-900 leading-tight">
              {t.possibilitiesHeader} <span className="text-hikids-blue">{t.possibilitiesTitle}</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              {t.possibilitiesDesc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {t.possibilitiesBadges.map((badge: string, idx: number) => {
                const Icons = [Zap, Star, Sparkles]; // Using distinct icons for variety
                const Icon = Icons[idx] || Zap;
                return (
                  <div key={idx} className="flex flex-col items-center gap-6 bg-[#faf8c3] p-10 rounded-[3rem] border border-hikids-yellow/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="text-hikids-blue" size={32} />
                    </div>
                    <span className="text-sm font-black text-slate-800 uppercase tracking-[0.2em]">{badge}</span>
                  </div>
                );
              })}
            </div>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
