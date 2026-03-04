"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";
import { AGENCIES, AGENCY_CITIES, type Agency } from "./data";

type SortOption = "rating" | "cars" | "recent";

type FilterState = {
  city: string;
  minRating: number;
  minCars: number;
  categories: string[];
};

const ALL_CATEGORIES = ["Économique", "SUV", "Luxe", "Van", "Automatique", "Manuelle"];

export function AgenciesListingPage() {
  const [filters, setFilters] = useState<FilterState>({
    city: "",
    minRating: 0,
    minCars: 0,
    categories: [],
  });
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const handleToggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
    setCurrentPage(1);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({
      city: "",
      minRating: 0,
      minCars: 0,
      categories: [],
    });
    setCurrentPage(1);
  };

  const filteredAndSortedAgencies = useMemo(() => {
    let agencies = AGENCIES.filter((agency) => {
      if (filters.city && !agency.cities.includes(filters.city)) return false;
      if (agency.rating < filters.minRating) return false;
      if (agency.carsCount < filters.minCars) return false;
      if (
        filters.categories.length &&
        !filters.categories.some((category) => agency.categories.includes(category as any))
      ) {
        return false;
      }
      return true;
    });

    agencies = [...agencies].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "cars") return b.carsCount - a.carsCount;
      if (sortBy === "recent")
        return (
          new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime()
        );
      return 0;
    });

    return agencies;
  }, [filters, sortBy]);

  const totalAgencies = filteredAndSortedAgencies.length;
  const totalPages = Math.max(1, Math.ceil(totalAgencies / pageSize));
  const paginatedAgencies = filteredAndSortedAgencies.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const featuredAgencies = useMemo(
    () =>
      [...AGENCIES]
        .filter((agency) => agency.featured)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6),
    []
  );

  return (
    <main className="flex-1 bg-zinc-50">
      <HeroSection
        filters={filters}
        onChangeFilters={setFilters}
        onToggleCategory={handleToggleCategory}
        onSubmit={handleSearchSubmit}
        onReset={resetFilters}
      />

      <FeaturedAgenciesSection agencies={featuredAgencies} />

      <AllAgenciesSection
        agencies={paginatedAgencies}
        totalCount={totalAgencies}
        sortBy={sortBy}
        onChangeSort={setSortBy}
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={setCurrentPage}
      />

      <TrustPillarsSection />

      <TopAgenciesByCitySection />

      <AgencyOnboardingSection />

      <AgenciesTestimonialsSection />
    </main>
  );
}

type HeroSectionProps = {
  filters: FilterState;
  onChangeFilters: (next: FilterState) => void;
  onToggleCategory: (category: string) => void;
  onSubmit: (event: React.FormEvent) => void;
  onReset: () => void;
};

function HeroSection({
  filters,
  onChangeFilters,
  onToggleCategory,
  onSubmit,
  onReset,
}: HeroSectionProps) {
  return (
    <section className="border-b border-zinc-200 bg-[radial-gradient(circle_at_top,#fef9c3,white_55%,#f4f4f5)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:flex-row lg:items-center lg:gap-14 lg:pb-20 lg:pt-16">
        <div className="max-w-xl space-y-5">
          <div className="flex justify-start">
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Agencies Network
            </SectionTitleWithArrows>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Trusted Car Rental Agencies Across{" "}
            <span className="text-amber-500">Morocco</span>
          </h1>

          <p className="text-sm text-zinc-600 sm:text-base">
            Toutes les agences listées sur MoroccoMiles sont vérifiées,
            connectées en temps réel à notre plateforme et synchronisées avec
            leur flotte de véhicules pour vous garantir une disponibilité
            fiable.
          </p>

          <p className="text-xs text-zinc-500 sm:text-[13px]">
            Comparez les agences par ville, par note moyenne, par volume de
            véhicules disponibles et par catégories (Économique, SUV, Luxe, etc.)
            avant de réserver.
          </p>
        </div>

        <div className="w-full max-w-xl rounded-2xl bg-white/90 p-4 text-sm shadow-xl ring-1 ring-zinc-200 backdrop-blur">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-700">
                  Ville principale
                </label>
                <select
                  value={filters.city}
                  onChange={(event) =>
                    onChangeFilters({ ...filters, city: event.target.value })
                  }
                  className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 shadow-sm outline-none ring-amber-100 placeholder:text-zinc-400 focus:border-amber-400 focus:ring-2 [&_option]:bg-white [&_option]:text-zinc-900"
                >
                  <option value="">Toutes les villes</option>
                  {AGENCY_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-700">
                  Note minimale
                </label>
                <select
                  value={filters.minRating}
                  onChange={(event) =>
                    onChangeFilters({
                      ...filters,
                      minRating: Number(event.target.value),
                    })
                  }
                  className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 shadow-sm outline-none ring-amber-100 placeholder:text-zinc-400 focus:border-amber-400 focus:ring-2 [&_option]:bg-white [&_option]:text-zinc-900"
                >
                  <option value={0}>Toutes les notes</option>
                  <option value={4.5}>4.5+ ⭐</option>
                  <option value={4}>4.0+ ⭐</option>
                  <option value={3.5}>3.5+ ⭐</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-700">
                  Nombre minimum de voitures
                </label>
                <input
                  type="number"
                  min={0}
                  value={filters.minCars}
                  onChange={(event) =>
                    onChangeFilters({
                      ...filters,
                      minCars: Number(event.target.value),
                    })
                  }
                  className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 shadow-sm outline-none ring-amber-100 placeholder:text-zinc-400 focus:border-amber-400 focus:ring-2"
                  placeholder="Ex : 10"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-700">
                  Catégories proposées
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_CATEGORIES.map((category) => {
                    const isActive = filters.categories.includes(category);
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => onToggleCategory(category)}
                        className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium transition ${
                          isActive
                            ? "border-amber-400 bg-amber-50 text-amber-700"
                            : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={onReset}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-700"
              >
                Réinitialiser les filtres
              </button>

              <button
                type="submit"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-amber-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <span
                  className="absolute inset-0 z-0 bg-zinc-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="relative z-10">Search Agencies</span>
              </button>
            </div>
          </form>

          <p className="mt-3 text-[11px] text-zinc-500">
            Résultats affichés en temps réel selon les agences connectées au
            réseau MoroccoMiles.
          </p>
        </div>
      </div>
    </section>
  );
}

type AgenciesSectionProps = {
  agencies: Agency[];
};

function FeaturedAgenciesSection({ agencies }: AgenciesSectionProps) {
  if (!agencies.length) return null;

  return (
    <section className="border-b border-zinc-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Featured Agencies
            </SectionTitleWithArrows>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Agences les plus actives et les mieux notées
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600">
              Une sélection d&apos;agences partenaires qui performent le mieux
              sur MoroccoMiles en termes de qualité de service, de volume de
              réservations et de satisfaction client.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {agencies.map((agency) => (
            <AgencyCard key={agency.id} agency={agency} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  );
}

type AllAgenciesSectionProps = {
  agencies: Agency[];
  totalCount: number;
  sortBy: SortOption;
  onChangeSort: (next: SortOption) => void;
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
};

function AllAgenciesSection({
  agencies,
  totalCount,
  sortBy,
  onChangeSort,
  currentPage,
  totalPages,
  onChangePage,
}: AllAgenciesSectionProps) {
  return (
    <section className="border-b border-zinc-100 bg-linear-to-b from-zinc-50 to-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
              Toutes les agences
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              {totalCount} agence(s) trouvée(s) sur MoroccoMiles.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-zinc-500">Trier par</span>
            <div className="flex gap-1.5">
              <SortPill
                label="Meilleure note"
                active={sortBy === "rating"}
                onClick={() => onChangeSort("rating")}
              />
              <SortPill
                label="Plus de voitures"
                active={sortBy === "cars"}
                onClick={() => onChangeSort("cars")}
              />
              <SortPill
                label="Récemment ajoutée"
                active={sortBy === "recent"}
                onClick={() => onChangeSort("recent")}
              />
            </div>
          </div>
        </div>

        {totalCount === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-200 bg-white px-6 py-10 text-center text-sm text-zinc-600">
            Aucune agence ne correspond actuellement à ces critères. Essayez de
            réduire vos filtres ou choisissez une autre ville.
          </div>
        ) : (
          <>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {agencies.map((agency) => (
                <AgencyCard key={agency.id} agency={agency} variant="default" />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-center gap-2 text-xs">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => onChangePage(currentPage - 1)}
                  className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-medium text-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Précédent
                </button>
                <span className="text-zinc-500">
                  Page {currentPage} / {totalPages}
                </span>
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => onChangePage(currentPage + 1)}
                  className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-medium text-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Suivant
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

type SortPillProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function SortPill({ label, active, onClick }: SortPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
        active
          ? "border-amber-400 bg-amber-50 text-amber-700"
          : "border-zinc-200 bg-white text-zinc-600 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700"
      }`}
    >
      {label}
    </button>
  );
}

type AgencyCardProps = {
  agency: Agency;
  variant?: "default" | "featured";
};

function AgencyCard({ agency, variant = "default" }: AgencyCardProps) {
  const cardClasses =
    variant === "featured"
      ? "group flex h-full flex-col rounded-2xl border border-amber-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
      : "group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-md";

  return (
    <article className={cardClasses}>
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-sm font-semibold text-zinc-900 shadow-sm">
          {agency.logoInitials}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-amber-700">
            {agency.name}
          </h3>
          <p className="mt-0.5 text-xs text-zinc-500">
            {agency.primaryCity} ·{" "}
            {agency.cities.length > 1 && (
              <span>{agency.cities.length} villes desservies</span>
            )}
            {agency.cities.length === 1 && <span>{agency.cities[0]}</span>}
          </p>
        </div>
        <div className="text-right text-xs">
          <p className="font-semibold text-amber-600">
            {agency.rating.toFixed(1)}{" "}
            <span aria-hidden className="ml-0.5">
              ★
            </span>
          </p>
          <p className="text-[11px] text-zinc-500">
            {agency.reviewsCount} avis
          </p>
        </div>
      </div>

      <p className="mt-3 line-clamp-3 text-xs text-zinc-600">
        {agency.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center rounded-full bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 ring-1 ring-zinc-200">
          {agency.carsCount} voiture(s) connectée(s)
        </span>
        {agency.categories.slice(0, 3).map((category) => (
          <span
            key={category}
            className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-[11px] font-medium text-amber-700 ring-1 ring-amber-100"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <p className="text-[11px] text-zinc-500">
          Connectée depuis{" "}
          {new Date(agency.joinedAt).toLocaleDateString("fr-MA", {
            month: "short",
            year: "numeric",
          })}
        </p>
        <Link
          href={`/agencies/${agency.slug}`}
          className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1.5 text-[11px] font-semibold text-zinc-50 shadow-sm transition group-hover:bg-amber-500 group-hover:text-zinc-900"
        >
          View Agency
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </article>
  );
}

function TrustPillarsSection() {
  const pillars = [
    {
      title: "Agences vérifiées",
      description:
        "Chaque agence passe par une vérification manuelle (documents légaux, flotte, historique) avant d’être activée.",
    },
    {
      title: "Synchronisation temps réel",
      description:
        "Les disponibilités des véhicules sont mises à jour en continu grâce à notre application de gestion de flotte.",
    },
    {
      title: "Tarifs transparents",
      description:
        "Aucun frais caché : vous voyez les prix finaux négociés directement avec nos partenaires.",
    },
    {
      title: "Réservation sécurisée",
      description:
        "Infrastructure SaaS fiable avec suivi de dossier, confirmations automatisées et support client humain.",
    },
  ];

  return (
    <section className="border-y border-zinc-100 bg-zinc-50 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionTitleWithArrows titleClassName="text-amber-500">
            Pourquoi nos agences partenaires ?
          </SectionTitleWithArrows>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Un réseau pensé pour la confiance et la performance
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            MoroccoMiles n&apos;est pas seulement un site de réservation, mais
            une infrastructure digitale complète pour les agences de location au
            Maroc.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-2xl bg-white p-4 text-sm shadow-sm ring-1 ring-zinc-100"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <span aria-hidden>★</span>
              </div>
              <h3 className="text-sm font-semibold text-zinc-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopAgenciesByCitySection() {
  const defaultCities = ["Casablanca", "Marrakech", "Tanger", "Agadir", "Rabat"];
  const cities = defaultCities.filter((city) =>
    AGENCY_CITIES.includes(city)
  );
  const [activeCity, setActiveCity] = useState<string>(
    cities[0] ?? AGENCY_CITIES[0] ?? ""
  );

  const agenciesByCity = useMemo(
    () =>
      AGENCIES.filter((agency) => agency.cities.includes(activeCity)).sort(
        (a, b) => b.rating - a.rating
      ),
    [activeCity]
  );

  if (!activeCity) return null;

  return (
    <section className="border-b border-zinc-100 bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Top Agencies by City
            </SectionTitleWithArrows>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Les meilleures agences par ville
            </h2>
            <p className="mt-3 max-w-md text-xs text-zinc-500">
              Changez d&apos;onglet pour explorer les agences les mieux notées
              dans chaque ville sans recharger la page.
            </p>
          </div>
        

        <div className="mt-6 flex flex-wrap gap-2">
          {cities.map((city) => {
            const isActive = city === activeCity;
            return (
              <button
                key={city}
                type="button"
                onClick={() => setActiveCity(city)}
                className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? "border-amber-400 bg-amber-50 text-amber-700"
                    : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agenciesByCity.map((agency) => (
            <AgencyCard key={agency.id} agency={agency} variant="default" />
          ))}
          {agenciesByCity.length === 0 && (
            <p className="text-sm text-zinc-600">
              Aucune agence référencée pour cette ville pour le moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function AgencyOnboardingSection() {
  return (
    <section className="bg-linear-to-r from-amber-50 via-white to-amber-50 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-900 px-6 py-8 text-zinc-50 shadow-xl sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Pour les agences
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Own a Car Rental Agency?
              </h2>
              <p className="mt-3 text-sm text-zinc-300">
                Rejoignez MoroccoMiles et gérez votre flotte depuis une
                application web professionnelle, synchronisez vos véhicules en
                temps réel et bénéficiez d&apos;un mini-site de réservation
                entièrement brandé à votre nom.
              </p>
              <p className="mt-2 text-xs text-zinc-400">
                Notre plateforme SaaS centralise vos réservations, vos tarifs,
                vos disponibilités et vos canaux de vente (site web, appels,
                partenaires) dans un seul outil.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-xs text-zinc-200">
                <div className="rounded-2xl bg-zinc-800/60 p-3">
                  <p className="font-semibold">Dashboard agence</p>
                  <p className="mt-1 text-[11px] text-zinc-400">
                    Visualisez en temps réel vos réservations, performances et
                    revenus.
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-800/60 p-3">
                  <p className="font-semibold">Site vitrine inclus</p>
                  <p className="mt-1 text-[11px] text-zinc-400">
                    Obtenez une page agence dédiée connectée à la base centrale.
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-800/60 p-3">
                  <p className="font-semibold">Support dédié</p>
                  <p className="mt-1 text-[11px] text-zinc-400">
                    Onboarding personnalisé et assistance pour configurer votre
                    flotte.
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-800/60 p-3">
                  <p className="font-semibold">Facturation claire</p>
                  <p className="mt-1 text-[11px] text-zinc-400">
                    Abonnement mensuel simple, sans commission sur chaque
                    réservation.
                  </p>
                </div>
              </div>

                <button
                  type="button"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-amber-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm ring-1 ring-amber-300/70 hover:shadow-lg hover:ring-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  <span
                    className="absolute inset-0 z-0 bg-zinc-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                  <span className="relative z-10">Join as an Agency</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgenciesTestimonialsSection() {
  const testimonials = [
    {
      agency: "AtlasCar",
      city: "Casablanca",
      quote:
        "MoroccoMiles est devenu notre back-office central. Nous avons réduit les erreurs de planning et augmenté le taux d’occupation de la flotte.",
      rating: 4.9,
    },
    {
      agency: "Maghreb Rent",
      city: "Marrakech",
      quote:
        "La plateforme simplifie la gestion quotidienne et nous permet d’être visibles auprès d’une clientèle digitale que nous n’atteignions pas avant.",
      rating: 4.8,
    },
    {
      agency: "Rif Auto",
      city: "Tanger",
      quote:
        "Le système de synchronisation temps réel nous évite les doubles réservations et rassure nos clients internationaux.",
      rating: 4.7,
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionTitleWithArrows titleClassName="text-amber-500">
            Témoignages agences
          </SectionTitleWithArrows>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Ce que disent nos partenaires
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.agency}
              className="flex h-full flex-col rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-xs shadow-sm"
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <figcaption className="font-semibold text-zinc-900">
                    {testimonial.agency}
                  </figcaption>
                  <p className="text-[11px] text-zinc-500">
                    {testimonial.city}
                  </p>
                </div>
                <div className="text-right text-[11px] text-amber-600">
                  {testimonial.rating.toFixed(1)} ★
                </div>
              </div>
              <blockquote className="mt-1 text-[11px] text-zinc-600">
                “{testimonial.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

