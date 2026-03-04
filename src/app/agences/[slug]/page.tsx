import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AgencyProfilePage } from "@/components/agences-page/AgencyProfilePage";
import { getAgencyBySlug } from "@/components/agences-page/data";
import type { Metadata } from "next";

type AgencySlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: AgencySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const agency = getAgencyBySlug(slug);

  if (!agency) {
    return {
      title: "Agence introuvable — MoroccoMiles",
      description:
        "Cette agence de location n’est plus disponible ou n’a pas encore été activée sur MoroccoMiles.",
    };
  }

  const title = `${agency.name} — Agence de location de voiture à ${agency.primaryCity} | MoroccoMiles`;
  const description = `Découvrez ${agency.name}, agence de location de voiture à ${agency.primaryCity} partenaire de MoroccoMiles. Notes clients ${agency.rating.toFixed(
    1
  )}/5, ${agency.carsCount} véhicules connectés et disponibilité synchronisée en temps réel.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function AgencySlugPage({ params }: AgencySlugPageProps) {
  const { slug } = await params;
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <AgencyProfilePage slug={slug} />
      <Footer />
    </div>
  );
}

