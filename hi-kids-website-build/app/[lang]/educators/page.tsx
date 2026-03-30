import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, BookOpen, Award, ArrowRight, Sparkles, GraduationCap, Zap, Mic } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CtaCard } from "@/components/cta-card";
import { WaveDivider } from "@/components/wave-divider";
import { SectionHeader } from "@/components/section-header";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Empowering Educators | HiKids Global",
};

export default async function EducatorsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.landing;

  const icons = [FileText, Mic, BookOpen, Award];
  const hrefs = [
    `/${lang}/educators/materials`,
    `/${lang}/educators/podcast`,
    `/${lang}/educators/method`,
    `/${lang}/educators/certification`,
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-yellow/20">

      {/* ─── PROFESSIONAL HERO ─── */}
      <section className="relative min-h-[50vh] lg:min-h-[65vh] flex items-center overflow-hidden bg-[#ffde00] py-12 lg:py-24">
        {/* Decorative Mesh Background */}
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: `radial-gradient(#00AEEF 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[120px] animate-pulse-slow" />

        <div className="relative mx-auto max-w-[1700px] px-6 lg:px-16 xl:px-24 z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
              <MotionWrapper direction="right" delay={0.2}>
                <div className="space-y-8">
                  <h1 className="text-5xl lg:text-8xl xl:text-[8.5rem] font-fredoka font-bold text-slate-900 leading-[0.95] tracking-tight text-balance">
                    {t.heroTitle1} <br className="hidden lg:block" />
                    <span className="text-white ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "14px #00AEEF",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(0 12px 0 rgba(0, 174, 239, 0.2))"
                      }}>
                      {t.heroTitle2}
                    </span>
                  </h1>
                  <p className="text-lg lg:text-3xl text-slate-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium opacity-95 text-pretty">
                    {t.heroSubtitle}
                  </p>


                </div>
              </MotionWrapper>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative min-h-[400px]">
              <div className="absolute -inset-20 bg-white/20 rounded-full blur-[120px] animate-sway -z-10" />
              <MotionWrapper type="scale" delay={0.4} className="relative lg:absolute lg:top-[-50%] lg:-translate-y-1/2 lg:right-[-20%] w-[450px] h-[450px] lg:w-[800px] lg:h-[800px] pointer-events-none mt-16 lg:mt-0">
                <Image
                  src="/images/grad.png"
                  alt="Educator Success"
                  fill
                  className="object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.2)] lg:scale-125 transition-transform duration-700"
                />
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* Hero Divider */}
      <div className="w-full relative -mt-[100px] lg:-mt-[100px] z-20">
        <WaveDivider color="white" />
      </div>

      {/* ─── PATHWAYS ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="text-center mb-16 relative">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-800 leading-[1.05] tracking-tight">
              {t.pathwaysTitle1} <span className="text-white text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                style={{
                  WebkitTextStroke: "12px #00AEEF",
                  paintOrder: "stroke fill"
                }}>
                {t.pathwaysTitle2}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.map((feature: any, i: number) => {
              const Icon = icons[i];
              return (
                <MotionItem key={feature.title} className="h-full">
                  <Link href={hrefs[i]} className="group block h-full bg-white p-10 lg:p-12 rounded-[3.5rem] border border-slate-100 hover:-translate-y-4 transition-all duration-500 relative overflow-hidden active:scale-95">
                    <div className="w-16 h-16 rounded-2xl bg-[#ffde00]/10 flex items-center justify-center text-[#ffde00] mb-8 group-hover:bg-[#ffde00] group-hover:text-slate-900 transition-all duration-500 group-hover:scale-110">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 font-fredoka leading-tight group-hover:text-[#ffde00] transition-colors">{feature.title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center text-[#ffde00] font-bold text-lg group-hover:translate-x-2 transition-transform">
                      {feature.cta} <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </Link>
                </MotionItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-4 lg:py-8 bg-[#ffde00] relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Mascot */}
            <div className="lg:col-span-6 flex justify-center lg:justify-center order-2 lg:order-1 mt-12 lg:mt-0">
              <MotionWrapper type="scale" className="relative w-[450px] h-[450px] lg:w-[1000px] lg:h-[1000px] lg:-ml-32">
                <Image src="/images/Moka-Plays.png" alt="Moka Plays" fill className="object-contain drop-shadow-2xl" />
              </MotionWrapper>
            </div>

            {/* Right Column: Text */}
            <div className="lg:col-span-6 space-y-10 order-1 lg:order-2">
              <MotionWrapper direction="left">
                <div className="space-y-6 text-center lg:text-left">
                  {/* Tag Removed */}
                  <h2 className="text-5xl lg:text-7xl xl:text-[6.5rem] font-fredoka font-bold text-slate-900 leading-[1.1] tracking-tight">
                    {t.ctaTitle1} <br className="sm:hidden" />
                    <span className="text-white text-6xl lg:text-8xl xl:text-[7.5rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #00AEEF",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                      }}>
                      {t.ctaTitle2}
                    </span>
                  </h2>
                  <p className="text-lg lg:text-3xl text-slate-800 font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed text-center lg:text-left">
                    {t.ctaSubtitle}
                  </p>
                </div>
              </MotionWrapper>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  href={`/${lang}/educators/certification`}
                  className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:shadow-2xl transition-all"
                >
                  {t.ctaBtn} <ArrowRight className="h-6 w-6 ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
