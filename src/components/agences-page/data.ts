export type AgencyCategory =
  | "Économique"
  | "SUV"
  | "Luxe"
  | "Van"
  | "Automatique"
  | "Manuelle";

export type Agency = {
  id: number;
  slug: string;
  name: string;
  logoInitials: string;
  primaryCity: string;
  cities: string[];
  rating: number;
  reviewsCount: number;
  carsCount: number;
  categories: AgencyCategory[];
  description: string;
  featured: boolean;
  joinedAt: string;
};

export const AGENCIES: Agency[] = [
  {
    id: 1,
    slug: "atlascar-casablanca",
    name: "AtlasCar",
    logoInitials: "AC",
    primaryCity: "Casablanca",
    cities: ["Casablanca", "Mohammédia"],
    rating: 4.8,
    reviewsCount: 186,
    carsCount: 42,
    categories: ["Économique", "SUV", "Automatique"],
    description:
      "Agence urbaine premium spécialisée dans les locations aéroportuaires et les déplacements business à Casablanca.",
    featured: true,
    joinedAt: "2023-03-10",
    // Additional profile data could be added here (contact, banner, stats, etc.)
  },
  {
    id: 2,
    slug: "maghreb-rent-marrakech",
    name: "Maghreb Rent",
    logoInitials: "MR",
    primaryCity: "Marrakech",
    cities: ["Marrakech", "Agadir"],
    rating: 4.7,
    reviewsCount: 152,
    carsCount: 35,
    categories: ["Économique", "SUV", "Manuelle"],
    description:
      "Réseau d’agences locales avec une flotte récente idéale pour découvrir le sud du Maroc.",
    featured: true,
    joinedAt: "2023-06-21",
  },
  {
    id: 3,
    slug: "desertdrive-agadir",
    name: "DesertDrive",
    logoInitials: "DD",
    primaryCity: "Agadir",
    cities: ["Agadir", "Ouarzazate"],
    rating: 4.6,
    reviewsCount: 98,
    carsCount: 28,
    categories: ["SUV", "Luxe", "Automatique"],
    description:
      "Spécialiste des itinéraires désert et montagne avec SUV bien entretenus et assistance 24/7.",
    featured: true,
    joinedAt: "2022-11-05",
  },
  {
    id: 4,
    slug: "medina-cars-marrakech",
    name: "Medina Cars",
    logoInitials: "MC",
    primaryCity: "Marrakech",
    cities: ["Marrakech"],
    rating: 4.9,
    reviewsCount: 214,
    carsCount: 31,
    categories: ["Luxe", "Automatique"],
    description:
      "Agence haut de gamme proposant berlines et SUV de luxe pour séjours premium à Marrakech.",
    featured: true,
    joinedAt: "2024-01-15",
  },
  {
    id: 5,
    slug: "airport-mobility-casablanca",
    name: "Airport Mobility",
    logoInitials: "AM",
    primaryCity: "Casablanca",
    cities: ["Casablanca", "Rabat"],
    rating: 4.5,
    reviewsCount: 132,
    carsCount: 39,
    categories: ["Van", "Économique", "Manuelle"],
    description:
      "Solution idéale pour les transferts aéroportuaires, groupes et déplacements corporate.",
    featured: false,
    joinedAt: "2022-09-30",
  },
  {
    id: 6,
    slug: "rif-auto-tanger",
    name: "Rif Auto",
    logoInitials: "RA",
    primaryCity: "Tanger",
    cities: ["Tanger", "Tétouan"],
    rating: 4.4,
    reviewsCount: 87,
    carsCount: 24,
    categories: ["SUV", "Économique"],
    description:
      "Agence de proximité couvrant le nord du Maroc avec un excellent rapport qualité-prix.",
    featured: false,
    joinedAt: "2023-02-08",
  },
  {
    id: 7,
    slug: "ocean-drive-rabat",
    name: "Ocean Drive",
    logoInitials: "OD",
    primaryCity: "Rabat",
    cities: ["Rabat", "Salé"],
    rating: 4.3,
    reviewsCount: 73,
    carsCount: 21,
    categories: ["Économique", "Automatique"],
    description:
      "Agence urbaine pour les déplacements quotidiens et week-ends sur la côte Atlantique.",
    featured: false,
    joinedAt: "2023-09-12",
  },
  {
    id: 8,
    slug: "sahara-move-ouarzazate",
    name: "SaharaMove",
    logoInitials: "SM",
    primaryCity: "Ouarzazate",
    cities: ["Ouarzazate", "Marrakech"],
    rating: 4.6,
    reviewsCount: 65,
    carsCount: 18,
    categories: ["SUV", "Van"],
    description:
      "Partenaire idéal pour les circuits désert avec véhicules adaptés aux longues distances.",
    featured: false,
    joinedAt: "2022-06-18",
  },
];

export const AGENCY_CITIES = Array.from(
  new Set(AGENCIES.flatMap((agency) => agency.cities))
).sort();

export function getAgencyBySlug(slug: string) {
  return AGENCIES.find((agency) => agency.slug === slug);
}

