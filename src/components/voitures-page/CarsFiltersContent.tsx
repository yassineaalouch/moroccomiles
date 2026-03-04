type Transmission = "Automatique" | "Manuelle";
type Fuel = "Diesel" | "Essence" | "Hybride";
type CarType = "Économique" | "SUV" | "Luxe" | "Van";

export type CarsFiltersContentProps = {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  selectedTypes: CarType[];
  setSelectedTypes: (value: CarType[]) => void;
  selectedTransmissions: Transmission[];
  setSelectedTransmissions: (value: Transmission[]) => void;
  selectedFuels: Fuel[];
  setSelectedFuels: (value: Fuel[]) => void;
  selectedSeats: number[];
  setSelectedSeats: (value: number[]) => void;
  selectedAgencies: string[];
  setSelectedAgencies: (value: string[]) => void;
  onReset: () => void;
  toggleInArray: <T,>(
    value: T,
    array: T[],
    setter: (next: T[]) => void
  ) => void;
};

export function CarsFiltersContent({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  selectedTypes,
  setSelectedTypes,
  selectedTransmissions,
  setSelectedTransmissions,
  selectedFuels,
  setSelectedFuels,
  selectedSeats,
  setSelectedSeats,
  selectedAgencies,
  setSelectedAgencies,
  onReset,
  toggleInArray,
}: CarsFiltersContentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Filtres
        </p>
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-medium text-amber-600 hover:text-amber-700"
        >
          Réinitialiser
        </button>
      </div>

      <div className="space-y-2 border-t border-zinc-100 pt-3">
        <p className="text-xs font-semibold text-zinc-800">
          Budget (par jour)
        </p>
        <div className="flex items-center justify-between text-[11px] text-zinc-500">
          <span>Min {minPrice} DH</span>
          <span>Max {maxPrice} DH</span>
        </div>
        <div className="mt-1 space-y-2">
          <input
            type="range"
            min={100}
            max={800}
            step={10}
            value={minPrice}
            onChange={(event) =>
              setMinPrice(Math.min(Number(event.target.value), maxPrice - 10))
            }
            className="w-full"
          />
          <input
            type="range"
            min={150}
            max={1000}
            step={10}
            value={maxPrice}
            onChange={(event) =>
              setMaxPrice(Math.max(Number(event.target.value), minPrice + 10))
            }
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2 border-t border-zinc-100 pt-3">
        <p className="text-xs font-semibold text-zinc-800">Type de voiture</p>
        <div className="space-y-1.5 text-xs text-zinc-600">
          {(["Économique", "SUV", "Luxe", "Van"] as CarType[]).map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() =>
                  toggleInArray(type, selectedTypes, setSelectedTypes)
                }
                className="h-3.5 w-3.5 rounded border-zinc-300 text-amber-500 focus:ring-amber-500"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2 border-t border-zinc-100 pt-3">
        <p className="text-xs font-semibold text-zinc-800">Transmission</p>
        <div className="space-y-1.5 text-xs text-zinc-600">
          {(["Automatique", "Manuelle"] as Transmission[]).map((value) => (
            <label key={value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedTransmissions.includes(value)}
                onChange={() =>
                  toggleInArray(
                    value,
                    selectedTransmissions,
                    setSelectedTransmissions
                  )
                }
                className="h-3.5 w-3.5 rounded border-zinc-300 text-amber-500 focus:ring-amber-500"
              />
              <span>{value}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2 border-t border-zinc-100 pt-3">
        <p className="text-xs font-semibold text-zinc-800">Carburant</p>
        <div className="space-y-1.5 text-xs text-zinc-600">
          {(["Diesel", "Essence", "Hybride"] as Fuel[]).map((value) => (
            <label key={value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedFuels.includes(value)}
                onChange={() =>
                  toggleInArray(value, selectedFuels, setSelectedFuels)
                }
                className="h-3.5 w-3.5 rounded border-zinc-300 text-amber-500 focus:ring-amber-500"
              />
              <span>{value}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2 border-t border-zinc-100 pt-3">
        <p className="text-xs font-semibold text-zinc-800">
          Nombre de places
        </p>
        <div className="space-y-1.5 text-xs text-zinc-600">
          {[4, 5, 7, 9].map((seats) => (
            <label key={seats} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedSeats.includes(seats)}
                onChange={() =>
                  toggleInArray(seats, selectedSeats, setSelectedSeats)
                }
                className="h-3.5 w-3.5 rounded border-zinc-300 text-amber-500 focus:ring-amber-500"
              />
              <span>{seats} places</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2 border-t border-zinc-100 pt-3">
        <p className="text-xs font-semibold text-zinc-800">Agence</p>
        <div className="space-y-1.5 text-xs text-zinc-600">
          {[
            "AtlasCar",
            "Maghreb Rent",
            "DesertDrive",
            "Medina Cars",
            "Airport Mobility",
            "Rif Auto",
          ].map((agency) => (
            <label key={agency} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedAgencies.includes(agency)}
                onChange={() =>
                  toggleInArray(agency, selectedAgencies, setSelectedAgencies)
                }
                className="h-3.5 w-3.5 rounded border-zinc-300 text-amber-500 focus:ring-amber-500"
              />
              <span>{agency}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

