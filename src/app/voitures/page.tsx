import { CarsListingPage } from "@/components/voitures-page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

type VoituresPageProps = {
  searchParams?: Promise<{
    ville?: string;
    depart?: string;
    retour?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: VoituresPageProps): Promise<Metadata> {
  const resolved = await searchParams;
  const cityParam = resolved?.ville;
  const normalizedCity =
    cityParam && cityParam.length > 0
      ? cityParam.charAt(0).toUpperCase() + cityParam.slice(1).toLowerCase()
      : null;

  const cityLabel = normalizedCity ?? "Maroc";

  return {
    title: `Location de voiture à ${cityLabel} — MoroccoMiles`,
    description:
      "Comparez les offres de véhicules de location de plusieurs agences locales vérifiées au Maroc et réservez en toute confiance avec MoroccoMiles.",
  };
}

export default async function VoituresPage({ searchParams }: VoituresPageProps) {
  const resolved = await searchParams;
  const ville = resolved?.ville;
  const initialCity =
    ville && ville.length > 0
      ? ville.charAt(0).toUpperCase() + ville.slice(1).toLowerCase()
      : null;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <CarsListingPage
          initialCity={initialCity}
          initialPickupDate={resolved?.depart ?? null}
          initialReturnDate={resolved?.retour ?? null}
        />
      </main>
      <Footer />
    </div>
  );
}
