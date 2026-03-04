import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

const DIFFERENTIATORS = [
  {
    title: "Centralized real-time availability",
    description: "See which cars are actually available for your dates—no more outdated listings or double bookings.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Verified agencies",
    description: "Every partner is vetted before going live. Quality, legality, and service matter to us.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "SaaS for agencies",
    description: "Agencies get a full management system: fleet, pricing, and reservations in one place, synced with the marketplace.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Personalized agency pages",
    description: "Each partner has a dedicated page with their brand, fleet, conditions, and reviews—so you know who you're booking with.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-1 0h-1" />
      </svg>
    ),
  },
  {
    title: "Seamless customer experience",
    description: "Search, compare, and book in a few clicks. Clear info, flexible options, and support when you need it.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.514 0-1.02.05-1.595.124l-1.028.167A2 2 0 0011 7.235v4.765" />
      </svg>
    ),
  },
];

export function WhyChooseMoroccoMiles() {
  return (
    <section
      className="border-b border-zinc-100 bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="why-choose-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="why-choose-title" className="sr-only">
            Why choose MoroccoMiles
          </h2>
          <SectionTitleWithArrows titleClassName="text-amber-600">
            Why choose MoroccoMiles
          </SectionTitleWithArrows>
          <p className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            More than a listing site
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            We built a full ecosystem for travelers and agencies—not just another directory.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
