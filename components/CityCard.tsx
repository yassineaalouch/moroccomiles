"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GateMark } from "./GateMark";

export type HomeCityCard = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  gate: "arch" | "blue" | "tower" | "keyhole";
};

export function CityCard({ destination, index }: { destination: HomeCityCard; index: number }) {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  const enter = () => {
    if (transitioning) return;
    setTransitioning(true);
    sessionStorage.setItem(`moroccoMilesCityTransition:${destination.slug}`, "pending");
    router.push(`/destinations/${destination.slug}`);
  };

  return (
    <motion.button
        type="button"
        onClick={enter}
        disabled={transitioning}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ delay: index * 0.08 }}
        className="group relative aspect-[4/5] w-full overflow-hidden border border-morocco-saffron/10 bg-morocco-surface text-left transition-all duration-300 hover:border-morocco-saffron/30 hover:shadow-gold"
        aria-label={`Explore ${destination.name}`}
      >
        <Image src={destination.image} alt={`${destination.name}, Morocco`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-all duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-morocco-dark via-morocco-dark/25 to-transparent" />
        <GateMark variant={destination.gate} className="absolute right-3 top-5 h-40 text-morocco-sand opacity-30 transition-all duration-300 group-hover:opacity-70" />
        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
          <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-morocco-saffron">{destination.eyebrow}</p>
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-serif text-4xl text-morocco-sand sm:text-5xl">{destination.name}</h3>
            <ArrowUpRight className="mb-2 text-morocco-saffron transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-morocco-sand/75">{destination.description}</p>
        </div>
    </motion.button>
  );
}
