"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { queueCityGate } from "./CityGate";
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
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  const enter = () => {
    if (transitioning) return;
    setTransitioning(true);
    queueCityGate({ slug: destination.slug, name: destination.name, image: destination.image });
    router.push(`/destinations/${destination.slug}`);
  };

  useLayoutEffect(() => {
    const description = descriptionRef.current;
    if (!description || expanded) return;

    const measure = () => {
      setOverflowing(description.scrollHeight > description.clientHeight + 1);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(description);
    return () => observer.disconnect();
  }, [destination.description, expanded]);

  return (
    <motion.article
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex w-full flex-col justify-end overflow-hidden border border-morocco-saffron/10 bg-morocco-surface text-left transition-all duration-300 hover:border-morocco-saffron/30 hover:shadow-gold ${
        expanded ? "min-h-[32rem]" : "aspect-[4/5]"
      }`}
    >
      <Image
        src={destination.image}
        alt={`${destination.name}, Morocco`}
        fill
        loading="eager"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 ${
          expanded
            ? "bg-gradient-to-t from-morocco-dark via-morocco-dark/85 to-morocco-dark/35"
            : "bg-gradient-to-t from-morocco-dark via-morocco-dark/25 to-transparent"
        }`}
      />
      <button
        type="button"
        onClick={enter}
        disabled={transitioning}
        className="absolute inset-0 z-10"
        aria-label={`Explore ${destination.name}`}
      />
      <GateMark variant={destination.gate} className="pointer-events-none absolute right-3 top-5 z-20 h-40 text-morocco-sand opacity-30 transition-all duration-300 group-hover:opacity-70" />
      <div className="pointer-events-none relative z-20 p-7 sm:p-9">
        <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-morocco-saffron">{destination.eyebrow}</p>
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-serif text-4xl text-morocco-sand sm:text-5xl">{destination.name}</h3>
          <ArrowUpRight className="mb-2 text-morocco-saffron transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p
          ref={descriptionRef}
          className={`mt-3 max-w-sm text-sm leading-6 text-morocco-sand/75 ${expanded ? "" : "line-clamp-3"}`}
        >
          {destination.description}
        </p>
        {(overflowing || expanded) && (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="pointer-events-auto mt-3 text-[10px] uppercase tracking-[0.28em] text-morocco-saffron transition-colors duration-300 hover:text-morocco-sand"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </motion.article>
  );
}
