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
      {/* Hero - Inspiring & Professional */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block translate-x-1/4">
            <Image src="/images/Whisk_ba46783577f5efb8588459e8166e51a2dr.png" alt="" width={600} height={600} className="object-contain" />
          </div>
          <div className="absolute left-[5%] top-40 h-80 w-80 bg-secondary/10 rounded-full blur-[120px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/50 px-5 py-2 text-sm font-black text-primary shadow-soft backdrop-blur-md uppercase tracking-widest">
              <GraduationCap className="h-4 w-4" />
              Empowering the Next Generation
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

      {/* Pathways */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute left-10 bottom-20 opacity-10 hidden xl:block -rotate-12 animate-float-slow">
          <Image src="/images/2.png" alt="" width={400} height={400} />
        </div>

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <SectionHeader
            title="Your Professional Journey"
            subtitle="Access the tools, methods, and certifications you need to excel as a HiKids educator."
          />

          <div className="mt-24 grid gap-10 md:grid-cols-3">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <div key={feature.title} className="group relative">
                  <CtaCard
                    title={feature.title}
                    description={feature.description}
                    href={hrefs[i]}
                    cta={feature.cta}
                    icon={<Icon className="h-8 w-8" />}
                    variant={i === 1 ? "accent" : i === 2 ? "secondary" : "default"}
                    className="h-full p-12 hover:-translate-y-3 transition-transform duration-500"
                  />
                  {/* Decorative number */}
                  <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-white shadow-xl border border-border flex items-center justify-center text-lg font-black text-muted-foreground/30 group-hover:text-primary transition-colors">
                    0{i + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-32 lg:py-48 relative overflow-hidden bg-secondary/10">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,hsl(var(--secondary))_0%,transparent_50%)]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 lg:px-8 relative z-10">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div className="relative h-[450px] w-full hidden lg:block animate-scale-in">
              <Image
                src="/images/Whisk_998be7f5470b4334f59ae78964d88e0bdr.png"
                alt="Certification"
                fill
                className="object-contain drop-shadow-3xl translate-x-[-10%]"
              />
            </div>

            <div className="text-left z-10 animate-fade-in-up">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-sm font-black text-secondary uppercase tracking-widest">
                <Award className="h-4 w-4" />
                Join the Elite
              </div>
              <h2 className="text-5xl font-black text-foreground md:text-7xl mb-10 tracking-tight leading-[1.1]">
                Elevate Your Early Education Practice
              </h2>
              <p className="mt-10 text-2xl text-muted-foreground leading-relaxed font-medium">
                Access free resources, learn proven methods, and earn your HiKids certification to become a global leader in early education.
              </p>
              <div className="mt-12">
                <Link
                  href={`/${lang}/educators/certification`}
                  className="group inline-flex items-center gap-5 rounded-[2rem] bg-secondary px-12 py-7 text-2xl font-black text-secondary-foreground shadow-2xl shadow-secondary/20 transition-all hover:bg-secondary/90 hover:-translate-y-2 hover:shadow-secondary/40"
                >
                  Get Certified
                  <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
