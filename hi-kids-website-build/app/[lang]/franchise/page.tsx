import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Globe, Users, ShieldCheck, ArrowRight, Building2, Briefcase } from "lucide-react";
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
    <div className="bg-white">
      {/* Hero - Business Focused - Dominant Yellow */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hikids-yellow pt-32 pb-48 lg:py-48">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none mix-blend-darken" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-10 top-[15%] opacity-30 hidden lg:block translate-x-1/4 scale-125 drop-shadow-2xl animate-float-slow grayscale-0">
             <Image src="/images/Whisk_ba46783577f5efb8588459e8166e51a2dr.png" alt="" width={700} height={700} className="object-contain" />
          </div>
          <div className="absolute left-[5%] bottom-[10%] h-[600px] w-[600px] bg-white/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MotionWrapper type="fade" direction="right" className="max-w-4xl">
              <div className="mb-10 inline-flex items-center gap-4 rounded-full border border-slate-900/10 bg-white/20 px-6 py-3 text-sm md:text-base font-black text-slate-900 backdrop-blur-md uppercase tracking-[0.2em] shadow-sm">
                <Briefcase className="h-5 w-5" />
                Franchise Opportunity
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-fredoka font-black text-slate-900 tracking-tight leading-[0.95] mb-12 text-balance">
                {t.title}
              </h1>
              <p className="mt-10 text-xl md:text-2xl lg:text-4xl text-slate-800 font-medium leading-relaxed max-w-3xl opacity-90 text-balance mb-16">
                {t.subtitle}
              </p>
              <Link
                href={`/${lang}/franchise/inquiry`}
                className="group inline-flex items-center gap-6 rounded-[2.5rem] bg-slate-900 px-14 py-8 text-xl md:text-2xl font-black text-white shadow-2xl transition-all hover:bg-slate-800 hover:-translate-y-2 hover:scale-105"
              >
                {t.cta}
                <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform" strokeWidth={3} />
              </Link>
            </MotionWrapper>

            {/* Stats Grid */}
            <MotionContainer className="grid grid-cols-2 gap-6 lg:gap-10">
              {t.stats.map((stat: any, i: number) => {
                const Icon = statsIcons[i];
                return (
                  <MotionItem key={i} className="bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/40 shadow-xl group hover:bg-white/60 transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-hikids-yellow mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      <Icon size={32} />
                    </div>
                    <div className="text-5xl lg:text-7xl font-black text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm font-black text-slate-700/60 uppercase tracking-widest">{stat.label}</div>
                  </MotionItem>
                );
              })}
            </MotionContainer>
          </div>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* Pathways */}
      <section className="py-32 lg:py-56 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full">
          <MotionWrapper type="fade" direction="up" className="text-center mb-24 space-y-8">
            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-fredoka font-black text-slate-900 tracking-tight leading-[0.95]">Explore the Model</h2>
            <p className="text-xl md:text-2xl lg:text-4xl text-slate-600 font-medium max-w-4xl mx-auto text-balance">
              Find everything you need to know about our partnership structure and support systems.
            </p>
          </MotionWrapper>

          <MotionContainer className="grid md:grid-cols-3 gap-10">
            {pathwayLinks.map((path, i) => (
              <MotionItem key={i}>
                <CtaCard
                  title={path.title}
                  description={path.description}
                  href={path.href}
                  cta="Learn More"
                  icon={<path.icon size={32} />}
                  variant="accent"
                  className="h-full p-12 lg:p-16 hover:-translate-y-4 transition-all duration-500 bg-slate-50/80 hover:bg-white rounded-[3rem] shadow-sm hover:shadow-2xl border border-slate-100"
                />
              </MotionItem>
            ))}
          </MotionContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 lg:py-56 bg-slate-50 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full">
           <div className="bg-hikids-yellow rounded-[5rem] p-16 lg:p-24 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-20">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex-1 space-y-12">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-slate-900 leading-[1.0] tracking-tight">Ready to building your legacy?</h2>
                <p className="text-xl md:text-2xl lg:text-4xl text-slate-800 font-medium opacity-90 leading-relaxed text-balance">
                  Take the first step towards opening your own HiKids Kindergarten. Our team is ready to support you.
                </p>
                <div className="pt-6">
                  <Link
                    href={`/${lang}/franchise/inquiry`}
                    className="inline-flex items-center gap-6 rounded-[2.5rem] bg-white px-14 py-8 text-xl md:text-2xl font-black text-slate-900 shadow-xl transition-all hover:-translate-y-2 hover:scale-105"
                  >
                    Partner with Us
                    <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-3" strokeWidth={3} />
                  </Link>
                </div>
              </div>

              <div className="relative w-full lg:w-1/3 aspect-square lg:scale-125 animate-float-slow">
                 <Image src="/images/hi.png" alt="Moka Mascot" fill className="object-contain drop-shadow-3xl" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
