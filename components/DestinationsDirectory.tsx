"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { MoroccoDestinationSummary } from "@/data/moroccoData";

const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;

type DestinationsDirectoryProps = {
  cities: MoroccoDestinationSummary[];
  regions: string[];
};

const fold = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

export default function DestinationsDirectory({ cities, regions }: DestinationsDirectoryProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filtered = useMemo(() => {
    const needle = fold(query);
    if (!needle) return cities;

    return cities.filter((city) => {
      const haystack = fold(`${city.name} ${city.slug} ${city.eyebrow} ${city.region}`);
      return haystack.includes(needle);
    });
  }, [cities, query]);

  const openCity = (slug: string) => {
    sessionStorage.setItem(`moroccoMilesCityTransition:${slug}`, "pending");
    router.push(`/destinations/${slug}`);
  };

  return (
    <section className="relative px-5 pb-24 pt-6 sm:px-8 sm:pb-32 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">The atlas of cities</p>
          <h1 className="font-serif text-4xl text-morocco-dark">Regions of Morocco</h1>
          <p className="mt-5 font-sans text-sm leading-relaxed tracking-wide text-stone-600">
            Imperial medinas, Atlantic citadels, Rif blues, Saharan ksars and Atlas highlands—each destination a distinct threshold into the kingdom.
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {regions.map((region) => (
              <li
                key={region}
                className="text-[10px] uppercase tracking-[0.28em] text-morocco-dark/70"
              >
                {region}
              </li>
            ))}
          </ul>
        </header>

        <div className="mx-auto mt-12 flex w-full max-w-md justify-center">
          <label htmlFor="destination-search" className="sr-only">
            Search Moroccan cities
          </label>
          <input
            id="destination-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a city — Tanger, Fes, Merzouga…"
            autoComplete="off"
            className="w-full max-w-md rounded-sm border border-morocco-saffron/20 bg-morocco-canvas px-6 py-3 font-sans text-sm tracking-wide shadow-sm focus:outline-none focus:ring-1 focus:ring-morocco-saffron"
          />
        </div>

        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.32em] text-stone-500">
          {filtered.length} {filtered.length === 1 ? "destination" : "destinations"}
        </p>

        <LayoutGroup>
          <motion.div layout className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((city, index) => (
                <motion.article
                  key={city.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.04, ease: LUXURY_EASE }}
                  className="group bg-morocco-canvas shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => openCity(city.slug)}
                    onMouseEnter={() => router.prefetch(`/destinations/${city.slug}`)}
                    className="w-full text-left"
                    aria-label={`Explore ${city.name}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={city.cover}
                        alt={`${city.name}, Morocco`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-[1.02] group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex items-end justify-between gap-4 px-6 py-6">
                      <div>
                        <p className="mb-2 text-[9px] uppercase tracking-[0.32em] text-morocco-saffron">{city.region}</p>
                        <h2 className="font-serif text-2xl uppercase tracking-[0.08em] text-morocco-dark">{city.name}</h2>
                        <p className="mt-2 font-serif text-sm italic text-stone-500">
                          {city.name} - {city.eyebrow}
                        </p>
                      </div>
                      <span className="grid size-11 shrink-0 place-items-center border border-morocco-saffron/30 text-morocco-saffron transition-colors duration-300 group-hover:border-morocco-saffron group-hover:bg-morocco-saffron group-hover:text-morocco-dark">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </button>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-serif text-2xl text-morocco-dark">
            No cities match <em className="text-morocco-saffron">{query}</em>.
          </p>
        )}
      </div>
    </section>
  );
}
