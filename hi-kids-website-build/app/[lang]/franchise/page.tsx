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
import { AnimatedCounter } from "@/components/animated-counter";

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
      <section className="relative min-h-[35vh] lg:min-h-[50vh] flex items-center overflow-hidden bg-[#00AEEF] py-4 lg:py-8">

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Visual: Stats or Mascot */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start order-1">
              <MotionWrapper type="scale" delay={0.4} className="relative w-[350px] h-[350px] lg:w-[700px] lg:h-[700px] lg:-ml-32">
                <Image
                  src="/images/Holding-hand.png"
                  alt="Moka"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </MotionWrapper>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left order-2 lg:-mr-32 relative z-10">
              <MotionWrapper direction="left" delay={0.2}>
                <div className="space-y-6">
                  {/* Tag Removed */}
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.05] tracking-tight text-balance">
                    {t.title.split(' ').slice(0, -1).join(' ')} <br className="hidden lg:block" />
                    <span className="text-hikids-yellow text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #0056b3",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                      }}>
                      {t.title.split(' ').slice(-1).join(' ')}
                    </span>
                  </h1>
                  <p className="text-lg lg:text-3xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium opacity-90">
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
                <MotionItem
                  key={stat.label}
                  className="group relative rounded-[4rem] bg-white p-10 lg:p-14 transition-all duration-500 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/30 hover:-translate-y-4 border-b-8 border-hikids-blue/20 border-x-2 border-t-2 border-blue-50 overflow-hidden text-center"
                >
                  <div className="mb-8 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-hikids-blue group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-inner">
                    <Icon size={36} />
                  </div>
                  <div className="text-5xl lg:text-7xl font-black text-hikids-yellow mb-4 font-fredoka tracking-tight"
                    style={{
                      WebkitTextStroke: "10px #0056b3",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 4px 0 rgba(0,0,0,0.1))"
                    }}>
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] leading-tight opacity-80">{stat.label}</div>
                </MotionItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── THE MODEL – ZigZag ─── */}
      <section className="py-4 lg:py-16 bg-blue-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-800 leading-[1.1] tracking-tight">
              {dict.franchise.explore.title.split(' ').slice(0, -1).join(' ')} <span className="text-white text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                style={{
                  WebkitTextStroke: "12px #00AEEF",
                  paintOrder: "stroke fill",
                  filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                }}>
                {dict.franchise.explore.title.split(' ').slice(-1).join(' ')}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pathwayLinks.map((path, i) => (
              <MotionItem key={i} className="h-full">
                <Link href={path.href} className="group block h-full bg-white p-10 lg:p-12 rounded-[3.5rem] border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-hikids-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-hikids-blue/10 transition-colors" />
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-hikids-blue mb-8 shadow-inner group-hover:scale-110 transition-transform">
                    <path.icon size={32} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 font-fredoka leading-tight">{path.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                    {path.description}
                  </p>
                  <div className="inline-flex items-center text-hikids-blue font-bold text-lg group-hover:translate-x-2 transition-transform">
                    Discover Plan <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </Link>
              </MotionItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="pt-8 pb-32 lg:pt-12 lg:pb-48 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full">
          <div className="bg-[#00AEEF] rounded-[4rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            {/* Left Column: Mascot */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-center order-2 lg:order-1 mt-12 lg:mt-0">
              <MotionWrapper type="scale" className="relative w-[420px] h-[420px] lg:w-[850px] lg:h-[850px] lg:-ml-10 lg:-my-32 lg:-translate-y-12">
                <Image src="/images/moka-and-olly.png" alt="Moka Plays" fill className="object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500 rotate-[-2deg]" />
              </MotionWrapper>
            </div>

            {/* Right Column: Text */}
            <div className="relative w-full lg:w-1/2 space-y-10 order-1 lg:order-2 text-center lg:text-left">
              <MotionWrapper direction="left">
                <div className="space-y-6">
                  {/* Tag Removed */}
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-black text-slate-900 leading-[1.05] tracking-tight">
                    {dict.franchise.legacy.title.split(' ').slice(0, -1).join(' ')} <br className="sm:hidden" />
                    <span className="text-hikids-yellow text-6xl lg:text-8xl xl:text-9xl ml-2 inline-block transition-transform hover:scale-105 duration-300"
                      style={{
                        WebkitTextStroke: "12px #0056b3",
                        paintOrder: "stroke fill",
                        filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                      }}>
                      {dict.franchise.legacy.title.split(' ').slice(-1).join(' ')}
                    </span>
                  </h2>
                  <p className="text-lg lg:text-2xl text-white font-medium max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed">
                    {dict.franchise.legacy.subtitle}
                  </p>
                </div>
              </MotionWrapper>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  href={`/${lang}/franchise/inquiry`}
                  className="btn-primary !bg-slate-900 !text-white px-12 py-5 text-xl tracking-tight !rounded-3xl hover:scale-105 transition-transform shadow-2xl"
                >
                  {dict.common.cta.applyNow} <ArrowRight className="h-6 w-6 ml-2" />
                </Link>
                <Link
                  href={`/${lang}/contact`}
                  className="btn-outline px-12 py-5 text-xl tracking-tight bg-white border-transparent text-slate-900 shadow-xl hover:bg-slate-50 !rounded-3xl transition-all"
                >
                  {dict.common.nav.contact}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
