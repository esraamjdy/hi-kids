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
import { AnimatedCounter } from "@/components/animated-counter";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return {
    title: dict.about.metaTitle,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.about;

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[30vh] lg:min-h-[45vh] flex items-center overflow-hidden bg-background pt-4 pb-32 lg:pt-2 lg:pb-48">
        <div className="absolute bottom-[20%] right-[10%] w-14 h-14 opacity-30 animate-sway hidden lg:block">
          <Sparkles className="text-slate-800" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full">
          <div className="grid gap-10 lg:grid-cols-2 items-center lg:gap-16 xl:gap-24">

            {/* LEFT – headline */}
            <div className="relative text-center lg:text-left">
              <MotionWrapper direction="right" delay={0.2} duration={1}>
                <div className="space-y-4 max-w-4xl mx-auto lg:mx-0 relative z-10">
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-800 leading-[1.1] tracking-tight mb-4 flex flex-col gap-y-2">
                    <span className="text-hikids-blue">{t.hero.title.split(' ').slice(0, 1).join(' ')}</span>
                    <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill"
                      }}>
                      {t.hero.title.split(' ').slice(1, -1).join(' ')}
                    </span>
                    <span className="text-hikids-blue">{t.hero.title.split(' ').slice(-1).join(' ')}</span>
                  </h1>
                  <p className="text-author text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-90">
                    {t.hero.subtitle}
                  </p>
                </div>
              </MotionWrapper>
            </div>

            {/* RIGHT – visual */}
            <div className="relative w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-[280px] h-[240px] sm:w-[550px] sm:h-[480px] lg:w-[850px] lg:h-[750px] xl:w-[1000px] xl:h-[900px] overflow-visible">
                <div className="absolute top-[-100%] left-[-30%] w-[170%] h-[170%] z-10 -rotate-[22deg] animate-float">
                  <Image src="/images/3playing.png" alt={t.mascotAlt.mokaMascot} fill className="object-contain object-bottom drop-shadow-2xl" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hero Divider */}
      <div className="w-full relative -mt-[180px] lg:-mt-[260px] z-20 pointer-events-none">
        <WaveDivider color="#fefce8" />
      </div>

      {/* ─── OUR STORY ─── */}
      <section className="pb-8 lg:pb-16 bg-[#fefce8] relative overflow-hidden -mt-2 pt-0 lg:pt-0">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center -mt-8 lg:-mt-16">

            {/* Left Column: Character Image */}
            <div className="lg:col-span-6 flex justify-center lg:justify-center lg:sticky lg:top-16 lg:pt-2">
              <MotionWrapper type="scale" delay={0.2} className="relative w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] lg:w-[1000px] lg:h-[1000px] -ml-12 lg:-ml-48">
                <Image
                  src="/images/picnic.png"
                  alt={t.mascotAlt.mokaPicnic}
                  fill
                  className="object-contain drop-shadow-2xl scale-[1.45] hover:scale-[1.55] transition-transform duration-700"
                />
              </MotionWrapper>
            </div>

            {/* Right Column: Text + Stats */}
            <div className="lg:col-span-6 space-y-8 pt-4">
              <MotionWrapper direction="left" delay={0.1}>
                <div className="space-y-6">
                  {/* Tag Removed */}
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-800 leading-[1.1] tracking-tight mb-4">
                    <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill"
                      }}>
                      {t.story.title}
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
                    <div className="text-4xl lg:text-5xl font-black text-hikids-blue mb-2 font-fredoka group-hover:scale-110 transition-transform">
                      <AnimatedCounter value={ach.value} />
                    </div>
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
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="space-y-20 lg:space-y-32">

            {/* MISSION (Left Img, Right Text) */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative items-center">
                <MotionWrapper type="scale" className="w-full max-w-[500px]">
                  {/* The actual sloped box */}
                  <div className="relative w-full aspect-[4/3] rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] border-[8px] lg:border-[12px] border-white overflow-hidden -rotate-[4deg] hover:-rotate-[2deg] transition-all duration-700 group cursor-pointer bg-yellow-50">
                    <Image src="/images/kg1.jpg" alt={t.mascotAlt.mission} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </MotionWrapper>
              </div>
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <MotionWrapper direction="right" className="lg:px-4">
                  <h2 className="text-5xl lg:text-6xl xl:text-7xl font-fredoka font-bold leading-[1.1] tracking-tight mb-6 mt-4">
                    <span className="text-white inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "10px #FFEB00",
                        paintOrder: "stroke fill"
                      }}>
                      {t.mission.title}
                    </span>
                  </h2>
                  <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                    {t.mission.description}
                  </p>
                </MotionWrapper>
              </div>
            </div>

            {/* VISION (Right Text, Left Img equivalent without explicit orders) */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">
              <div className="lg:col-span-7 space-y-6">
                <MotionWrapper direction="left" className="lg:px-4">
                  <h2 className="text-5xl lg:text-6xl xl:text-7xl font-fredoka font-bold leading-[1.1] tracking-tight mb-6 mt-4">
                    <span className="text-white inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "10px #00AEEF",
                        paintOrder: "stroke fill"
                      }}>
                      {t.vision.title}
                    </span>
                  </h2>
                  <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                    {t.vision.description}
                  </p>
                </MotionWrapper>
              </div>
              <div className="lg:col-span-5 flex justify-center relative items-center">
                <MotionWrapper type="scale" className="w-full max-w-[500px]">
                  {/* The actual sloped box */}
                  <div className="relative w-full aspect-[4/3] rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] border-[8px] lg:border-[12px] border-white overflow-hidden rotate-[4deg] hover:rotate-[2deg] transition-all duration-700 group cursor-pointer bg-blue-50">
                    <Image src="/images/kg2.jpg" alt={t.mascotAlt.vision} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
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
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-800 leading-[1.1] tracking-tight flex flex-col justify-center gap-y-2 items-center">
              <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl inline-block"
                style={{
                  WebkitTextStroke: "12px #00AEEF",
                  paintOrder: "stroke fill"
                }}>
                {t.method.title}
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-[#fefce8]/50 relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">

            {/* Left: Founder Image */}
            <div className="lg:col-span-5 relative">
              <MotionWrapper type="scale">
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white group">
                  <Image src="/images/businessman.png" alt={t.mascotAlt.founder} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
              </MotionWrapper>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-8">
              <MotionWrapper direction="left">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/50 text-slate-600 font-bold text-sm tracking-widest uppercase mb-2">
                    <Star size={18} />
                    <span>{t.leadershipLabel}</span>
                  </div>
                  <h2 className="text-5xl lg:text-6xl xl:text-7xl font-fredoka font-bold text-slate-800 leading-[1.1] tracking-tight">
                    {t.founder.name}
                  </h2>
                  <h4 className="text-xl lg:text-2xl font-bold text-hikids-blue uppercase tracking-widest">{t.founder.role}</h4>
                </div>

                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium mt-8">
                  {t.founder.description}
                </p>

                <div className="relative p-8 lg:p-12 mt-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#FFEB00]"></div>
                  <Quote className="absolute top-8 right-8 text-slate-100 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" size={60} />
                  <p className="relative z-10 text-2xl lg:text-3xl font-black text-slate-700 leading-snug italic font-fredoka mt-4">
                    &quot;{t.founder.quote}&quot;
                  </p>
                </div>
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      {/* ─── FINAL CTA ─── */}
      <section className="pb-16 lg:pb-24 pt-0 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Content (Now Left) */}
            <div className="lg:col-span-6 space-y-10 -mt-14 lg:-mt-28">
              <MotionWrapper direction="right" delay={0.1}>
                <div className="space-y-6 text-start">
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-800 leading-[1.1] tracking-tight mb-4">
                    <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill"
                      }}>
                      {t.founder.title}
                    </span>
                  </h2>

                  <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium mt-6">
                    {t.founder.description}
                  </p>
                </div>
              </MotionWrapper>

              <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
                <Link
                  href={`/${lang}/contact`}
                  className="btn-primary px-12 py-5 text-xl tracking-tight group"
                >
                  {dict.common.cta.contactUs} <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={`/${lang}/franchise`}
                  className="btn-outline px-12 py-5 text-xl tracking-tight bg-white shadow-xl hover:shadow-2xl transition-all"
                >
                  {dict.home.audiences.franchise.cta}
                </Link>
              </div>
            </div>

            {/* Character Image (Now Right) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end -mt-12 lg:-mt-24">
              <MotionWrapper type="scale" delay={0.2} className="relative w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] lg:w-[1000px] lg:h-[1000px] lg:-mr-16">
                <Image
                  src="/images/flowers.png"
                  alt={t.mascotAlt.flowers}
                  fill
                  className="object-contain drop-shadow-2xl scale-[1.1] lg:scale-110"
                />
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}