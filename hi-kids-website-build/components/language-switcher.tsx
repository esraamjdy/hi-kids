"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { i18n, type Locale } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  it: "IT",
  pl: "PL",
};

const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Francais",
  it: "Italiano",
  pl: "Polski",
};

export function LanguageSwitcher({
  locale,
  scrolled,
  isHome,
}: {
  locale: Locale;
  scrolled?: boolean;
  isHome?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold uppercase tracking-widest transition-all ${isHome && !scrolled
            ? "text-slate-800 hover:bg-slate-800/5 hover:border-slate-800/10"
            : "text-white/90 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
          }`}
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span>{localeLabels[locale]}</span>
      </button>
      <div className="absolute right-0 top-full pt-1 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
        <div className="min-w-[180px] rounded-3xl border border-border bg-white p-2 shadow-3xl">
          {i18n.locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm transition-all ${l === locale
                  ? "bg-primary text-white shadow-xl shadow-primary/20"
                  : "text-muted-foreground hover:text-white hover:bg-primary/5"
                }`}
            >
              <span className="font-bold tracking-widest uppercase">
                {localeLabels[l]}
              </span>
              <span
                className={`text-xs font-bold ${l === locale ? "text-white/80" : "text-muted-foreground/60"}`}
              >
                {localeNames[l]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
