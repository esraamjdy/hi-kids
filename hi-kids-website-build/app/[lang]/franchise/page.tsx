import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Award,
  Settings,
  Globe,
  ArrowRight,
  FileText,
  HelpCircle,
  Star,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";
import { FloatingCharacter } from "@/components/floating-character";

export const metadata: Metadata = {
  title: "Franchise Opportunity | HiKids Global",
};

export default async function FranchisePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.franchise;

  return (
    <>
      {/* Hero - Business Focused yet Playful */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-primary/20 via-background to-background pt-20">
        {/* Floating Characters */}
        <FloatingCharacter type="bubble" position="top-right" delay={0.2} opacity={0.3} scale={0.9} />
        <FloatingCharacter type="star" position="bottom-left" delay={0.8} opacity={0.25} scale={0.8} />

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-20 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px]" />

          {/* Decorative Mascot */}
          <div className="absolute -right-20 bottom-20 hidden xl:block opacity-20 rotate-[-15deg] animate-float-slow">
            <Image src="/images/8.png" alt="" width={600} height={600} className="object-contain" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 lg:px-8 z-10 w-full">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="text-left animate-fade-in-up">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/50 px-5 py-2 text-sm font-black text-primary shadow-soft backdrop-blur-md uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4" />
                Partner with the Leaders
              </div>

              <h1 className="text-5xl font-black tracking-tight text-foreground md:text-6xl lg:text-8xl text-balance leading-[1.1]">
                {t.landing.title.split(' ').map((word, i) => (
                  <span key={i} className={i >= 2 ? "text-primary" : ""}>{word} </span>
                ))}
              </h1>

              <p className="mt-10 text-2xl text-muted-foreground leading-relaxed text-pretty font-medium max-w-xl">
                {t.landing.subtitle}
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link
                  href={`/${lang}/franchise/inquiry`}
                  className="group inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 text-xl font-black text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:bg-primary/90 hover:-translate-y-1 hover:shadow-primary/40"
                >
                  {t.landing.cta}
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/${lang}/franchise/why-join`}
                  className="inline-flex items-center gap-3 rounded-2xl border-2 border-border bg-white px-10 py-5 text-xl font-black text-foreground shadow-soft transition-all hover:border-primary/30 hover:bg-muted hover:-translate-y-1"
                >
                  View Benefits
                </Link>
              </div>
            </div>

            {/* Stats Cluster */}
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {t.landing.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group relative rounded-[2.5rem] border border-border/50 bg-white p-10 text-center transition-all hover:shadow-3xl hover:-translate-y-2 duration-500 shadow-soft overflow-hidden ${i % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary opacity-20" />
                  <p className="text-5xl font-black text-primary group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(var(--muted))" />

      {/* Quick Links / Pathways */}
      <section className="bg-muted py-24 lg:py-40 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute left-[5%] top-[10%] w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute right-[5%] bottom-[10%] w-96 h-96 bg-secondary rounded-full blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <SectionHeader
            title="Franchise Ecosystem"
            subtitle="Explore our comprehensive support system and resources designed for your success."
          />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: `/${lang}/franchise/why-join`,
                icon: TrendingUp,
                title: dict.common.nav.franchiseItems.whyJoin,
                desc: "Discover the market opportunity and competitive advantages of HiKids.",
                color: "bg-primary",
                mascot: "/images/1.png"
              },
              {
                href: `/${lang}/franchise/what-you-get`,
                icon: Award,
                title: dict.common.nav.franchiseItems.whatYouGet,
                desc: "Explore the complete package of tools, training, and support resources.",
                color: "bg-secondary",
                mascot: "/images/7.png"
              },
              {
                href: `/${lang}/franchise/model`,
                icon: Settings,
                title: dict.common.nav.franchiseItems.model,
                desc: "Learn about our proven operational model and path to opening.",
                color: "bg-accent",
                mascot: "/images/4.png"
              },
              {
                href: `/${lang}/franchise/inquiry`,
                icon: HelpCircle,
                title: dict.common.nav.franchiseItems.inquiry,
                desc: "Start your journey today with a direct inquiry to our expansion team.",
                color: "bg-primary",
                mascot: "/images/3.png"
              },
              {
                href: `/${lang}/franchise/brochure`,
                icon: FileText,
                title: dict.common.nav.franchiseItems.brochure,
                desc: "Receive our detailed investment guide and global brand brochure.",
                color: "bg-secondary",
                mascot: "/images/6.png"
              },
            ].map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-[3rem] bg-white p-12 transition-all hover:shadow-3xl hover:-translate-y-3 duration-500 border border-border/50 shadow-soft flex flex-col items-start overflow-hidden"
              >
                <div className={`mb-10 flex h-20 w-20 items-center justify-center rounded-3xl ${item.color} text-white shadow-xl shadow-black/5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="mb-6 text-3xl font-black text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mb-10 text-xl text-muted-foreground leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="mt-auto flex items-center gap-4 text-xl font-black text-primary group-hover:translate-x-2 transition-transform">
                  {dict.common.cta.learnMore}
                  <ArrowRight className="h-6 w-6" />
                </div>

                {/* Decorative Mascot */}
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Image src={item.mascot} alt="" width={150} height={150} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="hsl(var(--background))" flip />

      {/* CTA / Final Banner */}
      <section className="py-32 lg:py-48 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div className="z-10 text-left animate-fade-in-up">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-black text-primary uppercase tracking-widest">
                <Sparkles className="h-4 w-4 fill-current" />
                Your Future Starts Here
              </div>
              <h2 className="text-5xl font-black text-foreground md:text-7xl text-balance tracking-tight leading-[1.1]">
                Ready to Shape the Future of Learning?
              </h2>
              <p className="mt-10 text-2xl text-muted-foreground leading-relaxed font-medium max-w-xl">
                Join our global family of educators and entrepreneurs dedicated to making a difference one kindergarten at a time.
              </p>
              <div className="mt-12">
                <Link
                  href={`/${lang}/franchise/inquiry`}
                  className="group inline-flex items-center gap-5 rounded-[2rem] bg-primary px-12 py-7 text-2xl font-black text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:bg-primary/90 hover:-translate-y-2 hover:shadow-primary/40"
                >
                  {dict.common.cta.applyNow}
                  <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative h-[650px] w-full hidden lg:block animate-in fade-in slide-in-from-right-20 duration-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-[100px] -z-10" />
              <Image
                src="/images/Whisk_8e64716474fbda31eeaf47306236688bdr.png"
                alt="Franchise Success"
                fill
                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
