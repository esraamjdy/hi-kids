import React from "react";
import { Sparkles } from "lucide-react";

interface TextBannerProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
    showSparkle?: boolean;
}

export function TextBanner({
    children,
    className = "",
    color = "hsl(var(--primary))",
    showSparkle = true,
}: TextBannerProps) {
    return (
        <div className={`relative inline-flex items-center justify-center px-14 py-6 group transition-all duration-700 ${className}`}>
            {/* Background Layer 1 - Subtle Glow */}
            <div
                className="absolute inset-x-4 inset-y-2 opacity-20 blur-xl -z-20 transition-all duration-700 group-hover:opacity-40"
                style={{ backgroundColor: color }}
            />

            {/* Background Layer 2 - Offset Layer for Depth */}
            <svg
                className="absolute inset-0 w-full h-full -z-10 opacity-30 translate-x-1 translate-y-1 animate-float-slow"
                viewBox="150 200 1200 600"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1200.2,640.51l-33.22,10.78-20.52,28.27c-44.2,60.89-131.1,65.95-182.4,15.17h-357.66c-30.6,29.93-76.61,43.37-121.93,28.63l-33.22-10.81-33.21,10.81c-78.04,25.39-158.12-32.8-158.09-114.86l.02-34.93-20.55-28.25c-48.26-66.37-17.67-160.52,60.39-185.84l33.22-10.78,20.52-28.27c44.81-61.73,133.51-66.08,184.5-13.04h353.43c30.58-31.42,77.68-45.85,124.06-30.75l33.21,10.81,33.22-10.81c78.04-25.4,158.12,32.79,158.09,114.85l-.02,34.93,20.54,28.25c48.27,66.37,17.68,160.52-60.38,185.84Z"
                    fill={color}
                />
            </svg>

            {/* Background Layer 3 - Main Shape */}
            <svg
                className="absolute inset-0 w-full h-full -z-10 drop-shadow-[0_8px_15px_rgba(0,0,0,0.05)]"
                viewBox="150 200 1200 600"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1200.2,640.51l-33.22,10.78-20.52,28.27c-44.2,60.89-131.1,65.95-182.4,15.17h-357.66c-30.6,29.93-76.61,43.37-121.93,28.63l-33.22-10.81-33.21,10.81c-78.04,25.39-158.12-32.8-158.09-114.86l.02-34.93-20.55-28.25c-48.26-66.37-17.67-160.52,60.39-185.84l33.22-10.78,20.52-28.27c44.81-61.73,133.51-66.08,184.5-13.04h353.43c30.58-31.42,77.68-45.85,124.06-30.75l33.21,10.81,33.22-10.81c78.04-25.4,158.12,32.79,158.09,114.85l-.02,34.93,20.54,28.25c48.27,66.37,17.68,160.52-60.38,185.84Z"
                    fill={color}
                    className="transition-all duration-500 group-hover:brightness-105"
                />
            </svg>

            {/* Text Content */}
            <div className="relative z-10 font-black uppercase tracking-[0.2em] text-[0.7rem] sm:text-[0.8rem] whitespace-nowrap text-slate-800/90 group-hover:text-slate-900 leading-none">
                {children}
            </div>

            {/* Decorative Sparkle - Hero Match */}
            {showSparkle && (
                <div className="absolute -top-1 -right-2 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110">
                    <Sparkles
                        size={16}
                        className="animate-pulse"
                        style={{ color: color, filter: 'brightness(0.8)' }}
                    />
                </div>
            )}
        </div>
    );
}
