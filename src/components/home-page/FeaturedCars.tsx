import Link from "next/link";
import { SectionTitleWithArrows } from "./SectionTitleWithArrows";
import { CarCard } from "@/components/voitures-page";
import { ALL_CARS } from "@/data/cars";

const FEATURED_COUNT = 4;

export function FeaturedCarsSection() {
  const featuredCars = [...ALL_CARS]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, FEATURED_COUNT);

  return (
    <section
      id="voitures-populaires"
      className="border-b border-zinc-100 bg-zinc-50 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitleWithArrows>Voitures populaires</SectionTitleWithArrows>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Découvrez nos modèles les plus réservés
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-600">
              Une sélection de voitures souvent choisies par les voyageurs au
              Maroc, de la citadine économique au SUV confortable.
            </p>
          </div>

          <Link
            href="/voitures"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition hover:border-amber-500 hover:text-amber-600"
          >
            Voir toutes les voitures
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
