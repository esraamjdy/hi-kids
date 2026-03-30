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
            <p className="text-white font-medium text-[17px] leading-relaxed max-w-sm">
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
              <p className="text-[17px] text-white font-medium leading-relaxed">
                {t.footer.hq}<br />{t.footer.trainingCenter}
              </p>
            </div>
            <div className="flex gap-4">
              <Link href={`/${locale}/parents/app`} className="group hover:-translate-y-1 transition-transform">
                 <svg viewBox="0 0 135 40" className="h-9 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7C0 3.13401 3.13401 0 7 0H128C131.866 0 135 3.13401 135 7V33C135 36.866 131.866 40 128 40H7C3.13401 40 0 36.866 0 33V7Z" fill="white" />
                    <path d="M22.064 26.697C22.064 24.329 24.162 23.166 24.288 23.097C23.238 21.656 21.611 21.465 21 21.442C19.544 21.3 18.067 22.315 17.32 22.315C16.549 22.315 15.361 21.465 14.153 21.492C12.553 21.52 11.026 22.463 10.211 23.868C8.514 26.759 9.8 30.957 11.458 33.325C12.28 34.484 13.243 35.766 14.508 35.719C15.717 35.666 16.183 34.965 17.65 34.965C19.091 34.965 19.533 35.719 20.811 35.688C22.112 35.666 22.928 34.508 23.725 33.348C24.664 32.015 25.048 30.725 25.071 30.655C25.041 30.641 22.365 29.663 22.365 26.74C22.365 24.28 24.316 23.074 24.453 22.996C23.231 21.285 21.314 21.261 20.65 21.238L20.635 21.235C19.179 21.093 17.702 22.108 16.955 22.108C16.184 22.108 15.213 21.325 14.005 21.352C12.405 21.38 10.878 22.323 10.063 23.728C8.366 26.619 9.652 30.817 11.31 33.185C12.132 34.344 13.095 35.626 14.36 35.579C15.569 35.526 16.035 34.825 17.502 34.825C18.943 34.825 19.385 35.579 20.663 35.548C21.964 35.526 22.78 34.368 23.577 33.208C24.516 31.875 24.9 30.585 24.923 30.515" fill="#00AEEF" />
                    <text x="35" y="18" fill="#00AEEF" style={{ fontSize: '7px', fontWeight: 'bold' }}>Download on</text>
                    <text x="35" y="32" fill="#00AEEF" style={{ fontSize: '13px', fontWeight: 'bold' }}>App Store</text>
                 </svg>
              </Link>
              <Link href={`/${locale}/parents/app`} className="group hover:-translate-y-1 transition-transform">
                 <svg viewBox="0 0 135 40" className="h-9 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7C0 3.13401 3.13401 0 7 0H128C131.866 0 135 3.13401 135 7V33C135 36.866 131.866 40 128 40H7C3.13401 40 0 36.866 0 33V7Z" fill="white" />
                    <path d="M10.748 35.097C10.51 34.853 10.373 34.5 10.373 34.032V5.96803C10.373 5.51103 10.51 5.14703 10.748 4.90303L10.817 4.83403L26.65 20.656V20.781L10.817 36.604L10.748 35.097Z" fill="#2196F3" />
                    <path d="M31.91 25.916L26.65 20.655V20.53L31.911 15.269L31.996 15.317L38.204 18.847C39.974 19.851 39.974 21.487 38.204 22.492L31.996 26.021L31.91 25.916Z" fill="#F44336" />
                    <path d="M32.079 25.748L26.65 20.32L10.748 36.222C11.332 36.836 12.28 36.91 13.344 36.3L32.079 25.748Z" fill="#4CAF50" />
                    <path d="M32.079 15.111L13.344 4.55903C12.28 3.94903 11.332 4.02303 10.748 4.63703L26.65 20.539L32.079 15.111Z" fill="#FFC107" />
                    <text x="45" y="18" fill="#00AEEF" style={{ fontSize: '7px', fontWeight: 'bold' }}>GET IT ON</text>
                    <text x="45" y="32" fill="#00AEEF" style={{ fontSize: '13px', fontWeight: 'bold' }}>Google Play</text>
                 </svg>
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
