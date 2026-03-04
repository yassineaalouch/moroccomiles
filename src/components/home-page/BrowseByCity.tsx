"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { SectionTitleWithArrows } from "./SectionTitleWithArrows";

const BROWSE_CITIES = [
  {
    slug: "marrakech",
    name: "Marrakech",
    carsCount: 132,
    image:
      "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    carsCount: 187,
    image:
      "https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "agadir",
    name: "Agadir",
    carsCount: 94,
    image:
      "https://images.pexels.com/photos/3999962/pexels-photo-3999962.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "tanger",
    name: "Tanger",
    carsCount: 76,
    image:
      "https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "rabat",
    name: "Rabat",
    carsCount: 88,
    image:
      "https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "fes",
    name: "Fès",
    carsCount: 62,
    image:
      "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "ouarzazate",
    name: "Ouarzazate",
    carsCount: 45,
    image:
      "https://images.pexels.com/photos/3999962/pexels-photo-3999962.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "essaouira",
    name: "Essaouira",
    carsCount: 38,
    image:
      "https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const SCROLL_OFFSET = 320;

export function BrowseByCitySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = direction === "left" ? -SCROLL_OFFSET : SCROLL_OFFSET;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      id="villes"
      className="border-b border-zinc-100 bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitleWithArrows>Parcourir par ville</SectionTitleWithArrows>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Louez une voiture dans les grandes villes du Maroc
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            Accédez en un clic aux voitures disponibles à Marrakech, Casablanca,
            Agadir, Tanger et d&apos;autres destinations.
          </p>
        </div>

        <div className="relative mt-8">
          {/* Flèche gauche */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-md transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:-left-3"
            aria-label="Défiler les villes vers la gauche"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-md transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:-right-3"
            aria-label="Défiler les villes vers la droite"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {BROWSE_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/voitures?ville=${city.slug}`}
                className="group relative flex h-40 min-w-70 shrink-0 items-end overflow-hidden rounded-3xl bg-zinc-900 text-white shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-1 hover:shadow-lg sm:min-w-75"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/70 via-zinc-950/20 to-transparent" />
                <div className="relative z-10 flex w-full items-center justify-between px-4 pb-4 text-sm">
                  <div>
                    <p className="text-sm font-semibold">{city.name}</p>
                    <p className="text-xs text-zinc-200">
                      {city.carsCount}+ voitures disponibles
                    </p>
                  </div>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-zinc-900">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
