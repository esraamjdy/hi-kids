import type { Metadata } from "next";
import { Download, ArrowRight, Layers, Layout, ClipboardList } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MotionWrapper, MotionItem } from "@/components/motion-wrapper";

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

  const itemIcons = [Layers, Layout, ClipboardList];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-yellow/20 pt-16 lg:pt-24 pb-32 lg:pb-48">

      {/* ─── CREATIVE HEADER ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-visible">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-[#ffde00]/20 pb-12 mb-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffde00]/5 rounded-full blur-[100px] -z-10" />
            <MotionWrapper type="scale" className="relative w-48 h-48 lg:w-64 lg:h-64 -mb-16 lg:-mb-24 z-10">
              <Image src="/images/Moka-Dance.png" alt="Moka" fill className="object-contain drop-" />
            </MotionWrapper>

            <div className="flex-1 text-center lg:text-left pt-8">
              <MotionWrapper direction="right">
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
                  {t.heroTitle1} <span className="text-[#ffde00] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "12px #00AEEF",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 8px 0 rgba(255, 222, 0, 0.3))"
                    }}>
                    {t.heroTitle2}
                  </span>
                </h1>
              </MotionWrapper>
            </div>
          </div>

          <p className="text-lg lg:text-3xl text-slate-900 leading-relaxed font-medium mb-16 text-center mx-auto max-w-4xl italic opacity-80 text-pretty">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* ─── MATERIALS GRID ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-hidden mb-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ffde00]/5 rounded-full blur-[120px] -z-10" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {t.items.map((item: { title: string; type: string; description: string }, i: number) => {
              const Icon = itemIcons[i % 3];
              return (
                <MotionItem
                  key={item.title}
                  className="group relative rounded-[3rem] bg-[#ffde00] p-10 lg:p-14 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col active:scale-[0.98]"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/40 transition-colors" />

                  <div className="mb-8 flex items-center justify-between relative z-10">
                    <div className="w-16 h-16 rounded-[1.8rem] bg-slate-900 flex items-center justify-center text-[#ffde00] group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-3">
                      <Icon size={32} />
                    </div>
                    <div className="px-5 py-2 rounded-full bg-white/40 text-[10px] font-black uppercase tracking-widest text-slate-800 border border-slate-900/5 group-hover:bg-white/60 transition-all">
                      {item.type}
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-fredoka font-bold text-slate-900 mb-6 group-hover:text-slate-800 transition-colors leading-[1.15] relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-slate-800 leading-relaxed font-medium mb-12 flex-1 opacity-90 text-pretty relative z-10">
                    {item.description}
                  </p>

                  <div className="pt-8 border-t border-slate-900/10 flex items-center justify-between mt-auto relative z-10">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">{t.standardAccess}</span>
                      <span className="text-slate-700 text-sm font-bold">{t.fileMeta}</span>
                    </div>
                    <button className="flex items-center gap-3 px-8 py-4 rounded-[1.8rem] bg-slate-900 text-white font-black text-sm hover:bg-white hover:text-slate-900 transition-all hover:scale-105">
                      <Download size={18} />
                      {t.getFile}
                    </button>
                  </div>
                </MotionItem>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
