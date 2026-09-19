"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { tourCategories, tours, type Tour, type TourCategory } from "@/lib/tours";

const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;

function TourCard({
  tour,
  expanded,
  onToggle
}: {
  tour: Tour;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      layout
      className="overflow-hidden border border-morocco-saffron/15 bg-morocco-canvas"
      transition={{ layout: { duration: 0.45, ease: LUXURY_EASE } }}
    >
      <motion.div layout="position" className="group relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-morocco-dark/55 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 bg-morocco-sand/90 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-morocco-saffron">
          {tour.duration}
        </span>
      </motion.div>

      <motion.div layout="position" className="px-5 py-6 sm:px-6">
        <p className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-morocco-saffron">
          <MapPin size={12} /> {tour.tagline}
        </p>
        <h2 className="font-serif text-2xl leading-tight text-morocco-dark">{tour.title}</h2>
        <button
          type="button"
          onClick={onToggle}
          className="mt-5 text-left text-[10px] uppercase tracking-[0.28em] text-stone-500 transition-colors duration-300 hover:text-morocco-saffron"
          aria-expanded={expanded}
        >
          {expanded ? "Hide Itinerary Breakdown ↑" : "View Itinerary Breakdown ↓"}
        </button>
      </motion.div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key={`${tour.id}-itinerary`}
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: LUXURY_EASE }}
            className="overflow-hidden border-t border-morocco-saffron/15 bg-morocco-sand"
          >
            <div className="space-y-0 px-5 py-6 sm:px-6">
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-morocco-saffron">Day by day</p>
              <ol className="relative space-y-6 border-l border-morocco-saffron/25 pl-6">
                {tour.days.map((day) => (
                  <li key={`${tour.id}-day-${day.day}`} className="relative">
                    <span className="absolute -left-[31px] top-1 grid size-4 place-items-center rounded-full border border-morocco-saffron bg-morocco-canvas">
                      <span className="size-1.5 rounded-full bg-morocco-saffron" />
                    </span>
                    <div className="grid gap-4 sm:grid-cols-[110px_1fr]">
                      <div className="relative aspect-square overflow-hidden border border-morocco-saffron/10">
                        <Image src={day.image} alt={day.title} fill sizes="110px" className="object-cover" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-morocco-saffron">Day {day.day}</p>
                        <h3 className="mt-1 font-serif text-xl text-morocco-dark">{day.title}</h3>
                        <p className="mt-2 font-sans text-sm leading-relaxed tracking-wide text-stone-600">{day.description}</p>
                        <p className="mt-3 inline-flex items-center gap-2 border border-morocco-saffron/20 bg-morocco-canvas px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-morocco-saffron">
                          <Clock size={12} /> {day.metric}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function ToursCatalog() {
  const [filter, setFilter] = useState<TourCategory | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const visibleTours = useMemo(
    () => (filter === "all" ? tours : tours.filter((tour) => tour.category === filter)),
    [filter]
  );

  return (
    <section className="bg-morocco-sand px-5 py-20 text-morocco-dark sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">Recommended passages</p>
            <h2 className="font-serif text-5xl leading-none sm:text-6xl">Fifteen curated roads through Morocco.</h2>
          </div>
          <p className="max-w-xl font-sans text-sm leading-relaxed tracking-wide text-stone-600 lg:justify-self-end">
            Filter by atmosphere, then open any journey for a day-by-day cultural briefing—without leaving the page.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-2 border border-morocco-saffron/10 bg-morocco-canvas p-2">
          {tourCategories.map((category) => {
            const active = filter === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setFilter(category.id);
                  setExpandedId(null);
                }}
                className={`px-4 py-3 font-serif text-sm tracking-wide transition-all duration-300 sm:px-6 sm:text-base ${
                  active
                    ? "bg-morocco-saffron text-morocco-dark"
                    : "text-stone-600 hover:bg-morocco-sand hover:text-morocco-dark"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <LayoutGroup>
          <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleTours.map((tour) => (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.35, ease: LUXURY_EASE }}
                >
                  <TourCard
                    tour={tour}
                    expanded={expandedId === tour.id}
                    onToggle={() => setExpandedId((current) => (current === tour.id ? null : tour.id))}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
