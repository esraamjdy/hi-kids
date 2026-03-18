interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-start gap-4 rounded-2xl bg-card border border-border p-6 ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-white">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
