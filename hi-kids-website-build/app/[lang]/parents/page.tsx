import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Layers, Heart, Smartphone, ArrowRight, Sparkles } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CtaCard } from "@/components/cta-card";

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-accent pt-20">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.05] pointer-events-none">
          <Image src="/images/patterns.png" alt="" fill className="object-cover" />
        </div>

        <div className="relative container-wide z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8 animate-fadeUp">
              <div className="space-y-6">
                <p className="text-sm tracking-widest uppercase font-semibold text-primary/70">
                  For Parents & Families
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
                  href={`/${lang}/parents/find-kindergarten`}
                  className="btn-primary bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  Find a Center
                  <MapPin className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={`/${lang}/parents/why-choose`}
                  className="btn-outline border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block animate-slideInRight">
              <div className="relative h-[500px]">
                <Image
                  src="/images/7.png"
                  alt="Happy families with HiKids"
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
              Discover
            </p>
            <h2 className="heading-secondary mb-8">Everything You Need</h2>
            <p className="text-body max-w-2xl mx-auto">
              Support your child's journey with resources, guidance, and a community of parents
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <Link
                  key={feature.title}
                  href={hrefs[i]}
                  className="feature-card group p-10 hover:shadow-lg-soft"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl ${i % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'}`}>
                      <Icon className={`h-8 w-8 ${i % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-tertiary mb-2">{feature.title}</h3>
                      <p className="text-body mb-4">{feature.description}</p>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        {feature.cta}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-white section-spacing">
        <div className="container-wide">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-12 md:p-16 lg:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                <Heart className="h-4 w-4 text-accent fill-current" />
                Find Your Perfect Match
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Child Deserves the Best Start
              </h2>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
                Find a HiKids center near you and discover the difference our progressive learning approach makes.
              </p>

              <Link
                href={`/${lang}/parents/find-kindergarten`}
                className="btn-primary bg-white text-primary hover:bg-white/90"
              >
                Find a Center Near You
                <MapPin className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
