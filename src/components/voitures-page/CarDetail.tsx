"use client";

import Link from "next/link";
import { useState } from "react";
import type { Car } from "@/data/cars";

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconDoor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4" />
      <path d="M12 11v6" />
      <path d="M4 8h16" />
    </svg>
  );
}

function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconFuel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="3" y1="22" x2="15" y2="22" />
      <line x1="4" y1="9" x2="14" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 8" />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const CAR_FAQ = [
  {
    question: "Quelle est la politique d'annulation ?",
    answer: "Annulation gratuite jusqu'à 48h avant l'heure de prise en charge. Au-delà, des frais peuvent s'appliquer selon l'agence.",
  },
  {
    question: "L'assurance est-elle incluse ?",
    answer: "L'assurance collision (CDW) et la protection vol sont généralement incluses. La franchise en cas de sinistre est précisée dans l'offre et les conditions de l'agence.",
  },
  {
    question: "Puis-je récupérer le véhicule dans une ville et le rendre dans une autre ?",
    answer: "Cela dépend de l'agence et du type de location. Consultez les options disponibles sur la fiche véhicule ou contactez directement l'agence.",
  },
  {
    question: "Quels documents sont requis pour louer ?",
    answer: "Permis de conduire valide (depuis au moins 1 an pour la plupart des agences), pièce d'identité et parfois une carte bancaire pour le dépôt de garantie.",
  },
];

const ADDITIONAL_OPTIONS: Array<{
  id: string;
  label: string;
  pricePerDay: number;
  from?: boolean;
}> = [
  { id: "child-seat", label: "Siège enfant", pricePerDay: 30 },
  { id: "baby-chair", label: "Réhausseur bébé", pricePerDay: 30 },
  { id: "gps", label: "GPS", pricePerDay: 35 },
  { id: "trailer", label: "Remorque", pricePerDay: 50, from: true },
  { id: "roof-rack", label: "Barres de toit", pricePerDay: 35 },
];

type CarDetailProps = {
  car: Car;
};

type RentalMode = "day" | "hour";

export function CarDetail({ car }: CarDetailProps) {
  const [rentalMode, setRentalMode] = useState<RentalMode>("day");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupDateTime, setPickupDateTime] = useState("");
  const [returnDateTime, setReturnDateTime] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const optionsTotal = ADDITIONAL_OPTIONS.reduce((sum, opt) => {
    if (selectedOptions.has(opt.id)) return sum + opt.pricePerDay;
    return sum;
  }, 0);

  const dailyRate = car.pricePerDay + optionsTotal;
  const hourlyRate = Math.round((dailyRate / 8) * 10) / 10; // tarif horaire (8h = 1 jour)

  const baseDays = pickupDate && returnDate && rentalMode === "day"
    ? Math.max(1, Math.ceil((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / (1000 * 60 * 60 * 24)))
    : 0;

  const baseHours = pickupDateTime && returnDateTime && rentalMode === "hour"
    ? Math.max(1, (new Date(returnDateTime).getTime() - new Date(pickupDateTime).getTime()) / (1000 * 60 * 60))
    : 0;

  const total = rentalMode === "day"
    ? (baseDays > 0 ? baseDays * dailyRate : dailyRate)
    : (baseHours > 0 ? Math.ceil(baseHours) * hourlyRate : hourlyRate);

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const setRentalModeAndConvert = (mode: RentalMode) => {
    if (mode === rentalMode) return;
    setRentalMode(mode);
    if (mode === "hour") {
      if (pickupDate) setPickupDateTime(pickupDate + "T09:00");
      else setPickupDateTime("");
      if (returnDate) setReturnDateTime(returnDate + "T18:00");
      else setReturnDateTime("");
    } else {
      if (pickupDateTime) setPickupDate(pickupDateTime.slice(0, 10));
      if (returnDateTime) setReturnDate(returnDateTime.slice(0, 10));
    }
  };

  const galleryImages = [car.image, car.image, car.image, car.image, car.image];

  const overviewItems = [
    { label: "Couleur extérieure", value: "Gris" },
    { label: "Couleur intérieure", value: "Noir" },
    { label: "Transmission", value: car.transmission },
    { label: "Carburant", value: car.fuel },
    { label: "Places", value: `${car.seats}` },
    { label: "Climatisation", value: "Oui" },
    { label: "GPS", value: "Option" },
  ];

  return (
    <section className="bg-white py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header: Retour + liens droite */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/voitures"
            className="inline-flex items-center text-sm font-medium text-zinc-600 transition hover:text-amber-600"
          >
            <span className="mr-2" aria-hidden>←</span>
            Retour aux résultats
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-700"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700" aria-hidden>i</span>
              Infos importantes
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-700"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-600" aria-hidden>✓</span>
              Assurance
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Colonne gauche */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                {car.name}
              </h1>
              <p className="mt-1 text-base text-zinc-500">{car.year}</p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-zinc-100">
              <img
                src={car.image}
                alt={car.name}
                className="aspect-4/3 w-full object-cover"
              />
            </div>

            {/* Galerie — directement après l'image */}
            <div>
              <h2 className="text-base font-bold text-zinc-900 sm:text-lg">Galerie</h2>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
                {galleryImages.map((src, i) => (
                  <div key={i} className="aspect-4/3 overflow-hidden rounded-xl bg-zinc-100">
                    <img src={src} alt={`${car.name} ${i + 1}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Specs clés (icônes) */}
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-3">
                <IconUsers className="h-5 w-5 shrink-0 text-zinc-400" />
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Places</dt>
                  <dd className="font-semibold text-zinc-900">{car.seats}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-3">
                <IconDoor className="h-5 w-5 shrink-0 text-zinc-400" />
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Portes</dt>
                  <dd className="font-semibold text-zinc-900">5</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-3">
                <IconBriefcase className="h-5 w-5 shrink-0 text-zinc-400" />
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Grands bagages</dt>
                  <dd className="font-semibold text-zinc-900">2</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-3">
                <IconFuel className="h-5 w-5 shrink-0 text-zinc-400" />
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Carburant</dt>
                  <dd className="font-semibold text-zinc-900">{car.fuel}</dd>
                </div>
              </div>
            </dl>

            {/* Overview */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900">Aperçu</h2>
              <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
                {overviewItems.map(({ label, value }) => (
                  <div key={label} className="flex justify-between border-b border-zinc-100 py-2">
                    <span className="text-sm text-zinc-500">{label}</span>
                    <span className="text-sm font-semibold text-zinc-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900">Description</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-600">
                <p>
                  Assurance collision (CDW) et protection vol incluses selon l’offre. Franchise dommages : 1 205 DH (TTC) en cas de sinistre. Kilométrage illimité pour la plupart des locations. Annulation gratuite jusqu’à 48h avant l’heure de prise en charge.
                </p>
                <p>
                  Véhicule confortable et adapté à la route. Idéal pour découvrir le Maroc en toute liberté. Consultez les conditions générales de l’agence {car.agency} pour les détails complets.
                </p>
              </div>
            </div>

            {/* Section agence */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 sm:p-5">
              <h2 className="text-base font-bold text-zinc-900 sm:text-lg">L&apos;agence</h2>
              <div className="mt-4 flex flex-wrap items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-amber-600 shadow-sm ring-1 ring-zinc-100">
                  {car.agency.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-zinc-900">{car.agency}</p>
                  {car.agencyVerified && (
                    <span className="mt-1 inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">
                      ✓ Agence vérifiée
                    </span>
                  )}
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-zinc-600">
                    <IconMapPin className="h-4 w-4 shrink-0 text-zinc-400" />
                    {car.city}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="flex items-center gap-0.5 text-amber-600">
                      <IconStar className="h-4 w-4" />
                      <span className="text-sm font-semibold">4,8</span>
                    </span>
                    <span className="text-xs text-zinc-500">· 127 avis</span>
                  </div>
                </div>
                <Link
                  href={`/agences`}
                  className="shrink-0 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 transition hover:border-amber-300 hover:text-amber-600"
                >
                  Voir l&apos;agence
                </Link>
              </div>
            </div>
          </div>

          {/* Colonne droite : réservation */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-zinc-200 bg-white shadow-lg overflow-hidden">
              {/* Bandeau prix */}
              <div className="bg-zinc-900 px-4 py-3">
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {rentalMode === "day" ? car.pricePerDay : hourlyRate} DH
                </p>
                <p className="mt-0.5 text-xs text-zinc-300">
                  / {rentalMode === "day" ? "jour" : "heure"}
                </p>
              </div>

              <div className="p-4 space-y-3">
                {/* Toggle location par jour / par heure */}
                <div>
                  <label className="block text-[11px] font-medium text-zinc-600 mb-1.5">
                    Type de location
                  </label>
                  <div className="flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
                    <button
                      type="button"
                      onClick={() => setRentalModeAndConvert("day")}
                      className={`flex-1 rounded-md px-3 py-2 text-xs font-semibold transition ${
                        rentalMode === "day"
                          ? "bg-white text-zinc-900 shadow-sm"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      Par jour
                    </button>
                    <button
                      type="button"
                      onClick={() => setRentalModeAndConvert("hour")}
                      className={`flex-1 rounded-md px-3 py-2 text-xs font-semibold transition ${
                        rentalMode === "hour"
                          ? "bg-white text-zinc-900 shadow-sm"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      Par heure
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-600">
                    Prise en charge <span className="text-amber-600">*</span>
                  </label>
                  {rentalMode === "day" ? (
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:border-amber-500 focus:bg-white focus:ring-1"
                    />
                  ) : (
                    <input
                      type="datetime-local"
                      value={pickupDateTime}
                      onChange={(e) => setPickupDateTime(e.target.value)}
                      step="900"
                      className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:border-amber-500 focus:bg-white focus:ring-1 scheme-light"
                    />
                  )}
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-zinc-600">
                    Retour <span className="text-amber-600">*</span>
                  </label>
                  {rentalMode === "day" ? (
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:border-amber-500 focus:bg-white focus:ring-1"
                    />
                  ) : (
                    <input
                      type="datetime-local"
                      value={returnDateTime}
                      onChange={(e) => setReturnDateTime(e.target.value)}
                      step="900"
                      className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:border-amber-500 focus:bg-white focus:ring-1 scheme-light"
                    />
                  )}
                </div>

                <div>
                  <h3 className="text-xs font-bold text-zinc-900">Options supplémentaires</h3>
                  <ul className="mt-1.5 space-y-1">
                    {ADDITIONAL_OPTIONS.map((opt) => (
                      <li key={opt.id} className="flex items-center justify-between gap-2">
                        <label className="flex cursor-pointer items-center gap-1.5 text-xs text-zinc-700">
                          <input
                            type="checkbox"
                            checked={selectedOptions.has(opt.id)}
                            onChange={() => toggleOption(opt.id)}
                            className="h-3.5 w-3.5 rounded border-zinc-300 text-amber-600 focus:ring-amber-500"
                          />
                          {opt.label}
                        </label>
                        <span className="text-[11px] font-medium text-zinc-900 whitespace-nowrap">
                          {opt.pricePerDay} DH{opt.from ? "/j" : "/j"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="border-t border-zinc-100 pt-3 text-sm font-bold text-zinc-900">
                  Total : {total} DH
                  {rentalMode === "day" && baseDays === 0 ? <span className="text-[11px] font-normal text-zinc-500"> (par jour)</span> : null}
                  {rentalMode === "hour" && baseHours === 0 ? <span className="text-[11px] font-normal text-zinc-500"> (par heure)</span> : null}
                </p>

                <Link
                  href="/voitures"
                  className="group/btn relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  <span
                    className="absolute inset-0 z-0 bg-zinc-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
                    aria-hidden
                  />
                  <span className="relative z-10">Réserver maintenant</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Questions fréquentes — pleine largeur */}
        <div className="mt-14 border-t border-zinc-200 pt-12">
          <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">Questions fréquentes</h2>
          <div className="mt-6 space-y-2">
            {CAR_FAQ.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                  aria-expanded={faqOpenIndex === index}
                >
                  {item.question}
                  <span
                    className={`shrink-0 text-zinc-400 transition-transform ${faqOpenIndex === index ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>
                {faqOpenIndex === index && (
                  <div className="border-t border-zinc-100 px-4 py-3 text-sm text-zinc-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
