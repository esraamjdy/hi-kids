import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Trophy, Settings, Globe, ArrowRight, Zap } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Why Join HiKids | Franchise Benefits",
};

export default async function WhyJoinPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.whyJoin;

  const icons = [TrendingUp, Trophy, Settings, Globe];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20 pt-16 lg:pt-24">
      
      {/* ─── CREATIVE HEADER (No Hero) ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-visible">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
           <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-slate-100 pb-12 mb-12">
               {/* peeking mascot */}
               <MotionWrapper type="scale" className="relative w-48 h-48 lg:w-64 lg:h-64 -mb-16 lg:-mb-24 z-10">
                  <Image src="/images/Moka-Dance.png" alt="Moka" fill className="object-contain drop-shadow-2xl" />
               </MotionWrapper>
               
               <div className="flex-1 text-center lg:text-left pt-8">
                  <MotionWrapper direction="right">
                    <span className="bg-yellow-100 text-[#FFEB00] border-yellow-200 text-xs font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full inline-block border backdrop-blur-sm mb-4"
                        style={{ WebkitTextStroke: "1px #00AEEF" }}>
                        BENEFITS
                    </span>
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                      Why <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                          style={{
                            WebkitTextStroke: "12px #00AEEF",
                            paintOrder: "stroke fill",
                            filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                          }}>
                        Join
                      </span> HiKids?
                    </h1>
                  </MotionWrapper>
               </div>
           </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          {/* Subtitle fix: Ensure it's not white on white */}
          <p className="text-lg lg:text-3xl text-slate-600 leading-relaxed font-medium mb-16 text-center lg:text-left max-w-4xl">
             {t.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <MotionItem
                  key={feature.title}
                  className="group relative rounded-[3rem] bg-yellow-50 p-10 lg:p-14 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-yellow-100 overflow-hidden"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border border-yellow-200 text-hikids-yellow group-hover:bg-[#FFEB00] group-hover:text-slate-900 transition-all duration-500 group-hover:scale-110">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-fredoka font-black text-slate-900 mb-6 group-hover:text-hikids-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium text-balance">
                    {feature.description}
                  </p>
                </MotionItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
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
                     <span className="bg-white/30 text-slate-900 text-xs font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full inline-block border border-slate-900/10 backdrop-blur-sm">
                        OPPORTUNITY
                     </span>
                     <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.1] tracking-tight">
                        Your <br className="sm:hidden" />
                        <span className="text-white text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                           style={{
                              WebkitTextStroke: "12px #00AEEF",
                              paintOrder: "stroke fill",
                              filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                           }}>
                           Success
                        </span>
                        <br /> Starts Here
                     </h2>
                  </div>
               </MotionWrapper>

               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  <Link
                    href={`/${lang}/franchise/inquiry`}
                    className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:shadow-2xl transition-all"
                  >
                    Apply Now <ArrowRight className="h-6 w-6 ml-2" />
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
