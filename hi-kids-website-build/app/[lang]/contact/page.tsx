import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Briefcase, GraduationCap, Newspaper, Sparkles, Send } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { ContactForm } from "./contact-form";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Contact Us | HiKids Global",
};

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
    <>
      {/* ─── ENHANCED CONTACT HERO ─── */}
      <section className="relative min-h-[50vh] lg:min-h-[65vh] flex items-center overflow-hidden bg-hikids-yellow pt-32 pb-24 lg:pt-48 lg:pb-32">
        {/* Playful Background Elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat mix-blend-multiply pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-white/20 pointer-events-none" />

        {/* Character Integration */}
        <div className="absolute right-[-5%] bottom-[-10%] w-[350px] lg:w-[500px] opacity-20 lg:opacity-40 pointer-events-none select-none">
          <Image src="/images/Moka-Wink.png" alt="Moka Buddy" width={600} height={600} className="object-contain animate-float" priority />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 z-10 w-full text-center lg:text-left">
          <div className="max-w-[900px] animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/40 backdrop-blur-md px-6 py-2.5 shadow-sm border border-white/20">
              <Sparkles className="h-5 w-5 text-hikids-blue animate-pulse" />
              <span className="text-xs lg:text-sm font-black uppercase tracking-widest text-slate-800">
                {t.subtitle}
              </span>
            </div>
            <h1 className="text-5xl lg:text-8xl xl:text-9xl font-black font-fredoka text-slate-900 tracking-tight leading-[0.9] mb-8">
              {t.title}
            </h1>
            <p className="text-lg lg:text-2xl text-slate-700/80 font-medium max-w-2xl leading-relaxed">
               Have a question about our levels, franchising, or just want to say hi? We&apos;re all ears!
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE CATEGORIES ─── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="grid gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-4">
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
                  <div
                    key={category.title}
                    className="group relative rounded-[2.5rem] bg-slate-50 p-10 lg:p-12 transition-all hover:shadow-3xl hover:-translate-y-3 duration-500 overflow-hidden border-2 border-transparent hover:border-hikids-yellow/30"
                  >
                    <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${colors[i]} text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/5`}>
                      <Icon className="h-8 w-8" strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="text-2xl font-black font-fredoka text-slate-900 mb-4 tracking-tight">
                      {category.title}
                    </h3>
                    
                    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                      {category.description}
                    </p>
                    
                    <a
                      href={`mailto:${category.email}`}
                      className="mt-auto inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group/link"
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 ${badgeColor} transition-colors group-hover/link:bg-slate-900 group-hover/link:text-white`}>
                        <Mail className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black tracking-tight text-slate-800 break-all">
                        {category.email}
                      </span>
                    </a>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ─── PREMIUM CONTACT FORM ─── */}
      <section className="py-24 lg:py-48 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hikids-yellow/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hikids-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="mx-auto max-w-[1200px] w-full px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
            
            <div className="flex flex-col text-center lg:text-left">
              <span className="text-hikids-blue font-black uppercase tracking-[0.2em] text-[10px] mb-4">Contact Form</span>
              <h2 className="text-5xl lg:text-7xl font-black font-fredoka text-slate-900 mb-8 leading-[0.95] tracking-tight">
                {t.form.title}
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                Ready to join the HiKids family? Drop us a line and our team will get back to you within 24 hours.
              </p>
              
              <div className="mt-12 space-y-6 hidden lg:block">
                 <div className="flex items-center gap-4 text-slate-700">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-hikids-yellow">
                       <Send size={20} />
                    </div>
                    <span className="font-bold">Fast Response Guarantee</span>
                 </div>
                 <div className="flex items-center gap-4 text-slate-700">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-hikids-blue">
                       <Mail size={20} />
                    </div>
                    <span className="font-bold">24/7 Support Channel</span>
                 </div>
              </div>
            </div>

            <div className="bg-white rounded-[3.5rem] p-10 lg:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100 relative group transition-all hover:shadow-[0_45px_120px_rgba(0,0,0,0.12)]">
              <ContactForm dict={t.form} />
            </div>
          </div>
        </div>

        {/* Floaties */}
        <div className="absolute top-[20%] left-[5%] animate-float pointer-events-none opacity-20 hidden xl:block">
           <Image src="/images/1.png" alt="" width={150} height={150} className="grayscale brightness-110" />
        </div>
      </section>
    </>
  );
}
