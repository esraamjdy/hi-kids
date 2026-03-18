import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { FranchiseInquiryForm } from "./inquiry-form";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Franchise Inquiry",
};

export default async function InquiryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise.inquiry;

  return (
    <>
      <section className="bg-accent relative min-h-[50vh] flex items-center overflow-hidden pt-28 pb-32 lg:pb-48 py-32 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-kids-pattern mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute right-[10%] top-20 h-[400px] w-[400px] bg-[var(--hikids-blue)]/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 drop-shadow-sm hidden lg:block -translate-x-1/4 grayscale">
            <img src="/images/4.png" alt="" width={500} height={500} className="object-contain" />
          </div>
        </div>

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10 w-full text-center">
          <div className="mx-auto max-w-[1200px] w-full animate-fade-in-up">
            <h1 className="font-bold tracking-tight text-white text-balance leading-[1.1]">
              {t.title}
            </h1>
            <p className="mt-8  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-white/90 font-normal leading-relaxed text-pretty max-w-[1200px] w-full mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      <section className=" py-32 lg:py-48 relative overflow-hidden bg-white min-h-[95vh] flex flex-col justify-center">
        {/* Floating Grayscale Mascot */}
        <div className="absolute -right-10 bottom-20 opacity-20 drop-shadow-sm rotate-12 hidden xl:block animate-float-slow grayscale">
          <img src="/images/8.png" alt="" width={400} height={400} />
        </div>

        <div className="mx-auto max-w-[1200px] w-full px-4 lg:px-8 relative z-10">
          <div className="bg-white p-14 lg:p-20 lg:p-16 md:p-14 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(75,184,233,0.1)] ring-1 ring-slate-100">
            <FranchiseInquiryForm dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
