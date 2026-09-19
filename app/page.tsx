import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Award, Leaf, ShieldCheck, Sparkles, Star } from "lucide-react";
import { CityCard } from "@/components/CityCard";
import { DynamicIntro } from "@/components/DynamicIslands";
import { destinations } from "@/lib/destinations";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-morocco-sand">
      <DynamicIntro />
      <section className="relative min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=2400&q=90"
          alt="A caravan crossing the golden dunes of the Moroccan Sahara"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-morocco-dark/95 via-morocco-dark/45 to-morocco-dark/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-morocco-dark via-transparent to-morocco-dark/35" />
        <div className="moroccan-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto flex min-h-screen max-w-[1500px] items-end px-5 pb-20 pt-36 sm:px-8 sm:pb-24 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">
              <span className="h-px w-12 bg-morocco-saffron" /> Private journeys · Morocco
            </p>
            <h1 className="text-balance font-serif text-6xl font-medium leading-[0.88] tracking-[-0.04em] text-morocco-sand sm:text-8xl lg:text-[9.4rem]">
              Morocco,<br /><em className="font-normal text-morocco-saffron">felt deeply.</em>
            </h1>
            <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <p className="max-w-lg text-sm leading-7 text-morocco-sand/75 sm:text-base">
                Private, custom-made passages into the landscapes, craft and generous spirit of Morocco.
              </p>
              <Link href="#destinations" className="group inline-flex items-center gap-4 bg-morocco-saffron px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-morocco-dark transition-all duration-300 hover:brightness-110 hover:shadow-gold">
                Find your Morocco <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <a href="#story" aria-label="Scroll to discover" className="absolute bottom-8 right-8 hidden animate-bounce rounded-full border border-morocco-sand/25 p-4 text-morocco-sand transition-all duration-300 hover:border-morocco-saffron hover:text-morocco-saffron lg:block">
            <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section id="story" className="relative border-y border-morocco-saffron/15 bg-morocco-canvas py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:grid-cols-4 sm:px-8">
          {[
            [ShieldCheck, "Licensed local experts"],
            [Award, "15 years of craft"],
            [Leaf, "Low-impact travel"],
            [Star, "4.9 guest rating"]
          ].map(([Icon, label]) => {
            const BadgeIcon = Icon as typeof Star;
            return (
              <div key={label as string} className="flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-stone-600 sm:text-[10px]">
                <BadgeIcon size={18} strokeWidth={1.5} className="shrink-0 text-morocco-mint" />
                {label as string}
              </div>
            );
          })}
        </div>
      </section>

      <section id="destinations" className="relative bg-morocco-sand px-5 py-24 text-stone-800 sm:px-8 sm:py-32 lg:px-12">
        <div className="moroccan-grid absolute inset-0 opacity-[0.06]" />
        <div className="relative mx-auto max-w-[1500px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-mint">Choose your threshold</p>
              <h2 className="text-balance font-serif text-5xl leading-none sm:text-7xl">Four gates.<br />Infinite stories.</h2>
            </div>
            <p className="max-w-lg font-sans text-sm leading-relaxed tracking-wide text-stone-600 lg:justify-self-end">
              Every city reveals a different Morocco. Enter through its most storied gate and we will design the road beyond it around you.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {destinations.map((destination, index) => (
              <CityCard key={destination.slug} destination={destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="journeys" className="bg-morocco-canvas px-5 py-24 text-stone-800 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">Signature passages</p>
            <h2 className="font-serif text-5xl leading-none sm:text-7xl">Not itineraries.<br /><em className="text-stone-400">Living stories.</em></h2>
          </div>
          <div className="grid gap-px bg-morocco-saffron/10 lg:grid-cols-3">
            {[
              { number: "01", title: "Desert Constellations", text: "Seven unhurried nights from Marrakech to a private camp beyond Merzouga.", image: destinations[0].gallery[1] },
              { number: "02", title: "The Artisan Road", text: "Meet the makers preserving Morocco's clay, cedar, leather and woven traditions.", image: destinations[1].gallery[0] },
              { number: "03", title: "Atlantic Reverie", text: "A salt-air passage from Rabat to Essaouira, with tables shaped by the tide.", image: destinations[3].gallery[2] }
            ].map((journey) => (
              <article key={journey.number} className="group bg-morocco-sand p-5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={journey.image} alt={journey.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover grayscale-[20%] transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0" />
                  <span className="absolute left-4 top-4 grid size-10 place-items-center bg-morocco-surface font-serif text-morocco-saffron">{journey.number}</span>
                </div>
                <div className="px-2 pb-5 pt-7">
                  <h3 className="font-serif text-3xl">{journey.title}</h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed tracking-wide text-stone-600">{journey.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?auto=format&fit=crop&w=2000&q=90" alt="Moroccan riad courtyard at dusk" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-morocco-dark/70" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-5 py-24 text-center">
          <Sparkles className="mb-8 text-morocco-saffron" strokeWidth={1} />
          <div className="mb-7 flex gap-1 text-morocco-mint">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={14} fill="currentColor" />)}</div>
          <blockquote className="text-balance font-serif text-4xl leading-tight text-morocco-sand sm:text-6xl">
            “They did not show us Morocco. They let Morocco unfold around us.”
          </blockquote>
          <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-morocco-sand/75">Elena & James · London</p>
        </div>
      </section>
    </main>
  );
}
