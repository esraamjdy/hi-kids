import type { Metadata } from "next";
import Image from "next/image";
import { FileDown, FileText, Zap } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Download Franchise Brochure | HiKids",
};

export default async function BrochurePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.brochure;

  return (
    <div className="bg-white overflow-hidden selection:bg-accent/20 pt-16 lg:pt-24">
      
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
                    <span className="bg-yellow-50 text-hikids-yellow border-yellow-100 text-xs font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full inline-block border backdrop-blur-sm mb-4">
                        RESOURCES
                    </span>
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                      Franchise <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                          style={{
                            WebkitTextStroke: "12px #00AEEF",
                            paintOrder: "stroke fill",
                            filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                          }}>
                        Brochure
                      </span>
                    </h1>
                  </MotionWrapper>
               </div>
           </div>
           
           <p className="text-lg lg:text-3xl text-slate-600 leading-relaxed font-medium mb-16 text-center lg:text-left max-w-4xl">
             {t.subtitle}
           </p>
        </div>
      </section>

      {/* ─── DOWNLOAD SECTION ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden flex flex-col justify-center min-h-[40vh]">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 w-full text-center">
          <MotionWrapper type="scale">
            <div className="bg-slate-50 p-12 lg:p-16 rounded-[4rem] border border-slate-100 shadow-xl group hover:shadow-2xl transition-all duration-500">
               <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-hikids-yellow mb-8 shadow-sm mx-auto group-hover:scale-110 transition-transform">
                  <FileText size={40} />
               </div>
               <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium mb-12">
                  {t.description}
               </p>
               <a
                  href="/downloads/hikids-franchise-brochure.pdf"
                  download
                  className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:shadow-2xl transition-all inline-flex items-center gap-4"
               >
                  <FileDown className="h-6 w-6" />
                  {t.cta}
               </a>
               <p className="mt-8 text-slate-400 font-medium italic text-sm">{t.note}</p>
            </div>
          </MotionWrapper>
        </div>
      </section>

    </div>
  );
}
