import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Briefcase, GraduationCap, Newspaper, Sparkles, Send } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { ContactForm } from "./contact-form";
import { SectionHeader } from "@/components/section-header";
import { FloatingCharacter } from "@/components/floating-character";

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
  const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-hikids-green"];

  return (
    <>
      {/* Hero - Friendly & Premium */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-20">
        {/* Floating Characters */}
        <FloatingCharacter type="star" position="top-right" delay={0.4} opacity={0.3} scale={0.8} />
        <FloatingCharacter type="bubble" position="bottom-left" delay={1} opacity={0.25} scale={0.75} />

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block translate-x-1/4">
            <Image src="/images/3.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute left-[10%] top-20 h-64 w-64 bg-secondary/10 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/50 px-5 py-2 text-sm font-black text-primary shadow-soft backdrop-blur-md uppercase tracking-widest">
              <Sparkles className="h-4 w-4 fill-current text-accent" />
              We&apos;re Here to Help
            </div>
            <h1 className="text-5xl font-black tracking-tight text-foreground md:text-6xl lg:text-8xl text-balance leading-[1.1]">
              {t.title}
            </h1>
            <p className="mt-10 text-2xl text-muted-foreground font-medium leading-relaxed text-pretty max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Categories */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                    className="group relative rounded-[2.5rem] border border-border/50 bg-white p-10 transition-all hover:shadow-3xl hover:-translate-y-2 duration-500 shadow-soft overflow-hidden"
                  >
                    <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${colors[i]} text-white group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/5`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-2xl font-black text-card-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="mb-8 text-lg text-muted-foreground leading-relaxed font-medium">
                      {category.description}
                    </p>
                    <a
                      href={`mailto:${category.email}`}
                      className="inline-flex items-center gap-3 text-lg font-bold text-primary hover:text-primary/80 transition-all"
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
      <section className="py-24 lg:py-40 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary))_0%,transparent_50%)]" />
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-black text-foreground md:text-6xl mb-6 tracking-tight">
              {t.form.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium italic">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="glass rounded-[3rem] p-8 lg:p-14 shadow-3xl border border-white/40 bg-white/70 backdrop-blur-2xl animate-scale-in">
            <ContactForm dict={t.form} />
          </div>

          {/* Decorative Mascot */}
          <div className="absolute -bottom-20 -left-20 opacity-10 rotate-12 animate-float-slow">
            <Image src="/images/1.png" alt="" width={300} height={300} />
          </div>
        </div>
      </section>
    </>
  );
}
