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
    <footer className="relative bg-[#fbf7c3] pt-16 pb-10 border-t border-hikids-yellow/20">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-16 xl:px-24">
        
        {/* Top Section: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <Link href={`/${locale}`} className="relative h-12 w-32 block transition-transform duration-300 hover:scale-105">
              <Image src="/images/logo-header.svg" alt="HiKids Logo" fill className="object-contain object-left" priority />
            </Link>
            <p className="text-slate-600 text-[15px] leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "#", color: "text-slate-400 hover:text-[#1877F2]" },
                { Icon: Instagram, href: "#", color: "text-slate-400 hover:text-[#E1306C]" },
                { Icon: Linkedin, href: "#", color: "text-slate-400 hover:text-[#0077b5]" },
                { Icon: Youtube, href: "#", color: "text-slate-400 hover:text-[#FF0000]" },
              ].map(({ Icon, href, color }, i) => (
                <Link
                  key={i}
                  href={href}
                  className={`h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 ${color} transition-all duration-300 hover:border-current hover:shadow-sm`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-4">
              {[
                { href: `/${locale}/about`, label: t.nav.about },
                { href: `/${locale}/franchise`, label: t.nav.franchise },
                { href: `/${locale}/educators`, label: t.nav.educators },
                { href: `/${locale}/parents`, label: t.nav.parents },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-slate-600 hover:text-hikids-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-slate-400 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-black tracking-tighter">Email</span>
                  <a href={`mailto:${t.footer.email}`} className="text-[15px] text-slate-600 hover:text-hikids-blue transition-colors">
                    {t.footer.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-slate-400 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-black tracking-tighter">Phone</span>
                  <a href={`tel:${t.footer.phone.replace(/[^0-9+]/g, '')}`} className="text-[15px] text-slate-600 hover:text-hikids-blue transition-colors">
                    {t.footer.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Support Info */}
          <div className="flex flex-col space-y-8">
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">
                Location
              </h4>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                <p className="text-[15px] text-slate-600">
                  HiKids International HQ<br />Global Network
                </p>
              </div>
            </div>

            {/* App Store Links */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                Get the HiKids App
              </h4>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <Link href={`/${locale}/parents/app`} className="h-10 w-32 relative bg-slate-900 rounded-lg flex items-center justify-center border border-white/10 hover:bg-slate-800 transition-colors">
                   <Image src="/images/app-store.svg" alt="App Store" fill className="object-contain p-2" />
                </Link>
                <Link href={`/${locale}/parents/app`} className="h-10 w-32 relative bg-slate-900 rounded-lg flex items-center justify-center border border-white/10 hover:bg-slate-800 transition-colors">
                   <Image src="/images/google-play.svg" alt="Google Play" fill className="object-contain p-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200/80 mb-8" />

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ED1C24]" />
              <div className="w-2 h-2 rounded-full bg-[#00AEEF]" />
              <div className="w-2 h-2 rounded-full bg-[#8CC63F]" />
              <div className="w-2 h-2 rounded-full bg-[#f0b952]" />
            </div>
            <p className="text-[13px] font-bold text-slate-500">
              © {currentYear} HiKids International. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link href="#" className="text-[13px] font-bold text-slate-500 hover:text-hikids-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[13px] font-bold text-slate-500 hover:text-hikids-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
