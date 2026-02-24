"use client";

import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = dict.common;

  const isActive = (href: string) => pathname === href;
  const isInSection = (section: string) => pathname.startsWith(`/${locale}/${section}`);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center group transition-transform hover:scale-105 duration-500"
        >
          <div className="relative h-20 w-auto aspect-[3/1]">
            <Image
              src="/images/logo.png"
              alt="HiKids Logo"
              width={192}
              height={64}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          <Link
            href={`/${locale}`}
            className={`rounded-2xl px-5 py-2.5 text-sm font-black uppercase tracking-widest transition-all ${pathname === `/${locale}`
              ? "text-white bg-white/20"
              : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
          >
            {t.nav.home}
          </Link>

          <Link
            href={`/${locale}/about`}
            className={`rounded-2xl px-5 py-2.5 text-sm font-black uppercase tracking-widest transition-all ${isActive(`/${locale}/about`)
              ? "text-white bg-white/20"
              : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
          >
            {t.nav.about}
          </Link>

          <Link
            href={`/${locale}/franchise`}
            className={`rounded-2xl px-5 py-2.5 text-sm font-black uppercase tracking-widest transition-all ${isInSection("franchise")
              ? "text-white bg-white/20"
              : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
          >
            {t.nav.franchise}
          </Link>

          <Link
            href={`/${locale}/educators`}
            className={`rounded-2xl px-5 py-2.5 text-sm font-black uppercase tracking-widest transition-all ${isInSection("educators")
              ? "text-white bg-white/20"
              : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
          >
            {t.nav.educators}
          </Link>

          <Link
            href={`/${locale}/parents`}
            className={`rounded-2xl px-5 py-2.5 text-sm font-black uppercase tracking-widest transition-all ${isInSection("parents")
              ? "text-white bg-white/20"
              : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
          >
            {t.nav.parents}
          </Link>

          <Link
            href={`/${locale}/contact`}
            className={`rounded-2xl px-5 py-2.5 text-sm font-black uppercase tracking-widest transition-all ${isActive(`/${locale}/contact`)
              ? "text-white bg-white/20"
              : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <Link
            href={`/${locale}/contact`}
            className="hidden rounded-full bg-secondary px-8 py-3.5 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-green-900/10 transition-all hover:bg-secondary/90 hover:-translate-y-0.5 lg:inline-flex"
          >
            {t.cta.contactUs}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition-all lg:hidden"
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
