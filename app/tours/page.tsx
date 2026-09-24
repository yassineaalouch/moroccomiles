import type { Metadata } from "next";
import Image from "next/image";
import { DynamicToursCatalog } from "@/components/DynamicIslands";
import { GeoInsight } from "@/components/GeoInsight";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, itemListJsonLd } from "@/lib/seo";
import { tours } from "@/lib/tours";

export const metadata: Metadata = buildPageMetadata({
  title: "Recommended Private Morocco Tours",
  description:
    "Fifteen curated private MoroccoMiles journeys across the Sahara, High Atlas and Atlantic coast. Luxury desert bivouacs, authentic hand-crafted passages and certified native guides with sequential daily itineraries.",
  path: "/tours",
  image: "/images/destinations/merzouga/erg-chebbi-dunes-1.webp",
  imageAlt: "Erg Chebbi dunes on a private Merzouga Sahara tour",
  keywords: ["private Morocco tours", "Merzouga desert tour", "High Atlas trek", "Essaouira private tour", "luxury desert bivouacs"]
});

export default function ToursPage() {
  return (
    <main className="bg-morocco-sand text-morocco-dark">
      <JsonLd
        data={itemListJsonLd(
          "Recommended MoroccoMiles private tours",
          "/tours",
          tours.map((tour) => ({ name: tour.title, path: `/tours/${tour.id}` }))
        )}
      />
      <section className="relative min-h-[58vh] bg-morocco-dark">
        <Image
          src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=2200&q=90"
          alt="A curated Morocco journey across dunes and mountain light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-morocco-dark/90 via-morocco-dark/55 to-morocco-dark/25" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-[1500px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">Recommended tours</p>
            <h1 className="font-serif text-6xl leading-[0.9] text-morocco-sand sm:text-8xl">
              Journeys,<br />
              <em className="font-normal text-morocco-saffron">carefully composed.</em>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed tracking-wide text-morocco-sand/75">
              Desert expeditions, High Atlas passages and Atlantic medina roads—each a private custom tour with a clear sequential daily schedule and certified native guides.
            </p>
          </div>
        </div>
      </section>

      <GeoInsight
        answer="MoroccoMiles currently publishes fifteen private recommended tours across Saharan, High Atlas and Atlantic Morocco, each with a priced USD itinerary and certified native guides."
        insight="Local insider tips from our 15 years of craft live in every day-by-day breakdown: luxury desert bivouacs beyond the first dune line, mule-path Atlas villages, and authentic hand-crafted passages along the wind city and imperial Atlantic arc."
      />

      <DynamicToursCatalog />
    </main>
  );
}
