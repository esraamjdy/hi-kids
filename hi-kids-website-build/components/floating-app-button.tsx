"use client";

import { Smartphone } from "lucide-react";
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
          className="fixed bottom-8 left-8 z-[100]"
        >
          <Link
            href={`/${locale}/parents/app`}
            className="group relative flex flex-col items-center"
          >
            {/* MINIMALIST SMARTPHONE FRAME */}
            <div className="relative w-16 h-28 bg-slate-900 rounded-[1.8rem] border-[2px] border-slate-700 shadow-[0_15px_40px_rgba(0,0,0,0.2)] group-hover:shadow-hikids-blue/30 transition-all group-hover:-translate-y-2 group-hover:rotate-3 duration-500 overflow-hidden">
              <div className="absolute inset-1 bg-white rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/HiKids-19.svg"
                  alt="App Logo"
                  fill
                  className="object-contain scale-150 group-hover:scale-175 transition-transform duration-500"
                />
              </div>
              {/* Subtle Home Pill */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-slate-200/50 rounded-full" />
            </div>

            {/* Label - Simple & Clean */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 pointer-events-none">
              <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex flex-col items-start whitespace-nowrap border border-white/10">
                <span className="text-[10px] font-black font-fredoka flex items-center gap-2">Get HiKids App <Smartphone size={10} className="text-hikids-yellow" /></span>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
