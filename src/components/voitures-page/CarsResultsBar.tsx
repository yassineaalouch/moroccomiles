import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

type SortOption = "price-asc" | "price-desc" | "newest" | "popular";

type CarsResultsBarProps = {
  totalCars: number;
  summaryCityLabel: string;
  pickupDate?: string | null;
  returnDate?: string | null;
  sortBy: SortOption;
  onChangeSort: (value: SortOption) => void;
  onOpenFilters: () => void;
};

export function CarsResultsBar({
  totalCars,
  summaryCityLabel,
  pickupDate,
  returnDate,
  sortBy,
  onChangeSort,
  onOpenFilters,
}: CarsResultsBarProps) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div>
        <span className="text-amber-500">
          Résultats
        </span>
        <h1 className="mt-2 text-xl font-semibold text-zinc-900 sm:text-2xl">
          {totalCars} voiture{totalCars > 1 ? "s" : ""} trouvée
          {totalCars > 1 ? "s" : ""} à {summaryCityLabel}
        </h1>
        {(pickupDate || returnDate) && (
          <p className="mt-1 text-xs text-zinc-500">
            Pour vos dates du {pickupDate || "—"} au {returnDate || "—"}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-amber-500 hover:text-amber-600 lg:hidden"
          onClick={onOpenFilters}
          aria-label="Ouvrir les filtres"
        >
          <span>Filtre</span>
        </button>
        <div>
          <label className="mr-2 text-xs font-medium text-zinc-600">
            Trier par
          </label>
          <select
            value={sortBy}
            onChange={(event) =>
              onChangeSort(event.target.value as SortOption)
            }
            className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500 [&_option]:bg-white [&_option]:text-zinc-900"
          >
            <option value="popular">Popularité</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="newest">Nouveautés</option>
          </select>
        </div>
      </div>
    </div>
  );
}

