import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import { TrendingUp, Trophy, Settings, Globe, ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper"; // Added Motion components import

export const metadata: Metadata = {
  title: "Why Join HiKids",
};

export default async function WhyJoinPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.whyJoin;

  const icons = [TrendingUp, Trophy, Settings, Globe];

  return (
    <>
      <section className="bg-hikids-yellow relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-48 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none mix-blend-darken" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute left-[10%] top-20 h-[500px] w-[500px] bg-white/20 rounded-full blur-[100px]" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-30 drop-shadow-2xl hidden lg:block translate-x-1/4">
            <Image src="/images/1.png" alt="" width={600} height={600} className="object-contain" />
          </div>
        </div>

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full text-center lg:text-left">
          <MotionWrapper type="fade" direction="right" className="max-w-5xl">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-fredoka font-black text-slate-900 tracking-tight leading-[0.95] mb-12">
              {t.title}
            </h1>
            <p className="mt-10 text-xl md:text-2xl lg:text-4xl text-slate-800 font-medium leading-relaxed max-w-4xl opacity-90 text-balance">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      <section className="py-32 lg:py-56 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        {/* Floating Grayscale Mascot */}
        <div className="absolute -left-10 bottom-20 opacity-20 drop-shadow-sm -rotate-12 hidden xl:block animate-float-slow grayscale">
          <Image src="/images/7.png" alt="" width={400} height={400} />
        </div>

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10">
          <MotionContainer className="grid gap-12 md:grid-cols-2">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <MotionItem
                  key={feature.title}
                  className="group relative rounded-[4rem] bg-slate-50 p-16 lg:p-20 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 overflow-hidden border border-slate-100 hover:bg-white"
                >
                  <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm border border-slate-100 text-hikids-blue group-hover:bg-hikids-blue group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-fredoka font-black text-slate-900 mb-8 transition-colors group-hover:text-hikids-blue">
                    {feature.title}
                  </h2>
                  <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed font-medium relative z-10 text-balance">
                    {feature.description}
                  </p>
                  <div className="mt-10 h-2 absolute bottom-0 left-0 w-0 bg-hikids-blue group-hover:w-full transition-all duration-[800ms]" />
                </MotionItem>
              );
            })}
          </MotionContainer>

          <MotionWrapper className="mt-24 text-center pb-12" type="scale">
            <Link
              href={`/${lang}/franchise/inquiry`}
              className="group inline-flex items-center gap-6 rounded-[2.5rem] bg-hikids-blue px-14 py-8 text-xl md:text-2xl font-black text-white shadow-2xl shadow-hikids-blue/20 transition-all hover:bg-hikids-blue/90 hover:scale-105 hover:-translate-y-2"
            >
              {dict.common.cta.applyNow}
              <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform" strokeWidth={3} />
            </Link>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
