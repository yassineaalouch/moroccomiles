import { CitiesPage } from "@/components/cities-page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

type CitiesPageParams = {
  params: Promise<{ slug: string }>;
};

const SUPPORTED_CITIES = [
  "marrakech",
  "casablanca",
  "agadir",
  "tanger",
  "rabat",
  "fes",
  "oujda",
] as const;

type SupportedCitySlug = (typeof SUPPORTED_CITIES)[number];

export async function generateMetadata({
  params,
}: CitiesPageParams): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = SUPPORTED_CITIES.includes(
    slug.toLowerCase() as SupportedCitySlug
  )
    ? (slug.toLowerCase() as SupportedCitySlug)
    : "marrakech";

  const cityLabel =
    normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1);

  return {
    title: `Location de voiture à ${cityLabel} — MoroccoMiles`,
    description:
      "Trouvez et comparez des voitures de location auprès d'agences locales vérifiées dans cette ville marocaine, avec des prix transparents et une réservation en ligne sécurisée.",
  };
}

export default async function CityPage({ params }: CitiesPageParams) {
  const { slug } = await params;
  const normalizedSlug = SUPPORTED_CITIES.includes(
    slug.toLowerCase() as SupportedCitySlug
  )
    ? (slug.toLowerCase() as SupportedCitySlug)
    : "marrakech";

  const initialCity =
    normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <CitiesPage initialCity={initialCity} />
      <Footer />
    </div>
  );
}

