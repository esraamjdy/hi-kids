import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles,
  Download,
  ShieldCheck,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Stay Connected with HiKids App",
};

export default async function AppPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.app;

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block -translate-x-1/4">
            <Image src="/images/1.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute right-[10%] top-40 h-[500px] w-[500px] bg-primary/5 rounded-full blur-[120px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 lg:px-8 z-10 w-full">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Content */}
            <div className="text-left animate-fade-in-up">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/50 px-5 py-2 text-sm font-black text-primary shadow-soft backdrop-blur-md uppercase tracking-widest">
                <Smartphone className="h-4 w-4" />
                The Parent Companion
              </div>
              <h1 className="text-5xl font-black tracking-tight text-foreground md:text-6xl lg:text-8xl text-balance leading-[1.1]">
                {t.title}
              </h1>
              <p className="mt-10 text-2xl text-muted-foreground font-medium leading-relaxed text-pretty max-w-2xl">
                {t.subtitle}
              </p>
              <p className="mt-8 text-xl text-muted-foreground/80 leading-relaxed font-medium">
                {t.description}
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {t.features.map((feature: string) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 p-5 rounded-[2rem] bg-white border border-white/80 shadow-soft hover:shadow-xl hover:translate-x-1 transition-all duration-300"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-bold text-foreground leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* App preview */}
            <div className="flex items-center justify-center relative scale-110 lg:scale-125">
              <div className="absolute -top-10 right-0 hidden xl:block opacity-20 animate-float translate-x-20">
                <Image src="/images/Whisk_61d9a24bbad8193df45fec5f308801d0dr.png" alt="" width={300} height={300} />
              </div>

              <div className="relative group animate-scale-in">
                {/* Premium Phone Frame */}
                <div className="relative mx-auto h-[650px] w-[320px] rounded-[4rem] border-[14px] border-foreground bg-foreground p-3 shadow-[0_40px_100px_rgba(0,0,0,0.2)] ring-1 ring-white/20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-foreground rounded-b-3xl z-30" />

                  <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10">
                      <div className="flex h-32 w-32 items-center justify-center rounded-[2.5rem] bg-white shadow-2xl animate-float">
                        <Image src="/images/logo.png" alt="HiKids" width={80} height={80} className="object-contain" />
                      </div>
                      <p className="mt-8 text-3xl font-black text-foreground tracking-tight">
                        HiKids
                      </p>
                      <p className="mt-3 text-sm font-black text-primary uppercase tracking-[0.3em]">
                        Companion
                      </p>

                      {/* Mock interactions */}
                      <div className="mt-12 w-full px-6 space-y-4">
                        <div className="h-12 w-full rounded-2xl bg-primary/10 flex items-center px-4 gap-3">
                          <div className="h-6 w-6 rounded-full bg-primary" />
                          <div className="h-2 w-24 rounded-full bg-primary/20" />
                        </div>
                        <div className="h-12 w-full rounded-2xl bg-secondary/10 flex items-center px-4 gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary" />
                          <div className="h-2 w-32 rounded-full bg-secondary/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification */}
                <div className="absolute -right-20 top-1/4 rounded-[2rem] bg-white p-6 shadow-3xl border border-border animate-float-slow duration-[5000ms] hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-hikids-yellow flex items-center justify-center text-white">
                      <Star className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                      <p className="font-black text-foreground">Activity Update</p>
                      <p className="text-sm text-muted-foreground font-medium">New photos uploaded!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-white py-24 lg:py-40 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block rotate-12 translate-x-1/4">
          <Image src="/images/4.png" alt="" width={500} height={500} />
        </div>

        <div className="mx-auto max-w-5xl px-4 text-center lg:px-8 relative z-10">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary/10 text-primary mb-12 shadow-soft animate-float">
            <Download className="h-10 w-10" />
          </div>

          <h2 className="text-5xl font-black text-foreground md:text-7xl mb-10 tracking-tight leading-[1.1]">
            {t.downloadTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-2xl text-muted-foreground leading-relaxed font-medium mb-16">
            Available on iOS and Android. Free to download for all HiKids families.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <a
              href="#"
              className="group flex items-center gap-6 rounded-[2.5rem] bg-foreground px-12 py-8 text-white transition-all hover:bg-foreground/90 hover:-translate-y-2 hover:shadow-3xl"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-2xl">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.7 12.58 5.7C13.38 5.7 14.85 4.63 16.39 4.81C17.03 4.84 18.83 5.09 19.99 6.79C19.88 6.87 17.56 8.24 17.58 11.11C17.61 14.55 20.53 15.62 20.56 15.63C20.53 15.71 20.11 17.18 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60">
                  Get it on
                </p>
                <p className="text-2xl font-black">App Store</p>
              </div>
            </a>

            <a
              href="#"
              className="group flex items-center gap-6 rounded-[2.5rem] bg-foreground px-12 py-8 text-white transition-all hover:bg-foreground/90 hover:-translate-y-2 hover:shadow-3xl"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-2xl">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60">
                  Get it on
                </p>
                <p className="text-2xl font-black">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 lg:py-40 bg-accent/20 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <div className="relative group overflow-hidden rounded-[4rem] bg-white p-12 lg:p-24 shadow-3xl border border-white">
            <div className="grid gap-20 lg:grid-cols-2 items-center">
              <div className="text-left animate-fade-in-up">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-black text-primary uppercase tracking-widest">
                  <ShieldCheck className="h-4 w-4" />
                  Safe & Secure
                </div>
                <h2 className="text-5xl font-black text-foreground md:text-7xl mb-10 tracking-tight leading-[1.1]">
                  Stay Connected, Always.
                </h2>
                <p className="mt-10 text-2xl text-muted-foreground leading-relaxed font-medium mb-12">
                  Real-time updates, child growth monitoring, and secure communication—all in one place.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href={`/${lang}/parents/find-kindergarten`}
                    className="group inline-flex items-center gap-5 rounded-[2rem] bg-primary px-12 py-7 text-2xl font-black text-white shadow-2xl shadow-primary/20 transition-all hover:bg-primary/90 hover:-translate-y-2 hover:shadow-primary/40"
                  >
                    Join HiKids
                    <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="relative h-[550px] w-full hidden lg:block animate-float">
                <Image
                  src="/images/Whisk_3da4c60c2d295d7b7ee45f21d2e0efe6dr.png"
                  alt="Join HiKids"
                  fill
                  className="object-contain drop-shadow-3xl scale-125 translate-x-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
