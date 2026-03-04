import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

const MISSION_ICONS = [
  {
    label: "Trust",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Speed",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Reliability",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    label: "Technology",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function OurMission() {
  return (
    <section
      className="border-y border-zinc-100 bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="our-mission-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="our-mission-title" className="sr-only">
            Our mission
          </h2>
          <SectionTitleWithArrows titleClassName="text-amber-600">
            Our mission
          </SectionTitleWithArrows>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700 sm:text-xl">
            We exist to give you <strong className="font-semibold text-zinc-900">real-time car availability</strong>,
            <strong className="font-semibold text-zinc-900"> transparent pricing</strong>, and a{" "}
            <strong className="font-semibold text-zinc-900">seamless booking experience</strong>—while helping local
            agencies manage their fleet efficiently on one modern platform.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12" aria-hidden>
          {MISSION_ICONS.map(({ label, icon }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-2 text-zinc-500"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                {icon}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
