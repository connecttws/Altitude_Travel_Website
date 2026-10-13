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
    "Ha Long Bay cruise",
    "Hanoi tour packages",
    "Da Nang holiday packages",
    "Hoi An lantern town tour",
  ],
  alternates: {
    canonical: "https://altitudetravel.in/vietnam-tour-and-travel",
  },
  openGraph: {
    title: "Vietnam tour and travel | Explore the Best of Vietnam",
    description:
      "Explore Vietnam with our expert-guided tours. Visit Hanoi, Ha Long Bay, Ho Chi Minh City, beautiful beaches, and experience the best of Vietnam.",
    url: "https://altitudetravel.in/vietnam-tour-and-travel",
    siteName: "Altitude Travel Co.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vietnam tour and travel - Altitude Travel Co.",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vietnam tour and travel | Explore the Best of Vietnam",
    description:
      "Explore Vietnam with our expert-guided tours. Visit Hanoi, Ha Long Bay, Ho Chi Minh City, beautiful beaches, and experience the best of Vietnam.",
    images: ["https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristDestination",
      "name": "Vietnam",
      "description":
        "Vietnam is a captivating travel destination famous for Ha Long Bay, Hanoi Old Quarter, Hoi An lantern riverfront, and vibrant culture.",
      "url": "https://altitudetravel.in/vietnam-tour-and-travel",
    },
    {
      "@type": "Product",
      "name": "Vietnam Tour and Travel Packages",
      "description":
        "Explore Vietnam with our expert-guided tours. Visit Hanoi, Ha Long Bay, Ho Chi Minh City, beautiful beaches, and experience the best of Vietnam.",
      "image": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      "brand": {
        "@type": "Brand",
        "name": "Altitude Travel Co.",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "142",
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
          "name": "Vietnam Tour and Travel",
          "item": "https://altitudetravel.in/vietnam-tour-and-travel",
        },
      ],
    },
  ],
};

export default function VietnamTourAndTravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VietnamClientPage />
    </>
  );
}
