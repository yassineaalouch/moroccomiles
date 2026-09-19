"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;

type LandmarkCarouselProps = {
  images: string[];
  alt: string;
  priority?: boolean;
};

export default function LandmarkCarousel({ images, alt, priority = false }: LandmarkCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const current = images[index] ?? images[0];

  const go = useCallback(
    (direction: -1 | 1) => {
      if (total < 2) return;
      setIndex((currentIndex) => (currentIndex + direction + total) % total);
    },
    [total]
  );

  if (!current) return null;

  return (
    <div className="group relative aspect-[4/3] overflow-hidden bg-morocco-surface">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: LUXURY_EASE }}
          className="absolute inset-0"
        >
          <Image
            src={current}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photograph"
            className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center bg-morocco-sand/90 text-morocco-dark opacity-100 transition-opacity duration-300 hover:bg-morocco-sand md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photograph"
            className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center bg-morocco-sand/90 text-morocco-dark opacity-100 transition-opacity duration-300 hover:bg-morocco-sand md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {images.map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                aria-label={`View photograph ${imageIndex + 1}`}
                onClick={() => setIndex(imageIndex)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  imageIndex === index ? "w-6 bg-morocco-saffron" : "w-1.5 bg-morocco-sand/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
