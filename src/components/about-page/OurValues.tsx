import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

const VALUES = [
  {
    title: "Transparency",
    description:
      "Clear prices, visible conditions before you book, and no hidden fees. We believe you deserve to know exactly what you're paying for.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "Verified agencies, accurate availability, and bookings that stick. We stand behind every listing so your trip goes as planned.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "Modern technology that keeps availability and pricing in sync, and gives agencies the tools to grow without the complexity.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Local Empowerment",
    description:
      "We help Moroccan agencies reach more customers and run their operations better—so local businesses thrive alongside travelers.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export function OurValues() {
  return (
    <section
      className="border-b border-zinc-100 bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="our-values-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="our-values-title" className="sr-only">
            Our values
          </h2>
          <SectionTitleWithArrows titleClassName="text-amber-600">
            Our values
          </SectionTitleWithArrows>
          <p className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            What we stand for
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                {value.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
