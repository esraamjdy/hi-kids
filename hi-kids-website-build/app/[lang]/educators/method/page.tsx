import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, BookOpen, GraduationCap } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Teaching Method | HiKids Global",
};

export default async function MethodPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.method;

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
                    {/* Tag Removed */}
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                      The HiKids <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                          style={{
                            WebkitTextStroke: "12px #00AEEF",
                            paintOrder: "stroke fill",
                            filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                          }}>
                        Method
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

      {/* ─── METHOD OVERVIEW ─── */}
      <section className="py-4 lg:py-8 bg-blue-50/50 relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
           <MotionWrapper type="fade" className="max-w-5xl mx-auto">
              <div className="relative p-12 lg:p-20 rounded-[4rem] bg-white border border-blue-100 shadow-xl italic group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute top-8 left-8 text-8xl text-hikids-blue/10 font-serif group-hover:text-hikids-blue/20 transition-colors">&ldquo;</div>
                <p className="relative z-10 text-2xl lg:text-4xl xl:text-5xl font-fredoka font-black text-slate-700 leading-tight text-center text-pretty">
                  {t.overview}
                </p>
                <div className="absolute bottom-4 right-8 text-8xl text-hikids-blue/10 font-serif rotate-180 group-hover:text-hikids-blue/20 transition-colors">&ldquo;</div>
              </div>
           </MotionWrapper>
        </div>
      </section>

      {/* ─── METHOD SECTIONS ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <MotionContainer className="flex flex-col gap-8 lg:gap-16">
            {t.sections.map((section: { title: string; description: string }, i: number) => (
              <MotionItem
                key={section.title}
                className="group relative rounded-[3.5rem] p-10 lg:p-16 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-blue-50 bg-white hover:bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 mb-6 relative z-10">
                   <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-slate-900 shadow-xl text-2xl font-black text-white group-hover:bg-hikids-blue transition-all duration-500 group-hover:scale-110">
                    {i + 1}
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-fredoka font-black text-slate-800 tracking-tight group-hover:text-hikids-blue transition-colors leading-none">
                    {section.title}
                  </h2>
                </div>

                <p className="text-lg lg:text-2xl text-slate-500 leading-relaxed font-medium relative z-10 text-balance opacity-90 max-w-5xl">
                  {section.description}
                </p>
              </MotionItem>
            ))}
          </MotionContainer>
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
                     {/* Tag Removed */}
                     <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-white leading-[1.1] tracking-tight text-center lg:text-left">
                        Ready to <br className="sm:hidden" />
                        <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7.5rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                           style={{
                              WebkitTextStroke: "12px #00AEEF",
                              paintOrder: "stroke fill",
                              filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                           }}>
                           Innovate?
                        </span>
                     </h2>
                     <p className="text-lg lg:text-3xl text-blue-50 font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed text-center lg:text-left">
                        Start implementing the HiKids method in your classroom today.
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
