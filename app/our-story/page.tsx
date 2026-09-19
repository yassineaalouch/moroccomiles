import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Leaf, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover the local roots, values and people behind MoroccoMiles.",
  alternates: { canonical: "/our-story" }
};

export default function OurStoryPage() {
  return (
    <main className="bg-morocco-sand text-stone-800">
      <section className="relative min-h-[78vh] bg-morocco-dark">
        <Image
          src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=2200&q=90"
          alt="A historic Moroccan medina at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-morocco-dark/90 via-morocco-dark/55 to-morocco-dark/20" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-[1500px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-24 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">Born from the road</p>
            <h1 className="text-balance font-serif text-7xl leading-[0.88] text-morocco-sand sm:text-9xl lg:text-[10rem]">Our Morocco,<br /><em className="font-normal text-morocco-saffron">shared with care.</em></h1>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-36 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-morocco-mint">The first mile</p>
          </div>
          <div>
            <p className="font-serif text-4xl leading-tight sm:text-6xl">
              We began with one conviction: the most unforgettable Morocco is found through its people, not a checklist.
            </p>
            <div className="mt-12 grid gap-8 font-sans text-sm leading-relaxed tracking-wide text-stone-600 sm:grid-cols-2">
              <p>MoroccoMiles grew from years spent crossing the country with family, friends and curious guests. The roads taught us where to slow down, whom to listen to and why hospitality here is never a performance.</p>
              <p>Today, our travel designers work alongside guides, artisans, cooks and hosts whose knowledge has been shaped over generations. Every itinerary begins with their Morocco and is then made entirely yours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-morocco-canvas px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-7">
            <Image src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?auto=format&fit=crop&w=1600&q=90" alt="Moroccan artisan heritage in Fes" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">Local by design</p>
            <h2 className="font-serif text-5xl leading-tight sm:text-6xl">Knowledge lives in the details.</h2>
            <p className="mt-7 font-sans text-sm leading-relaxed tracking-wide text-stone-600">The right doorway in Fes. A desert camp beyond the crowded dunes. A family table in the Atlas. These are not add-ons; they are relationships built over time.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-36 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4 lg:col-start-2">
            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-morocco-mint">Travel that gives back</p>
            <h2 className="font-serif text-5xl leading-tight sm:text-6xl">Leave places richer, not altered.</h2>
            <p className="mt-7 font-sans text-sm leading-relaxed tracking-wide text-stone-600">We favor independent stays, locally owned kitchens, fair guide partnerships and a slower pace that places less pressure on fragile landscapes and historic neighborhoods.</p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden lg:col-span-6 lg:col-start-7">
            <Image src="https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=1600&q=90" alt="An Atlas mountain village in Morocco" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-morocco-canvas px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-px bg-morocco-saffron/20 md:grid-cols-3">
          {[
            { Icon: Users, title: "Locally rooted", text: "Moroccan voices guide every decision." },
            { Icon: Heart, title: "Personally shaped", text: "No two journeys follow the same rhythm." },
            { Icon: Leaf, title: "Lightly traveled", text: "Fewer crowds, deeper stays, fair partnerships." }
          ].map(({ Icon, title, text }) => (
            <article key={title} className="bg-morocco-sand p-9 sm:p-12">
              <Icon className="mb-8 text-morocco-mint" strokeWidth={1.5} />
              <h2 className="font-serif text-3xl">{title}</h2>
              <p className="mt-4 font-sans text-sm leading-relaxed tracking-wide text-stone-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
