import type { Metadata } from "next";
import Image from "next/image";
import { DynamicItineraryBuilder } from "@/components/DynamicIslands";

export const metadata: Metadata = {
  title: "Custom Itinerary Builder",
  description: "Design a private multi-city Morocco journey with a progressive treasure-map itinerary builder.",
  alternates: { canonical: "/itinerary-builder" }
};

export default function ItineraryBuilderPage() {
  return (
    <main className="bg-morocco-sand text-morocco-dark">
      <section className="relative min-h-[58vh] bg-morocco-dark">
        <Image
          src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=2200&q=90"
          alt="A winding Moroccan desert road at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-morocco-dark/90 via-morocco-dark/60 to-morocco-dark/25" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-[1500px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">Design your passage</p>
            <h1 className="font-serif text-6xl leading-[0.9] text-morocco-sand sm:text-8xl">
              Build your<br />
              <em className="font-normal text-morocco-saffron">Morocco.</em>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed tracking-wide text-morocco-sand/75">
              A calm, step-by-step atelier for composing a private multi-city journey—one destination, one night count, one intentional choice at a time.
            </p>
          </div>
        </div>
      </section>

      <DynamicItineraryBuilder />
    </main>
  );
}
