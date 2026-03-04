import Image from "next/image";
import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

export function OurStory() {
  return (
    <section
      className="border-b border-zinc-100 bg-zinc-50 py-14 sm:py-16 lg:py-20"
      aria-labelledby="our-story-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 id="our-story-title" className="sr-only">
              Our story
            </h2>
            <div className="flex justify-start">
              <SectionTitleWithArrows titleClassName="text-amber-600">
                Our story
              </SectionTitleWithArrows>
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Born from a need for trust and simplicity
            </h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
              <p>
                MoroccoMiles started with a simple observation: travelers in Morocco often struggled to find
                reliable car rental options. Scattered listings, unclear pricing, and outdated availability
                made planning a road trip stressful. At the same time, many serious local agencies had no
                easy way to reach customers online.
              </p>
              <p>
                We built MoroccoMiles to solve both sides. Our platform connects you with{" "}
                <strong className="font-semibold text-zinc-900">verified agencies</strong> and{" "}
                <strong className="font-semibold text-zinc-900">real-time availability</strong>—so you book
                with confidence. For agencies, we offer a single SaaS system to manage their fleet and
                reservations, with a dedicated page and visibility on MoroccoMiles.com.
              </p>
              <p>
                Today we continue to grow our network across Morocco, always with the same goal: making
                car rental transparent, efficient, and trustworthy for everyone.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-md">
              <Image
                src="/car_hero.png"
                alt="MoroccoMiles—technology and collaboration powering car rental across Morocco"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 to-transparent" />
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-1 0h-1" />
                </svg>
              </span>
              <p className="text-sm text-zinc-700">
                <strong className="font-semibold text-zinc-900">One platform.</strong> Real-time data,
                verified partners, and a better experience for travelers and agencies alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
