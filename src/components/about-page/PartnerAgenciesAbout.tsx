import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

const PARTNER_AGENCIES = [
  { id: 1, name: "AtlasCar", short: "AC" },
  { id: 2, name: "Maghreb Rent", short: "MR" },
  { id: 3, name: "DesertDrive", short: "DD" },
  { id: 4, name: "Medina Cars", short: "MC" },
  { id: 5, name: "Airport Mobility", short: "AM" },
  { id: 6, name: "Rif Auto", short: "RA" },
];

export function PartnerAgenciesAbout() {
  return (
    <section
      className="border-b border-zinc-100 bg-zinc-50 py-14 sm:py-16 lg:py-20"
      aria-labelledby="partner-agencies-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="partner-agencies-title" className="sr-only">
            Partner agencies
          </h2>
          <SectionTitleWithArrows titleClassName="text-amber-600">
            Partner agencies
          </SectionTitleWithArrows>
          <p className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Trusted by local Moroccan car rental agencies
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Our partners are verified and listed on MoroccoMiles to give you peace of mind and real-time options.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {PARTNER_AGENCIES.map((agency) => (
            <div
              key={agency.id}
              className="flex h-14 min-w-[120px] items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-sm font-semibold text-amber-700">
                {agency.short}
              </span>
              <span className="text-sm font-medium text-zinc-800">{agency.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
