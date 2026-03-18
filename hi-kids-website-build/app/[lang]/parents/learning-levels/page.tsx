import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, Sparkles, Layers, Shield, ArrowRight, CheckCircle2, Navigation } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { SectionHeader } from "@/components/section-header";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Learning Levels | HiKids Global Curriculum",
};

export default async function LearningLevelsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.learningLevels;

  const levelIcons = [Star, Sparkles, Layers, Shield];

  return (
    <>
      {/* Hero - Inspiring & Professional */}
      <section className="bg-hikids-blue relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-48 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none mix-blend-overlay" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -left-10 top-[20%] opacity-20 hidden lg:block -translate-x-1/4 drop-shadow-2xl animate-float-slow">
            <Image src="/images/2.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute right-[5%] bottom-[10%] opacity-25 hidden xl:block animate-float drop-shadow-3xl">
            <Image src="/images/Whisk_61d9a24bbad8193df45fec5f308801d0dr.png" alt="" width={500} height={500} />
          </div>
          <div className="absolute right-[10%] top-20 h-80 w-80 bg-white/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full text-center">
          <MotionWrapper className="mx-auto max-w-5xl" type="fade" direction="up">
            <div className="mb-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm md:text-base font-black text-white shadow-soft backdrop-blur-md uppercase tracking-[0.2em]">
              <Sparkles className="h-5 w-5 fill-current text-white" />
              Progressive Learning Journey
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-fredoka font-black text-white tracking-tight leading-[0.95] lg:mb-12">
              {t.title}
            </h1>
            <p className="mt-10 text-xl md:text-2xl lg:text-4xl text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-balance">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* Levels Detail */}
      <section className="py-32 lg:py-56 relative bg-white overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full">
          <MotionWrapper type="fade" direction="up" className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-slate-900 leading-[1.05] tracking-tight">Educational Milestones</h2>
            <p className="text-xl md:text-2xl lg:text-4xl text-slate-600 font-medium max-w-4xl mx-auto text-balance">
              Explore our structured curriculum designed to support every stage of your child's development.
            </p>
          </MotionWrapper>

          <MotionContainer className="mt-16 space-y-24 lg:space-y-40">
            {t.levels.map(
              (
                level: {
                  name: string;
                  age: string;
                  focus: string;
                  description: string;
                  skills: string[];
                },
                i: number
              ) => {
                const Icon = levelIcons[i];
                return (
                  <MotionItem
                    key={level.name}
                    className="group relative rounded-[4rem] border border-slate-100 bg-slate-50/50 p-12 lg:p-24 transition-all hover:shadow-2xl hover:bg-white duration-700 overflow-hidden"
                    direction={i % 2 === 0 ? "right" : "left"}
                  >
                    <div className="absolute top-0 right-0 p-24 opacity-0 group-hover:opacity-10 transition-all duration-1000 translate-x-12 -translate-y-12 group-hover:translate-0 text-hikids-blue pointer-events-none">
                      <Icon className="h-96 w-96 lg:h-[30rem] lg:w-[30rem]" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative z-10">
                      {/* Level Identity */}
                      <div className="flex items-center lg:flex-col lg:items-center gap-8 shrink-0">
                         <div className="flex h-28 w-28 items-center justify-center rounded-[2.5rem] bg-white shadow-xl border border-slate-100 text-hikids-blue group-hover:bg-hikids-blue group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12 group-hover:shadow-hikids-blue/20">
                           <Icon className="h-12 w-12 lg:h-14 lg:w-14" />
                         </div>
                         <div className="lg:text-center">
                            <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 block mb-2">Stage</span>
                            <span className="text-4xl lg:text-5xl font-fredoka font-black text-slate-300 group-hover:text-hikids-blue transition-colors">0{i + 1}</span>
                         </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-10 flex flex-wrap items-center gap-6">
                          <h3 className="text-4xl md:text-6xl lg:text-7xl font-fredoka font-black text-slate-900 tracking-tight leading-none">
                            {level.name}
                          </h3>
                          <div className="rounded-full bg-hikids-yellow/10 border border-hikids-yellow/20 px-6 py-2 text-sm lg:text-base font-black text-slate-800 uppercase tracking-widest shadow-sm">
                            {level.age}
                          </div>
                        </div>

                        <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-2.5 text-sm md:text-base font-black text-hikids-blue uppercase tracking-widest border border-slate-100 shadow-sm">
                          <Sparkles className="h-5 w-5 fill-current" />
                          Core Focus: {level.focus}
                        </div>

                        <p className="mb-16 text-xl md:text-2xl lg:text-4xl text-slate-600 leading-relaxed font-medium text-balance opacity-90">
                          {level.description}
                        </p>

                        <div className="grid gap-6 md:grid-cols-2 pt-16 border-t border-slate-100">
                          {level.skills.map((skill: string) => (
                            <div
                              key={skill}
                              className="group/skill flex items-center gap-6 p-8 rounded-[3rem] bg-white border border-slate-100 hover:border-hikids-blue/30 hover:shadow-xl transition-all duration-500 shadow-sm"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-hikids-blue group-hover/skill:bg-hikids-blue group-hover/skill:text-white transition-all duration-500 group-hover/skill:rotate-12">
                                <CheckCircle2 className="h-6 w-6" strokeWidth={3} />
                              </div>
                              <span className="text-xl lg:text-2xl font-black text-slate-700 leading-tight group-hover/skill:text-slate-900 transition-colors">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </MotionItem>
                );
              }
            )}
          </MotionContainer>
        </div>
      </section>

      {/* High-Impact Final CTA */}
      <section className="py-32 lg:py-56 relative overflow-hidden bg-slate-900 m-6 lg:m-12 rounded-[5rem] min-h-[90vh] flex items-center">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full">
           <div className="text-center space-y-12">
              <MotionWrapper type="scale">
                <div className="mb-12 inline-flex h-28 w-28 items-center justify-center rounded-[2.5rem] bg-white/5 border border-white/10 shadow-3xl backdrop-blur-md">
                  <Navigation className="h-12 w-12 text-hikids-blue " strokeWidth={3} />
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-fredoka font-black text-white tracking-tight leading-[0.95] mb-12">
                  Ready to Start the Journey?
                </h2>
                <p className="mt-10 text-xl md:text-3xl lg:text-5xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto text-balance mb-20">
                  Find a HiKids kindergarten near you and give your child the gift of world-class early education.
                </p>
                <Link
                  href={`/${lang}/parents/find-kindergarten`}
                  className="inline-flex items-center gap-6 rounded-[2.5rem] bg-hikids-blue px-14 py-8 text-xl md:text-2xl lg:text-3xl font-black text-white shadow-3xl transition-all hover:bg-hikids-blue/90 hover:scale-105 hover:-translate-y-2 ring-4 ring-hikids-blue/20"
                >
                  Explore Locations
                  <ArrowRight className="h-10 w-10 transition-transform group-hover:translate-x-4" strokeWidth={3} />
                </Link>
              </MotionWrapper>
           </div>
        </div>

        {/* Mascot background decoration */}
        <div className="absolute right-[-10%] bottom-[-10%] opacity-20 pointer-events-none drop-shadow-3xl lg:scale-150 animate-float-slow">
           <Image src="/images/Whisk_61d9a24bbad8193df45fec5f308801d0dr.png" alt="" width={600} height={600} />
        </div>
      </section>
    </>
  );
}
