"use client";

import { motion, useInView, Variant } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  type?: "fade" | "scale" | "slide";
  viewportAmount?: number;
  once?: boolean;
}

export const MotionWrapper = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  type = "fade",
  viewportAmount = 0.1,
  once = true,
}: MotionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewportAmount, once });

  const getInitial = () => {
    if (type === "scale") return { opacity: 0, scale: 0.92 };
    
    const distance = 40;
    const initial = { opacity: 0, x: 0, y: 0 };
    
    if (direction === "up") initial.y = distance;
    if (direction === "down") initial.y = -distance;
    if (direction === "left") initial.x = distance;
    if (direction === "right") initial.x = -distance;
    
    return initial;
  };

  const getAnimate = () => {
    return {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : getInitial().x,
      y: isInView ? 0 : getInitial().y,
      scale: isInView ? 1 : (type === "scale" ? 0.92 : 1),
    };
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom ease for a premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  viewportAmount = 0.1,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  viewportAmount?: number;
  once?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewportAmount, once });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionItem = ({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const distance = 30;
  const initial = { opacity: 0, x: 0, y: 0 };
  
  if (direction === "up") initial.y = distance;
  if (direction === "down") initial.y = -distance;
  if (direction === "left") initial.x = distance;
  if (direction === "right") initial.x = -distance;

  const itemVariants = {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
