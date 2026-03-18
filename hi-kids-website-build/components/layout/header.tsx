"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = dict.common;

  // Check if we are on the home page
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;
  const isInSection = (section: string) => pathname.startsWith(`/${locale}/${section}`);

  // Dynamic Styles
  const headerBg = isHome
    ? scrolled
      ? "bg-accent shadow-lg"
      : "bg-background shadow-none"
    : "bg-accent shadow-lg";

  const textColor = isHome && !scrolled ? "text-slate-800" : "text-white";
  const navActiveBg = isHome && !scrolled ? "bg-slate-800/5" : "bg-white/20";
  const navHoverBg = isHome && !scrolled ? "hover:bg-slate-800/5" : "hover:bg-white/10";

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${headerBg}`}>
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 lg:px-16 xl:px-24">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center group transition-transform hover:scale-105 duration-500"
        >
          <div className="relative h-24 w-24 flex items-center justify-center">
            <Image
              src="/images/logo-header.svg"
              alt="HiKids Logo"
              width={120}
              height={120}
              className="object-contain scale-[1.4] transition-transform duration-500 group-hover:scale-[1.5]"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {[
            { href: `/${locale}`, label: t.nav.home, active: pathname === `/${locale}` },
            { href: `/${locale}/about`, label: t.nav.about, active: isActive(`/${locale}/about`) },
            { href: `/${locale}/franchise`, label: t.nav.franchise, active: isInSection("franchise") },
            { href: `/${locale}/educators`, label: t.nav.educators, active: isInSection("educators") },
            { href: `/${locale}/parents`, label: t.nav.parents, active: isInSection("parents") },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-2xl px-5 py-2.5 text-sm font-black uppercase tracking-widest transition-all ${link.active
                ? `${textColor} ${navActiveBg}`
                : `${isHome && !scrolled ? "text-slate-600" : "text-white/90"} ${navHoverBg} hover:${textColor}`
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} scrolled={scrolled} isHome={isHome} />
          <Link
            href={`/${locale}/contact`}
            className={`hidden rounded-full px-8 py-3.5 text-sm font-black uppercase tracking-widest shadow-xl transition-all hover:-translate-y-0.5 lg:inline-flex ${isHome && !scrolled
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-secondary text-white hover:bg-secondary/90 shadow-green-900/10"
              }`}
          >
            {t.cta.contactUs}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-transparent transition-all lg:hidden ${isHome && !scrolled
              ? "text-slate-800 hover:bg-slate-800/5 hover:border-slate-800/10"
              : "text-white hover:bg-white/10 hover:border-white/20"
              }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full glass bg-white/95 backdrop-blur-2xl border-b border-border transition-all animate-in fade-in slide-in-from-top-4 duration-300 lg:hidden">
          <nav className="mx-auto max-w-[1600px] px-4 py-8" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2">
              <MobileLink
                href={`/${locale}`}
                label={t.nav.home}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href={`/${locale}/about`}
                label={t.nav.about}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href={`/${locale}/franchise`}
                label={t.nav.franchise}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href={`/${locale}/educators`}
                label={t.nav.educators}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href={`/${locale}/parents`}
                label={t.nav.parents}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href={`/${locale}/contact`}
                label={t.nav.contact}
                onClick={() => setMobileOpen(false)}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-2xl px-5 py-4 text-lg font-black tracking-tight text-foreground hover:bg-primary/5 hover:text-primary transition-all shadow-soft border border-transparent hover:border-primary/10"
    >
      {label}
    </Link>
  );
}
