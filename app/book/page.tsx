import { Suspense } from "react";
import { BookExperience } from "@/components/BookExperience";
import { BookView } from "@/components/BookView";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Book a Private Morocco Tour",
  description:
    "Request a recommended MoroccoMiles journey or send your dates and traveler count for a private custom tour with certified native guides.",
  path: "/book"
});

export default function BookPage() {
  return (
    <Suspense fallback={<BookView />}>
      <BookExperience />
    </Suspense>
  );
}
