import type { Metadata } from "next";
import Image from "next/image";
import {
  Heart, Rocket, ShieldCheck, Sun, Eye, Target, Award,
  Globe, Smile, Trophy, Quote, Star, CheckCircle2,
  Users, BookOpen, Sparkles, GraduationCap
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "About HiKids | Progressive Early Childhood Education",
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.about;

  const achievementIcons = [Award, Globe, Smile, Trophy];

  return (
    <div className="bg-white overflow-hidden selection:bg-hikids-blue/20">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-accent pt-20">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.08] pointer-events-none">
          <Image src="/images/patterns.png" alt="" fill className="object-cover" />
        </div>

        <div className="relative container-wide z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8 animate-fadeUp">
              <div className="space-y-6">
                <p className="text-sm tracking-widest uppercase font-semibold text-primary/70">
                  Our Story
                </p>

                <h1 className="heading-primary text-white">
                  Shaping the Future of Early Education
                </h1>

                <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                  We bridge the gap between global standards and individual curiosity, preparing children for a world of unlimited potential.
                </p>
              </div>

              {/* Stats - White on Yellow */}
              <div className="flex gap-12 items-center">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">20</span>
                    <span className="text-2xl font-black text-white/50">+</span>
                  </div>
                  <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em] leading-none font-bold">Years Legacy</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1 font-black text-white">
                    <span className="text-5xl">IIT</span>
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em] leading-none font-bold">Alumni Driven</p>
                </div>
              </div>
            </div>

            {/* VISUAL SIDE: The Architectural Composition */}
            <div className="relative isolate px-6">
              {/* Layer 1: The Massive Organic Shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 blob opacity-100 -z-10 animate-sway" />

              {/* Layer 2: Brand Patterns */}
              <div className="absolute -top-10 -right-10 w-[60%] h-[60%] opacity-20 -z-10 brightness-0 invert">
                <Image src="/images/patterns.png" alt="" fill className="object-contain" />
              </div>

              {/* Layer 3: The Main Visual with Yellow Background */}
              <div className="relative rounded-[5rem] overflow-hidden shadow-[0_80px_100px_-30px_rgba(0,0,0,0.3)] group bg-hikids-yellow">
                {/* Texture for the Yellow Background */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none brightness-0 invert">
                  <Image src="/images/patterns.png" alt="" fill className="object-cover" />
                </div>

                <Image
                  src="/images/12.png"
                  alt="Child Learning"
                  width={800}
                  height={1000}
                  className="relative z-10 object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  priority
                />
              </div>

              {/* Layer 4: Peeking Mascot */}
              <div className="absolute -bottom-12 -left-12 w-48 h-48 animate-float-slow z-20">
                <Image src="/images/hi.png" alt="" fill className="object-contain drop-shadow-2xl" />
              </div>

              {/* Layer 5: Scientist Accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center animate-wiggle z-20">
                <Award className="text-hikids-blue w-10 h-10" />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Transition matching Home */}
        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* ================= VISION & MISSION: ARCHITECTURAL ================= */}
      <section className="py-48 bg-white relative overflow-hidden">
        {/* Subtle Side Pattern */}
        <div className="absolute top-0 left-0 w-64 h-full opacity-[0.03] pointer-events-none">
          <Image src="/patterns/HiKids-01.png" alt="" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Vision Card */}
            <div className="group relative p-16 rounded-[4rem] bg-slate-50 border border-slate-100 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-hikids-green/10 rounded-full blur-[80px]" />
              <div className="relative z-10 space-y-10">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-hikids-green shadow-sm group-hover:bg-hikids-green group-hover:text-white transition-all duration-500">
                  <Eye size={40} />
                </div>
                <div className="space-y-6">
                  <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-none">{t.vision.title}</h2>
                  <p className="text-xl text-slate-500 leading-relaxed font-medium">{t.vision.description}</p>
                </div>
                <div className="flex items-center gap-4 text-hikids-green font-black uppercase text-xs tracking-widest">
                  Progressive Focus <Image src="/images/Whisk_20a92e893d0b223b56344de2f33393aedr.png" alt="" width={24} height={24} className="opacity-50" />
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative p-16 rounded-[4rem] bg-slate-900 text-white overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-hikids-blue/20 rounded-full blur-[100px]" />
              <div className="relative z-10 space-y-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-hikids-blue group-hover:bg-hikids-blue group-hover:text-white transition-all duration-500">
                  <Target size={40} />
                </div>
                <div className="space-y-6">
                  <h2 className="text-5xl font-black tracking-tight leading-none">{t.mission.title}</h2>
                  <p className="text-xl text-slate-400 leading-relaxed font-medium">{t.mission.description}</p>
                </div>
                <div className="flex items-center gap-4 text-hikids-blue font-black uppercase text-xs tracking-widest">
                  Daily Execution <Rocket className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES: ARCHITECTURAL GRID ================= */}
      <section className="py-20 mb-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Why Families Choose Us</h2>
            <p className="text-xl text-slate-500 font-medium font-pretty">A professional approach rooted in empathy and innovation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Rocket, color: "blue", title: "Future-Ready Skills", desc: "Scientific frameworks that prepare children for a dynamic 21st century." },
              { icon: Heart, color: "green", title: "Emotional Intelligence", desc: "Nurturing empathy and confidence in every social interaction." },
              { icon: ShieldCheck, color: "yellow", title: "Safety First", desc: "A secure, tech-monitored environment for complete peace of mind." }
            ].map((item, i) => (
              <div key={i} className="group relative bg-slate-50 p-12 rounded-[3.5rem] transition-all duration-700 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-transparent hover:border-slate-100">
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-hikids-${item.color} mb-10 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP: ARCHITECTURAL ================= */}
      <section className="py-48 bg-white overflow-hidden relative border-t border-slate-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">

            {/* Visual Side matching Hero Style */}
            <div className="relative flex justify-center items-center">
              {/* Soft Aura */}
              <div className="absolute w-[120%] h-[120%] bg-hikids-blue/5 blur-[100px] rounded-full -z-10" />

              {/* Big Wavy Accent Layer (Blue for Leadership) */}
              <div className="absolute w-[95%] h-[95%] translate-x-6 -translate-y-6 bg-hikids-blue rounded-[50%_50%_60%_40%/45%_55%_45%_55%] -z-10 opacity-10 group-hover:rotate-6 transition-transform duration-1000" />

              {/* Main Wavy Image with Clip Path */}
              <div
                className="relative w-full max-w-[500px] aspect-[4/5] overflow-hidden shadow-[0_70px_140px_-25px_rgba(0,0,0,0.15)] group"
                style={{
                  clipPath: "polygon(0% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)",
                }}
              >
                <Image
                  src="/images/businessman.png"
                  alt="Leadership"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                />
              </div>

              {/* Secondary Floating Mascot */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 animate-float-slow hidden xl:block">
                <Image src="/images/Whisk_ba46783577f5efb8588459e8166e51a2dr.png" alt="" fill className="object-contain" />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="inline-block px-5 py-2 bg-hikids-yellow/10 text-hikids-yellow rounded-full text-xs font-black tracking-widest uppercase">
                  Founding Vision
                </div>
                <h2 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                  Heritage Meets <br />
                  <span className="text-hikids-blue">Pedagogy.</span>
                </h2>
                <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl font-pretty">
                  Led by an elite team of <span className="text-slate-900 font-bold">IIM & IIT alumni</span>, we are redefining early childhood potential through academic rigor and cultural warmth.
                </p>
              </div>

              {/* Professional Features Grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Proprietary Pedagogy", icon: Sparkles, color: "green" },
                  { title: "Scientific Rigor", icon: Rocket, color: "blue" },
                  { title: "Personal Mentorship", icon: Users, color: "yellow" },
                  { title: "Global Standards", icon: Globe, color: "blue" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 rounded-2xl bg-hikids-${item.color}/10 flex items-center justify-center text-hikids-${item.color} group-hover:scale-110 transition-all`}>
                      <item.icon size={22} />
                    </div>
                    <span className="text-lg font-bold text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>

              {/* Executive Pull-Quote */}
              <div className="relative p-12 bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100">
                <Quote className="absolute -top-6 -left-6 text-slate-200" size={120} />
                <div className="relative z-10 space-y-6">
                  <p className="text-2xl font-black text-slate-800 leading-snug italic">
                    "{t.founder.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-hikids-blue" />
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      The Leadership Philosophy
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MOKA SPIRIT: INTERACTIVE FEEL ================= */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/patterns/HiKids-11.png" alt="" fill className="object-cover invert" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-hikids-yellow text-xs font-black tracking-[0.2em] uppercase">
                Meet Moka
              </div>
              <h2 className="text-5xl font-black tracking-tight leading-tight">
                A Companion for every <br />
                <span className="text-hikids-yellow text-6xl">Discovery.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Moka isn't just a mascot—he's the personification of curiosity, kindness, and the "HiKids Spirit" that guides our students daily.
              </p>

              <div className="grid gap-4">
                {t.moka.traits.map((trait, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors group">
                    <Star className="text-hikids-yellow mt-1 group-hover:rotate-12 transition-transform" size={20} />
                    <div>
                      <h4 className="font-black text-lg text-white mb-1">{trait.title}</h4>
                      <p className="text-slate-400 text-sm font-medium">{trait.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative flex justify-center">
              <div className="absolute w-[120%] h-[120%] bg-hikids-yellow/20 rounded-full blur-[120px] animate-pulse" />
              <div className="relative w-full max-w-md aspect-square animate-float">
                <Image src="/images/hi.png" alt="Moka Mascot" fill className="object-contain drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
