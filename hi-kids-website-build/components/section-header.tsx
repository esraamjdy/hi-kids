import { Sparkles } from "lucide-react";
import { TextBanner } from "./text-banner";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      <div className={`mb-6 ${centered ? "mx-auto" : ""} flex items-center justify-center w-fit`}>
        <TextBanner color="hsl(var(--primary))">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3" />
            HiKids Global
          </div>
        </TextBanner>
      </div>
      <h2 className="text-subtitle text-slate-900 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 max-w-2xl text-lg lg:text-xl text-slate-500 leading-relaxed mx-auto text-pretty font-normal">
          {subtitle}
        </p>
      )}

    </div>
  );
}
