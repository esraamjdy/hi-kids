import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { WaveDivider } from "@/components/wave-divider";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const t = dict.common;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#00AEEF] pt-25 pb-10 overflow-visible z-20">
      {/* Dynamic Cloud Top Divider with Enhanced Overlap - Positioned Lower */}
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none z-30 overflow-visible [&>div]:!filter-none">
        <WaveDivider color="#00AEEF" />
      </div>



      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24">

        {/* Main Content Grid: Consolidated for better vertical flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mb-12">

          {/* Column 1: Brand Identity (Logo removed for cleaner look) */}
          <div className="flex flex-col space-y-5">
            <p className="text-white/80 text-[17px] leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>
            {/* Social Links - Balanced Size */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-hikids-blue transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-[16px] font-black text-white uppercase tracking-[0.1em] mb-6">
              {t.footer.explore}
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { href: `/${locale}/about`, label: t.nav.about },
                { href: `/${locale}/franchise`, label: t.nav.franchise },
                { href: `/${locale}/educators`, label: t.nav.educators },
                { href: `/${locale}/parents`, label: t.nav.parents },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[17px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h4 className="text-[16px] font-black text-white uppercase tracking-[0.1em] mb-6">
              {t.footer.support}
            </h4>
            <div className="space-y-5">
              <a href={`mailto:${t.footer.email}`} className="group flex items-center gap-3 text-white/80 hover:text-white transition-all">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-[17px] font-medium">{t.footer.email}</span>
              </a>
              <a href={`tel:${t.footer.phone.replace(/[^0-9+]/g, '')}`} className="group flex items-center gap-3 text-white/80 hover:text-white transition-all">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-[17px] font-medium">{t.footer.phone}</span>
              </a>
            </div>
          </div>

          {/* Column 4: Presence & Mobile */}
          <div className="space-y-6">
            <div>
              <h4 className="text-[16px] font-black text-white uppercase tracking-[0.1em] mb-4">{t.footer.location}</h4>
              <p className="text-[17px] text-white/70 leading-relaxed">
                {t.footer.hq}<br />{t.footer.trainingCenter}
              </p>
            </div>
            <div className="flex gap-3">
              <Link href={`/${locale}/parents/app`} className="h-9 w-28 relative bg-white/10 rounded-md border border-white/10 hover:bg-white/20 transition-all overflow-hidden text-center">
                <Image src="/images/app-store.svg" alt="App Store" fill className="object-contain p-2 invert" />
              </Link>
              <Link href={`/${locale}/parents/app`} className="h-9 w-28 relative bg-white/10 rounded-md border border-white/10 hover:bg-white/20 transition-all overflow-hidden text-center">
                <Image src="/images/google-play.svg" alt="Google Play" fill className="object-contain p-2 invert" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="flex flex-col space-y-4 order-2 md:order-1">
            <div className="flex items-center gap-8">
              <Link href="#" className="text-[14px] font-bold text-white/50 hover:text-white transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="#" className="text-[14px] font-bold text-white/50 hover:text-white transition-colors">
                {t.footer.terms}
              </Link>
            </div>
            <p className="text-[14px] font-bold text-white/40">
              © {currentYear} {t.footer.rights}
            </p>
          </div>

          {/* Compact Logo/Mascot */}
          <div className="relative order-1 md:order-2 flex flex-col items-center md:items-end group">
            <div className="relative h-20 w-44 transition-transform duration-500 hover:scale-105 drop-shadow-xl cursor-pointer">
              <Image
                src="/images/HiKids-08.svg"
                alt="HiKids Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mt-2 text-center">
              {t.footer.tagline}
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
