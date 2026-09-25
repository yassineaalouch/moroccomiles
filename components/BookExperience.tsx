"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BookView } from "@/components/BookView";
import { getTour } from "@/lib/tours";

export function BookExperience() {
  const tourId = useSearchParams().get("tour") ?? "";
  const tour = getTour(tourId);

  useEffect(() => {
    document.title = tour
      ? `Book ${tour.title} | MoroccoMiles`
      : "Book a Private Morocco Tour | MoroccoMiles";
  }, [tour]);

  return <BookView tourId={tourId} />;
}
