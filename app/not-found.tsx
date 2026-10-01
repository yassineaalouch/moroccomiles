import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GateMark } from "@/components/GateMark";

const waysBack = [
  { href: "/destinations", label: "Destinations" },
  { href: "/tours", label: "Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
] as const;

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-morocco-dark text-morocco-sand">
      <div className="moroccan-grid absolute inset-0 opacity-[0.16]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-morocco-saffron/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-morocco-dark/20 to-morocco-dark lg:block" />

      <div aria-hidden className="pointer-events-none absolute -right-6 top-1/2 hidden w-[min(42vw,480px)] -translate-y-[46%] text-morocco-sand lg:block">
        <GateMark variant="keyhole" className="h-auto w-full" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <p className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">
          <span className="h-px w-12 bg-morocco-saffron" />
          Off the map
        </p>

        <p
          aria-hidden
          className="select-none font-serif text-[6.5rem] font-medium leading-[0.78] tracking-[-0.06em] text-morocco-sand/[0.08] sm:text-[10rem] lg:text-[12.5rem]"
        >
          404
        </p>

        <div className="-mt-6 max-w-3xl sm:-mt-12 lg:-mt-16">
          <h1 className="text-balance font-serif text-5xl font-medium leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]">
            <span className="sr-only">404. Page not found. </span>
            This road
            <br />
            <em className="font-normal text-morocco-saffron">does not exist.</em>
          </h1>
          <p className="mt-8 max-w-md text-sm leading-7 text-morocco-sand/70 sm:text-base">
            The page you followed has left the itinerary. The kingdom is still here — choose another gate, and we will meet you on the road.
          </p>
          <p lang="fr" className="mt-3 text-xs tracking-wide text-morocco-sand/40">
            Cette page n&apos;est pas sur la carte.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-4 bg-morocco-saffron px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-morocco-dark transition-all duration-300 hover:brightness-110 hover:shadow-gold"
          >
            Return home
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center border border-morocco-sand/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-morocco-sand transition-colors duration-300 hover:border-morocco-saffron hover:text-morocco-saffron"
          >
            Browse destinations
          </Link>
        </div>

        <nav aria-label="Other pages" className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-morocco-sand/10 pt-7">
          {waysBack.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.32em] text-morocco-sand/45 transition-colors duration-300 hover:text-morocco-saffron"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
