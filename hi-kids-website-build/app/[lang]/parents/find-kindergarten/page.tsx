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
      {/* Hero - Immersive & Welcoming */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-accent/20 via-background to-background pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block -translate-x-1/4">
            <Image src="/images/7.png" alt="" width={500} height={500} className="object-contain" />
          </div>
          <div className="absolute right-[10%] top-20 h-64 w-64 bg-primary/10 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 lg:px-8 z-10 w-full text-center">
          <div className="mx-auto max-w-4xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-white/50 px-5 py-2 text-sm font-black text-foreground shadow-soft backdrop-blur-md uppercase tracking-widest">
              <Navigation className="h-4 w-4 text-hikids-yellow fill-current" />
              Find Your Nearest HiKids Center
            </div>
            <h1 className="text-5xl font-black tracking-tight text-foreground md:text-6xl lg:text-8xl text-balance leading-[1.1]">
              {t.title}
            </h1>
            <p className="mt-10 text-2xl text-muted-foreground font-medium leading-relaxed text-pretty max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-40 relative bg-white overflow-hidden">
        {/* Decorative corner mascot */}
        <div className="absolute top-20 right-0 opacity-10 hidden xl:block translate-x-1/4 animate-float-slow">
          <Image src="/images/Whisk_8e64716474fbda31eeaf47306236688bdr.png" alt="" width={500} height={500} />
        </div>

        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 relative z-10">
          {/* Map Embed - Premium Container */}
          <div className="mb-24 group overflow-hidden rounded-[3.5rem] border border-border/50 shadow-3xl ring-[12px] ring-muted/20 transition-all hover:ring-primary/10 duration-700">
            <iframe
              title="HiKids Locations Map"
              src={mapSrc}
              className="h-[500px] w-full md:h-[700px] transition-all duration-700"
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
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
                  className="group relative rounded-[3rem] border border-border/50 bg-white p-12 transition-all hover:shadow-3xl hover:-translate-y-2 duration-500 shadow-soft overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MapPin className="h-24 w-24" />
                  </div>

                  <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-soft">
                    <MapPin className="h-10 w-10" />
                  </div>

                  <h3 className="mb-6 text-3xl font-black text-foreground group-hover:text-primary transition-colors">
                    {branch.name}
                  </h3>

                  <p className="mb-10 text-xl text-muted-foreground leading-relaxed font-medium">
                    {branch.address}
                  </p>

                  <div className="mt-auto flex items-center gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6" />
                    </div>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="text-lg font-black text-foreground hover:text-primary transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <div className="mt-12 h-2 w-12 rounded-full bg-primary/20 group-hover:w-full transition-all duration-700" />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
