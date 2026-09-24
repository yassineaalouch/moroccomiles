type GateVariant = "arch" | "blue" | "tower" | "keyhole";

type GateMarkProps = {
  variant: GateVariant;
  className?: string;
};

export function GateMark({ variant, className = "" }: GateMarkProps) {
  const accent = variant === "blue" ? "#2E4A3E" : "#D48C46";

  return (
    <svg viewBox="0 0 180 220" fill="none" className={className} aria-hidden="true">
      <path d="M14 210V76C14 35 48 8 90 8s76 27 76 68v134" stroke={accent} strokeWidth="3" />
      <path d="M30 210V82c0-31 24-56 60-56s60 25 60 56v128" stroke="currentColor" strokeOpacity=".5" />
      <path d="M56 210V94c0-19 15-40 34-48 19 8 34 29 34 48v116" stroke={accent} strokeWidth="2" />
      <path d="M90 46V210M56 108h68M56 146h68" stroke="currentColor" strokeOpacity=".35" />
      {variant === "blue" && <path d="m36 76 18-18 18 18 18-18 18 18 18-18 18 18" stroke={accent} strokeWidth="4" />}
      {variant === "arch" && <circle cx="90" cy="91" r="11" stroke={accent} strokeWidth="3" />}
      {variant === "tower" && <path d="M14 76h152M24 48h24M132 48h24" stroke={accent} strokeWidth="4" />}
      {variant === "keyhole" && <path d="M77 92a13 13 0 1 1 26 0l10 40H67l10-40Z" stroke={accent} strokeWidth="3" />}
      <path d="M6 210h168" stroke={accent} strokeWidth="4" />
    </svg>
  );
}
