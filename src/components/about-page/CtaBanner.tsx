import Link from "next/link";

export function CtaBanner() {
  return (
    <section
      className="border-b border-zinc-200 bg-zinc-900 py-14 sm:py-16 lg:py-20"
      aria-labelledby="cta-banner-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-zinc-700 bg-linear-to-br from-zinc-900 to-zinc-800 px-6 py-12 text-center sm:px-10 sm:py-14">
          <div className="max-w-2xl">
            <h2
              id="cta-banner-title"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Own a car rental agency? Join MoroccoMiles today.
            </h2>
            <p className="mt-4 text-sm text-zinc-300 sm:text-base">
              Get more visibility, manage your fleet in one place, and sync availability and reservations in real time. Start with a free trial—no long-term commitment.
            </p>
          </div>
        <Link
          href="/agences#for-agencies"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          <span
            className="absolute inset-0 z-0 bg-zinc-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
            aria-hidden
          />
          <span className="relative z-10 flex items-center gap-2">
            Start free trial / Join now
            <span aria-hidden>→</span>
          </span>
        </Link>
        </div>
      </div>
    </section>
  );
}
