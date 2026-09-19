import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Link from "next/link";
import { Compass } from "lucide-react";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moroccomiles.com"),
  title: {
    default: "MoroccoMiles | Private Morocco Tours",
    template: "%s | MoroccoMiles"
  },
  description: "Bespoke private journeys through Morocco, designed by local storytellers.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MoroccoMiles"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-morocco-sand font-sans text-stone-800 antialiased">
        <header className="absolute inset-x-0 top-0 z-50 border-b border-morocco-sand/10">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
            <Link href="/" className="flex items-center gap-3" aria-label="MoroccoMiles home">
              <Compass className="text-morocco-saffron" size={25} strokeWidth={1.5} />
              <span className="font-serif text-xl tracking-wide text-morocco-sand sm:text-2xl">Morocco<span className="text-morocco-saffron">Miles</span></span>
            </Link>
            <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-morocco-sand/75 md:flex">
              <Link href="/destinations" className="transition-all duration-300 hover:text-morocco-saffron">Destinations</Link>
              <Link href="/tours" className="transition-all duration-300 hover:text-morocco-saffron">Tours</Link>
              <Link href="/itinerary-builder" className="transition-all duration-300 hover:text-morocco-saffron">Builder</Link>
              <Link href="/gallery" className="transition-all duration-300 hover:text-morocco-saffron">Gallery</Link>
              <Link href="/our-story" className="transition-all duration-300 hover:text-morocco-saffron">Our story</Link>
              <Link href="/faq" className="transition-all duration-300 hover:text-morocco-saffron">Q&amp;A</Link>
              <Link href="/contact" className="transition-all duration-300 hover:text-morocco-saffron">Contact</Link>
            </nav>
            <Link href="/#destinations" className="border border-morocco-saffron/50 px-4 py-2.5 text-[9px] uppercase tracking-[0.25em] text-morocco-saffron transition-all duration-300 hover:bg-morocco-saffron hover:text-morocco-dark sm:px-6">
              Begin a journey
            </Link>
          </div>
        </header>
        {children}
        <footer className="border-t border-morocco-saffron/10 bg-morocco-surface px-5 py-12 text-morocco-sand sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="font-serif text-3xl">Morocco<span className="text-morocco-saffron">Miles</span></p>
              <p className="mt-2 text-xs text-morocco-sand/50">Journeys remembered long after the road ends.</p>
            </div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-morocco-sand/40">Locally rooted · Privately guided · Made in Morocco</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
