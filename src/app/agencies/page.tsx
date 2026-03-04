import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AgenciesListingPage } from "@/components/agences-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rental Agencies in Morocco — MoroccoMiles",
  description:
    "Browse all verified car rental agencies available on MoroccoMiles across Morocco. Compare ratings, cities, fleet size and categories before booking.",
};

export default function AgenciesEnPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <AgenciesListingPage />
      <Footer />
    </div>
  );
}

