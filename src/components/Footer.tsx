import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-lg font-bold text-white">
              Morocco<span className="text-amber-500">Miles</span>
            </span>
            <p className="mt-3 text-sm">
              La location de voitures au Maroc, simple et fiable.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/voitures" className="transition hover:text-white">
                  Voitures
                </Link>
              </li>
              <li>
                <Link href="/cities" className="transition hover:text-white">
                  Villes
                </Link>
              </li>
              <li>
                <Link href="/agences" className="transition hover:text-white">
                  Agences
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-marche"
                  className="transition hover:text-white"
                >
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-marche#pricing-title"
                  className="transition hover:text-white"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-white"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-marche#faq-title"
                  className="transition hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Légal
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/mentions-legales" className="transition hover:text-white">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="transition hover:text-white">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <p className="mt-4 text-sm">
              <Link href="/contact" className="transition hover:text-white">
                Page contact
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm">
          © {new Date().getFullYear()} MoroccoMiles. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
