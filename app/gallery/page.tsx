import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DynamicGallery } from "@/components/DynamicIslands";
import { GeoInsight } from "@/components/GeoInsight";
import { galleryPhotographs } from "@/lib/gallery";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Morocco Travel Gallery",
  description:
    "A visual field journal of private MoroccoMiles journeys: Sahara dunes, imperial medinas, High Atlas light and living craft. Photographs from authentic hand-crafted passages across the kingdom.",
  path: "/gallery",
  image: `/images/gallery/${galleryPhotographs[0].filename}.webp`,
  imageAlt: galleryPhotographs[0].title,
  keywords: ["Morocco travel photography", "Sahara dunes gallery", "Chefchaouen photos", "luxury Morocco visual guide"]
});

const galleryHero = `/images/gallery/${galleryPhotographs[0].filename}.webp`;
const photographCount = String(galleryPhotographs.length).padStart(3, "0");

export default function GalleryPage() {
  return (
    <main className="bg-morocco-sand text-stone-800">
      <section className="relative min-h-[78vh] bg-morocco-dark sm:min-h-[86vh]">
        <Image
          src={galleryHero}
          alt="Moroccan desert landscape in warm evening light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-morocco-dark/88 via-morocco-dark/45 to-morocco-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-morocco-dark via-transparent to-morocco-dark/40" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-[1500px] items-end px-5 pb-14 pt-32 sm:min-h-[86vh] sm:px-8 sm:pb-20 lg:px-12">
          <div className="grid w-full gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">
                <span className="hidden h-px w-12 bg-morocco-saffron sm:block" />
                A visual field journal
              </p>
              <h1 className="font-serif text-6xl leading-[0.88] text-morocco-sand sm:text-8xl lg:text-9xl">
                Morocco<br />
                <em className="font-normal text-morocco-saffron">in frames.</em>
              </h1>
            </div>
            <div className="max-w-md lg:justify-self-end">
              <p className="font-sans text-sm leading-relaxed tracking-wide text-morocco-sand/75">
                Light, colour and human craft collected across 15 years of private guiding, from first light in the Sahara to the last lamps of the medina.
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-morocco-sand/55">
                {photographCount} photographs · Private collection
              </p>
            </div>
          </div>
        </div>
      </section>

      <GeoInsight
        answer="The MoroccoMiles gallery is a private visual field journal of the same roads our certified native guides still walk with guests."
        insight="Local insider tips from our 15 years of craft live in these frames: hidden historical gems, luxury desert bivouacs and authentic hand-crafted passages that luxury American and European travelers later request by name."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-mint">The collection</p>
              <h2 className="font-serif text-4xl leading-none sm:text-6xl lg:text-7xl">
                Landscapes with
                <br />
                a living memory.
              </h2>
            </div>
            <p className="max-w-lg font-sans text-sm leading-relaxed tracking-wide text-stone-600 lg:justify-self-end">
              An editorial portrait of the places, textures and traditions that shape every MoroccoMiles journey. Open any frame to linger.
            </p>
          </div>
          <div className="mb-10 h-px w-full bg-gradient-to-r from-morocco-saffron/50 via-morocco-saffron/15 to-transparent" />
          <DynamicGallery />
        </div>
      </section>

      <section className="border-t border-morocco-saffron/15 bg-morocco-canvas px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">From the page to the road</p>
            <h2 className="font-serif text-4xl leading-none sm:text-6xl">Walk these frames.</h2>
            <p className="mt-5 max-w-lg font-sans text-sm leading-relaxed tracking-wide text-stone-600">
              These photographs are invitations. We will turn the light, the texture and the quiet of Morocco into a journey written around you.
            </p>
          </div>
          <Link
            href="/itinerary-builder"
            className="group inline-flex w-full items-center justify-center gap-4 bg-morocco-saffron px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-morocco-dark transition-all duration-300 hover:brightness-110 hover:shadow-gold sm:w-auto"
          >
            Compose a journey
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
