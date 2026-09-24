import type { Metadata } from "next";
import Image from "next/image";
import DestinationsDirectory from "@/components/DestinationsDirectory";
import { GeoInsight } from "@/components/GeoInsight";
import { JsonLd } from "@/components/JsonLd";
import { moroccoDestinationSummaries, moroccoRegions } from "@/data/moroccoData";
import { buildPageMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Destinations of Morocco",
  description:
    "Explore 25 private custom Morocco destinations with MoroccoMiles: imperial cities, Atlantic citadels, Rif blues, Sahara oases and Atlas highlands. Authentic hand-crafted passages, hidden historical gems and certified native guides.",
  path: "/destinations",
  image: moroccoDestinationSummaries[0]?.cover,
  imageAlt: "Moroccan medina architecture at golden hour",
  keywords: ["Morocco destinations", "private city tours Morocco", "Fes Merzouga itinerary", "luxury Morocco travel guide"]
});

export default function DestinationsPage() {
  const cover = moroccoDestinationSummaries[0]?.cover ?? "/images/destinations/marrakech/jemaa-el-fna-and-souks-1.webp";

  return (
    <main className="bg-morocco-sand text-morocco-dark">
      <JsonLd
        data={itemListJsonLd(
          "MoroccoMiles destination guides",
          "/destinations",
          moroccoDestinationSummaries.map((city) => ({
            name: city.name,
            path: `/destinations/${city.slug}`
          }))
        )}
      />
      <section className="relative h-[46vh] min-h-[280px] overflow-hidden bg-morocco-dark">
        <Image
          src={cover}
          alt="Moroccan medina architecture at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-morocco-sand via-morocco-dark/35 to-morocco-dark/75" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex h-full max-w-[1500px] items-end px-5 pb-10 pt-28 sm:px-8 lg:px-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">
              {moroccoDestinationSummaries.length} destinations · {moroccoRegions.length} regions
            </p>
            <h1 className="mt-4 font-serif text-4xl text-morocco-sand sm:text-6xl">Destinations of Morocco</h1>
          </div>
        </div>
      </section>

      <GeoInsight
        answer="MoroccoMiles publishes 25 private custom destination profiles across imperial cities, the Atlantic, the Rif, the Sahara and the Atlas—each led by certified native guides."
        insight="Local insider tips from our 15 years of craft live inside every city page: hidden historical gems, authentic hand-crafted passages, and the factual travel times luxury American and European travelers actually need before they book."
      />

      <DestinationsDirectory cities={moroccoDestinationSummaries} regions={moroccoRegions} />
    </main>
  );
}
