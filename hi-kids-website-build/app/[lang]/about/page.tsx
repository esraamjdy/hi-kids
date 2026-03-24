import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart, Rocket, ShieldCheck, Sun, Eye, Target, Award,
  Globe, Smile, Trophy, Quote, Star, CheckCircle2,
  Users, BookOpen, Sparkles, GraduationCap, ArrowRight,
  Zap, Check
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "About HiKids | Progressive Early Childhood Education",
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.about;

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[30vh] lg:min-h-[45vh] flex items-center overflow-hidden bg-background pt-16 pb-8 lg:pt-12 lg:pb-12">
        <div className="absolute bottom-[20%] right-[10%] w-14 h-14 opacity-30 animate-sway hidden lg:block">
          <Sparkles className="text-slate-800" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full">
          <div className="grid gap-10 lg:grid-cols-2 items-center lg:gap-16 xl:gap-24">

            {/* LEFT – headline */}
            <div className="relative text-center lg:text-left">
              <MotionWrapper direction="right" delay={0.2} duration={1}>
                <div className="space-y-4 max-w-2xl mx-auto lg:mx-0 relative z-10">
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight mb-4">
                    Where <br className="hidden lg:block" />
                    <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl mr-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill"
                      }}>
                      Curiosity
                    </span>
                    <br /> Becomes <span className="text-hikids-blue">Capability</span>
                  </h1>
                  <p className="text-author text-slate-700 leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-90">
                    {t.hero.subtitle}
                  </p>
                </div>
              </MotionWrapper>
            </div>

            {/* RIGHT – visual */}
            <div className="relative w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-[550px] h-[480px] lg:w-[750px] lg:h-[650px] xl:w-[900px] xl:h-[800px] overflow-visible">

                <MotionWrapper direction="down" delay={0.4}>
                  <div className="absolute top-[-35%] right-[-75%] w-[85%] h-[70%] z-0 opacity-90">
                    <Image src="/images/HiKids-57.svg" alt="" fill className="object-contain object-right-top [filter:invert(74%)_sepia(51%)_saturate(595%)_hue-rotate(160deg)_brightness(94%)_contrast(94%)]" />
                  </div>
                </MotionWrapper>

                <div className="absolute top-[-65%] left-[-25%] w-[130%] h-[160%] z-10 -rotate-[22deg] animate-float">
                  <Image src="/images/moka-3d.png" alt="Moka Mascot" fill className="object-contain object-bottom drop-shadow-lg" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hero Divider */}
      <div className="w-full relative -mt-[100px] lg:-mt-[100px] z-20">
        <WaveDivider color="#fefce8" />
      </div>

      {/* ─── OUR STORY ─── */}
      <section className="py-4 lg:py-8 bg-[#fefce8] relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">

            {/* Left Column: Character Image */}
            <div className="lg:col-span-6 flex justify-center lg:justify-center lg:sticky lg:top-16 lg:pt-2">
              <MotionWrapper type="scale" delay={0.2} className="relative w-[450px] h-[450px] lg:w-[800px] lg:h-[800px] lg:-ml-16">
                <Image
                  src="/images/hi.png"
                  alt="Moka"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </MotionWrapper>
            </div>

            {/* Right Column: Text + Stats */}
            <div className="lg:col-span-6 space-y-8 pt-4">
              <MotionWrapper direction="left" delay={0.1}>
                <div className="space-y-6">
                  {/* Tag Removed */}
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight mb-4">
                    Our <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill"
                      }}>
                      Story
                    </span>
                  </h2>
                  <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                    {t.story.description}
                  </p>
                </div>
              </MotionWrapper>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {t.story.achievements.map((ach: { value: string; label: string }, i: number) => (
                  <MotionItem key={i} className="bg-white p-6 lg:p-8 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-start text-left group hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <div className="text-4xl lg:text-5xl font-black text-hikids-blue mb-2 font-fredoka group-hover:scale-110 transition-transform">{ach.value}</div>
                    <p className="text-slate-500 text-sm lg:text-base leading-relaxed font-bold uppercase tracking-widest text-[10px]">
                      {ach.label}
                    </p>
                  </MotionItem>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-4 lg:py-8 bg-blue-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="space-y-12">

            {/* MISSION (Left Text, Right Img) */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <MotionWrapper direction="right">
                  {/* Tag Removed */}
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight mb-4 mt-4">
                    {t.mission.title}
                  </h2>
                  <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium">
                    {t.mission.description}
                  </p>
                </MotionWrapper>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <MotionWrapper type="scale" className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
                  <Image src="/images/HiKids-02.png" alt="Mission" fill className="object-contain drop-shadow-xl" />
                </MotionWrapper>
              </div>
            </div>

            {/* VISION (Right Text, Left Img) */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <MotionWrapper type="scale" className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
                  <Image src="/images/HiKids-03.png" alt="Vision" fill className="object-contain drop-shadow-xl" />
                </MotionWrapper>
              </div>
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-right lg:text-left">
                <MotionWrapper direction="left">
                  {/* Tag Removed */}
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight mb-4 mt-4">
                    {t.vision.title}
                  </h2>
                  <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium">
                    {t.vision.description}
                  </p>
                </MotionWrapper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE METHOD ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight">
              The HiKids <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block"
                style={{
                  WebkitTextStroke: "12px #00AEEF",
                  paintOrder: "stroke fill"
                }}>
                Method
              </span>
            </h2>
            <p className="text-lg lg:text-2xl text-slate-500 mt-6 font-medium">{t.method.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.method.pillars.map((pillar: { title: string; description: string }, i: number) => (
              <MotionItem key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-hikids-blue mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {i === 0 && <Sparkles size={32} />}
                  {i === 1 && <Rocket size={32} />}
                  {i === 2 && <Smile size={32} />}
                  {i === 3 && <Trophy size={32} />}
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-800 mb-3 font-fredoka">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </MotionItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER SPOTLIGHT ─── */}
      <section className="py-4 lg:py-8 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            {/* Left: Founder Image */}
            <div className="lg:col-span-5">
              <MotionWrapper type="scale">
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <Image src="/images/businessman.png" alt="Founder" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
                  <div className="absolute inset-0 bg-hikids-blue/5 group-hover:bg-transparent transition-colors" />
                </div>
              </MotionWrapper>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-8">
              <MotionWrapper direction="left">
                <div className="space-y-4">
                  {/* Tag Removed */}
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-tight">
                    {t.founder.name}
                  </h2>
                  <h4 className="text-xl lg:text-2xl font-bold text-slate-400 uppercase tracking-widest">{t.founder.role}</h4>
                </div>
                <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium mt-8">
                  {t.founder.description}
                </p>
                <div className="relative p-10 mt-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl group hover:-translate-y-2 transition-transform duration-500">
                  <Quote className="absolute top-8 right-8 text-slate-100 group-hover:text-hikids-blue/10 transition-colors" size={80} />
                  <p className="relative z-10 text-2xl lg:text-3xl font-black text-slate-800 leading-snug italic font-fredoka">
                    &quot;{t.founder.quote}&quot;
                  </p>
                </div>
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-4 lg:py-8 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            {/* Left Column: Character Image */}
            <div className="lg:col-span-6 flex justify-center lg:justify-center lg:sticky lg:top-0 order-2 lg:order-1 mt-12 lg:mt-0">
              <MotionWrapper type="scale" delay={0.2} className="relative w-[450px] h-[450px] lg:w-[1000px] lg:h-[1000px] lg:-ml-32">
                <Image
                  src="/images/Moka-Plays.png"
                  alt="Moka Playing"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </MotionWrapper>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-10 order-1 lg:order-2">
              <MotionWrapper direction="left" delay={0.1}>
                <div className="space-y-6 text-center lg:text-left">
                  {/* Tag Removed */}

                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight mb-4">
                    Build the <br className="sm:hidden" />
                    <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill"
                      }}>
                      Future
                    </span>
                    <br /> Together
                  </h2>

                  <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
                    HiKids is more than just schools. We are a community dedicated to raising the next generation.
                  </p>
                </div>
              </MotionWrapper>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  href={`/${lang}/contact`}
                  className="btn-primary px-12 py-5 text-xl tracking-tight group"
                >
                  Contact Us <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={`/${lang}/franchise`}
                  className="btn-outline px-12 py-5 text-xl tracking-tight bg-white shadow-xl hover:shadow-2xl transition-all"
                >
                  Explore Franchise
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}