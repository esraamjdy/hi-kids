interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export function WaveDivider({
  className = "",
  flip = false,
  color = "hsl(var(--background))",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full leading-none overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
