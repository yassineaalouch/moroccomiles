"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  preferredDate: z.string().min(1, "Choose a preferred date"),
  tourType: z.string().min(1, "Choose a tour style"),
  message: z.string().min(10, "Tell us a little more about your journey")
});

type BookingValues = z.infer<typeof bookingSchema>;

export default function BookingForm({ destination }: { destination: string }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<BookingValues>({ resolver: zodResolver(bookingSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-80 flex-col items-center justify-center border border-morocco-mint/40 bg-morocco-mint/20 p-10 text-center">
        <span className="mb-6 grid size-14 place-items-center rounded-full border border-morocco-mint bg-morocco-sand text-morocco-mint"><Check /></span>
        <h3 className="font-serif text-3xl">Your journey has begun.</h3>
        <p className="mt-3 max-w-md text-morocco-sand/60">A MoroccoMiles travel designer will reply within one business day.</p>
      </div>
    );
  }

  const fields = [
    { name: "fullName" as const, label: "Full name", type: "text", placeholder: "Your name" },
    { name: "email" as const, label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "preferredDate" as const, label: "Preferred date", type: "date", placeholder: "" }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 border border-morocco-saffron/15 bg-morocco-surface/70 p-6 shadow-2xl sm:grid-cols-2 sm:p-10">
      <input type="hidden" value={destination} />
      {fields.map((field) => (
        <label key={field.name} className={field.name === "fullName" ? "sm:col-span-2" : ""}>
          <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">{field.label}</span>
          <input {...register(field.name)} type={field.type} placeholder={field.placeholder} className="w-full border-b border-morocco-sand/20 bg-transparent px-0 py-3 text-morocco-sand outline-none transition-all duration-300 placeholder:text-morocco-sand/30 focus:border-morocco-saffron" />
          {errors[field.name] && <span className="mt-2 block text-xs text-morocco-saffron">{errors[field.name]?.message}</span>}
        </label>
      ))}
      <label>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Tour type</span>
        <select {...register("tourType")} defaultValue="" className="w-full border-b border-morocco-sand/20 bg-morocco-surface py-3 text-morocco-sand outline-none transition-all duration-300 focus:border-morocco-saffron">
          <option value="" disabled>Select your pace</option>
          <option value="private">Private signature tour</option>
          <option value="family">Family journey</option>
          <option value="honeymoon">Honeymoon escape</option>
          <option value="daily">Daily experience</option>
        </select>
        {errors.tourType && <span className="mt-2 block text-xs text-morocco-saffron">{errors.tourType.message}</span>}
      </label>
      <label className="sm:col-span-2">
        <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-morocco-sand/60">Message</span>
        <textarea {...register("message")} rows={5} placeholder="Tell us what would make this journey unforgettable..." className="w-full resize-none border-b border-morocco-sand/20 bg-transparent py-3 text-morocco-sand outline-none transition-all duration-300 placeholder:text-morocco-sand/30 focus:border-morocco-saffron" />
        {errors.message && <span className="mt-2 block text-xs text-morocco-saffron">{errors.message.message}</span>}
      </label>
      <button disabled={isSubmitting} className="group mt-2 inline-flex items-center justify-center gap-3 bg-morocco-saffron px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-morocco-dark transition-all duration-300 hover:brightness-110 hover:shadow-gold disabled:opacity-60 sm:col-span-2">
        {isSubmitting ? "Sending" : "Design my journey"} <Send size={15} className="transition-all duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
