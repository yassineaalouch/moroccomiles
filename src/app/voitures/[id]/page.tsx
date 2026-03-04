import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CarDetail } from "@/components/voitures-page";
import { getCarById } from "@/data/cars";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const car = getCarById(id);
  if (!car) return { title: "Voiture — MoroccoMiles" };
  return {
    title: `${car.name} — MoroccoMiles`,
    description: `Louer ${car.name} chez ${car.agency}. À partir de ${car.pricePerDay} DH/jour.`,
  };
}

export default async function VoitureDetailPage({ params }: Props) {
  const { id } = await params;
  const car = getCarById(id);
  if (!car) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <div className="h-1 w-full bg-zinc-800" />
        <CarDetail car={car} />
      </main>
      <Footer />
    </div>
  );
}
