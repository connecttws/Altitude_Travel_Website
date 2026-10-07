import React from "react";
import type { Metadata } from "next";
import GoaClientPage from "@/app/goa-tour-packages/GoaClientPage";

export const metadata: Metadata = {
  title: "Goa Tour Packages | Explore the Best of Goa | Altitude Travel Co.",
  description:
    "Plan your perfect Goa trip with Altitude Travel Co. Explore beaches, nightlife, adventure, sightseeing, and customized Goa tour packages.",
  keywords: [
    "Goa tour packages",
    "Goa tour and travel",
    "Goa travel packages",
    "Goa holiday packages",
    "Goa trip packages",
    "places to visit in Goa",
    "things to do in Goa",
    "Goa sightseeing",
    "Goa beach holiday",
    "Goa tour operator",
  ],
  openGraph: {
    title: "Goa Tour Packages | Explore the Best of Goa | Altitude Travel Co.",
    description:
      "Plan your perfect Goa trip with Altitude Travel Co. Explore beaches, nightlife, adventure, sightseeing, and customized Goa tour packages.",
    type: "website",
    locale: "en_IN",
  },
};

export default function GoaTourPackagesPage() {
  return <GoaClientPage />;
}
