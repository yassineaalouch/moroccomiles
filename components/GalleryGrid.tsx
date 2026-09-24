"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryPhotographs } from "@/lib/gallery";

const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;

const mosaic = [
  "aspect-[3/4] sm:col-span-2 sm:aspect-[16/10] lg:col-span-8 lg:row-span-4 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-4 lg:row-span-2 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-4 lg:row-span-2 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-5 lg:row-span-4 lg:aspect-auto",
  "aspect-[5/4] lg:col-span-7 lg:row-span-2 lg:aspect-auto",
  "aspect-[5/4] lg:col-span-7 lg:row-span-2 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-7 lg:row-span-3 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-5 lg:row-span-3 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-4 lg:row-span-3 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-4 lg:row-span-3 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-4 lg:row-span-3 lg:aspect-auto"
] as const;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const total = galleryPhotographs.length;
  const current = active !== null ? galleryPhotographs[active] : null;

  const close = useCallback(() => setActive(null), []);

  const go = useCallback(
    (direction: -1 | 1) => {
      setActive((index) => {
        if (index === null) return index;
        return (index + direction + total) % total;
      });
    },
    [total]
  );

  useEffect(() => {
    if (active === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, go]);

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[140px] lg:gap-5 xl:auto-rows-[160px] 2xl:auto-rows-[180px]">
        {galleryPhotographs.map((item, index) => (
          <motion.figure
            key={item.filename}
            className={`group relative overflow-hidden border border-morocco-saffron/10 bg-morocco-surface transition-colors duration-500 hover:border-morocco-saffron/35 ${mosaic[index] ?? mosaic[mosaic.length - 1]}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.7, delay: Math.min(index, 6) * 0.06, ease: LUXURY_EASE }}
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-10px] focus-visible:outline-morocco-saffron"
              aria-label={`View ${item.title}, photograph ${index + 1} of ${total}`}
            />
            <Image
              src={`/images/gallery/${item.filename}.webp`}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
              className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-morocco-dark/80 via-morocco-dark/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-3 border border-morocco-sand/0 transition-all duration-500 group-hover:inset-4 group-hover:border-morocco-saffron/55 sm:inset-4" />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div className="min-w-0">
                <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-morocco-saffron">
                  {pad(index + 1)} — {item.detail}
                </p>
                <h2 className="font-serif text-2xl leading-none text-morocco-sand sm:text-3xl lg:text-[2rem]">
                  {item.title}
                </h2>
              </div>
              <span className="hidden shrink-0 text-[9px] uppercase tracking-[0.32em] text-morocco-sand/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:inline">
                View
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[80] flex items-center justify-center bg-morocco-dark/94 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: LUXURY_EASE }}
            role="dialog"
            aria-modal="true"
            aria-label={`${current.title}. Photograph ${active + 1} of ${total}`}
            onClick={close}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const distance = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
              if (Math.abs(distance) > 56) go(distance > 0 ? -1 : 1);
              touchStartX.current = null;
            }}
          >
            <div className="moroccan-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

            <button
              type="button"
              onClick={close}
              aria-label="Close photograph"
              className="absolute right-4 top-4 z-10 grid size-11 place-items-center border border-morocco-sand/20 text-morocco-sand transition-colors duration-300 hover:border-morocco-saffron hover:text-morocco-saffron sm:right-8 sm:top-8"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                go(-1);
              }}
              aria-label="Previous photograph"
              className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-morocco-sand/20 text-morocco-sand transition-colors duration-300 hover:border-morocco-saffron hover:text-morocco-saffron sm:left-8"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                go(1);
              }}
              aria-label="Next photograph"
              className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-morocco-sand/20 text-morocco-sand transition-colors duration-300 hover:border-morocco-saffron hover:text-morocco-saffron sm:right-8"
            >
              <ChevronRight size={18} />
            </button>

            <motion.div
              key={current.filename}
              className="relative flex max-h-[90vh] w-full max-w-6xl flex-col items-center px-12 sm:px-16"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[58vh] w-full border border-morocco-saffron/25 bg-morocco-dark shadow-gold sm:h-[68vh]">
                <Image
                  src={`/images/gallery/${current.filename}.webp`}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-5 flex w-full max-w-xl flex-col items-center px-2 text-center sm:mt-7">
                <p className="text-[9px] uppercase tracking-[0.4em] text-morocco-saffron">
                  {pad(active + 1)} / {pad(total)} · {current.detail}
                </p>
                <h3 className="mt-2 font-serif text-3xl text-morocco-sand sm:text-5xl">{current.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
