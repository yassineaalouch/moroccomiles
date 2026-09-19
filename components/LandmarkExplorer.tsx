"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import LandmarkCarousel from "@/components/LandmarkCarousel";
import type { MoroccoLandmark } from "@/data/moroccoData";

const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;

const masonrySpan = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-8",
  "lg:col-span-4"
];

type LandmarkExplorerProps = {
  cityName: string;
  landmarks: MoroccoLandmark[];
};

export default function LandmarkExplorer({ cityName, landmarks }: LandmarkExplorerProps) {
  return (
    <section className="bg-morocco-sand px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-12 max-w-2xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">Visual exploration</p>
          <h2 className="font-serif text-4xl text-morocco-dark sm:text-5xl">
            Landmarks of {cityName}
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {landmarks.map((landmark, index) => (
            <motion.article
              key={landmark.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: LUXURY_EASE }}
              className={`bg-morocco-canvas shadow-sm ${masonrySpan[index % masonrySpan.length]}`}
            >
              <LandmarkCarousel
                images={landmark.images}
                alt={`${landmark.title} in ${cityName}`}
                priority={index === 0}
              />
              <div className="px-6 py-7 sm:px-8 sm:py-8">
                <div className="mb-4 inline-flex items-center gap-2 bg-morocco-sand px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-morocco-saffron">
                  <Clock size={12} strokeWidth={1.75} />
                  Suggested Duration · {landmark.suggestedDuration}
                </div>
                <h3 className="font-serif text-3xl text-morocco-dark">{landmark.title}</h3>
                <p className="mt-1 font-serif text-sm italic text-stone-500">{landmark.localName}</p>
                <p className="mt-4 font-sans text-sm leading-relaxed tracking-wide text-stone-600">
                  {landmark.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
