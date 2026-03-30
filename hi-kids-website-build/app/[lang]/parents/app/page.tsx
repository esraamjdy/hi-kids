import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
   Smartphone,
   CheckCircle2,
   ArrowRight,
   Star,
   Sparkles,
   Download,
   ShieldCheck,
   Zap,
   MapPin,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
   const { lang } = await params;
   const dict = await getDictionary(lang as any);
   return {
      title: `${dict.parents.app.metaTitle} | ${dict.common.brand}`,
   };
}

export default async function AppPage({
   params,
}: {
   params: Promise<{ lang: string }>;
}) {
   const { lang } = await params;
   if (!isValidLocale(lang)) notFound();
   const dict = await getDictionary(lang);
   const t = dict.parents.app;

   // SVG Icons for App Store and Google Play
   const AppStoreIcon = () => (
      <svg viewBox="0 0 135 40" className="h-8 lg:h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 7C0 3.13401 3.13401 0 7 0H128C131.866 0 135 3.13401 135 7V33C135 36.866 131.866 40 128 40H7C3.13401 40 0 36.866 0 33V7Z" fill="black" />
         <path d="M22.064 26.697C22.064 24.329 24.162 23.166 24.288 23.097C23.238 21.656 21.611 21.465 21 21.442C19.544 21.3 18.067 22.315 17.32 22.315C16.549 22.315 15.361 21.465 14.153 21.492C12.553 21.52 11.026 22.463 10.211 23.868C8.514 26.759 9.8 30.957 11.458 33.325C12.28 34.484 13.243 35.766 14.508 35.719C15.717 35.666 16.183 34.965 17.65 34.965C19.091 34.965 19.533 35.719 20.811 35.688C22.112 35.666 22.928 34.508 23.725 33.348C24.664 32.015 25.048 30.725 25.071 30.655C25.041 30.641 22.365 29.663 22.365 26.74C22.365 24.28 24.316 23.074 24.453 22.996C23.231 21.285 21.314 21.261 20.65 21.238L20.635 21.235C19.179 21.093 17.702 22.108 16.955 22.108C16.184 22.108 15.213 21.325 14.005 21.352C12.405 21.38 10.878 22.323 10.063 23.728C8.366 26.619 9.652 30.817 11.31 33.185C12.132 34.344 13.095 35.626 14.36 35.579C15.569 35.526 16.035 34.825 17.502 34.825C18.943 34.825 19.385 35.579 20.663 35.548C21.964 35.526 22.78 34.368 23.577 33.208C24.516 31.875 24.9 30.585 24.923 30.515" fill="white" />
         <path d="M19.349 19.034C19.986 18.258 20.407 17.18 20.292 16.103C19.397 16.14 18.286 16.702 17.653 17.44C17.076 18.1 16.586 19.18 16.732 20.228C17.728 20.306 18.739 19.78 19.349 19.034Z" fill="white" />
         <text x="35" y="18" fill="white" style={{ fontSize: '7px', fontWeight: 'bold' }}>Download on the</text>
         <text x="35" y="32" fill="white" style={{ fontSize: '14px', fontWeight: '600' }}>App Store</text>
      </svg>
   );

   const GooglePlayIcon = () => (
      <svg viewBox="0 0 135 40" className="h-8 lg:h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 7C0 3.13401 3.13401 0 7 0H128C131.866 0 135 3.13401 135 7V33C135 36.866 131.866 40 128 40H7C3.13401 40 0 36.866 0 33V7Z" fill="black" />
         <path d="M10.748 35.097C10.51 34.853 10.373 34.5 10.373 34.032V5.96803C10.373 5.51103 10.51 5.14703 10.748 4.90303L10.817 4.83403L26.65 20.656V20.781L10.817 36.604L10.748 35.097Z" fill="#2196F3" />
         <path d="M31.91 25.916L26.65 20.655V20.53L31.911 15.269L31.996 15.317L38.204 18.847C39.974 19.851 39.974 21.487 38.204 22.492L31.996 26.021L31.91 25.916Z" fill="#F44336" />
         <path d="M32.079 25.748L26.65 20.32L10.748 36.222C11.332 36.836 12.28 36.91 13.344 36.3L32.079 25.748Z" fill="#4CAF50" />
         <path d="M32.079 15.111L13.344 4.55903C12.28 3.94903 11.332 4.02303 10.748 4.63703L26.65 20.539L32.079 15.111Z" fill="#FFC107" />
         <text x="45" y="18" fill="white" style={{ fontSize: '7px', fontWeight: 'bold' }}>GET IT ON</text>
         <text x="45" y="32" fill="white" style={{ fontSize: '14px', fontWeight: '600' }}>Google Play</text>
      </svg>
   );

   return (
      <div className="bg-white overflow-hidden selection:bg-hikids-yellow/20 pt-8 lg:pt-12">

         {/* ─── CREATIVE HEADER (No Hero) ─── */}
         <section className="pt-12 pb-8 lg:pt-16 lg:pb-12 bg-white relative overflow-visible">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
               <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-slate-100 pb-12 mb-12">
                  {/* peeking mascot */}
                  <MotionWrapper type="scale" className="relative w-48 h-48 lg:w-64 lg:h-64 -mb-16 lg:-mb-24 z-10 mx-auto lg:mx-0">
                     <Image src="/images/Moka-Dance.png" alt="Moka" fill className="object-contain drop-shadow-2xl" />
                  </MotionWrapper>

                  <div className="flex-1 text-center lg:text-left pt-8">
                     <MotionWrapper direction="right">
                        <h1 className="text-5xl lg:text-8xl xl:text-9xl font-fredoka font-bold text-slate-900 leading-[0.9] tracking-tight text-balance mb-6 uppercase">
                           {t.title.split(' ').slice(0, -1).join(' ')} <span className="text-white text-6xl lg:text-[7rem] xl:text-[8.5rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                              style={{
                                 WebkitTextStroke: "12px #00AEEF",
                                 paintOrder: "stroke fill",
                                 filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.05))"
                              }}>
                              {t.title.split(' ').slice(-1).join(' ')}
                           </span>
                        </h1>
                        <p className="text-lg lg:text-3xl text-slate-700 leading-relaxed font-medium max-w-4xl mx-auto lg:mx-0">
                           {t.subtitle}
                        </p>
                     </MotionWrapper>
                  </div>
               </div>
            </div>
         </section>

         {/* ─── APP EXPERIENCE ─── */}
         <section className="py-20 lg:py-32 bg-[#faf8c3] relative overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
               <div className="grid lg:grid-cols-2 gap-20 items-center">

                  {/* Left Column: Text & Features */}
                  <div className="space-y-12">
                     <div className="space-y-6">
                        <h2 className="text-4xl lg:text-6xl font-fredoka font-bold text-slate-900 leading-tight">
                           {t.stayConnectedTitle1} <br className="hidden lg:block" /> {t.stayConnectedTitle2}
                        </h2>
                        <p className="text-lg lg:text-2xl text-slate-600 font-medium leading-relaxed">
                           {t.description}
                        </p>
                     </div>

                     <div className="grid sm:grid-cols-1 gap-4">
                        {t.features.map((feature: string) => (
                           <MotionItem key={feature} className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-white border border-yellow-100 group hover:shadow-xl transition-all">
                              <div className="h-10 w-10 flex items-center justify-center bg-yellow-50 border border-yellow-100 rounded-xl text-hikids-yellow group-hover:bg-[#FFEB00] group-hover:text-slate-900 transition-colors">
                                 <CheckCircle2 size={24} strokeWidth={3} />
                              </div>
                              <span className="text-lg lg:text-xl font-fredoka font-bold text-slate-800 tracking-tight">{feature}</span>
                           </MotionItem>
                        ))}
                     </div>
                  </div>

                  {/* Right Column: Interactive Phone Preview */}
                  <div className="flex justify-center relative scale-90 lg:scale-110 xl:scale-125">
                     <MotionWrapper type="scale">
                        <div className="relative mx-auto h-[650px] w-[320px] rounded-[4rem] border-[14px] border-slate-900 bg-slate-900 p-3 shadow-3xl overflow-hidden group">
                           {/* Phone Notch */}
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl z-30" />

                           {/* Screen Content */}
                           <div className="h-full w-full rounded-[2.5rem] overflow-hidden bg-white flex flex-col items-center justify-center p-8 bg-[radial-gradient(circle_at_top_right,var(--hikids-yellow)_0%,transparent_100%)]">
                              <div className="w-48 h-48 flex items-center justify-center mb-12 animate-float">
                                 <Image src="/images/HiKids-19.svg" alt="logo" width={220} height={220} className="object-contain" />
                              </div>


                              <div className="w-full space-y-4">
                                 <div className="h-12 w-full bg-slate-50 border border-slate-100 rounded-2xl flex items-center p-4 gap-3 animate-pulse">
                                    <div className="w-4 h-4 bg-yellow-100 rounded-full" />
                                    <div className="h-2 w-24 bg-slate-200 rounded-full" />
                                 </div>
                                 <div className="h-12 w-full bg-slate-50 border border-slate-100 rounded-2xl flex items-center p-4 gap-3">
                                    <div className="w-4 h-4 bg-blue-100 rounded-full" />
                                    <div className="h-2 w-32 bg-slate-200 rounded-full" />
                                 </div>
                              </div>
                           </div>
                        </div>

                     </MotionWrapper>
                  </div>

               </div>
            </div>
         </section>

         {/* ─── DOWNLOAD ─── */}
         <section className="py-20 lg:py-48 bg-white relative overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full text-center">
               <MotionWrapper type="fade">
                  <h2 className="text-4xl lg:text-8xl font-fredoka font-bold text-slate-900 mb-8 leading-tight text-balance">{t.downloadTitle}</h2>
                  <p className="text-lg lg:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-16 opacity-80 leading-relaxed">
                     {t.downloadSubtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                     <a href="#" className="hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <AppStoreIcon />
                     </a>
                     <a href="#" className="hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <GooglePlayIcon />
                     </a>
                  </div>
               </MotionWrapper>
            </div>
         </section>

      </div>
   );
}
