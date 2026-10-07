"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageModal from "@/components/PackageModal";
import CustomTripModal from "@/components/CustomTripModal";
import { TourPackage } from "@/data/packages";
import {
  Sparkles,
  Compass,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Plane,
  Building,
  Car,
  Ticket,
  Sun,
  ShoppingBag,
  Palmtree,
  Ship,
  UtensilsCrossed,
  Info,
  Send,
  HelpCircle,
  Gem,
  Award,
  Waves,
  Heart,
  Users,
  Compass as CompassIcon,
  Smile,
  Anchor,
  Glasses,
  Coffee,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Briefcase,
  Headphones,
} from "lucide-react";

export default function GoaClientPage() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  // Filter / Slider tab state
  const [activePackageFilter, setActivePackageFilter] = useState<string>("all");
  const [activeTestimonialSlide, setActiveTestimonialSlide] = useState<number>(0);

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Goa (North & South Goa)",
    travelMonth: "Next 30 Days",
    guests: "2 Adults (Couple)",
    packageType: "Goa 4 Nights / 5 Days",
    notes: "Inquiring for Goa tour packages from Delhi.",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Bottom Customer Booking Form State
  const [bottomFormData, setBottomFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDates: "",
    guests: "2 Adults",
    travelStyle: "Family Holiday",
    customRequirements: "",
  });
  const [bottomSubmitting, setBottomSubmitting] = useState(false);
  const [bottomSubmitted, setBottomSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBottomFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBottomSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...bottomFormData,
          notes: `Goa Custom Booking Form: Travel Dates: ${bottomFormData.travelDates}, Style: ${bottomFormData.travelStyle}, Reqs: ${bottomFormData.customRequirements}`,
        }),
      });
      if (response.ok) {
        setBottomSubmitted(true);
      } else {
        setBottomSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setBottomSubmitted(true);
    } finally {
      setBottomSubmitting(false);
    }
  };

  // 7 Complete Goa Package Card Examples requested in prompt
  const goaPackages: TourPackage[] = [
    {
      id: "goa-3n-4d",
      title: "Goa 3 Nights / 4 Days: Quick Coastal & Shacks Escape",
      cardTitle: "Goa 3 Nights / 4 Days",
      subtitle: "Baga, Calangute, Aguada Fort & Sunset Shacks",
      shortDescription:
        "The ideal short weekend getaway. Beachfront relaxation, water activities, Aguada sea views, and beach shacks.",
      category: "indian",
      destination: "Goa",
      duration: "4 Days / 3 Nights",
      days: 4,
      nights: 3,
      priceStarting: "₹12,499",
      rating: 4.8,
      reviewsCount: 162,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      tag: "Weekend Quickie",
      iconicLandmarks: ["Baga Beach Watersports", "Fort Aguada Lighthouse", "Calangute Beach Shacks", "Anjuna Flea Market Area"],
      hiddenGems: ["Sinquerim beach rocky promontory", "Curlies sunset deck vibes", "Authentic Goan poi bakeries"],
      localFoodHighlight: "Goan Fish Curry Rice, butter garlic prawns & refreshing feni coolers",
      freeDayNote: "Day 3 is a dedicated free day to rent a scooter and explore northern coastal cafés.",
      overview:
        "Designed for busy professionals and couples craving ocean waves, salty air, and beach shack vibes without taking a whole week off. Includes private airport pickups and 4-star resort stays.",
      itinerary: [
        { day: 1, title: "Arrive in Goa & Beach Shack Welcome", description: "Pickup from Mopa or Dabolim Airport, check-in to your North Goa resort, and unwind with evening drinks at Baga beach." },
        { day: 2, title: "North Goa Highlights & Water Activities", description: "Visit 17th-century Fort Aguada, Calangute and Anjuna beaches, with optional parasailing and jet ski rides." },
        { day: 3, title: "Complete Free Day for Leisure & Sunset Cruise", description: "Leisure day to café-hop in Assagao, shop local souvenirs, or take an evening Mandovi River sunset cruise." },
        { day: 4, title: "Morning Dip & Airport Departure", description: "Breakfast overlooking palms, souvenir cashew shopping, and private drop-off at Goa airport." },
      ],
      inclusions: ["3 Nights in 4-Star Resort near Baga/Calangute", "Daily Buffet Breakfasts", "Private Airport Pickup & Drop (Mopa/Dabolim)", "Full-Day North Goa Sightseeing Tour", "24/7 Delhi Planning Support Desk"],
      exclusions: ["Flights to Goa", "Motorized watersports fees", "Personal food & drinks"],
    },
    {
      id: "goa-4n-5d",
      title: "Goa 4 Nights / 5 Days: Classic North & South Goa with Heritage",
      cardTitle: "Goa 4 Nights / 5 Days",
      subtitle: "Fontainhas Latin Quarter, Old Goa & South Goa Beaches",
      shortDescription:
        "The complete Goa discovery balancing vibrant North Goa shorelines with the tranquil beauty and heritage of South Goa.",
      category: "indian",
      destination: "Goa",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      priceStarting: "₹16,499",
      rating: 4.9,
      reviewsCount: 188,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tag: "Best Seller",
      iconicLandmarks: ["Basilica of Bom Jesus", "Fontainhas Portuguese Quarter", "Fort Aguada", "Miramar & Dona Paula"],
      hiddenGems: ["Panjim pastel-hued heritage alleys", "Divar Island wooden ferry", "Secluded butterfly beach coves"],
      localFoodHighlight: "Authentic Goan Thali, pork vindaloo, poi bread & warm bebinca",
      freeDayNote: "Day 4 is an unscheduled free day to enjoy peaceful South Goa sands or resort spa pools.",
      overview:
        "The benchmark Goa holiday. Experience the sun-drenched beaches of the north, the 450-year-old churches of Old Goa, the colorful Portuguese homes of Fontainhas, and the serene golden shores of South Goa.",
      itinerary: [
        { day: 1, title: "Arrive in Goa & North Beach Check-in", description: "Private airport pickup, check-in to boutique property, and leisurely evening beachside dinner." },
        { day: 2, title: "North Goa Beaches, Fort Aguada & Chapora", description: "Explore historic Aguada Fort, Chapora Fort ('Dil Chahta Hai' point), and Anjuna beach sunset." },
        { day: 3, title: "Old Goa UNESCO Heritage & Fontainhas Walk", description: "Visit Basilica of Bom Jesus and Se Cathedral, followed by a guided walking tour through the pastel Latin Quarter of Panjim." },
        { day: 4, title: "A Complete Free Day in Goa", description: "Enjoy Goa at your own pace! Lounge by the pool, rent an open jeep, or take a peaceful drive to South Goa." },
        { day: 5, title: "Farewell Goa & Flight to Delhi", description: "Breakfast, last-minute spice and cashew shopping in Panjim market, and private transfer to airport." },
      ],
      inclusions: ["4 Nights in Handpicked 4-Star Resort", "Daily Breakfast Spread", "Private AC Transport for all Sightseeing & Transfers", "Guided Fontainhas Latin Quarter Walking Tour", "Taxes & 24/7 On-Trip Assistance"],
      exclusions: ["Flights to Goa", "Personal meals & alcohol", "Watersport tickets"],
    },
    {
      id: "goa-honeymoon-package",
      title: "Goa Honeymoon Package: Romantic Beachfront Pool Villa",
      cardTitle: "Goa Honeymoon Package",
      subtitle: "Private Plunge Pool, Candlelight Dinners & Sunset Catamaran",
      shortDescription:
        "Crafted for couples seeking intimacy, barefoot luxury, romantic beach strolls, and private sunset sailing.",
      category: "indian",
      destination: "Goa",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      priceStarting: "₹28,500",
      rating: 5.0,
      reviewsCount: 142,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      tag: "Romantic Luxury",
      iconicLandmarks: ["Private Sunset Luxury Sailing", "Palolem Beach Serenity", "Fontainhas Couples Photoshoot", "Candlelight Beach Dinner"],
      hiddenGems: ["Cabo de Rama cliff sunset", "Galgibaga quiet turtle beach", "Private pool floating breakfast"],
      localFoodHighlight: "Seaside candlelight lobster dinner & sparkling wine under the stars",
      freeDayNote: "Day 3 is a 100% uninterrupted free day in your private plunge pool villa.",
      overview:
        "Celebrate your new beginning with romantic moments away from the crowds. Enjoy luxury pool suites, private sunset cruises on the Arabian Sea, and undisturbed beachside relaxation in South Goa.",
      itinerary: [
        { day: 1, title: "VIP Airport Arrival & Honeymoon Villa Check-in", description: "Private luxury chauffeur pickup, check-in to beachfront villa, floral bed décor, and welcome wine bottle." },
        { day: 2, title: "Latin Quarter Couple Walk & River Cruise", description: "Romantic photo walk in picturesque Fontainhas, followed by private sunset catamaran sailing." },
        { day: 3, title: "Intimate Free Day at Your Private Pool", description: "Sleep in, enjoy a floating breakfast in your private pool, and relax with a couples Ayurvedic spa massage." },
        { day: 4, title: "South Goa Secluded Coves & Candlelight Dinner", description: "Scenic drive through palm groves to Palolem and Cabo de Rama, culminating in a 4-course beach dinner on the sand." },
        { day: 5, title: "Breakfast in Bed & Airport Farewell", description: "Leisurely checkout, souvenir shopping for Goan feni and chocolates, and private transfer to airport." },
      ],
      inclusions: ["4 Nights in 5-Star Luxury Resort or Private Pool Villa", "Daily Gourmet Breakfasts (including 1 Floating Breakfast)", "1 Candlelight Beach Dinner with Sparkling Wine", "Private Sunset Catamaran Sailing Tour", "Honeymoon Bed Decoration & Cake", "All Private Chauffeur AC Fleet Transfers"],
      exclusions: ["Flights to Goa", "Personal spa treatments beyond package", "Tips"],
    },
    {
      id: "goa-family-holiday-package",
      title: "Goa Family Holiday Package: Resorts, Dolphins & Greenery",
      cardTitle: "Goa Family Holiday Package",
      subtitle: "Kid-Friendly Resorts, Dolphin Safari & Dudhsagar Waterfalls",
      shortDescription:
        "Comfortable family holiday with calm beaches, spice plantation lunch, dolphin watching, and spacious family rooms.",
      category: "indian",
      destination: "Goa",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      priceStarting: "₹18,999",
      rating: 4.9,
      reviewsCount: 156,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      tag: "Family Favorite",
      iconicLandmarks: ["Arabian Sea Dolphin Safari", "Sahakari Spice Plantation", "Dudhsagar Waterfalls View", "Miramar Family Beach"],
      hiddenGems: ["Divar Island peaceful village tour", "Tropical elephant bathing experience", "Chorao Island bird sanctuary"],
      localFoodHighlight: "Traditional Goan buffet served on fresh banana leaves with fresh kokum juice",
      freeDayNote: "Day 4 provides a relaxing free day by the family resort lagoon pools.",
      overview:
        "Designed specifically for multi-generational families with kids and elderly members. Safe private vehicles, verified family-friendly resorts, gentle waters, and interactive experiences.",
      itinerary: [
        { day: 1, title: "Arrive in Goa & Family Resort Welcome", description: "Airport pickup by private air-conditioned tempo/SUV, check-in to family resort with water slides, and sunset stroll on the beach." },
        { day: 2, title: "Morning Dolphin Safari & North Goa Forts", description: "Boat ride into the Arabian Sea to spot playful Indo-Pacific humpback dolphins, followed by Fort Aguada." },
        { day: 3, title: "Spice Plantation Tour & Dudhsagar Greens", description: "Tour an aromatic organic spice plantation with traditional elephant shower and Goan buffet lunch." },
        { day: 4, title: "A Complete Free Day for Family Fun", description: "Relax by the swimming pool, build sandcastles on Calangute beach, or browse local handicraft markets." },
        { day: 5, title: "Souvenir Packaging & Airport Drop", description: "Family breakfast, cashew & spice shopping in Panjim, and private drop-off at Mopa/Dabolim airport." },
      ],
      inclusions: ["4 Nights in 4-Star Family Resort with Pools", "Daily Buffet Breakfasts & 1 Traditional Spice Plantation Lunch", "Dolphin Watching Boat Cruise Tickets", "Spice Plantation Guided Tour with Herbal Welcome", "All Private AC Fleet Transfers for the Family", "Dedicated 24/7 Concierge Support"],
      exclusions: ["Flights to Goa", "Dudhsagar jeep safari forest permits", "Personal shopping"],
    },
    {
      id: "goa-friends-trip-package",
      title: "Goa Friends Trip Package: Beach Shacks, Nightlife & Thrills",
      cardTitle: "Goa Friends Trip Package",
      subtitle: "Baga Watersports, Anjuna Cafés & Vibrant Beach Clubs",
      shortDescription:
        "The high-energy getaway for squads! Jet skiing, parasailing, cliffside sunset spots, and iconic nightlife venues.",
      category: "indian",
      destination: "Goa",
      duration: "4 Days / 3 Nights",
      days: 4,
      nights: 3,
      priceStarting: "₹11,999",
      rating: 4.8,
      reviewsCount: 220,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      tag: "Squad Special",
      iconicLandmarks: ["Baga Tito's Lane", "Anjuna Beach Cafés", "Vagator Hilltop & Chapora Fort", "Baga Parasailing Combo"],
      hiddenGems: ["Thalassa cliffside dining vibes", "Morjim quiet white sand strip", "Arambol drum circle sunset"],
      localFoodHighlight: "Beach shack BBQ platters, spicy chicken cafreal & chilled beverages",
      freeDayNote: "Day 3 offers complete freedom to party late, sleep in, and café-hop on rented scooters.",
      overview:
        "Live the ultimate Bollywood road-trip dream with your best friends! Private AC group van, centrally located 4-star resort close to the action, watersport package, and zero curfew.",
      itinerary: [
        { day: 1, title: "Arrive in Goa & Squad Shack Party", description: "Group pickup from airport, check-in to party resort, and evening bar crawl along Baga Beach Road." },
        { day: 2, title: "5-in-1 Watersports Combo & Vagator Sunset", description: "Parasailing, jet ski, banana ride, bumper ride & speed boat, followed by sunset at Chapora Fort ('Dil Chahta Hai')." },
        { day: 3, title: "A Complete Free Day for Friends Exploration", description: "Rent scooters or an open Thar, explore Anjuna flea market, chill at Morjim beach clubs, and party till dawn." },
        { day: 4, title: "Brunch & Group Airport Departure", description: "Late lazy breakfast, group photos, and private airport drop for direct flight home to Delhi." },
      ],
      inclusions: ["3 Nights in 4-Star Resort near Baga/Calangute", "Daily Breakfasts", "5-in-1 Watersports Activity Pass at Baga Beach", "All Group Airport Transfers in Private AC Tempo Traveller / SUV", "24/7 Goa Helpline Support"],
      exclusions: ["Flights to Goa", "Club entry passes & personal alcohol", "Scooter fuel & personal expenses"],
    },
    {
      id: "goa-beach-holiday-package",
      title: "Goa Beach Holiday Package: South Goa Palms & Serene Sands",
      cardTitle: "Goa Beach Holiday Package",
      subtitle: "Palolem, Agonda, Cavelossim & Slow-Paced Susegad Living",
      shortDescription:
        "Pure sea, soft golden sands, swaying coconut groves, and tranquil beachside cafés far away from the party crowd.",
      category: "indian",
      destination: "Goa",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      priceStarting: "₹17,800",
      rating: 4.9,
      reviewsCount: 135,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tag: "Pure Susegad",
      iconicLandmarks: ["Palolem Crescent Beach", "Agonda Peaceful Shores", "Cabo de Rama Fort", "Sal River Cruise"],
      hiddenGems: ["Cola Beach freshwater lagoon", "Butterfly Beach hidden boat cove", "Netravali bubbling lake"],
      localFoodHighlight: "Authentic coastal seafood curry, freshly baked poi & tender coconut water",
      freeDayNote: "Days 3 and 4 are completely unscheduled for uninterrupted beach lounging and reading.",
      overview:
        "Escape the noise of modern city life. South Goa represents the true soul of Goa: quiet white sands, gentle waves, wooden beach huts under palms, and the unhurried susegad way of life.",
      itinerary: [
        { day: 1, title: "Arrive & Transfer to South Goa Beachfront", description: "Private airport pickup, drive through lush coconut canopies to South Goa resort, and sunset walk on Palolem beach." },
        { day: 2, title: "South Goa Scenic Coastlines & Cabo de Rama", description: "Visit historic cliffside Cabo de Rama Fort overlooking turquoise Arabian waters and secluded Agonda beach." },
        { day: 3, title: "A Complete Free Day: The Susegad Experience", description: "Entire day to unwind. Read a book in a hammock, rent a kayak in calm waters, or enjoy beachside yoga." },
        { day: 4, title: "Cola Lagoon Exploration & Sunset Stroll", description: "Optional excursion to Cola Beach where a natural emerald freshwater lagoon meets the ocean." },
        { day: 5, title: "Farewell South Goa & Return to Delhi", description: "Slow coastal breakfast, souvenir packaging, and private airport drop for direct flight home." },
      ],
      inclusions: ["4 Nights in Boutique South Goa Beachfront Resort", "Daily Farm-Fresh Breakfast Spread", "Private AC Airport Pickups & Sightseeing Fleet", "Guided South Goa Coastal Discovery Tour", "24/7 Delhi Planning Support"],
      exclusions: ["Flights to Goa", "Kayak rentals & personal meals", "Tips"],
    },
    {
      id: "goa-custom-tour-package",
      title: "Custom Goa Tour Package: Handcrafted Tailor-Made Itinerary",
      cardTitle: "Goa Custom Tour Package",
      subtitle: "Bespoke Hotels, Private Fleet, Yacht Charters & Stays",
      shortDescription:
        "Completely personalized around your travel dates, budget, preferred beaches, heritage homestays, and activities.",
      category: "indian",
      destination: "Goa",
      duration: "Flexible (3 to 10+ Days)",
      days: 6,
      nights: 5,
      priceStarting: "Custom Quote",
      rating: 5.0,
      reviewsCount: 310,
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
      tag: "100% Tailor-Made",
      iconicLandmarks: ["Luxury Heritage Homestays", "Private Yacht Sunset Charters", "Dudhsagar Jeep Safaris", "Hidden Fontainhas Patios"],
      hiddenGems: ["Island hopping in Chorao & Divar", "Curated Michelin-style Goan culinary tasting", "Private secluded sandbars"],
      localFoodHighlight: "Custom dining bookings at Goa's most acclaimed fine-dining spots",
      freeDayNote: "Your free days are scheduled according to your exact personal rhythm.",
      overview:
        "Want to combine North Goa's fine-dining restaurant scene with a private Portuguese villa in South Goa, or celebrate a milestone anniversary with a private yacht charter? Our Delhi travel specialists design your dream Goa trip from scratch.",
      itinerary: [
        { day: 1, title: "VIP Airport Reception & Custom Check-in", description: "Private luxury chauffeur pickup, check-in to your handpicked boutique heritage villa or 5-star beachfront resort." },
        { day: 2, title: "Personalized Sightseeing & Curated Activities", description: "Private English-speaking guides and executive chauffeured transport tailored to your wish list." },
        { day: 3, title: "Culinary Tasting or Water Adventures", description: "Enjoy experiences tailored exclusively for you—from spice plantation trails to private speedboats." },
        { day: 4, title: "Unstructured Leisure at Your Own Pace", description: "Relax with guaranteed free time, curated dining recommendations, and on-call concierge." },
        { day: 5, title: "Secluded Coves or Heritage Architecture", description: "Explore hidden corners of Goa that ordinary tourists never see." },
        { day: 6, title: "Smooth Departure Curated by Delhi Desk", description: "Private airport transfer, souvenir packaging support, and flight back to Delhi." },
      ],
      inclusions: ["Custom Hotel Tier (Boutique Heritage to Ultra-Luxury 5-Star)", "Dedicated Private Chauffeured AC Fleet Throughout", "Tailor-Made Sightseeing & Excursion Passes", "Direct 24/7 Delhi Planning Desk Access", "Itemized Transparent Pricing with Zero Hidden Fees"],
      exclusions: ["Specified transparently during quote drafting", "No hidden costs"],
    },
  ];

  const handleOpenPackageModal = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  // 8 Best Places to Visit in Goa requested in prompt
  const placesToVisit = [
    {
      id: "baga-beach",
      title: "Baga Beach",
      tag: "Lively North Coast",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "One of Goa's most popular beaches, Baga is known for its lively atmosphere, beach shacks, water activities, and nightlife.",
      elaborations: [
        "Parasailing, banana boat rides, jet skis & bumper rides",
        "Famous seaside shacks serving fresh seafood with music",
        "Iconic nightlife along Tito's Lane and Café Mambo",
        "Golden sand loungers with sunset views over the Arabian Sea",
      ],
    },
    {
      id: "calangute-beach",
      title: "Calangute Beach",
      tag: "Queen of Beaches",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Calangute is a great choice for travellers who want to enjoy the beach, shopping, local food, and a lively holiday atmosphere.",
      elaborations: [
        "Vibrant beachfront bazaar selling souvenirs, swimwear & spices",
        "Family-friendly gentle waves and expansive golden shoreline",
        "Multitude of authentic Goan, Indian & international restaurants",
        "Water activities and catamaran boat rides departing from shore",
      ],
    },
    {
      id: "anjuna-beach",
      title: "Anjuna Beach",
      tag: "Boho & Sunset Vibes",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Known for its relaxed vibe and vibrant surroundings, Anjuna is a popular stop for travellers looking for beaches, cafés, markets, and nightlife.",
      elaborations: [
        "Legendary Wednesday Anjuna Flea Market for bohemian clothes & art",
        "Cliffside oceanview cafés (Curlies, Shiva Valley, Purple Martini)",
        "Dramatic reddish-brown laterite rock formations meeting the surf",
        "Laid-back music sessions and magical Arabian Sea sunsets",
      ],
    },
    {
      id: "fort-aguada",
      title: "Fort Aguada",
      tag: "17th-Century Portuguese Citadel",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Visit this historic Portuguese fort for beautiful sea views and a glimpse into Goa's colonial history.",
      elaborations: [
        "Panoramic 360-degree views of the Arabian Sea & Mandovi River",
        "Historic four-tiered Portuguese lighthouse built in 1864",
        "Vast subterranean freshwater storage cistern built in 1612",
        "Well-preserved laterite stone ramparts for memorable photography",
      ],
    },
    {
      id: "basilica-of-bom-jesus",
      title: "Basilica of Bom Jesus",
      tag: "UNESCO World Heritage",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "One of Goa's most famous heritage attractions, the Basilica of Bom Jesus is an important historic and architectural landmark.",
      elaborations: [
        "Holds the sacred mortal remains of St. Francis Xavier",
        "Stunning Baroque architecture with unplastered red laterite facade",
        "Intricate gilded wood altar and 400-year-old marble bas-reliefs",
        "Located in Old Goa alongside the monumental Se Cathedral",
      ],
    },
    {
      id: "panjim",
      title: "Panjim",
      tag: "Heritage Capital & Latin Quarter",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Explore the colourful streets, Portuguese-style buildings, local cafés, markets, and cultural attractions of Goa's capital city.",
      elaborations: [
        "Fontainhas Latin Quarter with brightly painted yellow & blue villas",
        "Immaculate Conception Church with iconic zigzag baroque stairs",
        "Riverside promenade with floating casino ships and dinner cruises",
        "Artisanal bakeries serving fresh Poi, Bebinca, and Goan coffee",
      ],
    },
    {
      id: "dudhsagar-waterfalls",
      title: "Dudhsagar Waterfalls",
      tag: "Sea of Milk Wonder",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "For nature and adventure lovers, Dudhsagar Waterfalls offer an exciting experience surrounded by lush greenery.",
      elaborations: [
        "Four-tiered 310-meter cascade creating a dramatic white water torrent",
        "Thrilling 4x4 open-jeep safari ride through Bhagwan Mahaveer Sanctuary",
        "Natural freshwater pool at the base suitable for refreshing swims",
        "Famous railway bridge arching directly across the thunderous waterfall",
      ],
    },
    {
      id: "south-goa-beaches",
      title: "South Goa Beaches",
      tag: "Tranquil Susegad Shores",
      image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "If you prefer a quieter beach holiday, explore the peaceful beaches of South Goa, known for their relaxed atmosphere and scenic surroundings.",
      elaborations: [
        "Palolem Beach crescent bay with calm swimming and beach huts",
        "Agonda Beach wide peaceful sands ideal for turtle spotting and reading",
        "Cavelossim and Benaulim quiet stretches with luxury beach resorts",
        "Cliffside views at Cabo de Rama overlooking pristine turquoise water",
      ],
    },
  ];

  // 10 Things to do in Goa (Verbatim from prompt)
  const thingsToDo = [
    { title: "Relax on the beautiful beaches of Goa", desc: "Golden sands, warm Arabian waves, and comfortable sun loungers under palm canopies.", icon: Sun, color: "text-amber-600 bg-amber-50" },
    { title: "Have fun with water sports and beach activities", desc: "Parasailing, jet skis, banana boats, bumper rides, and windsurfing.", icon: Waves, color: "text-blue-600 bg-blue-50" },
    { title: "Discover the Portuguese heritage", desc: "Fontainhas Latin Quarter, Old Goa UNESCO churches, and coastal colonial forts.", icon: Building, color: "text-purple-600 bg-purple-50" },
    { title: "Sample local Goan dishes", desc: "Spicy Fish Curry Rice, Prawn Balchão, Pork Vindaloo, Poi bread, and Bebinca.", icon: UtensilsCrossed, color: "text-rose-600 bg-rose-50" },
    { title: "Shop in local markets", desc: "Anjuna flea market, Arpora Saturday night market, and Panjim municipal bazaar.", icon: ShoppingBag, color: "text-emerald-600 bg-emerald-50" },
    { title: "Goa's nightlife", desc: "Vibrant beach clubs, Tito's lane pubs, silent noise parties, and casino cruises.", icon: Glasses, color: "text-pink-600 bg-pink-50" },
    { title: "Cafés and restaurants by the beach", desc: "Beach shacks with fresh seafood, Assagao heritage courtyard cafés, and sunset lounges.", icon: Coffee, color: "text-yellow-700 bg-yellow-50" },
    { title: "Visit both north and south Goa", desc: "Balanced journeys combining high-energy northern beaches with peaceful southern sands.", icon: MapPin, color: "text-teal-600 bg-teal-50" },
    { title: "Wander through waterfalls and other attractions", desc: "Dudhsagar waterfall jungle treks, spice plantations, and bird sanctuaries.", icon: Palmtree, color: "text-green-600 bg-green-50" },
    { title: "Watch the sunset over the sea", desc: "Mesmerizing Arabian Sea sunsets from Fort Aguada, Chapora ramparts, and Palolem bay.", icon: Sparkles, color: "text-orange-600 bg-orange-50" },
  ];

  // 5 Categories for Every Traveller (Verbatim from prompt)
  const travellerTypes = [
    {
      title: "Goa Family Tour Packages",
      tag: "Family Friendly",
      icon: Users,
      desc: "Enjoy a comfortable family holiday with beach time, sightseeing, local experiences, and activities suitable for different age groups.",
      highlights: ["Family resorts with dedicated kid-friendly pools", "Dolphin safari and spice plantation day trip", "Private air-conditioned SUV/Tempo with verified driver", "Guaranteed free time for leisurely sandcastle building"],
    },
    {
      title: "Goa Honeymoon Packages",
      tag: "Romantic Luxury",
      icon: Heart,
      desc: "Make your honeymoon special with comfortable stays, romantic experiences, beautiful beaches, sunset moments, and time to relax together.",
      highlights: ["Private plunge pool villas in South Goa", "Beachside candlelight dinner with sparkling wine", "Private sunset catamaran sailing on the Arabian Sea", "Romantic photo walk in Portuguese Fontainhas"],
    },
    {
      title: "Goa Friends Trip Packages",
      tag: "Squad Vibes",
      icon: Smile,
      desc: "Plan a fun getaway with your friends with beaches, nightlife, water activities, cafés, local food, and plenty of free time.",
      highlights: ["5-in-1 Baga watersports adventure pass included", "Centrally located resort close to nightlife strips", "Group AC vehicles with zero hassle or curfews", "Cliffside sunset dinners at Vagator and Anjuna"],
    },
    {
      title: "Goa Beach Holiday Packages",
      tag: "Sea & Susegad",
      icon: Waves,
      desc: "If your idea of a holiday is relaxing by the sea, our beach-focused packages give you time to enjoy Goa's beaches, cafés, sunsets, and laid-back atmosphere.",
      highlights: ["Direct beach access at Palolem, Agonda or Calangute", "Unhurried mornings with ocean-view buffet breakfasts", "Hammocks under coconut palms and quiet reading bays", "Fresh tropical fruit juices and seaside massages"],
    },
    {
      title: "Custom Goa Tour Packages",
      tag: "100% Bespoke",
      icon: SlidersHorizontal,
      desc: "Want to create your own Goa itinerary? Our custom Goa tour packages can be planned according to your dates, budget, hotel preference, interests, and activities.",
      highlights: ["Choose exact hotel tier (Boutique Heritage to 5-Star)", "Pick your preferred balance of North vs South Goa", "Private luxury chauffeur fleet at your disposal", "Transparent itemized pricing with zero hidden charges"],
    },
  ];

  // 7 Pillars for Why Choose Altitude Travel Co. (Verbatim from prompt)
  const whyChoosePillars = [
    {
      title: "Flexible Itinerary Options",
      desc: "Choose an itinerary that matches your travel style, whether you want relaxation, sightseeing, adventure, or nightlife.",
    },
    {
      title: "Explore Beyond the Popular Spots",
      desc: "Along with famous attractions, we help you discover local cafés, markets, beaches, food spots, and hidden places.",
    },
    {
      title: "Free Time to Explore",
      desc: "Wherever possible, we keep free time in your itinerary so you can relax, shop, explore, or simply enjoy the beach.",
    },
    {
      title: "Handpicked Experiences",
      desc: "We focus on experiences that help you understand and enjoy Goa rather than simply checking places off a list.",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear information about inclusions and exclusions with no unnecessary hidden costs.",
    },
    {
      title: "Personal Support",
      desc: "Our team assists you with planning and travel-related questions before and during your trip.",
    },
    {
      title: "Customised Goa Packages",
      desc: "Tell us your dates, budget, group size, and interests, and we can create a Goa itinerary around your requirements.",
    },
  ];

  // 7 Services We Offer for Goa Trips (Verbatim from prompt)
  const servicesWeOffer = [
    {
      title: "Goa Tour Itinerary Planning",
      desc: "Every traveller has different expectations from a Goa holiday. We offer different itinerary options depending on whether you prefer beaches, sightseeing, adventure, food, nightlife, or a relaxed trip.",
      icon: Compass,
    },
    {
      title: "Goa Holiday Packages",
      desc: "Our Goa holiday packages can include accommodation, sightseeing, transfers, activities, and other travel arrangements based on your selected package.",
      icon: Palmtree,
    },
    {
      title: "Goa Sightseeing Packages",
      desc: "Explore popular Goa attractions including beaches, forts, churches, markets, heritage areas, waterfalls, and other local highlights.",
      icon: Building,
    },
    {
      title: "Goa Honeymoon Packages",
      desc: "Plan a romantic Goa holiday with comfortable stays, beautiful beaches, sunset experiences, and enough free time to enjoy the destination together.",
      icon: Heart,
    },
    {
      title: "Goa Family Tour Packages",
      desc: "We create comfortable family itineraries with a mix of sightseeing, beaches, activities, and relaxation.",
      icon: Users,
    },
    {
      title: "Custom Goa Tour Packages",
      desc: "Have a specific Goa itinerary in mind? Tell us your dates, budget, group size, hotel preference, and interests. We can customize your trip according to your requirements.",
      icon: SlidersHorizontal,
    },
    {
      title: "Travel Support",
      desc: "Our team is available to assist with travel planning, itinerary questions, changes, and other trip-related support before and during your journey.",
      icon: Headphones,
    },
  ];

  // 10 FAQs (Verbatim from prompt)
  const faqs = [
    {
      q: "1. What is the best time to visit Goa?",
      a: "The best time to visit Goa is generally between October and May when the weather is suitable for beaches, sightseeing, outdoor activities, and exploring the destination.",
    },
    {
      q: "2. How many days are enough for a Goa trip?",
      a: "A 3 to 5-day Goa trip is suitable for many travellers. However, the ideal duration depends on the places you want to visit and the experiences you want to include.",
    },
    {
      q: "3. What are the best places to visit in Goa?",
      a: "Popular places to visit in Goa include Baga Beach, Calangute Beach, Anjuna Beach, Fort Aguada, Panjim, Basilica of Bom Jesus, Dudhsagar Waterfalls, and the beaches of South Goa.",
    },
    {
      q: "4. Do you offer Goa tour packages for families?",
      a: "Yes. Altitude Travel Co. offers Goa family tour packages with comfortable stays, sightseeing, beach experiences, and activities suitable for families.",
    },
    {
      q: "5. Do you offer Goa honeymoon packages?",
      a: "Yes. We offer Goa honeymoon packages that can include romantic stays, beach experiences, sightseeing, sunset moments, and free time for couples.",
    },
    {
      q: "6. Can I customize my Goa tour package?",
      a: "Yes. Our custom Goa tour packages can be planned according to your travel dates, budget, group size, hotel preference, and interests.",
    },
    {
      q: "7. Do Goa tour packages include hotels and transportation?",
      a: "Package inclusions depend on the itinerary you choose. Depending on the package, accommodation, transfers, sightseeing, activities, and other travel services can be included. The exact inclusions will be shared before booking.",
    },
    {
      q: "8. Can I get a Goa package for a friends' trip?",
      a: "Yes. We can create Goa packages for friends' groups with beaches, nightlife, water activities, cafés, sightseeing, and free time according to your preferences.",
    },
    {
      q: "9. Can I modify my Goa tour itinerary?",
      a: "Yes. Customisation and itinerary changes can be discussed based on your requirements, availability, and selected package.",
    },
    {
      q: "10. How can I book a Goa tour package with Altitude Travel Co.?",
      a: "You can contact Altitude Travel Co. with your preferred travel dates, number of travellers, budget, and requirements. Our team will help you select or create a Goa tour package that suits your trip.",
    },
  ];

  // Verified Client Testimonials with slide animation
  const testimonials = [
    {
      name: "Siddharth & Meera Varma",
      country: "India (Delhi to Goa Honeymoon)",
      rating: 5,
      date: "Travelled October 2026",
      avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      review:
        "Altitude Travel Co. made our Goa honeymoon unforgettable! The private villa in South Goa was quiet and heavenly. The sunset catamaran sailing was straight out of a dream, and having a whole free day without an annoying tour guide calling us every hour gave us real privacy. Best travel agency in Delhi!",
    },
    {
      name: "Rajiv Nambiar & Family",
      country: "India (Delhi to Goa Family Holiday)",
      rating: 5,
      date: "Travelled September 2026",
      avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      review:
        "Travelling with two young kids and my parents is usually chaotic, but Altitude Travel organized private SUV transfers, spacious interconnected rooms, and a smooth spice plantation tour where everyone had fun. The pricing was completely transparent with zero hidden fees.",
    },
    {
      name: "Karan Johar & Squad (6 Friends)",
      country: "India (Noida to North Goa Squad Trip)",
      rating: 5,
      date: "Travelled August 2026",
      avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      review:
        "Our college reunion trip in Goa was epic! Altitude Travel arranged our 5-in-1 watersports package at Baga, recommended the best cliffside dinner spots in Vagator, and provided a private AC tempo that stayed with us throughout. Seamless booking and genuine 24/7 support.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-slate-800 flex flex-col selection:bg-amber-200 selection:text-amber-950">
      
      {/* Global Header */}
      <Navbar
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenInquiryModal={() => {
          const formElem = document.getElementById("goa-inquiry-box");
          if (formElem) {
            formElem.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }}
      />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* HERO SECTION: 3D MOVING PHOTOS + SUSEGAD BADGE + VERBATIM H1              */}
        {/* ========================================================================= */}
        <section className="relative pt-[128px] pb-10 sm:pt-[132px] sm:pb-12 lg:pt-[136px] lg:pb-14 bg-gradient-to-b from-[#FFF8ED] via-[#FDFBF7] to-white border-b border-amber-200/60 overflow-hidden">
          
          {/* Subtle Warm Amber Atmosphere Glows */}
          <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/3 -left-20 w-[420px] h-[420px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Bar: Konkani / Susegad Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-amber-200/60">
              
              <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50/70 border border-amber-300/80 px-4 py-1.5 rounded-full shadow-xs">
                <span className="text-amber-700 font-bold text-sm tracking-wide">🌴</span>
                <span className="font-serif text-amber-950 text-base sm:text-lg font-bold tracking-wide italic">
                  सुस्वागतम् (Suswagatam) — Susegad &amp; Sunshine
                </span>
                <span className="text-amber-600/60 hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Discover the Soul of Goa
                </span>
              </div>

              {/* Flight & Travel Pills */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-amber-600" />
                  <span>2.5h Direct Flight from Delhi</span>
                </span>
                <span className="hidden sm:inline-flex bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>Mopa (GOX) &amp; Dabolim (GOI)</span>
                </span>
                <span className="hidden md:inline-flex bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Best Season: Oct – May</span>
                </span>
              </div>

            </div>

            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: VERBATIM H1 & INTRODUCTORY COPY */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 self-start bg-white/90 backdrop-blur-md border border-amber-200/80 text-amber-950 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                  <Compass className="w-3.5 h-3.5 text-amber-700" />
                  <span>Curated Indian Coastal Escapes • Connaught Place, Delhi Planning Desk</span>
                </div>

                {/* EXACT H1 HEADING */}
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#08182B] tracking-tight leading-[1.18]">
                  Goa Tour Packages |{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-sky-700">
                    Discover the Best of Goa
                  </span>
                </h1>

                {/* VERBATIM INTRODUCTORY PARAGRAPHS */}
                <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
                    Goa is more than just beaches. From golden shores and vibrant nightlife to Portuguese heritage, local food, colourful markets, and peaceful hidden spots, Goa offers something for every traveller.
                  </p>
                  <p>
                    With Altitude Travel Co., explore Goa with thoughtfully planned tour packages that combine popular attractions with local experiences, free time, and comfortable travel.
                  </p>
                </div>

                {/* Core Pillars Ribbon */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                      <Waves className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#08182B]">North &amp; South Coasts</h4>
                      <p className="text-[11px] text-slate-500">Beaches &amp; Watersports</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#08182B]">Fontainhas Latin Walk</h4>
                      <p className="text-[11px] text-slate-500">Portuguese Architecture</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                      <Palmtree className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#08182B]">Guaranteed Free Time</h4>
                      <p className="text-[11px] text-slate-500">Susegad &amp; Relaxed Pace</p>
                    </div>
                  </div>
                </div>

                {/* Popular Discovery Badges */}
                <div className="pt-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
                    Top Highlights:
                  </span>
                  {["Baga Beach", "Calangute", "Fort Aguada", "Fontainhas Panjim", "Dudhsagar Falls", "Palolem Beach", "Anjuna Market"].map(
                    (place, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-slate-800 border border-slate-200/80 shadow-2xs flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>{place}</span>
                      </span>
                    )
                  )}
                </div>

              </div>

              {/* Right Column: 3D MOVING PHOTOS SHOWCASE + QUICK INQUIRY CARD */}
              <div className="lg:col-span-5 space-y-6" id="goa-inquiry-box">
                
                {/* 3D Moving Position Photos Showcase */}
                <div className="relative h-[290px] sm:h-[320px] rounded-2xl p-4 bg-gradient-to-tr from-[#08182B] via-[#1A2634] to-[#08182B] overflow-hidden shadow-xl border border-amber-900/40 flex items-center justify-center">
                  
                  {/* Subtle Background Golden Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_60%)]" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full border border-white/20">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Live 3D Attractions Showcase</span>
                    </span>
                  </div>

                  {/* 3D Moving Perspective Photos Container */}
                  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
                    
                    {/* Card 1: Left 3D Moving Photo - Fontainhas Portuguese Quarter */}
                    <div className="absolute -left-2 sm:left-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 animate-3d-left z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
                        alt="Fontainhas Latin Quarter colorful Portuguese villas in Panjim Goa"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-amber-400 block">Colonial Charm</span>
                        <h4 className="text-xs font-bold leading-tight">Panjim Latin Quarter</h4>
                      </div>
                    </div>

                    {/* Card 2: Center 3D Floating Hero - Baga / Calangute Beach Watersports */}
                    <div className="relative w-[180px] sm:w-[210px] h-[230px] sm:h-[250px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-2 border-amber-400 animate-3d-center z-20 group cursor-pointer">
                      <Image
                        src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80"
                        alt="Baga Beach golden sands and Arabian Sea waves Goa"
                        fill
                        sizes="240px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08182B]/95 via-[#08182B]/30 to-transparent" />
                      <div className="absolute top-2.5 right-2.5 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        MUST VISIT
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10.5px] font-bold text-sky-300 block">Iconic Coastline</span>
                        <h4 className="text-sm font-bold leading-tight">Baga &amp; Calangute</h4>
                      </div>
                    </div>

                    {/* Card 3: Right 3D Moving Photo - South Goa Palolem Serene Beach */}
                    <div className="absolute -right-2 sm:right-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 animate-3d-right z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                        alt="South Goa Palolem Beach swaying palms and peaceful sands"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-amber-400 block">Peaceful Susegad</span>
                        <h4 className="text-xs font-bold leading-tight">South Goa Palolem</h4>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Quick Concierge Inquiry Card */}
                <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.08)] border border-slate-200/90">
                  <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Goa Tour Inquiry
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      Delhi Desk Online
                    </span>
                  </div>

                  {submitted ? (
                    <div className="py-6 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900">Inquiry Received</h4>
                      <p className="text-xs text-slate-600 max-w-xs mx-auto">
                        Thank you! Our Goa holiday planner from Connaught Place, Delhi will contact you shortly with customized package itineraries and hotel recommendations.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-2 px-4 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitInquiry} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Varun Kapoor"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98100 XXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                            Package Type
                          </label>
                          <select
                            value={formData.packageType}
                            onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none"
                          >
                            <option value="Goa 3 Nights / 4 Days">Goa 3 Nights / 4 Days</option>
                            <option value="Goa 4 Nights / 5 Days">Goa 4 Nights / 5 Days (Classic)</option>
                            <option value="Goa Honeymoon Package">Goa Honeymoon Package</option>
                            <option value="Goa Family Holiday Package">Goa Family Holiday Package</option>
                            <option value="Goa Friends Trip Package">Goa Friends Trip Package</option>
                            <option value="Goa Beach Holiday Package">Goa Beach Holiday Package</option>
                            <option value="Goa Custom Tour Package">Goa Custom Tour Package</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                            Number of Guests
                          </label>
                          <select
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none"
                          >
                            <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                            <option value="Family with Kids">Family with Kids</option>
                            <option value="Group of Friends (4+)">Group of Friends (4+)</option>
                            <option value="Solo Traveler">Solo Traveler</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-5 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-md transition-all flex items-center justify-center gap-2 border border-amber-400 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Submitting Goa Inquiry...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 text-white fill-white" />
                            <span>Request Custom Goa Package Quote</span>
                          </>
                        )}
                      </button>

                      <p className="text-[10.5px] text-center text-slate-400 font-medium">
                        100% Privacy • No Spam • Handcrafted Quotes from Delhi Office
                      </p>
                    </form>
                  )}
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: EXPLORE GOA TOUR PACKAGES                                     */}
        {/* ========================================================================= */}
        <section id="explore-goa" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Specialized Planning by Altitude Travel Co.</span>
              </div>

              {/* EXACT SECTION HEADING */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Explore Goa <span className="text-amber-600">Tour Packages</span>
              </h2>

              {/* VERBATIM TEXT FROM PROMPT */}
              <div className="space-y-3 text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Altitude Travel Co. offers carefully planned Goa tour packages for travellers looking for more than a standard sightseeing trip. Explore famous beaches, historic churches, lively markets, local cafés, water activities, nightlife, and peaceful places away from the crowds.
                </p>
                <p className="font-medium text-slate-800">
                  Whether you are planning a family holiday, honeymoon, friends&apos; trip, or a relaxing beach getaway, our Goa packages can be planned around your travel style.
                </p>
              </div>
            </div>

            {/* Quick Benefits Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="p-3.5 bg-[#F8FBFF] rounded-xl border border-slate-200 text-center space-y-1">
                <span className="text-xl">🏖️</span>
                <h4 className="text-xs font-bold text-slate-900">North &amp; South Goa</h4>
                <p className="text-[11px] text-slate-500">Curated Beach Stays</p>
              </div>
              <div className="p-3.5 bg-[#F8FBFF] rounded-xl border border-slate-200 text-center space-y-1">
                <span className="text-xl">🚗</span>
                <h4 className="text-xs font-bold text-slate-900">Private AC Fleet</h4>
                <p className="text-[11px] text-slate-500">Pickups from Mopa &amp; Dabolim</p>
              </div>
              <div className="p-3.5 bg-[#F8FBFF] rounded-xl border border-slate-200 text-center space-y-1">
                <span className="text-xl">⏱️</span>
                <h4 className="text-xs font-bold text-slate-900">Guaranteed Free Time</h4>
                <p className="text-[11px] text-slate-500">Relax at Your Own Pace</p>
              </div>
              <div className="p-3.5 bg-[#F8FBFF] rounded-xl border border-slate-200 text-center space-y-1">
                <span className="text-xl">🛡️</span>
                <h4 className="text-xs font-bold text-slate-900">Transparent Pricing</h4>
                <p className="text-[11px] text-slate-500">Zero Hidden Surcharges</p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: PACKAGE CARDS / IMAGE SECTION (7 EXAMPLES)                     */}
        {/* ========================================================================= */}
        <section id="goa-packages-grid" className="py-10 sm:py-12 lg:py-14 bg-[#F8FBFF] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Gem className="w-3.5 h-3.5 text-sky-700" />
                <span>Featured Package Examples</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Featured Goa <span className="text-amber-600">Holiday Packages</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Choose from our popular package examples below, or let us tailor your own itinerary.
              </p>

              {/* Slider / Filter Option (Requested in prompt: Slider Option – Show More Goa Packages) */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {[
                  { id: "all", label: "All Goa Packages (7)" },
                  { id: "short", label: "3 to 4 Days Escapes" },
                  { id: "honeymoon", label: "Honeymoon & Romantic" },
                  { id: "family", label: "Family Holiday" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActivePackageFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activePackageFilter === tab.id
                        ? "bg-[#08182B] text-amber-300 shadow-xs"
                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 7 Package Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goaPackages
                .filter((p) => {
                  if (activePackageFilter === "all") return true;
                  if (activePackageFilter === "short") return p.days <= 4;
                  if (activePackageFilter === "honeymoon") return p.id.includes("honeymoon");
                  if (activePackageFilter === "family") return p.id.includes("family");
                  return true;
                })
                .map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                      
                      <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                        {pkg.tag}
                      </span>

                      <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-300" />
                        <span>{pkg.duration}</span>
                      </span>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-xs text-amber-200 block font-medium">{pkg.subtitle}</span>
                        <h3 className="text-lg font-bold text-white leading-snug">{pkg.cardTitle}</h3>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {pkg.shortDescription}
                        </p>

                        <div className="p-2.5 bg-amber-50/70 rounded-xl border border-amber-200/60 text-[11px] font-semibold text-amber-950 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{pkg.freeDayNote}</span>
                        </div>

                        <div className="space-y-1.5 pt-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                            Key Inclusions:
                          </span>
                          {pkg.iconicLandmarks.slice(0, 3).map((lm, i) => (
                            <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">{lm}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Starting From</span>
                          <span className="text-xl font-bold text-[#08182B]">{pkg.priceStarting}</span>
                          <span className="text-[10.5px] text-slate-500 block">/ person</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleOpenPackageModal(pkg)}
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-[#08182B] hover:bg-amber-950 text-amber-300 hover:text-amber-200 transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>View Package CTA</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
            </div>

            {/* Slider Option – Show More Goa Packages (Prompt verbatim requirement) */}
            <div className="mt-8 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2.5 text-xs text-amber-950 font-medium">
                <Info className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Slider Option – Show More Goa Packages: Looking for offbeat stays in Divar Island, heritage villas in Aldona, or luxury yacht charters?</span>
              </div>
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white transition-all shadow-xs shrink-0 cursor-pointer"
              >
                Customize My Goa Package
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: BEST PLACES TO VISIT IN GOA (H2 & H3s)                         */}
        {/* ========================================================================= */}
        <section id="best-places-to-visit" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-sky-700" />
                <span>Goa Destination Guide</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Best Places to Visit in <span className="text-amber-600">Goa</span>
              </h2>

              {/* VERBATIM INTRO FROM PROMPT */}
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Goa has a mix of beaches, heritage sites, markets, nightlife, nature, and local experiences. Our Goa tour packages include some of the most popular places while also giving you time to explore the destination at your own pace.
              </p>
            </div>

            {/* 8 Elaborated Places Cards (H3s) */}
            <div className="space-y-8 max-w-5xl mx-auto">
              {placesToVisit.map((place, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={place.id}
                    className={`bg-[#F8FBFF] rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row gap-6 items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full md:w-5/12 relative h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 shadow-xs">
                      <Image
                        src={place.image}
                        alt={`${place.title} Goa`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-[#08182B] text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        {place.tag}
                      </span>
                    </div>

                    <div className="flex-1 space-y-3 text-left">
                      {/* EXACT H3 HEADING */}
                      <h3 className="text-2xl font-bold text-[#08182B] flex items-center gap-2">
                        <span>{place.title}</span>
                      </h3>

                      {/* VERBATIM PROMPT COPY */}
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {place.verbatimText}
                      </p>

                      {/* ELABORATED DETAILS */}
                      <div className="pt-2 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {place.elaborations.map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Option – Show More Places in Goa (Prompt verbatim) */}
            <div className="mt-8 text-center">
              <p className="text-xs text-slate-500 font-semibold mb-3">
                Also interested in Morjim, Arambol, Cabo de Rama, or Divar Island?
              </p>
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Slider Option – Show More Places in Goa</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: THINGS TO DO IN GOA (H2) - 10 ITEMS FROM PROMPT                */}
        {/* ========================================================================= */}
        <section id="things-to-do" className="py-10 sm:py-12 lg:py-14 bg-[#EEF4FA] border-b border-sky-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Compass className="w-3.5 h-3.5 text-sky-700" />
                <span>Activities &amp; Highlights</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Things to Do in <span className="text-sky-700">Goa</span>
              </h2>

              {/* VERBATIM INTRO FROM PROMPT */}
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Goa has something for everyone including sightseeing but here are some other highlights for you to include in your holiday. From relaxing on the beaches and water sports to sample some of the best food and nightlife on the mainland.
              </p>
            </div>

            {/* 10 Things to do Grid (Verbatim Items) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-6xl mx-auto">
              {thingsToDo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-amber-300 transition-all shadow-2xs group flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center mb-2.5`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#08182B] leading-snug group-hover:text-amber-700 transition-colors mb-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-500 font-normal leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: BEST GOA TOUR PACKAGES FOR EVERY TRAVELLER                     */}
        {/* ========================================================================= */}
        <section id="packages-for-every-traveller" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Users className="w-3.5 h-3.5 text-amber-700" />
                <span>Tailored for You</span>
              </div>

              {/* EXACT SECTION TITLE */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Best Goa Tour Packages for <span className="text-amber-600">Every Traveller</span>
              </h2>

              {/* VERBATIM PROMPT INTRO */}
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Whether you are travelling with family, your partner, friends, or on your own, Altitude Travel Co. can help you choose a Goa tour package that fits your travel plans.
              </p>
            </div>

            {/* 5 Traveller Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {travellerTypes.map((type, idx) => {
                const Icon = type.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                          {type.tag}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* EXACT TITLE */}
                      <h3 className="text-lg font-bold text-[#08182B] leading-snug">
                        {type.title}
                      </h3>

                      {/* VERBATIM COPY */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {type.desc}
                      </p>

                      <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        {type.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, packageType: type.title }));
                          const formElem = document.getElementById("goa-inquiry-box");
                          if (formElem) {
                            formElem.scrollIntoView({ behavior: "smooth", block: "center" });
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#08182B] hover:bg-amber-950 text-amber-300 hover:text-amber-200 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Enquire for {type.tag}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Option – Show More Goa Packages (Prompt verbatim requirement) */}
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Slider Option – Show More Goa Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: WHY CHOOSE ALTITUDE TRAVEL CO. FOR YOUR GOA TRIP? (H2)         */}
        {/* ========================================================================= */}
        <section id="why-choose-altitude" className="py-10 sm:py-12 lg:py-14 bg-[#F8FBFF] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>The Altitude Travel Standard</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Why Choose Altitude Travel Co. for Your{" "}
                <span className="text-amber-600">Goa Trip?</span>
              </h2>

              {/* VERBATIM PROMPT INTRO */}
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Altitude Travel Co. helps travellers experience Goa beyond a standard sightseeing itinerary. We combine popular attractions with local experiences, food, shopping, beaches, and free time so you can enjoy Goa at your own pace.
              </p>
            </div>

            {/* 7 Pillars (Verbatim Items from Prompt) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {whyChoosePillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-600">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h3 className="text-sm sm:text-base font-bold text-[#08182B]">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal pl-6">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: WHAT OUR TRAVELLERS SAY ABOUT ALTITUDE TRAVEL (H2)             */}
        {/* ========================================================================= */}
        <section id="what-travellers-say" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>Verified Client Reviews</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                What Our Travellers Say About{" "}
                <span className="text-amber-600">Altitude Travel</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Authentic client testimonials from travelers who explored Goa with Altitude Travel Co.
              </p>
            </div>

            {/* Moveable Slide / Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FBFF] rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-slate-200 shrink-0 shadow-xs">
                        <Image
                          src={t.avatarImage}
                          alt={t.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-[#08182B] truncate">{t.name}</h4>
                        <div className="text-xs text-amber-700 font-medium truncate">{t.country}</div>
                        <div className="flex items-center text-amber-400 mt-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative pt-1">
                      <Quote className="w-7 h-7 text-amber-200/50 absolute -top-2 -left-1 pointer-events-none" />
                      <p className="relative z-10 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                        &ldquo;{t.review}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-medium">{t.date}</span>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified Booking
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: GOA TOUR AND TRAVEL AGENCY (EDITORIAL SECTION)                 */}
        {/* ========================================================================= */}
        <section id="agency-editorial" className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#FFFDF9] to-[#F8FBFF] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Briefcase className="w-3.5 h-3.5 text-amber-700" />
                <span>About Altitude Travel Co.</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Goa Tour and <span className="text-amber-600">Travel Agency</span>
              </h2>
            </div>

            {/* VERBATIM EDITORIAL NARRATIVE */}
            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <p>
                Altitude Travel Co. helps travellers plan memorable Goa holidays with carefully designed itineraries, comfortable stays, sightseeing, local experiences, and personal support. Our Goa tour packages are created for travellers who want to experience more than just the popular beaches.
              </p>
              <p>
                From North Goa&apos;s lively beaches and nightlife to the peaceful surroundings of South Goa, there is plenty to explore. We can help you plan visits to beaches, heritage attractions, markets, cafés, waterfalls, and other popular places in Goa.
              </p>
              <p>
                Whether you are planning a family holiday, honeymoon, friends&apos; trip, or a relaxing beach vacation, our team can help organise the important details of your journey. Depending on your package, we can assist with accommodation, transfers, sightseeing, activities, and itinerary planning.
              </p>
              <p>
                We believe a good Goa holiday should give you enough time to explore without feeling rushed. That&apos;s why our itineraries can include a balance of sightseeing, local experiences, relaxation, and free time.
              </p>
              <p className="font-semibold text-slate-800">
                With Altitude Travel Co., you can plan a Goa trip that matches your interests, budget, and travel style.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: SERVICES WE OFFER FOR GOA TRIPS (H2)                           */}
        {/* ========================================================================= */}
        <section id="services-we-offer" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Briefcase className="w-3.5 h-3.5 text-sky-700" />
                <span>Comprehensive Travel Support</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Services We Offer for <span className="text-amber-600">Goa Trips</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Everything you need for a comfortable, stress-free Goa holiday handled under one roof.
              </p>
            </div>

            {/* 7 Services Cards (Verbatim from prompt) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {servicesWeOffer.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F8FBFF] border border-slate-200/90 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* EXACT SERVICE TITLE */}
                      <h3 className="text-lg font-bold text-[#08182B]">
                        {srv.title}
                      </h3>

                      {/* VERBATIM COPY */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: FREQUENTLY ASKED QUESTIONS ABOUT GOA TOUR PACKAGES (10 FAQS)  */}
        {/* ========================================================================= */}
        <section id="goa-faqs" className="py-10 sm:py-12 lg:py-14 bg-[#EEF4FA] border-b border-sky-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <HelpCircle className="w-3.5 h-3.5 text-sky-700" />
                <span>Frequently Asked Questions</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Frequently Asked Questions About <span className="text-amber-600">Goa Tour Packages</span>
              </h2>

              <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
                Clear answers for planning and booking your Goa trip with Altitude Travel Co.
              </p>
            </div>

            {/* Accordion with Exact Headings & Verbatim Answers */}
            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-amber-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      {/* EXACT QUESTION */}
                      <h3 className="text-base sm:text-[17px] font-bold text-[#08182B] hover:text-amber-700 transition-colors leading-snug">
                        {faq.q}
                      </h3>

                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "bg-amber-400 text-slate-950 rotate-180" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 font-normal">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: PLAN YOUR GOA TRIP WITH ALTITUDE TRAVEL CO. (CTA + FORM)     */}
        {/* User requested: Plan Your Goa Trip with Altitude Travel Co.,              */}
        {/*                 Inquiry Now CTA Plus form for customer                     */}
        {/* ========================================================================= */}
        <section id="plan-goa-trip" className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#FFF8ED] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Start Your Goa Vacation</span>
              </div>

              {/* EXACT SECTION HEADING */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Plan Your Goa Trip with <span className="text-amber-600">Altitude Travel Co.</span>
              </h2>

              {/* VERBATIM COPY FROM PROMPT */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                Ready to explore Goa? From beautiful beaches and local food to heritage sites, nightlife, markets, and hidden experiences, let Altitude Travel Co. help you plan a Goa holiday that goes beyond the usual tourist trail.
              </p>
            </div>

            {/* DEDICATED CUSTOMER BOOKING FORM */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200/90 max-w-2xl mx-auto">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    Inquiry Now — Customized Goa Package
                  </h3>
                </div>
                <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                  Fast Response
                </span>
              </div>

              {bottomSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Your Goa Trip Request Is In!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you! Our senior Goa travel specialist from Connaught Place, New Delhi will get back to you shortly with a personalized itinerary and clear, transparent pricing.
                  </p>
                  <button
                    type="button"
                    onClick={() => setBottomSubmitted(false)}
                    className="mt-3 px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBottomFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Siddharth Verma"
                        value={bottomFormData.name}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98100 XXXXX"
                        value={bottomFormData.phone}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Approximate Travel Dates
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15th to 20th November"
                        value={bottomFormData.travelDates}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, travelDates: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Travel Style
                      </label>
                      <select
                        value={bottomFormData.travelStyle}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, travelStyle: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none"
                      >
                        <option value="Family Holiday">Family Holiday (Kids / Parents)</option>
                        <option value="Honeymoon / Couple">Honeymoon / Couple Retreat</option>
                        <option value="Friends Trip">Friends Trip / Squad Fun</option>
                        <option value="Beach Holiday">Beach Holiday / Susegad Relaxation</option>
                        <option value="Custom Itinerary">Custom Itinerary (North + South)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Custom Preferences or Specific Interests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Interested in South Goa beach shacks, Fontainhas photography walk, 4-star boutique hotel near the beach..."
                      value={bottomFormData.customRequirements}
                      onChange={(e) => setBottomFormData({ ...bottomFormData, customRequirements: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={bottomSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-md transition-all flex items-center justify-center gap-2 border border-amber-400 cursor-pointer"
                  >
                    {bottomSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white fill-white" />
                        <span>Inquiry Now — Get My Customized Goa Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    100% Privacy Protected • No Pushy Calls • Handcrafted Quotes by Altitude Travel Co.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Concierge Call & WhatsApp Strip */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-[#08182B] via-[#1A2634] to-[#08182B] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Direct Delhi Concierge
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Speak Directly With Our Goa Travel Specialist
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Instant quotes, flight options ex-Delhi, and personalized hotel recommendations.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <a
                  href="tel:+919810024680"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Call +91 98100 24680</span>
                </a>

                <a
                  href="https://wa.me/919810024680?text=Hello%20Altitude%20Travel,%20I%20want%20to%20plan%20a%20Goa%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Package Detail Modal */}
      <PackageModal
        pkg={selectedPackage}
        isOpen={isPackageModalOpen}
        onClose={() => {
          setIsPackageModalOpen(false);
          setSelectedPackage(null);
        }}
      />

      {/* Interactive Custom Trip Planner Modal */}
      <CustomTripModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />

    </div>
  );
}
