"use client";

import { useMemo, useState, useEffect } from "react";
import { CarsSearchBar } from "./CarsSearchBar";
import { CarsResultsBar } from "./CarsResultsBar";
import { CarsFiltersContent } from "./CarsFiltersContent";
import { CarsGrid } from "./CarsGrid";
import { ALL_CARS, type CarType, type Transmission, type Fuel } from "@/data/cars";

 type SortOption = "price-asc" | "price-desc" | "newest" | "popular";

 type CarsListingPageProps = {
   initialCity?: string | null;
   initialPickupDate?: string | null;
   initialReturnDate?: string | null;
 };

 export function CarsListingPage({
   initialCity,
   initialPickupDate,
   initialReturnDate,
 }: CarsListingPageProps) {
   const [city, setCity] = useState(initialCity ?? "");
   const [pickupDate, setPickupDate] = useState(initialPickupDate ?? "");
   const [returnDate, setReturnDate] = useState(initialReturnDate ?? "");

   const [minPrice, setMinPrice] = useState(150);
   const [maxPrice, setMaxPrice] = useState(800);

   const [selectedTypes, setSelectedTypes] = useState<CarType[]>([]);
   const [selectedTransmissions, setSelectedTransmissions] = useState<
     Transmission[]
   >([]);
   const [selectedFuels, setSelectedFuels] = useState<Fuel[]>([]);
   const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
   const [selectedAgencies, setSelectedAgencies] = useState<string[]>([]);

   const [sortBy, setSortBy] = useState<SortOption>("popular");
   const [currentPage, setCurrentPage] = useState(1);
   const pageSize = 15;

   const [isFiltersOpen, setIsFiltersOpen] = useState(false);
   const [filtersPanelVisible, setFiltersPanelVisible] = useState(false);

   useEffect(() => {
     if (isFiltersOpen) {
       const id = setTimeout(() => setFiltersPanelVisible(true), 20);
       return () => clearTimeout(id);
     }
     setFiltersPanelVisible(false);
   }, [isFiltersOpen]);

   const closeFiltersPanel = () => {
     setFiltersPanelVisible(false);
     setTimeout(() => setIsFiltersOpen(false), 300);
   };

   const toggleInArray = <T,>(
     value: T,
     array: T[],
     setter: (next: T[]) => void
   ) => {
     setter(
       array.includes(value)
         ? array.filter((item) => item !== value)
         : [...array, value]
     );
   };

   const filteredAndSortedCars = useMemo(() => {
     let cars = ALL_CARS.filter((car) => {
       if (city && car.city.toLowerCase() !== city.toLowerCase()) return false;
       if (car.pricePerDay < minPrice || car.pricePerDay > maxPrice)
         return false;
       if (selectedTypes.length && !selectedTypes.includes(car.type))
         return false;
       if (
         selectedTransmissions.length &&
         !selectedTransmissions.includes(car.transmission)
       )
         return false;
       if (selectedFuels.length && !selectedFuels.includes(car.fuel))
         return false;
       if (selectedSeats.length && !selectedSeats.includes(car.seats))
         return false;
       if (selectedAgencies.length && !selectedAgencies.includes(car.agency))
         return false;
       return true;
     });

     cars = [...cars].sort((a, b) => {
       if (sortBy === "price-asc") return a.pricePerDay - b.pricePerDay;
       if (sortBy === "price-desc") return b.pricePerDay - a.pricePerDay;
       if (sortBy === "newest")
         return (
           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
         );
       if (sortBy === "popular") return b.popularity - a.popularity;
       return 0;
     });

     return cars;
   }, [
     city,
     minPrice,
     maxPrice,
     selectedTypes,
     selectedTransmissions,
     selectedFuels,
     selectedSeats,
     selectedAgencies,
     sortBy,
   ]);

   const totalCars = filteredAndSortedCars.length;
   const totalPages = Math.max(1, Math.ceil(totalCars / pageSize));
   const paginatedCars = filteredAndSortedCars.slice(
     (currentPage - 1) * pageSize,
     currentPage * pageSize
   );

   const handleResetFilters = () => {
     setMinPrice(150);
     setMaxPrice(800);
     setSelectedTypes([]);
     setSelectedTransmissions([]);
     setSelectedFuels([]);
     setSelectedSeats([]);
     setSelectedAgencies([]);
     setSortBy("popular");
     setCurrentPage(1);
   };

   const handleSearchSubmit = (event: React.FormEvent) => {
     event.preventDefault();
     setCurrentPage(1);
   };

   const summaryCityLabel = city || "tout le Maroc";

   return (
     <main className="flex-1 bg-zinc-50">
       <section
         aria-label="Modifier la recherche"
         className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur"
       >
         <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <CarsSearchBar
            city={city}
            pickupDate={pickupDate ?? ""}
            returnDate={returnDate ?? ""}
            onChangeCity={(value) => {
              setCity(value);
              setCurrentPage(1);
            }}
            onChangePickupDate={setPickupDate}
            onChangeReturnDate={setReturnDate}
            onSubmit={handleSearchSubmit}
          />
         </div>
       </section>

       <section className="border-b border-zinc-200 bg-linear-to-b from-zinc-50 to-white">
        <CarsResultsBar
          totalCars={totalCars}
          summaryCityLabel={summaryCityLabel}
          pickupDate={pickupDate}
          returnDate={returnDate}
          sortBy={sortBy}
          onChangeSort={(value) => setSortBy(value)}
          onOpenFilters={() => setIsFiltersOpen(true)}
        />
       </section>

       <section className="py-6 sm:py-8">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
             <aside className="hidden self-start rounded-2xl border border-zinc-200 bg-white p-4 text-sm shadow-sm lg:block">
              <CarsFiltersContent
                 minPrice={minPrice}
                 maxPrice={maxPrice}
                 setMinPrice={setMinPrice}
                 setMaxPrice={setMaxPrice}
                 selectedTypes={selectedTypes}
                 setSelectedTypes={setSelectedTypes}
                 selectedTransmissions={selectedTransmissions}
                 setSelectedTransmissions={setSelectedTransmissions}
                 selectedFuels={selectedFuels}
                 setSelectedFuels={setSelectedFuels}
                 selectedSeats={selectedSeats}
                 setSelectedSeats={setSelectedSeats}
                 selectedAgencies={selectedAgencies}
                 setSelectedAgencies={setSelectedAgencies}
                 onReset={handleResetFilters}
                 toggleInArray={toggleInArray}
               />
             </aside>

             <div className="space-y-4">
               {totalCars === 0 ? (
                 <EmptyState
                   city={summaryCityLabel}
                   pickupDate={pickupDate}
                   returnDate={returnDate}
                 />
               ) : (
                <CarsGrid
                  cars={paginatedCars}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onChangePage={setCurrentPage}
                />
               )}
             </div>
           </div>
         </div>

         {isFiltersOpen && (
           <div
             className="fixed inset-0 z-40 bg-zinc-950/40 backdrop-blur-sm lg:hidden"
             aria-modal="true"
             role="dialog"
             aria-label="Filtres de recherche"
             onClick={closeFiltersPanel}
           >
             <div
               className={`absolute left-0 top-17 bottom-0 flex w-full max-w-xs flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${
                 filtersPanelVisible ? "translate-x-0" : "-translate-x-full"
               }`}
               onClick={(e) => e.stopPropagation()}
               role="presentation"
             >
               <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 px-4 py-3">
                 <p className="text-sm font-semibold text-zinc-900">
                   Filtre
                 </p>
                 <button
                   type="button"
                   className="text-xs font-medium text-zinc-500 hover:text-zinc-700"
                   onClick={closeFiltersPanel}
                   aria-label="Fermer les filtres"
                 >
                   Fermer
                 </button>
               </div>
               <div className="min-h-0 flex-1 overflow-y-auto p-4 text-sm">
                  <CarsFiltersContent
                   minPrice={minPrice}
                   maxPrice={maxPrice}
                   setMinPrice={setMinPrice}
                   setMaxPrice={setMaxPrice}
                   selectedTypes={selectedTypes}
                   setSelectedTypes={setSelectedTypes}
                   selectedTransmissions={selectedTransmissions}
                   setSelectedTransmissions={setSelectedTransmissions}
                   selectedFuels={selectedFuels}
                   setSelectedFuels={setSelectedFuels}
                   selectedSeats={selectedSeats}
                   setSelectedSeats={setSelectedSeats}
                   selectedAgencies={selectedAgencies}
                   setSelectedAgencies={setSelectedAgencies}
                   onReset={handleResetFilters}
                   toggleInArray={toggleInArray}
                 />
                 <button
                   type="button"
                   className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-amber-400"
                   onClick={closeFiltersPanel}
                 >
                   Voir les résultats
                 </button>
               </div>
             </div>
           </div>
         )}
       </section>
     </main>
   );
 }

 type EmptyStateProps = {
   city: string;
   pickupDate?: string | null;
   returnDate?: string | null;
 };

 function EmptyState({ city, pickupDate, returnDate }: EmptyStateProps) {
   return (
     <div className="flex min-h-65 flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-200 bg-white px-6 py-10 text-center">
       <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-3xl">
         🚗
       </div>
       <h2 className="text-base font-semibold text-zinc-900">
         Aucune voiture disponible pour ces critères
       </h2>
       <p className="mt-2 max-w-md text-sm text-zinc-600">
         Nous n&apos;avons pas trouvé de véhicules à {city} pour vos dates{" "}
         {(pickupDate || returnDate) && (
           <span>
             ({pickupDate || "—"} → {returnDate || "—"})
           </span>
         )}
         . Essayez de modifier vos dates, d&apos;élargir votre budget ou de
         décocher certains filtres.
       </p>
       <button
         type="button"
         className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-amber-400"
       >
         Assouplir les filtres
       </button>
       <p className="mt-2 text-[11px] text-zinc-500">
         Astuce : les week-ends et hautes saisons peuvent être très demandés.
       </p>
     </div>
   );
 }
