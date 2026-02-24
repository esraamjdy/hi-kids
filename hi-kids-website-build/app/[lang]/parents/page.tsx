import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Layers, Heart, Smartphone, ArrowRight, Sparkles } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CtaCard } from "@/components/cta-card";
import { WaveDivider } from "@/components/wave-divider";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "A Bright Future for Your Child | HiKids Parents",
};

export default async function ParentsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.landing;

  const icons = [MapPin, Layers, Heart, Smartphone];
  const hrefs = [
    `/${lang}/parents/find-kindergarten`,
    `/${lang}/parents/learning-levels`,
    `/${lang}/parents/why-choose`,
    `/${lang}/parents/app`,
  ];

  return (
    <>
      {/* Hero - Warm & Emotional */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-b from-accent/20 via-background to-background pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block translate-x-1/4">
            <Image src="/images/7.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute left-[5%] bottom-[15%] h-64 w-64 bg-primary/10 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 lg:px-8 z-10 w-full">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="text-left animate-fade-in-up">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-white/50 px-5 py-2 text-sm font-black text-foreground shadow-soft backdrop-blur-md uppercase tracking-widest">
                <Heart className="h-4 w-4 text-hikids-yellow fill-current" />
                Trusted by Families Worldwide
              </div>
              <h1 className="text-5xl font-black tracking-tight text-foreground md:text-6xl lg:text-8xl text-balance leading-[1.1]">
                {t.title}
              </h1>
              <p className="mt-10 text-2xl text-muted-foreground font-medium leading-relaxed text-pretty max-w-xl">
                {t.subtitle}
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href={`/${lang}/parents/find-kindergarten`}
                  className="inline-flex items-center gap-3 rounded-[2rem] bg-primary px-10 py-5 text-lg font-black text-white shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all"
                >
                  Find a Center
                  <MapPin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative h-[600px] hidden lg:block animate-scale-in">
              <Image
                src="/images/8.png"
                alt="HiKids for Parents"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Paths */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute -left-10 bottom-20 opacity-10 rotate-12 hidden xl:block animate-float-slow">
          <Image src="/images/4.png" alt="" width={350} height={350} />
        </div>

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <SectionHeader
            title="Explore Your Options"
            subtitle="Everything you need to support your child's journey at HiKids."
          />

          <div className="mt-24 grid gap-10 md:grid-cols-2">
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
                    variant={i % 2 === 0 ? "accent" : "default"}
                    className="h-full p-12 hover:-translate-y-2 transition-all duration-500 shadow-soft"
                  />
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="h-24 w-24" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-32 lg:py-48 relative overflow-hidden bg-accent/20">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,white_0%,transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 text-center lg:px-8 relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-10 inline-flex h-24 w-24 items-center justify-center rounded-[3rem] bg-white shadow-2xl scale-125">
              <Sparkles className="h-10 w-10 text-hikids-yellow fill-current" />
            </div>
            <h2 className="text-5xl font-black text-foreground md:text-7xl mb-12 tracking-tight leading-[1.1]">
              Your Child Deserves the Best Start
            </h2>
            <p className="mx-auto max-w-2xl text-2xl text-muted-foreground leading-relaxed font-medium mb-16">
              Find a HiKids kindergarten near you and see the difference our progressive learning approach makes.
            </p>
            <Link
              href={`/${lang}/parents/find-kindergarten`}
              className="inline-flex items-center gap-5 rounded-[2rem] bg-foreground px-12 py-7 text-2xl font-black text-background shadow-2xl transition-all hover:bg-foreground/90 hover:-translate-y-2 hover:shadow-black/20"
            >
              Get Started Today
              <ArrowRight className="h-8 w-8" />
            </Link>
          </div>

          {/* Decorative Mascot */}
          <div className="absolute bottom-0 right-[-10%] opacity-15 hidden xl:block animate-float">
            <Image src="/images/Whisk_61d9a24bbad8193df45fec5f308801d0dr.png" alt="" width={450} height={450} />
          </div>
        </div>
      </section>
    </>
  );
}
