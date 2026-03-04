"use client";

import { useState } from "react";

type CarsSearchBarProps = {
  city: string;
  pickupDate: string;
  returnDate: string;
  onChangeCity: (value: string) => void;
  onChangePickupDate: (value: string) => void;
  onChangeReturnDate: (value: string) => void;
  onSubmit: (event: React.FormEvent) => void;
};

function formatDateForSummary(dateStr: string) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function CarsSearchBar({
  city,
  pickupDate,
  returnDate,
  onChangeCity,
  onChangePickupDate,
  onChangeReturnDate,
  onSubmit,
}: CarsSearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const summaryCity = city || "Toutes les villes";
  const summaryDates =
    pickupDate || returnDate
      ? `${formatDateForSummary(pickupDate)} → ${formatDateForSummary(returnDate)}`
      : "Dates non renseignées";

  const formContent = (
    <form
      onSubmit={(e) => {
        onSubmit(e);
        setIsExpanded(false);
      }}
      className="flex flex-col gap-3 sm:flex-row sm:items-end"
    >
      <div className="flex-1">
        <label className="block text-xs font-medium text-zinc-700">
          Ville de prise en charge
        </label>
        <select
          value={city}
          onChange={(event) => onChangeCity(event.target.value)}
          className="mt-1 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:bg-white focus:ring-1 [&_option]:bg-white [&_option]:text-zinc-900"
        >
          <option value="">Toutes les villes</option>
          <option value="Casablanca">Casablanca</option>
          <option value="Marrakech">Marrakech</option>
          <option value="Agadir">Agadir</option>
          <option value="Rabat">Rabat</option>
          <option value="Tanger">Tanger</option>
        </select>
      </div>

      <div className="grid flex-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-zinc-700">
            Date de départ
          </label>
          <input
            type="date"
            value={pickupDate}
            onChange={(event) => onChangePickupDate(event.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:bg-white focus:ring-1"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-700">
            Date de retour
          </label>
          <input
            type="date"
            value={returnDate}
            onChange={(event) => onChangeReturnDate(event.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:bg-white focus:ring-1"
          />
        </div>
      </div>

      <button
        type="submit"
        className="group relative mt-1 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
      >
        <span
          className="absolute inset-0 z-0 bg-zinc-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
          aria-hidden
        />
        <span className="relative z-10">Modifier la recherche</span>
      </button>
    </form>
  );

  return (
    <>
      {/* Réduit : une ligne sur petits écrans uniquement */}
      <div className="md:hidden">
        {!isExpanded ? (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="flex w-full items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-left text-sm transition hover:border-amber-300 hover:bg-amber-50/50"
            aria-expanded="false"
            aria-label="Ouvrir le formulaire de recherche"
          >
            <span className="truncate text-zinc-700">
              <span className="font-medium text-zinc-900">{summaryCity}</span>
              <span className="mx-2 text-zinc-400">•</span>
              <span className="text-zinc-600">{summaryDates}</span>
            </span>
            <span className="shrink-0 text-xs font-semibold text-amber-600">
              Modifier
            </span>
          </button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-500">
                Critères de recherche
              </span>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="text-xs font-medium text-amber-600 hover:text-amber-700"
              >
                Réduire
              </button>
            </div>
            {formContent}
          </div>
        )}
      </div>

      {/* Formulaire complet visible sur écrans moyens et grands */}
      <div className="hidden md:block">{formContent}</div>
    </>
  );
}

