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
      {/* Hero - Friendly & Premium - Yellow dominant */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-primary pt-40 lg:pt-56 lg:pt-48 py-32 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-kids-pattern mix-blend-overlay pointer-events-none" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-30 drop-shadow-sm hidden lg:block translate-x-1/4">
            <Image src="/images/3.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute left-[10%] top-20 h-64 w-64 bg-white/10 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-[1200px] w-full animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-white shadow-soft backdrop-blur-md uppercase tracking-widest">
              <Sparkles className="h-4 w-4 fill-current text-white" />
              We&apos;re Here to Help
            </div>
            <h1 className="font-bold tracking-tight text-white  text-balance leading-[1.1]">
              {t.title}
            </h1>
            <p className="mt-10  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-white/80 font-normal leading-relaxed text-pretty max-w-[1200px] w-full mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Categories */}
      <section className=" py-32 lg:py-48 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <div className="grid gap-20 lg:gap-24 lg:gap-20 xl:gap-32 md:grid-cols-2 lg:grid-cols-4">
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
                return (
                  <div
                    key={category.title}
                    className="group relative rounded-[2.5rem] border border-border/50 bg-white p-14 lg:p-20 lg:p-16 transition-all hover:shadow-3xl hover:-translate-y-4 lg:hover:-translate-y-6 duration-500 shadow-soft overflow-hidden"
                  >
                    <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-[3rem] lg:rounded-[4rem] lg:rounded-[2.5rem] ${colors[i]} text-white group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/5`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4   font-normal  text-card-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="mb-8  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-muted-foreground leading-relaxed font-normal">
                      {category.description}
                    </p>
                    <a
                      href={`mailto:${category.email}`}
                      className="inline-flex items-center gap-3  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-primary hover:text-primary/80 transition-all"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span className="break-all">{category.email}</span>
                    </a>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Contact Form - Premium Card */}
      <section className=" py-32 lg:py-48 relative overflow-hidden bg-muted/30 min-h-[95vh] flex flex-col justify-center">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary))_0%,transparent_50%)]" />
        </div>

        <div className="mx-auto max-w-[1200px] w-full px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-bold text-foreground  mb-6 tracking-tight">
              {t.form.title}
            </h2>
            <p className=" text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-muted-foreground leading-relaxed font-normal italic">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="glass rounded-[3rem] p-14 lg:p-20 lg:p-14 lg:p-14 shadow-3xl border border-white/40 bg-white/70 backdrop-blur-2xl animate-scale-in">
            <ContactForm dict={t.form} />
          </div>

          {/* Decorative Mascot */}
          <div className="absolute -bottom-20 -left-20 opacity-20 drop-shadow-sm rotate-12 animate-float-slow grayscale hidden lg:block">
            <Image src="/images/1.png" alt="" width={300} height={300} />
          </div>
        </div>
      </section>
    </>
  );
}
