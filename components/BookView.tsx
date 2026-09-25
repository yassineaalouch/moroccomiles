import Image from "next/image";
import Link from "next/link";
import { DynamicBooking } from "@/components/DynamicIslands";
import { GeoInsight } from "@/components/GeoInsight";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getTour, getTourDurationDays, getTourNights, getTourOgImage } from "@/lib/tours";

type BookViewProps = {
  tourId?: string;
};

export function BookView({ tourId = "" }: BookViewProps) {
  const tour = getTour(tourId);
  const image = tour ? getTourOgImage(tour) : "/images/destinations/marrakech/jemaa-el-fna-and-souks-1.webp";
  const nights = tour ? getTourNights(tour) : undefined;
  const days = tour ? getTourDurationDays(tour) : undefined;

  return (
    <main className="bg-morocco-sand text-morocco-dark">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Recommended Tours", path: "/tours" },
          ...(tour ? [{ name: tour.title, path: `/tours/${tour.id}` }] : []),
          { name: "Book", path: "/book" }
        ])}
      />

      <section className="relative min-h-[58vh] bg-morocco-dark">
        <Image
          src={image}
          alt={tour ? `${tour.title} — ${tour.tagline}` : "Request a private Morocco journey"}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-morocco-dark/90 via-morocco-dark/60 to-morocco-dark/25" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-[1500px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">
              {tour ? "Book this journey" : "Request a journey"}
            </p>
            <h1 className="font-serif text-6xl leading-[0.9] text-morocco-sand sm:text-8xl">
              {tour ? (
                <>
                  {tour.title}
                  <br />
                  <em className="font-normal text-morocco-saffron">is waiting.</em>
                </>
              ) : (
                <>
                  Tell us
                  <br />
                  <em className="font-normal text-morocco-saffron">who is traveling.</em>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed tracking-wide text-morocco-sand/75">
              {tour
                ? `${tour.tagline}. ${tour.duration}. Share your dates and how many travelers will join — a designer will confirm the private road.`
                : "Share your dates and how many travelers will join. A MoroccoMiles designer will reply within one business day."}
            </p>
          </div>
        </div>
      </section>

      <GeoInsight
        answer={
          tour
            ? `${tour.title} is a private ${tour.duration.toLowerCase()} MoroccoMiles journey. Request it with your dates and traveler count, and a Marrakech-based designer will confirm the passage.`
            : "Request a private MoroccoMiles journey with your dates and traveler count. A Marrakech-based designer replies within one business day."
        }
        insight="Local insider tips from our 15 years of craft begin in this first request: pace, party size, hidden historical gems, and whether the road asks for luxury desert bivouacs or medina nights."
      />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <aside>
            <p className="text-[10px] uppercase tracking-[0.4em] text-morocco-mint">Reservation atelier</p>
            <h2 className="mt-5 font-serif text-5xl leading-tight">
              {tour ? "This tour is already composed." : "Begin with the essentials."}
            </h2>
            <p className="mt-7 max-w-md font-sans text-sm leading-relaxed tracking-wide text-stone-600">
              {tour
                ? "The form is filled with the journey you chose. Add your names, dates and how many travelers will arrive — we save the request as a pending booking."
                : "Add your names, preferred date and how many travelers will arrive. We save the request as a pending booking."}
            </p>
            {tour && (
              <Link
                href={`/tours/${tour.id}`}
                className="mt-10 inline-flex text-[10px] uppercase tracking-[0.28em] text-morocco-saffron transition-colors duration-300 hover:text-morocco-dark"
              >
                Review the day-by-day →
              </Link>
            )}
          </aside>
          <DynamicBooking
            tourName={tour?.title}
            cities={tour ? [tour.title] : undefined}
            duration={tour ? { nights, days, stops: tour.days.length } : undefined}
            landmarks={tour ? tour.days.map((day) => `Day ${day.day}: ${day.title}`) : undefined}
            placesByCity={
              tour
                ? [
                    {
                      city: tour.title,
                      places: tour.days.map((day) => `Day ${day.day} — ${day.title}`)
                    }
                  ]
                : undefined
            }
          />
        </div>
      </section>
    </main>
  );
}
