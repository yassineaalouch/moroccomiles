export const rentalCities = [
  "Marrakech",
  "Marrakech Menara Airport",
  "Casablanca",
  "Casablanca Mohammed V Airport",
  "Fes",
  "Fes–Saïss Airport",
  "Rabat",
  "Tangier",
  "Tangier Ibn Battuta Airport",
  "Agadir",
  "Agadir Al Massira Airport",
  "Essaouira",
  "Ouarzazate",
  "Chefchaouen",
  "Merzouga"
] as const;

export const rentalFilters = [
  { id: "all", label: "All cars" },
  { id: "standard", label: "Normal cars" },
  { id: "offroad", label: "4×4" },
  { id: "tourist", label: "Large tourist cars" }
] as const;

export type RentalFilter = (typeof rentalFilters)[number]["id"];
export type RentalCategory = Exclude<RentalFilter, "all">;

export type RentalCar = {
  id: string;
  name: string;
  category: RentalCategory;
  image: string;
  seats: string;
  gearbox: string;
  priceEur: number;
  priceMad: number;
};

const carImage = (filename: string) => `/images/cars/${encodeURIComponent(filename)}`;

/**
 * Indicative daily rates, blended from published 2026 Morocco tariffs
 * (Hertz Maroc, MoroccoForYou, SoeezAuto, iRent Fès, Locapp market bands).
 * The confirmation states the price for the chosen dates.
 */
export const rentalCars: RentalCar[] = [
  {
    id: "hyundai-i10",
    name: "Hyundai i10 Automatic",
    category: "standard",
    image: carImage("HYUNDAI I10 AUTOMATIC MODEL 2026.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 30,
    priceMad: 300
  },
  {
    id: "kia-picanto",
    name: "Kia Picanto",
    category: "standard",
    image: carImage("KIA Picanto.webp"),
    seats: "4 seats",
    gearbox: "Manual",
    priceEur: 30,
    priceMad: 300
  },
  {
    id: "mg-3",
    name: "MG 3 Automatic",
    category: "standard",
    image: carImage("MG 3 AUTOMATIC.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 40,
    priceMad: 400
  },
  {
    id: "dacia-sandero-streetway",
    name: "Dacia Sandero Streetway",
    category: "standard",
    image: carImage("Dacia Sandero Streetway BVM.webp"),
    seats: "5 seats",
    gearbox: "Manual",
    priceEur: 35,
    priceMad: 350
  },
  {
    id: "dacia-logan",
    name: "Dacia Logan",
    category: "standard",
    image: carImage("dacia-logan-2026.webp"),
    seats: "5 seats",
    gearbox: "Manual",
    priceEur: 350,
    priceMad: 3500
  },
  {
    id: "hyundai-accent-2026",
    name: "Hyundai Accent 2026",
    category: "standard",
    image: carImage("hyundai-accent-2026-catalogue-main.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 60,
    priceMad: 600
  },
  {
    id: "peugeot-208",
    name: "Peugeot 208",
    category: "standard",
    image: carImage("peugeot-208.webp"),
    seats: "5 seats",
    gearbox: "Manual",
    priceEur: 35,
    priceMad: 350
  },
  {
    id: "renault-clio",
    name: "Renault Clio",
    category: "standard",
    image: carImage("renault-clio-e-tech-autonews-2024-99.webp"),
    seats: "5 seats",
    gearbox: "Automatic hybrid",
    priceEur: 35,
    priceMad: 350
  },
  {
    id: "fiat-tipo",
    name: "Fiat Tipo",
    category: "standard",
    image: carImage("Fiat Tipo.webp"),
    seats: "5 seats",
    gearbox: "Manual",
    priceEur: 35,
    priceMad: 350
  },
  {
    id: "geely-emgrand",
    name: "Geely Emgrand",
    category: "standard",
    image: carImage("Geely Emgrand.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 40,
    priceMad: 400
  },
  {
    id: "peugeot-308",
    name: "Peugeot 308",
    category: "standard",
    image: carImage("Peugeot 308.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 35,
    priceMad: 350
  },
  {
    id: "geely-gx3-pro",
    name: "Geely GX3 Pro",
    category: "standard",
    image: carImage("GEELY GX3 PRO.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 40,
    priceMad: 400
  },
  {
    id: "suzuki-jimny",
    name: "Suzuki Jimny",
    category: "offroad",
    image: carImage("Suzuki Jimny 4x4.webp"),
    seats: "4 seats",
    gearbox: "Manual",
    priceEur: 55,
    priceMad: 550
  },
  {
    id: "dacia-duster",
    name: "Dacia Duster 4×4",
    category: "offroad",
    image: carImage("DACIA DUSTER 4X4.webp"),
    seats: "5 seats",
    gearbox: "Manual",
    priceEur: 45,
    priceMad: 450
  },
  {
    id: "toyota-prado-tx",
    name: "Toyota Prado TX",
    category: "offroad",
    image: carImage("4x4 TOYOTA PRADO AUTO TX 7 PLACES.webp"),
    seats: "7 seats",
    gearbox: "Automatic",
    priceEur: 120,
    priceMad: 1200
  },
  {
    id: "toyota-prado-2026",
    name: "Toyota Prado Diesel 2026",
    category: "offroad",
    image: carImage("NEW TOYOTA PRADO DIESEL MODEL 2026 7 PLACE.webp"),
    seats: "7 seats",
    gearbox: "Automatic",
    priceEur: 170,
    priceMad: 1700
  },
  {
    id: "ford-raptor",
    name: "Ford Raptor",
    category: "offroad",
    image: carImage("2017-ford-f-150-raptor-configurator.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 170,
    priceMad: 1700
  },
  {
    id: "tank-300",
    name: "Tank 300",
    category: "offroad",
    image: carImage("tank icance.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 120,
    priceMad: 1200
  },
  {
    id: "volkswagen-touareg-2026",
    name: "Volkswagen Touareg 2026",
    category: "offroad",
    image: carImage("volkswagen-touareg-2026-photo-exterieure-fond-clair-maroc-main.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 120,
    priceMad: 1200
  },
  {
    id: "range-rover-evoque",
    name: "Range Rover Evoque",
    category: "offroad",
    image: carImage("land-rover-range-rover-evoque-2026-catalogue-main.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 120,
    priceMad: 1200
  },
  {
    id: "range-rover-sport",
    name: "Range Rover Sport",
    category: "offroad",
    image: carImage("range rover sport.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 260,
    priceMad: 2600
  },
  {
    id: "fiat-500x",
    name: "Fiat 500X",
    category: "tourist",
    image: carImage("FIAT 500 X.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 60,
    priceMad: 600
  },
  {
    id: "changan-uni-k",
    name: "Changan UNI-K",
    category: "tourist",
    image: carImage("2.0 Turbo 226 AT Exclusive.webp"),
    seats: "5 seats",
    gearbox: "Automatic",
    priceEur: 55,
    priceMad: 550
  },
  {
    id: "minibus-h1",
    name: "Minibus Hyundai H1",
    category: "tourist",
    image: carImage("Minibus H1 Marrakech.webp"),
    seats: "9 seats",
    gearbox: "Automatic",
    priceEur: 170,
    priceMad: 1700
  },
  {
    id: "minibus-ford",
    name: "Minibus Ford",
    category: "tourist",
    image: carImage("Minibus Ford.webp"),
    seats: "15 seats",
    gearbox: "Manual",
    priceEur: 170,
    priceMad: 1700
  },
  {
    id: "minibus-mercedes",
    name: "Minibus Mercedes",
    category: "tourist",
    image: carImage("Minibus Mercedes.webp"),
    seats: "16 seats",
    gearbox: "Automatic",
    priceEur: 170,
    priceMad: 1700
  }
];

export const categoryLabel: Record<RentalCategory, string> = {
  standard: "Normal car",
  offroad: "4×4",
  tourist: "Large tourist car"
};

export const getRentalCar = (id: string) => rentalCars.find((car) => car.id === id);
