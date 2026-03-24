import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Globe, Users, ShieldCheck, ArrowRight, Building2, Briefcase, Zap } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";
import { CtaCard } from "@/components/cta-card";

export const metadata: Metadata = {
  title: "Open a HiKids Kindergarten | Franchise Opportunities",
};

export default async function FranchiseLandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.landing;

  const statsIcons = [Building2, Globe, Users, ShieldCheck];
  const pathwayLinks = [
    {
      title: dict.franchise.whyJoin.title,
      description: dict.franchise.whyJoin.subtitle,
      href: `/${lang}/franchise/why-join`,
      icon: TrendingUp,
    },
    {
      title: dict.franchise.whatYouGet.title,
      description: dict.franchise.whatYouGet.subtitle,
      href: `/${lang}/franchise/what-you-get`,
      icon: Briefcase,
    },
    {
      title: dict.franchise.model.title,
      description: dict.franchise.model.subtitle,
      href: `/${lang}/franchise/model`,
      icon: ShieldCheck,
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20">
      
      {/* ─── HERO ─── */}
      <section className="relative min-h-[35vh] lg:min-h-[50vh] flex items-center overflow-hidden bg-[#FFEB00] py-4 lg:py-8">
        
        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <MotionWrapper direction="right" delay={0.2}>
                <div className="space-y-6">
                  {/* Tag Removed */}
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.05] tracking-tight text-balance">
                    Lead the Future <br className="hidden lg:block" />
                    of <span className="text-white text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                        style={{
                          WebkitTextStroke: "12px #00AEEF",
                          paintOrder: "stroke fill",
                          filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                        }}>
                      Education
                    </span>
                  </h1>
                  <p className="text-lg lg:text-3xl text-slate-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium opacity-90">
                    {t.subtitle}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                    <Link
                      href={`/${lang}/franchise/inquiry`}
                      className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:scale-105 transition-transform"
                    >
                      {t.cta} <ArrowRight className="h-6 w-6 ml-2" />
                    </Link>
                  </div>
                </div>
              </MotionWrapper>
            </div>

            {/* Right Visual: Stats or Mascot */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <MotionWrapper type="scale" delay={0.4} className="relative w-[350px] h-[350px] lg:w-[600px] lg:h-[600px]">
                <Image
                  src="/images/Moka-Dance.png"
                  alt="Moka"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </MotionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* Hero Divider */}
      <div className="w-full relative -mt-[100px] lg:-mt-[100px] z-20">
        <WaveDivider color="white" />
      </div>

      {/* ─── GROWTH STATS ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {t.stats.map((stat: any, i: number) => {
                const Icon = statsIcons[i];
                return (
                  <MotionItem key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center items-center flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-hikids-yellow mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2 font-fredoka">{stat.value}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                  </MotionItem>
                );
              })}
           </div>
        </div>
      </section>

      {/* ─── THE MODEL – ZigZag ─── */}
      <section className="py-4 lg:py-8 bg-yellow-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight">
              Explore the <span className="text-[#FFEB00] text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                  style={{
                    WebkitTextStroke: "12px #00AEEF",
                    paintOrder: "stroke fill",
                    filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                  }}>
                Model
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {pathwayLinks.map((path, i) => (
                <MotionItem key={i} className="h-full">
                   <Link href={path.href} className="group block h-full bg-white p-10 lg:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-hikids-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-hikids-yellow/10 transition-colors" />
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-hikids-yellow mb-8 shadow-inner group-hover:scale-110 transition-transform">
                         <path.icon size={32} />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 font-fredoka leading-tight">{path.title}</h3>
                      <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                         {path.description}
                      </p>
                      <div className="inline-flex items-center text-hikids-yellow font-bold text-lg group-hover:translate-x-2 transition-transform">
                         Discover Plan <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                   </Link>
                </MotionItem>
             ))}
          </div>
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
                        Build your <br className="sm:hidden" />
                        <span className="text-white text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                           style={{
                              WebkitTextStroke: "12px #00AEEF",
                              paintOrder: "stroke fill",
                              filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                           }}>
                           Legacy
                        </span>
                     </h2>
                     <p className="text-lg lg:text-2xl text-slate-800 font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed">
                        Join our international family of successful educators and business owners.
                     </p>
                  </div>
               </MotionWrapper>

               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  <Link
                    href={`/${lang}/franchise/inquiry`}
                    className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:shadow-2xl transition-all"
                  >
                    Apply Now <ArrowRight className="h-6 w-6 ml-2" />
                  </Link>
                  <Link
                    href={`/${lang}/contact`}
                    className="btn-outline px-12 py-5 text-xl tracking-tight bg-white/80 border-slate-900/10 shadow-xl hover:bg-white !rounded-3xl transition-all"
                  >
                    Contact Support
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
