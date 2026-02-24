"use client";

import Image from "next/image";

interface FloatingCharacterProps {
  type: "bubble" | "star" | "shape";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  delay?: number;
  scale?: number;
  opacity?: number;
}

export function FloatingCharacter({
  type,
  position,
  delay = 0,
  scale = 1,
  opacity = 0.6,
}: FloatingCharacterProps) {
  // Position mapping
  const positionClasses = {
    "top-left": "top-10 left-4 md:left-12",
    "top-right": "top-10 right-4 md:right-12",
    "bottom-left": "bottom-10 left-4 md:left-12",
    "bottom-right": "bottom-10 right-4 md:right-12",
  };

  // Animation mapping based on type
  const animationClasses = {
    bubble: "animate-float-gentle",
    star: "animate-bounce-gentle",
    shape: "animate-float-slow-sway",
  };

  // Size mapping
  const sizeClasses = {
    bubble: "w-16 h-16 md:w-24 md:h-24",
    star: "w-12 h-12 md:w-16 md:h-16",
    shape: "w-14 h-14 md:w-20 md:h-20",
  };

  // Get character emoji or simple SVG shapes
  const getCharacter = () => {
    switch (type) {
      case "bubble":
        return "🎈";
      case "star":
        return "⭐";
      case "shape":
        return "🎯";
      default:
        return "✨";
    }
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} ${animationClasses[type]} pointer-events-none hidden lg:block`}
      style={{
        animationDelay: `${delay}s`,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div className={`${sizeClasses[type]} flex items-center justify-center text-2xl md:text-4xl select-none`}>
        {getCharacter()}
      </div>
    </div>
  );
}

// Alternative version using actual character images (when available)
export function FloatingCharacterImage({
  type = "mascot",
  position,
  delay = 0,
  scale = 1,
  opacity = 0.7,
}: {
  type?: "mascot" | "character1" | "character2";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  delay?: number;
  scale?: number;
  opacity?: number;
}) {
  const positionClasses: Record<string, string> = {
    "top-left": "top-8 left-4 md:left-16",
    "top-right": "top-8 right-4 md:right-16",
    "bottom-left": "bottom-8 left-4 md:left-16",
    "bottom-right": "bottom-8 right-4 md:right-16",
    "center-left": "top-1/2 -translate-y-1/2 left-4 md:left-8",
    "center-right": "top-1/2 -translate-y-1/2 right-4 md:right-8",
  };

  const animationClasses = {
    mascot: "animate-float-gentle",
    character1: "animate-bounce-gentle",
    character2: "animate-float-slow-sway",
  };

  const sizeClasses = {
    mascot: "w-20 h-20 md:w-32 md:h-32",
    character1: "w-16 h-16 md:w-24 md:h-24",
    character2: "w-14 h-14 md:w-20 md:h-20",
  };

  // Using pattern images as decorative elements
  const imageSrc = "/images/patterns.png";

  return (
    <div
      className={`absolute ${positionClasses[position]} ${animationClasses[type]} pointer-events-none hidden lg:block z-0`}
      style={{
        animationDelay: `${delay}s`,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div className={`${sizeClasses[type]} relative`}>
        <Image
          src={imageSrc}
          alt="Decorative character"
          fill
          className="object-contain"
          priority={false}
        />
      </div>
    </div>
  );
}
