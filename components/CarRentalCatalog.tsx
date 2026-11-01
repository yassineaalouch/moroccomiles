"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { categoryLabel, rentalCars, rentalFilters, type RentalFilter } from "@/lib/car-rental";

export default function CarRentalCatalog() {
  const router = useRouter();
  const [filter, setFilter] = useState<RentalFilter>("all");
  const cars = useMemo(
    () => (filter === "all" ? rentalCars : rentalCars.filter((car) => car.category === filter)),
    [filter]
  );

  const reserve = (id: string) => {
    router.replace(`/car-rental?car=${id}#request`, { scroll: false });
    window.requestAnimationFrame(() => {
      document.getElementById("request")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter the fleet">
        {rentalFilters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item.id)}
              className={`border px-4 py-2.5 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                active
                  ? "border-morocco-saffron bg-morocco-saffron text-morocco-dark"
                  : "border-morocco-saffron/30 text-stone-600 hover:border-morocco-saffron hover:text-morocco-saffron"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cars.map((car) => (
          <article key={car.id} className="flex flex-col border border-morocco-saffron/15 bg-morocco-canvas">
            <div className="relative aspect-[16/10] bg-white">
              <Image src={car.image} alt={car.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain p-4" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.28em] text-morocco-saffron">{categoryLabel[car.category]}</p>
              <h3 className="mt-3 font-serif text-4xl leading-none">{car.name}</h3>
              <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-stone-500">
                {car.seats} · {car.gearbox}
              </p>
              <div className="mt-auto pt-6">
                <p className="font-serif text-4xl leading-none">
                  {car.priceEur} €<span className="ml-2 font-sans text-xs uppercase tracking-[0.2em] text-stone-500">/ day</span>
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-stone-500">{car.priceMad} MAD / day</p>
                <button
                  type="button"
                  onClick={() => reserve(car.id)}
                  className="mt-6 w-full bg-morocco-saffron px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.25em] text-morocco-dark transition-all duration-300 hover:brightness-110 hover:shadow-gold"
                >
                  Reserve
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
