import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Sparkles,
  Layers,
  Shield,
  ArrowRight,
  CheckCircle2,
  Navigation,
  Zap,
  Check,
  Info,
  ChevronRight,
  GraduationCap,
  Globe
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
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

  const levelSvgs = ["/images/level-1.svg", "/images/level-2.svg", "/images/level-3.svg", "/images/level-4.svg"];
  const hexColors = ['#ED1C24', '#00AEEF', '#8CC63F', '#f0b952'];
  const characters = ["/images/7.png", "/images/8.png", "/images/hi.png", "/images/boy.png"];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20">

      {/* ─── IMMERSIVE STORY HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FFEB00]">
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none" />

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 w-full text-center lg:text-left z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 xl:col-span-8">
              <MotionWrapper direction="right">
                <span className="bg-white/30 text-slate-900 border-white/20 text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full inline-block border backdrop-blur-md mb-8">
                  The Educational Journey
                </span>
                <h1 className="text-6xl lg:text-9xl font-fredoka font-black text-slate-900 leading-[0.95] tracking-tight">
                  A Path Designed <br className="hidden lg:block" />
                  for <span className="text-white text-7xl lg:text-[10rem] ml-1 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "16px #00AEEF",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 10px 0 rgba(0,0,0,0.1))"
                    }}>
                    Growth
                  </span>
                </h1>
              </MotionWrapper>
            </div>
          </div>
        </div>

        {/* Peeking Character */}
        <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 opacity-30 lg:opacity-100">
          <Image src="/images/Moka-Dance.png" alt="Moka" width={600} height={600} className="object-contain" />
        </div>
      </section>

      {/* Hero Divider */}
      <div className="w-full relative -mt-[100px] lg:-mt-[100px] z-20">
        <WaveDivider color="white" />
      </div>

      {/* ─── THE INTERACTIVE EXPANDED MAP ─── */}
      <section className="py-24 lg:py-48 bg-white relative">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 relative z-10 w-full">

          <MotionWrapper className="text-center mb-24 max-w-4xl mx-auto space-y-8" direction="up">
            <h2 className="text-4xl lg:text-6xl font-fredoka font-black text-slate-800 leading-tight">Every Step is a Milestone</h2>
            <p className="text-lg lg:text-2xl text-slate-500 font-medium">
              {t.subtitle}
            </p>
          </MotionWrapper>

          {/* The Map Interface */}
          <div className="relative space-y-48 lg:space-y-80">

            {/* Vertical Connectivity Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[8px] -translate-x-1/2 overflow-hidden pointer-events-none hidden lg:block opacity-10">
              <div className="w-full h-full bg-gradient-to-b from-hikids-red via-hikids-blue to-hikids-yellow" />
            </div>

            {t.levels.map((level: any, i: number) => {
              const isEven = i % 2 === 0;
              return (
                <div key={level.name} className="relative">

                  {/* Level Node Pin */}
                  <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full items-center justify-center shadow-2xl border-4 z-50 group hover:scale-125 transition-transform duration-500"
                    style={{ borderColor: hexColors[i] }}>
                    <Image src={levelSvgs[i]} alt="icon" width={100} height={100} className="object-contain" />
                  </div>

                  <div className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                    {/* Visual Showcase Zone */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                      <MotionWrapper type="scale" direction={isEven ? "right" : "left"}>
                        <div className="relative group">
                          {/* The Zone Map Card */}
                          <div className="w-full aspect-[4/3] rounded-[4rem] bg-slate-50 overflow-hidden relative shadow-inner border-2 border-slate-100 group-hover:border-slate-200 transition-colors">
                            <Image
                              src={characters[i]}
                              alt="Character Animation"
                              fill
                              className="object-contain p-12 lg:p-20 group-hover:scale-110 transition-transform duration-1000"
                            />
                            {/* Abstract Floating Shapes */}
                            <div className="absolute top-10 right-10 w-24 h-24 rounded-full opacity-10 blur-2xl animate-pulse" style={{ backgroundColor: hexColors[i] }} />
                            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-10 blur-2xl animate-drift" style={{ backgroundColor: hexColors[i] }} />

                            {/* Level Number Overlay */}
                            <div className="absolute top-8 left-8 text-6xl font-black font-fredoka opacity-[0.05]" style={{ color: hexColors[i] }}>0{i + 1}</div>
                          </div>
                        </div>
                      </MotionWrapper>
                    </div>

                    {/* Data Zone */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <MotionWrapper direction={isEven ? "left" : "right"}>
                        <div className="space-y-8 p-10 lg:p-14 bg-white rounded-[4rem] border shadow-2xl shadow-slate-200/50 relative overflow-hidden group hover:shadow-hikids-yellow/5 transition-all">

                          {/* Decorative corner accent */}
                          <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] grayscale pointer-events-none">
                            <Image src="/images/moka-line-art-01.svg" alt="" fill className="object-contain" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: hexColors[i] }} />
                              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Level Progression</span>
                            </div>
                            <h3 className="text-4xl lg:text-7xl font-fredoka font-black text-slate-900 leading-tight">
                              {level.name}
                            </h3>
                          </div>

                          <div className="flex flex-wrap items-center gap-4">
                            <div className="px-6 py-2 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest shadow-xl">
                              Focus: {level.focus}
                            </div>
                            <div className="px-6 py-2 rounded-2xl bg-white border border-slate-100 font-bold text-slate-400 uppercase tracking-widest text-[10px]">
                              {level.age}
                            </div>
                          </div>

                          <p className="text-lg lg:text-2xl text-slate-500 leading-relaxed font-medium">
                            {level.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {level.skills.map((skill: string) => (
                              <div key={skill} className="flex items-center gap-3 p-5 rounded-3xl bg-[#fafafa] group/skill hover:bg-slate-900 hover:text-white transition-all cursor-default">
                                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover/skill:bg-hikids-yellow group-hover/skill:rotate-12 transition-all">
                                  <Check size={16} strokeWidth={4} style={{ color: hexColors[i] }} />
                                </div>
                                <span className="text-xs lg:text-sm font-black uppercase tracking-tight leading-tight">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </MotionWrapper>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── EDUCATIONAL REASSURANCE ─── */}
      <section className="py-24 lg:py-48 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/moka-line-art-02.svg')] mix-blend-overlay rotate-12" />
        <div className="mx-auto max-w-[1400px] px-6 text-center space-y-12 relative z-10">
          <MotionWrapper type="scale">
            <h2 className="text-5xl lg:text-8xl font-fredoka font-black text-white leading-tight">
              A World of <br className="hidden lg:block" />
              <span className="text-hikids-yellow">Possibilities</span>
            </h2>
            <p className="text-xl lg:text-3xl text-slate-400 font-medium max-w-4xl mx-auto leading-relaxed">
              Our curriculum is a live roadmap, constantly evolving with the latest international standards to give every child their best unique start.
            </p>
            <div className="pt-10 flex flex-wrap justify-center gap-8">
              {['Global Curriculum', 'Elite Staff', 'Safe Haven'].map((tag, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 px-10 py-5 rounded-[2.5rem] text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-hikids-yellow hover:text-slate-900 transition-all cursor-default group">
                  <Zap className="text-hikids-blue group-hover:scale-125 transition-transform" size={18} /> {tag}
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ─── FINAL ACTION CTA ─── */}
      <section className="py-12 lg:py-24 bg-[#FFEB00] relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Visual Action Column */}
            <div className="flex justify-center relative">
              <MotionWrapper type="scale" className="relative w-full aspect-square max-w-[800px]">
                <Image src="/images/Moka-Plays.png" alt="Moka Playful" fill className="object-contain drop-shadow-3xl" />
              </MotionWrapper>
            </div>

            {/* Selection Text Column */}
            <div className="space-y-12">
              <MotionWrapper direction="left">
                <div className="space-y-8 text-center lg:text-left">
                  <span className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] px-8 py-3 rounded-full inline-block shadow-2xl">
                    JOIN THE MOVEMENT
                  </span>
                  <h2 className="text-6xl lg:text-9xl font-fredoka font-black text-slate-900 tracking-tight leading-[0.95]">
                    Start your <br />
                    <span className="text-white inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "16px #00AEEF",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(0 12px 0 rgba(0,0,0,0.1))"
                      }}>
                      Success
                    </span>
                  </h2>
                  <p className="text-2xl lg:text-4xl text-slate-800 font-bold max-w-xl mx-auto lg:mx-0">
                    The journey of a thousand steps begins with a single level.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 pt-8 justify-center lg:justify-start">
                    <Link
                      href={`/${lang}/parents/find-kindergarten`}
                      className="btn-primary !bg-slate-900 !text-white px-16 py-8 text-2xl tracking-tighter !rounded-[3rem] hover:shadow-3xl hover:-translate-y-2 transition-all flex items-center justify-center gap-4 group"
                    >
                      Visit Centers <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
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
