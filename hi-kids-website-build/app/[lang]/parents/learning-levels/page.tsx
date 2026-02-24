import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, Sparkles, Layers, Shield, ArrowRight, CheckCircle2, Navigation } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Learning Levels | HiKids Global Curriculum",
};

export default async function LearningLevelsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.learningLevels;

  const levelIcons = [Star, Sparkles, Layers, Shield];

  const levelColors = [
    {
      bg: "bg-hikids-blue/5",
      border: "border-hikids-blue/20",
      icon: "bg-hikids-blue/10 text-hikids-blue",
      badge: "bg-hikids-blue/10 text-hikids-blue",
      accent: "text-hikids-blue",
    },
    {
      bg: "bg-hikids-green/5",
      border: "border-hikids-green/20",
      icon: "bg-hikids-green/10 text-hikids-green",
      badge: "bg-hikids-green/10 text-hikids-green",
      accent: "text-hikids-green",
    },
    {
      bg: "bg-primary/5",
      border: "border-primary/20",
      icon: "bg-primary/10 text-primary",
      badge: "bg-primary/10 text-primary",
      accent: "text-primary",
    },
    {
      bg: "bg-hikids-yellow/5",
      border: "border-hikids-yellow/30",
      icon: "bg-hikids-yellow/20 text-foreground",
      badge: "bg-hikids-yellow/20 text-foreground",
      accent: "text-foreground",
    },
  ];

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-accent/20 via-background to-background pt-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block -translate-x-1/4">
            <Image src="/images/2.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute right-[5%] bottom-[10%] opacity-15 hidden xl:block animate-float">
            <Image src="/images/Whisk_61d9a24bbad8193df45fec5f308801d0dr.png" alt="" width={400} height={400} />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/50 px-5 py-2 text-sm font-black text-primary shadow-soft backdrop-blur-md uppercase tracking-widest">
              <Sparkles className="h-4 w-4 fill-current text-accent" />
              The Future of Progressive Learning
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

      <section className="py-24 lg:py-40 relative bg-white overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 lg:px-8 relative z-10">
          <SectionHeader
            title="Educational Milestones"
            subtitle="Explore our structured curriculum designed to support every stage of your child's development."
          />

          <div className="mt-24 space-y-16">
            {t.levels.map(
              (
                level: {
                  name: string;
                  age: string;
                  focus: string;
                  description: string;
                  skills: string[];
                },
                i: number
              ) => {
                const Icon = levelIcons[i];
                const color = levelColors[i];
                return (
                  <div
                    key={level.name}
                    className={`group relative rounded-[3rem] border ${color.border} ${color.bg} p-10 lg:p-16 transition-all hover:shadow-3xl hover:-translate-y-2 duration-500 shadow-soft overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon className="h-48 w-48" />
                    </div>

                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
                      {/* Level number + icon */}
                      <div className="flex items-center gap-8 lg:flex-col lg:items-center lg:gap-6 shrink-0">
                        <div
                          className={`flex h-24 w-24 items-center justify-center rounded-[2.5rem] shadow-xl shadow-black/5 ring-1 ring-black/5 ${color.icon} group-hover:scale-110 transition-transform duration-500 bg-white`}
                        >
                          <Icon className="h-12 w-12" />
                        </div>
                        <span
                          className={`text-sm font-black uppercase tracking-[0.2em] ${color.accent}`}
                        >
                          Level {i + 1}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-6 flex flex-wrap items-center gap-6">
                          <h2 className="text-4xl font-black text-foreground tracking-tight">
                            {level.name}
                          </h2>
                          <div
                            className={`rounded-2xl px-5 py-2 text-sm font-black uppercase tracking-widest ${color.badge} border border-current/10 shadow-sm`}
                          >
                            {level.age}
                          </div>
                        </div>

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-1 text-sm font-black text-primary uppercase tracking-widest border border-primary/10 shadow-soft">
                          <Sparkles className="h-3 w-3" />
                          Core Focus: {level.focus}
                        </div>

                        <p className="mb-12 text-2xl font-medium text-muted-foreground leading-relaxed text-pretty">
                          {level.description}
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2">
                          {level.skills.map((skill: string) => (
                            <div
                              key={skill}
                              className="group/skill flex items-start gap-5 p-5 rounded-3xl bg-white/60 border border-white/80 hover:bg-white/90 hover:shadow-xl hover:translate-x-1 transition-all duration-300 shadow-soft"
                            >
                              <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-black/5 ${color.accent} group-hover/skill:scale-110 transition-transform`}>
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <span className="text-xl font-bold text-foreground leading-snug">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-12 h-2 w-24 rounded-full bg-black/5 group-hover:w-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-48 relative overflow-hidden bg-background">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8">
          <div className="relative group overflow-hidden rounded-[4rem] bg-accent/20 p-12 lg:p-24 shadow-3xl border border-accent/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,white/40_0%,transparent_70%)] opacity-30" />

            <div className="grid gap-20 lg:grid-cols-2 items-center relative z-10">
              <div className="text-left animate-fade-in-up">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-black text-primary uppercase tracking-widest">
                  <Navigation className="h-4 w-4" />
                  Next Steps
                </div>
                <h2 className="text-5xl font-black text-foreground md:text-7xl mb-10 tracking-tight leading-[1.1]">
                  Ready to Start the Journey?
                </h2>
                <p className="mt-10 text-2xl text-muted-foreground leading-relaxed font-medium max-w-xl">
                  Find a HiKids kindergarten near you and give your child the gift of world-class early education.
                </p>
                <div className="mt-12">
                  <Link
                    href={`/${lang}/parents/find-kindergarten`}
                    className="group inline-flex items-center gap-5 rounded-[2rem] bg-primary px-12 py-7 text-2xl font-black text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:bg-primary/90 hover:-translate-y-2 hover:shadow-primary/40"
                  >
                    Explore Locations
                    <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="relative h-[550px] w-full hidden lg:block animate-float">
                <Image
                  src="/images/Whisk_61d9a24bbad8193df45fec5f308801d0dr.png"
                  alt="Join HiKids"
                  fill
                  className="object-contain drop-shadow-2xl scale-125 translate-x-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
