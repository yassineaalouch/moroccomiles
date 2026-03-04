function ChevronsLeft({ className }: { className?: string }) {
  return (
    <span className={`${className} group cursor-pointer`} aria-hidden>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-8 transition-all duration-300 ease-in-out group-hover:drop-shadow-[0_0_5px_rgba(245,158,11,0.6)]"
        fill="none"
        stroke="url(#gold-gradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F9E2AF" />
            <stop offset="100%" stopColor="#AF8917" />
          </linearGradient>
        </defs>
        <path d="M11 17l-5-5 5-5" />
        <path d="M18 17l-5-5 5-5" opacity="0.5" />
      </svg>
    </span>
  );
}

function ChevronsRight({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-8 transition-all duration-300 ease-in-out group-hover:drop-shadow-[0_0_5px_rgba(245,158,11,0.6)]"
        fill="none"
        stroke="url(#gold-gradient-right)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="gold-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AF8917" />
            <stop offset="50%" stopColor="#F9E2AF" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <path d="M13 7l5 5-5 5" />
        <path d="M6 7l5 5-5 5" opacity="0.5" />
      </svg>
    </span>
  );
}

export function SectionTitleWithArrows({
  children,
  titleClassName = "text-zinc-900",
}: {
  children: React.ReactNode;
  titleClassName?: string;
}) {
  return (
    <div className="flex w-full items-center justify-center gap-2 sm:gap-2">
      <span className="flex flex-1 items-center justify-end min-w-0">
        <span
          className="h-px w-full max-w-[60px] sm:max-w-[100px]"
          style={{
            background: "linear-gradient(to right, transparent, rgb(245 158 11))",
          }}
          aria-hidden
        />
        <ChevronsLeft className="shrink-0" />
      </span>
      <p className={`shrink-0 px-2 text-xs font-bold uppercase tracking-[0.25em] ${titleClassName}`}>
        {children}
      </p>
      <span className="flex flex-1 items-center justify-start min-w-0">
        <ChevronsRight className="shrink-0" />
        <span
          className="h-px w-full max-w-[60px] sm:max-w-[100px]"
          style={{
            background: "linear-gradient(to left, transparent, rgb(245 158 11))",
          }}
          aria-hidden
        />
      </span>
    </div>
  );
}
