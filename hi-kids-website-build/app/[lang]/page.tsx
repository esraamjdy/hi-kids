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
  Rocket,
  Sun,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";
import { FloatingCharacter } from "@/components/floating-character";
import {
  LEVEL_COLORS,
  LEVEL_ICONS,
} from "@/lib/constants";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.home;

  const differentIcons = [Rocket, Heart, ShieldCheck, Sun];

  return (
    <>
      {/* Hero Section - Compact & Layered */}
      <section className="relative min-h-[48vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-accent pt-12 pb-6">
        {/* Floating Decorative Characters */}
        <FloatingCharacter type="bubble" position="top-left" delay={0} opacity={0.4} scale={0.8} />
        <FloatingCharacter type="star" position="top-right" delay={0.5} opacity={0.35} scale={0.7} />
        <FloatingCharacter type="shape" position="bottom-left" delay={1} opacity={0.3} scale={0.6} />

        {/* Soft Glows */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12 z-10 w-full">
          <div className="grid gap-10 lg:grid-cols-2 items-center lg:gap-16">

            {/* LEFT SIDE */}
            <div className="relative">

              {/* Soft Premium Glow */}
              <div className="absolute -left-16 top-10 w-80 h-80 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>

              <div className="space-y-7 text-left max-w-xl relative z-10 animate-fadeUp">

                {/* Top Line */}
                <p className="text-sm tracking-[0.25em] uppercase text-white/70 font-semibold">
                  International Early Learning
                </p>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-white tracking-tight">
                  Shaping the
                  <span className="relative block w-fit mb-4">
                    Future
                    {/* Clean underline */}
                    <span className="absolute -bottom-3 left-0 h-[8px] w-full bg-white/25 rounded-full animate-grow"></span>
                  </span>
                  <span className="block text-white/75 font-semibold">
                    of Early Education
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
                  A global network of kindergartens built on innovation, warmth, and proven educational excellence — empowering the next generation with confidence.
                </p>

                {/* Single CTA */}
                <div className="pt-4">
                  <Link
                    href={`/${lang}/parents`}
                    className="group inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3 text-sm font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    Explore Programs
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            </div>




            {/* RIGHT SIDE VISUAL – exact reference composition */}
            <div className="relative w-full flex items-center justify-center lg:justify-end">

              {/* Container للصور بدون خلفية */}
              <div className="relative w-[480px] h-[440px] lg:w-[580px] lg:h-[520px] xl:w-[650px] xl:h-[580px] overflow-visible">

                {/* LAYER 1: patterns (الأشكال الخضراء في الخلفية أعلى اليمين) */}
                <div className="absolute top-4 right-4 w-[55%] h-[64%] z-0 opacity-90">
                  <Image
                    src="/images/patterns.png"
                    alt="background patterns"
                    fill
                    className="object-contain object-right-top"
                  />
                </div>

                {/* LAYER 2: hi.png (البطريق) - خلف الولد، مائل لليسار، ومكانه يسار المنتصف */}
                <div className="absolute top-[-5%] left-[-7%] w-[82%] h-[102%] z-10 -rotate-[28deg] animate-float">
                  <Image
                    src="/images/hi.png"
                    alt="HiKids mascot"
                    fill
                    className="object-contain object-bottom drop-shadow-lg scale-x-[-1]"
                  />
                </div>

                {/* LAYER 3: boy.png (الولد) - العنصر الأكبر، في المنتصف لليمين قليلاً وفي الواجهة */}
                <div className="absolute bottom-[8%] right-[-5%] w-[105%] h-[180%] z-20">
                  <Image
                    src="/images/boy.png"
                    alt="Student reading"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
                    priority
                  />
                </div>

                {/* LAYER 4: shape.png (المربع الأخضر) - في المقدمة تماماً، بجانب الولد ومغطي جزء بسيط من البطريق */}
                <div className="absolute bottom-[8%] left-[7%] w-[22%] h-[38%] z-[5] drop-shadow-xl">
                  <Image
                    src="/images/shape.png"
                    alt="shape accent"
                    fill
                    className="object-contain "
                  />
                </div>

              </div>
            </div>


          </div>
        </div>

        {/* Bottom Wave - White rising curve */}
        <div className="absolute -bottom-[1px] left-0 w-full leading-none">
          <WaveDivider color="white" />
        </div>
      </section>      {/* Pathways / Discovery - Audience Cards */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">

            {/* Franchise Pathway – businessman */}
            <Link
              href={`/${lang}/franchise`}
              className="group relative rounded-[3rem] bg-primary overflow-hidden min-h-[380px] flex flex-col justify-end transition-all hover:shadow-2xl hover:-translate-y-3 duration-500 hover:animate-glow-pulse"
            >
              {/* Photo */}
              <div className="absolute bottom-0 right-0 w-[75%] h-[90%] z-0">
                <Image
                  src="/images/businessman.png"
                  alt="Business Owner"
                  fill
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Brand Identity - Floating Patterns */}
              <div className="absolute top-4 right-4 w-32 h-32 opacity-20 rotate-12 group-hover:rotate-45 transition-transform duration-1000 z-[15]">
                <Image src="/images/patterns.png" alt="" fill className="object-contain brightness-0 invert" />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent z-10" />
              {/* Text */}
              <div className="relative z-20 p-10">
                <h3 className="text-3xl font-black text-white uppercase leading-tight">
                  Business<br />Owners
                </h3>
                <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-semibold group-hover:gap-4 transition-all duration-300">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Educators Pathway */}
            <Link
              href={`/${lang}/educators`}
              className="group relative rounded-[3rem] bg-accent overflow-hidden min-h-[380px] flex flex-col justify-end transition-all hover:shadow-2xl hover:-translate-y-3 duration-500"
            >
              {/* Photo */}
              <div className="absolute bottom-0 right-[-4%] w-[85%] h-[88%] z-0">
                <Image
                  src="/images/educators.png"
                  alt="Educator with kids"
                  fill
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Brand Identity - Floating Patterns */}
              <div className="absolute top-4 right-4 w-32 h-32 opacity-15 -rotate-12 group-hover:rotate-[-45deg] transition-transform duration-1000 z-[15]">
                <Image src="/images/patterns.png" alt="" fill className="object-contain brightness-0" />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(51,100%,40%)] via-[hsl(51,100%,45%)]/60 to-transparent z-10" />
              {/* Text */}
              <div className="relative z-20 p-10">
                <h3 className="text-3xl font-white text-white uppercase leading-tight">
                  Educators
                </h3>
                <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-semibold group-hover:gap-4 transition-all duration-300">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Parents Pathway */}
            <Link
              href={`/${lang}/parents`}
              className="group relative rounded-[3rem] bg-secondary overflow-hidden min-h-[380px] flex flex-col justify-end transition-all hover:shadow-2xl hover:-translate-y-3 duration-500"
            >
              {/* Photo */}
              <div className="absolute bottom-0 right-[-2%] w-[90%] h-[85%] z-0">
                <Image
                  src="/images/parents.png"
                  alt="Parents with child"
                  fill
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Brand Identity - Floating Patterns */}
              <div className="absolute top-4 right-4 w-32 h-32 opacity-20 rotate-45 group-hover:rotate-90 transition-transform duration-1000 z-[15]">
                <Image src="/images/patterns.png" alt="" fill className="object-contain brightness-0 invert" />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-10" />
              {/* Text */}
              <div className="relative z-20 p-10">
                <h3 className="text-3xl font-black text-white uppercase leading-tight">
                  Parents
                </h3>
                <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-semibold group-hover:gap-4 transition-all duration-300">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>      {/* Brand Story / What is HiKids */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
        {/* Floating Characters */}
        <FloatingCharacter type="shape" position="top-right" delay={0.3} opacity={0.25} scale={1.2} />
        <FloatingCharacter type="bubble" position="bottom-left" delay={0.8} opacity={0.2} scale={0.9} />

        <div className="absolute -right-20 top-0 opacity-10 hidden xl:block pointer-events-none animate-float-slow">
          <Image src="/images/Whisk_3da4c60c2d295d7b7ee45f21d2e0efe6dr.png" alt="" width={500} height={500} />
        </div>

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10 text-center">
          <SectionHeader title={t.whatIs.title} subtitle={t.whatIs.subtitle} />

          <div className="mx-auto max-w-5xl text-center mb-16 animate-fade-in-up">
            <p className="text-2xl font-medium text-muted-foreground leading-relaxed text-pretty">
              {t.whatIs.description}
            </p>
            {/* Franchise network mention
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-primary/5 px-6 py-3 text-primary font-bold">
              <Globe className="h-5 w-5" />
              Part of an International Franchise Network
            </div> */}
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {t.whatIs.levels.map((level, i) => {
              const patternImages = [
                "/images/6.png", // Blue
                "/images/7.png", // Green
                "/images/3.png", // Yellow
                "/images/9.png", // Alternative Yellow/Blue
              ];
              return (
                <div
                  key={level.name}
                  className={`group relative rounded-[3rem] border-2 p-10 transition-all hover:shadow-3xl hover:-translate-y-3 duration-500 overflow-hidden ${i === 0
                    ? "bg-primary/5 border-primary/20 hover:bg-primary/10"
                    : i === 1
                      ? "bg-accent/10 border-accent/30 hover:bg-accent/20"
                      : i === 2
                        ? "bg-secondary/5 border-secondary/20 hover:bg-secondary/10"
                        : "bg-primary/5 border-primary/20 hover:bg-primary/10"
                    }`}
                >
                  {/* <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity"> */}

                  <div className="mb-8 flex h-24 w-24 items-center justify-center group-hover:scale-110 transition-transform duration-500 overflow-hidden p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src={patternImages[i]}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] font-semibold tracking-widest text-foreground/50">{level.age}</span>
                    <h3
                      className={`mt-1 text-2xl font-black tracking-tight ${i === 0
                        ? "text-primary"
                        : i === 1
                          ? "text-accent"
                          : i === 2
                            ? "text-secondary"
                            : "text-primary"
                        }`}
                    >
                      {level.name}</h3>
                  </div>

                  <p className="text-lg leading-relaxed text-foreground/70 font-medium">
                    {level.description}
                  </p>

                  <div
                    className={`mt-8 flex h-2 w-16 rounded-full transition-all duration-700 group-hover:w-full ${i === 0
                      ? "bg-primary/40"
                      : i === 1
                        ? "bg-accent/50"
                        : i === 2
                          ? "bg-secondary/40"
                          : "bg-primary/40"
                      }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Why HiKids is Different */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-white/50 to-white">
        {/* Floating Characters */}
        <FloatingCharacter type="star" position="top-left" delay={0.4} opacity={0.25} scale={0.8} />
        <FloatingCharacter type="shape" position="bottom-right" delay={1.2} opacity={0.2} scale={0.7} />

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8">
          <SectionHeader
            title={t.whyDifferent.title}
            subtitle={t.whyDifferent.subtitle}
          />

          <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.whyDifferent.features.map((feature, i) => {
              const Icon = differentIcons[i];
              const accentColors = [
                "bg-primary",
                "bg-accent",
                "bg-secondary",
                "bg-primary",
              ];
              const textAccent = [
                "text-primary",
                "text-[hsl(51,100%,40%)]",
                "text-secondary",
                "text-primary",
              ];

              return (
                <div
                  key={feature.title}
                  className="group relative rounded-[2.5rem] bg-white border border-border/40 p-10 transition-all duration-500 text-center shadow-lg hover:shadow-2xl hover:-translate-y-4 overflow-hidden hover:scale-105"
                >
                  <div className={`absolute top-0 left-0 w-full h-3 ${accentColors[i]}`} />
                  <div className="absolute top-6 right-6 w-24 h-24 opacity-5 pointer-events-none grayscale brightness-0">
                    <Image src="/images/patterns.png" alt="" fill className="object-contain" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none rotate-12">
                    <Image src="/images/hi.png" alt="" fill className="object-contain grayscale brightness-0" />
                  </div>
                  <div className={`mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl ${accentColors[i]} text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="h-12 w-12" />
                  </div>
                  <h3 className={`mb-4 text-2xl font-black transition-colors ${textAccent[i]}`}>
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-relaxed font-medium text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>





      {/* Trust / Final Action Banner - Simplified */}
      {/* Premium CTA */}
      <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
        {/* Floating Characters for visual interest */}
        <FloatingCharacter type="bubble" position="top-left" delay={0.2} opacity={0.2} scale={0.75} />
        <FloatingCharacter type="star" position="top-right" delay={0.7} opacity={0.22} scale={0.8} />
        <FloatingCharacter type="shape" position="bottom-right" delay={1.3} opacity={0.18} scale={0.65} />

        {/* Background Decorative - subtle brand identity */}
        <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] pointer-events-none">
          <Image src="/images/patterns.png" alt="" fill className="object-contain" />
        </div>
        {/* Premium Content Box */}
        <div className="mx-auto max-w-[1400px] px-6 relative z-10">
          <div className="relative overflow-hidden rounded-[4rem] bg-primary p-12 lg:p-24 shadow-[0_50px_100px_-20px_rgba(0,10,100,0.3)]">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 rotate-12 pointer-events-none">
              <Image src="/images/hi.png" alt="" fill className="object-contain brightness-0 invert" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />

            <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/15 px-6 py-2 text-sm font-black text-white uppercase tracking-widest backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-accent" />
                Join Our Global Network
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white text-balance tracking-tight leading-[1.1]">
                {dict.common.tagline}
              </h2>

              <p className="mt-8 text-xl md:text-2xl text-white/80 font-medium max-w-2xl leading-relaxed">
                Empower your journey with HiKids. Whether you are a parent, educator, or business owner—we are here for you.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <Link
                  href={`/${lang}/franchise/inquiry`}
                  className="group inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-xl font-black text-primary transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
                >
                  {dict.common.cta.getStarted}
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center gap-4 rounded-full border-2 border-white/40 bg-white/5 px-10 py-5 text-xl font-black text-white hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-md active:scale-95"
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
