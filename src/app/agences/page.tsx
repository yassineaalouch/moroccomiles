import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AgenciesListingPage } from "@/components/agences-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agences de location de voiture au Maroc — MoroccoMiles",
  description:
    "Découvrez toutes les agences de location de voiture partenaires de MoroccoMiles à travers le Maroc. Comparez les notes, les villes desservies, le nombre de véhicules et les catégories proposées.",
};

export default function AgenciesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <AgenciesListingPage />
      <Footer />
    </div>
  );
}
