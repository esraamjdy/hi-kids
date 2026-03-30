import type { Metadata } from "next";
import { Mic, Play, Radio, Share2, Clock, Search, Filter, Volume2, Heart, ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
   title: "HiKids Podcast | Educator Insight & Growth",
};

export default async function PodcastPage({
   params,
}: {
   params: Promise<{ lang: string }>;
}) {
   const { lang } = await params;
   if (!isValidLocale(lang)) notFound();
   const dict = await getDictionary(lang);
   const t = (dict.educators as any).podcast;

   return (
      <div className="bg-white overflow-hidden selection:bg-[#ffde00]/20 pt-16 lg:pt-24 min-h-screen">
         {/* ─── HI-END MINIMALIST HERO ─── */}
         <section className="py-8 lg:py-16 bg-white relative overflow-visible">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-16 w-full">
               <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                  {/* Left: Huge Abstract Visual */}
                  <div className="lg:col-span-7 relative order-2 lg:order-1">
                     <div className="absolute inset-0 bg-[#ffde00]/10 rounded-full blur-[150px] -z-10 animate-pulse-slow" />
                     <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#00AEEF]/10 rounded-full blur-[100px] -z-10" />
                     <MotionWrapper type="scale">
                        <div className="relative group">
                           <div className="absolute -inset-6 bg-slate-900/5 rounded-[4rem] rotate-2 blur-3xl group-hover:rotate-0 transition-transform duration-1000" />
                           <div className="relative w-full aspect-[16/9] max-w-[950px] overflow-hidden rounded-[3.5rem] bg-slate-900  lg:translate-x-[-8%]">
                              <Image src="/images/Podcast-1.png" alt="Featured Podcast" fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-1000" />
                           </div>
                        </div>
                     </MotionWrapper>
                  </div>
                  {/* Right: Elegant Typography */}
                  <div className="lg:col-span-5 space-y-10 order-1 lg:order-2">
                     <MotionWrapper direction="right">
                        <div className="space-y-6">
                           <h1 className="text-6xl lg:text-8xl xl:text-[8rem] font-fredoka font-bold text-slate-900 leading-[0.9] tracking-tight">
                              {t.heroTitle1} <br />
                              <span className="text-[#ffde00] inline-block transition-transform hover:scale-105 duration-300"
                                 style={{
                                    WebkitTextStroke: "12px #00AEEF",
                                    paintOrder: "stroke fill",
                                    filter: "drop-shadow(0 10px 0 rgba(0, 174, 239, 0.15))"
                                 }}>
                                 {t.heroTitle2}
                              </span>
                           </h1>
                           <p className="text-xl lg:text-3xl text-slate-500 font-medium leading-relaxed max-w-xl opacity-90">
                              {t.subtitle}
                           </p>
                        </div>
                     </MotionWrapper>
                  </div>
               </div>
            </div>
         </section>

         {/* ─── CLEAN EPISODES FEED ─── */}
         <section id="episodes" className="py-24 bg-[#ffde00] relative overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full relative z-10">

               {/* Minimalist Search */}
               <div className="flex flex-col items-center text-center mb-24 lg:mb-32">
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-900 leading-tight tracking-tight uppercase">
                     {t.ourEpisodes.split(' ')[0]} <span className="text-white ml-2 inline-block transition-transform hover:scale-105 duration-300"
                        style={{
                           WebkitTextStroke: "12px #00AEEF",
                           paintOrder: "stroke fill",
                           filter: "drop-shadow(0 8px 0 rgba(0, 174, 239, 0.2))"
                        }}>
                        {t.ourEpisodes.split(' ')[1]}
                     </span>
                  </h2>
               </div>

               <MotionContainer className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                  {t.episodes.map((ep: any, i: number) => (
                     <MotionItem key={ep.title}>
                        <div className="group bg-white p-8 lg:p-12 rounded-[3.5rem]  -900/5 transition-all duration-500 flex items-center gap-8 relative overflow-hidden">
                           {/* Icon Block */}
                           <div className="h-20 w-20 shrink-0 rounded-[2rem] bg-slate-900 flex items-center justify-center text-[#ffde00]  group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                              <Volume2 size={28} />
                           </div>

                           {/* Content Overlay */}
                           <div className="flex-1 space-y-4">
                              <div className="flex items-center justify-between">
                                 <span className="text-[10px] font-black uppercase tracking-widest text-[#ffde00] py-1 px-3 bg-[#ffde00]/5 rounded-full">{ep.topic}</span>
                                 <span className="text-xs font-bold text-slate-400 flex items-center gap-2"><Clock size={14} /> {ep.duration}</span>
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-fredoka font-bold text-slate-900 leading-tight group-hover:text-slate-700 transition-colors uppercase tracking-tight">{ep.title}</h3>
                              <p className="text-slate-500 text-sm lg:text-base font-medium leading-relaxed opacity-80">{ep.description}</p>
                           </div>

                           {/* Play/Actions */}
                           <div className="flex flex-col gap-3">
                              <button className="p-4 rounded-2xl bg-slate-50 text-slate-300 hover:text-[#ffde00] transition-colors"><Heart size={20} /></button>
                              <button className="p-4 rounded-[1.5rem] bg-slate-900 text-white hover:bg-[#ffde00] hover:text-slate-900 transition-all  -900/10"><Play fill="currentColor" size={20} /></button>
                           </div>
                        </div>
                     </MotionItem>
                  ))}
               </MotionContainer>
            </div>
         </section>

         {/* ─── PREMIUM SUBSCRIBE BANNER ─── */}
         <section className="pt-8 lg:pt-12 pb-32 lg:pb-48 bg-white relative overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
               <MotionWrapper type="fade" className="relative rounded-[4rem] bg-gradient-to-br from-[#ffde00] via-[#ffd600] to-[#ffc400] p-12 lg:p-24 overflow-visible  [#ffde00]/20 min-h-[500px] flex items-center">
                  <div className="relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
                     <div className="lg:col-span-7 space-y-12 text-center lg:text-left">
                        <MotionWrapper type="scale">
                           <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-900 leading-[0.9] tracking-tight">
                              {t.bannerTitle1} <br />
                              <span className="text-white inline-block mt-4"
                                 style={{
                                    WebkitTextStroke: "14px #00AEEF",
                                    paintOrder: "stroke fill",
                                    filter: "drop-shadow(0 12px 0 rgba(0, 174, 239, 0.15))"
                                 }}>
                                 {t.bannerTitle2}
                              </span>
                           </h2>
                        </MotionWrapper>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                           <button className="group flex items-center gap-5 px-10 py-6 rounded-full bg-white text-slate-900 font-black text-xl transition-all  hover:-translate-y-2 hover:scale-105 active:scale-95">
                              <Radio className="h-8 w-8 text-[#00AEEF]" />
                              Apple Podcasts
                           </button>
                           <button className="group flex items-center gap-5 px-10 py-6 rounded-full bg-slate-900 text-white font-black text-xl transition-all  hover:-translate-y-2 hover:scale-105 active:scale-95">
                              <Play fill="currentColor" className="h-8 w-8 text-[#ffde00]" />
                              Spotify
                           </button>
                        </div>
                     </div>

                     <div className="lg:col-span-5 flex justify-center lg:justify-end min-h-[450px]">
                        <MotionWrapper type="scale" className="relative lg:absolute lg:right-[-15%] lg:bottom-[-35%] w-72 h-72 lg:w-[950px] lg:h-[950px] pointer-events-none">
                           <Image src="/images/Podcast-2.png" alt="Moka Listener" fill className="object-contain drop- lg:translate-y-12" />
                        </MotionWrapper>
                     </div>
                  </div>
               </MotionWrapper>
            </div>
         </section>

      </div>
   );
}
