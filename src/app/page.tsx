import type { Metadata } from "next";
import {
  HomeHero,
  HowItWorksSection,
  FeaturedCarsSection,
  BrowseByCitySection,
  PartnerAgenciesSection,
  WhyChooseSection,
  TestimonialsSection,
  HomeCallToAction,
} from "@/components/home-page";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "MoroccoMiles - Location de voitures au Maroc, agences locales vérifiées",
  description:
    "Comparez les offres de location de voitures de multiples agences locales au Maroc avec MoroccoMiles. Recherchez par ville, dates et type de voiture et réservez en toute confiance.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <Header />
      <main className="flex flex-1 flex-col">
        <HomeHero />
        <HowItWorksSection />
        <FeaturedCarsSection />
        <BrowseByCitySection />
        <PartnerAgenciesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <HomeCallToAction />
      </main>
      <Footer />
    </div>
  );
}
