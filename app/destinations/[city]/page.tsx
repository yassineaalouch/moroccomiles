import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { DynamicCityIntro } from "@/components/DynamicIslands";
import LandmarkExplorer from "@/components/LandmarkExplorer";
import { getDestinationCoverImage, getMoroccoDestination, moroccoData } from "@/data/moroccoData";

type PageProps = {
  params: { city: string };
};

export function generateStaticParams() {
  return moroccoData.map(({ slug }) => ({ city: slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const destination = getMoroccoDestination(params.city);
  if (!destination) return {};

  const cover = getDestinationCoverImage(destination);

  return {
    title: `${destination.name} — ${destination.eyebrow}`,
    description: destination.intro,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: `${destination.name} — ${destination.eyebrow}`,
      description: destination.intro,
      images: cover ? [{ url: cover, width: 2000, height: 1200, alt: destination.name }] : undefined
    }
  };
}

export default function DestinationCityPage({ params }: PageProps) {
  const destination = getMoroccoDestination(params.city);
  if (!destination) notFound();

  const hero = getDestinationCoverImage(destination);
  const heritageLine = destination.landmarks.map((landmark) => landmark.title).join(" · ");

  return (
    <main className="bg-morocco-sand text-morocco-dark">
      <DynamicCityIntro city={destination.name} slug={destination.slug} />

      <section className="relative min-h-[88vh] overflow-hidden bg-morocco-dark">
        {hero && (
          <Image
            src={hero}
            alt={`${destination.name}, Morocco`}
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
            {destination.region}
          </p>
          <h1 className="font-serif text-5xl text-morocco-sand drop-shadow-md md:text-7xl">
            {destination.name}
          </h1>
          <p className="mt-4 font-serif text-xl italic text-morocco-sand/80 sm:text-2xl">
            {destination.name} - {destination.eyebrow}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-12 px-6 font-sans text-stone-700 leading-relaxed text-lg">
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">Cultural introduction</p>
        <p>{destination.intro}</p>
        <p className="mt-8 font-sans text-sm leading-relaxed tracking-wide text-stone-500">{heritageLine}</p>
      </section>

      <LandmarkExplorer cityName={destination.name} landmarks={destination.landmarks} />
    </main>
  );
}
