import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, BookOpen, GraduationCap, CheckCircle2, Target, Users2, ShieldCheck } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
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

  const sectionIcons = [Target, ClipboardList, Users2, ShieldCheck];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-yellow/20 pt-16 lg:pt-24 pb-32 lg:pb-48">
      
      {/* ─── CREATIVE HEADER ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-visible">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
           <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-[#ffde00]/20 pb-12 mb-12 relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffde00]/5 rounded-full blur-[100px] -z-10" />
               <MotionWrapper type="scale" className="relative w-48 h-48 lg:w-64 lg:h-64 -mb-16 lg:-mb-24 z-10">
                  <Image src="/images/Moka-Dance.png" alt="Moka" fill className="object-contain drop-" />
               </MotionWrapper>
               
               <div className="flex-1 text-center lg:text-left pt-8">
                  <MotionWrapper direction="right">
                      <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
                        {t.heroTitle1} <span className="text-[#ffde00] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                            style={{
                              WebkitTextStroke: "12px #00AEEF",
                              paintOrder: "stroke fill",
                              filter: "drop-shadow(0 8px 0 rgba(255, 222, 0, 0.3))"
                            }}>
                          {t.heroTitle2}
                        </span>
                      </h1>
                  </MotionWrapper>
               </div>
           </div>
           
           <p className="text-lg lg:text-3xl text-slate-900 leading-relaxed font-medium mb-16 text-center mx-auto max-w-4xl italic opacity-80 text-pretty">
             {t.subtitle}
           </p>
        </div>
      </section>

      {/* ─── METHOD OVERVIEW: THE CORE QUOTE ─── */}
      <section className="py-8 lg:py-16 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
            <MotionWrapper type="fade" className="max-w-6xl mx-auto">
               <div className="relative p-12 lg:p-24 rounded-[5rem] bg-slate-900 group overflow-hidden">
                 <div className="absolute top-12 left-12 text-[15rem] leading-none text-[#ffde00]/10 font-serif -z-10 group-hover:text-[#ffde00]/20 transition-colors">&ldquo;</div>
                 <p className="relative z-10 text-2xl lg:text-5xl xl:text-6xl font-fredoka font-bold text-white leading-[1.15] text-center text-pretty">
                   {t.overview}
                 </p>
                 <div className="absolute bottom-4 right-12 text-[15rem] leading-none text-[#ffde00]/10 font-serif rotate-180 -z-10 group-hover:text-[#ffde00]/20 transition-colors">&ldquo;</div>
               </div>
            </MotionWrapper>
        </div>
      </section>

      {/* ─── SECTION 01: HOW TO IMPLEMENT ─── */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             
             {/* Text side */}
             <MotionWrapper direction="left">
               <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffde00] text-3xl font-black text-slate-900 mb-8  [#ffde00]/20">01</div>
               <h2 className="text-5xl lg:text-7xl font-fredoka font-bold text-slate-900 leading-[1.1] text-balance mb-8">
                 {t.sections[0].title}
               </h2>
               <p className="text-xl lg:text-3xl text-slate-600 font-medium leading-relaxed opacity-90 text-pretty">
                 {t.sections[0].description}
               </p>
             </MotionWrapper>

             {/* Implementation Steps Timeline */}
             <div className="relative">
               {/* Vertical line connector */}
               <div className="absolute left-[2.5rem] top-10 bottom-10 w-1 bg-slate-100 rounded-full hidden sm:block" />
               
               <div className="space-y-12 relative z-10">
                 {t.sections[0].content.map((item: { subtitle: string; text: string }, idx: number) => (
                   <MotionWrapper key={idx} direction="right" className="relative sm:pl-[6.5rem]">
                     <div className="absolute left-4 top-0 w-12 h-12 rounded-full border-4 border-white bg-slate-900 text-[#ffde00] items-center justify-center font-bold text-lg  hidden sm:flex">
                       {idx + 1}
                     </div>
                     <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#ffde00] hover:-translate-y-1 transition-all">
                       <h3 className="text-2xl font-fredoka font-bold text-slate-900 mb-3">{item.subtitle}</h3>
                       <p className="text-lg text-slate-600 font-medium">{item.text}</p>
                     </div>
                   </MotionWrapper>
                 ))}
               </div>
             </div>

           </div>
        </div>
      </section>

      {/* ─── SECTION 02: FRAMEWORK EXPLANATION ─── */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#ffde00]/10 rounded-full blur-[140px] -z-10" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full z-10 relative">
          
           <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-28">
             <MotionWrapper type="scale">
               <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-3xl font-black text-[#ffde00] mb-8 border border-white/10">02</div>
               <h2 className="text-5xl lg:text-7xl font-fredoka font-bold leading-[1.1] text-balance mb-8">
                 {t.sections[1].title}
               </h2>
               <p className="text-xl lg:text-3xl text-slate-300 font-medium leading-relaxed text-pretty">
                 {t.sections[1].description}
               </p>
             </MotionWrapper>
           </div>

           {/* Age Group Glowing Cards */}
           <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
             {t.sections[1].content.map((item: { subtitle: string; text: string }, idx: number) => (
               <MotionItem key={idx} className="group relative rounded-[3rem] bg-slate-800/50 p-10 lg:p-14 border border-white/5 hover:border-[#ffde00]/50 transition-all hover:-translate-y-4 overflow-hidden  ">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffde00]/0 rounded-full blur-3xl group-hover:bg-[#ffde00]/10 transition-all duration-700" />
                 <h3 className="text-3xl font-fredoka font-bold text-white mb-6 group-hover:text-[#ffde00] transition-colors relative z-10">{item.subtitle}</h3>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors relative z-10">{item.text}</p>
                 <div className="mt-12 h-2 w-12 bg-white/20 rounded-full group-hover:w-full group-hover:bg-[#ffde00] transition-all duration-700 ease-out relative z-10" />
               </MotionItem>
             ))}
           </div>

        </div>
      </section>

      {/* ─── SECTION 03: CLASSROOM STRUCTURE ─── */}
      <section className="py-20 lg:py-32 bg-[#ffde00] relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
           <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
             
             {/* Massive Yellow Typographic Side */}
             <div className="lg:col-span-5">
               <MotionWrapper direction="left">
                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-3xl font-black text-white mb-8  -900/20">03</div>
                 <h2 className="text-5xl lg:text-7xl font-fredoka font-bold text-slate-900 leading-[1.0] text-balance mb-8">
                   {t.sections[2].title}
                 </h2>
                 <p className="text-xl lg:text-3xl text-slate-800 font-bold leading-relaxed opacity-90 text-pretty">
                   {t.sections[2].description}
                 </p>
               </MotionWrapper>
             </div>

             {/* Staggered Blueprint Cards */}
             <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-8">
               {t.sections[2].content.map((item: { subtitle: string; text: string }, idx: number) => (
                 <MotionItem 
                   key={idx} 
                   className={`bg-slate-900 rounded-[3rem] p-8 lg:p-12 text-white hover:scale-[1.03] transition-transform duration-500 ${idx === 2 ? 'sm:col-span-2' : ''}  -900/20 border-2 border-slate-800 hover:border-white/20`}
                 >
                   <div className="text-[#ffde00] mb-8 font-black text-sm uppercase tracking-widest border border-[#ffde00]/20 inline-block px-5 py-2 rounded-full bg-[#ffde00]/5">{t.phaseTag} 0{idx + 1}</div>
                   <h3 className="text-3xl lg:text-4xl font-fredoka font-bold mb-6">{item.subtitle}</h3>
                   <p className="text-lg lg:text-xl text-slate-300 font-medium leading-relaxed">{item.text}</p>
                 </MotionItem>
               ))}
             </div>

           </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full text-center lg:text-left">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-10">
                 <MotionWrapper direction="right">
                    <h2 className="text-5xl lg:text-8xl xl:text-[8.5rem] font-fredoka font-bold text-slate-900 leading-[0.95] tracking-tight">
                      {t.ctaTitle1} <br />
                      <span className="text-[#ffde00] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                        style={{
                          WebkitTextStroke: "14px #00AEEF",
                          paintOrder: "stroke fill",
                          filter: "drop-shadow(0 12px 0 rgba(0, 174, 239, 0.2))"
                        }}>
                        {t.ctaTitle2}
                      </span>
                    </h2>
                    <p className="text-xl lg:text-4xl text-slate-800 font-medium max-w-2xl opacity-95 leading-relaxed text-pretty mt-6">
                      {t.ctaSubtitle}
                    </p>
                 </MotionWrapper>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                 <Link
                    href={`/${lang}/educators/certification`}
                    className="group relative bg-slate-900 text-white px-16 py-8 rounded-[3rem] text-2xl font-black transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-4 hover:bg-[#ffde00] hover:text-slate-900 "
                  >
                    {t.ctaBtn} <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
                  </Link>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}

// Fixed import for ClipboardList
import { ClipboardList } from "lucide-react";
