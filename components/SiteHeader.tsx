"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Compass, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;

const primaryLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/our-story", label: "Our story" },
  { href: "/faq", label: "Q&A" },
  { href: "/contact", label: "Contact" }
] as const;

const tourLinks = [
  { href: "/tours", label: "Recommended Tours" },
  { href: "/itinerary-builder", label: "Build Your Tour" }
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
    setMobileToursOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-morocco-sand/10">
      <div className="relative z-[60] mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="MoroccoMiles home">
          <Compass className="text-morocco-saffron" size={25} strokeWidth={1.5} />
          <span className="font-serif text-xl tracking-wide text-morocco-sand sm:text-2xl">
            Morocco<span className="text-morocco-saffron">Miles</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-morocco-sand/75 md:flex">
          <Link href="/destinations" className="transition-all duration-300 hover:text-morocco-saffron">
            Destinations
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 transition-all duration-300 hover:text-morocco-saffron"
              aria-haspopup="menu"
            >
              Tours
              <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="border border-morocco-saffron/20 bg-morocco-canvas py-3 shadow-gold">
                {tourLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-2.5 text-[10px] uppercase tracking-[0.28em] text-morocco-dark transition-colors duration-300 hover:bg-morocco-sand hover:text-morocco-saffron"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {primaryLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="transition-all duration-300 hover:text-morocco-saffron">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#destinations"
            className="hidden border border-morocco-saffron/50 px-4 py-2.5 text-[9px] uppercase tracking-[0.25em] text-morocco-saffron transition-all duration-300 hover:bg-morocco-saffron hover:text-morocco-dark md:inline-flex md:px-6"
          >
            Begin a journey
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center border border-morocco-sand/20 text-morocco-sand transition-colors duration-300 hover:border-morocco-saffron hover:text-morocco-saffron md:hidden"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((open) => !open)}
          >
            {drawerOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-morocco-dark/70"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.nav
              className="absolute inset-y-0 right-0 flex w-[min(100%,380px)] flex-col bg-morocco-surface px-6 pb-10 pt-24 text-morocco-sand shadow-gold"
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
            >
              <Link
                href="/destinations"
                className="border-b border-morocco-saffron/15 py-4 text-[11px] uppercase tracking-[0.32em] transition-colors duration-300 hover:text-morocco-saffron"
              >
                Destinations
              </Link>

              <div className="border-b border-morocco-saffron/15">
                <button
                  type="button"
                  onClick={() => setMobileToursOpen((open) => !open)}
                  className="flex w-full items-center justify-between py-4 text-[11px] uppercase tracking-[0.32em] transition-colors duration-300 hover:text-morocco-saffron"
                  aria-expanded={mobileToursOpen}
                >
                  Tours
                  <ChevronDown size={16} className={`transition-transform duration-300 ${mobileToursOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileToursOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pb-4 pl-3">
                        {tourLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block py-2 text-[10px] uppercase tracking-[0.28em] text-morocco-sand/70 transition-colors duration-300 hover:text-morocco-saffron"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {primaryLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-morocco-saffron/15 py-4 text-[11px] uppercase tracking-[0.32em] transition-colors duration-300 hover:text-morocco-saffron"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/#destinations"
                className="mt-8 border border-morocco-saffron/50 px-4 py-3 text-center text-[9px] uppercase tracking-[0.25em] text-morocco-saffron transition-all duration-300 hover:bg-morocco-saffron hover:text-morocco-dark"
              >
                Begin a journey
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
