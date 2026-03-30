import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Layers, Heart, Smartphone, ArrowRight, Sparkles, Zap } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: `${dict.parents.landing.title} | HiKids Parents`,
  };
}

export default async function ParentsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.landing;

  const icons = [MapPin, Layers, Heart, Smartphone];
  const hrefs = [
    `/${lang}/parents/find-kindergarten`,
    `/${lang}/parents/learning-levels`,
    `/${lang}/parents/why-choose`,
    `/${lang}/parents/app`,
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[45vh] lg:min-h-[60vh] flex items-center overflow-visible bg-[#faf8c3] py-12 lg:py-20">
        <div className="absolute inset-x-0 inset-y-0 opacity-[0.4] animate-drift pointer-events-none mix-blend-darken translate-x-[25%] lg:translate-x-[35%] flex justify-end items-end">
          <div className="relative w-full max-w-[18rem] sm:max-w-[22rem] md:md:max-w-[26rem] lg:max-w-[32rem] xl:max-w-[36rem] aspect-square">
            <Image
              src="/images/moka-line-art-02.svg"
              alt="Moka Line Art"
              fill
              className="object-contain scale-[1.0] lg:scale-[1.1] xl:scale-[1.2] origin-bottom-right"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full lg:-translate-x-12 xl:-translate-x-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-10 text-center lg:text-left order-2 lg:order-1 lg:translate-x-12 xl:translate-x-20">
              <MotionWrapper direction="right">
                <div className="space-y-8">
                  <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-[9rem] font-fredoka font-bold text-slate-900 leading-[0.9] tracking-tight text-balance">
                    {t.heroTitle1} <br className="hidden lg:block" />
                    <span className="text-hikids-yellow inline-block transition-transform hover:scale-105 hover:-rotate-1 duration-300 ml-4 py-2"
                      style={{
                        WebkitTextStroke: "12px #0f172a",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(6px 10px 0 #0f172a)"
                      }}>
                      {t.heroTitle2}
                    </span>
                  </h1>
                  <p className="text-xl lg:text-3xl text-slate-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium opacity-95">
                    {t.subtitle}
                  </p>
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                    <Link
                      href={`/${lang}/parents/find-kindergarten`}
                      className="group relative bg-slate-900 text-white px-16 py-7 rounded-[3rem] text-2xl font-black transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-4 hover:bg-hikids-yellow hover:text-slate-900 shadow-2xl"
                    >
                      {t.findCenter} <MapPin className="h-8 w-8 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </MotionWrapper>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="lg:translate-x-32 xl:translate-x-56 w-full flex justify-center lg:justify-end">
                <MotionWrapper type="fade" className="relative w-full max-w-[16rem] sm:max-w-sm md:md:max-w-md lg:max-w-[32rem] xl:max-w-[40rem] aspect-square z-10">
                  <Image
                    src="/images/Moka-Dance.png"
                    alt="Moka Dancing"
                    fill
                    className="object-contain drop-shadow-2xl scale-[1.2] lg:scale-[1.3] xl:scale-[1.4] origin-center lg:origin-right"
                  />
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
      <section className="py-12 lg:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[8rem] font-fredoka font-bold text-slate-800 leading-[0.9] tracking-tight">
              {t.portalTitle1} <span className="text-hikids-yellow inline-block transition-transform hover:scale-105 hover:-rotate-1 duration-300 ml-4 py-2"
                style={{
                  WebkitTextStroke: "12px #0f172a",
                  paintOrder: "stroke fill",
                  filter: "drop-shadow(6px 10px 0 #0f172a)"
                }}>
                {t.portalTitle2}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <MotionItem key={feature.title} className="h-full">
                  <Link href={hrefs[i]} className="group block h-full bg-[#faf8c3] p-8 sm:p-10 lg:p-12 rounded-[3.5rem] border border-yellow-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-hikids-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-hikids-yellow/10 transition-colors" />
                    <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-hikids-yellow mb-8 shadow-inner group-hover:scale-110 transition-transform mx-auto">
                      <Icon size={40} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 font-fredoka leading-tight">{feature.title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center text-hikids-yellow font-bold text-lg group-hover:translate-x-2 transition-transform">
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
      <section className="pt-12 lg:pt-24 pb-24 lg:pb-48 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full">
          <div className="bg-[#faf8c3] rounded-[4rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Column: Text */}
            <div className="relative w-full lg:w-3/5 space-y-10 order-2 lg:order-1 text-center lg:text-left">
              <MotionWrapper direction="right">
                <div className="space-y-8">
                  <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-[9rem] font-fredoka font-bold text-slate-900 leading-[0.9] tracking-tight text-balance">
                    {t.ctaTitle1} <br className="hidden lg:block" />
                    <span className="text-white inline-block transition-transform hover:scale-105 hover:-rotate-1 duration-300 ml-4 py-2"
                      style={{
                        WebkitTextStroke: "12px #0f172a",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(6px 10px 0 #0f172a)"
                      }}>
                      {t.ctaTitle2}
                    </span>
                  </h2>
                  <p className="text-xl lg:text-3xl text-slate-800 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty opacity-90">
                    {t.ctaSubtitle}
                  </p>
                </div>
              </MotionWrapper>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  href={`/${lang}/parents/find-kindergarten`}
                  className="group relative bg-slate-900 text-white px-16 py-7 rounded-[3rem] text-2xl font-black transition-all hover:scale-105 shadow-2xl flex items-center gap-4 hover:bg-hikids-yellow hover:text-slate-900"
                >
                  {t.findCenter} <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            {/* Right Column: Mascot */}
            <div className="relative w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2 lg:left-40">
              <MotionWrapper type="fade" className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[800px] lg:h-[800px] lg:-my-32">
                <Image src="/images/holding-ball.png" alt="Holding Ball" fill className="object-contain drop-shadow-2xl scale-125 lg:scale-[1.6] origin-center lg:origin-right" />
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
