import React from "react";
import type { Metadata } from "next";
import HomeClientPage from "./HomeClientPage";

export const metadata: Metadata = {
  title: "Tour and Travel Agency in Delhi | Altitude Travel Co.",
  description:
    "Altitude Travel Co. is a tour and travel agency in Delhi offering international tour packages, Indian tour packages, and custom trips. Plan yours today.",
  keywords: [
    "Tour and Travel Agency in Delhi",
    "best tour and travel agency in delhi",
    "international tour and travel agency",
    "international tour packages",
    "best tour operator in India",
    "custom tour packages",
    "indian tour packages",
    "Delhi travel agency",
  ],
  alternates: {
    canonical: "https://altitudetravel.in",
  },
  openGraph: {
    title: "Tour and Travel Agency in Delhi | Altitude Travel Co.",
    description:
      "Altitude Travel Co. is a tour and travel agency in Delhi offering international tour packages, Indian tour packages, and custom trips. Plan yours today.",
    url: "https://altitudetravel.in",
    siteName: "Altitude Travel Co.",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour and Travel Agency in Delhi | Altitude Travel Co.",
    description:
      "Altitude Travel Co. is a tour and travel agency in Delhi offering international tour packages, Indian tour packages, and custom trips. Plan yours today.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Altitude Travel Co.",
  alternateName: "Altitude Travel Delhi",
  url: "https://altitudetravel.in",
  logo: "https://altitudetravel.in/logo.jpg",
  description:
    "Altitude Travel Co. is a premier tour and travel agency in Delhi offering international tour packages, Indian tour packages, and custom trips with 1 free day included.",
  telephone: "+919639320101",
  email: "Altitudetravelco@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bazpur, near Rudrapur, Nainital",
    addressLocality: "Bazpur",
    addressRegion: "Uttarakhand",
    postalCode: "262401",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6315",
    longitude: "77.2167",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:30",
    },
  ],
  priceRange: "₹₹₹",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClientPage />
    </>
  );
}
