import type { Metadata } from "next";
import { FileText, Download, Sparkles, BookOpen, Clock, Tag } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { WaveDivider } from "@/components/wave-divider";

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
      <section className="bg-primary relative min-h-[50vh] flex items-center overflow-hidden pt-28 pb-32 lg:pb-48 py-32 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-kids-pattern mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 drop-shadow-sm hidden lg:block -translate-x-1/4">
            <Image src="/images/Whisk_ba46783577f5efb8588459e8166e51a2dr.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute right-[5%] top-20 h-64 w-64 bg-[var(--hikids-yellow)]/20 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-[1200px] w-full animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-white shadow-soft backdrop-blur-md uppercase tracking-widest">
              <BookOpen className="h-4 w-4 text-white" />
              Educator Resource Hub
            </div>
            <h1 className="font-bold tracking-tight text-white text-balance leading-[1.1]">
              {t.title}
            </h1>
            <p className="mt-10  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-white/90 font-normal leading-relaxed text-pretty max-w-[1200px] w-full mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* Materials Grid */}
      <section className=" py-32 lg:py-48 bg-white relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="absolute right-10 bottom-20 opacity-20 drop-shadow-sm rotate-12 hidden xl:block animate-float-slow">
          <Image src="/images/2.png" alt="" width={350} height={350} className="grayscale" />
        </div>

        <div className="mx-auto max-w-[1700px] px-4 lg:px-8 relative z-10">
          <div className="grid gap-20 lg:gap-24 lg:gap-20 xl:gap-32 lg:gap-20 xl:gap-32 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
            {t.items.map((item: { title: string; type: string; description: string }, i: number) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-[2.5rem] bg-[#fafafa] p-14 lg:p-20 lg:p-16 transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] hover:-translate-y-4 lg:hover:-translate-y-6 overflow-hidden ring-1 ring-black/[0.03] hover:ring-primary/30 hover:bg-white"
              >
                <div className="absolute top-0 right-0 p-14 lg:p-20 lg:p-14 opacity-0 group-hover:opacity-5 transition-opacity duration-700 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-primary">
                  <FileText className="h-32 w-32" />
                </div>

                <div className="mb-10 flex items-center justify-between relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-white shadow-sm border border-slate-100 text-slate-300 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:scale-110">
                    <FileText className="h-8 w-8" strokeWidth={2.5} />
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-700 shadow-sm border border-slate-100 group-hover:border-primary/20 transition-colors">
                    <Tag className="h-3 w-3 text-primary" />
                    {item.type}
                  </div>
                </div>

                <h3 className="mb-4 font-bold text-slate-900 group-hover:text-primary tracking-tight transition-colors">
                  {item.title}
                </h3>

                <p className="mb-10 flex-1  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100 relative z-10">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <Clock className="h-3.5 w-3.5" />
                    PDF • 2.4 MB
                  </div>
                  <button
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-white hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className=" py-32 lg:py-48 relative overflow-hidden bg-slate-900 m-4 lg:m-8 rounded-[3rem] lg:rounded-[4rem] min-h-[95vh] flex flex-col justify-center">
        {/* Soft internal glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hikids-blue/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--hikids-yellow)]/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="mx-auto max-w-[1400px] px-4 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[var(--hikids-yellow)] mb-12 backdrop-blur-md">
              <Sparkles className="h-10 w-10" />
            </div>
            <h2 className="font-bold text-white  mb-12 tracking-tight leading-[1.1]">
              Need More Resources?
            </h2>
            <p className="mx-auto max-w-2xl  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-slate-300 leading-relaxed font-normal mb-16">
              Our HiKids Certified Educators get access to our full digital library, including interactive lesson plans and assessment tools.
            </p>
            <Link
              href={`/${lang}/educators/certification`}
              className="inline-flex items-center gap-5 rounded-full bg-[var(--hikids-yellow)] px-12 py-7  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-white shadow-[0_20px_40px_-10px_rgba(254,216,0,0.3)] transition-all hover:bg-[#eab308] hover:scale-105"
            >
              Get Certified
              <Download className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Decorative Mascot */}
        <div className="absolute bottom-[-10%] left-[-5%] opacity-[0.05] hidden xl:block pointer-events-none grayscale">
          <Image src="/images/Whisk_998be7f5470b4334f59ae78964d88e0bdr.png" alt="" width={550} height={550} />
        </div>
      </section>
    </>
  );
}
