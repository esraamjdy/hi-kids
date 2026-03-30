"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Smartphone, ChevronDown, GraduationCap, Users } from "lucide-react";
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
  const [kindergartenOpen, setKindergartenOpen] = useState(false);
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
          className="flex items-center group"
        >
          <div className="relative h-24 w-24 flex items-center justify-center">
            <Image
              src="/images/HiKids-08.svg"
              alt="HiKids Logo"
              width={120}
              height={120}
              className="object-contain scale-[1.4]"
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

          {/* Combined About Kindergarten Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setKindergartenOpen(true)}
            onMouseLeave={() => setKindergartenOpen(false)}
          >
            <button
              className={`rounded-2xl px-5 py-2.5 text-sm font-black uppercase tracking-widest transition-all inline-flex items-center gap-2 ${isInSection("educators") || isInSection("parents")
                ? `${textColor} ${navActiveBg}`
                : `${isHome && !scrolled ? "text-slate-600" : "text-white/90"} ${navHoverBg} hover:${textColor}`
                }`}
            >
              {t.nav.aboutKindergarten}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${kindergartenOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${kindergartenOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}>
              <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-3 min-w-[280px] grid grid-cols-1 gap-1">
                <Link
                  href={`/${locale}/educators`}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all hover:bg-[#ffde00] group ${isInSection("educators") ? "bg-[#ffde00]/10" : ""}`}
                >
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-[#ffde00]/20 flex items-center justify-center text-slate-800 group-hover:bg-white group-hover:scale-110 transition-all shadow-sm">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-800 uppercase tracking-wider group-hover:text-slate-900 transition-colors">{t.nav.educators}</div>
                    <div className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5 group-hover:text-slate-900/70 transition-colors">{t.nav.educatorSub}</div>
                  </div>
                </Link>

                <Link
                  href={`/${locale}/parents`}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all hover:bg-[#00AEEF] group ${isInSection("parents") ? "bg-[#00AEEF]/10" : ""}`}
                >
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-[#00AEEF]/20 flex items-center justify-center text-slate-800 group-hover:bg-white group-hover:scale-110 transition-all shadow-sm">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-800 uppercase tracking-wider group-hover:text-white transition-colors">{t.nav.parents}</div>
                    <div className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5 group-hover:text-white/80 transition-colors">{t.nav.parentSub}</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} scrolled={scrolled} isHome={isHome} />
          <Link
            href={`/${locale}/parents/app`}
            className={`hidden h-11 w-11 rounded-2xl transition-all md:inline-flex items-center justify-center ${isHome && !scrolled
              ? "bg-slate-900/5 text-slate-800 hover:bg-slate-900/10 shadow-sm"
              : "bg-white/10 text-white hover:bg-white/20"
              }`}
            aria-label="HiKids App"
          >
            <Smartphone size={20} />
          </Link>

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

              {/* Mobile About Kindergarten Group */}
              <div className="mt-4 px-5">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{t.nav.aboutKindergarten}</div>
                <div className="grid grid-cols-1 gap-3">
                  <MobileLink
                    href={`/${locale}/educators`}
                    label={t.nav.educators}
                    onClick={() => setMobileOpen(false)}
                    variant="sub"
                  />
                  <MobileLink
                    href={`/${locale}/parents`}
                    label={t.nav.parents}
                    onClick={() => setMobileOpen(false)}
                    variant="sub"
                  />
                </div>
              </div>

              <div className="mt-4">
                <MobileLink
                  href={`/${locale}/contact`}
                  label={t.nav.contact}
                  onClick={() => setMobileOpen(false)}
                />
              </div>
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
  variant = "main",
}: {
  href: string;
  label: string;
  onClick: () => void;
  variant?: "main" | "sub";
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-2xl px-5 py-4 font-black transition-all shadow-soft border border-transparent ${variant === "main"
        ? "text-lg tracking-tight text-foreground hover:bg-primary/5 hover:text-primary"
        : "text-sm uppercase tracking-widest text-slate-600 bg-slate-50 hover:bg-hikids-yellow/10 hover:text-hikids-yellow"}`}
    >
      {label}
    </Link>
  );
}
