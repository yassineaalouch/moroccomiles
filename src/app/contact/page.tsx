import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactPage } from "@/components/contact-page/ContactPage";

export const metadata: Metadata = {
  title: "Contact MoroccoMiles — Support clients & agences",
  description:
    "Contactez MoroccoMiles pour toute question liée aux réservations, au support client, à l’inscription des agences ou aux questions techniques.",
};

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
}

