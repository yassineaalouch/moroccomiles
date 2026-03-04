import Link from "next/link";

type Transmission = "Automatique" | "Manuelle";
type Fuel = "Diesel" | "Essence" | "Hybride";
type CarType = "Économique" | "SUV" | "Luxe" | "Van";

export type CarCardData = {
  id: number;
  name: string;
  year: number;
  pricePerDay: number;
  city: string;
  type: CarType;
  transmission: Transmission;
  fuel: Fuel;
  seats: number;
  agency: string;
  agencyVerified: boolean;
  image: string;
};

type CarCardProps = {
  car: CarCardData;
};

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconCog({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconFuel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="3" y1="22" x2="15" y2="22" />
      <line x1="4" y1="9" x2="14" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 8" />
    </svg>
  );
}

export function CarCard({ car }: CarCardProps) {
  return (
    <article className="group flex max-w-80 flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image - plus grande, coins arrondis en bas */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-zinc-950/70 px-2.5 py-1 text-[11px] font-medium text-zinc-50">
          {car.city}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 py-4">
        {/* Titre : nom + année */}
        <h2 className="text-base font-bold tracking-tight text-zinc-900 sm:text-lg">
          {car.name}
        </h2>
        <p className="mt-0.5 text-sm text-zinc-500">
          {car.year}
        </p>

        {/* Type • Agence ✓ Vérifiée */}
        <p className="mt-2 text-xs text-zinc-600">
          {car.type} • {car.agency}
          {car.agencyVerified && (
            <span className="ml-1 inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">
              ✓ Vérifiée
            </span>
          )}
        </p>

        {/* Specs en ligne avec icônes grises */}
        <dl className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <IconUsers className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
            <dt className="sr-only">Places</dt>
            <dd>{car.seats}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <IconCog className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
            <dt className="sr-only">Transmission</dt>
            <dd>{car.transmission}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <IconFuel className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
            <dt className="sr-only">Carburant</dt>
            <dd>{car.fuel}</dd>
          </div>
        </dl>

        {/* Prix + bouton en bas */}
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
          <div>
            <p className="text-xl font-bold text-amber-600">
              {car.pricePerDay} DH
            </p>
            <p className="text-[11px] text-zinc-500">/ jour</p>
          </div>
          <Link
            href={`/voitures/${car.id}`}
            className="group/btn relative shrink-0 overflow-hidden rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <span
              className="absolute inset-0 z-0 bg-zinc-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
              aria-hidden
            />
            <span className="relative z-10">Voir les détails</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
