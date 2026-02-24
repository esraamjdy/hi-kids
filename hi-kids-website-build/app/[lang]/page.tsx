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
      {/* Hero Section - Professional & Spacious */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-accent pt-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.08] pointer-events-none">
          <Image src="/images/Whisk_3da4c60c2d295d7b7ee45f21d2e0efe6dr.png" alt="" fill className="object-cover" />
        </div>

        <div className="relative container-wide z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* LEFT SIDE - Text Content */}
            <div className="space-y-8 animate-fadeUp">
              <div className="space-y-6">
                <p className="text-sm tracking-widest uppercase font-semibold text-primary/70">
                  International Early Learning Platform
                </p>

                <h1 className="heading-primary text-white">
                  Shaping the Future of Early Education
                </h1>

                <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                  A global network of programs built on innovation, warmth, and proven educational excellence — empowering children and families with confidence and joy.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href={`/${lang}/parents`}
                  className="btn-primary bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  For Parents
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={`/${lang}/educators`}
                  className="btn-outline border-white text-white hover:bg-white/10"
                >
                  For Educators
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - Hero Images */}
            <div className="relative hidden lg:block animate-slideInRight">
              <div className="relative h-[500px]">
                <Image
                  src="/images/7.png"
                  alt="Happy children learning"
                  fill
                  className="object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




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
      <section className="section-white section-spacing">
        <div className="container-wide">
          <div className="mb-16 text-center animate-fadeUp">
            <h2 className="heading-secondary mb-4">Find Your Path</h2>
            <p className="text-body max-w-2xl mx-auto">Choose the program that best fits your needs and join the HiKids family</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Franchise Pathway – businessman */}
            <Link
              href={`/${lang}/franchise`}
              className="group pathway-card bg-primary"
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
              className="group pathway-card bg-accent"
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
              className="group pathway-card bg-secondary"
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
      <section className="section-white section-spacing">
        <div className="container-wide">
          <div className="text-center mb-20 animate-fadeUp">
            <p className="text-sm tracking-widest uppercase font-semibold text-primary/70 mb-4">
              {t.whatIs.subtitle}
            </p>
            <h2 className="heading-secondary mb-8">{t.whatIs.title}</h2>
            <p className="text-body max-w-3xl mx-auto">
              {t.whatIs.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {t.whatIs.levels.map((level, i) => {
              const patternImages = [
                "/images/6.png", // Blue
                "/images/7.png", // Green
                "/images/3.png", // Yellow
                "/images/9.png", // Alternative Yellow/Blue
              ];
              const colors = [
                "bg-blue-50 border-primary/20 hover:bg-primary/5",
                "bg-amber-50 border-accent/20 hover:bg-accent/5",
                "bg-green-50 border-secondary/20 hover:bg-secondary/5",
                "bg-blue-50 border-primary/20 hover:bg-primary/5",
              ];
              return (
                <div
                  key={level.name}
                  className={`feature-card ${colors[i % colors.length]}`}
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
