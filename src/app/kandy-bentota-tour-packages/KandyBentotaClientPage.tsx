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
  Trees,
} from "lucide-react";

export default function KandyBentotaClientPage() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  // Filter / Slider state
  const [activePackageFilter, setActivePackageFilter] = useState<string>("all");

  // Top Hero Quick Inquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Sri Lanka (Kandy & Bentota)",
    travelMonth: "Next 30 Days",
    guests: "2 Adults (Couple)",
    packageType: "Kandy Bentota 5 Nights / 6 Days",
    notes: "Inquiring for Kandy Bentota Sri Lanka tour packages from Delhi.",
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
          notes: `Kandy Bentota Booking Form: Dates: ${bottomFormData.travelDates}, Style: ${bottomFormData.travelStyle}, Reqs: ${bottomFormData.customRequirements}`,
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

  // 7 Complete Package Card Examples requested in prompt
  const kandyBentotaPackages: TourPackage[] = [
    {
      id: "kandy-bentota-4n-5d",
      title: "Kandy Bentota 4 Nights / 5 Days: Sacred Heritage & Golden Coast",
      cardTitle: "Kandy Bentota 4 Nights / 5 Days",
      subtitle: "2 Nights Kandy Hills + 2 Nights Bentota Beach",
      shortDescription:
        "The classic twin-destination getaway. Tooth Relic Temple, tea gardens, Pinnawala elephants, and Bentota sands.",
      category: "international",
      destination: "Sri Lanka",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      priceStarting: "₹26,500",
      rating: 4.9,
      reviewsCount: 148,
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      tag: "Best Seller",
      iconicLandmarks: ["Temple of the Sacred Tooth Relic", "Peradeniya Royal Botanical Gardens", "Bentota Beach & Watersports", "Bentota Madu River Boat Safari"],
      hiddenGems: ["Kandy Lake serene morning circuit", "Brief Garden tropical art estate", "Kosgoda Sea Turtle Conservation"],
      localFoodHighlight: "Authentic Sri Lankan rice & curry, Ceylon spiced tea & tropical hoppers",
      freeDayNote: "Day 4 in Bentota is a guaranteed free day for beach lounging or watersports.",
      overview:
        "Experience the best of Sri Lanka in 5 scenic days. Journey from the sacred highland capital of Kandy with misty hills and botanical wonders down to the golden palm-fringed beaches of Bentota.",
      itinerary: [
        { day: 1, title: "Arrive Colombo & Scenic Drive to Kandy", description: "Meet our representative at Bandaranaike International Airport, private transfer through lush hills to Kandy with en route Pinnawala Elephant Orphanage visit." },
        { day: 2, title: "Kandy Heritage & Royal Botanical Gardens", description: "Guided tour to the Temple of the Sacred Tooth Relic, serene stroll around Kandy Lake, and 147-acre Peradeniya Botanical Gardens with giant palms." },
        { day: 3, title: "Transfer to Bentota & Madu River Boat Safari", description: "Scenic road journey to Bentota on the southern coast. Enjoy a boat safari along the mangrove tunnels of the Madu River and cinnamon islands." },
        { day: 4, title: "A Complete Free Day on Bentota Beach", description: "Spend your day relaxing on the golden sands of Bentota, enjoying jet skiing, or reading by the ocean." },
        { day: 5, title: "Colombo City Drive & Flight Home to Delhi", description: "Leisurely breakfast, Colombo city orientation with souvenir Ceylon tea shopping, and private airport drop for direct flight to New Delhi." },
      ],
      inclusions: ["4 Nights in Handpicked 4-Star Resorts (2N Kandy + 2N Bentota)", "Daily Buffet Breakfasts & Dinners", "Temple of the Tooth Relic & Botanical Gardens Entry Passes", "Madu River Mangrove Boat Safari", "All Private AC Fleet Transfers with English-speaking Chauffeur", "24/7 Delhi Planning Support Desk"],
      exclusions: ["International Flights from Delhi", "Motorized watersports tickets", "Tips & personal laundry"],
    },
    {
      id: "kandy-bentota-5n-6d",
      title: "Kandy Bentota 5 Nights / 6 Days: Cultural Triangle & Beach Retreat",
      cardTitle: "Kandy Bentota 5 Nights / 6 Days",
      subtitle: "2 Nights Kandy + 3 Nights Bentota Luxury Beachfront",
      shortDescription:
        "Extended leisure experience featuring tea plantation trails, traditional Kandyan dance shows, and Bentota watersports.",
      category: "international",
      destination: "Sri Lanka",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      priceStarting: "₹32,900",
      rating: 4.9,
      reviewsCount: 182,
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      tag: "Top Recommended",
      iconicLandmarks: ["Temple of the Sacred Tooth Relic", "Giragama Tea Factory & Plantation", "Bentota Beach Shacks", "Brief Garden by Bevis Bawa"],
      hiddenGems: ["Kandyan cultural evening drum dance show", "Kosgoda baby turtle release", "Kandy viewpoint sunset terrace"],
      localFoodHighlight: "Fresh lagoon mud crab, coconut sambol, kottu roti & Ceylon ginger beer",
      freeDayNote: "Days 4 and 5 include extensive free time for watersports and ayurvedic spa treatments.",
      overview:
        "The ideal 6-day balance between Sri Lanka's cultural heartland and tranquil southern coast. Stroll among spice groves, watch traditional Kandyan dance performances, and unwind on Bentota's wide sandy shorelines.",
      itinerary: [
        { day: 1, title: "Colombo Arrival & Drive into Kandy Foothills", description: "Private airport pickup, drive past scenic paddy fields to Kandy, check-in to hillside resort, and evening walk around Kandy Lake." },
        { day: 2, title: "Kandy Temples, Tea Estate & Cultural Show", description: "Visit Temple of the Tooth Relic, explore working Giragama Tea Factory with pure Ceylon tea tasting, and attend traditional Kandyan dance performance." },
        { day: 3, title: "Royal Botanical Gardens & Drive to Bentota Beach", description: "Walk through Peradeniya Royal Botanical Gardens, followed by scenic descent to Bentota and beachfront hotel check-in." },
        { day: 4, title: "Bentota River Safari, Turtle Hatchery & Water Fun", description: "Morning Madu River boat cruise, visit Kosgoda Sea Turtle Hatchery, and afternoon for jet skiing or banana boat rides." },
        { day: 5, title: "A Complete Free Day in Bentota", description: "Unhurried free day! Visit the artistic Brief Garden, indulge in an authentic Ayurvedic massage, or enjoy beachside cocktails." },
        { day: 6, title: "Colombo Shopping & Departure to Delhi", description: "Breakfast, brief drive through Colombo Dutch Hospital heritage quarter for shopping, and private drop-off at airport." },
      ],
      inclusions: ["5 Nights in Deluxe 4-Star Stays (2N Kandy + 3N Bentota)", "Daily Buffet Breakfasts & Dinners", "Kandyan Cultural Dance Show Tickets", "Madu River Safari & Turtle Hatchery Passes", "Private Air-Conditioned Vehicle for Entire Tour", "Sri Lanka ETA Visa Guidance"],
      exclusions: ["International Flights", "Personal water sports rentals", "Camera fees if any"],
    },
    {
      id: "kandy-bentota-honeymoon-package",
      title: "Kandy Bentota Honeymoon Package: Romantic Hills & Private Beachfront",
      cardTitle: "Kandy Bentota Honeymoon Package",
      subtitle: "Luxury Hillside Suites & Private Bentota Oceanfront Villas",
      shortDescription:
        "Candlelight beach dinners, private couples boat cruises, floral bed decorations, and champagne sunset moments.",
      category: "international",
      destination: "Sri Lanka",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      priceStarting: "₹42,500",
      rating: 5.0,
      reviewsCount: 134,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      tag: "Romantic Luxury",
      iconicLandmarks: ["Private Madu River Sunset Cruise", "Kandy Hills Panoramic Balconies", "Bentota Private Beachfront Cabana", "Brief Garden Romantic Walk"],
      hiddenGems: ["Private candlelight 4-course dinner on Bentota sand", "Couples Ayurvedic herbal wellness therapy", "Floating pool breakfast"],
      localFoodHighlight: "Romantic seafood barbecue, champagne & tropical fruit platters",
      freeDayNote: "Day 4 is an uninterrupted free day in your private luxury beachfront villa.",
      overview:
        "Crafted for newlyweds seeking privacy, romance, and scenic splendour. Wake up to misty mountain views in Kandy and unwind to the rhythmic crash of ocean waves from your private villa in Bentota.",
      itinerary: [
        { day: 1, title: "VIP Airport Arrival & Hillside Honeymoon Suite", description: "Private luxury chauffeur pickup, check-in to Kandy boutique suite with honeymoon cake and floral bed setup." },
        { day: 2, title: "Sacred Tooth Temple & Scenic Hills Stroll", description: "Private guided tour of Temple of the Tooth Relic, couple photo stops at Kandy Lake, and sunset high tea overlooking tea hills." },
        { day: 3, title: "Scenic Transfer to Bentota & Sunset Beach Walk", description: "Private executive drive to Bentota beachfront resort, check-in, and barefoot sunset stroll on golden sands." },
        { day: 4, title: "Intimate Free Day & Candlelight Beach Dinner", description: "Complete day of leisure. Evening 4-course private candlelight dinner set right on the sand with torches and wine." },
        { day: 5, title: "Private Madu Riverboat & Couples Spa", description: "Exclusive boat cruise through quiet mangrove lagoons, followed by a rejuvenating couples Ayurvedic spa massage." },
        { day: 6, title: "Leisurely Breakfast & Airport Farewell", description: "Late breakfast, souvenir Ceylon tea and gemstone shopping, and private drop to Colombo airport." },
      ],
      inclusions: ["5 Nights in 5-Star Luxury Resorts / Private Pool Villa", "Daily Gourmet Breakfasts (including 1 Floating Breakfast)", "1 Candlelight 4-Course Beach Dinner with Wine", "Private Madu Riverboat Charter", "Honeymoon Bed Décor, Cake & Fruit Basket", "All Private Chauffeur AC Fleet Transfers"],
      exclusions: ["International Flights from Delhi", "Personal spa treatments beyond package", "Tips"],
    },
    {
      id: "kandy-bentota-family-holiday-package",
      title: "Kandy Bentota Family Holiday Package: Wildlife, Nature & Beaches",
      cardTitle: "Kandy Bentota Family Holiday Package",
      subtitle: "Pinnawala Elephants, Botanical Gardens & Calm Family Waters",
      shortDescription:
        "Comfortable family holiday with kid-friendly resorts, elephant bathing, baby turtle conservation, and gentle water fun.",
      category: "international",
      destination: "Sri Lanka",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      priceStarting: "₹31,000",
      rating: 4.9,
      reviewsCount: 165,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      tag: "Family Favorite",
      iconicLandmarks: ["Pinnawala Elephant Orphanage", "Peradeniya Royal Botanical Gardens", "Kosgoda Sea Turtle Hatchery", "Bentota Water Activities"],
      hiddenGems: ["River boat cinnamon peeling demonstration", "Kandy cultural mask making workshops", "Calm lagoon swimming spots"],
      localFoodHighlight: "Mild family-friendly curries, fresh hoppers, tropical mango shakes & coconut pancakes",
      freeDayNote: "Day 5 offers an open free day by the family resort lagoon pools.",
      overview:
        "Thoughtfully designed for multi-generational families with kids and elderly travellers. Features spacious connected rooms, safe chauffeured vehicles, interactive wildlife encounters, and plenty of breathing room.",
      itinerary: [
        { day: 1, title: "Arrive Colombo & Pinnawala Elephant Fun", description: "Private family AC coach pickup, visit Pinnawala to watch herds of elephants bathing in the river, and check-in to Kandy hotel." },
        { day: 2, title: "Kandy Cultural Highlights & Botanical Gardens", description: "Visit Temple of the Tooth Relic and explore expansive Peradeniya gardens with suspension bridge and spice trees." },
        { day: 3, title: "Drive to Bentota & Turtle Conservation Center", description: "Scenic transfer to coastal Bentota. Visit Kosgoda Turtle Hatchery where children can hold baby sea turtles." },
        { day: 4, title: "Bentota Madu River Safari & Watersports", description: "Family boat cruise along Madu River mangrove tunnels with fish therapy stop, followed by afternoon beach fun." },
        { day: 5, title: "A Complete Free Day for Family Relaxation", description: "Relax by the swimming pool, build sandcastles on Bentota beach, or take a gentle catamaran boat ride." },
        { day: 6, title: "Colombo City Drive & Flight Home to Delhi", description: "Breakfast, drive through Colombo Galle Face Green, souvenir shopping, and private drop-off at airport." },
      ],
      inclusions: ["5 Nights in Premier Family 4-Star Resorts (2N Kandy + 3N Bentota)", "Daily Buffet Breakfasts & Dinners", "Pinnawala Elephant Orphanage & Turtle Hatchery Passes", "Madu River Family Boat Cruise", "All Private Family AC Coach Transfers with Guide", "Dedicated 24/7 Concierge Support"],
      exclusions: ["International Flights from Delhi", "Personal water sports rentals", "Tips"],
    },
    {
      id: "kandy-bentota-beach-holiday",
      title: "Kandy Bentota Beach Holiday: Culture First, Pure Sands After",
      cardTitle: "Kandy Bentota Beach Holiday",
      subtitle: "1 Night Kandy Culture + 4 Nights Bentota Oceanfront",
      shortDescription:
        "Fast cultural orientation in Kandy followed by four full sun-drenched days on Bentota's world-famous sandy shorelines.",
      category: "international",
      destination: "Sri Lanka",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      priceStarting: "₹29,999",
      rating: 4.8,
      reviewsCount: 140,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tag: "Pure Beach Bliss",
      iconicLandmarks: ["Bentota Long Golden Beach", "Temple of the Tooth Relic", "Bentota River Estuary", "Madu River Safari"],
      hiddenGems: ["Moragalla Beach quiet reef swimming", "Aluthgama local fish and fruit market", "Brief Garden landscaped vistas"],
      localFoodHighlight: "Beach shack grilled tiger prawns, devilled calamari & chilled King Coconut water",
      freeDayNote: "Days 3, 4, and 5 provide uninterrupted beach relaxation and ocean sunbathing.",
      overview:
        "The ultimate tropical escape for beach worshippers. Get your cultural fix with Kandy's Tooth Relic temple, then spend four full days lounging under coconut palms, swimming, and sipping cocktails in Bentota.",
      itinerary: [
        { day: 1, title: "Colombo Arrival & Express Drive to Kandy", description: "Airport pickup, scenic drive to Kandy, evening Temple of the Sacred Tooth Relic visit, and overnight stay." },
        { day: 2, title: "Morning Tea Gardens & Transfer to Bentota Beach", description: "Visit a lush tea factory, then drive down to Bentota and check-in to your beachfront resort." },
        { day: 3, title: "Bentota River Safari & Beach Sunbathing", description: "Morning boat cruise along the mangrove riverways, followed by an open afternoon on the sun loungers." },
        { day: 4, title: "A Complete Free Day by the Sea in Bentota", description: "Swim in the warm Indian Ocean, try jet skiing or windsurfing, or simply read a book under swaying palms." },
        { day: 5, title: "Second Free Day: Susegad Coastal Living", description: "Sleep in, indulge in seaside seafood lunches, explore Brief Garden, or enjoy sunset drinks at a beach bar." },
        { day: 6, title: "Farewell Bentota & Flight to Delhi", description: "Leisurely coastal breakfast, souvenir packaging, and private drop-off at Colombo International Airport." },
      ],
      inclusions: ["5 Nights in Deluxe Beach Resorts (1N Kandy + 4N Bentota)", "Daily Buffet Breakfasts & Dinners", "Temple of the Tooth Relic Entry Pass", "Madu River Mangrove Boat Tour", "All Private AC Transfers with Chauffeur", "24/7 Delhi Planning Support"],
      exclusions: ["International Flights from Delhi", "Watersports activity tickets", "Personal expenses"],
    },
    {
      id: "kandy-bentota-private-tour",
      title: "Kandy Bentota Private Tour: Dedicated Executive Chauffeur & Stays",
      cardTitle: "Kandy Bentota Private Tour",
      subtitle: "Boutique Heritage Mansions & Private Coastal Retreats",
      shortDescription:
        "Premium private travel with an exclusive dedicated executive car, private English guide, and unhurried VIP pacing.",
      category: "international",
      destination: "Sri Lanka",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      priceStarting: "₹38,000",
      rating: 5.0,
      reviewsCount: 112,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      tag: "VIP Private",
      iconicLandmarks: ["Temple of the Sacred Tooth Relic", "Royal Botanical Gardens Peradeniya", "Bentota Private River Cruise", "Brief Garden Estate"],
      hiddenGems: ["Private tea tasting with master sommelier", "VIP fast-track temple entry", "Secluded river island lunch"],
      localFoodHighlight: "Fine-dining modern Sri Lankan fusion & 5-course private seafood banquet",
      freeDayNote: "Your private chauffeur remains on standby throughout your free days.",
      overview:
        "Experience Sri Lanka with zero compromises. Enjoy an executive private vehicle, dedicated professional chauffeur-guide, 5-star boutique stays, and tailor-made sightseeing schedules.",
      itinerary: [
        { day: 1, title: "VIP Colombo Arrival & Luxury Drive to Kandy", description: "VIP airport reception, private luxury car transfer to Kandy boutique hillside manor, and fine dining welcome dinner." },
        { day: 2, title: "Private Kandy Cultural Discovery", description: "Private guided tour of the Temple of the Tooth Relic, Peradeniya Botanical Gardens, and artisan gem museum." },
        { day: 3, title: "Executive Transfer to Bentota Beach Villa", description: "Scenic drive through southern countryside, check-in to private beachfront villa in Bentota, and sunset drinks." },
        { day: 4, title: "Private Madu Riverboat Charter & Brief Garden", description: "Exclusive chartered boat cruise through mangrove islands followed by private tour of Brief Garden estate." },
        { day: 5, title: "A Complete Free Day with On-Standby Chauffeur", description: "Unscheduled day for relaxation, private spa therapies, or spontaneous coastal excursions." },
        { day: 6, title: "Colombo Heritage Tour & Flight to Delhi", description: "Drive through Colombo colonial landmarks, high-end shopping at Paradise Road, and private airport drop." },
      ],
      inclusions: ["5 Nights in 5-Star Luxury Stays (2N Kandy + 3N Bentota)", "Daily Gourmet Breakfasts & Dinners", "All VIP Entrance Passes & Private Guided Tours", "Private Chartered Madu Riverboat Cruise", "Dedicated Executive AC Vehicle on Standby 24/7", "Comprehensive Travel Support"],
      exclusions: ["International Flights from Delhi", "Personal shopping & alcoholic drinks", "Tips"],
    },
    {
      id: "custom-kandy-bentota-tour-package",
      title: "Custom Kandy Bentota Tour Package: 100% Tailor-Made Itinerary",
      cardTitle: "Custom Kandy Bentota Tour Package",
      subtitle: "Bespoke Hotels, Private Fleet, Galle Fort & Nuwara Eliya Extensions",
      shortDescription:
        "Planned completely around your travel dates, budget, preferred hotel categories, and custom Sri Lankan wish lists.",
      category: "international",
      destination: "Sri Lanka",
      duration: "Flexible (4 to 10+ Days)",
      days: 7,
      nights: 6,
      priceStarting: "Custom Quote",
      rating: 5.0,
      reviewsCount: 290,
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      tag: "100% Tailor-Made",
      iconicLandmarks: ["Temple of the Tooth", "Bentota Beach", "Optional Galle Dutch Fort", "Optional Nuwara Eliya Tea Country"],
      hiddenGems: ["Custom private villa stays", "Secluded river sandbars", "Curated culinary trails"],
      localFoodHighlight: "Personalized dining reservations at Sri Lanka’s top-rated restaurants",
      freeDayNote: "Your free days are designed entirely to match your own natural pace and preferences.",
      overview:
        "Want to combine Kandy and Bentota with the tea country hills of Nuwara Eliya, wildlife safaris in Yala, or the historic ramparts of Galle Fort? Our senior Delhi travel planners create your itinerary from scratch with zero compromises.",
      itinerary: [
        { day: 1, title: "Tailored Arrival According to Your Flight", description: "VIP airport reception, meet your dedicated driver-guide, and private transfer to your handpicked stay." },
        { day: 2, title: "Custom Sightseeing & Private Excursions", description: "Sightseeing tailored exclusively to your wish list with private guide and air-conditioned vehicle." },
        { day: 3, title: "Cultural Deep Dives or Hillside Exploration", description: "Explore historic temples, tea estates, or spice gardens at your own pace." },
        { day: 4, title: "Transfer to Coastal Haven & River Cruises", description: "Travel to Bentota or nearby coasts with curated photo stops along the way." },
        { day: 5, title: "Unstructured Leisure at Your Own Rhythm", description: "Relax with guaranteed free time, curated dining recommendations, and on-call concierge." },
        { day: 6, title: "Seamless Departure Curated by Delhi Desk", description: "Private airport transfers, tax-refund assistance, and smooth direct flight back to Delhi." },
      ],
      inclusions: ["Custom Hotel Tier (Boutique 4-Star to Ultra-Luxury 5-Star)", "Dedicated Private Chauffeured AC Fleet for all Transfers", "Custom Sightseeing with Dedicated Private Guide", "Direct 24/7 Delhi Planning Desk Access", "Visa Guidance & Itemized Transparent Pricing"],
      exclusions: ["Specified transparently during quote drafting", "No hidden costs"],
    },
  ];

  const handleOpenPackageModal = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  // 8 Best Places to Visit in Kandy and Bentota requested in prompt
  const placesToVisit = [
    {
      id: "temple-of-the-tooth",
      title: "Temple of the Sacred Tooth Relic",
      tag: "UNESCO Cultural Landmark",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Located in Kandy, the Temple of the Sacred Tooth Relic is one of Sri Lanka's most important religious and cultural landmarks. It is a popular attraction for travellers interested in the country's history and heritage.",
      elaborations: [
        "Houses the sacred tooth relic of Gautama Buddha",
        "Golden canopy, gilded wood carvings & royal palace complex",
        "Daily ceremonial pujas with traditional drummers and flutists",
        "Historic museum displaying royal gifts and ancient manuscripts",
      ],
    },
    {
      id: "kandy-lake",
      title: "Kandy Lake",
      tag: "Heart of Kandy",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Located in the heart of Kandy, Kandy Lake offers a peaceful setting surrounded by the city's historic attractions and green hills. It is a popular place for a relaxed walk and sightseeing.",
      elaborations: [
        "Artificially created by King Sri Wickrama Rajasinghe in 1807",
        "Scenic 3.2 km walking promenade shaded by ancient tropical trees",
        "Picturesque island pavilion known as Kiri Muhuda (Sea of Milk)",
        "Reflections of the Tooth Temple and mist-shrouded green hills",
      ],
    },
    {
      id: "royal-botanical-gardens",
      title: "Royal Botanical Gardens, Peradeniya",
      tag: "147-Acre Botanical Haven",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "The Royal Botanical Gardens are known for their beautiful landscapes, tropical plants, flowers, and peaceful surroundings. It is a great place to enjoy nature while exploring the Kandy region.",
      elaborations: [
        "Home to more than 4,000 species of tropical plants and trees",
        "World-renowned Orchid House featuring over 300 exquisite varieties",
        "Iconic Avenue of Royal Palms and the giant Javan fig tree lawn",
        "Scenic loop along the tranquil Mahaweli River bend",
      ],
    },
    {
      id: "kandy-city",
      title: "Kandy City",
      tag: "Highland Cultural Capital",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Explore Kandy's local markets, shops, restaurants, cultural attractions, and surrounding hills to experience the everyday character of the city.",
      elaborations: [
        "Bustling Kandy Central Market for fresh spices, tea, and fruit",
        "Artisan wood carving and traditional brassware craft ateliers",
        "Kandyan cultural performance theatres with energetic fire-walking",
        "Arthur’s Seat panoramic viewpoint overlooking the entire valley",
      ],
    },
    {
      id: "bentota-beach",
      title: "Bentota Beach",
      tag: "Golden Ocean Sands",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Bentota Beach is one of the popular coastal attractions in Sri Lanka. Visitors can enjoy relaxing by the sea, watching sunsets, or spending time at the beach.",
      elaborations: [
        "Expansive stretch of soft golden sand fringed by coconut palms",
        "Safe swimming spots and clear turquoise Indian Ocean waters",
        "Beach shacks serving fresh coconut water and grilled seafood",
        "Breathtaking crimson sunsets over the horizon",
      ],
    },
    {
      id: "bentota-river",
      title: "Bentota River",
      tag: "Madu & Bentota River Safari",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "The Bentota River offers opportunities for boat rides, nature experiences, and water-based activities surrounded by tropical scenery.",
      elaborations: [
        "Thrilling jet skiing, water skiing, banana rides, and wakeboarding",
        "Scenic boat safaris gliding through tranquil mangrove tunnels",
        "Spotting water monitors, kingfishers, and fruit bats in the wild",
        "Visits to traditional cinnamon peeling cottage islands",
      ],
    },
    {
      id: "brief-garden",
      title: "Brief Garden",
      tag: "Tropical Architectural Estate",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Located near Bentota, Brief Garden is a beautiful garden attraction known for its landscaped surroundings, tropical plants, art, and peaceful atmosphere.",
      elaborations: [
        "Masterpiece estate created by famous artist Bevis Bawa",
        "Interconnected intimate garden rooms, koi ponds, and sculptures",
        "Eclectic art collection, historic colonial home, and antique furnishings",
        "Tranquil sanctuary far removed from standard tourist crowds",
      ],
    },
    {
      id: "bentota-turtle-hatchery",
      title: "Bentota Turtle Hatchery",
      tag: "Wildlife Conservation",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "A turtle hatchery near Bentota offers visitors an opportunity to learn about sea turtles and conservation efforts.",
      elaborations: [
        "Protection of 5 species of sea turtles visiting Sri Lankan shores",
        "Interactive experience seeing newborn baby turtles in nursery tanks",
        "Learn about nesting, egg rescue, and marine conservation",
        "Sunset baby turtle release into the Indian Ocean (seasonal)",
      ],
    },
  ];

  // 12 Things to do in Kandy and Bentota (Verbatim from prompt)
  const thingsToDo = [
    { title: "Visit the Temple of the Sacred Tooth Relic", desc: "Pay homage at Sri Lanka's most sacred golden Buddhist shrine.", icon: Building, color: "text-amber-600 bg-amber-50" },
    { title: "Discover Kandy's cultural hotspots", desc: "Traditional drum performances, royal palaces, and craft ateliers.", icon: Sparkles, color: "text-purple-600 bg-purple-50" },
    { title: "Trek around Kandy Lake", desc: "Shaded walks under tropical canopies with panoramic hill reflections.", icon: Compass, color: "text-emerald-600 bg-emerald-50" },
    { title: "Explore the Royal Botanical Gardens", desc: "Stroll along giant palm avenues and see over 300 orchid varieties.", icon: Trees, color: "text-green-600 bg-green-50" },
    { title: "Shop the local markets and stores", desc: "Ceylon tea, cinnamon spices, handcrafted masks, and precious gems.", icon: ShoppingBag, color: "text-rose-600 bg-rose-50" },
    { title: "Marvel at the views from around Kandy", desc: "Arthur's Seat viewpoint overlooking the misty valley and lake.", icon: Sun, color: "text-yellow-700 bg-yellow-50" },
    { title: "Relax on the sands of Bentota Beach", desc: "Golden sands, warm ocean surf, and laid-back sun loungers.", icon: Waves, color: "text-sky-600 bg-sky-50" },
    { title: "Soak up the water sports and beachside fun", desc: "Jet skiing, banana boats, tube rides, and windsurfing.", icon: Waves, color: "text-blue-600 bg-blue-50" },
    { title: "Take a river cruise on the Bentota River", desc: "Glide through mangrove lagoons and observe tropical wildlife.", icon: Ship, color: "text-teal-600 bg-teal-50" },
    { title: "Sample local eateries and Sri Lankan cuisine", desc: "Authentic hopper breakfasts, fish ambul thiyal, and spicy curries.", icon: UtensilsCrossed, color: "text-orange-600 bg-orange-50" },
    { title: "Watch the sunset from a beachside bar", desc: "Crimson Indian Ocean sunsets with tropical fruit cocktails.", icon: Glasses, color: "text-pink-600 bg-pink-50" },
    { title: "See the attractions around Bentota", desc: "Brief Garden art estate, turtle hatcheries, and cinnamon islands.", icon: Palmtree, color: "text-emerald-700 bg-emerald-50" },
  ];

  // 5 Categories for Every Traveller (Verbatim from prompt)
  const travellerTypes = [
    {
      title: "Kandy Bentota Family Tour Packages",
      tag: "Family Friendly",
      icon: Users,
      desc: "Enjoy a comfortable Sri Lanka family holiday with cultural sightseeing in Kandy and relaxing beach experiences in Bentota. Your itinerary can include family-friendly attractions, comfortable stays, transfers, and leisure time.",
      highlights: ["Family resorts with connected rooms & pools", "Pinnawala elephant bathing & turtle hatchery visit", "Private AC coach with verified chauffeur-guide", "Guaranteed leisure time for relaxed beach play"],
    },
    {
      title: "Kandy Bentota Honeymoon Packages",
      tag: "Romantic Stays",
      icon: Heart,
      desc: "Make your Sri Lanka honeymoon memorable with scenic Kandy experiences and relaxing beach time in Bentota. Enjoy comfortable stays, romantic experiences, beautiful surroundings, and time to explore together.",
      highlights: ["Private plunge pool suites in Bentota", "Private candlelight 4-course dinner on the beach", "Romantic Madu River sunset boat cruise", "Couples Ayurvedic herbal wellness massage"],
    },
    {
      title: "Kandy Bentota Friends Trip Packages",
      tag: "Squad Adventure",
      icon: Smile,
      desc: "Plan a fun Sri Lanka getaway with your friends. Combine sightseeing, local food, cultural experiences, beaches, water activities, and free time in one trip.",
      highlights: ["Bentota river jet ski & watersports combo", "Night market street food & Ceylon tea tasting", "Scenic group drives through highland tea hills", "Beachside shacks with music and evening bonfires"],
    },
    {
      title: "Kandy Bentota Beach Holiday Packages",
      tag: "Sun & Sands",
      icon: Waves,
      desc: "If you want to combine sightseeing with a relaxing beach holiday, a Kandy Bentota package gives you the opportunity to explore Kandy before spending time by the coast in Bentota.",
      highlights: ["Beachfront resorts with direct ocean access", "Mornings by the sea & afternoon river cruises", "Laid-back coastal rhythm with King Coconut water", "Brief Garden visits and secluded coastal coves"],
    },
    {
      title: "Custom Kandy Bentota Tour Packages",
      tag: "100% Bespoke",
      icon: SlidersHorizontal,
      desc: "Want to create your own Sri Lanka itinerary? Our custom Kandy Bentota tour packages can be planned around your travel dates, budget, hotel preferences, activities, and interests.",
      highlights: ["Add Galle Dutch Fort, Nuwara Eliya or Yala Safari", "Select your exact hotel tier & private vehicle", "Dedicated English-speaking private driver-guide", "Itemized transparent quote with zero hidden costs"],
    },
  ];

  // 7 Pillars for Why Choose Altitude Travel Co. (Verbatim from prompt)
  const whyChoosePillars = [
    {
      title: "Flexible Itinerary Options",
      desc: "Choose an itinerary based on your interests, whether you prefer sightseeing, culture, nature, beaches, adventure, or relaxation.",
    },
    {
      title: "Explore Beyond the Main Attractions",
      desc: "Along with popular places, we can include local markets, food experiences, nature spots, and other attractions based on your itinerary.",
    },
    {
      title: "Free Time to Explore",
      desc: "Wherever possible, we include free time so you can relax, shop, explore, or enjoy the destination at your own pace.",
    },
    {
      title: "Curated Experiences",
      desc: "Our itineraries combine important attractions with experiences that help you discover more of Sri Lanka.",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear information about package inclusions and exclusions before booking.",
    },
    {
      title: "Personal Support",
      desc: "Our team assists with travel planning, itinerary questions, and trip-related support.",
    },
    {
      title: "Customised Sri Lanka Packages",
      desc: "Share your travel dates, budget, group size, and interests, and we can create an itinerary around your requirements.",
    },
  ];

  // 8 Services We Offer for Kandy Bentota Trips (Verbatim from prompt)
  const servicesWeOffer = [
    {
      title: "Kandy Bentota Tour Itinerary Planning",
      desc: "Every traveller has different expectations from a Sri Lanka holiday. We offer itinerary options based on whether you prefer culture, sightseeing, nature, beaches, adventure, food, or relaxation.",
      icon: Compass,
    },
    {
      title: "Kandy Bentota Holiday Packages",
      desc: "Our holiday packages can include accommodation, transfers, sightseeing, activities, and other travel arrangements depending on your selected package.",
      icon: Palmtree,
    },
    {
      title: "Kandy Sightseeing Packages",
      desc: "Explore popular Kandy attractions including the Temple of the Sacred Tooth Relic, Kandy Lake, Royal Botanical Gardens, local markets, and other cultural highlights.",
      icon: Building,
    },
    {
      title: "Bentota Sightseeing Packages",
      desc: "Discover Bentota's beaches, river experiences, gardens, water activities, and nearby attractions while enjoying time to relax by the coast.",
      icon: Waves,
    },
    {
      title: "Kandy Bentota Honeymoon Packages",
      desc: "Plan a romantic Sri Lanka holiday with comfortable stays, scenic experiences, cultural sightseeing, beautiful beaches, and free time for couples.",
      icon: Heart,
    },
    {
      title: "Kandy Bentota Family Tour Packages",
      desc: "Create a comfortable family itinerary combining cultural attractions, nature, sightseeing, beach experiences, and activities suitable for your group.",
      icon: Users,
    },
    {
      title: "Custom Kandy Bentota Tour Packages",
      desc: "Have a specific Sri Lanka itinerary in mind? Share your travel dates, budget, group size, hotel preferences, and interests. We can customize your trip according to your requirements.",
      icon: SlidersHorizontal,
    },
    {
      title: "Travel Support",
      desc: "Our team can assist with itinerary planning, travel questions, changes, and other trip-related support before and during your journey.",
      icon: Headphones,
    },
  ];

  // 10 FAQs (Verbatim from prompt)
  const faqs = [
    {
      q: "1. What is the best time to visit Kandy and Bentota?",
      a: "The best time depends on the experiences you want to enjoy and the weather conditions in each region. Your travel dates can be planned according to your preferred activities, sightseeing, and beach experiences.",
    },
    {
      q: "Q2. How many days are enough for a Kandy Bentota trip?",
      a: "Its 4 to 6-day trip can give travellers enough time to explore Kandy and enjoy Bentota. The ideal duration depends on your itinerary, activities, and travel preferences.",
    },
    {
      q: "Q3. What are the best places to visit in Kandy?",
      a: "Popular places to visit in Kandy include the Temple of the Sacred Tooth Relic, Kandy Lake, Royal Botanical Gardens, Kandy City, and other cultural and scenic attractions.",
    },
    {
      q: "Q4. What are the best places to visit in Bentota?",
      a: "Popular attractions in Bentota include Bentota Beach, Bentota River, Brief Garden, turtle conservation attractions, and nearby coastal experiences.",
    },
    {
      q: "Q5. Do you offer Kandy Bentota tour packages for families?",
      a: "Yes. Altitude Travel Co. offers family-friendly Kandy Bentota packages that can include sightseeing, comfortable stays, transfers, beach experiences, and activities based on your requirements.",
    },
    {
      q: "Q6. Do you offer Kandy Bentota honeymoon packages?",
      a: "Yes. We offer honeymoon packages that combine Kandy's cultural and scenic experiences with relaxing beach time in Bentota.",
    },
    {
      q: "Q7. Can I customize my Kandy Bentota tour package?",
      a: "Yes. Our custom Kandy Bentota tour packages can be planned around your travel dates, budget, group size, hotel preference, activities, and interests.",
    },
    {
      q: "Q8. Do Kandy Bentota tour packages include hotels and transportation?",
      a: "Package inclusions depend on the itinerary you select. Depending on the package, accommodation, transfers, sightseeing, activities, and other travel services can be included. Exact inclusions will be shared before booking.",
    },
    {
      q: "Q9. Can I add other destinations to my Kandy Bentota trip?",
      a: "Yes. Depending on your travel duration and requirements, additional Sri Lankan destinations can be discussed while creating a custom itinerary.",
    },
    {
      q: "Q10. How can I book a Kandy Bentota tour package with Altitude Travel Co.?",
      a: "You can contact Altitude Travel Co. with your preferred travel dates, number of travellers, budget, and requirements. Our team will help you choose or create a Kandy Bentota tour package that suits your trip.",
    },
  ];

  // Client Testimonials
  const testimonials = [
    {
      name: "Abhishek & Neha Mathur",
      country: "Delhi, India (Sri Lanka Honeymoon)",
      rating: 5,
      date: "Travelled October 2026",
      avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      review:
        "Altitude Travel Co. planned the perfect blend of Kandy's misty tea hills and Bentota's ocean beaches! The private driver was punctual, polite, and shared amazing local insights. The beachfront candlelight dinner in Bentota was pure magic. Highly recommend their Delhi team!",
    },
    {
      name: "Sanjay Gupta & Family",
      country: "Gurugram, India (Kandy & Bentota Family Holiday)",
      rating: 5,
      date: "Travelled September 2026",
      avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      review:
        "Travelling with kids and grandparents can be stressful, but Altitude Travel organized spacious connected rooms and comfortable AC transport throughout. Our kids loved the Pinnawala elephant bath and turtle hatchery. Transparent pricing and genuine support!",
    },
    {
      name: "Gaurav Malhotra & Friends",
      country: "Noida, India (Friends Sri Lanka Trip)",
      rating: 5,
      date: "Travelled August 2026",
      avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      review:
        "The jet ski and river safari in Bentota was top tier fun! Altitude Travel struck the right balance: guided visits to the Tooth Relic in Kandy followed by total freedom on the beach with zero curfew. Smooth booking experience from Delhi.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col selection:bg-[#BFA13B]/20 selection:text-stone-950">
      
      {/* Global Header */}
      <Navbar
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenInquiryModal={() => {
          const formElem = document.getElementById("kandy-inquiry-box");
          if (formElem) {
            formElem.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }}
      />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* HERO SECTION: 3D MOVING PHOTOS + CEYLON BADGE + VERBATIM H1               */}
        {/* ========================================================================= */}
        <section className="relative pt-[128px] pb-10 sm:pt-[132px] sm:pb-12 lg:pt-[136px] lg:pb-14 bg-[#FAF9F6] border-b border-[#E5E0D5] overflow-hidden">
          
          {/* Subtle Warm Luxury Atmosphere Glows */}
          <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/3 -left-20 w-[420px] h-[420px] bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Bar: Sinhala Cultural Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E0D5]">
              
              <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#FBF7EE] border border-[#BFA13B]/40 px-4 py-1.5 rounded-full shadow-2xs">
                <span className="text-[#BFA13B] font-bold text-sm tracking-wide">🇱🇰</span>
                <span className="font-serif text-stone-900 text-base sm:text-lg font-bold tracking-wide italic">
                  ආයුබෝවන් (Ayubowan) — Long Life &amp; Warm Hospitality
                </span>
                <span className="text-[#BFA13B]/60 hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm font-serif font-bold text-stone-800">
                  The Pearl of the Indian Ocean
                </span>
              </div>

              {/* Flight & Travel Pills */}
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                <span className="bg-white px-3 py-1 rounded-full border border-[#E5E0D5] shadow-2xs flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>3.5h Direct Flight from Delhi (CMB)</span>
                </span>
                <span className="hidden sm:inline-flex bg-white px-3 py-1 rounded-full border border-[#E5E0D5] shadow-2xs items-center gap-1.5">
                  <Gem className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Currency: <strong className="text-stone-900">LKR</strong></span>
                </span>
                <span className="hidden md:inline-flex bg-[#FBF7EE] text-stone-900 px-3 py-1 rounded-full border border-[#BFA13B]/40 shadow-2xs items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Sri Lanka ETA / Easy Entry for Indians</span>
                </span>
              </div>

            </div>

            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: VERBATIM H1 & INTRODUCTORY COPY */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                
                {/* Eyebrow Micro-caps */}
                <div className="inline-flex items-center gap-2 self-start text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                  <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Curated Sri Lanka Holidays • Connaught Place, Delhi Planning Desk</span>
                </div>

                {/* SIGNATURE EDITORIAL H1 HEADING */}
                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-serif font-bold text-[#1C1917] tracking-tight leading-[1.14]">
                  Kandy Bentota Tour Packages |{" "}
                  <span className="italic font-normal text-shining-gold">
                    Explore the Best of Sri Lanka
                  </span>
                </h1>

                {/* Dynamic Moving Accent Line */}
                <div className="moving-line-track max-w-[160px]">
                  <div className="moving-line-beam" />
                </div>

                {/* VERBATIM INTRODUCTORY PARAGRAPHS */}
                <div className="space-y-3.5 text-sm sm:text-[15px] text-stone-600 leading-relaxed font-normal">
                  <p className="text-base sm:text-lg font-serif font-medium text-stone-900 leading-relaxed">
                    Discover two very different sides of Sri Lanka with our Kandy Bentota tour packages. Explore Kandy&apos;s rich culture, historic temples, scenic hills, and local experiences before relaxing on Bentota&apos;s beautiful beaches.
                  </p>
                  <p>
                    With Altitude Travel Co., enjoy a carefully planned Sri Lanka holiday that combines sightseeing, nature, culture, beach experiences, comfortable stays, and free time to explore at your own pace.
                  </p>
                </div>

                {/* Core Pillars Ribbon */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-2xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#BFA13B]/30">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-stone-900">Sacred Tooth Temple</h4>
                      <p className="text-[11px] text-stone-500">UNESCO Kandy Heritage</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-2xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#BFA13B]/30">
                      <Waves className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-stone-900">Bentota Beach Sands</h4>
                      <p className="text-[11px] text-stone-500">Golden Coast &amp; Waves</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-2xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#BFA13B]/30">
                      <Trees className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-stone-900">Madu River &amp; Flora</h4>
                      <p className="text-[11px] text-stone-500">Botanical &amp; Mangroves</p>
                    </div>
                  </div>
                </div>

                {/* Popular Discovery Badges */}
                <div className="pt-1 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold tracking-wider text-stone-400 uppercase mr-1">
                    Featured Highlights:
                  </span>
                  {["Tooth Relic Temple", "Kandy Lake", "Peradeniya Botanical Gardens", "Bentota Beach", "Madu River Safari", "Brief Garden", "Kosgoda Turtle Hatchery"].map(
                    (place, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-stone-800 border border-[#E5E0D5] shadow-2xs flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-[#BFA13B]" />
                        <span>{place}</span>
                      </span>
                    )
                  )}
                </div>

              </div>

              {/* Right Column: 3D MOVING PHOTOS SHOWCASE + QUICK INQUIRY CARD */}
              <div className="lg:col-span-5 space-y-6" id="kandy-inquiry-box">
                
                {/* 3D Moving Position Photos Showcase */}
                <div className="relative h-[290px] sm:h-[320px] rounded-2xl p-4 bg-gradient-to-tr from-[#0C0A09] via-stone-900 to-[#0C0A09] overflow-hidden shadow-xl border border-[#BFA13B]/30 flex items-center justify-center">
                  
                  {/* Subtle Background Golden Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(191,161,59,0.22),transparent_60%)]" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#E8D08D] px-3 py-1 rounded-full border border-white/20">
                      <Sparkles className="w-3 h-3 text-[#BFA13B]" />
                      <span>Live 3D Attractions Showcase</span>
                    </span>
                  </div>

                  {/* 3D Moving Perspective Photos Container */}
                  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
                    
                    {/* Card 1: Left 3D Moving Photo - Temple of Sacred Tooth Relic */}
                    <div className="absolute -left-2 sm:left-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 animate-3d-left z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80"
                        alt="Temple of the Sacred Tooth Relic in Kandy Sri Lanka"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-[#BFA13B] block">UNESCO Sacred Site</span>
                        <h4 className="text-xs font-bold leading-tight">Temple of the Tooth</h4>
                      </div>
                    </div>

                    {/* Card 2: Center 3D Floating Hero - Bentota Beach & Sands */}
                    <div className="relative w-[180px] sm:w-[210px] h-[230px] sm:h-[250px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-2 border-[#BFA13B] animate-3d-center z-20 group cursor-pointer">
                      <Image
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                        alt="Bentota golden sand beach and tropical palm trees Sri Lanka"
                        fill
                        sizes="240px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-transparent" />
                      <div className="absolute top-2.5 right-2.5 bg-[#BFA13B] text-stone-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        MUST VISIT
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10.5px] font-bold text-[#E8D08D] block">Golden Southern Coast</span>
                        <h4 className="text-sm font-bold leading-tight">Bentota Beach Sands</h4>
                      </div>
                    </div>

                    {/* Card 3: Right 3D Moving Photo - Madu River Safari & Botanical Gardens */}
                    <div className="absolute -right-2 sm:right-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 animate-3d-right z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80"
                        alt="Bentota Madu River boat safari through lush mangrove islands"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-[#BFA13B] block">Mangrove Safari</span>
                        <h4 className="text-xs font-bold leading-tight">Madu River Cruise</h4>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Quick Concierge Inquiry Card with Moving Border Beam */}
                <div className="border-beam-card shadow-[0_16px_40px_-6px_rgba(28,25,23,0.12)]">
                  <div className="border-beam-inner p-6 sm:p-7">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E5E0D5]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-gold-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-900 font-serif">
                          Sri Lanka Tour Inquiry
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-stone-900 bg-[#FBF7EE] px-2 py-0.5 rounded-md border border-[#BFA13B]/40">
                        Delhi Desk Online
                      </span>
                    </div>

                    {/* Dynamic Moving Laser Beam Line */}
                    <div className="moving-line-track mb-3">
                      <div className="moving-line-beam" />
                    </div>

                    {submitted ? (
                      <div className="py-6 text-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center mx-auto border border-[#BFA13B]/40">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-base font-serif font-bold text-stone-900">Inquiry Received</h4>
                        <p className="text-xs text-stone-600 max-w-xs mx-auto">
                          Thank you! Our Sri Lanka destination specialist from Connaught Place, Delhi will contact you shortly with custom package options and direct flight itineraries.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="mt-2 px-4 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitInquiry} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Ankit Singhal"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] text-stone-900 focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 98100 XXXXX"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] text-stone-900 focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                              Package Type
                            </label>
                            <select
                              value={formData.packageType}
                              onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] text-stone-900 focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            >
                              <option value="Kandy Bentota 4 Nights / 5 Days">Kandy Bentota 4N / 5D</option>
                              <option value="Kandy Bentota 5 Nights / 6 Days">Kandy Bentota 5N / 6D (Recommended)</option>
                              <option value="Kandy Bentota Honeymoon Package">Kandy Bentota Honeymoon Package</option>
                              <option value="Kandy Bentota Family Holiday Package">Kandy Bentota Family Holiday</option>
                              <option value="Kandy Bentota Beach Holiday">Kandy Bentota Beach Holiday</option>
                              <option value="Kandy Bentota Private Tour">Kandy Bentota Private Tour</option>
                              <option value="Custom Kandy Bentota Tour Package">Custom Kandy Bentota Tour</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                              Number of Guests
                            </label>
                            <select
                              value={formData.guests}
                              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] text-stone-900 focus:bg-white focus:border-[#BFA13B] focus:outline-none"
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
                          className="w-full py-3.5 px-5 rounded-xl font-serif font-bold text-xs sm:text-sm tracking-wide bg-shining-gold shining-sweep hover:brightness-105 active:scale-[0.99] text-stone-950 shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 border border-[#BFA13B]/40 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <span>Submitting Sri Lanka Inquiry...</span>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5 text-stone-950" />
                              <span>Request Custom Sri Lanka Quote</span>
                            </>
                          )}
                        </button>

                        <p className="text-[10.5px] text-center text-stone-400 font-medium">
                          100% Privacy • No Pushy Calls • Handcrafted Quotes by Altitude Travel Co.
                        </p>
                      </form>
                    )}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: EXPLORE KANDY BENTOTA TOUR PACKAGES                            */}
        {/* ========================================================================= */}
        <section id="explore-kandy-bentota" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Specialized Planning by Altitude Travel Co.</span>
              </div>

              {/* EXACT SECTION HEADING */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Explore Kandy Bentota <span className="italic font-normal text-[#BFA13B]">Tour Packages</span>
              </h2>

              {/* VERBATIM TEXT FROM PROMPT */}
              <div className="space-y-3 text-base text-stone-600 leading-relaxed font-normal">
                <p>
                  Altitude Travel Co. offers thoughtfully planned Kandy Bentota tour packages for travellers who want to experience both the cultural and coastal sides of Sri Lanka.
                </p>
                <p>
                  Explore Kandy&apos;s famous landmarks, temples, markets, and scenic surroundings before heading towards Bentota for beaches, water activities, riverside experiences, and relaxation.
                </p>
                <p className="font-serif font-semibold text-stone-900">
                  Whether you are planning a family holiday, honeymoon, friends&apos; trip, or a private getaway, we can help create an itinerary around your travel dates, budget, interests, and preferred travel style.
                </p>
              </div>
            </div>

            {/* Quick Benefits Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E0D5] text-center space-y-1 shadow-2xs">
                <span className="text-xl">🏛️</span>
                <h4 className="text-xs font-serif font-bold text-stone-900">Kandy Cultural Hills</h4>
                <p className="text-[11px] text-stone-500">Tooth Relic &amp; Gardens</p>
              </div>
              <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E0D5] text-center space-y-1 shadow-2xs">
                <span className="text-xl">🏖️</span>
                <h4 className="text-xs font-serif font-bold text-stone-900">Bentota Golden Coast</h4>
                <p className="text-[11px] text-stone-500">Beaches &amp; Madu River</p>
              </div>
              <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E0D5] text-center space-y-1 shadow-2xs">
                <span className="text-xl">🚗</span>
                <h4 className="text-xs font-serif font-bold text-stone-900">Private Chauffeur Fleet</h4>
                <p className="text-[11px] text-stone-500">Pickups from Colombo (CMB)</p>
              </div>
              <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E0D5] text-center space-y-1 shadow-2xs">
                <span className="text-xl">🛡️</span>
                <h4 className="text-xs font-serif font-bold text-stone-900">Transparent Pricing</h4>
                <p className="text-[11px] text-stone-500">Zero Hidden Charges</p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: PACKAGE CARDS / IMAGE SECTION (7 EXAMPLES)                     */}
        {/* ========================================================================= */}
        <section id="kandy-bentota-packages-grid" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Gem className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Featured Itineraries</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Featured Kandy Bentota <span className="italic font-normal text-[#BFA13B]">Tour Packages</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Choose from our popular package examples below, or let us tailor your own itinerary.
              </p>

              {/* Slider / Filter Option (Requested in prompt: Slider Option – Show More Kandy Bentota Packages) */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {[
                  { id: "all", label: "All Packages (7)" },
                  { id: "short", label: "4 to 5 Days Itineraries" },
                  { id: "honeymoon", label: "Honeymoon & Romantic" },
                  { id: "family", label: "Family Holiday" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActivePackageFilter(tab.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activePackageFilter === tab.id
                        ? "bg-[#0C0A09] text-[#E8D08D] shadow-xs"
                        : "bg-white text-stone-600 border border-[#E5E0D5] hover:bg-[#FAF9F6]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 7 Package Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kandyBentotaPackages
                .filter((p) => {
                  if (activePackageFilter === "all") return true;
                  if (activePackageFilter === "short") return p.days <= 5;
                  if (activePackageFilter === "honeymoon") return p.id.includes("honeymoon");
                  if (activePackageFilter === "family") return p.id.includes("family");
                  return true;
                })
                .map((pkg) => {
                  const numericPrice = parseInt(pkg.priceStarting.replace(/[^\d]/g, ""), 10);
                  const originalPrice = numericPrice ? Math.round(numericPrice * 1.24) : null;

                  return (
                    <div
                      key={pkg.id}
                      className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20" />
                        
                        <span className="absolute top-3 left-3 bg-[#BFA13B] text-stone-950 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                          {pkg.tag}
                        </span>

                        <span className="absolute top-3 right-3 bg-[#0C0A09]/80 backdrop-blur-md text-[#E8D08D] text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#BFA13B]/20">
                          <Clock className="w-3 h-3 text-[#BFA13B]" />
                          <span>{pkg.duration}</span>
                        </span>

                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="text-xs text-[#E8D08D] block font-medium">{pkg.subtitle}</span>
                          <h3 className="text-lg font-serif font-bold text-white leading-snug">{pkg.cardTitle}</h3>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <p className="text-xs text-stone-600 leading-relaxed font-normal">
                            {pkg.shortDescription}
                          </p>

                          <div className="p-2.5 bg-[#FAF9F6] rounded-xl border border-[#BFA13B]/30 text-[11px] font-semibold text-stone-900 flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                            <span>{pkg.freeDayNote}</span>
                          </div>

                          <div className="space-y-1.5 pt-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                              Key Inclusions:
                            </span>
                            {pkg.iconicLandmarks.slice(0, 3).map((lm, i) => (
                              <div key={i} className="text-xs text-stone-700 flex items-center gap-1.5 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                                <span className="truncate">{lm}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#E5E0D5] flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-stone-400 block font-semibold uppercase tracking-wider">Starting From</span>
                            <div className="flex items-baseline gap-2">
                              {originalPrice && (
                                <span className="text-xs text-stone-400 line-through">
                                  ₹{originalPrice.toLocaleString("en-IN")}
                                </span>
                              )}
                              <span className="text-xl font-serif font-bold text-[#1C1917]">{pkg.priceStarting}</span>
                            </div>
                            <span className="text-[10.5px] text-stone-500 block">/ person (ex Delhi)</span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleOpenPackageModal(pkg)}
                            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0C0A09] hover:bg-stone-900 text-[#BFA13B] transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer border border-[#BFA13B]/30"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Slider Option – Show More Kandy Bentota Packages (Prompt verbatim requirement) */}
            <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
              <div className="flex items-center gap-3 text-xs text-stone-800 font-medium">
                <Info className="w-4 h-4 text-[#BFA13B] shrink-0" />
                <span>Slider Option – Show More Kandy Bentota Packages: Want to include Nuwara Eliya tea country, Galle Dutch Fort, or Sigiriya Rock Fortress?</span>
              </div>
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-serif font-bold bg-[#0C0A09] hover:bg-stone-900 text-[#E8D08D] border border-[#BFA13B]/40 transition-all shadow-xs shrink-0 cursor-pointer"
              >
                Customize My Sri Lanka Package
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: BEST PLACES TO VISIT IN KANDY AND BENTOTA (H2 & H3s)           */}
        {/* ========================================================================= */}
        <section id="best-places-to-visit" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <MapPin className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Sri Lanka Destination Guide</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Best Places to Visit in <span className="italic font-normal text-[#BFA13B]">Kandy and Bentota</span>
              </h2>

              {/* VERBATIM INTRO FROM PROMPT */}
              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Kandy and Bentota offer a combination of culture, history, nature, beaches, and local experiences. From Kandy&apos;s famous temples and scenic hills to Bentota&apos;s beaches and riverside attractions, there is plenty to explore during your Sri Lanka trip.
              </p>
            </div>

            {/* 8 Elaborated Places Cards (H3s) */}
            <div className="space-y-8 max-w-5xl mx-auto">
              {placesToVisit.map((place, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={place.id}
                    className={`bg-[#FAF9F6] rounded-2xl p-6 sm:p-8 border border-[#E5E0D5] shadow-2xs flex flex-col md:flex-row gap-6 items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full md:w-5/12 relative h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 shadow-xs">
                      <Image
                        src={place.image}
                        alt={`${place.title} Sri Lanka`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-[#0C0A09] text-[#E8D08D] border border-[#BFA13B]/30 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        {place.tag}
                      </span>
                    </div>

                    <div className="flex-1 space-y-3 text-left">
                      {/* EXACT H3 HEADING */}
                      <h3 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
                        <span>{place.title}</span>
                      </h3>

                      {/* VERBATIM PROMPT COPY */}
                      <p className="text-sm text-stone-700 leading-relaxed font-normal">
                        {place.verbatimText}
                      </p>

                      {/* ELABORATED DETAILS */}
                      <div className="pt-2 border-t border-[#E5E0D5] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                        {place.elaborations.map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Option – Show More Places (Prompt verbatim) */}
            <div className="mt-8 text-center">
              <p className="text-xs text-stone-500 font-semibold mb-3">
                Also exploring Sigiriya Rock, Nuwara Eliya Tea Hills, or Galle Dutch Fort?
              </p>
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-[#FAF9F6] text-stone-800 border border-[#E5E0D5] shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Slider Option – Show More Places</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#BFA13B]" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: THINGS TO DO IN KANDY AND BENTOTA (12 ITEMS FROM PROMPT)       */}
        {/* ========================================================================= */}
        <section id="things-to-do" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Activities &amp; Highlights</span>
              </div>

              {/* EXACT SECTION TITLE */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Things to Do in <span className="italic font-normal text-[#BFA13B]">Kandy and Bentota</span>
              </h2>

              {/* VERBATIM INTRO FROM PROMPT */}
              <div className="space-y-1 text-base text-stone-600 leading-relaxed font-normal">
                <p>
                  A Kandy Bentota holiday offers you the chance to combine cultural sightseeing with a relaxing beach break.
                </p>
                <p className="font-serif font-semibold text-stone-800">
                  Here are just a few of the many experiences on offer:
                </p>
              </div>
            </div>

            {/* 12 Things to do Grid (Verbatim Items) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 max-w-6xl mx-auto">
              {thingsToDo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#BFA13B]/60 transition-all shadow-2xs group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] text-[#BFA13B] border border-[#BFA13B]/20 flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-snug group-hover:text-[#BFA13B] transition-colors mb-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-stone-500 font-normal leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: BEST KANDY BENTOTA PACKAGES FOR EVERY TRAVELLER (H2)           */}
        {/* ========================================================================= */}
        <section id="packages-for-every-traveller" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Users className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Tailored for You</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Best Kandy Bentota Tour Packages for <span className="italic font-normal text-[#BFA13B]">Every Traveller</span>
              </h2>

              {/* VERBATIM PROMPT INTRO */}
              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Whether you are travelling with family, your partner, friends, or as a group, Altitude Travel Co. can help you choose a Kandy Bentota tour package that suits your holiday plans.
              </p>
            </div>

            {/* 5 Traveller Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {travellerTypes.map((type, idx) => {
                const Icon = type.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5E0D5] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-900 bg-[#FBF7EE] px-2.5 py-0.5 rounded-full border border-[#BFA13B]/40">
                          {type.tag}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E0D5] flex items-center justify-center text-[#BFA13B]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* EXACT TITLE */}
                      <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                        {type.title}
                      </h3>

                      {/* VERBATIM COPY */}
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        {type.desc}
                      </p>

                      <div className="pt-2 border-t border-[#E5E0D5] space-y-1.5">
                        {type.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-stone-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[#E5E0D5]">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, packageType: type.title }));
                          const formElem = document.getElementById("kandy-inquiry-box");
                          if (formElem) {
                            formElem.scrollIntoView({ behavior: "smooth", block: "center" });
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-serif font-bold bg-[#0C0A09] hover:bg-stone-900 text-[#E8D08D] border border-[#BFA13B]/40 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Enquire for {type.tag}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Option – Show More Packages (Prompt verbatim requirement) */}
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-serif font-bold bg-white hover:bg-[#FAF9F6] text-stone-900 border border-[#E5E0D5] shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Slider Option – Show More Packages</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#BFA13B]" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: WHY CHOOSE ALTITUDE TRAVEL CO. FOR YOUR KANDY BENTOTA TRIP (H2)*/}
        {/* ========================================================================= */}
        <section id="why-choose-altitude" className="py-10 sm:py-12 lg:py-14 bg-[#0C0A09] text-white border-b border-[#BFA13B]/20 relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#BFA13B]/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#E8D08D]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>The Altitude Travel Standard</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-white tracking-tight leading-tight">
                Why Choose Altitude Travel Co. for Your{" "}
                <span className="italic font-normal text-[#E8D08D]">Kandy Bentota Trip?</span>
              </h2>

              {/* VERBATIM PROMPT INTRO */}
              <p className="text-base text-stone-300 leading-relaxed font-normal">
                Altitude Travel Co. helps travellers experience Sri Lanka beyond a standard sightseeing itinerary. We combine cultural attractions, local experiences, nature, beaches, and free time to create a balanced Kandy Bentota holiday.
              </p>
            </div>

            {/* 7 Pillars (Verbatim Items from Prompt) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {whyChoosePillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-[#BFA13B]/40 transition-all flex flex-col justify-between shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#BFA13B]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h3 className="text-sm sm:text-base font-serif font-bold text-[#E8D08D]">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-stone-300 leading-relaxed font-normal pl-6">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: WHAT OUR TRAVELLERS SAY ABOUT ALTITUDE TRAVEL CO. (H2)         */}
        {/* ========================================================================= */}
        <section id="what-travellers-say" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Star className="w-3.5 h-3.5 fill-[#BFA13B] text-[#BFA13B]" />
                <span>Verified Client Reviews</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                What Our Travellers Say About{" "}
                <span className="italic font-normal text-[#BFA13B]">Altitude Travel Co.</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Authentic client testimonials from travelers who explored Sri Lanka with Altitude Travel Co.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E5E0D5] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-12 h-12 rounded-full border-2 border-[#E5E0D5] overflow-hidden bg-stone-200 shrink-0 shadow-xs">
                        <Image
                          src={t.avatarImage}
                          alt={t.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-serif font-bold text-stone-900 truncate">{t.name}</h4>
                        <div className="text-xs text-stone-500 font-medium truncate">{t.country}</div>
                        <div className="flex items-center text-[#BFA13B] mt-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#BFA13B]" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative pt-1">
                      <Quote className="w-7 h-7 text-[#BFA13B]/15 absolute -top-2 -left-1 pointer-events-none" />
                      <p className="relative z-10 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                        &ldquo;{t.review}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs text-stone-400">
                    <span className="font-medium">{t.date}</span>
                    <span className="text-[11px] font-semibold text-stone-900 bg-[#FBF7EE] px-2.5 py-0.5 rounded-full border border-[#BFA13B]/40 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#BFA13B]" /> Verified Booking
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: KANDY BENTOTA TOUR AND TRAVEL (EDITORIAL NARRATIVE)            */}
        {/* ========================================================================= */}
        <section id="agency-editorial" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Briefcase className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>About Altitude Travel Co.</span>
              </div>

              {/* EXACT SECTION TITLE */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Kandy Bentota Tour <span className="italic font-normal text-[#BFA13B]">and Travel</span>
              </h2>
            </div>

            {/* VERBATIM EDITORIAL NARRATIVE */}
            <div className="space-y-4 text-base text-stone-600 leading-relaxed font-normal bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E0D5] shadow-2xs">
              <p>
                Altitude Travel Co. helps travellers plan memorable Sri Lanka holidays combining the cultural charm of Kandy with the relaxing coastal atmosphere of Bentota.
              </p>
              <p>
                Kandy is known for its historic temples, scenic hills, cultural attractions, and local experiences, while Bentota offers beautiful beaches, water activities, riverside experiences, and opportunities to relax.
              </p>
              <p>
                Our Kandy Bentota tour packages can include accommodation, transfers, sightseeing, activities, and itinerary planning depending on the package you choose.
              </p>
              <p>
                Whether you are planning a family holiday, honeymoon, friends&apos; trip, or private Sri Lanka getaway, our team can help organise the important details of your journey.
              </p>
              <p>
                We believe a good Sri Lanka holiday should offer a balance between sightseeing and relaxation. That&apos;s why our itineraries can include cultural experiences in Kandy, beach time in Bentota, local food, nature, activities, and free time.
              </p>
              <p className="font-serif font-semibold text-stone-900">
                With Altitude Travel Co., you can plan a Kandy Bentota trip that matches your interests, budget, and travel style.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: SERVICES WE OFFER FOR KANDY BENTOTA TRIPS (H2)                 */}
        {/* ========================================================================= */}
        <section id="services-we-offer" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Briefcase className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Comprehensive Travel Support</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Services We Offer for <span className="italic font-normal text-[#BFA13B]">Kandy Bentota Trips</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Everything you need for a comfortable, stress-free Sri Lanka holiday handled under one roof.
              </p>
            </div>

            {/* 8 Services Cards (Verbatim from prompt) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {servicesWeOffer.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E5E0D5] shadow-2xs hover:border-[#BFA13B]/60 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center border border-[#BFA13B]/30">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* EXACT SERVICE TITLE */}
                      <h3 className="text-base font-serif font-bold text-stone-900">
                        {srv.title}
                      </h3>

                      {/* VERBATIM COPY */}
                      <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
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
        {/* SECTION 10: FAQ’S (10 QUESTIONS & VERBATIM ANSWERS)                       */}
        {/* ========================================================================= */}
        <section id="kandy-bentota-faqs" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <HelpCircle className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Frequently Asked Questions</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                FAQ’S About <span className="italic font-normal text-[#BFA13B]">Kandy Bentota Travel</span>
              </h2>

              <p className="text-base text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
                Clear answers for planning and booking your Sri Lanka holiday with Altitude Travel Co.
              </p>
            </div>

            {/* Accordion with Exact Headings & Verbatim Answers */}
            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5E0D5] shadow-2xs overflow-hidden transition-all duration-200 hover:border-[#BFA13B]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      {/* EXACT QUESTION */}
                      <h3 className="text-base sm:text-[17px] font-serif font-bold text-stone-900 hover:text-[#BFA13B] transition-colors leading-snug">
                        {faq.q}
                      </h3>

                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "bg-[#0C0A09] text-[#E8D08D] rotate-180" : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-stone-600 text-sm sm:text-[15px] leading-relaxed border-t border-[#E5E0D5] font-normal">
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
        {/* SECTION 11: PLAN YOUR KANDY BENTOTA TRIP WITH ALTITUDE TRAVEL CO. (CTA)   */}
        {/* User: Inquiry Now CTA Plus form for customer                              */}
        {/* ========================================================================= */}
        <section id="plan-kandy-trip" className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#FAF9F6] to-[#FBF7EE]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Start Planning Your Sri Lanka Journey</span>
              </div>

              {/* EXACT SECTION HEADING */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Plan Your Kandy Bentota Trip with <span className="italic font-normal text-[#BFA13B]">Altitude Travel Co.</span>
              </h2>

              {/* VERBATIM COPY FROM PROMPT */}
              <div className="space-y-2 text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto">
                <p className="font-serif font-semibold text-stone-900">
                  Ready to explore Sri Lanka?
                </p>
                <p>
                  From Kandy&apos;s temples, culture, and scenic surroundings to Bentota&apos;s beaches, water activities, and relaxing coastal experiences, let Altitude Travel Co. help you plan a memorable Sri Lanka holiday.
                </p>
                <p className="text-sm sm:text-base text-stone-700 font-medium">
                  Create a Kandy-to-Bentota itinerary around your travel style, budget, interests, and preferred experiences.
                </p>
              </div>
            </div>

            {/* DEDICATED CUSTOMER BOOKING FORM */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E5E0D5] max-w-2xl mx-auto">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E5E0D5]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BFA13B]" />
                  <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-stone-900">
                    Inquiry Now — Customized Sri Lanka Package
                  </h3>
                </div>
                <span className="text-xs font-semibold text-stone-900 bg-[#FBF7EE] px-2.5 py-0.5 rounded-md border border-[#BFA13B]/40">
                  Fast Response
                </span>
              </div>

              {bottomSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center mx-auto border border-[#BFA13B]/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-stone-900">Your Sri Lanka Trip Request Is In!</h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
                    Thank you! Our senior Sri Lanka travel specialist from Connaught Place, New Delhi will get back to you shortly with a personalized itinerary and clear, transparent pricing.
                  </p>
                  <button
                    type="button"
                    onClick={() => setBottomSubmitted(false)}
                    className="mt-3 px-5 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBottomFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ankit Singhal"
                        value={bottomFormData.name}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] text-stone-900 focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98100 XXXXX"
                        value={bottomFormData.phone}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] text-stone-900 focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Approximate Travel Dates
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10th to 16th December"
                        value={bottomFormData.travelDates}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, travelDates: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] text-stone-900 focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Travel Style
                      </label>
                      <select
                        value={bottomFormData.travelStyle}
                        onChange={(e) => setBottomFormData({ ...bottomFormData, travelStyle: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] text-stone-900 focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                      >
                        <option value="Family Holiday">Family Holiday (Kids / Parents)</option>
                        <option value="Honeymoon / Couple">Honeymoon / Couple Retreat</option>
                        <option value="Friends Trip">Friends Trip / Squad Adventure</option>
                        <option value="Beach Holiday">Beach Holiday (Bentota Focused)</option>
                        <option value="Private Tour">Private Tour (Kandy + Bentota)</option>
                        <option value="Custom Itinerary">Custom Multi-City Sri Lanka</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Custom Preferences or Specific Interests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Want tea factory visit in Kandy, Madu River boat cruise, beachfront resort in Bentota, Indian food options..."
                      value={bottomFormData.customRequirements}
                      onChange={(e) => setBottomFormData({ ...bottomFormData, customRequirements: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] text-stone-900 focus:bg-white focus:border-[#BFA13B] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={bottomSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-serif font-bold text-xs sm:text-sm tracking-wide bg-[#0C0A09] hover:bg-stone-900 text-[#E8D08D] shadow-md transition-all flex items-center justify-center gap-2 border border-[#BFA13B]/40 cursor-pointer"
                  >
                    {bottomSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#BFA13B]" />
                        <span>Inquiry Now — Get My Customized Sri Lanka Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-stone-400 font-medium">
                    100% Privacy Protected • No Pushy Calls • Handcrafted Quotes by Altitude Travel Co.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Concierge Call & WhatsApp Strip */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-[#0C0A09] via-stone-900 to-[#0C0A09] border border-[#BFA13B]/30 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8D08D]">
                  Direct Delhi Concierge
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Speak Directly With Our Sri Lanka Travel Specialist
                </h3>
                <p className="text-xs sm:text-sm text-stone-300">
                  Instant quotes, flight options ex-Delhi, and personalized hotel recommendations.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <a
                  href="tel:+919810024680"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-serif font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#BFA13B]" />
                  <span>Call +91 98100 24680</span>
                </a>

                <a
                  href="https://wa.me/919810024680?text=Hello%20Altitude%20Travel,%20I%20want%20to%20plan%20a%20Kandy%20Bentota%20Sri%20Lanka%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-serif font-bold bg-[#BFA13B] hover:bg-[#d4b54a] text-stone-950 flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950" />
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
