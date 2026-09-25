"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:8787" : "https://moroccomiles.yaalouch77.workers.dev";
const casablancaDate = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Casablanca" }).format(new Date());

const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  preferredDate: z
    .string()
    .min(1, "Choose a preferred date")
    .refine((value) => value >= casablancaDate(), "Please choose today or a later date"),
  travelerCount: z.coerce.number().int().min(1, "At least one traveler").max(90, "For groups larger than 90, tell us in your message"),
  tourType: z.string().min(1, "Choose a tour style"),
  message: z.preprocess((value) => (typeof value === "string" ? value : ""), z.string().max(4000))
});

type BookingValues = z.infer<typeof bookingSchema>;

export type DurationMetrics = {
  nights?: number;
  days?: number;
  stops?: number;
};

export type PlacesByCity = {
  city: string;
  places: string[];
};

export type BookingFormProps = {
  destination?: string;
  cities?: string[];
  duration?: DurationMetrics;
  landmarks?: string[];
  placesByCity?: PlacesByCity[];
  tourName?: string;
};

type TourDurationPayload = {
  nights: number | null;
  days: number | null;
  stops: number;
  preferredDate: string;
  tourType: string;
  travelerCount: number;
  tourName: string | null;
};

export default function BookingForm({ destination, cities, duration, landmarks, placesByCity, tourName }: BookingFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      travelerCount: 2,
      tourType: "private",
      message: ""
    }
  });

  const minDate = casablancaDate();
  const resolvedCities = cities && cities.length > 0 ? cities : destination ? [destination] : tourName ? [tourName] : ["Custom Morocco itinerary"];
  const resolvedLandmarks = landmarks ?? [];
  const resolvedPlacesByCity =
    placesByCity && placesByCity.length > 0 ? placesByCity : [{ city: tourName ?? resolvedCities.join(" → "), places: resolvedLandmarks }];
  const travelPath = tourName ?? resolvedCities.join(" → ");
  const nights = duration?.nights;
  const days = duration?.days ?? (typeof nights === "number" ? nights + 1 : undefined);

  const submitPassage = async (values: BookingValues) => {
    const fullName = values.fullName;
    const email = values.email;
    const chosenCities = resolvedCities;
    const selectedLandmarks = resolvedLandmarks;
    const customMessage = values.message?.trim() ?? "";
    const tourDuration: TourDurationPayload = {
      nights: nights ?? null,
      days: days ?? null,
      stops: duration?.stops ?? resolvedCities.length,
      preferredDate: values.preferredDate,
      tourType: values.tourType,
      travelerCount: values.travelerCount,
      tourName: tourName ?? null
    };

    setIsLoading(true);
    setIsError(false);
    setErrorMessage(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          chosenCities,
          tourDuration,
          selectedLandmarks,
          placesByCity: resolvedPlacesByCity,
          customMessage
        })
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        throw new Error(payload?.error || "Unable to register this passage.");
      }

      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error instanceof Error ? error.message : "Unable to register this passage.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void handleSubmit(submitPassage)(event);
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-80 items-center justify-center">
        <div className="rounded-sm border border-morocco-mint bg-morocco-canvas p-6 text-center text-morocco-dark">
          <span className="mb-6 grid size-14 place-items-center rounded-full border border-morocco-mint bg-morocco-sand text-morocco-mint">
            <Check />
          </span>
          <h3 className="font-serif text-3xl">Passage Registered. Custom itinerary dispatched straight to your inbox.</h3>
        </div>
      </div>
    );
  }

  const fieldClassName =
    "w-full border-b border-morocco-sand/20 bg-transparent px-0 py-3 text-morocco-sand outline-none transition-all duration-300 placeholder:text-morocco-sand/30 focus:border-morocco-saffron disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={isLoading}
      className={`grid gap-6 border border-morocco-saffron/15 bg-morocco-surface/70 p-6 shadow-2xl sm:grid-cols-2 sm:p-10 ${
        isLoading ? "pointer-events-none opacity-70" : ""
      }`}
    >
      <div className="sm:col-span-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-morocco-saffron">{tourName ? "Selected tour" : "Your Moroccan path"}</p>
        <p className="mt-2 font-serif text-2xl text-morocco-sand">{travelPath}</p>
        {(nights || days) && (
          <p className="mt-2 text-sm text-morocco-sand/60">
            {nights ? `${nights} night${nights === 1 ? "" : "s"}` : null}
            {nights && days ? " · " : null}
            {days ? `${days} days` : null}
            {resolvedLandmarks.length > 0 ? ` · ${resolvedLandmarks.length} landmark tokens` : null}
          </p>
        )}
      </div>
      {tourName && (
        <label className="sm:col-span-2">
          <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Tour name</span>
          <input value={tourName} readOnly disabled={isLoading} className={fieldClassName} />
        </label>
      )}
      <label className="sm:col-span-2">
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Full name</span>
        <input {...register("fullName")} type="text" placeholder="Your name" disabled={isLoading} className={fieldClassName} />
        {errors.fullName && <span className="mt-2 block text-xs text-morocco-saffron">{errors.fullName.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Email</span>
        <input {...register("email")} type="email" placeholder="you@example.com" disabled={isLoading} className={fieldClassName} />
        {errors.email && <span className="mt-2 block text-xs text-morocco-saffron">{errors.email.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Number of travelers</span>
        <input {...register("travelerCount")} type="number" min={1} max={90} disabled={isLoading} className={fieldClassName} />
        {errors.travelerCount && <span className="mt-2 block text-xs text-morocco-saffron">{errors.travelerCount.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Preferred date</span>
        <input {...register("preferredDate")} type="date" min={minDate} disabled={isLoading} className={fieldClassName} />
        {errors.preferredDate && <span className="mt-2 block text-xs text-morocco-saffron">{errors.preferredDate.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Tour type</span>
        <select
          {...register("tourType")}
          disabled={isLoading}
          className="w-full border-b border-morocco-sand/20 bg-morocco-surface py-3 text-morocco-sand outline-none transition-all duration-300 focus:border-morocco-saffron disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>
            Select your pace
          </option>
          <option value="private">Private signature tour</option>
          <option value="family">Family journey</option>
          <option value="honeymoon">Honeymoon escape</option>
          <option value="daily">Daily experience</option>
        </select>
        {errors.tourType && <span className="mt-2 block text-xs text-morocco-saffron">{errors.tourType.message}</span>}
      </label>
      <label className="sm:col-span-2">
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Message (optional)</span>
        <textarea
          {...register("message", { required: false })}
          rows={5}
          placeholder="Tell us what would make this journey unforgettable..."
          disabled={isLoading}
          className="w-full resize-none border-b border-morocco-sand/20 bg-transparent py-3 text-morocco-sand outline-none transition-all duration-300 placeholder:text-morocco-sand/30 focus:border-morocco-saffron disabled:cursor-not-allowed disabled:opacity-50"
        />
        {errors.message && <span className="mt-2 block text-xs text-morocco-saffron">{errors.message.message}</span>}
      </label>
      {isError && (
        <p className="border border-morocco-saffron/30 bg-morocco-saffron/10 px-4 py-3 text-sm text-morocco-saffron sm:col-span-2">
          {errorMessage ?? "The passage could not be registered. Please retry in a moment."}
        </p>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="group mt-2 inline-flex items-center justify-center gap-3 bg-morocco-saffron px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-morocco-dark transition-all duration-300 hover:brightness-110 hover:shadow-gold disabled:opacity-60 sm:col-span-2"
      >
        {isLoading ? "Processing Passage..." : tourName ? "Request this tour" : "Design my journey"}{" "}
        <Send size={15} className={`transition-all duration-300 ${isLoading ? "animate-pulse" : "group-hover:translate-x-1"}`} />
      </button>
    </form>
  );
}
