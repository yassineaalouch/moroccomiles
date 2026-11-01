"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Send } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type FormEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getRentalCar, rentalCars, rentalCities } from "@/lib/car-rental";

const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:8787" : "https://moroccomiles.yaalouch77.workers.dev";

const casablancaDate = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Casablanca" }).format(new Date());

const rentalDays = (pickupDate: string, returnDate: string) => {
  const pickup = Date.parse(`${pickupDate}T12:00:00Z`);
  const dropoff = Date.parse(`${returnDate}T12:00:00Z`);
  if (!Number.isFinite(pickup) || !Number.isFinite(dropoff)) return 1;
  return Math.max(1, Math.round((dropoff - pickup) / 86_400_000) || 1);
};

const phonePattern = /^\+[1-9]\d{0,2}(?:[\s.-]?\d){6,14}$/;

const rentalSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name"),
    email: z.string().email("Please enter a valid email"),
    phone: z
      .string()
      .trim()
      .min(1, "A phone number is required")
      .regex(phonePattern, "Start with your country code, for example +212, then your number."),
    pickupCity: z.string().min(1, "Choose a pickup city"),
    dropoffCity: z.string().min(1, "Choose a return city"),
    pickupDate: z
      .string()
      .min(1, "Choose a pickup date")
      .refine((value) => value >= casablancaDate(), "Please choose today or a later date"),
    returnDate: z.string().min(1, "Choose a return date"),
    vehicle: z.string().min(1, "Choose a vehicle"),
    driveStyle: z.enum(["self-drive", "chauffeur"]),
    message: z.string().max(2000, "Please keep the note under 2000 characters"),
    acceptedTerms: z.boolean().refine((value) => value, {
      message: "Please confirm that you have read the rental conditions."
    })
  })
  .superRefine((values, ctx) => {
    if (values.returnDate && values.pickupDate && values.returnDate < values.pickupDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["returnDate"],
        message: "Return must be on or after pickup."
      });
    }
  });

type RentalValues = z.infer<typeof rentalSchema>;

const driveLabel = {
  "self-drive": "Self-drive",
  chauffeur: "With chauffeur"
} as const;

export default function CarRentalForm() {
  const searchParams = useSearchParams();
  const requested = getRentalCar(searchParams.get("car") ?? "");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<RentalValues>({
    resolver: zodResolver(rentalSchema),
    defaultValues: {
      phone: "",
      pickupCity: "Marrakech Menara Airport",
      dropoffCity: "Marrakech",
      vehicle: requested?.name ?? "Dacia Sandero Streetway",
      driveStyle: "self-drive",
      message: "",
      acceptedTerms: false
    }
  });

  useEffect(() => {
    if (requested) setValue("vehicle", requested.name);
  }, [requested, setValue]);

  const minDate = casablancaDate();

  const submitRental = async (values: RentalValues) => {
    const days = rentalDays(values.pickupDate, values.returnDate);
    const cities = values.pickupCity === values.dropoffCity ? [values.pickupCity] : [values.pickupCity, values.dropoffCity];
    const style = driveLabel[values.driveStyle];
    const phone = values.phone.trim();
    const note = values.message.trim();
    const chosen = rentalCars.find((car) => car.name === values.vehicle);
    const customMessage = [
      "Car rental request",
      `Vehicle: ${values.vehicle}`,
      chosen ? `Indicative rate: ${chosen.priceEur} EUR / ${chosen.priceMad} MAD per day` : "",
      `Style: ${style}`,
      `Pickup: ${values.pickupCity} on ${values.pickupDate}`,
      `Return: ${values.dropoffCity} on ${values.returnDate}`,
      `Duration: ${days} day${days === 1 ? "" : "s"}`,
      `Phone: ${phone}`,
      "Rental conditions: accepted",
      note ? `Notes: ${note}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    setIsLoading(true);
    setIsError(false);
    setErrorMessage(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          chosenCities: cities,
          tourDuration: {
            nights: Math.max(days - 1, 0),
            days,
            stops: cities.length,
            preferredDate: values.pickupDate,
            tourType: values.driveStyle,
            travelerCount: 2,
            tourName: `Car rental · ${values.vehicle}`
          },
          selectedLandmarks: [values.vehicle, style],
          placesByCity: cities.map((city, index) => ({
            city,
            places: [index === 0 ? "Vehicle pickup" : "Vehicle return"]
          })),
          customMessage
        })
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        throw new Error(payload?.error || "Unable to register this rental request.");
      }

      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
      const detail = error instanceof Error ? error.message : "";
      setErrorMessage(detail && detail !== "Failed to fetch" ? detail : "Unable to register this rental request. Please retry in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void handleSubmit(submitRental)(event);
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-80 items-center justify-center border border-morocco-saffron/15 bg-morocco-surface p-8 text-center text-morocco-sand">
        <div>
          <span className="mb-6 grid size-14 place-items-center rounded-full border border-morocco-mint bg-morocco-sand text-morocco-mint">
            <Check />
          </span>
          <h3 className="font-serif text-4xl">Request received.</h3>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-morocco-sand/65">
            A MoroccoMiles confirmation agent will confirm the car, the dates and any extra equipment within one business day.
          </p>
        </div>
      </div>
    );
  }

  const fieldClassName =
    "w-full border-b border-morocco-sand/20 bg-transparent py-3 text-morocco-sand outline-none transition-colors duration-300 placeholder:text-morocco-sand/30 focus:border-morocco-saffron disabled:cursor-not-allowed disabled:opacity-50 [color-scheme:dark]";
  const selectClassName =
    "w-full border-b border-morocco-sand/20 bg-morocco-surface py-3 text-morocco-sand outline-none transition-colors duration-300 focus:border-morocco-saffron disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={isLoading}
      className={`grid gap-6 border border-morocco-saffron/15 bg-morocco-surface p-6 text-morocco-sand sm:grid-cols-2 sm:p-10 ${
        isLoading ? "pointer-events-none opacity-70" : ""
      }`}
    >
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
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Phone with country code</span>
        <input
          {...register("phone")}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+212 600 000 000"
          disabled={isLoading}
          className={fieldClassName}
        />
        <span className="mt-2 block text-xs leading-relaxed text-morocco-sand/45">Required. Begin with your country code, for example +212, +33 or +1.</span>
        {errors.phone && <span className="mt-2 block text-xs text-morocco-saffron">{errors.phone.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Pickup</span>
        <select {...register("pickupCity")} disabled={isLoading} className={selectClassName}>
          {rentalCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.pickupCity && <span className="mt-2 block text-xs text-morocco-saffron">{errors.pickupCity.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Return</span>
        <select {...register("dropoffCity")} disabled={isLoading} className={selectClassName}>
          {rentalCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.dropoffCity && <span className="mt-2 block text-xs text-morocco-saffron">{errors.dropoffCity.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Pickup date</span>
        <input {...register("pickupDate")} type="date" min={minDate} disabled={isLoading} className={fieldClassName} />
        {errors.pickupDate && <span className="mt-2 block text-xs text-morocco-saffron">{errors.pickupDate.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Return date</span>
        <input {...register("returnDate")} type="date" min={minDate} disabled={isLoading} className={fieldClassName} />
        {errors.returnDate && <span className="mt-2 block text-xs text-morocco-saffron">{errors.returnDate.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Vehicle</span>
        <select {...register("vehicle")} disabled={isLoading} className={selectClassName}>
          {rentalCars.map((car) => (
            <option key={car.id} value={car.name}>
              {car.name}
            </option>
          ))}
        </select>
        {errors.vehicle && <span className="mt-2 block text-xs text-morocco-saffron">{errors.vehicle.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">How you travel</span>
        <select {...register("driveStyle")} disabled={isLoading} className={selectClassName}>
          <option value="self-drive">Self-drive</option>
          <option value="chauffeur">With chauffeur</option>
        </select>
        {errors.driveStyle && <span className="mt-2 block text-xs text-morocco-saffron">{errors.driveStyle.message}</span>}
      </label>
      <p className="border border-morocco-saffron/25 bg-morocco-saffron/10 px-4 py-4 text-sm leading-relaxed text-morocco-sand/80 sm:col-span-2">
        Child seats, booster seats and a breakdown kit are not added on this form. Any extra equipment is discussed and priced with our confirmation agent when the rental is confirmed.
      </p>
      <label className="sm:col-span-2">
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Notes</span>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Automatic gearbox, a dawn pickup at the riad, a second driver…"
          disabled={isLoading}
          className="w-full resize-none border-b border-morocco-sand/20 bg-transparent py-3 text-morocco-sand outline-none transition-colors duration-300 placeholder:text-morocco-sand/30 focus:border-morocco-saffron disabled:cursor-not-allowed disabled:opacity-50"
        />
        {errors.message && <span className="mt-2 block text-xs text-morocco-saffron">{errors.message.message}</span>}
      </label>
      <label className="flex items-start gap-3 sm:col-span-2">
        <input
          {...register("acceptedTerms")}
          type="checkbox"
          disabled={isLoading}
          className="mt-1 size-4 accent-morocco-saffron"
        />
        <span className="text-sm leading-relaxed text-morocco-sand/75">
          I have read the{" "}
          <Link href="/car-rental/terms" target="_blank" className="text-morocco-saffron underline-offset-4 hover:underline">
            rental conditions
          </Link>{" "}
          and I accept them, including the excess hold, the required documents and GPS tracking of the vehicle.
        </span>
      </label>
      {errors.acceptedTerms && <span className="text-xs text-morocco-saffron sm:col-span-2">{errors.acceptedTerms.message}</span>}
      {isError && (
        <p className="border border-morocco-saffron/30 bg-morocco-saffron/10 px-4 py-3 text-sm text-morocco-saffron sm:col-span-2">
          {errorMessage ?? "The request could not be sent. Please retry in a moment."}
        </p>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="group mt-2 inline-flex items-center justify-center gap-3 bg-morocco-saffron px-7 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-morocco-dark transition-all duration-300 hover:brightness-110 hover:shadow-gold disabled:opacity-60 sm:col-span-2"
      >
        {isLoading ? "Sending" : "Request this car"}
        <Send size={15} className={`transition-transform duration-300 ${isLoading ? "animate-pulse" : "group-hover:translate-x-1"}`} />
      </button>
    </form>
  );
}
