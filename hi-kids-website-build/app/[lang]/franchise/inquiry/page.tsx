import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { FranchiseInquiryForm } from "./inquiry-form";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Inquiry | HiKids Partnership",
};

export default async function InquiryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.inquiry;

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
                    <span className="bg-hikids-blue/10 text-hikids-blue border-hikids-blue/20 text-xs font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full inline-block border backdrop-blur-sm mb-4">
                        CONTACT
                    </span>
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                      Franchise <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                          style={{
                            WebkitTextStroke: "12px #00AEEF",
                            paintOrder: "stroke fill",
                            filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                          }}>
                        Inquiry
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

      {/* ─── FORM SECTION ─── */}
      <section className="py-4 lg:py-8 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1000px] w-full px-6 lg:px-16 relative z-10">
          <MotionWrapper type="fade" direction="up">
            <div className="bg-slate-50 p-10 lg:p-14 rounded-[3.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500">
              <FranchiseInquiryForm dict={dict} />
            </div>
          </MotionWrapper>
        </div>
      </section>

    </div>
  );
}
