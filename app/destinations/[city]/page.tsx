import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { DynamicCityIntro } from "@/components/DynamicIslands";
import { GeoInsight } from "@/components/GeoInsight";
import { JsonLd } from "@/components/JsonLd";
import LandmarkExplorer from "@/components/LandmarkExplorer";
import { getDestinationCoverImage, getMoroccoDestination, moroccoData } from "@/data/moroccoData";
import { breadcrumbJsonLd, buildPageMetadata, destinationTitle, destinationTourJsonLd, getDestinationGeo } from "@/lib/seo";

type PageProps = {
  params: { city: string };
};

export function generateStaticParams() {
  return moroccoData.map(({ slug }) => ({ city: slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const destination = getMoroccoDestination(params.city);
  if (!destination) return {};

  const geo = getDestinationGeo(destination);
  const cover = getDestinationCoverImage(destination);
  const title = destinationTitle(destination.name);
  const landmarks = destination.landmarks
    .slice(0, 4)
    .map((landmark) => landmark.title)
    .join(", ");

  return buildPageMetadata({
    title,
    description: geo.description,
    path: `/destinations/${destination.slug}`,
    image: cover,
    imageAlt: `Private custom ${destination.name} tour — ${destination.eyebrow}, Morocco`,
    absoluteTitle: true,
    keywords: [
      `private custom ${destination.name} tour`,
      `${destination.name} local insider travel guide Morocco`,
      `certified native guides ${destination.name}`,
      destination.eyebrow,
      landmarks,
      "authentic hand-crafted passages",
      "hidden historical gems",
      "luxury desert bivouacs"
    ]
  });
}

export default function DestinationCityPage({ params }: PageProps) {
  const destination = getMoroccoDestination(params.city);
  if (!destination) notFound();

  const geo = getDestinationGeo(destination);
  const hero = getDestinationCoverImage(destination);
  const heritageLine = destination.landmarks.map((landmark) => landmark.title).join(" · ");

  return (
    <main className="bg-morocco-sand text-morocco-dark">
      <JsonLd
        data={[
          destinationTourJsonLd(destination, geo, hero),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            { name: destination.name, path: `/destinations/${destination.slug}` }
          ])
        ]}
      />
      <DynamicCityIntro city={destination.name} slug={destination.slug} />

      <section className="relative min-h-[88vh] overflow-hidden bg-morocco-dark">
        {hero && (
          <Image
            src={hero}
            alt={`${destination.name}, Morocco — ${destination.eyebrow}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-morocco-dark via-morocco-dark/35 to-morocco-dark/55" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-[1500px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-24 lg:px-12">
          <Link
            href="/destinations"
            className="mb-8 inline-flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-morocco-sand/70 transition-colors duration-300 hover:text-morocco-saffron"
          >
            <ArrowLeft size={14} /> All destinations
          </Link>
          <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">
            {destination.region} · From USD {geo.priceFrom.toLocaleString("en-US")}
          </p>
          <h1 className="font-serif text-5xl text-morocco-sand drop-shadow-md md:text-7xl">
            Private Custom {destination.name} Tour
          </h1>
          <p className="mt-4 font-serif text-xl italic text-morocco-sand/80 sm:text-2xl">
            {destination.name} — {destination.eyebrow}
          </p>
        </div>
      </section>

      <GeoInsight answer={geo.directAnswer} insight={geo.eeatInsight} />

      <section className="mx-auto max-w-3xl px-6 py-12 font-sans text-lg leading-relaxed text-stone-700">
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">Cultural introduction</p>
        <p>{destination.intro}</p>
        <p className="mt-8 font-sans text-sm leading-relaxed tracking-wide text-stone-500">{heritageLine}</p>
        <p className="mt-6 font-sans text-sm leading-relaxed tracking-wide text-stone-600">
          Suggested private stay: <strong>{geo.duration}</strong>, shaped around authentic hand-crafted passages and certified native guides.
        </p>
      </section>

      <LandmarkExplorer cityName={destination.name} landmarks={destination.landmarks} />
    </main>
  );
}
