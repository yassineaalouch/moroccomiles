import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AboutHero,
  OurMission,
  OurStory,
  OurValues,
  MeetTheTeam,
  WhyChooseMoroccoMiles,
  PartnerAgenciesAbout,
  CtaBanner,
} from "@/components/about-page";

export const metadata: Metadata = {
  title: "About MoroccoMiles — Our Story, Mission & Values",
  description:
    "Learn how MoroccoMiles connects travelers with verified car rental agencies across Morocco. Our mission, story, values, and why agencies and customers trust us.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <AboutHero />
        <OurMission />
        <OurStory />
        <OurValues />
        <MeetTheTeam />
        <WhyChooseMoroccoMiles />
        <PartnerAgenciesAbout />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
