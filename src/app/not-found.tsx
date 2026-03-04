import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
        <h1 className="text-3xl font-bold text-zinc-900">Page introuvable</h1>
        <p className="mt-2 text-zinc-600">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-xl bg-amber-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-amber-700"
        >
          Retour à l&apos;accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}
