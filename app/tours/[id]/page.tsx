import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { GeoInsight } from "@/components/GeoInsight";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildPageMetadata, packageTourJsonLd } from "@/lib/seo";
import { getTour, getTourOgImage, getTourPriceFrom, tours } from "@/lib/tours";

type PageProps = {
  params: { id: string };
};

const categoryLabel: Record<string, string> = {
  saharan: "Saharan Nomadic",
  atlas: "High Atlas Peaks",
  atlantic: "Atlantic & Medinas"
};

export function generateStaticParams() {
  return tours.map(({ id }) => ({ id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const tour = getTour(params.id);
  if (!tour) return {};

  const price = getTourPriceFrom(tour);
  const image = getTourOgImage(tour);
  const title = `${tour.title} | Private Morocco Tour`;
  const description = `${tour.tagline}. A ${tour.duration.toLowerCase()} private MoroccoMiles journey from USD ${price.toLocaleString("en-US")}, with certified native guides, authentic hand-crafted passages and a sequential daily itinerary for luxury American and European travelers.`;

  return buildPageMetadata({
    title,
    description,
    path: `/tours/${tour.id}`,
    image,
    imageAlt: `${tour.title} — ${tour.tagline}`,
    absoluteTitle: true,
    keywords: [tour.title, tour.tagline, "private Morocco tour", categoryLabel[tour.category], "luxury desert bivouacs", "certified native guides"]
  });
}

export default function TourDetailPage({ params }: PageProps) {
  const tour = getTour(params.id);
  if (!tour) notFound();

  const price = getTourPriceFrom(tour);
  const image = getTourOgImage(tour);

  return (
    <main className="bg-morocco-sand text-morocco-dark">
      <JsonLd
        data={[
          packageTourJsonLd(tour),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Recommended Tours", path: "/tours" },
            { name: tour.title, path: `/tours/${tour.id}` }
          ])
        ]}
      />

      <section className="relative min-h-[78vh] overflow-hidden bg-morocco-dark">
        <Image src={image} alt={tour.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-morocco-dark via-morocco-dark/40 to-morocco-dark/55" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-[1500px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-24 lg:px-12">
          <Link
            href="/tours"
            className="mb-8 inline-flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-morocco-sand/70 transition-colors duration-300 hover:text-morocco-saffron"
          >
            <ArrowLeft size={14} /> All tours
          </Link>
          <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">
            {categoryLabel[tour.category]} · {tour.duration} · From USD {price.toLocaleString("en-US")}
          </p>
          <h1 className="font-serif text-5xl text-morocco-sand md:text-7xl">{tour.title}</h1>
          <p className="mt-4 max-w-2xl font-serif text-xl italic text-morocco-sand/80 sm:text-2xl">{tour.tagline}</p>
        </div>
      </section>

      <GeoInsight
        answer={`${tour.title} is a private ${tour.duration.toLowerCase()} MoroccoMiles journey from USD ${price.toLocaleString("en-US")}, led by certified native guides along an authentic hand-crafted passage.`}
        insight="Local insider tips from our 15 years of craft shape every sequential day: hidden historical gems, luxury desert bivouacs where the road asks for them, and a pace written for upscale American and European travelers rather than a group timetable."
      />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">Daily schedule</p>
          <h2 className="font-serif text-4xl sm:text-5xl">The road, day by day.</h2>
          <ol className="relative mt-12 space-y-10 border-l border-morocco-saffron/25 pl-8">
            {tour.days.map((day) => (
              <li key={`${tour.id}-day-${day.day}`} id={`day-${day.day}`} className="relative">
                <span className="absolute -left-[39px] top-1 grid size-5 place-items-center rounded-full border border-morocco-saffron bg-morocco-canvas">
                  <span className="size-2 rounded-full bg-morocco-saffron" />
                </span>
                <p className="text-[10px] uppercase tracking-[0.28em] text-morocco-saffron">Day {day.day}</p>
                <h3 className="mt-2 font-serif text-3xl text-morocco-dark">{day.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed tracking-wide text-stone-600 sm:text-base">{day.description}</p>
                <p className="mt-4 inline-flex items-center gap-2 border border-morocco-saffron/20 bg-morocco-canvas px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-morocco-saffron">
                  <Clock size={12} /> {day.metric}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href={`/book?tour=${tour.id}`}
              className="inline-flex items-center bg-morocco-saffron px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-morocco-dark transition-all duration-300 hover:brightness-110"
            >
              Book this tour
            </Link>
            <Link
              href="/itinerary-builder"
              className="inline-flex items-center border border-morocco-saffron/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-morocco-dark transition-all duration-300 hover:border-morocco-saffron"
            >
              Customize the route
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
