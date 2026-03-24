"use client";

import { Smartphone, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";

interface FloatingAppButtonProps {
  locale: Locale;
}

export function FloatingAppButton({ locale }: FloatingAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: -50 }}
          className="fixed bottom-8 left-8 z-[100] flex flex-col gap-4"
        >
          {/* FRANCHISE BUTTON */}
          <Link
            href={`/${locale}/franchise`}
            className="group relative"
            aria-label="Franchise"
          >
            <div className="h-14 w-14 rounded-2xl bg-slate-900 text-white shadow-xl transition-all hover:-translate-y-1 hover:scale-110 flex items-center justify-center p-0">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/franchise-icon-v2.svg"
                  alt="Franchise Icon"
                  fill
                  className="brightness-0 invert object-contain scale-125"
                />
              </div>
            </div>
            {/* Label */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap bg-slate-900 text-white px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-2xl">
              Franchise
            </div>
          </Link>

          {/* APP BUTTON */}
          <Link
            href={`/${locale}/parents/app`}
            className="group relative"
            aria-label="HiKids App"
          >
            <div className="h-14 w-14 rounded-2xl bg-hikids-blue text-white shadow-xl transition-all hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
              <Smartphone size={28} />
            </div>
            {/* Label */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap bg-hikids-blue text-white px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-2xl">
              HiKids App
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
