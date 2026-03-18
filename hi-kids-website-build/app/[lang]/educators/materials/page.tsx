import type { Metadata } from "next";
import { FileText, Download, Sparkles, BookOpen, Clock, Tag, Zap, ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Free Educational Materials | HiKids Educator Resources",
};

export default async function MaterialsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.materials;

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20 pt-16 lg:pt-24">
      
      {/* ─── CREATIVE HEADER (No Hero) ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-visible">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
           <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-blue-50 pb-12 mb-12">
               {/* peeking mascot */}
               <MotionWrapper type="scale" className="relative w-48 h-48 lg:w-64 lg:h-64 -mb-16 lg:-mb-24 z-10">
                  <Image src="/images/Moka-Dance.png" alt="Moka" fill className="object-contain drop-shadow-2xl" />
               </MotionWrapper>
               
               <div className="flex-1 text-center lg:text-left pt-8">
                  <MotionWrapper direction="right">
                    <span className="bg-blue-50 text-hikids-blue border-blue-100 text-xs font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full inline-block border backdrop-blur-sm mb-4">
                        RESOURCE HUB
                    </span>
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                      Free <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                          style={{
                            WebkitTextStroke: "12px #00AEEF",
                            paintOrder: "stroke fill",
                            filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                          }}>
                        Materials
                      </span>
                    </h1>
                  </MotionWrapper>
               </div>
           </div>
           
           <p className="text-lg lg:text-3xl text-slate-600 leading-relaxed font-medium mb-16 text-center mx-auto max-w-4xl">
             {t.subtitle}
           </p>
        </div>
      </section>

      {/* ─── MATERIALS GRID ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.items.map((item: { title: string; type: string; description: string }, i: number) => (
              <MotionItem
                key={item.title}
                className="group relative rounded-[3rem] bg-blue-50/50 p-10 lg:p-14 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-blue-100 overflow-hidden flex flex-col"
              >
                <div className="mb-8 flex items-center justify-between relative z-10">
                   <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-hikids-blue shadow-sm border border-blue-100 group-hover:bg-hikids-blue group-hover:text-white transition-all duration-500 group-hover:scale-110">
                      <FileText size={28} />
                   </div>
                   <div className="px-4 py-2 rounded-full bg-white text-[10px] font-black uppercase tracking-widest text-slate-500 border border-blue-100">
                      {item.type}
                   </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-fredoka font-black text-slate-900 mb-4 group-hover:text-hikids-blue transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium mb-10 flex-1">
                  {item.description}
                </p>

                <div className="pt-6 border-t border-blue-100/50 flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                      <Clock size={14} className="text-hikids-blue" />
                      PDF • 2.4 MB
                   </div>
                   <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-hikids-blue transition-all hover:scale-105">
                      <Download size={16} />
                      Download
                   </button>
                </div>
              </MotionItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
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
                        PREMIUM LIBRARY
                     </span>
                     <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-white leading-[1.1] tracking-tight">
                        Need More <br className="sm:hidden" />
                        <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                           style={{
                              WebkitTextStroke: "12px #00AEEF",
                              paintOrder: "stroke fill",
                              filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                           }}>
                           Support?
                        </span>
                     </h2>
                     <p className="text-lg lg:text-3xl text-blue-50 font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed text-center lg:text-left">
                        Get unlimited access to our elite digital library by becoming a HiKids Certified Educator.
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
