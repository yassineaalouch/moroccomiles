import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin } from "lucide-react";
import { DynamicContactForm } from "@/components/DynamicIslands";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Speak with a MoroccoMiles travel designer and begin planning your private journey through Morocco.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main className="bg-morocco-sand text-stone-800">
      <section className="relative min-h-[64vh] bg-morocco-dark">
        <Image
          src="https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=2200&q=90"
          alt="Marrakech at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-morocco-dark/90 via-morocco-dark/65 to-morocco-dark/30" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[64vh] max-w-[1500px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">Start a conversation</p>
            <h1 className="font-serif text-7xl leading-[0.88] text-morocco-sand sm:text-9xl">Your journey<br /><em className="font-normal text-morocco-saffron">starts here.</em></h1>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <aside>
            <p className="text-[10px] uppercase tracking-[0.4em] text-morocco-mint">Morocco-based</p>
            <h2 className="mt-5 font-serif text-5xl leading-tight">Tell us where your imagination is taking you.</h2>
            <p className="mt-7 max-w-md font-sans text-sm leading-relaxed tracking-wide text-stone-600">Whether you have exact dates or only the beginning of an idea, our local designers will help shape the road ahead.</p>
            <div className="mt-12 space-y-7 border-t border-morocco-saffron/25 pt-9">
              <a href="mailto:journeys@moroccomiles.com" className="group flex items-start gap-4 transition-colors duration-300 hover:text-morocco-saffron">
                <Mail className="mt-0.5 text-morocco-saffron" size={19} strokeWidth={1.5} />
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-500">Email</span>
                  <span className="mt-1 block text-sm">journeys@moroccomiles.com</span>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 text-morocco-saffron" size={19} strokeWidth={1.5} />
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-500">Our home</span>
                  <span className="mt-1 block text-sm">Marrakech, Morocco</span>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 text-morocco-saffron" size={19} strokeWidth={1.5} />
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-500">Reply time</span>
                  <span className="mt-1 block text-sm">Within one business day</span>
                </span>
              </div>
            </div>
          </aside>
          <DynamicContactForm />
        </div>
      </section>
    </main>
  );
}
