import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Sparkles,
  ArrowRight,
  Zap,
  Check
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

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20">

      {/* ─── IMMERSIVE STORY HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FFEB00]">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none" />

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 w-full text-center lg:text-left z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 xl:col-span-8">
              <MotionWrapper direction="right">
                {/* Tag Removed */}
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

        <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 opacity-30 lg:opacity-100">
          <Image src="/images/Moka-Dance.png" alt="Moka" width={600} height={600} className="object-contain" />
        </div>
      </section>

      {/* Hero Divider */}
      <div className="w-full relative -mt-[100px] lg:-mt-[100px] z-20">
        <WaveDivider color="white" />
      </div>

      {/* ─── VERTICAL INTERACTIVE DISCOVERY MAP ─── */}
      <section className="bg-white py-16 lg:py-32 relative overflow-visible selection:bg-hikids-yellow/30">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 relative z-10">

          {/* Premium Header */}
          <MotionWrapper direction="up">
            <div className="text-center flex flex-col items-center max-w-[1000px] w-full mx-auto mb-20 lg:mb-32 space-y-6">
              <div className="relative text-center items-center flex flex-col">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-hikids-yellow/20 rounded-full blur-[100px] opacity-70 animate-pulse-slow pointer-events-none" />
                {/* Tag Removed */}
                <h2 className="text-6xl lg:text-8xl xl:text-9xl font-fredoka font-black leading-[0.9] tracking-tight mb-4 relative z-10">
                  Your Child's <br />
                  <span className="text-[#FFEB00] text-7xl lg:text-9xl xl:text-[10rem] mt-2 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "16px #00AEEF",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 12px 0 rgba(0,0,0,0.1))"
                    }}>
                    Big Journey
                  </span>
                </h2>
              </div>
              <p className="text-xl lg:text-3xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium opacity-80 italic">
                {t.subtitle}
              </p>
            </div>
          </MotionWrapper>

          {/* THE VERTICAL MAP CANVAS */}
          <div className="relative w-full min-h-[1400px] lg:min-h-[1800px] mt-12 mb-32 group/map overflow-visible flex justify-center">
            
            {/* SVG Winding Map Path - EXTREMELY SUBTLE & CENTERED */}
            <svg className="absolute inset-y-0 w-64 lg:w-[400px] h-full pointer-events-none drop-shadow-sm opacity-30 mx-auto" viewBox="0 0 200 1000" preserveAspectRatio="none">
              <defs>
                <linearGradient id="map-gradient-vertical-discovery" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ED1C24" />
                  <stop offset="25%" stopColor="#00AEEF" />
                  <stop offset="50%" stopColor="#8CC63F" />
                  <stop offset="100%" stopColor="#f0b952" />
                </linearGradient>
              </defs>
              <path
                d="M 100 0 C 106 150, 106 250, 106 350 C 106 450, 94 550, 94 650 C 94 750, 100 850, 100 1000"
                fill="none"
                stroke="url(#map-gradient-vertical-discovery)"
                strokeWidth="10"
                strokeDasharray="20 15"
                strokeLinecap="round"
                className="animate-dash-vertical"
              />
            </svg>

            {/* Ambient Decorative Assets */}
            <div className="absolute top-40 left-10 animate-float pointer-events-none opacity-20">
               <Star size={64} className="text-hikids-yellow fill-current" />
            </div>
            <div className="absolute bottom-40 right-10 animate-float-slow pointer-events-none opacity-20">
               <Sparkles size={80} className="text-hikids-blue fill-current" />
            </div>

            {/* Level Pins & Messages */}
            {t.levels.map((level: any, i: number) => {
              // Extremely Subtle Vertical Milestone Positions
              const pinPositions = [
                { left: "50%", top: "6%" },    // y = 60
                { left: "53%", top: "35%" },   // y = 350 (Matches x=106)
                { left: "47%", top: "65%" },   // y = 650 (Matches x=94)
                { left: "50%", top: "94%" }    // y = 940
              ];

              const isEven = i % 2 === 0;
              const bubbleOrient = isEven 
                ? "lg:left-[115%] lg:top-1/2 lg:-translate-y-1/2" 
                : "lg:right-[115%] lg:top-1/2 lg:-translate-y-1/2"; 

              const tailPos = isEven 
                ? "-left-[16px] top-1/2 -translate-y-1/2 rotate-[225deg]" 
                : "-right-[16px] top-1/2 -translate-y-1/2 rotate-[45deg]";    

              return (
                <div 
                  key={level.name} 
                  className="absolute transition-all duration-300 z-10 hover:z-50 focus-within:z-50"
                  style={{ 
                    left: pinPositions[i].left, 
                    top: pinPositions[i].top,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <MotionItem>
                    <div className="relative group/pin">
                      
                      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-white rounded-full shadow-3xl border-4 flex items-center justify-center relative z-20 transition-all duration-700 cursor-pointer group-hover/pin:scale-110 group-hover/pin:rotate-6" style={{ borderColor: hexColors[i] }}>
                        <Image src={levelSvgs[i]} alt="icon" width={110} height={110} className="object-contain transition-transform duration-700 group-hover/pin:scale-110" />
                        
                        <div className="absolute -top-2 -right-2 w-10 h-10 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center text-xl lg:text-4xl font-black font-fredoka shadow-xl z-30" style={{ color: hexColors[i] }}>
                          {i + 1}
                        </div>
                      </div>

                      <div className={`absolute opacity-100 scale-100 pointer-events-auto z-40 w-[85vw] sm:w-[26rem] lg:w-[32rem] transition-transform duration-500 group-hover/pin:scale-[1.02] ${bubbleOrient}`}>
                        <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border-2 border-slate-50 relative">
                          
                          <div className={`absolute w-12 h-12 bg-white border-t border-l border-slate-50 -z-10 ${tailPos}`} />

                          <div className="space-y-6">
                             <div className="flex items-center gap-4">
                                <span className="bg-slate-100 text-slate-500 text-[10px] font-black tracking-widest px-5 py-2 rounded-full uppercase">{level.age}</span>
                                <div className="h-0.5 flex-1 bg-slate-50" />
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hexColors[i] }} />
                             </div>

                             <h4 className="text-3xl lg:text-4xl font-black font-fredoka text-slate-900 leading-tight">
                                {level.focus}
                             </h4>

                             <p className="text-slate-500 text-base lg:text-lg leading-relaxed font-medium">
                                {level.description}
                             </p>

                             <div className="pt-8 border-t border-slate-50 grid grid-cols-2 gap-5">
                                {level.skills.map((skill: string, idx: number) => (
                                   <div key={idx} className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${hexColors[i]}15` }}>
                                         <Check size={16} style={{ color: hexColors[i] }} strokeWidth={4} />
                                      </div>
                                      <span className="text-xs lg:text-sm font-bold text-slate-700">{skill}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-full bg-white/30 scale-150 blur-3xl opacity-0 group-hover/pin:opacity-100 transition-opacity duration-700 -z-10 animate-pulse" />

                    </div>
                  </MotionItem>
                </div>
              );
            })}
          </div>

          <MotionWrapper className="mt-20 lg:mt-40 max-w-4xl mx-auto text-center p-12 lg:p-24 rounded-[5rem] bg-gradient-to-br from-hikids-blue/5 to-hikids-yellow/5 border-2 border-hikids-blue/10 relative overflow-hidden" direction="up">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-hikids-red via-hikids-blue to-hikids-yellow" />
              <h4 className="text-4xl lg:text-6xl font-black font-fredoka text-slate-900 mb-8 leading-tight">The Path to <span className="text-hikids-blue">Excellence</span></h4>
              <p className="text-lg lg:text-3xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto opacity-90">
                Each level is a doorway to the next, ensuring your child transitions with confidence, curiosity, and the skills to conquer the world.
              </p>
          </MotionWrapper>

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

            <div className="flex justify-center relative">
              <MotionWrapper type="scale" className="relative w-full aspect-square max-w-[800px]">
                <Image src="/images/Moka-Plays.png" alt="Moka Playful" fill className="object-contain drop-shadow-3xl" />
              </MotionWrapper>
            </div>

            <div className="space-y-12">
              <MotionWrapper direction="left">
                <div className="space-y-8 text-center lg:text-left">
                  {/* Tag Removed */}
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
