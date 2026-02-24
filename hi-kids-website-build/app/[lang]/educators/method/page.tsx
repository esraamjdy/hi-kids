import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, BookOpen } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Teaching Method | HiKids Global",
};

export default async function MethodPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.method;

  const sectionColors = [
    "border-primary/20 bg-primary/5 shadow-primary/5",
    "border-secondary/20 bg-secondary/5 shadow-secondary/5",
    "border-accent/30 bg-accent/5 shadow-accent/5",
    "border-hikids-green/20 bg-hikids-green/5 shadow-hikids-green/5",
  ];

  return (
    <>
      {/* Hero - Pedagogical & Premium */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-primary/20 via-background to-background pt-20">
        {/* Layered Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block -translate-x-1/4">
            <Image src="/images/5.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute right-[10%] top-20 h-64 w-64 bg-accent/10 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/50 px-5 py-2 text-sm font-black text-primary shadow-soft backdrop-blur-md uppercase tracking-widest">
              <Sparkles className="h-4 w-4 fill-current text-accent" />
              World-Class Pedagogical Framework
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

      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
        {/* Floating mascot */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 hidden xl:block translate-x-1/4 animate-float-slow">
          <Image src="/images/Whisk_998be7f5470b4334f59ae78964d88e0bdr.png" alt="" width={550} height={550} />
        </div>

        <div className="mx-auto max-w-4xl px-4 lg:px-8 relative z-10">
          <div className="mb-24 animate-fade-in-up">
            <p className="text-3xl font-medium text-muted-foreground leading-relaxed text-center text-pretty">
              {t.overview}
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {t.sections.map((section, i) => (
              <div
                key={section.title}
                className={`group relative rounded-[3rem] border p-12 lg:p-16 transition-all hover:shadow-3xl hover:-translate-y-2 duration-500 shadow-soft overflow-hidden ${sectionColors[i]}`}
              >
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BookOpen className="h-32 w-32" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-10 mb-10">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[2rem] bg-white shadow-xl shadow-black/5 text-3xl font-black text-foreground group-hover:scale-110 transition-transform duration-500">
                    {i + 1}
                  </div>
                  <h2 className="text-4xl font-black text-foreground tracking-tight">
                    {section.title}
                  </h2>
                </div>

                <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                  {section.description}
                </p>

                <div className="mt-12 h-2 w-32 rounded-full bg-foreground/10 group-hover:w-full transition-all duration-1000" />
              </div>
            ))}
          </div>

          <WaveDivider color="hsl(var(--primary))" className="mt-32" />

          {/* Final CTA Banner */}
          <div className="mt-0 group relative overflow-hidden rounded-[4rem] bg-primary p-12 lg:p-20 text-center shadow-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/20_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white md:text-6xl mb-10">
                Ready to Transform <br /> Early Education?
              </h2>
              <Link
                href={`/${lang}/educators/certification`}
                className="inline-flex items-center gap-4 rounded-[2rem] bg-white px-12 py-7 text-2xl font-black text-primary shadow-2xl transition-all hover:bg-white/95 hover:-translate-y-2"
              >
                Get Certified Today
                <ArrowRight className="h-8 w-8" />
              </Link>
            </div>

            {/* Tiny Mascot Decoration */}
            <div className="absolute -bottom-10 -right-10 opacity-20">
              <Image src="/images/7.png" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
