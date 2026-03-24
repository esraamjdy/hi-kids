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

export const metadata: Metadata = {
   title: "Stay Connected with HiKids App",
};

export default async function AppPage({
   params,
}: {
   params: Promise<{ lang: string }>;
}) {
   const { lang } = await params;
   if (!isValidLocale(lang)) notFound();
   const dict = await getDictionary(lang);
   const t = dict.parents.app;

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
                           HiKids <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                              style={{
                                 WebkitTextStroke: "12px #00AEEF",
                                 paintOrder: "stroke fill",
                                 filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                              }}>
                              Companion
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

         {/* ─── APP EXPERIENCE ─── */}
         <section className="py-20 lg:py-32 bg-yellow-50/30 relative overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
               <div className="grid lg:grid-cols-2 gap-20 items-center">

                  {/* Left Column: Text & Features */}
                  <div className="space-y-12">
                     <div className="space-y-6">
                        <h2 className="text-4xl lg:text-6xl font-fredoka font-black text-slate-900 leading-tight">
                           Stay Connected <br className="hidden lg:block" /> Every Step.
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
                              <span className="text-lg lg:text-xl font-fredoka font-black text-slate-800 tracking-tight">{feature}</span>
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
                              <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 animate-float">
                                 <Image src="/images/logo.png" alt="logo" width={60} height={60} />
                              </div>
                              <p className="text-2xl font-black text-slate-900 font-fredoka tracking-wide">HiKids</p>
                              <p className="text-hikids-yellow font-black uppercase tracking-[0.3em] text-[10px] mt-2 mb-12">Companion</p>

                              <div className="w-full space-y-4">
                                 <div className="h-12 w-full bg-slate-50 border border-slate-100 rounded-2xl flex items-center p-4 gap-3 animate-pulse">
                                    <div className="w-4 h-4 bg-yellow-100 rounded-full" />
                                    <div className="h-2 w-24 bg-slate-200 rounded-full" />
                                 </div>
                                 <div className="h-12 w-full bg-slate-50 border border-slate-100 rounded-2xl flex items-center p-4 gap-3">
                                    <div className="w-4 h-4 bg-blue-100 rounded-full" />
                                    <div className="h-2 w-32 bg-slate-200 rounded-full" />
                                 </div>
                                 <div className="h-12 w-full bg-slate-900 text-white rounded-2xl flex items-center justify-center text-[10px] font-black uppercase tracking-widest mt-6">
                                    Login / Secure Access
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Floating Notification */}
                        <div className="absolute -right-16 top-20 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-yellow-100 flex items-center gap-4 animate-float-slow duration-[6000ms]">
                           <div className="w-12 h-12 bg-hikids-yellow rounded-2xl flex items-center justify-center text-white">
                              <Sparkles size={24} className="fill-current" />
                           </div>
                           <div>
                              <p className="font-black font-fredoka text-slate-900 text-sm italic">New Update</p>
                              <p className="text-xs text-slate-500 font-medium">Child's report is ready!</p>
                           </div>
                        </div>
                     </MotionWrapper>
                  </div>

               </div>
            </div>
         </section>

         {/* ─── DOWNLOAD ─── */}
         <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full text-center">
               <MotionWrapper type="fade">
                  <div className="w-20 h-20 bg-yellow-50 border border-yellow-100 text-hikids-yellow mx-auto rounded-[2.5rem] flex items-center justify-center mb-10 shadow-xl">
                     <Download size={32} />
                  </div>
                  <h2 className="text-4xl lg:text-7xl font-fredoka font-black text-slate-900 mb-8 leading-tight">{t.downloadTitle}</h2>
                  <p className="text-lg lg:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-16 opacity-80 leading-relaxed">
                     Available on iOS and Android. Empowering your child's success with world-class connectivity.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                     <a href="#" className="flex items-center gap-6 bg-slate-900 text-white px-10 py-6 rounded-[2.5rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                        <Smartphone size={32} className="text-hikids-yellow" />
                        <div className="text-left">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Get it on</p>
                           <p className="text-xl font-black font-fredoka tracking-wide">App Store</p>
                        </div>
                     </a>
                     <a href="#" className="flex items-center gap-6 bg-slate-900 text-white px-10 py-6 rounded-[2.5rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                        <Download size={32} className="text-hikids-blue" />
                        <div className="text-left">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Get it on</p>
                           <p className="text-xl font-black font-fredoka tracking-wide">Google Play</p>
                        </div>
                     </a>
                  </div>
               </MotionWrapper>
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
                           {/* Tag Removed */}
                           <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.1] tracking-tight">
                              Safe & <br className="sm:hidden" />
                              <span className="text-white text-6xl lg:text-8xl xl:text-[7.5rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                                 style={{
                                    WebkitTextStroke: "12px #00AEEF",
                                    paintOrder: "stroke fill",
                                    filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                                 }}>
                                 Secure
                              </span>
                           </h2>
                           <p className="text-lg lg:text-3xl text-slate-800 font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed text-center lg:text-left text-balance">
                              Your data is encrypted and secure. Stay connected with peace of mind.
                           </p>
                        </div>
                     </MotionWrapper>

                     <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                        <Link
                           href={`/${lang}/parents/find-kindergarten`}
                           className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:shadow-2xl transition-all"
                        >
                           Find Center <MapPin className="h-6 w-6 ml-2" />
                        </Link>
                     </div>
                  </div>

               </div>
            </div>
         </section>

      </div>
   );
}
