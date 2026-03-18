import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Star, Sparkles, Navigation } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/section-header";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Find a Kindergarten | HiKids Global Network",
};

export default async function FindKindergartenPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.parents.findKindergarten;

  const mapCenter = "50,10";
  const zoom = 4;
  const mapSrc = `https://maps.google.com/maps?q=${mapCenter}&z=${zoom}&output=embed`;

  return (
    <>
      <section className="bg-secondary relative min-h-[70vh] flex items-center overflow-hidden pt-28 pb-32 lg:pb-48 py-32 lg:py-48">
        {/* Playful Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-kids-pattern mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 drop-shadow-sm hidden lg:block -translate-x-1/4">
            <Image src="/images/7.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute right-[10%] top-20 h-64 w-64 bg-[var(--hikids-blue)]/10 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-[1200px] w-full animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-white shadow-soft backdrop-blur-md uppercase tracking-widest">
              <Navigation className="h-4 w-4 text-white fill-current" />
              Find Your Nearest HiKids Center
            </div>
            <h1 className="font-bold tracking-tight text-white text-balance leading-[1.1]">
              {t.title}
            </h1>
            <p className="mt-10  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-white/90 font-normal leading-relaxed text-pretty max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full leading-none z-20">
          <WaveDivider color="white" />
        </div>
      </section>

      <section className=" py-32 lg:py-48 relative bg-white overflow-hidden min-h-[95vh] flex flex-col justify-center">
        {/* Decorative corner mascot */}
        <div className="absolute top-20 right-0 opacity-20 drop-shadow-sm hidden xl:block translate-x-1/4 animate-float-slow grayscale">
          <Image src="/images/Whisk_8e64716474fbda31eeaf47306236688bdr.png" alt="" width={500} height={500} />
        </div>

        <div className="mx-auto max-w-[1700px] px-4 lg:px-8 relative z-10">
          {/* Map Embed - Premium Container */}
          <div className="mb-24 group overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] bg-white p-2 md:p-4 ring-1 ring-slate-100 transition-all duration-700">
            <iframe
              title="HiKids Locations Map"
              src={mapSrc}
              className="h-[500px] w-full md:h-[700px] rounded-[4rem] lg:rounded-[3rem] transition-all duration-700 pointer-events-auto"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <SectionHeader
            title="Our Locations"
            subtitle="Join our growing family across the globe. Visit a HiKids center near you."
          />

          {/* Branch List - Premium Grid */}
          <div className="grid gap-20 lg:gap-24 lg:gap-20 xl:gap-32 lg:gap-20 xl:gap-32 lg:gap-20 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {t.branches.map(
              (branch: {
                name: string;
                address: string;
                phone: string;
                lat: number;
                lng: number;
              }, i: number) => (
                <div
                  key={branch.name}
                  className="group relative rounded-[2.5rem] bg-[#fafafa] p-14 lg:p-20 lg:p-16 transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(22,156,73,0.06)] hover:-translate-y-4 lg:hover:-translate-y-6 overflow-hidden ring-1 ring-slate-100 hover:ring-[var(--hikids-blue)]/30 hover:bg-white"
                >
                  <div className="absolute top-0 right-0 p-14 lg:p-20 lg:p-14 opacity-0 group-hover:opacity-5 transition-opacity duration-700 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-[var(--hikids-blue)]">
                    <MapPin className="h-24 w-24" />
                  </div>

                  <div className="mb-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-white shadow-sm border border-slate-100 text-[var(--hikids-blue)] group-hover:bg-[var(--hikids-blue)] group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:scale-110 relative z-10">
                    <MapPin className="h-8 w-8" strokeWidth={2.5} />
                  </div>

                  <h3 className="mb-4 font-bold text-slate-900 group-hover:text-slate-800 tracking-tight transition-colors relative z-10">
                    {branch.name}
                  </h3>

                  <p className="mb-10  text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] text-slate-600 leading-relaxed font-normal relative z-10">
                    {branch.address}
                  </p>

                  <div className="mt-auto flex items-center gap-4 pt-8 border-t border-slate-100 relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[3rem] lg:rounded-[4rem] lg:rounded-[2.5rem] bg-slate-50 text-slate-400 group-hover:text-[var(--hikids-blue)] transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className=" text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] font-bold text-slate-700 hover:text-[var(--hikids-blue)] transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <div className="mt-0 h-1 absolute bottom-0 left-0 w-0 bg-[var(--hikids-blue)] group-hover:w-full transition-all duration-[1000ms]" />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
