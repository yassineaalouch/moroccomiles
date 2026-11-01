import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KeyRound, MapPin, ShieldCheck } from "lucide-react";
import { DynamicCarRentalCatalog, DynamicCarRentalForm } from "@/components/DynamicIslands";
import { GeoInsight } from "@/components/GeoInsight";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { rentalCars, rentalCities } from "@/lib/car-rental";
import { absoluteUrl } from "@/lib/seo/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Car Rental in Morocco",
  description:
    "MoroccoMiles rents cars in Morocco as well as designing private tours. Normal cars, 4x4s and large tourist vehicles, self-drive or with chauffeur, from Marrakech, Casablanca, Fes and beyond.",
  path: "/car-rental",
  image: "/images/destinations/merzouga/erg-chebbi-dunes-1.webp",
  imageAlt: "The road toward the Erg Chebbi dunes in Morocco",
  keywords: [
    "Morocco car rental",
    "location voiture Maroc",
    "Marrakech airport car hire",
    "4x4 Sahara rental",
    "chauffeur Morocco"
  ]
});

const steps = [
  {
    icon: KeyRound,
    title: "Tell us the road",
    text: "Dates, pickup, return and the kind of car the journey needs."
  },
  {
    icon: ShieldCheck,
    title: "We confirm the car",
    text: "Availability, insurance, mileage and the deposit come back with the quote."
  },
  {
    icon: MapPin,
    title: "Keys, or a driver",
    text: "Handover at the airport, the riad or the hotel — or a chauffeur who already knows the passes."
  }
] as const;

const fleetJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MoroccoMiles rental cars",
  itemListElement: rentalCars.map((car, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Car",
      name: car.name,
      image: absoluteUrl(car.image),
      vehicleSeatingCapacity: Number.parseInt(car.seats, 10),
      offers: {
        "@type": "Offer",
        price: car.priceEur,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: absoluteUrl(`/car-rental?car=${car.id}`)
      }
    }
  }))
};

export default function CarRentalPage() {
  return (
    <main className="bg-morocco-sand text-morocco-dark">
      <JsonLd data={fleetJsonLd} />
      <section className="relative min-h-[68vh] bg-morocco-dark">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&fm=webp&w=1600&q=70"
          alt="An open Moroccan road at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-morocco-dark/90 via-morocco-dark/55 to-morocco-dark/25" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-[1500px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">Car rental</p>
            <h1 className="font-serif text-6xl leading-[0.9] text-morocco-sand sm:text-8xl">
              The road,
              <br />
              <em className="font-normal text-morocco-saffron">on your terms.</em>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed tracking-wide text-morocco-sand/75">
              Self-drive or with a chauffeur. City cars for the medina days, 4×4s for the dunes, and a handover where your journey actually begins.
            </p>
            <Link
              href="#request"
              className="mt-8 inline-flex border border-morocco-saffron/60 px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-morocco-saffron transition-all duration-300 hover:bg-morocco-saffron hover:text-morocco-dark"
            >
              Request a car
            </Link>
          </div>
        </div>
      </section>

      <GeoInsight
        answer="MoroccoMiles is a Marrakech tour operator and a car rental desk: private journeys, and cars from city models to 4×4s and large tourist vehicles."
        insight="Daily rates shown on each car are indicative, blended from published Morocco rental tariffs, and confirmed for your dates. Pickup is arranged at airports, riads and hotels. The excess hold, the papers you need and GPS tracking are set out in the rental conditions."
        french="MoroccoMiles est une agence d’organisation de circuits et de location de voitures à Marrakech : citadines, 4×4 et grandes voitures touristiques, en conduite libre ou avec chauffeur."
      />

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[10px] uppercase tracking-[0.4em] text-morocco-mint">The fleet</p>
          <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">A car matched to the road, not the brochure.</h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed tracking-wide text-stone-600">
            Prices are a starting daily rate in euros and dirhams, drawn from current Morocco rental tariffs for the same models. Your confirmation states the price for your dates.{" "}
            <Link href="/car-rental/terms" className="text-morocco-saffron underline-offset-4 hover:underline">
              Read the rental conditions
            </Link>
            .
          </p>
          <DynamicCarRentalCatalog />
        </div>
      </section>

      <section className="bg-morocco-dark px-5 py-20 text-morocco-sand sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title}>
              <step.icon className="text-morocco-saffron" size={22} strokeWidth={1.5} />
              <h2 className="mt-6 font-serif text-4xl">{step.title}</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed tracking-wide text-morocco-sand/65">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-morocco-mint">Where we hand over</p>
            <h2 className="mt-5 font-serif text-5xl leading-tight">Airports, riads, and the edge of the dunes.</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed tracking-wide text-stone-600">
              One-way rentals are welcome. Leave the car in another city, or keep the same driver from the first gate to the last.
            </p>
            <ul className="mt-10 flex flex-wrap gap-2">
              {rentalCities.map((city) => (
                <li key={city} className="border border-morocco-saffron/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-stone-600">
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div id="request" className="scroll-mt-28">
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">Request a car</p>
            <DynamicCarRentalForm />
          </div>
        </div>
      </section>
    </main>
  );
}
