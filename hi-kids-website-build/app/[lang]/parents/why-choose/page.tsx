import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Shield,
  Heart,
  Users,
  GraduationCap,
  Globe,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Why Choose HiKids | Trust & Excellence",
};

export default async function WhyChoosePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.whyChoose;

  const icons = [BookOpen, Shield, Heart, Users, GraduationCap, Globe];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-yellow/20 pb-24 lg:pb-32">

      {/* ─── CREATIVE HEADER (No Hero) ─── */}
      <section className="py-4 lg:py-8 bg-white relative overflow-visible">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-slate-100 pb-12 mb-12">
            {/* peeking mascot */}
            <MotionWrapper type="scale" className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 -mb-16 lg:-mb-24 z-10">
              <Image src="/images/valentines1.png" alt="Moka" fill className="object-contain drop-shadow-2xl" />
            </MotionWrapper>

            <div className="flex-1 text-center lg:text-left pt-8">
              <MotionWrapper direction="right">
                {/* Tag Removed */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-fredoka font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
                  {t.heroTitle1} <span className="text-white text-6xl lg:text-8xl xl:text-[7rem] ml-2 inline-block transition-transform hover:scale-105 duration-300"
                    style={{
                      WebkitTextStroke: "12px #00AEEF",
                      paintOrder: "stroke fill",
                      filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.1))"
                    }}>
                    {t.heroTitle2}
                  </span>
                </h1>
              </MotionWrapper>
            </div>
          </div>

          <p className="text-lg lg:text-3xl text-slate-700 leading-relaxed font-medium mb-16 text-center mx-auto max-w-4xl">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* ─── REASONS GRID ─── */}
      <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16 relative z-10 w-full">
          <MotionContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.sections.map((section: { title: string; description: string }, i: number) => {
              const Icon = icons[i];
              return (
                <MotionItem
                  key={section.title}
                  className="group relative rounded-[3rem] bg-[#faf8c3] p-10 lg:p-14 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-[#faf8c3] overflow-hidden flex flex-col items-center text-center"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border border-yellow-100 text-hikids-yellow group-hover:bg-[#FFEB00] group-hover:text-slate-900 transition-all duration-500 group-hover:scale-110">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-fredoka font-bold text-slate-900 mb-6 group-hover:text-hikids-blue transition-colors leading-tight">
                    {section.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">
                    {section.description}
                  </p>
                </MotionItem>
              );
            })}
          </MotionContainer>
        </div>
      </section>

    </div>
  );
}
