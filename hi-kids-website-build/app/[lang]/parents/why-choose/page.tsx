import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Shield,
  Heart,
  Users,
  GraduationCap,
  Globe,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { SectionHeader } from "@/components/section-header";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Why Choose HiKids | Trust & Excellence",
};

export default async function WhyChoosePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.whyChoose;

  const icons = [BookOpen, Shield, Heart, Users, GraduationCap, Globe];

  return (
    <>
      {/* Hero - Trust & Excellence */}
      <section className="bg-hikids-blue relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-48 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/moka-line-art-02.svg')] animate-drift pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.1] hidden lg:block translate-x-1/4 scale-125">
             <Image src="/images/Whisk_3da4c60c2d295d7b7ee45f21d2e0efe6dr.png" alt="" width={600} height={600} className="object-contain" />
          </div>
          <div className="absolute left-[10%] top-20 h-80 w-80 bg-white/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full text-center lg:text-left">
          <MotionWrapper className="max-w-5xl" type="fade" direction="right">
            <div className="mb-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm md:text-base font-black text-white shadow-soft backdrop-blur-md uppercase tracking-[0.2em]">
              <Star className="h-5 w-5 text-white fill-current" />
              Trusted by Thousands of Families
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-fredoka font-black text-white tracking-tight leading-[0.95] mb-12">
              {t.title}
            </h1>
            <p className="mt-10 text-xl md:text-2xl lg:text-4xl text-white/90 font-medium leading-relaxed max-w-4xl opacity-90 text-pretty">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-32 lg:py-56 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="absolute -left-10 bottom-20 opacity-20 drop-shadow-sm -rotate-12 hidden xl:block animate-float-slow grayscale">
          <Image src="/images/8.png" alt="" width={400} height={400} />
        </div>

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10">
          <MotionWrapper type="fade" direction="up" className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-slate-900 leading-[1.05] tracking-tight">What Makes Us Different</h2>
            <p className="text-xl md:text-2xl lg:text-4xl text-slate-600 font-medium max-w-4xl mx-auto text-balance">
              Discover the pillars of excellence that define the HiKids experience.
            </p>
          </MotionWrapper>

          <MotionContainer className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {t.sections.map(
              (
                section: { title: string; description: string },
                i: number
              ) => {
                const Icon = icons[i];
                return (
                  <MotionItem
                    key={section.title}
                    className="group relative rounded-[4rem] bg-slate-50 p-12 lg:p-16 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 overflow-hidden border border-slate-100 hover:bg-white"
                  >
                    <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-10 transition-all duration-1000 translate-x-12 -translate-y-12 group-hover:translate-0 text-hikids-blue pointer-events-none">
                      <Icon className="h-48 w-48" />
                    </div>

                    <div className="mb-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white shadow-sm border border-slate-100 text-hikids-blue group-hover:bg-hikids-blue group-hover:text-white transition-all duration-500 group-hover:scale-110 relative z-10 group-hover:-rotate-12">
                      <Icon className="h-10 w-10" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-fredoka font-black text-slate-900 mb-6 group-hover:text-hikids-blue tracking-tight transition-colors relative z-10">
                      {section.title}
                    </h3>

                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium relative z-10 text-balance opacity-90">
                      {section.description}
                    </p>

                    <div className="mt-10 h-2 absolute bottom-0 left-0 w-0 bg-hikids-blue group-hover:w-full transition-all duration-[1000ms]" />
                  </MotionItem>
                );
              }
            )}
          </MotionContainer>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 lg:py-56 relative overflow-hidden bg-slate-900 mx-6 lg:mx-12 rounded-[5rem] min-h-[90vh] flex flex-col justify-center">
        {/* Soft internal glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hikids-blue/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hikids-blue/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 text-center">
          <MotionWrapper type="scale">
            <div className="mb-12 inline-flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
              <Sparkles className="h-10 w-10 text-hikids-blue fill-hikids-blue" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-white mb-12 tracking-tight leading-[1.05]">
              Give Your Child the Best Start
            </h2>
            <p className="mt-10 text-xl md:text-3xl lg:text-4xl text-slate-300 leading-relaxed font-medium mb-16 max-w-4xl mx-auto text-balance">
              Every HiKids kindergarten delivers the same trusted, progressive experience.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href={`/${lang}/parents/find-kindergarten`}
                className="group inline-flex items-center gap-6 rounded-[2.5rem] bg-hikids-blue px-14 py-8 text-xl font-black text-white shadow-2xl shadow-hikids-blue/20 transition-all hover:bg-hikids-blue/90 hover:-translate-y-2 hover:scale-105"
              >
                Find a Center
                <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform" strokeWidth={3} />
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
