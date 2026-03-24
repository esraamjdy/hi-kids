import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Star, Sparkles, Navigation, Zap, ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find a Kindergarten | HiKids Global Network",
};

export default async function FindKindergartenPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.findKindergarten;

  const mapCenter = "24.7136,46.6753"; // Riyadh example
  const zoom = 12;
  const mapSrc = `https://maps.google.com/maps?q=${mapCenter}&z=${zoom}&output=embed`;

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
                    {/* Tag Removed */}
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                      Find a <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                          style={{
                            WebkitTextStroke: "12px #00AEEF",
                            paintOrder: "stroke fill",
                            filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                          }}>
                        Center
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

      {/* ─── MAP & BRANCHES ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
           
           {/* Interactive Map */}
           <MotionWrapper type="fade" className="mb-20">
              <div className="relative rounded-[4rem] overflow-hidden border-8 border-yellow-50 shadow-2xl group hover:border-[#FFEB00] transition-colors duration-500 bg-slate-100 h-[600px]">
                 <iframe
                   title="HiKids Locations Map"
                   src={mapSrc}
                   className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                   style={{ border: 0 }}
                   allowFullScreen
                   loading="lazy"
                 />
                 <div className="absolute top-6 left-6 pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl shadow-xl border border-yellow-100 flex items-center gap-4">
                       <MapPin className="text-hikids-yellow" size={24} />
                       <span className="font-fredoka font-black text-slate-800 uppercase tracking-wider">HiKids Global Network</span>
                    </div>
                 </div>
              </div>
           </MotionWrapper>

           {/* Branch List */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.branches.map((branch: any, i: number) => (
                <MotionItem
                  key={branch.name}
                  className="group relative rounded-[3rem] bg-yellow-50/30 p-10 lg:p-14 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-yellow-100/50 overflow-hidden flex flex-col"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-yellow-100 text-hikids-yellow group-hover:bg-[#FFEB00] group-hover:text-slate-900 transition-all duration-500">
                    <MapPin size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-fredoka font-black text-slate-900 mb-4 group-hover:text-hikids-yellow transition-colors leading-tight">
                    {branch.name}
                  </h3>
                  <p className="text-lg text-slate-500 font-medium mb-10 flex-1">
                    {branch.address}
                  </p>
                  <div className="pt-6 border-t border-yellow-100/50 flex items-center justify-between mt-auto">
                     <a href={`tel:${branch.phone}`} className="flex items-center gap-3 text-lg font-black text-slate-700 hover:text-hikids-yellow transition-colors">
                        <Phone size={18} />
                        {branch.phone}
                     </a>
                  </div>
                </MotionItem>
              ))}
           </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-4 lg:py-8 bg-[#FFEB00] relative overflow-hidden mt-12">
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
                        See it for <br className="sm:hidden" />
                        <span className="text-white text-6xl lg:text-8xl xl:text-[7.5rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                           style={{
                              WebkitTextStroke: "12px #00AEEF",
                              paintOrder: "stroke fill",
                              filter: "drop-shadow(0 8_8px 0 rgba(0,0,0,0.1))"
                           }}>
                           Yourself
                        </span>
                     </h2>
                     <p className="text-lg lg:text-3xl text-slate-800 font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed text-center lg:text-left text-balance">
                        Book a tour today and see how HiKids is revolutionizing early education in your neighborhood.
                     </p>
                  </div>
               </MotionWrapper>

               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  <Link
                    href={`/${lang}/contact`}
                    className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:shadow-2xl transition-all"
                  >
                    Contact Support <ArrowRight className="h-6 w-6 ml-2" />
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
