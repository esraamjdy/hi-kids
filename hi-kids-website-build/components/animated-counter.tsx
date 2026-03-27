"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, animate } from "framer-motion";

export function AnimatedCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericString = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9,\.]/g, "");
  const targetValue = parseInt(numericString, 10);

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView && !isNaN(targetValue)) {
      const controls = animate(0, targetValue, {
        duration: 2.5, // the amount of time the counter takes
        ease: [0.16, 1, 0.3, 1], // Smooth custom easing (like Safari/Apple scrolling)
        delay: 0.2,
        onUpdate: (latest) => {
          if (targetValue >= 1000) {
            setDisplayValue(Math.floor(latest).toLocaleString("en-US"));
          } else {
            setDisplayValue(Math.floor(latest).toString());
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, targetValue]);

  if (isNaN(targetValue)) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className="inline-flex items-end">
      {/* The Number */}
      <motion.span
        className={className}
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 30, filter: "blur(8px)" }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {displayValue}
        {/* The Suffix (e.g. '+') stylized as an accent */}
        {suffix && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1.2, // Pops in right after the number finishes most of its easing
            }}
            className="text-[#FFEB00] ml-1 inline-block drop-shadow-md"
            style={{
              WebkitTextStroke: "2px #00aae5",
              paintOrder: "stroke fill",
            }}
          >
            {suffix}
          </motion.span>
        )}
      </motion.span>
    </span>
  );
}
