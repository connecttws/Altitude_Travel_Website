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
    "Burj Khalifa tour",
    "Dubai desert safari",
    "Dubai Marina cruise",
    "Dubai holiday packages",
  ],
  alternates: {
    canonical: "https://altitudetravel.in/dubai-tour-and-travel",
  },
  openGraph: {
    title: "Dubai tour and travel | Explore the Best of Dubai",
    description:
      "Explore Dubai with our expert-guided tours. Visit Burj Khalifa, enjoy desert safaris, discover iconic landmarks, and experience Dubai's best.",
    url: "https://altitudetravel.in/dubai-tour-and-travel",
    siteName: "Altitude Travel Co.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dubai tour and travel - Altitude Travel Co.",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai tour and travel | Explore the Best of Dubai",
    description:
      "Explore Dubai with our expert-guided tours. Visit Burj Khalifa, enjoy desert safaris, discover iconic landmarks, and experience Dubai's best.",
    images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristDestination",
      "name": "Dubai",
      "description":
        "Dubai is a world-renowned destination famous for Burj Khalifa, red dune desert safaris, luxury marinas, and vibrant Arabian culture.",
      "url": "https://altitudetravel.in/dubai-tour-and-travel",
    },
    {
      "@type": "Product",
      "name": "Dubai Tour and Travel Packages",
      "description":
        "Explore Dubai with our expert-guided tours. Visit Burj Khalifa, enjoy desert safaris, discover iconic landmarks, and experience Dubai's best.",
      "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "brand": {
        "@type": "Brand",
        "name": "Altitude Travel Co.",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "168",
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://altitudetravel.in",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "International Tour Packages",
          "item": "https://altitudetravel.in/#international-packages",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dubai Tour and Travel",
          "item": "https://altitudetravel.in/dubai-tour-and-travel",
        },
      ],
    },
  ],
};

export default function DubaiTourAndTravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DubaiClientPage />
    </>
  );
}
