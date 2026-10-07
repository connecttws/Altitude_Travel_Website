import React from "react";
import type { Metadata } from "next";
import VietnamClientPage from "./VietnamClientPage";

export const metadata: Metadata = {
  title: "Vietnam tour and travel | Explore the Best of Vietnam",
  description:
    "Explore Vietnam with our expert-guided tours. Visit Hanoi, Ha Long Bay, Ho Chi Minh City, beautiful beaches, and experience the best of Vietnam.",
  keywords: [
    "Vietnam tour and travel",
    "Vietnam tour",
    "Vietnam travel",
    "Vietnam tour packages",
    "places to visit in Vietnam",
    "things to do in Vietnam",
  ],
  openGraph: {
    title: "Vietnam tour and travel | Explore the Best of Vietnam",
    description:
      "Explore Vietnam with our expert-guided tours. Visit Hanoi, Ha Long Bay, Ho Chi Minh City, beautiful beaches, and experience the best of Vietnam.",
    type: "website",
    locale: "en_IN",
  },
};

export default function VietnamTourAndTravelPage() {
  return <VietnamClientPage />;
}
