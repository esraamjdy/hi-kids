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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-accent/20 via-background to-background pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block translate-x-1/4">
            <Image src="/images/Whisk_3da4c60c2d295d7b7ee45f21d2e0efe6dr.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute left-[10%] top-20 h-64 w-64 bg-primary/10 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-white/50 px-5 py-2 text-sm font-black text-foreground shadow-soft backdrop-blur-md uppercase tracking-widest">
              <Star className="h-4 w-4 text-hikids-yellow fill-current" />
              Trusted by Thousands of Families
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

      {/* Reasons Grid */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute -left-10 bottom-20 opacity-10 -rotate-12 hidden xl:block animate-float-slow">
          <Image src="/images/8.png" alt="" width={400} height={400} />
        </div>

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <SectionHeader
            title="What Makes Us Different"
            subtitle="Discover the pillars of excellence that define the HiKids experience."
          />

          <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {t.sections.map(
              (
                section: { title: string; description: string },
                i: number
              ) => {
                const Icon = icons[i];
                return (
                  <div
                    key={section.title}
                    className="group relative rounded-[3rem] border border-border/50 bg-white p-12 transition-all hover:shadow-3xl hover:-translate-y-2 duration-500 shadow-soft overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon className="h-24 w-24" />
                    </div>

                    <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-soft">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="mb-6 text-2xl font-black text-card-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>

                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                      {section.description}
                    </p>

                    <div className="mt-10 h-1.5 w-12 rounded-full bg-primary/20 group-hover:w-full transition-all duration-700" />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 lg:py-48 relative overflow-hidden bg-accent/20">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,white_0%,transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div className="text-left animate-fade-in-up">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-black text-primary uppercase tracking-widest">
                <Sparkles className="h-4 w-4" />
                The Journey Starts Here
              </div>
              <h2 className="text-5xl font-black text-foreground md:text-7xl mb-10 tracking-tight leading-[1.1]">
                Give Your Child the Best Start
              </h2>
              <p className="mt-10 text-2xl text-muted-foreground leading-relaxed font-medium mb-12 max-w-xl">
                Every HiKids kindergarten delivers the same trusted, progressive experience.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  href={`/${lang}/parents/find-kindergarten`}
                  className="group inline-flex items-center gap-5 rounded-[2rem] bg-primary px-12 py-7 text-2xl font-black text-white shadow-2xl shadow-primary/20 transition-all hover:bg-primary/90 hover:-translate-y-2 hover:shadow-primary/40"
                >
                  Find a Center
                  <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href={`/${lang}/parents/app`}
                  className="inline-flex items-center gap-5 rounded-[2rem] border-4 border-white bg-white/50 px-12 py-7 text-2xl font-black text-foreground backdrop-blur-md shadow-xl transition-all hover:bg-white hover:-translate-y-2"
                >
                  Get the App
                </Link>
              </div>
            </div>

            <div className="relative h-[600px] w-full hidden lg:block animate-float">
              <Image
                src="/images/11.png"
                alt="HiKids Education"
                fill
                className="object-contain drop-shadow-3xl scale-125 translate-x-10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
