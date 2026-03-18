import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaCardProps {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: React.ReactNode;
  variant?: "default" | "secondary" | "accent";
  className?: string;
}

export function CtaCard({
  title,
  description,
  href,
  cta,
  icon,
  variant = "default",
  className = "",
}: CtaCardProps) {
  const variants = {
    default: {
      wrapper: "hover:border-primary/30 hover:shadow-primary/5",
      icon: "bg-primary/10 text-white",
      cta: "text-primary",
    },
    secondary: {
      wrapper: "hover:border-hikids-blue/30 hover:shadow-hikids-blue/5",
      icon: "bg-hikids-blue/10 text-hikids-blue",
      cta: "text-hikids-blue",
    },
    accent: {
      wrapper:
        "hover:border-hikids-yellow/50 hover:shadow-hikids-yellow/10 border-hikids-yellow/20 bg-hikids-yellow/5",
      icon: "bg-hikids-yellow/20 text-foreground", // Darker text for yellow contrast
      cta: "text-foreground",
    },
  };

  const style = variants[variant] || variants.default;

  return (
    <Link
      href={href}
      className={`group relative flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-xl hover:-translate-y-1 ${style.wrapper} ${className}`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${style.icon}`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed font-normal">
        {description}
      </p>
      <span
        className={`mt-auto inline-flex items-center gap-2 font-bold group-hover:gap-3 transition-all ${style.cta}`}
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
