import type { Metadata } from "next";
import Image from "next/image";
import { DynamicGallery } from "@/components/DynamicIslands";

export const metadata: Metadata = {
  title: "Morocco Travel Gallery",
  description: "A visual passage through Morocco's dunes, medinas, mountains and living craft.",
  alternates: { canonical: "/gallery" }
};

export default function GalleryPage() {
  return (
    <main className="bg-morocco-sand text-stone-800">
      <section className="relative min-h-[72vh] bg-morocco-dark">
        <Image
          src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2200&q=90"
          alt="Moroccan desert landscape in warm evening light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-morocco-dark/65" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-[1500px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12">
          <div className="grid w-full gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">A visual field journal</p>
              <h1 className="font-serif text-7xl leading-[0.88] text-morocco-sand sm:text-9xl">Morocco<br /><em className="font-normal text-morocco-saffron">in frames.</em></h1>
            </div>
            <p className="max-w-md font-sans text-sm leading-relaxed tracking-wide text-morocco-sand/75 lg:justify-self-end">
              Light, color and human craft collected across the kingdom, from first light in the Sahara to the last lamps of the medina.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 className="font-serif text-5xl leading-none sm:text-7xl">Landscapes with<br />a living memory.</h2>
            <p className="max-w-lg font-sans text-sm leading-relaxed tracking-wide text-stone-600 lg:justify-self-end">An asymmetric portrait of the places, textures and traditions that shape every MoroccoMiles journey.</p>
          </div>
          <DynamicGallery />
        </div>
      </section>
    </main>
  );
}
