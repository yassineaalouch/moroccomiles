 "use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AGENCIES, getAgencyBySlug } from "./data";

type AgencyProfilePageProps = {
  slug: string;
};

type AvailabilityStatus = "Disponible" | "Réservée";

type AgencyCar = {
  id: number;
  name: string;
  year: number;
  pricePerDay: number;
  category: "Économique" | "SUV" | "Luxe" | "Van";
  transmission: "Automatique" | "Manuelle";
  fuel: "Diesel" | "Essence" | "Hybride";
  seats: number;
  image: string;
  availability: AvailabilityStatus;
};

type AgencyReview = {
  id: number;
  customerName: string;
  rating: number;
  date: string;
  comment: string;
};

// Placeholder data: in production, replace with real DB/API calls
const AGENCY_CARS: Record<number, AgencyCar[]> = {
  1: [
    {
      id: 101,
      name: "Dacia Duster",
      year: 2022,
      pricePerDay: 320,
      category: "SUV",
      transmission: "Manuelle",
      fuel: "Diesel",
      seats: 5,
      image:
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
      availability: "Disponible",
    },
    {
      id: 102,
      name: "Toyota Yaris",
      year: 2021,
      pricePerDay: 290,
      category: "Économique",
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      image:
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
      availability: "Réservée",
    },
  ],
};

const AGENCY_REVIEWS: Record<number, AgencyReview[]> = {
  1: [
    {
      id: 1,
      customerName: "Yassine",
      rating: 5,
      date: "2024-10-12",
      comment:
        "Service impeccable, véhicule récent et propre. Communication fluide avant et pendant la location.",
    },
    {
      id: 2,
      customerName: "Sara",
      rating: 4,
      date: "2024-09-02",
      comment:
        "Très bonne expérience globale. Un léger retard à la livraison mais l’équipe a été réactive.",
    },
  ],
};

const AGENCY_STATS: Record<
  number,
  {
    yearsInBusiness: number;
    completedRentals: number;
    avgResponseMinutes: number;
  }
> = {
  1: {
    yearsInBusiness: 7,
    completedRentals: 3200,
    avgResponseMinutes: 18,
  },
};

export function AgencyProfilePage({ slug }: AgencyProfilePageProps) {
  const agency = getAgencyBySlug(slug);

  if (!agency) {
    return (
      <main className="flex-1 bg-zinc-50">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-zinc-900">
            Agence introuvable
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Cette agence n&apos;est plus disponible ou n&apos;a pas encore été
            activée sur MoroccoMiles.
          </p>
          <Link
            href="/agences"
            className="mt-6 inline-flex items-center rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-amber-400"
          >
            Retour à toutes les agences
          </Link>
        </section>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    name: agency.name,
    url: `https://moroccomiles.com/agencies/${agency.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: agency.primaryCity,
      addressCountry: "MA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: agency.rating.toFixed(1),
      reviewCount: agency.reviewsCount,
    },
  };

  const relatedAgencies = AGENCIES.filter(
    (other) =>
      other.slug !== agency.slug &&
      other.cities.some((city) => agency.cities.includes(city))
  ).slice(0, 3);

  const cars = AGENCY_CARS[agency.id] ?? [];
  const reviews = AGENCY_REVIEWS[agency.id] ?? [];
  const stats = AGENCY_STATS[agency.id] ?? {
    yearsInBusiness: 5,
    completedRentals: 1500,
    avgResponseMinutes: 30,
  };

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [transmissionFilter, setTransmissionFilter] = useState<string>("");
  const [currentReviewsPage, setCurrentReviewsPage] = useState(1);
  const reviewsPageSize = 3;

  const filteredCars = useMemo(
    () =>
      cars.filter((car) => {
        if (car.pricePerDay < minPrice || car.pricePerDay > maxPrice) {
          return false;
        }
        if (categoryFilter && car.category !== categoryFilter) {
          return false;
        }
        if (transmissionFilter && car.transmission !== transmissionFilter) {
          return false;
        }
        return true;
      }),
    [cars, minPrice, maxPrice, categoryFilter, transmissionFilter]
  );

  const totalReviews = reviews.length || agency.reviewsCount;
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length
      : agency.rating;

  const ratingBreakdown = useMemo(() => {
    const base = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } as Record<number, number>;
    reviews.forEach((review) => {
      base[review.rating] = (base[review.rating] ?? 0) + 1;
    });
    return base;
  }, [reviews]);

  const paginatedReviews = useMemo(() => {
    if (!reviews.length) return [];
    const start = (currentReviewsPage - 1) * reviewsPageSize;
    return reviews.slice(start, start + reviewsPageSize);
  }, [reviews, currentReviewsPage]);

  const totalReviewsPages = Math.max(
    1,
    Math.ceil((reviews.length || 1) / reviewsPageSize)
  );

  const userHasVerifiedBooking = false;

  return (
    <main className="flex-1 bg-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header: logo, name, verified badge, meta, actions */}
      <section className="border-b border-zinc-200 bg-[radial-gradient(circle_at_top,#fef9c3,white_55%,#f4f4f5)]">
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-base font-semibold text-zinc-900 shadow-sm sm:h-18 sm:w-18">
                {agency.logoInitials}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                    {agency.name}
                  </h1>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-200">
                    <span aria-hidden>✓</span>
                    Verified Agency
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-600">
                  {agency.primaryCity} · {agency.cities.join(" · ")}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-950 px-2.5 py-1 text-[11px] font-semibold text-zinc-50">
                    <span aria-hidden>★</span>
                    {averageRating.toFixed(1)} · {totalReviews} avis
                  </span>
                  <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700">
                    {agency.carsCount} voiture(s) disponible(s)
                  </span>
                  {agency.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700 ring-1 ring-amber-100"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs text-zinc-600 sm:flex-row sm:items-center sm:gap-3">
              <Link
                href={`/voitures?ville=${encodeURIComponent(
                  agency.primaryCity
                )}`}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-xs font-semibold text-zinc-900 shadow-sm transition hover:bg-amber-400"
              >
                View Available Cars
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition hover:border-amber-300 hover:text-amber-700"
              >
                Contact Agency
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cover banner */}
      <section className="border-b border-zinc-200 bg-zinc-900">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-b-3xl">
          <div className="relative h-52 w-full sm:h-60 lg:h-72">
            <img
              src="https://images.pexels.com/photos/8436120/pexels-photo-8436120.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt={`Bannière de l'agence ${agency.name}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/30 to-zinc-900/10" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <p className="max-w-2xl text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
                {agency.primaryCity} · MoroccoMiles Partner
              </p>
              <p className="mt-2 max-w-2xl text-sm text-zinc-50 sm:text-base">
                Une flotte connectée en temps réel pour des locations simples,
                transparentes et parfaitement adaptées à vos trajets au Maroc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About + stats */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="space-y-4 text-sm text-zinc-700">
              <h2 className="text-base font-semibold text-zinc-900">
                À propos de l&apos;agence
              </h2>
              <p>
                {agency.description} Basée à {agency.primaryCity}, cette agence
                accompagne des centaines de voyageurs, familles et
                professionnels chaque année avec une flotte entretenue et un
                support client réactif.
              </p>
              <p className="text-xs text-zinc-500">
                Toutes les informations (flotte, notes, disponibilité, politiques
                de location) sont synchronisées avec la base centrale
                MoroccoMiles, afin de garantir une expérience fiable et à jour.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <StatCard
                label="Années d&apos;expérience"
                value={`${stats.yearsInBusiness}+`}
                helper="Présence continue sur le marché local"
              />
              <StatCard
                label="Locations complétées"
                value={stats.completedRentals.toLocaleString("fr-MA")}
                helper="Dossiers gérés via MoroccoMiles et canaux directs"
              />
              <StatCard
                label="Temps moyen de réponse"
                value={`${stats.avgResponseMinutes} min`}
                helper="Sur les demandes reçues via la plateforme"
              />
              <StatCard
                label="Satisfaction client"
                value={`${averageRating.toFixed(1)}/5`}
                helper={`${totalReviews} avis vérifiés sur MoroccoMiles`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Available cars for this agency */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
                Available Cars from This Agency
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Flotte synchronisée en temps réel avec MoroccoMiles.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4 text-xs shadow-sm">
            <div className="flex flex-wrap items-end gap-3">
              <div>
                <label className="block text-[11px] font-medium text-zinc-600">
                  Prix min (DH/jour)
                </label>
                <input
                  type="number"
                  min={0}
                  value={minPrice}
                  onChange={(event) => setMinPrice(Number(event.target.value))}
                  className="mt-1 w-28 rounded-xl border border-zinc-200 bg-white px-2 py-1 text-[11px] text-zinc-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-zinc-600">
                  Prix max (DH/jour)
                </label>
                <input
                  type="number"
                  min={0}
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(Number(event.target.value))}
                  className="mt-1 w-28 rounded-xl border border-zinc-200 bg-white px-2 py-1 text-[11px] text-zinc-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-zinc-600">
                  Catégorie
                </label>
                <select
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value)}
                  className="mt-1 w-32 rounded-xl border border-zinc-200 bg-white px-2 py-1 text-[11px] text-zinc-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 [&_option]:bg-white [&_option]:text-zinc-900"
                >
                  <option value="">Toutes</option>
                  <option value="Économique">Économique</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxe">Luxe</option>
                  <option value="Van">Van</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-zinc-600">
                  Transmission
                </label>
                <select
                  value={transmissionFilter}
                  onChange={(event) =>
                    setTransmissionFilter(event.target.value)
                  }
                  className="mt-1 w-32 rounded-xl border border-zinc-200 bg-white px-2 py-1 text-[11px] text-zinc-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 [&_option]:bg-white [&_option]:text-zinc-900"
                >
                  <option value="">Toutes</option>
                  <option value="Automatique">Automatique</option>
                  <option value="Manuelle">Manuelle</option>
                </select>
              </div>
            </div>
          </div>

          {filteredCars.length === 0 ? (
            <p className="mt-6 text-sm text-zinc-600">
              Aucun véhicule ne correspond actuellement à ces critères pour
              cette agence. Essayez d&apos;ajuster les filtres.
            </p>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCars.map((car) => (
                <AgencyCarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Customer reviews */}
      <section className="border-t border-zinc-100 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
                Avis clients
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Basé sur des locations réellement effectuées via MoroccoMiles.
              </p>
            </div>
            {userHasVerifiedBooking && (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-zinc-900 shadow-sm transition hover:bg-amber-400"
              >
                Leave a Review
              </button>
            )}
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs shadow-sm">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-500">
                Note moyenne
              </p>
              <div className="mt-2 flex items-end gap-3">
                <p className="text-3xl font-semibold text-zinc-900">
                  {averageRating.toFixed(1)}
                </p>
                <div className="space-y-0.5 text-[11px] text-zinc-600">
                  <p className="flex items-center gap-1">
                    <span className="text-amber-500">★★★★★</span>
                    <span>sur 5</span>
                  </p>
                  <p>{totalReviews} avis au total</p>
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                {[5, 4, 3, 2, 1].map((star) => {
                  const count = ratingBreakdown[star] ?? 0;
                  const percent =
                    totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                  return (
                    <div
                      key={star}
                      className="flex items-center gap-2 text-[11px]"
                    >
                      <span className="w-10 text-right text-zinc-500">
                        {star}★
                      </span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200">
                        <div
                          className="h-full rounded-full bg-amber-400 transition-all"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-zinc-500">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              {paginatedReviews.length === 0 ? (
                <p className="text-xs text-zinc-600">
                  Aucun avis détaillé n&apos;est encore publié pour cette
                  agence. Les premières notes apparaîtront dès les premières
                  locations confirmées via MoroccoMiles.
                </p>
              ) : (
                paginatedReviews.map((review) => (
                  <article
                    key={review.id}
                    className="rounded-2xl border border-zinc-200 bg-white p-4 text-xs shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-zinc-900">
                          {review.customerName}
                        </p>
                        <p className="text-[11px] text-zinc-500">
                          {new Date(review.date).toLocaleDateString("fr-MA")}
                        </p>
                      </div>
                      <div className="rounded-full bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700">
                        {review.rating.toFixed(1)} ★
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] text-zinc-700">
                      “{review.comment}”
                    </p>
                  </article>
                ))
              )}

              {reviews.length > 0 && totalReviewsPages > 1 && (
                <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-600">
                  <button
                    type="button"
                    disabled={currentReviewsPage === 1}
                    onClick={() =>
                      setCurrentReviewsPage((page) => Math.max(1, page - 1))
                    }
                    className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 font-medium disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Précédent
                  </button>
                  <span>
                    Page {currentReviewsPage} / {totalReviewsPages}
                  </span>
                  <button
                    type="button"
                    disabled={currentReviewsPage === totalReviewsPages}
                    onClick={() =>
                      setCurrentReviewsPage((page) =>
                        Math.min(totalReviewsPages, page + 1)
                      )
                    }
                    className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 font-medium disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Suivant
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rental policies */}
      <RentalPoliciesSection />

      {/* Location & contact */}
      <LocationSection agencyName={agency.name} city={agency.primaryCity} />

      {/* Why book with this agency */}
      <WhyBookSection />

      {/* Final CTA */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
            Ready to Book Your Car in {agency.primaryCity}?
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Parcourez les véhicules disponibles de cette agence ou comparez
            d&apos;autres partenaires MoroccoMiles dans la même ville.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={`/voitures?ville=${encodeURIComponent(
                agency.primaryCity
              )}`}
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2.5 text-xs font-semibold text-zinc-900 shadow-sm transition hover:bg-amber-400"
            >
              Browse Available Cars
            </Link>
            <Link
              href={`/agences?ville=${encodeURIComponent(
                agency.primaryCity
              )}`}
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition hover:border-amber-300 hover:text-amber-700"
            >
              Compare Other Agencies
            </Link>
          </div>
        </div>
      </section>

      {relatedAgencies.length > 0 && (
        <section className="border-t border-zinc-100 bg-white py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold text-zinc-900">
              Agences similaires dans la région
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {relatedAgencies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/agencies/${other.slug}`}
                  className="group rounded-2xl border border-zinc-200 bg-white p-4 text-xs shadow-sm transition hover:border-amber-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-[11px] font-semibold text-zinc-900">
                      {other.logoInitials}
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 group-hover:text-amber-700">
                        {other.name}
                      </p>
                      <p className="text-[11px] text-zinc-500">
                        {other.primaryCity} · {other.rating.toFixed(1)} ★
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

type StatCardProps = {
  label: string;
  value: string | number;
  helper: string;
};

function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-50 p-3 text-xs shadow-sm ring-1 ring-zinc-100">
      <div className="absolute right-3 top-3 h-7 w-7 rounded-full bg-amber-100" />
      <p className="text-[11px] font-medium text-zinc-500">{label}</p>
      <p className="mt-1 text-base font-semibold text-zinc-900">{value}</p>
      <p className="mt-1 text-[11px] text-zinc-500">{helper}</p>
    </div>
  );
}

type AgencyCarCardProps = {
  car: AgencyCar;
};

function AgencyCarCard({ car }: AgencyCarCardProps) {
  const isAvailable = car.availability === "Disponible";
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 w-full overflow-hidden bg-zinc-100">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-zinc-950/70 px-2.5 py-1 text-[11px] font-medium text-zinc-50">
          {car.category}
        </div>
        <div
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-medium ${
            isAvailable
              ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
              : "bg-zinc-100 text-zinc-700 ring-1 ring-zinc-300"
          }`}
        >
          {isAvailable ? "Disponible" : "Réservée"}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-4 text-sm">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              {car.name}{" "}
              <span className="text-xs font-normal text-zinc-500">
                • {car.year}
              </span>
            </h3>
            <dl className="mt-1 flex flex-wrap gap-1.5 text-[11px] text-zinc-600">
              <div className="inline-flex items-center gap-1 rounded-full bg-zinc-50 px-2 py-1">
                <span aria-hidden>⚙️</span>
                <dt className="sr-only">Transmission</dt>
                <dd>{car.transmission}</dd>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-zinc-50 px-2 py-1">
                <span aria-hidden>⛽</span>
                <dt className="sr-only">Carburant</dt>
                <dd>{car.fuel}</dd>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-zinc-50 px-2 py-1">
                <span aria-hidden>👥</span>
                <dt className="sr-only">Places</dt>
                <dd>{car.seats} places</dd>
              </div>
            </dl>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-zinc-500">À partir de</p>
            <p className="text-base font-semibold text-amber-600">
              {car.pricePerDay} DH
            </p>
            <p className="text-[11px] text-zinc-500">/ jour</p>
          </div>
        </div>
        <button
          type="button"
          disabled={!isAvailable}
          className="mt-3 inline-flex items-center justify-center rounded-xl bg-amber-500 px-3 py-2 text-xs font-semibold text-zinc-900 shadow-sm transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Book Now
        </button>
      </div>
    </article>
  );
}

function RentalPoliciesSection() {
  const [open, setOpen] = useState<string | null>("documents");
  const toggle = (key: string) =>
    setOpen((current) => (current === key ? null : key));

  const panels: { key: string; title: string; content: string }[] = [
    {
      key: "documents",
      title: "Documents requis",
      content:
        "Permis de conduire valide (minimum 2 ans), pièce d’identité ou passeport en cours de validité, et carte bancaire pour le dépôt.",
    },
    {
      key: "deposit",
      title: "Dépôt de garantie",
      content:
        "Un dépôt de garantie est bloqué sur carte bancaire au retrait du véhicule. Le montant varie selon la catégorie et est libéré après restitution si aucun dommage n’est constaté.",
    },
    {
      key: "age",
      title: "Âge minimum du conducteur",
      content:
        "L’âge minimum requis est de 23 ans pour les catégories Économique et de 25 ans pour certaines catégories SUV et Luxe.",
    },
    {
      key: "insurance",
      title: "Assurance & couverture",
      content:
        "Les véhicules incluent une assurance responsabilité civile. Des options de rachat partiel ou total de franchise peuvent être proposées lors de la réservation.",
    },
    {
      key: "cancellation",
      title: "Politique d’annulation",
      content:
        "Les conditions d’annulation peuvent varier selon la saison. En général, une annulation gratuite est possible jusqu’à 48h avant le départ.",
    },
    {
      key: "fuel",
      title: "Politique carburant",
      content:
        "Sauf indication contraire, la politique appliquée est plein/plein : le véhicule est remis avec le plein et doit être restitué avec le plein.",
    },
  ];

  return (
    <section className="border-t border-zinc-100 bg-zinc-50 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
          Conditions et politiques de location
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          Ces informations sont fournies par l&apos;agence et vérifiées par
          MoroccoMiles autant que possible.
        </p>

        <div className="mt-4 space-y-2">
          {panels.map((panel) => {
            const isOpen = open === panel.key;
            return (
              <div
                key={panel.key}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white text-xs shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(panel.key)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                >
                  <span className="font-medium text-zinc-900">
                    {panel.title}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-zinc-100 px-4 py-3 text-[11px] text-zinc-600">
                    {panel.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type LocationSectionProps = {
  agencyName: string;
  city: string;
};

function LocationSection({ agencyName, city }: LocationSectionProps) {
  const address = `${city}, Maroc`;
  const phone = "+212 6 12 34 56 78";
  const email = "contact@moroccomiles-agency.com";
  const workingHours = "Lundi – Dimanche · 08h00 – 20h00";

  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${city}, Morocco`
  )}&output=embed`;

  return (
    <section className="border-t border-zinc-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
              Localisation & contact
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Coordonnées communiquées par l&apos;agence et vérifiées par
              MoroccoMiles.
            </p>
            <dl className="mt-4 space-y-2 text-xs text-zinc-700">
              <div>
                <dt className="font-medium text-zinc-900">Adresse</dt>
                <dd>{address}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900">Téléphone</dt>
                <dd>{phone}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900">Email</dt>
                <dd>{email}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900">Horaires</dt>
                <dd>{workingHours}</dd>
              </div>
            </dl>
            <button
              type="button"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-zinc-900 shadow-sm transition hover:bg-amber-400"
            >
              Get Directions
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
            <iframe
              title={`Localisation de ${agencyName}`}
              src={mapsSrc}
              loading="lazy"
              className="h-64 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyBookSection() {
  const items = [
    {
      title: "Disponibilité en temps réel",
      description:
        "Les créneaux et catégories affichés proviennent directement du système de gestion de l&apos;agence, synchronisé à MoroccoMiles.",
    },
    {
      title: "Tarification transparente",
      description:
        "Les prix affichés sont négociés avec l&apos;agence, sans frais cachés ni surprimes non indiquées.",
    },
    {
      title: "Avis vérifiés",
      description:
        "Seuls les locataires ayant réellement complété une réservation peuvent laisser un avis public.",
    },
    {
      title: "Support réactif",
      description:
        "Une équipe MoroccoMiles dédiée pour vous accompagner avant, pendant et après votre location.",
    },
  ];

  return (
    <section className="border-t border-zinc-100 bg-zinc-50 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
            Why Book with This Agency?
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Une expérience structurée et fiable, rendue possible par la
            plateforme MoroccoMiles.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-4 text-xs shadow-sm ring-1 ring-zinc-100"
            >
              <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-[11px] text-amber-700">
                ★
              </div>
              <h3 className="text-sm font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-1 text-[11px] text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

