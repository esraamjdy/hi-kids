import type { Metadata } from "next";
import { Award, CheckCircle2, Sparkles, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CertificationForm } from "./certification-form";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get Certified | HiKids Global Excellence",
};

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.certification;

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
                      Earn Your <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                          style={{
                            WebkitTextStroke: "12px #00AEEF",
                            paintOrder: "stroke fill",
                            filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                          }}>
                        Certificate
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

      {/* ─── BENEFITS & FORM ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Benefits */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-fredoka font-black text-slate-900 leading-tight">
                  Why Get <br className="hidden lg:block" /> Certified?
                </h2>
                <p className="text-lg lg:text-2xl text-slate-500 font-medium leading-relaxed">
                  {t.description}
                </p>
              </div>

              <div className="grid gap-4">
                {t.benefits.map((benefit: string) => (
                  <div key={benefit} className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-blue-50 border border-blue-100 hover:bg-white transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-hikids-blue shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                      <GraduationCap size={20} className="fill-blue-50/50" />
                    </div>
                    <span className="text-lg lg:text-xl font-fredoka font-black text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex items-start gap-8 shadow-xl">
                 <ShieldCheck size={48} className="text-hikids-blue shrink-0" />
                 <div className="space-y-2">
                    <h4 className="text-xl lg:text-2xl font-fredoka font-black">Verified Excellence</h4>
                    <p className="text-slate-400 font-medium">Your certification is globally tracked and verifies your expertise in the HiKids pedagogical model.</p>
                 </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-6">
               <MotionWrapper type="scale">
                  <div className="bg-blue-50 p-10 lg:p-14 rounded-[4rem] border border-blue-100 shadow-xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-hikids-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                     <div className="relative z-10 mb-10">
                        {/* Tag Removed */}
                        <h3 className="text-3xl lg:text-5xl font-fredoka font-black text-slate-900 mt-6 leading-tight">{t.cta}</h3>
                     </div>
                     <CertificationForm dict={dict} />
                  </div>
               </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
