import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, BookOpen, Award, ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CtaCard } from "@/components/cta-card";

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary pt-20">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.05] pointer-events-none">
          <Image src="/images/patterns.png" alt="" fill className="object-cover" />
        </div>

        <div className="relative container-wide z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8 animate-fadeUp">
              <div className="space-y-6">
                <p className="text-sm tracking-widest uppercase font-semibold text-white/70">
                  For Educators & Institutions
                </p>

                <h1 className="heading-primary text-white">
                  {t.title}
                </h1>

                <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                  {t.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href={`/${lang}/educators/materials`}
                  className="btn-primary bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  Explore Resources
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={`/${lang}/educators/certification`}
                  className="btn-outline border-white text-white hover:bg-white/10"
                >
                  Get Certified
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block animate-slideInRight">
              <div className="relative h-[500px]">
                <Image
                  src="/images/educators.png"
                  alt="Educators with HiKids"
                  fill
                  className="object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-white section-spacing">
        <div className="container-wide">
          <div className="text-center mb-20 animate-fadeUp">
            <p className="text-sm tracking-widest uppercase font-semibold text-primary/70 mb-4">
              Professional Development
            </p>
            <h2 className="heading-secondary mb-8">Your Professional Journey</h2>
            <p className="text-body max-w-2xl mx-auto">
              Access the tools, methods, and certifications you need to excel as a HiKids educator
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              const colorVariants = [
                { bg: "bg-primary/10", text: "text-primary" },
                { bg: "bg-accent/10", text: "text-accent" },
                { bg: "bg-secondary/10", text: "text-secondary" },
              ];
              const variant = colorVariants[i % colorVariants.length];
              
              return (
                <Link
                  key={feature.title}
                  href={hrefs[i]}
                  className="feature-card"
                >
                  <div className={`p-4 rounded-2xl ${variant.bg} mb-6 inline-block`}>
                    <Icon className={`h-8 w-8 ${variant.text}`} />
                  </div>
                  <h3 className="heading-tertiary mb-3">{feature.title}</h3>
                  <p className="text-body mb-6">{feature.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    {feature.cta}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
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
