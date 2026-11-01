import type { Metadata } from "next";
import Link from "next/link";
import { GeoInsight } from "@/components/GeoInsight";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Car Rental Conditions",
  description:
    "MoroccoMiles car rental conditions: excess and security hold, required documents, GPS tracking, fuel, mileage, drivers and what to do in an accident or theft.",
  path: "/car-rental/terms",
  keywords: ["Morocco car rental conditions", "franchise location voiture Maroc", "caution location voiture", "GPS rental car Morocco"]
});

const sections = [
  {
    title: "Excess and the amount we block",
    paragraphs: [
      "Two amounts are easy to mix up. The security hold is a pre-authorisation on the main driver’s credit card at pickup. It is released after the car comes back in the condition agreed at handover. The excess is what stays at your charge if the car is damaged, stolen, or involved in an accident.",
      "A hold is placed in every case, including accident, theft and damage. Indicative holds: from 14,400 MAD for a normal car, 30,000 MAD-40,000 MAD for an SUV, a 4×4 or a large tourist car, and 0 MAD for a mini bus. The excess starts at 7,000 MAD -10,000 MAD for a normal car and can reach 36,000 MAD for a family or premium car. Your confirmation states the exact hold and the exact excess for the car you reserved.",
      "The hold can be taken only on a credit card in the main driver’s name. Debit cards are not accepted. A partial excess waiver reduces the excess; a full waiver can bring it to zero. Neither waiver cancels the hold at pickup. The confirmation separates the two figures."
    ]
  },
  {
    title: "Papers you must bring",
    paragraphs: [
      "At handover, the main driver and every additional driver present the following:",
      "A valid passport or national identity card. A driving licence that is still valid, held for at least twelve months, for the contract holder and for each additional driver. If the licence is not written in Latin characters, bring an international driving permit or an official translation as well. A credit card in the main driver’s name, with enough available limit for the security hold.",
      "The driver must be at least 21. Between 21 and 23, a young-driver charge is added. Some large tourist cars require the driver to be 25. That limit is written on the confirmation."
    ]
  },
  {
    title: "Every car is tracked by GPS",
    paragraphs: [
      "Every MoroccoMiles rental car is fitted with GPS tracking. The tracker is used to locate the vehicle for roadside assistance, recovery after a theft or breakdown, and the security of the fleet. It is active for the whole rental.",
      "By reserving, you acknowledge that the car is tracked for those purposes. Tracking does not authorise the car to leave Morocco, and it does not replace the rules of the road."
    ]
  },
  {
    title: "What the daily rate covers",
    paragraphs: [
      "The rate on the car card is a starting daily price. The confirmation is the price for your dates, your pickup point and the protections included. Third-party liability, collision damage cover and theft cover are included. In a claim, your responsibility is limited to the excess, unless an exclusion applies.",
      "Exclusions commonly include an undeclared driver, driving off a sealed road in a car that is not a 4×4 authorised for that piste, leaving the keys in the car, and theft without forced entry. Read the exclusions on the confirmation before you travel."
    ]
  },
  {
    title: "Fuel, mileage and the handover",
    paragraphs: [
      "The car leaves with a full tank and comes back full. Keep the last fuel receipt. A prepaid fuel option, if you ask for one, is charged at the agency rate and unused fuel is not refunded.",
      "Mileage on sealed roads is unlimited unless the confirmation says otherwise. A limited kilometre pack is cheaper only for a short stay with little driving. A Marrakech–Merzouga return is well over a thousand kilometres, so a limited pack is the wrong choice for that road.",
      "Before you take the keys, we write the condition of the car with you. Photograph each side, the windscreen, the bumpers and the wheels, and the fuel gauge. Do the same when you return the car, before the keys are handed back."
    ]
  },
  {
    title: "Drivers, territory and one-way returns",
    paragraphs: [
      "Only drivers named on the contract are covered. Add a second driver when you reserve. A driver added later, or not declared at all, may be charged more and may not be covered in a claim.",
      "The car stays in Morocco. It is not permitted to cross the border.",
      "You may return the car in another city when that route is available. One-way fees depend on the distance and on whether a car can be positioned there. Ask for the fee in the request so it is on the confirmation, not at the counter.",
      "A 4×4 may use pistes only when the confirmation authorises that use. A normal car or a large tourist car stays on sealed roads."
    ]
  },
  {
    title: "Changes, extensions and extras",
    paragraphs: [
      "You can change a reservation up to 48 hours before pickup, subject to availability and a price adjustment. To extend a rental that has already started, contact us before the agreed return time. Cover stops if the car is kept without that agreement.",
      "Child seats, booster seats and a breakdown kit are not priced on the reservation form. Our confirmation agent agrees those accessories with you, and their cost, when the rental is confirmed. Asking before pickup is cheaper than adding them at handover.",
      "Out-of-hours return and a young-driver supplement, when they apply, are also stated on the confirmation."
    ]
  },
  {
    title: "Accident, damage or theft",
    paragraphs: [
      "Make the people safe first. Then call the assistance number printed on your contract. If there is an accident or a theft, inform the local authorities. Do not admit liability at the roadside and do not leave the car without telling us, except to reach safety.",
      "At a police or gendarmerie check, show your licence, passport, rental contract and the insurance card, in that order.",
      "Driving is on the right. Speed limits are 60 km/h in town where signed, 100 km/h on national roads and 120 km/h on the motorway. Alcohol at the wheel is not tolerated."
    ]
  }
] as const;

export default function CarRentalTermsPage() {
  return (
    <main className="bg-morocco-sand text-morocco-dark">
      <section className="bg-morocco-dark px-5 pb-16 pt-36 text-morocco-sand sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">Car rental</p>
          <h1 className="font-serif text-6xl leading-[0.9] sm:text-8xl">
            Conditions,
            <br />
            <em className="font-normal text-morocco-saffron">before the keys.</em>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-morocco-sand/75">
            These conditions apply to every MoroccoMiles rental, self-drive or with chauffeur. The confirmation you receive repeats the price, the hold and the excess for your car.
          </p>
        </div>
      </section>

      <GeoInsight
        answer="A MoroccoMiles rental requires a credit-card hold, a stated excess if the car is damaged, stolen or in an accident, valid papers for every driver, and GPS tracking on every vehicle."
        insight="The amounts below follow the bands commonly applied by major Morocco rental desks. Your confirmation names the exact hold and excess for the car you chose, before you travel."
        french="Une franchise et une caution sont bloquées en cas d’accident, de vol ou de dommage. Passeport, permis et carte de crédit sont exigés. Toutes les voitures sont suivies par GPS."
      />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-16">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{section.title}</h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed tracking-wide text-stone-600 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
          <p className="border-t border-morocco-saffron/20 pt-8 text-sm leading-relaxed text-stone-600">
            Questions before you reserve can go to{" "}
            <a href="mailto:reservations@moroccomiles.com" className="text-morocco-saffron underline-offset-4 hover:underline">
              reservations@moroccomiles.com
            </a>
            . The reservation form asks you to confirm that you have read this page.
          </p>
          <Link
            href="/car-rental#request"
            className="inline-flex border border-morocco-saffron/60 px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-morocco-saffron transition-all duration-300 hover:bg-morocco-saffron hover:text-morocco-dark"
          >
            Back to the cars
          </Link>
        </div>
      </section>
    </main>
  );
}
