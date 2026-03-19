import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const t = dict.common;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#00AEEF] pt-28 pb-10 overflow-visible z-20">
      {/* Dynamic Cloud Top Divider with Enhanced Overlap - Positioned Lower */}
      <div className="absolute top-0 left-0 w-full -translate-y-[60%] pointer-events-none overflow-visible z-30">
        <svg viewBox="0 100 1500 180" fill="#00AEEF" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block drop-shadow-[-20px_-10px_30px_rgba(0,0,0,0.05)]" preserveAspectRatio="none">
           <path d="M1500,123.12v286.88H0v-288.75c5.63-1.88,10.6-6.17,15.92-8.93,60.22-31.25,140.42-15.29,184.43,36.02,1.37.35,10.32-6.21,12.78-7.56,46.08-25.39,100.34-24.04,143.42,6.9,2.97,2.13,16.82,14.85,17.98,14.86,2.23,0,10.31-11.37,12.62-13.66,48.24-48.01,125.82-52.17,178.6-8.84,2.94,2.41,16.58,16.8,17.81,16.83s19.25-8.4,23.2-9.62c16.66-5.14,35.46-6.74,52.8-5.4,5.22.41,10.64,1.75,15.79,2.63,22.19-23.96,51.66-42.24,84.6-46.53,53.14-6.92,105.04,10.33,140.64,50.36,34.57-23.27,75.13-31.63,115.85-20.22,22.56,6.32,41.27,18.93,58.4,34.48,1.8-.02,5.85-6.75,7.47-8.51,58.12-62.78,155.22-58,206.41,10.25,33.58-12.17,70.88-10.71,103.15,4.62,1.71.16,10.67-10.04,12.98-12.02,27.02-23.05,59.39-34.5,95.13-33.78Z" />
        </svg>
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
              Explore
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
              Support
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
              <h4 className="text-[16px] font-black text-white uppercase tracking-[0.1em] mb-4">Location</h4>
              <p className="text-[17px] text-white/70 leading-relaxed">
                HiKids International HQ<br />Global Training Centers
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
                Privacy Policy
              </Link>
              <Link href="#" className="text-[14px] font-bold text-white/50 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="text-[14px] font-bold text-white/40">
              © {currentYear} HiKids International. All rights reserved.
            </p>
          </div>

          {/* Compact Logo/Mascot */}
          <div className="relative order-1 md:order-2 flex flex-col items-center md:items-end group">
             <div className="relative h-20 w-44 transition-transform duration-500 hover:scale-105 drop-shadow-xl cursor-pointer">
                <Image 
                  src="/images/logo-header.svg" 
                  alt="HiKids Logo" 
                  fill 
                  className="object-contain" 
                  priority
                />
             </div>
             <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mt-2">
                Empower Every Journey
             </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
