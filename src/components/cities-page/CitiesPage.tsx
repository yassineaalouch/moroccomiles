"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

type CitySlug =
  | "marrakech"
  | "casablanca"
  | "agadir"
  | "tanger"
  | "rabat"
  | "fes"
  | "oujda";

type CityStats = {
  totalCars: number;
  averagePricePerDay: number;
  partnerAgencies: number;
  topCategories: string[];
};

type CityAgency = {
  id: string;
  name: string;
  logo: string;
  rating: number;
  carsAvailable: number;
  badge?: "MostTrusted" | "LocalExpert" | "AirportSpecialist";
};

type PopularDestinationMeta = {
  slug: CitySlug;
  label: string;
  fromPrice: number;
  rating: number;
  badge: "Most Booked" | "Best Deals" | "Top Rated";
};

type CityDefinition = {
  slug: CitySlug;
  name: string;
  heroImage: string;
  thumbnailImage: string;
  carsAvailable: number;
  stats: CityStats;
  agencies: CityAgency[];
  seoParagraph: string;
  popularMeta: PopularDestinationMeta;
};

const CITIES: CityDefinition[] = [
  {
    slug: "marrakech",
    name: "Marrakech",
    heroImage:
      "https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&w=1600",
    thumbnailImage:
      "https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=800",
    carsAvailable: 186,
    stats: {
      totalCars: 186,
      averagePricePerDay: 295,
      partnerAgencies: 32,
      topCategories: ["SUV", "Économique", "Luxe"],
    },
    agencies: [
      {
        id: "atlascar-marrakech",
        name: "AtlasCar Marrakech",
        logo: "/logos/atlascar.png",
        rating: 4.8,
        carsAvailable: 42,
        badge: "MostTrusted",
      },
      {
        id: "medina-drive",
        name: "Medina Drive",
        logo: "/logos/medina-drive.png",
        rating: 4.7,
        carsAvailable: 35,
        badge: "LocalExpert",
      },
      {
        id: "airport-mobility-rak",
        name: "Airport Mobility Marrakech",
        logo: "/logos/airport-mobility.png",
        rating: 4.6,
        carsAvailable: 28,
        badge: "AirportSpecialist",
      },
    ],
    seoParagraph:
      "Louer une voiture à Marrakech avec MoroccoMiles vous permet de découvrir facilement la médina, la palmeraie et la route de l’Ourika. La plupart des agences proposent une prise en charge directe à l’aéroport Marrakech-Menara, idéale après un vol. Évitez les heures de pointe autour de Gueliz et de la médina, et privilégiez les départs tôt le matin pour rejoindre le désert d’Agafay ou l’Atlas. En haute saison (printemps et vacances d’hiver), la demande est très forte : réservez votre voiture plusieurs semaines à l’avance pour bénéficier des meilleurs tarifs.",
    popularMeta: {
      slug: "marrakech",
      label: "Marrakech",
      fromPrice: 199,
      rating: 4.8,
      badge: "Most Booked",
    },
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    heroImage:
      "https://images.pexels.com/photos/18629284/pexels-photo-18629284/free-photo-of-port-de-mer-villes-bateaux-maroc.jpeg?auto=compress&cs=tinysrgb&w=1600",
    thumbnailImage:
      "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
    carsAvailable: 210,
    stats: {
      totalCars: 210,
      averagePricePerDay: 310,
      partnerAgencies: 40,
      topCategories: ["Économique", "SUV", "Business"],
    },
    agencies: [
      {
        id: "maghreb-rent-casa",
        name: "Maghreb Rent Casa",
        logo: "/logos/maghreb-rent.png",
        rating: 4.7,
        carsAvailable: 55,
        badge: "MostTrusted",
      },
      {
        id: "casa-city-cars",
        name: "Casa City Cars",
        logo: "/logos/casa-city-cars.png",
        rating: 4.5,
        carsAvailable: 33,
        badge: "LocalExpert",
      },
      {
        id: "airport-mobility-cmn",
        name: "Airport Mobility Casablanca",
        logo: "/logos/airport-mobility.png",
        rating: 4.6,
        carsAvailable: 38,
        badge: "AirportSpecialist",
      },
    ],
    seoParagraph:
      "Avec une voiture de location à Casablanca, vous gagnez en flexibilité pour vos rendez-vous professionnels et vos sorties le long de la corniche. Les prises en charge à l’aéroport Mohammed V et à la gare Casa Voyageurs sont très demandées, surtout le lundi matin. Le trafic peut être dense autour de Sidi Maârouf et Hay Hassani : prévoyez des marges de temps aux heures de pointe. En réservant à l’avance sur MoroccoMiles, vous sécurisez des offres stables malgré la forte demande en semaine.",
    popularMeta: {
      slug: "casablanca",
      label: "Casablanca",
      fromPrice: 219,
      rating: 4.7,
      badge: "Best Deals",
    },
  },
  {
    slug: "agadir",
    name: "Agadir",
    heroImage:
      "https://images.pexels.com/photos/1821221/pexels-photo-1821221.jpeg?auto=compress&cs=tinysrgb&w=1600",
    thumbnailImage:
      "https://images.pexels.com/photos/2404373/pexels-photo-2404373.jpeg?auto=compress&cs=tinysrgb&w=800",
    carsAvailable: 124,
    stats: {
      totalCars: 124,
      averagePricePerDay: 280,
      partnerAgencies: 22,
      topCategories: ["SUV", "Économique", "Familiale"],
    },
    agencies: [
      {
        id: "desertdrive-agadir",
        name: "DesertDrive Agadir",
        logo: "/logos/desertdrive.png",
        rating: 4.6,
        carsAvailable: 26,
        badge: "LocalExpert",
      },
      {
        id: "ocean-rentals",
        name: "Ocean Rentals",
        logo: "/logos/ocean-rentals.png",
        rating: 4.5,
        carsAvailable: 19,
      },
      {
        id: "airport-mobility-aga",
        name: "Airport Mobility Agadir",
        logo: "/logos/airport-mobility.png",
        rating: 4.6,
        carsAvailable: 21,
        badge: "AirportSpecialist",
      },
    ],
    seoParagraph:
      "Louer une voiture à Agadir facilite l’accès aux plages de Taghazout, aux villages côtiers et à la vallée du Paradis. Les agences situées près de l’aéroport Al Massira proposent souvent des horaires élargis pour les arrivées tardives. La circulation est fluide en dehors du centre-ville, mais prévoyez plus de temps en été sur la route côtière vers Essaouira. Pour profiter de tarifs avantageux, anticipez votre réservation pour les vacances d’été et les séjours surf.",
    popularMeta: {
      slug: "agadir",
      label: "Agadir",
      fromPrice: 189,
      rating: 4.6,
      badge: "Best Deals",
    },
  },
  {
    slug: "tanger",
    name: "Tanger",
    heroImage:
      "https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=1600",
    thumbnailImage:
      "https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=800",
    carsAvailable: 98,
    stats: {
      totalCars: 98,
      averagePricePerDay: 305,
      partnerAgencies: 18,
      topCategories: ["SUV", "Économique", "Luxe"],
    },
    agencies: [
      {
        id: "medina-cars-tanger",
        name: "Medina Cars Tanger",
        logo: "/logos/medina-cars.png",
        rating: 4.8,
        carsAvailable: 24,
        badge: "MostTrusted",
      },
      {
        id: "port-city-rent",
        name: "Port City Rent",
        logo: "/logos/port-city-rent.png",
        rating: 4.6,
        carsAvailable: 17,
      },
      {
        id: "airport-mobility-tng",
        name: "Airport Mobility Tanger",
        logo: "/logos/airport-mobility.png",
        rating: 4.7,
        carsAvailable: 20,
        badge: "AirportSpecialist",
      },
    ],
    seoParagraph:
      "Une voiture de location à Tanger vous donne la liberté d’explorer le Cap Spartel, les grottes d’Hercule et la côte méditerranéenne vers Tétouan. Les agences proches du port et de la gare Tanger Ville sont très pratiques pour les voyageurs en ferry ou en train. Le trafic est généralement fluide, mais les abords du port peuvent être plus chargés lors des arrivées de ferries. En haute saison, réservez tôt pour sécuriser un véhicule adapté aux trajets côtiers et montagneux.",
    popularMeta: {
      slug: "tanger",
      label: "Tanger",
      fromPrice: 209,
      rating: 4.8,
      badge: "Top Rated",
    },
  },
  {
    slug: "rabat",
    name: "Rabat",
    heroImage:
      "https://images.pexels.com/photos/18667237/pexels-photo-18667237/free-photo-of-ville-paysage-urbain-voyage-voitures.jpeg?auto=compress&cs=tinysrgb&w=1600",
    thumbnailImage:
      "https://images.pexels.com/photos/2444860/pexels-photo-2444860.jpeg?auto=compress&cs=tinysrgb&w=800",
    carsAvailable: 87,
    stats: {
      totalCars: 87,
      averagePricePerDay: 300,
      partnerAgencies: 16,
      topCategories: ["Économique", "Business", "SUV"],
    },
    agencies: [
      {
        id: "capital-drive",
        name: "Capital Drive",
        logo: "/logos/capital-drive.png",
        rating: 4.7,
        carsAvailable: 21,
        badge: "MostTrusted",
      },
      {
        id: "rabat-city-rent",
        name: "Rabat City Rent",
        logo: "/logos/rabat-city-rent.png",
        rating: 4.5,
        carsAvailable: 15,
      },
      {
        id: "airport-mobility-rbt",
        name: "Airport Mobility Rabat",
        logo: "/logos/airport-mobility.png",
        rating: 4.6,
        carsAvailable: 18,
        badge: "AirportSpecialist",
      },
    ],
    seoParagraph:
      "Louer une voiture à Rabat vous permet de relier facilement Salé, Skhirat et les plages de la côte atlantique. Les prises en charge à l’aéroport Rabat-Salé et aux principales gares sont fréquentes, avec une forte demande en journée pour les déplacements professionnels. Le trafic reste globalement maîtrisé, mais prévoyez des marges près des quartiers administratifs. Pour les séjours mêlant travail et loisirs, optez pour une voiture confortable avec climatisation, particulièrement appréciée au printemps et en été.",
    popularMeta: {
      slug: "rabat",
      label: "Rabat",
      fromPrice: 215,
      rating: 4.7,
      badge: "Top Rated",
    },
  },
  {
    slug: "fes",
    name: "Fès",
    heroImage:
      "https://images.pexels.com/photos/12107931/pexels-photo-12107931.jpeg?auto=compress&cs=tinysrgb&w=1600",
    thumbnailImage:
      "https://images.pexels.com/photos/12107931/pexels-photo-12107931.jpeg?auto=compress&cs=tinysrgb&w=800",
    carsAvailable: 64,
    stats: {
      totalCars: 64,
      averagePricePerDay: 270,
      partnerAgencies: 12,
      topCategories: ["Économique", "SUV", "Familiale"],
    },
    agencies: [
      {
        id: "fes-medina-cars",
        name: "Fès Medina Cars",
        logo: "/logos/fes-medina-cars.png",
        rating: 4.6,
        carsAvailable: 14,
      },
      {
        id: "atlas-north-rent",
        name: "Atlas North Rent",
        logo: "/logos/atlas-north-rent.png",
        rating: 4.5,
        carsAvailable: 11,
      },
    ],
    seoParagraph:
      "Avec une voiture de location à Fès, vous pouvez combiner visite de la médina, excursions vers Meknès et découverte du Moyen Atlas. Les agences se trouvent principalement près de l’aéroport Fès-Saïss et des grands axes de sortie de ville. Les ruelles de la vieille médina ne sont pas adaptées à la circulation, il est donc préférable de stationner en périphérie. En hiver et au début du printemps, vérifiez les conditions météo si vous prévoyez de rouler vers les montagnes.",
    popularMeta: {
      slug: "fes",
      label: "Fès",
      fromPrice: 179,
      rating: 4.5,
      badge: "Best Deals",
    },
  },
  {
    slug: "oujda",
    name: "Oujda",
    heroImage:
      "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1600",
    thumbnailImage:
      "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=800",
    carsAvailable: 38,
    stats: {
      totalCars: 38,
      averagePricePerDay: 260,
      partnerAgencies: 7,
      topCategories: ["Économique", "SUV"],
    },
    agencies: [
      {
        id: "oriental-rent",
        name: "Oriental Rent",
        logo: "/logos/oriental-rent.png",
        rating: 4.4,
        carsAvailable: 9,
      },
      {
        id: "oujda-city-cars",
        name: "Oujda City Cars",
        logo: "/logos/oujda-city-cars.png",
        rating: 4.3,
        carsAvailable: 7,
      },
    ],
    seoParagraph:
      "Louer une voiture à Oujda vous permet de rejoindre facilement Saïdia, les villages de l’Oriental et la frontière algérienne (avec les restrictions en vigueur). Les agences se concentrent autour de l’aéroport et du centre-ville. Le trafic est modéré, mais les trajets peuvent être longs entre les différentes villes de la région : privilégiez un véhicule confortable et bien climatisé. La demande augmente fortement en été, notamment pour les séjours balnéaires à Saïdia.",
    popularMeta: {
      slug: "oujda",
      label: "Oujda",
      fromPrice: 169,
      rating: 4.4,
      badge: "Best Deals",
    },
  },
];

type CitiesPageProps = {
  initialCity?: string | null;
};

export function CitiesPage({ initialCity }: CitiesPageProps) {
  const normalizedInitialSlug = useMemo<CitySlug | null>(() => {
    if (!initialCity) return null;
    const slugCandidate = initialCity.toLowerCase();
    const fromSlug = CITIES.find((city) => city.slug === slugCandidate);
    if (fromSlug) return fromSlug.slug;

    const fromName = CITIES.find(
      (city) => city.name.toLowerCase() === slugCandidate
    );
    return fromName ? fromName.slug : null;
  }, [initialCity]);

  const [activeCitySlug, setActiveCitySlug] = useState<CitySlug>(
    normalizedInitialSlug ?? "marrakech"
  );
  const [pickupDate, setPickupDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");

  const activeCity = useMemo(
    () => CITIES.find((city) => city.slug === activeCitySlug) ?? CITIES[0],
    [activeCitySlug]
  );

  const heroSlides = CITIES.slice(0, 5);
  const popularDestinations = CITIES.slice(0, 5).map(
    (city) => city.popularMeta
  );

  const handleCitySearch = (citySlug: CitySlug) => {
    setActiveCitySlug(citySlug);
    const section = document.getElementById("browse-by-city-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleCitySearch(activeCitySlug);
  };

  const otherCities = CITIES.filter((city) => city.slug !== activeCitySlug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: `Location de voiture à ${activeCity.name} — MoroccoMiles`,
    url: "https://moroccomiles.com/voitures",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
      addressLocality: activeCity.name,
    },
    areaServed: {
      "@type": "City",
      name: activeCity.name,
    },
    priceRange: `${activeCity.stats.averagePricePerDay} MAD`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue:
        activeCity.popularMeta.rating > 0
          ? activeCity.popularMeta.rating
          : 4.6,
      reviewCount: Math.max(
        24,
        Math.round(activeCity.stats.totalCars * 1.5)
      ),
    },
  };

  return (
    <div className="bg-zinc-950">
      <Script
        id="city-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroSection
        slides={heroSlides}
        activeCity={activeCity}
        onSelectCity={setActiveCitySlug}
        pickupDate={pickupDate}
        returnDate={returnDate}
        onPickupDateChange={setPickupDate}
        onReturnDateChange={setReturnDate}
        onSubmit={handleSearchSubmit}
      />

      <main className="bg-zinc-50">
        <BrowseByCitySection
          id="browse-by-city-section"
          cities={CITIES}
          activeCitySlug={activeCitySlug}
          onSelectCity={setActiveCitySlug}
        />

        <PopularDestinationsSection
          destinations={popularDestinations}
          onSelectCity={(slug) => setActiveCitySlug(slug)}
        />

        <CityStatisticsSection city={activeCity} />

        <TopAgenciesSection city={activeCity} />

        <CityInfoSection city={activeCity} />

        <ExploreOtherCitiesSection
          cities={otherCities}
          onSelectCity={setActiveCitySlug}
        />

        <AgenciesCallToAction cityName={activeCity.name} />
      </main>
    </div>
  );
}

type HeroSectionProps = {
  slides: CityDefinition[];
  activeCity: CityDefinition;
  onSelectCity: (slug: CitySlug) => void;
  pickupDate: string;
  returnDate: string;
  onPickupDateChange: (value: string) => void;
  onReturnDateChange: (value: string) => void;
  onSubmit: (event: React.FormEvent) => void;
};

function HeroSection({
  slides,
  activeCity,
  onSelectCity,
  pickupDate,
  returnDate,
  onPickupDateChange,
  onReturnDateChange,
  onSubmit,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="cities-hero-heading"
      className="relative overflow-hidden bg-zinc-950 text-white"
    >
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {slides.map((slide) => (
            <div
              key={slide.slug}
              className={`absolute inset-0 transition-opacity duration-700 ${
                slide.slug === activeCity.slug ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={slide.slug !== activeCity.slug}
            >
              <Image
                src={slide.heroImage}
                alt={`Location de voiture à ${slide.name}`}
                fill
                priority={slide.slug === "marrakech"}
                loading={slide.slug === "marrakech" ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-linear-to-b from-zinc-950/70 via-zinc-950/80 to-zinc-950/95" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-amber-300 ring-1 ring-amber-400/40 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Explorez les villes les plus demandées du Maroc
          </p>
          <h1
            id="cities-hero-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Trouvez une voiture de location dans{" "}
            <span className="text-amber-400">
              les grandes villes du Maroc.
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-sm text-zinc-200 sm:text-base lg:mx-0">
            Parcourez les voitures disponibles à Marrakech, Casablanca, Agadir,
            Tanger, Rabat et dans d&apos;autres grandes destinations. Comparez
            les offres des agences locales vérifiées et réservez en toute
            confiance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-zinc-300 sm:text-xs lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-amber-300">
                ✓
              </span>
              <span>Agences locales vérifiées dans chaque grande ville</span>
            </div>
            <span className="hidden h-px w-6 bg-white/25 sm:block" />
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-amber-300">
                ★
              </span>
              <span>Tarifs transparents, aucune commission cachée</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md flex-1">
          <div className="rounded-3xl bg-white/98 p-5 text-zinc-900 shadow-2xl ring-1 ring-zinc-200 backdrop-blur">
            <h2 className="text-base font-semibold text-zinc-900">
              Rechercher une voiture par ville
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Choisissez une ville marocaine, vos dates de location, puis
              explorez les voitures disponibles immédiatement.
            </p>

            <form className="mt-4 space-y-3" onSubmit={onSubmit}>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-zinc-700">
                  Ville
                </label>
                <select
                  value={activeCity.slug}
                  onChange={(event) =>
                    onSelectCity(event.target.value as CitySlug)
                  }
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:bg-white focus:ring-1 [&_option]:bg-white [&_option]:text-zinc-900"
                >
                  {CITIES.map((city) => (
                    <option key={city.slug} value={city.slug}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-zinc-700">
                    Date de départ
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(event) => onPickupDateChange(event.target.value)}
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:bg-white focus:ring-1"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-zinc-700">
                    Date de retour
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(event) => onReturnDateChange(event.target.value)}
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:bg-white focus:ring-1"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span
                  className="absolute inset-0 z-0 bg-zinc-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="relative z-10 flex items-center gap-2">
                  Rechercher des voitures
                  <span aria-hidden>→</span>
                </span>
              </button>

              <p className="mt-2 text-[11px] text-zinc-500">
                Aucun paiement immédiat. De nombreuses agences offrent une
                annulation flexible jusqu&apos;à 48h avant le départ.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type BrowseByCitySectionProps = {
  id?: string;
  cities: CityDefinition[];
  activeCitySlug: CitySlug;
  onSelectCity: (slug: CitySlug) => void;
};

function BrowseByCitySection({
  id,
  cities,
  activeCitySlug,
  onSelectCity,
}: BrowseByCitySectionProps) {
  return (
    <section
      id={id}
      aria-labelledby="browse-by-city-heading"
      className="border-b border-zinc-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Parcourir par ville
            </SectionTitleWithArrows>
            <h2
              id="browse-by-city-heading"
              className="mt-1 text-2xl font-semibold text-zinc-900 sm:text-3xl"
            >
              Choisissez votre destination au Maroc.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600">
              Explorez les principales villes, consultez le nombre de voitures
              disponibles et accédez en un clic aux meilleures offres de
              location.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cities.map((city) => {
            const isActive = city.slug === activeCitySlug;
            return (
              <button
                key={city.slug}
                type="button"
                onClick={() => onSelectCity(city.slug)}
                className={`group relative overflow-hidden rounded-3xl bg-zinc-900 text-left shadow-sm ring-1 ring-zinc-900/30 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 ${
                  isActive ? "ring-amber-500/70" : ""
                }`}
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={city.thumbnailImage}
                    alt={city.name}
                    fill
                    loading="lazy"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-900/55 to-zinc-900/10" />
                </div>

                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between text-[11px] font-medium text-zinc-200">
                    <span className="inline-flex items-center gap-1 rounded-full bg-zinc-950/50 px-2 py-1 ring-1 ring-white/10 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {city.carsAvailable} voitures disponibles
                    </span>
                    {isActive && (
                      <span className="rounded-full bg-amber-500/90 px-2 py-1 text-[10px] font-bold text-zinc-950">
                        Sélectionné
                      </span>
                    )}
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-300">
                      Ville
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {city.name}
                    </h3>
                    <p className="mt-1 text-[11px] text-zinc-200/90">
                      Trouvez votre voiture idéale parmi les agences locales
                      partenaires.
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-zinc-50 ring-1 ring-white/15 backdrop-blur">
                    À partir de{" "}
                    <span className="font-semibold text-amber-300">
                      {city.stats.averagePricePerDay} DH/jour
                    </span>
                  </span>
                  <span className="translate-y-6 rounded-full bg-amber-500 px-3 py-1 text-[11px] font-semibold text-zinc-950 shadow-md transition duration-200 group-hover:translate-y-0">
                    Voir les voitures
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type PopularDestinationsSectionProps = {
  destinations: PopularDestinationMeta[];
  onSelectCity: (slug: CitySlug) => void;
};

function PopularDestinationsSection({
  destinations,
  onSelectCity,
}: PopularDestinationsSectionProps) {
  return (
    <section
      aria-labelledby="popular-destinations-heading"
      className="border-b border-zinc-200 bg-linear-to-b from-zinc-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Destinations populaires
            </SectionTitleWithArrows>
            <h2
              id="popular-destinations-heading"
              className="mt-1 text-xl font-semibold text-zinc-900 sm:text-2xl"
            >
              Les villes les plus réservées.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600">
              Découvrez où les voyageurs réservent le plus souvent leur voiture
              au Maroc. Tarifs indicatifs, évaluations clients et badges de
              confiance vous aident à choisir rapidement.
            </p>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto px-2 py-5">
          <div className="flex min-w-full gap-4">
            {destinations.map((destination) => (
              <button
                key={destination.slug}
                type="button"
                onClick={() => onSelectCity(destination.slug)}
                className="group flex min-w-52.5 max-w-xs flex-1 flex-col justify-between rounded-3xl bg-white px-4 py-4 text-left shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-1 hover:shadow-lg hover:ring-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900">
                      {destination.label}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      À partir de{" "}
                      <span className="font-semibold text-amber-600">
                        {destination.fromPrice} DH/jour
                      </span>
                    </p>
                  </div>
                  <div className="text-right text-xs text-zinc-600">
                    <p className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-200">
                      <span aria-hidden>★</span>
                      {destination.rating.toFixed(1)}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-50 px-2 py-1 font-medium text-zinc-700 ring-1 ring-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    {destination.badge === "Most Booked" && "La plus réservée"}
                    {destination.badge === "Best Deals" && "Meilleurs prix"}
                    {destination.badge === "Top Rated" &&
                      "Les mieux notées"}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-600 group-hover:translate-x-0.5 group-hover:text-amber-700">
                    Voir les voitures
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type CityStatisticsSectionProps = {
  city: CityDefinition;
};

function CityStatisticsSection({ city }: CityStatisticsSectionProps) {
  const { stats } = city;

  const statItems = [
    {
      label: "Voitures disponibles",
      value: stats.totalCars.toString(),
      icon: "🚗",
      helper: "Nombre total de véhicules actuellement listés dans cette ville.",
    },
    {
      label: "Prix moyen / jour",
      value: `${stats.averagePricePerDay} DH`,
      icon: "💰",
      helper:
        "Tarif journalier moyen observé sur les offres actives au cours des 30 derniers jours.",
    },
    {
      label: "Agences partenaires",
      value: stats.partnerAgencies.toString(),
      icon: "🏢",
      helper:
        "Agences locales et nationales qui louent leurs véhicules via MoroccoMiles.",
    },
    {
      label: "Catégories les plus louées",
      value: stats.topCategories.join(" • "),
      icon: "📊",
      helper:
        "Segments de véhicules les plus demandés par les voyageurs dans cette ville.",
    },
  ];

  return (
    <section
      aria-labelledby="city-stats-heading"
      className="border-b border-zinc-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Statistiques par ville
            </SectionTitleWithArrows>
            <h2
              id="city-stats-heading"
              className="mt-1 text-2xl font-semibold text-zinc-900 sm:text-3xl"
            >
              Indicateurs clés pour {city.name}.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600">
              Données consolidées à partir des offres de nos agences partenaires
              pour vous aider à choisir la bonne période, le bon type de
              véhicule et le bon budget.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statItems.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col justify-between rounded-3xl bg-zinc-50 px-4 py-4 text-sm shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-amber-300"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-base">
                  <span aria-hidden>{stat.icon}</span>
                </div>
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Statistique
                </span>
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium text-zinc-600">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-zinc-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] text-zinc-500">{stat.helper}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type TopAgenciesSectionProps = {
  city: CityDefinition;
};

function TopAgenciesSection({ city }: TopAgenciesSectionProps) {
  if (city.agencies.length === 0) return null;

  const formatBadge = (badge?: CityAgency["badge"]) => {
    if (badge === "MostTrusted") return "Agence la plus fiable";
    if (badge === "LocalExpert") return "Expert local";
    if (badge === "AirportSpecialist") return "Spécialiste aéroport";
    return null;
  };

  return (
    <section
      aria-labelledby="top-agencies-heading"
      className="border-b border-zinc-200 bg-linear-to-b from-white to-zinc-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Agences partenaires
            </SectionTitleWithArrows>
            <h2
              id="top-agencies-heading"
              className="mt-1 text-2xl font-semibold text-zinc-900 sm:text-3xl"
            >
              Agences mises en avant à {city.name}.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600">
              Découvrez une sélection d&apos;agences de location opérant dans
              cette ville, avec leurs notes, leur volume de véhicules et leurs
              spécialités.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {city.agencies.map((agency) => {
            const badgeLabel = formatBadge(agency.badge);
            return (
              <article
                key={agency.id}
                className="group flex flex-col rounded-3xl bg-white px-4 py-4 text-sm shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-1 hover:shadow-lg hover:ring-amber-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-50 ring-1 ring-zinc-200">
                      <span className="text-xs font-semibold text-zinc-500">
                        {agency.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900">
                        {agency.name}
                      </h3>
                      <p className="mt-1 text-[11px] text-zinc-500">
                        {agency.carsAvailable} voiture
                        {agency.carsAvailable > 1 ? "s" : ""} disponibles
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-200">
                      <span aria-hidden>★</span>
                      {agency.rating.toFixed(1)}
                    </span>
                    {badgeLabel && (
                      <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-700 ring-1 ring-amber-200">
                        {badgeLabel}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex flex-1 flex-col justify-between gap-3">
                  <p className="text-[11px] text-zinc-500">
                    Cette agence est partenaire de MoroccoMiles à {city.name},
                    avec une sélection de véhicules régulièrement mise à jour
                    pour répondre aux besoins des voyageurs loisirs et
                    professionnels.
                  </p>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50"
                  >
                    Voir l&apos;agence
                    <span aria-hidden className="ml-1">
                      →
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type CityInfoSectionProps = {
  city: CityDefinition;
};

function CityInfoSection({ city }: CityInfoSectionProps) {
  return (
    <section
      aria-labelledby="city-info-heading"
      className="border-b border-zinc-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div>
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Louer une voiture à {city.name}
            </SectionTitleWithArrows>
            <h2
              id="city-info-heading"
              className="mt-1 text-2xl font-semibold text-zinc-900 sm:text-3xl"
            >
              Conseils et informations pratiques.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              {city.seoParagraph}
            </p>
          </div>

          <div className="space-y-3 rounded-3xl bg-zinc-50 p-4 text-xs text-zinc-600 ring-1 ring-zinc-200">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Bon à savoir
            </p>
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <span className="mt-0.75 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>
                  Comparez plusieurs catégories de véhicules (économique, SUV,
                  luxe) afin d&apos;adapter le budget à votre usage réel dans la
                  ville et ses environs.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.75 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>
                  Anticipez les périodes de forte demande (vacances scolaires,
                  fêtes religieuses, événements locaux) pour bénéficier des
                  meilleurs tarifs.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.75 h-1.5 w-1.5 rounded-full bg-sky-500" />
                <span>
                  Vérifiez toujours les options de prise en charge (aéroport,
                  centre-ville, gare) proposées par les agences partenaires à{" "}
                  {city.name}.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.75 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                <span>
                  Utilisez MoroccoMiles pour comparer les conditions
                  d&apos;assurance, les cautions et les kilomètres inclus avant
                  de valider votre réservation.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

type ExploreOtherCitiesSectionProps = {
  cities: CityDefinition[];
  onSelectCity: (slug: CitySlug) => void;
};

function ExploreOtherCitiesSection({
  cities,
  onSelectCity,
}: ExploreOtherCitiesSectionProps) {
  if (cities.length === 0) return null;

  return (
    <section
      aria-labelledby="explore-other-cities-heading"
      className="border-b border-zinc-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Explorer d&apos;autres villes
            </SectionTitleWithArrows>
            <h2
              id="explore-other-cities-heading"
              className="mt-1 text-2xl font-semibold text-zinc-900 sm:text-3xl"
            >
              Continuez votre exploration du Maroc.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600">
              Préparez un road trip, combinez plusieurs villes sur un même
              voyage et découvrez d&apos;autres points de retrait disponibles
              sur MoroccoMiles.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cities.map((city) => (
            <button
              key={city.slug}
              type="button"
              onClick={() => onSelectCity(city.slug)}
              className="group flex flex-col items-start gap-2 rounded-2xl bg-zinc-50 p-3 text-left text-xs text-zinc-700 ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50"
            >
              <div className="relative h-20 w-full overflow-hidden rounded-xl bg-zinc-200">
                <Image
                  src={city.thumbnailImage}
                  alt={city.name}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                    Ville
                  </p>
                  <p className="text-sm font-semibold text-zinc-900">
                    {city.name}
                  </p>
                </div>
                <span className="inline-flex items-center justify-center rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700 ring-1 ring-amber-200">
                  {city.carsAvailable} voitures
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

type AgenciesCallToActionProps = {
  cityName: string;
};

function AgenciesCallToAction({ cityName }: AgenciesCallToActionProps) {
  return (
    <section className="bg-linear-to-r from-zinc-900 via-zinc-950 to-zinc-900 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-white/5 via-white/0 to-amber-500/10 px-5 py-8 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300">
            Agences de location
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Vous êtes une agence de location à {cityName} ?
          </h2>
          <p className="mt-3 text-sm text-zinc-200">
            Rejoignez MoroccoMiles et présentez vos véhicules à des milliers de
            voyageurs chaque mois. Bénéficiez d&apos;un tableau de bord dédié,
            d&apos;outils de gestion des réservations et d&apos;une visibilité
            nationale.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg transition hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Publier mes voitures
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}

