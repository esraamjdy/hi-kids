import { Sparkles } from "lucide-react";

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
      <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary ${centered ? "mx-auto" : ""}`}>
        <Sparkles className="h-3 w-3" />
        HiKids Global
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground leading-relaxed mx-auto text-pretty font-medium">
          {subtitle}
        </p>
      )}

    </div>
  );
}
