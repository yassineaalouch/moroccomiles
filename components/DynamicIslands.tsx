"use client";

import dynamic from "next/dynamic";

const IntroOverlay = dynamic(() => import("./IntroOverlay"), { ssr: false });
const BookingForm = dynamic(() => import("./BookingForm"), {
  ssr: false,
  loading: () => <div className="min-h-96 animate-pulse border border-morocco-saffron/10 bg-morocco-surface" />
});
const GalleryGrid = dynamic(() => import("./GalleryGrid"), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[140px] lg:gap-5 xl:auto-rows-[160px]">
      <div className="min-h-[70vw] animate-pulse bg-morocco-surface/10 sm:col-span-2 sm:min-h-[360px] lg:col-span-8 lg:row-span-4 lg:min-h-0" />
      <div className="min-h-[58vw] animate-pulse bg-morocco-surface/10 sm:min-h-[280px] lg:col-span-4 lg:row-span-2 lg:min-h-0" />
      <div className="min-h-[58vw] animate-pulse bg-morocco-surface/10 sm:min-h-[280px] lg:col-span-4 lg:row-span-2 lg:min-h-0" />
    </div>
  )
});
const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => <div className="min-h-[480px] animate-pulse bg-morocco-surface" />
});
const ItineraryBuilder = dynamic(() => import("./ItineraryBuilder"), {
  ssr: false,
  loading: () => <div className="min-h-[70vh] animate-pulse bg-morocco-sand" />
});
const ToursCatalog = dynamic(() => import("./ToursCatalog"), {
  ssr: false,
  loading: () => <div className="min-h-[70vh] animate-pulse bg-morocco-sand" />
});

export function DynamicIntro() {
  return <IntroOverlay />;
}

export function DynamicCityIntro({ city, slug }: { city: string; slug: string }) {
  return (
    <IntroOverlay
      title={`Welcome to ${city}`}
      subtitle="A new story begins"
      storageKey={`moroccoMilesCityTransition:${slug}`}
      queued
    />
  );
}

export function DynamicBooking({
  destination,
  cities,
  duration,
  landmarks,
  placesByCity,
  tourName
}: {
  destination?: string;
  cities?: string[];
  duration?: { nights?: number; days?: number; stops?: number };
  landmarks?: string[];
  placesByCity?: { city: string; places: string[] }[];
  tourName?: string;
}) {
  return (
    <BookingForm
      destination={destination}
      cities={cities}
      duration={duration}
      landmarks={landmarks}
      placesByCity={placesByCity}
      tourName={tourName}
    />
  );
}

export function DynamicGallery() {
  return <GalleryGrid />;
}

export function DynamicContactForm() {
  return <ContactForm />;
}

export function DynamicItineraryBuilder() {
  return <ItineraryBuilder />;
}

export function DynamicToursCatalog() {
  return <ToursCatalog />;
}
