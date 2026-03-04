"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitleWithArrows } from "./SectionTitleWithArrows";
import { AGENCIES } from "@/components/agences-page/data";

// Optional logo paths when assets exist under public/logos/
const AGENCY_LOGO: Record<string, string> = {
  "atlascar-casablanca": "/logos/atlascar.png",
  "maghreb-rent-marrakech": "/logos/maghreb-rent.png",
  "desertdrive-agadir": "/logos/desertdrive.png",
  "medina-cars-marrakech": "/logos/medina-cars.png",
  "airport-mobility-casablanca": "/logos/airport-mobility.png",
  "rif-auto-tanger": "/logos/rif-auto.png",
};

const PARTNER_AGENCIES = AGENCIES.filter((a) => a.featured).slice(0, 8);
const TOTAL = PARTNER_AGENCIES.length;

const CARD_WIDTH = 320;
const CARD_WIDTH_SM = 280;


function AgencyCard({
  agency,
  isCenter,
  position,
}: {
  agency: (typeof PARTNER_AGENCIES)[0];
  isCenter: boolean;
  position: "prev" | "center" | "next";
}) {
  const logoPath = AGENCY_LOGO[agency.slug];
  const href = `/agences/${agency.slug}`;

  return (
// Dans le composant AgencyCard
    <Link
      href={href}
      className={`relative flex shrink-0 flex-col overflow-hidden rounded-3xl border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isCenter
          ? "z-20 border-[#D4AF37]/40 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          : "z-10 border-zinc-200 bg-white shadow-sm"
      }`}
      style={{
        width: isCenter ? CARD_WIDTH : CARD_WIDTH_SM,
        // La magie de la 3D est ici :
        transform: isCenter
          ? "perspective(1200px) rotateY(0deg) translateZ(0px)"
          : position === "prev"
          ? "perspective(1200px) rotateY(35deg) translateZ(-150px) scale(0.9)"
          : "perspective(1200px) rotateY(-35deg) translateZ(-150px) scale(0.9)",
      }}
    >
      {/* Background Decoratif Subtil */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#D4AF37]/5 blur-3xl" />

      <div className="flex flex-1 flex-col p-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-zinc-100 transition-transform duration-500 group-hover:scale-105">
            {logoPath ? (
              <Image src={logoPath} alt="" width={64} height={64} className="object-contain p-2" />
            ) : (
              <span className="text-xl font-serif font-bold text-amber-600">{agency.logoInitials}</span>
            )}
          </div>
          
          <div className="min-w-0">
            <h3 className="text-lg font-medium tracking-tight text-zinc-900">
              {agency.name}
            </h3>
            <div className="mt-1 flex items-center justify-center gap-1 text-[10px] uppercase tracking-widest text-zinc-400">
              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
              {agency.primaryCity}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-zinc-50 pt-5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-tighter text-zinc-400">Note</span>
            <span className="text-sm font-semibold text-zinc-800">{agency.rating.toFixed(1)} <span className="text-[10px] text-zinc-400">/ 5</span></span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-tighter text-zinc-400">Flotte</span>
            <span className="text-sm font-semibold text-zinc-800">{agency.carsCount} <span className="text-[10px] text-zinc-400">véhicules</span></span>
          </div>
        </div>
        
        {isCenter && (
           <div className="mt-6 flex justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 border-b border-[#D4AF37]/30 pb-1">
                Découvrir l'univers
              </span>
           </div>
        )}
      </div>
    </Link>
  );
}


export function PartnerAgenciesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = useCallback(() => setCurrentIndex((i) => (i - 1 + TOTAL) % TOTAL), []);
  const goNext = useCallback(() => setCurrentIndex((i) => (i + 1) % TOTAL), []);

  const prevIndex = (currentIndex - 1 + TOTAL) % TOTAL;
  const nextIndex = (currentIndex + 1) % TOTAL;
  const visibleIndices = [prevIndex, currentIndex, nextIndex];

  return (
    <section id="agences" className="relative overflow-hidden bg-zinc-50 py-20 lg:py-16">
      {/* Background radial discret */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_50%,rgba(212,175,55,0.03)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* GAUCHE : TEXTE (Style origine) */}
          <div className="z-10 max-w-xl">
            <SectionTitleWithArrows>Prestige & Partenaires</SectionTitleWithArrows>
            
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              L'Excellence du <span className="text-amber-600">Service Local</span>
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Une sélection rigoureuse d'agences locales, offrant une expérience 
              sur-mesure et une transparence totale pour vos déplacements au Maroc.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">Agences vérifiées</p>
                <p className="text-xs text-zinc-500 font-medium">Contrôle qualité MoroccoMiles</p>
              </div>
            </div>
          </div>

          {/* DROITE : CARROUSEL AVEC FLÈCHES SUR LES CÔTÉS */}
          <div className="relative h-52 flex w-full items-center justify-center">
            
            {/* Bouton Gauche (Placé sur le côté du slide) */}
            <button 
              onClick={goPrev}
              className="group absolute left-0 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/40 shadow-lg backdrop-blur-md transition-all hover:bg-white hover:scale-110 lg:-left-6"
              aria-label="Précédent"
            >
              <svg className="h-6 w-6 text-zinc-800 transition-colors group-hover:text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Conteneur des cartes */}
            <div className="relative flex h-full w-full items-center justify-center overflow-visible">
              {visibleIndices.map((index) => {
                const pos = index === currentIndex ? "center" : index === prevIndex ? "prev" : "next";
                return (
                  <div
                    key={PARTNER_AGENCIES[index].id}
                    className="absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{
                      zIndex: pos === "center" ? 20 : 10,
                      transform: `translateX(${
                        pos === "center" ? "0%" : pos === "prev" ? "-55%" : "55%"
                      }) scale(${pos === "center" ? 1 : 0.75})`,
                      opacity: pos === "center" ? 1 : 0.3,
                      filter: pos === "center" ? "none" : "blur(2px)",
                    }}
                  >
                    <AgencyCard
                      agency={PARTNER_AGENCIES[index]}
                      isCenter={index === currentIndex}
                      position={pos}
                    />
                  </div>
                );
              })}
            </div>

            {/* Bouton Droit (Placé sur le côté du slide) */}
            <button 
              onClick={goNext}
              className="group absolute right-0 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/40 shadow-lg backdrop-blur-md transition-all hover:bg-white hover:scale-110 lg:-right-6"
              aria-label="Suivant"
            >
              <svg className="h-6 w-6 text-zinc-800 transition-colors group-hover:text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}