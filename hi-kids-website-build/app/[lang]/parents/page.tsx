import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Layers, Heart, Smartphone, ArrowRight, Sparkles, Zap } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "A Bright Future for Your Child | HiKids Parents",
};

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
      <section className="relative min-h-[35vh] lg:min-h-[50vh] flex items-center overflow-hidden bg-[#FFEB00] py-4 lg:py-8">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/moka-line-art-02.svg')] animate-drift pointer-events-none mix-blend-darken" />
        
        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <MotionWrapper direction="right" delay={0.2}>
                <div className="space-y-6">
                  {/* Tag Removed */}
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.05] tracking-tight text-balance">
                    Bright Future <br className="hidden lg:block" />
                    starts <span className="text-white text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                        style={{
                          WebkitTextStroke: "12px #00AEEF",
                          paintOrder: "stroke fill",
                          filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                        }}>
                      Here
                    </span>
                  </h1>
                  <p className="text-lg lg:text-3xl text-slate-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium opacity-90">
                    {t.subtitle}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                    <Link
                      href={`/${lang}/parents/find-kindergarten`}
                      className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:scale-105 transition-transform"
                    >
                      Find a Center <MapPin className="h-6 w-6 ml-2" />
                    </Link>
                  </div>
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
                Family <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "12px #00AEEF",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                    }}>
                  Portal
                </span>
              </h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.features.map((feature, i) => {
                const Icon = icons[i];
                return (
                  <MotionItem key={feature.title} className="h-full">
                     <Link href={hrefs[i]} className="group block h-full bg-yellow-50/50 p-10 lg:p-12 rounded-[3.5rem] border border-yellow-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative overflow-hidden text-center">
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

      {/* ─── FINAL CTA – YELLOW THEME ─── */}
      <section className="py-4 lg:py-8 bg-[#FFEB00] relative overflow-hidden">
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
                     <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.1] tracking-tight">
                        Start child's <br className="sm:hidden" />
                        <span className="text-white text-6xl lg:text-8xl xl:text-[7.5rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                           style={{
                              WebkitTextStroke: "12px #00AEEF",
                              paintOrder: "stroke fill",
                              filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                           }}>
                           Success
                        </span>
                     </h2>
                     <p className="text-lg lg:text-3xl text-slate-800 font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed text-center lg:text-left text-balance">
                        Your child deserves the best start. Join our progressive community today.
                     </p>
                  </div>
               </MotionWrapper>

               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  <Link
                    href={`/${lang}/parents/find-kindergarten`}
                    className="btn-primary px-12 py-5 text-xl tracking-tight !rounded-3xl hover:shadow-2xl transition-all"
                  >
                    Find a Kindergarten <ArrowRight className="h-6 w-6 ml-2" />
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
