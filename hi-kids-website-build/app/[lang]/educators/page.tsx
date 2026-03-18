import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, BookOpen, Award, ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CtaCard } from "@/components/cta-card";
import { WaveDivider } from "@/components/wave-divider";
import { SectionHeader } from "@/components/section-header";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Empowering Educators | HiKids Global",
};

export default async function EducatorsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.landing;

  const icons = [FileText, BookOpen, Award];
  const hrefs = [
    `/${lang}/educators/materials`,
    `/${lang}/educators/method`,
    `/${lang}/educators/certification`,
  ];
  const colors = ["text-primary", "text-secondary", "text-accent"];

  return (
    <>
      {/* Hero - Inspiring & Professional - Dominant Yellow for Educators Pathway */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hikids-yellow pt-32 pb-48 lg:py-48">
        {/* Playfully patterned overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none mix-blend-darken" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-10 top-[20%] opacity-30 hidden lg:block translate-x-1/4 scale-110 drop-shadow-2xl animate-float-slow">
            <Image src="/images/Whisk_ba46783577f5efb8588459e8166e51a2dr.png" alt="" width={600} height={600} className="object-contain" />
          </div>
          <div className="absolute left-[2%] top-[15%] opacity-20 hidden lg:block -translate-x-1/4 scale-90 drop-shadow-xl animate-float">
            <Image src="/images/11.png" alt="" width={300} height={300} className="object-contain scale-x-[-1]" />
          </div>
          <div className="absolute left-[5%] top-40 h-80 w-80 bg-white/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full text-center">
          <MotionWrapper className="mx-auto max-w-5xl" type="fade" direction="up">
            <div className="mb-10 inline-flex items-center gap-4 rounded-full border border-slate-900/10 bg-white/20 px-6 py-3 text-sm md:text-base font-black text-slate-900 backdrop-blur-md uppercase tracking-[0.2em]">
              <GraduationCap className="h-5 w-5" />
              Empowering the Next Generation
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-fredoka font-black text-slate-900 tracking-tight leading-[0.95] lg:mb-12">
              {t.title}
            </h1>
            <p className="mt-10 text-xl md:text-2xl lg:text-4xl text-slate-800 font-medium leading-relaxed max-w-4xl mx-auto opacity-90 text-balance">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>
        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* Pathways */}
      <section className="py-32 lg:py-56 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="absolute -left-10 bottom-20 opacity-15 hidden xl:block -rotate-12 animate-float-slow drop-shadow-lg">
          <Image src="/images/9.png" alt="" width={400} height={400} />
        </div>

        {/* Additional Mascot for Balance */}
        <div className="absolute right-[-10%] top-[15%] w-[450px] h-[450px] opacity-15 drop-shadow-md rotate-12 animate-float pointer-events-none z-0 hidden lg:block">
          <Image src="/images/8.png" alt="" fill className="object-contain" />
        </div>

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10">
          <MotionWrapper type="fade" direction="up">
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-slate-900 leading-[1.05] tracking-tight">Your Professional Journey</h2>
              <p className="text-xl md:text-2xl lg:text-4xl text-slate-600 font-medium max-w-4xl mx-auto text-balance">
                Access the tools, methods, and certifications you need to excel as a HiKids educator.
              </p>
            </div>
          </MotionWrapper>

          <MotionContainer className="mt-16 grid gap-10 md:grid-cols-3">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <MotionItem key={feature.title} className="group relative">
                  <CtaCard
                    title={feature.title}
                    description={feature.description}
                    href={hrefs[i]}
                    cta={feature.cta}
                    icon={<Icon className="h-10 w-10" />}
                    variant="accent"
                    className="h-full p-12 lg:p-16 hover:-translate-y-4 transition-all duration-500 bg-slate-50/80 hover:bg-white rounded-[3rem] shadow-sm hover:shadow-2xl border border-slate-100"
                  />
                  {/* Decorative number */}
                  <div className="absolute -top-6 -right-6 h-16 w-16 rounded-3xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-4xl font-black text-slate-200 group-hover:text-primary transition-all group-hover:scale-110">
                    {i + 1}
                  </div>
                </MotionItem>
              );
            })}
          </MotionContainer>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-32 lg:py-56 relative overflow-hidden bg-hikids-yellow/10 min-h-[95vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('/images/moka-line-art-02.svg')] animate-drift mix-blend-darken" />

        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="grid gap-24 lg:grid-cols-2 items-center">
            <MotionWrapper type="scale" className="relative h-[650px] w-full hidden lg:block">
              <Image
                src="/images/Whisk_998be7f5470b4334f59ae78964d88e0bdr.png"
                alt="Certification"
                fill
                className="object-contain drop-shadow-3xl lg:scale-110"
              />
            </MotionWrapper>

            <MotionWrapper type="fade" direction="left" className="text-left z-10">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-hikids-yellow/30 bg-white/60 px-6 py-2.5 text-sm md:text-base font-black text-slate-800 uppercase tracking-[0.2em] backdrop-blur-sm">
                <Award className="h-5 w-5 text-hikids-yellow" />
                Join the Elite
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-slate-900 mb-10 tracking-tight leading-[1.0]">
                Elevate Your Early Education Practice
              </h2>
              <p className="text-xl md:text-2xl lg:text-4xl text-slate-700 leading-relaxed font-medium max-w-2xl text-balance">
                Access free resources, learn proven methods, and earn your HiKids certification to become a global leader in early education.
              </p>
              <div className="mt-16">
                <Link
                  href={`/${lang}/educators/certification`}
                  className="group inline-flex items-center gap-6 rounded-[2.5rem] bg-hikids-yellow px-14 py-8 text-xl md:text-2xl font-black text-slate-900 shadow-2xl shadow-hikids-yellow/20 transition-all hover:bg-hikids-yellow/90 hover:-translate-y-2 hover:shadow-hikids-yellow/40 hover:scale-105"
                >
                  Get Certified
                  <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform" strokeWidth={3} />
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
