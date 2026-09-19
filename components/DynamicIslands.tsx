"use client";

import dynamic from "next/dynamic";

const IntroOverlay = dynamic(() => import("./IntroOverlay"), { ssr: false });
const BookingForm = dynamic(() => import("./BookingForm"), {
  ssr: false,
  loading: () => <div className="min-h-96 animate-pulse border border-morocco-saffron/10 bg-morocco-surface" />
});
const GalleryGrid = dynamic(() => import("./GalleryGrid"), {
  ssr: false,
  loading: () => <div className="min-h-[80vh] animate-pulse bg-morocco-sand" />
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

export function DynamicBooking({ destination }: { destination: string }) {
  return <BookingForm destination={destination} />;
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
