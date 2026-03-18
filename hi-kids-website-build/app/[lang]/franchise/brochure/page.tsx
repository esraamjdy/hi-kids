import type { Metadata } from "next";
import { FileDown, FileText } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Download Brochure",
};

export default async function BrochurePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.brochure;

  return (
    <>
      <section className="bg-accent relative overflow-hidden pt-28 pb-32 lg:pb-48 min-h-[95vh] flex flex-col justify-center py-32 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-kids-pattern mix-blend-overlay pointer-events-none" />
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <div className="mx-auto max-w-[1200px] w-full text-center">
            <h1 className="font-bold tracking-tight text-white text-balance leading-tight">
              {t.title}
            </h1>
            <p className="mt-8  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-white/90 leading-relaxed text-pretty">
              {t.subtitle}
            </p>
          </div>
        </div>
        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      <section className=" py-32 lg:py-48 bg-white min-h-[95vh] flex flex-col justify-center">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-20 xl:gap-32 lg:gap-20 rounded-[3rem] border border-slate-100 bg-[#fafafa] p-14 lg:p-20 lg:p-16 text-center shadow-sm">
            <div className="flex h-24 w-24 items-center justify-center rounded-[3rem] lg:rounded-[4rem] bg-white shadow-md text-primary">
              <FileText className="h-12 w-12" />
            </div>

            <p className=" text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-slate-600 leading-relaxed max-w-md">
              {t.description}
            </p>

            <a
              href="/downloads/hikids-franchise-brochure.pdf"
              download
              className="group inline-flex items-center gap-5 rounded-full bg-primary px-12 py-6  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-white shadow-[0_20px_40px_-10px_rgba(254,216,0,0.3)] transition-all hover:bg-primary/90 hover:-translate-y-1 hover:scale-105"
            >
              <FileDown className="h-6 w-6" />
              {t.cta}
            </a>

            <p className=" text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-slate-400 font-medium italic">{t.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
