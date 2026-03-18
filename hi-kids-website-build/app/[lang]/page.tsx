import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
  Sparkles,
  Star,
  Globe,
  Smile,
  Zap,
  ShieldCheck,
  Sun,
  BookOpen,
  Award,
  Check,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";
import { TextBanner } from "@/components/text-banner";
import {
  LEVEL_COLORS,
  LEVEL_ICONS,
} from "@/lib/constants";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.home;
  const differentIcons = [Heart, ShieldCheck, Sun, Award];

  return (
    <>
      {/* Background is now clean - line art removed as requested */}
      {/* ─── FIXED BACKGROUND PATTERNS ─── */}


      {/* ─── HERO ─── */}
      <section className="relative min-h-[30vh] lg:min-h-[45vh] flex items-center overflow-hidden bg-background py-4 lg:py-8">

        <div className="absolute bottom-[20%] right-[10%] w-14 h-14 opacity-30 animate-sway hidden lg:block">
          <Sparkles className="text-slate-800" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full">
          <div className="grid gap-10 lg:grid-cols-2 items-center lg:gap-16 xl:gap-24">

            {/* LEFT – headline */}
            <div className="relative text-center lg:text-left">
              <MotionWrapper direction="right" delay={0.2} duration={1}>
                <div className="space-y-4 max-w-2xl mx-auto lg:mx-0 relative z-10">
                  <h1 className="text-main-title text-slate-800 drop-shadow-sm leading-[1.05]">
                    Shaping the Future<br />
                    of Early Education
                  </h1>
                  <p className="text-author text-slate-700 leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-90">
                    A global network built on innovation and educational excellence — empowering the next generation.
                  </p>
                </div>
              </MotionWrapper>
            </div>

            {/* RIGHT – visual */}
            <div className="relative w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-[360px] h-[320px] lg:w-[420px] lg:h-[370px] xl:w-[480px] xl:h-[420px] overflow-visible">

                <MotionWrapper direction="down" delay={0.4}>
                  <div className="absolute top-[-35%] right-[-75%] w-[85%] h-[70%] z-0 opacity-90">
                    <Image src="/images/HiKids-57.svg" alt="background patterns" fill className="object-contain object-right-top [filter:invert(74%)_sepia(51%)_saturate(595%)_hue-rotate(160deg)_brightness(94%)_contrast(94%)]" />
                  </div>
                </MotionWrapper>

                {/* Floating Decorative Shapes - Randomized Layout */}
                <MotionWrapper type="scale" delay={0.6}>
                  <div className="absolute -top-16 right-[10%] w-14 h-14 z-30 animate-float-slow opacity-80 -rotate-12">
                    <Image src="/images/HiKids-59.svg" alt="" fill className="object-contain [filter:invert(74%)_sepia(51%)_saturate(595%)_hue-rotate(160deg)_brightness(94%)_contrast(94%)]" />
                  </div>
                </MotionWrapper>

                <div className="absolute -top-[110%] -right-[900px] w-[2000px] h-[2000px] z-[-10] animate-wiggle opacity-30 rotate-12 pointer-events-none">
                  <Image src="/images/HiKids-25.svg" alt="" fill className="object-contain [filter:invert(74%)_sepia(51%)_saturate(595%)_hue-rotate(160deg)_brightness(94%)_contrast(94%)]" />
                </div>

                <div className="absolute -top-[70%] -right-[700px] w-[1600px] h-[1600px] z-0 animate-wiggle opacity-100 rotate-12">
                  <Image src="/images/HiKids-25.svg" alt="" fill className="object-contain [filter:invert(74%)_sepia(51%)_saturate(595%)_hue-rotate(160deg)_brightness(94%)_contrast(94%)]" />
                </div>

                <MotionWrapper type="scale" delay={0.8}>
                  <div className="absolute top-[10%] -right-12 w-20 h-20 z-10 animate-float opacity-40 rotate-[30deg]">
                    <Image src="/images/HiKids-26.svg" alt="" fill className="object-contain [filter:invert(74%)_sepia(51%)_saturate(595%)_hue-rotate(160deg)_brightness(94%)_contrast(94%)]" />
                  </div>
                </MotionWrapper>

                <MotionWrapper direction="up" delay={1}>
                  <div className="absolute -bottom-8 right-[20%] w-12 h-12 z-30 animate-drift opacity-50 rotate-[120deg]">
                    <Image src="/images/HiKids-26.svg" alt="" fill className="object-contain [filter:invert(74%)_sepia(51%)_saturate(595%)_hue-rotate(160deg)_brightness(94%)_contrast(94%)]" />
                  </div>
                </MotionWrapper>

                <div className="absolute top-[-10%] left-[-25%] w-[120%] h-[150%] z-10 -rotate-[28deg] animate-float">
                  <Image src="/images/hi.png" alt="HiKids mascot" fill className="object-contain object-bottom drop-shadow-lg scale-x-[-1]" />
                </div>

                <MotionWrapper direction="up" delay={0.6} duration={1.2}>
                  <div className="absolute bottom-[-45%] right-[-90%] w-[220%] h-[320%] z-20">
                    <Image src="/images/boy.png" alt="Student reading" fill className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]" priority />
                  </div>
                </MotionWrapper>
              </div>
            </div>

          </div>
        </div>


      </section>

      {/* Hero Divider */}
      <div className="w-full relative -mt-[100px] lg:-mt-[100px] z-20">
        <WaveDivider color="white" />
      </div>

      {/* ─── PATHWAYS ─── */}
      <section className="bg-white py-4 lg:py-8 relative overflow-hidden min-h-[95vh] flex flex-col justify-center">


        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 mt-0">

          {/* Refined Section Header: Banner for tag, Heading below */}
          <MotionWrapper viewportAmount={0.3}>
            <div className="flex flex-col items-center mb-10 lg:mb-16 relative group">
              {/* Tag - Simple Pill Style */}
              <span className="mb-4 bg-hikids-blue/10 text-hikids-blue text-xs font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full inline-block border border-hikids-blue/20">
                Pathways
              </span>

              {/* Premium Standard Fredoka Heading */}
              <div className="text-center">
                <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black leading-[1.1] tracking-tight text-center">
                  <span className="text-hikids-green">Check Our </span>
                  <br className="sm:hidden" />
                  <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "12px #00AEEF",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                    }}>
                    Paths
                  </span>
                </h2>
              </div>
            </div>
          </MotionWrapper>

          <MotionContainer className="grid gap-6 md:grid-cols-3 items-stretch">

            {/* Business Owners */}
            <MotionItem>
              <div className="bg-[#f9f28c] rounded-[2.5rem] p-10 lg:p-12 flex flex-col h-full shadow-2xl shadow-yellow-500/20 border border-yellow-300/50 hover:shadow-yellow-500/30 hover:-translate-y-2 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-hikids-yellow/30 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                {/* Businessman Background - Professional Integration */}
                <div className="absolute bottom-0 right-0 w-[80%] h-[70%] opacity-[0.25] group-hover:opacity-40 pointer-events-none transition-all duration-700 group-hover:scale-110">
                  <Image
                    src="/images/businessman.png"
                    alt=""
                    fill
                    className="object-contain object-right-bottom"
                  />
                </div>

                {/* Decorative wavy accent - Top Cloud (Dark Yellow) via Masking */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-hikids-yellow opacity-100 pointer-events-none z-20"
                  style={{
                    maskImage: "url('/images/HiKids-55.svg')",
                    WebkitMaskImage: "url('/images/HiKids-55.svg')",
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'bottom',
                    transform: 'scaleY(-1)'
                  }}
                />

                {/* Header: Icon Only */}
                <div className="flex items-center gap-5 mb-8 relative z-30">
                  <div className="w-16 h-16 rounded-[4rem] bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-900 shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8" />
                  </div>
                </div>

                {/* Tag */}
                <div className="mb-6 relative z-30">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full inline-block">Franchise Opportunities</span>
                </div>

                {/* Repositioned Title */}
                <div className="mb-10 relative z-30 flex-1">
                  <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Business</h3>
                  <span className="text-xl font-bold text-slate-800 uppercase tracking-widest mt-2 block">Owners</span>
                </div>

                {/* Checklist */}
                <div className="grid grid-cols-2 gap-y-5 gap-x-2 mb-10 relative z-30">
                  {[
                    "Proven Model",
                    "Global Network",
                    "Full Support",
                    "High ROI",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[14px] lg:text-[15px] font-bold text-slate-900">
                      <Check strokeWidth={4} className="w-6 h-6 text-slate-900 shrink-0 mt-[2px]" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto relative z-30">
                  <Link
                    href={`/${lang}/franchise`}
                    className="btn-outline bg-white text-slate-900 border-transparent py-4 text-lg w-full justify-center shadow-xl hover:bg-slate-50 hover:scale-[1.02]"
                  >
                    Explore Franchise <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </MotionItem>

            {/* Educators */}
            <MotionItem>
              <div className="bg-blue-200 rounded-[2.5rem] p-10 lg:p-12 flex flex-col h-full shadow-2xl shadow-blue-500/20 border border-blue-300/50 hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-hikids-blue/30 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                {/* Educators Background - Professional Integration */}
                <div className="absolute bottom-0 right-0 w-[80%] h-[70%] opacity-[0.25] group-hover:opacity-45 pointer-events-none transition-all duration-700 group-hover:scale-110">
                  <Image
                    src="/images/educators.png"
                    alt=""
                    fill
                    className="object-contain object-right-bottom"
                  />
                </div>

                {/* Decorative wavy accent - Top Cloud (Dark Blue) via Masking */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-hikids-blue opacity-100 pointer-events-none z-20"
                  style={{
                    maskImage: "url('/images/HiKids-55.svg')",
                    WebkitMaskImage: "url('/images/HiKids-55.svg')",
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'bottom',
                    transform: 'scaleY(-1)'
                  }}
                />

                <div className="flex items-center gap-5 mb-8 relative z-30">
                  <div className="w-16 h-16 rounded-[4rem] bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-900 shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                </div>

                <div className="mb-6 relative z-30">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full inline-block">Teaching Excellence</span>
                </div>

                <div className="mb-10 relative z-30 flex-1">
                  <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Educator</h3>
                  <span className="text-xl font-bold text-slate-800 uppercase tracking-widest mt-2 block">Resources</span>
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-2 mb-10 relative z-30">
                  {[
                    "Rich Curriculum",
                    "Modern Tools",
                    "Training Access",
                    "Community Forum",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[14px] lg:text-[15px] font-bold text-slate-900">
                      <Check strokeWidth={4} className="w-6 h-6 text-slate-900 shrink-0 mt-[2px]" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto relative z-30">
                  <Link
                    href={`/${lang}/educators`}
                    className="btn-outline bg-white text-slate-900 border-transparent py-4 text-lg w-full justify-center shadow-xl hover:bg-slate-50 hover:scale-[1.02]"
                  >
                    Access Library <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </MotionItem>

            {/* Parents */}
            <MotionItem>
              <div className="bg-[#f9f28c] rounded-[2.5rem] p-10 lg:p-12 flex flex-col h-full shadow-2xl shadow-yellow-500/20 border border-yellow-300/50 hover:shadow-yellow-500/30 hover:-translate-y-2 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-hikids-yellow/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                {/* Parents Background - Professional Integration */}
                <div className="absolute bottom-0 right-0 w-[80%] h-[70%] opacity-[0.15] group-hover:opacity-35 pointer-events-none transition-all duration-700 group-hover:scale-110">
                  <Image
                    src="/images/parents.png"
                    alt=""
                    fill
                    className="object-contain object-right-bottom"
                  />
                </div>

                {/* Decorative wavy accent - Top Cloud (Dark Yellow) via Masking */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-hikids-yellow opacity-100 pointer-events-none z-20"
                  style={{
                    maskImage: "url('/images/HiKids-55.svg')",
                    WebkitMaskImage: "url('/images/HiKids-55.svg')",
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'bottom',
                    transform: 'scaleY(-1)'
                  }}
                />

                <div className="flex items-center gap-5 mb-8 relative z-30">
                  <div className="w-16 h-16 rounded-[4rem] bg-white/40 backdrop-blur-sm flex items-center justify-center text-slate-900 shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8" />
                  </div>
                </div>

                <div className="mb-6 relative z-30">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full inline-block">Parenting Support</span>
                </div>

                <div className="mb-10 relative z-30 flex-1">
                  <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Parents</h3>
                  <span className="text-xl font-bold text-slate-800 uppercase tracking-widest mt-2 block">Network</span>
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-2 mb-10 relative z-30">
                  {[
                    "Progress Tracking",
                    "Expert Resources",
                    "Development",
                    "Safe Community",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[14px] lg:text-[15px] font-bold text-slate-900">
                      <Check strokeWidth={4} className="w-6 h-6 text-slate-900 shrink-0 mt-[2px]" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto relative z-30">
                  <Link
                    href={`/${lang}/parents`}
                    className="btn-outline bg-white text-slate-900 border-transparent py-4 text-lg w-full justify-center shadow-xl hover:bg-slate-50 hover:scale-[1.02]"
                  >
                    Parent Portal <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </MotionItem>

          </MotionContainer>
        </div>
      </section>

      {/* ─── WHAT IS HIKIDS – Compact Milestone Strip ─── */}
      <section className="bg-white py-4 lg:py-8 relative overflow-visible min-h-[95vh] flex flex-col justify-center">
        {/* Background Pattern from bottom to top */}
        {/* <div className="absolute bottom-0 left-0 w-full flex justify-center items-end h-[50%] lg:h-[70%] z-0 opacity-[0.25] pointer-events-none overflow-hidden blur-[1px]">
          <div className="relative w-[55%] h-full shrink-0 -mr-[5%]">
            <Image src="/images/HiKids-54-colorful.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>
          <div className="relative w-[55%] h-full shrink-0 -ml-[5%]">
            <Image src="/images/HiKids-54-colorful.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>
        </div> */}

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10">

          {/* Header */}
          <MotionWrapper direction="up" viewportAmount={0.5}>
            <div className="text-center flex flex-col items-center max-w-[1200px] w-full mx-auto mb-6 sm:mb-8 space-y-4 sm:space-y-6">
              <div className="relative text-center items-center flex flex-col">
                {/* Creative Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[80px] opacity-70 animate-pulse-slow pointer-events-none" />
                <span className="mb-4 bg-hikids-blue/10 text-hikids-blue text-xs font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full inline-block border border-hikids-blue/20">
                  ABOUT
                </span>
                <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black leading-[1.1] tracking-tight mb-4 relative z-10">
                  What is <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "12px #00AEEF",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                    }}>
                    HiKids
                  </span> ?
                </h2>
              </div>



              <p className="text-author !text-lg lg:!text-xl text-slate-600 leading-relaxed max-w-[1200px] w-full mx-auto opacity-90">
                {t.whatIs.description}
              </p>
            </div>
          </MotionWrapper>
          {/* Creative Interactive Map - Milestone Roadmap */}
          <MotionContainer className="relative mt-8 mb-8 lg:mb-12 mx-auto w-full max-w-[1600px] aspect-[4/9] md:aspect-[3/4] lg:aspect-[28/10] flex items-center justify-center overflow-visible">

            {/* Ambient Background Glows for the Map Area */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[30%] h-[40%] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Desktop Winding Map Path */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm opacity-60" viewBox="0 0 1000 500" preserveAspectRatio="none">
              <defs>
                <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ED1C24" />
                  <stop offset="30%" stopColor="#ED1C24" />
                  <stop offset="30%" stopColor="#00AEEF" />
                  <stop offset="50%" stopColor="#00AEEF" />
                  <stop offset="50%" stopColor="#8CC63F" />
                  <stop offset="70%" stopColor="#8CC63F" />
                  <stop offset="70%" stopColor="#f0b952" />
                  <stop offset="100%" stopColor="#f0b952" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 0 250 C 100 250, 100 100, 200 100 C 300 100, 300 400, 400 400 C 500 400, 500 100, 600 100 C 700 100, 700 400, 800 400 C 900 400, 900 250, 1000 250"
                fill="none"
                stroke="url(#map-gradient)"
                strokeWidth="6"
                strokeDasharray="20 15"
                strokeLinecap="round"
                filter="url(#glow)"
                className="opacity-70"
              />
            </svg>

            {/* Mobile Winding Map Path */}
            <svg className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm opacity-60" viewBox="0 0 500 1000" preserveAspectRatio="none">
              <defs>
                <linearGradient id="map-gradient-mob" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ED1C24" />
                  <stop offset="30%" stopColor="#ED1C24" />
                  <stop offset="30%" stopColor="#00AEEF" />
                  <stop offset="50%" stopColor="#00AEEF" />
                  <stop offset="50%" stopColor="#8CC63F" />
                  <stop offset="70%" stopColor="#8CC63F" />
                  <stop offset="70%" stopColor="#f0b952" />
                  <stop offset="100%" stopColor="#f0b952" />
                </linearGradient>
              </defs>
              <path d="M 250 0 C 250 100, 100 100, 100 200 C 100 300, 400 300, 400 400 C 400 500, 100 500, 100 600 C 100 700, 400 700, 400 800 C 400 900, 250 900, 250 1000"
                fill="none" stroke="url(#map-gradient-mob)" strokeWidth="5" strokeDasharray="12 12" strokeLinecap="round" />
            </svg>

            {/* Dynamic Map Nodes */}
            {t.whatIs.levels.map((level, i) => {
              const positions = [
                "left-[20%] top-[20%] lg:left-[20%] lg:top-[20%]",
                "left-[80%] top-[40%] lg:left-[40%] lg:top-[80%]",
                "left-[20%] top-[60%] lg:left-[60%] lg:top-[20%]",
                "left-[80%] top-[80%] lg:left-[80%] lg:top-[80%]"
              ];

              const popupClasses = [
                "top-[115%] left-0 lg:left-1/2 lg:-translate-x-1/2 lg:top-[125%] origin-top-left lg:origin-top",
                "top-[115%] right-0 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:top-auto lg:bottom-[125%] origin-top-right lg:origin-bottom",
                "bottom-[115%] left-0 lg:bottom-auto lg:left-1/2 lg:-translate-x-1/2 lg:top-[125%] origin-bottom-left lg:origin-top",
                "bottom-[115%] right-0 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:top-auto lg:bottom-[125%] origin-bottom-right lg:origin-bottom"
              ];

              const levelSvgs = ["/images/level-1.svg", "/images/level-2.svg", "/images/level-3.svg", "/images/level-4.svg"];
              const hexColors = ['#ED1C24', '#00AEEF', '#8CC63F', '#f0b952'];

              return (
                <div key={level.name} className={`absolute ${positions[i]} -translate-x-1/2 -translate-y-1/2 z-10 hover:z-50 focus-within:z-50 group`}>
                  <MotionItem>
                    {/* Interactive Pin Marker - Senior Design Polish */}
                    <div
                      className="relative w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 lg:group-hover:scale-125 group-hover:-translate-y-4 lg:group-hover:-translate-y-6 cursor-pointer z-30 drop-shadow-2xl"
                    >
                      <Image src={levelSvgs[i]} alt={level.name} fill className="object-contain transition-transform duration-700 group-hover:rotate-[-8deg] lg:group-hover:rotate-[-12deg]" />

                      {/* Subtle pulse behind icon on hover */}
                      <div className="absolute inset-0 bg-white/0 rounded-full group-hover:bg-white/5 transition-all duration-700 scale-150 blur-2xl opacity-0 group-hover:opacity-100" />
                    </div>

                    {/* Professional, Creative & Simple Brief Card */}
                    <div
                      className={`absolute w-[80vw] sm:w-72 md:w-80 lg:w-[22rem] bg-white p-10 lg:p-14 rounded-[4rem] shadow-2xl border-2 opacity-0 scale-95 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 ${popupClasses[i]}`}
                      style={{ borderColor: `${hexColors[i]}20` }}
                    >
                      {/* Faint Level Number in Background */}
                      <div
                        className="absolute right-4 -top-2 text-[80px] font-black italic opacity-[0.04] select-none pointer-events-none"
                        style={{ color: hexColors[i] }}
                      >
                        0{i + 1}
                      </div>

                      <div className="relative z-10">
                        <div className="flex flex-col gap-1 mb-6">
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: hexColors[i] }}>
                            Level 0{i + 1}
                          </span>
                          <h4 className="text-xl md:text-2xl font-black text-slate-800">
                            {level.age}
                          </h4>
                        </div>

                        <ul className="space-y-4">
                          {level.description.split(/(?:,\s*|\s+and\s+)/i).filter(Boolean).map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${hexColors[i]}15` }}>
                                <Check className="w-3 h-3" style={{ color: hexColors[i] }} strokeWidth={4} />
                              </div>
                              <span className="text-slate-600 text-sm md:text-base font-medium leading-[1.4]">
                                {point.trim().replace(/\.$/, '')}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </MotionItem>
                </div>
              );
            })}
          </MotionContainer>

          {/* Franchise Network Mention - Refined Premium Card */}
          <MotionWrapper className="mt-4 sm:mt-6 max-w-[1400px] w-full mx-auto px-4" type="scale" delay={0.2}>
            <div className="group relative overflow-hidden rounded-[3rem] bg-[#fbf7c3] border border-hikids-yellow/20 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-hikids-yellow/5 transition-all duration-700 hover:shadow-hikids-yellow/10">
              {/* Refined Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:p-16 text-center lg:text-left">
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-[4rem] bg-white shadow-xl shadow-hikids-yellow/10 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                      <Globe className="w-10 h-10 text-hikids-blue" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-hikids-green rounded-full border-4 border-white animate-pulse" />
                  </div>

                  <div className="space-y-4 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-hikids-yellow/30 text-[10px] font-black uppercase tracking-[0.2em] text-hikids-yellow relative overflow-hidden">
                      <span className="relative z-10">Franchise Program</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight !font-fredoka">Global Franchise Network</h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium opacity-90 text-balance">
                      {t.whatIs.subtitle || "A modern educational franchise built on progressive learning levels, designed to nurture potential worldwide."}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href={`/${lang}/franchise`}
                    className="btn-primary px-10 py-4 text-xs tracking-widest uppercase hover:scale-105"
                  >
                    Join the Network <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </MotionWrapper>

        </div>
      </section>

      {/* ─── MEET MOKA SECTION – Reverted Layout with Fancy Title ─── */}
      <section className="py-4 lg:py-8 bg-yellow-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">

            {/* Left Column: ONLY Character Image */}
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

            {/* Right Column: Text + Cards (Stacked) */}
            <div className="lg:col-span-6 space-y-8 pt-4">
              <MotionWrapper type="fade" direction="left" delay={0.1}>
                <div className="space-y-4">

                  {/* Flexible Fancy Title Container (9-Slice Stretching Banner) */}
                  <div className="relative inline-flex flex-col items-center group mb-10">
                    {/* The Puffy Text Title */}
                    <h2 className="relative z-10 text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black leading-tight tracking-tight select-none pt-2 px-4 whitespace-nowrap text-slate-900">
                      Meet <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                        style={{
                          WebkitTextStroke: "12px #00AEEF",
                          paintOrder: "stroke fill",
                          filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                        }}>
                        {dict.about.moka.title}
                      </span>
                    </h2>

                    <div className="relative z-20 -mt-2 transform rotate-[-1deg]">
                      <h4 className="text-xl lg:text-3xl xl:text-4xl font-fredoka font-bold text-white leading-tight tracking-widest px-8"
                        style={{
                          WebkitTextStroke: "6px #00AEEF",
                          paintOrder: "stroke fill",
                          filter: "drop-shadow(0 4px 0 rgba(0,0,0,0.1))"
                        }}>
                        {dict.about.moka.subtitle}
                      </h4>
                    </div>
                  </div>

                  <p className="text-base lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                    {dict.about.moka.description}
                  </p>
                </div>
              </MotionWrapper>

              {/* Traits Cards - Original styling */}
              <div className="grid sm:grid-cols-2 gap-4">
                {dict.about.moka.traits.map((trait: { title: string; description: string }, i: number) => (
                  <MotionItem key={i} className="bg-white p-6 lg:p-8 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-start text-left group hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-hikids-yellow mb-4 group-hover:scale-110 transition-transform">
                      {i === 0 && <BookOpen size={24} />}
                      {i === 1 && <Globe size={24} />}
                      {i === 2 && <Zap size={24} />}
                      {i === 3 && <Sparkles size={24} />}
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-2 leading-tight font-fredoka">{trait.title}</h3>
                    <p className="text-slate-500 text-sm lg:text-base leading-relaxed font-medium">
                      {trait.description}
                    </p>
                  </MotionItem>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHY DIFFERENT SECTION – Organized Alignment ─── */}
      <section className="py-4 lg:py-8 relative overflow-hidden bg-blue-50">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* Left Column: Text + Content Stack */}
            <div className="lg:col-span-7 space-y-10 pt-4">
              <MotionWrapper direction="right" delay={0.1}>
                <div className="space-y-6">
                  <span className="bg-hikids-blue/10 text-hikids-blue text-xs font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full inline-block border border-hikids-blue/20">
                    The HiKids Difference
                  </span>
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight mb-4">
                    Why HiKids is <br className="sm:hidden" />
                    <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                      }}>
                      Different
                    </span>
                  </h2>
                  <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                    {t.whyDifferent.subtitle}
                  </p>
                </div>
              </MotionWrapper>

              {/* Feature Grid - Cards Alignment */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Structured levels", desc: "Scientific progress tracking for every developmental stage.", icon: BookOpen },
                  { title: "Modern method", desc: "Digital-first learning with interactive, gamified content.", icon: Zap },
                  { title: "Proven model", desc: "A brand built on global success and business excellence.", icon: ShieldCheck },
                  { title: "Teacher support", desc: "Continuous training and a community of global experts.", icon: GraduationCap }
                ].map((item, i) => (
                  <MotionItem key={i} className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start text-left group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-hikids-blue mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-black text-slate-800 mb-3 leading-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm lg:text-base leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </MotionItem>
                ))}
              </div>
            </div>

            {/* Right Column: Image Only (Sticky) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-center lg:sticky lg:top-0">
              <MotionWrapper type="scale" delay={0.2} className="relative w-[600px] h-[600px] lg:w-[1300px] lg:h-[1300px] lg:-ml-24 lg:-mt-48">
                <Image
                  src="/images/Moka-Dance.png"
                  alt="Moka Dancing"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FINAL CTA SECTION ─── */}
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
                  <span className="bg-hikids-blue/10 text-hikids-blue text-xs font-bold uppercase tracking-[0.15em] px-6 py-2 rounded-full inline-block border border-hikids-blue/20">
                    JOIN THE FAMILY
                  </span>

                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight mb-4">
                    Join the <br className="sm:hidden" />
                    <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                      }}>
                      HiKids
                    </span>
                    <br /> Family
                  </h2>

                  <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
                    Empower your journey with HiKids. Whether you are a parent, educator, or business owner — we are here for you.
                  </p>
                </div>
              </MotionWrapper>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  href={`/${lang}/franchise/inquiry`}
                  className="btn-primary px-12 py-5 text-xl tracking-tight group"
                >
                  {dict.common.cta.getStarted} <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={`/${lang}/contact`}
                  className="btn-outline px-12 py-5 text-xl tracking-tight bg-white shadow-xl hover:shadow-2xl transition-all"
                >
                  {dict.common.cta.contactUs}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
