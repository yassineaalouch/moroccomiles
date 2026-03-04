import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero, Steps, CtaBlock } from "@/components/comment-ca-marche-page";

export const metadata = {
  title: "Comment ça marche — MoroccoMiles",
  description:
    "Réservez votre voiture de location au Maroc en trois étapes : choisir, réserver, récupérer.",
};

export default function CommentCaMarchePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PageHero />
        <Steps />
        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}
