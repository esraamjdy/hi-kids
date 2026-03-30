import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Briefcase, GraduationCap, Newspaper, Sparkles, Send } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { ContactForm } from "./contact-form";
import { SectionHeader } from "@/components/section-header";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return {
    title: `${dict.contact.title} | ${dict.common.brand} Global`,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.contact;

  const icons = [Mail, Briefcase, GraduationCap, Newspaper];
  const colors = ["bg-primary", "bg-secondary", "bg-primary", "bg-hikids-blue"];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20">

      {/* ─── CREATIVE HEADER (No Hero) ─── */}
      <section className="relative pt-12 pb-8 lg:pt-16 lg:pb-12 bg-white overflow-visible">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-slate-100 pb-16">
            {/* peeking mascot */}
            <MotionWrapper type="scale" className="relative w-48 h-48 lg:w-72 lg:h-72 -mb-24 lg:-mb-32 z-10">
              <Image src="/images/showering.png" alt="Moka" fill className="object-contain drop-shadow-2xl" />
            </MotionWrapper>

            <div className="flex-1 text-center lg:text-left pt-8">
              <MotionWrapper direction="right">
                <h1 className="text-5xl lg:text-8xl xl:text-9xl font-fredoka font-bold text-slate-900 leading-[0.9] tracking-tight text-balance mb-6">
                  {t.title.split(' ').slice(0, -1).join(' ')} <span className="text-hikids-yellow text-6xl lg:text-[7rem] xl:text-[8.5rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "12px #0f172a",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 8px 0 rgba(15, 23, 42, 0.1))"
                    }}>
                    {t.title.split(' ').slice(-1).join(' ')}
                  </span>
                </h1>
                <p className="text-author text-slate-500 max-w-2xl mx-auto lg:mx-0 font-medium">
                  {t.heroSubtitle}
                </p>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE CATEGORIES ─── */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.categories.map(
              (
                category: {
                  title: string;
                  description: string;
                  email: string;
                },
                i: number
              ) => {
                const Icon = icons[i];
                const badgeColor = colors[i].replace('bg-', 'text-');
                return (
                  <MotionItem
                    key={category.title}
                    className="group relative rounded-[3rem] bg-slate-50 p-10 lg:p-12 transition-all hover:shadow-2xl hover:-translate-y-2 duration-500 overflow-hidden border border-slate-100 flex flex-col items-center text-center"
                  >
                    <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-slate-900 group-hover:bg-hikids-blue group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100`}>
                      <Icon size={32} strokeWidth={2.5} />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold font-fredoka text-slate-900 mb-4 tracking-tight">
                      {category.title}
                    </h3>

                    <p className="text-slate-500 font-medium text-sm lg:text-base leading-relaxed mb-10 text-balance h-auto lg:h-[72px]">
                      {category.description}
                    </p>

                    <a
                      href={`mailto:${category.email}`}
                      className="mt-auto w-full inline-flex items-center justify-center gap-3 px-6 py-5 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:bg-slate-900 hover:text-white transition-all duration-500 font-bold text-xs lg:text-sm tracking-tight"
                    >
                      <Mail size={18} className="shrink-0" />
                      <span className="break-all">{category.email}</span>
                    </a>
                  </MotionItem>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ─── PREMIUM CONTACT FORM ─── */}
      <section className="py-24 lg:py-48 relative overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hikids-yellow/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hikids-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

            <div className="flex flex-col text-center lg:text-left space-y-10">
              <MotionWrapper direction="right">
                <h2 className="text-5xl lg:text-8xl font-bold font-fredoka text-slate-900 leading-[0.95] tracking-tight">
                  {t.form.title}
                </h2>
                <p className="text-lg lg:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mt-8">
                  {t.formSubtitle}
                </p>
              </MotionWrapper>

              <div className="space-y-6 hidden lg:block pt-8">
                <MotionWrapper delay={0.1} className="flex items-center gap-6 text-slate-700 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-hikids-yellow group-hover:scale-110 transition-transform">
                    <Send size={24} />
                  </div>
                  <span className="text-xl font-bold font-fredoka uppercase tracking-widest">{t.fastResponse}</span>
                </MotionWrapper>
                <MotionWrapper delay={0.2} className="flex items-center gap-6 text-slate-700 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-hikids-blue group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <span className="text-xl font-bold font-fredoka uppercase tracking-widest">{t.supportChannel}</span>
                </MotionWrapper>
              </div>
            </div>

            <MotionWrapper type="scale" delay={0.3} className="relative">
              <div className="absolute -inset-4 bg-white/50 blur-2xl rounded-[4rem] -z-10" />
              <div className="bg-white rounded-[4rem] p-10 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-slate-100 group transition-all hover:shadow-[0_45px_120px_rgba(0,0,0,0.1)]">
                <ContactForm dict={t.form} />
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
