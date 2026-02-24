import type { Metadata } from "next";
import { Award, CheckCircle2, Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CertificationForm } from "./certification-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get Certified | HiKids Global Excellence",
};

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.educators.certification;

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-b from-secondary/10 via-background to-background pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block translate-x-1/4">
            <Image src="/images/Whisk_998be7f5470b4334f59ae78964d88e0bdr.png" alt="" width={600} height={600} className="object-contain" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-secondary/20 bg-white/50 px-5 py-2 text-sm font-black text-secondary shadow-soft backdrop-blur-md uppercase tracking-widest">
              <Award className="h-4 w-4" />
              Global Standard of Excellence
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

      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          <div className="grid items-start gap-20 lg:grid-cols-2">
            {/* Benefits */}
            <div className="animate-fade-in-up">
              <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-secondary/10 text-secondary shadow-soft">
                <GraduationCap className="h-10 w-10" />
              </div>
              <h2 className="text-4xl font-black text-foreground mb-8 tracking-tight">
                Professional Recognition
              </h2>
              <p className="mb-12 text-2xl font-medium text-muted-foreground leading-relaxed text-pretty">
                {t.description}
              </p>
              <div className="grid gap-6">
                {t.benefits.map((benefit: string) => (
                  <div key={benefit} className="flex items-center gap-5 p-6 rounded-3xl bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-soft">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-xl font-bold text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-[3rem] bg-accent/10 border border-accent/20 flex items-start gap-6">
                <ShieldCheck className="h-10 w-10 text-hikids-yellow shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-black text-foreground mb-2">Verified Achievement</h4>
                  <p className="text-lg text-muted-foreground font-medium">Earn a globally recognized certificate that validates your expertise in the HiKids pedagogical model.</p>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="relative">
              {/* Decorative blob behind form */}
              <div className="absolute -inset-10 bg-secondary/5 blur-[100px] rounded-full" />

              <div className="relative rounded-[3.5rem] border border-border bg-white p-10 lg:p-16 shadow-3xl">
                <div className="mb-12">
                  <div className="flex items-center gap-3 text-secondary font-black uppercase tracking-[0.2em] mb-4">
                    <Sparkles className="h-5 w-5" />
                    Application Form
                  </div>
                  <h3 className="text-3xl font-black text-foreground">
                    {t.cta}
                  </h3>
                </div>
                <CertificationForm dict={dict} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
