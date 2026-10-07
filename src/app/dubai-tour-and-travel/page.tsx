import React from "react";
import type { Metadata } from "next";
import DubaiClientPage from "./DubaiClientPage";

export const metadata: Metadata = {
  title: "Dubai tour and travel | Explore the Best of Dubai",
  description:
    "Explore Dubai with our expert-guided tours. Visit Burj Khalifa, enjoy desert safaris, discover iconic landmarks, and experience Dubai's best.",
  keywords: [
    "Dubai tour and travel",
    "Dubai tour",
    "Dubai travel",
    "Dubai tour packages",
    "places to visit in Dubai",
    "things to do in Dubai",
  ],
  openGraph: {
    title: "Dubai tour and travel | Explore the Best of Dubai",
    description:
      "Explore Dubai with our expert-guided tours. Visit Burj Khalifa, enjoy desert safaris, discover iconic landmarks, and experience Dubai's best.",
    type: "website",
    locale: "en_IN",
  },
};

export default function DubaiTourAndTravelPage() {
  return <DubaiClientPage />;
}
