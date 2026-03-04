"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/voitures", label: "Cars" },
  { href: "/cities", label: "Cities" },
  { href: "/agences", label: "Agencies" },
  { href: "/about", label: "About" },
  { href: "/comment-ca-marche", label: "How it works" },
  { href: "/agences#for-agencies", label: "For Agencies" },
  { href: "/contact", label: "Contact" },
];

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M20 8v24M8 20h24M14 14l12 12M26 14L14 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="4" fill="currentColor" />
    </svg>
  );
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 17h14v-5H5v5Z" />
      <path d="M5 12l2-4h10l2 4" />
      <circle cx="7.5" cy="17" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="17" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Bande sombre en haut */}
      <div className="h-1 bg-zinc-800" aria-hidden />

      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center text-zinc-800">
            <LogoIcon className="h-8 w-8" />
          </span>
          <span className="text-lg font-bold tracking-tight text-zinc-900">
            Morocco<span className="text-amber-600">Miles</span>
          </span>
        </Link>

        {/* Zone centrale : navigation desktop */}
        <div className="flex flex-1 items-center justify-center">
          <nav
            className="hidden items-center justify-center gap-6 md:flex lg:gap-8"
            aria-label="Navigation principale"
          >
            {navLinks.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href.split("#")[0]));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative text-sm font-medium text-zinc-700 transition hover:text-amber-600 ${
                    isActive ? "text-amber-600" : ""
                  }`}
                >
                  {label}
                  {/* Soulignement : actif = pleine largeur ; hover = droite → gauche */}
                  <span
                    className={`absolute -bottom-1 h-0.5 bg-amber-500 ${
                      isActive
                        ? "left-0 right-0 w-full"
                        : "right-0 w-0 transition-all duration-300 group-hover:left-0 group-hover:w-full"
                    }`}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Zone droite : bouton Réserver + burger menu */}
        <div className="ml-auto flex items-center gap-3">
          {/* Bouton Réserver : caché sur très petits écrans, visible à partir de sm */}
          <Link
            href="/voitures"
            className="group relative hidden shrink-0 items-center gap-2 overflow-hidden rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm sm:flex"
          >
            <span
              className="absolute inset-0 z-0 bg-zinc-900 transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100"
              aria-hidden
            />
            <CarIcon className="relative z-10 h-4 w-4 shrink-0 text-white" />
            <span className="relative z-10">Réserver</span>
          </Link>

          {/* Bouton menu mobile : toujours à droite sur petits écrans */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 md:hidden"
            aria-label="Ouvrir le menu principal"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M6 18L18 6" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation mobile : transition douce ouverture/fermeture */}
      <nav
        className={`border-t border-zinc-200 bg-white md:hidden transform origin-top transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-120 scale-y-100 opacity-100"
            : "pointer-events-none max-h-0 scale-y-95 opacity-0"
        }`}
        aria-label="Navigation mobile"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mx-auto max-w-7xl space-y-1 overflow-hidden px-4 py-3 sm:px-6 lg:px-8">
          {navLinks.map(({ href, label }) => {
            const baseHref = href.split("#")[0];
            const isActive =
              pathname === baseHref ||
              (baseHref !== "/" && pathname.startsWith(baseHref));

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-amber-50 text-amber-700"
                    : "text-zinc-800 hover:bg-zinc-50 hover:text-amber-600"
                }`}
              >
                <span>{label}</span>
              </Link>
            );
          })}

          {/* Bouton Réserver en mobile */}
          <Link
            href="/voitures"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            <CarIcon className="h-4 w-4 shrink-0 text-white" />
            <span>Réserver</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
