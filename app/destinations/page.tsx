import type { Metadata } from "next";
import Image from "next/image";
import DestinationsDirectory from "@/components/DestinationsDirectory";
import { moroccoDestinationSummaries, moroccoRegions } from "@/data/moroccoData";

export const metadata: Metadata = {
  title: "Destinations of Morocco",
  description:
    "Explore Morocco's imperial cities, Atlantic coast, Rif medinas, Sahara oases and Atlas highlands—an editorial directory of destinations and living landmarks.",
  alternates: { canonical: "/destinations" }
};

export default function DestinationsPage() {
  const cover = moroccoDestinationSummaries[0]?.cover ?? "/images/destinations/marrakech/jemaa-el-fna-and-souks-1.jpg";

  return (
    <main className="bg-morocco-sand text-morocco-dark">
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
          <p className="text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">
            {moroccoDestinationSummaries.length} destinations · {moroccoRegions.length} regions
          </p>
        </div>
      </section>

      <DestinationsDirectory cities={moroccoDestinationSummaries} regions={moroccoRegions} />
    </main>
  );
}
