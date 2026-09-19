"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photographs = [
  {
    title: "Merzouga Sand Dunes",
    detail: "Erg Chebbi · Golden hour",
    image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1800&q=90",
    layout: "md:col-span-7 md:row-span-2"
  },
  {
    title: "Chefchaouen Medina",
    detail: "The Rif · Morning blue",
    image: "https://images.unsplash.com/photo-1553249071-2f0d6a1e9e7d?auto=format&fit=crop&w=1400&q=90",
    layout: "md:col-span-5"
  },
  {
    title: "Fes Madrasa",
    detail: "Fes el-Bali · Sacred geometry",
    image: "https://images.unsplash.com/photo-1604323990536-e5452c0507c1?auto=format&fit=crop&w=1400&q=90",
    layout: "md:col-span-5"
  },
  {
    title: "Marrakech Souks",
    detail: "The medina · Woven color",
    image: "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?auto=format&fit=crop&w=1600&q=90",
    layout: "md:col-span-5 md:row-span-2"
  },
  {
    title: "Riad Light",
    detail: "Marrakech · Inner worlds",
    image: "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?auto=format&fit=crop&w=1600&q=90",
    layout: "md:col-span-7"
  },
  {
    title: "Atlas Passage",
    detail: "High Atlas · The long road",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1600&q=90",
    layout: "md:col-span-7"
  }
];

export default function GalleryGrid() {
  return (
    <div className="grid auto-rows-[280px] gap-4 md:grid-cols-12 md:auto-rows-[300px]">
      {photographs.map((photograph, index) => (
        <motion.figure
          key={photograph.title}
          className={`group relative overflow-hidden bg-morocco-surface ${photograph.layout}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.7, delay: index * 0.06 }}
        >
          <Image
            src={photograph.image}
            alt={photograph.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-morocco-dark/75 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 text-morocco-sand sm:p-8">
            <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-morocco-saffron">{photograph.detail}</p>
            <h2 className="font-serif text-3xl sm:text-4xl">{photograph.title}</h2>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
