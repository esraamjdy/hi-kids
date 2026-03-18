import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Layers, Heart, Smartphone, ArrowRight, Sparkles } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CtaCard } from "@/components/cta-card";
import { WaveDivider } from "@/components/wave-divider";
import { SectionHeader } from "@/components/section-header";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "A Bright Future for Your Child | HiKids Parents",
};

export default async function ParentsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.landing;

  const icons = [MapPin, Layers, Heart, Smartphone];
  const hrefs = [
    `/${lang}/parents/find-kindergarten`,
    `/${lang}/parents/learning-levels`,
    `/${lang}/parents/why-choose`,
    `/${lang}/parents/app`,
  ];

  return (
    <>
      {/* Hero - Warm & Emotional - Dominant Cream for Parents Pathway */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-50 pt-32 pb-48 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/moka-line-art-02.svg')] animate-drift pointer-events-none mix-blend-darken" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-10 top-[20%] opacity-30 hidden lg:block translate-x-1/4 scale-110 drop-shadow-2xl animate-float-slow">
            <Image src="/images/7.png" alt="" width={450} height={450} className="object-contain" />
          </div>
          <div className="absolute left-[2%] top-[30%] opacity-20 hidden lg:block -translate-x-1/4 scale-90 drop-shadow-xl animate-float">
            <Image src="/images/2.png" alt="" width={300} height={300} className="object-contain" />
          </div>
          <div className="absolute left-[5%] bottom-[10%] h-[500px] w-[500px] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <MotionWrapper className="text-left" type="fade" direction="right">
              <div className="mb-10 inline-flex items-center gap-4 rounded-full border border-primary/20 bg-white/40 px-6 py-2.5 text-sm md:text-base font-black text-primary shadow-soft backdrop-blur-md uppercase tracking-[0.2em]">
                <Heart className="h-5 w-5 text-primary fill-current" />
                Trusted by Families Worldwide
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-fredoka font-black text-slate-900 tracking-tight leading-[0.95] mb-12">
                {t.title}
              </h1>
              <p className="mt-10 text-xl md:text-2xl lg:text-3xl text-slate-600 font-medium leading-relaxed max-w-2xl text-balance">
                {t.subtitle}
              </p>
              <div className="mt-16 flex flex-wrap gap-6">
                <Link
                  href={`/${lang}/parents/find-kindergarten`}
                  className="inline-flex items-center gap-4 rounded-[2.5rem] bg-hikids-blue px-12 py-7 text-xl font-black text-white shadow-2xl shadow-hikids-blue/20 hover:bg-hikids-blue/90 hover:-translate-y-2 hover:scale-105 transition-all"
                >
                  Find a Center
                  <MapPin className="h-6 w-6" strokeWidth={3} />
                </Link>
              </div>
            </MotionWrapper>

            <MotionWrapper className="relative h-[650px] hidden lg:block" type="scale" delay={0.3}>
              <Image
                src="/images/8.png"
                alt="HiKids for Parents"
                fill
                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)] lg:scale-125"
                priority
              />
            </MotionWrapper>
          </div>
        </div>
        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* Feature Paths */}
      <section className="py-32 lg:py-56 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="absolute -left-10 bottom-20 opacity-15 rotate-12 hidden xl:block animate-float-slow drop-shadow-lg">
          <Image src="/images/4.png" alt="" width={350} height={350} />
        </div>
        <div className="absolute right-[-5%] top-10 opacity-10 hidden xl:block -rotate-12 animate-float drop-shadow-md">
          <Image src="/images/3.png" alt="" width={300} height={300} />
        </div>

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10">
          <MotionWrapper type="fade" direction="up">
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-slate-900 leading-[1.05] tracking-tight">Explore Your Options</h2>
              <p className="text-xl md:text-2xl lg:text-4xl text-slate-600 font-medium max-w-4xl mx-auto text-balance">
                Everything you need to support your child's journey at HiKids.
              </p>
            </div>
          </MotionWrapper>

          <MotionContainer className="mt-16 grid gap-12 md:grid-cols-2">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <MotionItem key={feature.title} className="group relative">
                  <CtaCard
                    title={feature.title}
                    description={feature.description}
                    href={hrefs[i]}
                    cta={feature.cta}
                    icon={<Icon className="h-10 w-10 text-hikids-blue" />}
                    variant="secondary"
                    className="h-full p-12 lg:p-20 hover:-translate-y-4 lg:hover:-translate-y-6 transition-all duration-700 shadow-sm hover:shadow-2xl bg-slate-50/80 hover:bg-white rounded-[4rem] border border-slate-100"
                  />
                  <div className="absolute top-0 right-0 p-12 lg:p-20 opacity-0 group-hover:opacity-10 transition-all duration-700 text-hikids-blue translate-x-4 -translate-y-4 group-hover:translate-0 pointer-events-none">
                    <Icon className="h-32 w-32" />
                  </div>
                </MotionItem>
              );
            })}
          </MotionContainer>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-32 lg:py-56 relative overflow-hidden bg-slate-900 m-6 lg:m-12 rounded-[5rem] min-h-[90vh] flex flex-col justify-center">
        {/* Soft internal glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hikids-blue/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hikids-blue/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 text-center relative z-10 w-full">
          <MotionWrapper type="scale">
            <div className="mb-12 inline-flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
              <Sparkles className="h-10 w-10 text-hikids-blue fill-hikids-blue" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-white mb-12 tracking-tight leading-[1.05]">
              Your Child Deserves the Best Start
            </h2>
            <p className="mx-auto max-w-3xl text-xl md:text-2xl lg:text-3xl text-slate-300 leading-relaxed font-medium mb-16 text-balance">
              Find a HiKids kindergarten near you and see the difference our progressive learning approach makes.
            </p>
            <Link
              href={`/${lang}/parents/find-kindergarten`}
              className="inline-flex items-center gap-6 rounded-[2.5rem] bg-hikids-blue px-14 py-8 text-xl font-black text-white shadow-2xl shadow-hikids-blue/20 transition-all hover:bg-hikids-blue/90 hover:scale-105 hover:-translate-y-2"
            >
              Get Started Today
              <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-3" strokeWidth={3} />
            </Link>
          </MotionWrapper>

          {/* Decorative Mascot */}
          <div className="absolute bottom-[-5%] right-[-5%] opacity-20 hidden xl:block pointer-events-none drop-shadow-3xl animate-float-slow">
            <Image src="/images/Whisk_61d9a24bbad8193df45fec5f308801d0dr.png" alt="" width={500} height={500} />
          </div>
        </div>
      </section>
    </>
  );
}
