import type { Metadata } from "next";
import { Award, CheckCircle2, Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CertificationForm } from "./certification-form";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get Certified | HiKids Global Excellence",
};

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.certification;

  return (
    <>
      <section className="bg-hikids-blue relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-48 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/moka-line-art-01.svg')] animate-drift pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.1] hidden lg:block translate-x-1/4 scale-125">
             <Image src="/images/Whisk_998be7f5470b4334f59ae78964d88e0bdr.png" alt="" width={600} height={600} className="object-contain" />
          </div>
          <div className="absolute left-[5%] top-40 h-[600px] w-[600px] bg-white/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full text-center">
          <MotionWrapper className="mx-auto max-w-5xl" type="fade" direction="up">
            <div className="mb-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm md:text-base font-black text-white shadow-soft backdrop-blur-md uppercase tracking-[0.2em]">
              <Award className="h-5 w-5 text-white" />
              Global Standard of Excellence
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-fredoka font-black text-white tracking-tight leading-[0.95] mb-12">
              {t.title}
            </h1>
            <p className="mt-10 text-xl md:text-2xl lg:text-4xl text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-balance opacity-90">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      <section className="py-32 lg:py-56 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10 w-full">
          <div className="grid items-start gap-24 lg:grid-cols-2">
            {/* Benefits */}
            <MotionWrapper type="fade" direction="right" className="space-y-16">
              <div className="space-y-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-[2.5rem] bg-hikids-blue/5 border border-hikids-blue/10 shadow-xl">
                  <GraduationCap className="h-12 w-12 text-hikids-blue" />
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-fredoka font-black text-slate-900 tracking-tight leading-none">
                  Professional Recognition
                </h2>
                <p className="text-xl md:text-2xl lg:text-4xl text-slate-600 font-medium leading-relaxed text-balance opacity-90">
                  {t.description}
                </p>
              </div>

              <div className="grid gap-6">
                {t.benefits.map((benefit: string) => (
                  <div key={benefit} className="group flex items-center gap-8 p-10 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-hikids-blue/30 hover:shadow-2xl transition-all duration-700">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-300 shadow-sm border border-slate-100 group-hover:text-hikids-blue group-hover:bg-hikids-blue/5 transition-all duration-500 group-hover:rotate-12">
                      <CheckCircle2 className="h-6 w-6" strokeWidth={3} />
                    </div>
                    <span className="text-xl lg:text-2xl font-black text-slate-700 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-12 lg:p-16 rounded-[4rem] bg-hikids-yellow/5 border border-hikids-yellow/20 flex items-start gap-10 hover:shadow-2xl transition-all duration-700">
                <ShieldCheck className="h-16 w-16 text-hikids-yellow shrink-0 mt-1" />
                <div className="space-y-4">
                  <h4 className="text-3xl lg:text-4xl font-fredoka font-black text-slate-900">Verified Achievement</h4>
                  <p className="text-xl lg:text-3xl text-slate-600 font-medium leading-relaxed opacity-90">Earn a globally recognized certificate that validates your expertise in the HiKids pedagogical model.</p>
                </div>
              </div>
            </MotionWrapper>

            {/* Form Container */}
            <MotionWrapper type="scale" delay={0.3} className="relative mt-20 lg:mt-0">
              {/* Decorative glows */}
              <div className="absolute -inset-20 bg-hikids-blue/5 blur-[120px] rounded-full" />

              <div className="relative rounded-[5rem] border border-slate-100 bg-white p-12 lg:p-20 shadow-3xl ring-1 ring-slate-100 overflow-hidden">
                <div className="mb-16">
                  <div className="flex items-center gap-4 text-hikids-blue font-black uppercase tracking-[0.3em] text-sm mb-6">
                    <Sparkles className="h-6 w-6 fill-current" />
                    Application Form
                  </div>
                  <h3 className="text-4xl md:text-6xl font-fredoka font-black text-slate-900 tracking-tight leading-none mb-4">
                    {t.cta}
                  </h3>
                </div>
                <div className="bg-slate-50/50 rounded-[4rem] p-8 md:p-12 border border-slate-100">
                  <CertificationForm dict={dict} />
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
