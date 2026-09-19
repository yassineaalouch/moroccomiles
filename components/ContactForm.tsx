"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Choose a subject"),
  message: z.string().min(10, "Please tell us a little more")
});

type ContactValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center bg-morocco-surface p-10 text-center text-morocco-sand">
        <span className="mb-7 grid size-16 place-items-center rounded-full bg-morocco-sand text-morocco-mint"><Check /></span>
        <h2 className="font-serif text-4xl">Message received.</h2>
        <p className="mt-4 max-w-md font-sans text-sm leading-relaxed tracking-wide text-morocco-sand/60">A MoroccoMiles travel designer will reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-7 bg-morocco-surface p-7 text-morocco-sand sm:grid-cols-2 sm:p-12">
      <label>
        <span className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-morocco-sand/60">Full name</span>
        <input {...register("name")} className="w-full border-b border-morocco-sand/20 bg-transparent py-3 outline-none transition-colors duration-300 placeholder:text-morocco-sand/25 focus:border-morocco-saffron" placeholder="Your name" />
        {errors.name && <span className="mt-2 block text-xs text-morocco-saffron">{errors.name.message}</span>}
      </label>
      <label>
        <span className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-morocco-sand/60">Email address</span>
        <input {...register("email")} type="email" className="w-full border-b border-morocco-sand/20 bg-transparent py-3 outline-none transition-colors duration-300 placeholder:text-morocco-sand/25 focus:border-morocco-saffron" placeholder="you@example.com" />
        {errors.email && <span className="mt-2 block text-xs text-morocco-saffron">{errors.email.message}</span>}
      </label>
      <label className="sm:col-span-2">
        <span className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-morocco-sand/60">How can we help?</span>
        <select {...register("subject")} defaultValue="" className="w-full border-b border-morocco-sand/20 bg-morocco-surface py-3 outline-none transition-colors duration-300 focus:border-morocco-saffron">
          <option value="" disabled>Select a subject</option>
          <option value="journey">Plan a private journey</option>
          <option value="existing">Discuss an existing booking</option>
          <option value="partnership">Local partnership</option>
          <option value="press">Press and media</option>
          <option value="other">Something else</option>
        </select>
        {errors.subject && <span className="mt-2 block text-xs text-morocco-saffron">{errors.subject.message}</span>}
      </label>
      <label className="sm:col-span-2">
        <span className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-morocco-sand/60">Your message</span>
        <textarea {...register("message")} rows={6} className="w-full resize-none border-b border-morocco-sand/20 bg-transparent py-3 outline-none transition-colors duration-300 placeholder:text-morocco-sand/25 focus:border-morocco-saffron" placeholder="Tell us what is on your mind..." />
        {errors.message && <span className="mt-2 block text-xs text-morocco-saffron">{errors.message.message}</span>}
      </label>
      <button disabled={isSubmitting} className="group inline-flex items-center justify-center gap-3 bg-morocco-saffron px-7 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-morocco-dark transition-all duration-300 hover:brightness-110 hover:shadow-gold disabled:opacity-60 sm:col-span-2">
        {isSubmitting ? "Sending" : "Send message"} <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
