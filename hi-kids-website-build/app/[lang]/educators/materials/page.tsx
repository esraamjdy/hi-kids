import type { Metadata } from "next";
import { FileText, Download, Sparkles, BookOpen, Clock, Tag } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Free Educational Materials | HiKids Educator Resources",
};

export default async function MaterialsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.materials;

  return (
    <>
      {/* Hero - Resource Library */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-b from-secondary/10 via-background to-background pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block -translate-x-1/4">
            <Image src="/images/Whisk_ba46783577f5efb8588459e8166e51a2dr.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute right-[5%] top-20 h-64 w-64 bg-secondary/5 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-secondary/20 bg-white/50 px-5 py-2 text-sm font-black text-secondary shadow-soft backdrop-blur-md uppercase tracking-widest">
              <BookOpen className="h-4 w-4" />
              Educator Resource Hub
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

      {/* Materials Grid */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute right-10 bottom-20 opacity-10 rotate-12 hidden xl:block animate-float-slow">
          <Image src="/images/2.png" alt="" width={350} height={350} />
        </div>

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {t.items.map((item: { title: string; type: string; description: string }, i: number) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-[3rem] border border-border/50 bg-white p-10 transition-all hover:shadow-3xl hover:-translate-y-2 duration-500 shadow-soft overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FileText className="h-24 w-24" />
                </div>

                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-soft">
                    <FileText className="h-7 w-7" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-black uppercase tracking-widest text-muted-foreground border border-transparent group-hover:border-border transition-colors">
                    <Tag className="h-3 w-3" />
                    {item.type}
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-black text-foreground group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>

                <p className="mb-10 flex-1 text-lg text-muted-foreground leading-relaxed font-medium">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-8 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                    <Clock className="h-3 w-3" />
                    PDF • 2.4 MB
                  </div>
                  <button
                    className="inline-flex items-center gap-3 rounded-2xl bg-secondary px-8 py-4 text-sm font-black text-white shadow-xl shadow-secondary/10 transition-all hover:bg-secondary/90 hover:-translate-y-1"
                  >
                    <Download className="h-5 w-5" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-32 lg:py-48 relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-secondary mb-12 shadow-2xl animate-float">
              <Sparkles className="h-10 w-10 fill-current" />
            </div>
            <h2 className="text-5xl font-black text-white md:text-7xl mb-12 tracking-tight leading-[1.1]">
              Need More Resources?
            </h2>
            <p className="mx-auto max-w-2xl text-2xl text-white/80 leading-relaxed font-medium mb-16">
              Our HiKids Certified Educators get access to our full digital library, including interactive lesson plans and assessment tools.
            </p>
            <Link
              href={`/${lang}/educators/certification`}
              className="inline-flex items-center gap-5 rounded-[2rem] bg-white px-12 py-7 text-2xl font-black text-secondary shadow-2xl transition-all hover:bg-white/95 hover:-translate-y-2"
            >
              Get Certified
              <Download className="h-8 w-8" />
            </Link>
          </div>
        </div>

        {/* Decorative Mascot */}
        <div className="absolute bottom-0 left-[-10%] opacity-20 hidden xl:block animate-float-slow">
          <Image src="/images/Whisk_998be7f5470b4334f59ae78964d88e0bdr.png" alt="" width={450} height={450} />
        </div>
      </section>
    </>
  );
}
