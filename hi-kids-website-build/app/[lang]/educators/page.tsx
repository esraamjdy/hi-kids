import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, BookOpen, Award, ArrowRight, Sparkles, GraduationCap, Zap } from "lucide-react";
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

  const icons = [FileText, BookOpen, Award];
  const hrefs = [
    `/${lang}/educators/materials`,
    `/${lang}/educators/method`,
    `/${lang}/educators/certification`,
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-yellow/20">
      
      {/* ─── HERO ─── */}
      <section className="relative min-h-[35vh] lg:min-h-[50vh] flex items-center overflow-hidden bg-hikids-blue py-4 lg:py-8">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none mix-blend-overlay" />
        
        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <MotionWrapper direction="right" delay={0.2}>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/20 px-6 py-2 text-xs font-black text-white uppercase tracking-[0.2em] backdrop-blur-sm mx-auto lg:mx-0">
                    <GraduationCap className="h-4 w-4" />
                    Empowering the Next Generation
                  </div>
                  <h1 className="text-5xl lg:text-7xl xl:text-[7.5rem] font-fredoka font-black text-white leading-[1.05] tracking-tight text-balance">
                    Join Our <br className="hidden lg:block" />
                    World of <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                        style={{
                          WebkitTextStroke: "12px #00AEEF",
                          paintOrder: "stroke fill",
                          filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                        }}>
                      Educators
                    </span>
                  </h1>
                  <p className="text-lg lg:text-3xl text-blue-50 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium opacity-90">
                    {t.subtitle}
                  </p>

                </div>
              </MotionWrapper>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <MotionWrapper type="scale" delay={0.4} className="relative w-[350px] h-[350px] lg:w-[600px] lg:h-[600px]">
                <Image
                  src="/images/Moka-Dance.png"
                  alt="Moka"
                  fill
                  className="object-contain drop-shadow-2xl"
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
           <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.05] tracking-tight">
                Your <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "12px #00AEEF",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                    }}>
                  Journey
                </span>
              </h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {t.features.map((feature, i) => {
                const Icon = icons[i];
                return (
                  <MotionItem key={feature.title} className="h-full">
                     <Link href={hrefs[i]} className="group block h-full bg-blue-50/50 p-10 lg:p-12 rounded-[3.5rem] border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-hikids-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-hikids-blue/10 transition-colors" />
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-hikids-blue mb-8 shadow-inner group-hover:scale-110 transition-transform">
                           <Icon size={32} />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 font-fredoka leading-tight">{feature.title}</h3>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                           {feature.description}
                        </p>
                        <div className="inline-flex items-center text-hikids-blue font-bold text-lg group-hover:translate-x-2 transition-transform">
                           {feature.cta} <ArrowRight className="ml-2 h-5 w-5" />
                        </div>
                     </Link>
                  </MotionItem>
                );
              })}
           </div>
        </div>
      </section>

      {/* ─── FINAL CTA – BLUE THEME ─── */}
      <section className="py-4 lg:py-8 bg-hikids-blue relative overflow-hidden">
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
                     <span className="bg-white/20 text-white text-xs font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full inline-block border border-white/10 backdrop-blur-sm">
                        PROFESSIONAL ELITE
                     </span>
                     <h2 className="text-5xl lg:text-7xl xl:text-[6.5rem] font-fredoka font-black text-white leading-[1.1] tracking-tight">
                        Elevate Your <br className="sm:hidden" />
                        <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7.5rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                           style={{
                              WebkitTextStroke: "12px #00AEEF",
                              paintOrder: "stroke fill",
                              filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                           }}>
                           Practice
                        </span>
                     </h2>
                     <p className="text-lg lg:text-3xl text-blue-50 font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed text-center lg:text-left">
                        Learn the world-class HiKids method and earn your international certification.
                     </p>
                  </div>
               </MotionWrapper>

               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  <Link
                    href={`/${lang}/educators/certification`}
                    className="btn-primary px-12 py-5 text-xl tracking-tight !rounded-3xl hover:shadow-2xl transition-all"
                  >
                    Get Certified <ArrowRight className="h-6 w-6 ml-2" />
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
