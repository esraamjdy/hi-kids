import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
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
    <footer className="bg-foreground text-white pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16 text-center md:text-left">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href={`/${locale}`} className="relative h-12 w-32 mb-8">
              <Image src="/images/logo.png" alt="HiKids" fill className="object-contain invert brightness-200" />
            </Link>
            <p className="text-white/50 text-lg leading-relaxed font-medium">
              {t.footer.aboutText}
            </p>
            <div className="mt-8 flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { href: `/${locale}/about`, label: t.nav.about },
                { href: `/${locale}/franchise`, label: t.nav.franchise },
                { href: `/${locale}/educators`, label: t.nav.educators },
                { href: `/${locale}/parents`, label: t.nav.parents }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors font-bold text-lg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-secondary mb-6">Contact</h4>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">Email</span>
                <span className="text-lg font-bold text-white/70">{t.footer.email}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">Phone</span>
                <span className="text-lg font-bold text-white/70">{t.footer.phone}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-accent mb-8">Global Reach</h4>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
              <p className="text-white/40 font-bold mb-4">Start your international educational journey with us.</p>
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:text-white transition-colors group">
                Get in Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold text-white/20 text-center">
            &copy; {currentYear} HiKids International. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
