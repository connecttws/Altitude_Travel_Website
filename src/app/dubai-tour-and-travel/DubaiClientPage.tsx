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
  Star,
  Send,
  HelpCircle,
  Gem,
  Award,
  Waves,
  UtensilsCrossed,
  Info,
} from "lucide-react";

export default function DubaiClientPage() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Dubai (Burj Khalifa & Desert Safari)",
    travelMonth: "Next 30 Days",
    guests: "2 Adults (Couple)",
    notes: "Inquiring for Dubai tour and travel packages from Delhi.",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Interactive Trip Planner State
  const [plannerCategory, setPlannerCategory] = useState<
    "flights" | "hotels" | "transfers" | "tours" | "safari" | "shopping"
  >("flights");

  const [selectedPlannerItems, setSelectedPlannerItems] = useState<{
    flights?: string;
    hotels?: string;
    transfers?: string;
    tours?: string[];
    safari?: string;
    shopping?: string;
  }>({
    flights: "Direct Flights from Delhi (IndiGo / Emirates)",
    hotels: "4-Star Luxury City Hotel with Breakfast",
    transfers: "Private AC Airport & City Transfers",
    tours: ["Burj Khalifa 124th Floor Ticket", "Dubai Marina Yacht Cruise"],
    safari: "Red Dune 4x4 Safari with BBQ Dinner & Shows",
    shopping: "Dubai Mall & Gold Souk Guided Walking Tour",
  });

  // FAQs open state
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

  // Sample Curated Dubai Packages
  const dubaiPackages: TourPackage[] = [
    {
      id: "dubai-iconic-highlights",
      title: "Dubai Iconic Wonders: Burj Khalifa & Red Dunes",
      cardTitle: "Iconic Dubai Highlights",
      subtitle: "Burj Khalifa, Desert Safari, Marina & Dubai Mall",
      shortDescription: "Ascend Burj Khalifa 124th floor, red dune safari BBQ, marina cruise & shopping.",
      category: "international",
      destination: "Dubai",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      priceStarting: "₹48,999",
      rating: 4.9,
      reviewsCount: 168,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
      tag: "Best Seller",
      iconicLandmarks: ["Burj Khalifa 124th Floor", "Dubai Mall & Fountain Show", "Dubai Marina Dhow Cruise"],
      hiddenGems: ["Al Fahidi Historical Bastakiya", "Old Creek Abra Crossing", "Dubai Spice Souk"],
      localFoodHighlight: "Arabic Shawarma, Traditional Hummus & Kunafa desserts",
      freeDayNote: "Day 4 is dedicated as a free day for tax-free shopping and leisure at your own pace.",
      overview:
        "The ideal introductory Dubai experience. Marvel at towering modern architecture, experience the thrill of dune bashing in the Arabian desert, take a tranquil evening dhow cruise, and enjoy unstructured free time for world-class shopping.",
      itinerary: [
        { day: 1, title: "Arrival in Dubai & Marina Dhow Cruise", description: "Private airport pickup, check-in to 4-star hotel, and evening Marina dhow dinner cruise under illuminated skyscrapers." },
        { day: 2, title: "Modern Dubai City Tour & Burj Khalifa", description: "Half-day city tour covering Palm Jumeirah, Dubai Mall, and sunset entry to Burj Khalifa 124th floor observation deck." },
        { day: 3, title: "Desert Safari with 4x4 Dune Bashing & BBQ", description: "Afternoon 4x4 red dune desert drive, sandboarding, camel rides, and starlit barbecue dinner with belly dance and Tanoura shows." },
        { day: 4, title: "A Complete Free Day for Shopping & Leisure", description: "Enjoy the entire day at your own pace! Explore Dubai Mall, relax at Kite Beach, or visit Dubai Frame." },
        { day: 5, title: "Souks Exploration & Flight Back to Delhi", description: "Morning traditional Abra ride across Dubai Creek to explore Gold and Spice souks before private airport transfer." },
      ],
      inclusions: ["4 Nights in Handpicked 4-Star Hotel", "Daily Buffet Breakfast", "All Sightseeing in Private AC Transfers", "Burj Khalifa 124th Floor Ticket", "Desert Safari with BBQ Dinner", "UAE Tourist Visa Assistance"],
      exclusions: ["International Flights from Delhi", "Tourism Dirham Fee (payable at hotel)", "Personal shopping and optional activities"],
    },
    {
      id: "dubai-abu-dhabi-grand",
      title: "Dubai & Abu Dhabi Grand Discovery",
      cardTitle: "Dubai & Abu Dhabi Twin Delight",
      subtitle: "Sheikh Zayed Mosque, Burj Khalifa, Marina & Desert Safari",
      shortDescription: "Experience both dazzling Dubai and the majestic cultural capital of Abu Dhabi.",
      category: "international",
      destination: "Dubai",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      priceStarting: "₹54,999",
      rating: 5.0,
      reviewsCount: 204,
      image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1000&q=80",
      tag: "Most Popular",
      iconicLandmarks: ["Sheikh Zayed Grand Mosque Abu Dhabi", "Burj Khalifa 124th Floor", "Dubai Marina Yacht Cruise"],
      hiddenGems: ["Ferrari World Photo Stop", "Al Qudra Desert Oasis", "Al Seef Heritage Waterfront"],
      localFoodHighlight: "Authentic Emirati Machboos, Mezze platters & Arabian saffron coffee",
      freeDayNote: "Day 4 is completely unscheduled for beach clubs or shopping at Mall of the Emirates.",
      overview:
        "The comprehensive Emirates holiday. Witness the glittering futuristic skyline of Dubai alongside the architectural majesty of Abu Dhabi's white marble Sheikh Zayed Grand Mosque, paired with desert thrills and guaranteed free time.",
      itinerary: [
        { day: 1, title: "Dubai Arrival & Evening Marina Cruise", description: "Private airport meet-and-greet, hotel check-in, and Marina yacht cruise with international buffet." },
        { day: 2, title: "Dubai City Tour, Palm Jumeirah & Burj Khalifa", description: "Visit the Museum of the Future (photo stop), Palm Monorail, Dubai Mall, and Burj Khalifa 124th floor." },
        { day: 3, title: "Red Dune Desert Safari & Arabian Nights Feast", description: "Exciting 4x4 dune bashing, quad biking options, henna painting, and BBQ buffet under Arabian stars." },
        { day: 4, title: "A Complete Free Day for Leisure & Exploration", description: "Take the day off! Lounge at JBR Beach, shop tax-free, or indulge in high tea at Atlantis The Palm." },
        { day: 5, title: "Full Day Excursion to Abu Dhabi", description: "Guided tour of the world-famous Sheikh Zayed Grand Mosque, Emirates Palace drive, and Ferrari World photo stop." },
        { day: 6, title: "Heritage Souks & Departure to Delhi", description: "Explore the Gold & Spice Souks and take your private transfer to Dubai International Airport." },
      ],
      inclusions: ["5 Nights in 4/5-Star Dubai Hotel", "Daily Buffet Breakfast", "Abu Dhabi Day Excursion with Grand Mosque", "Desert Safari with BBQ Dinner", "Burj Khalifa Entry Ticket", "UAE Visa Assistance"],
      exclusions: ["International Flights from Delhi", "Tourism Dirham Fee", "Personal expenses"],
    },
    {
      id: "dubai-ultra-luxury-retreat",
      title: "Dubai Ultra-Luxury & Private Desert Oasis",
      cardTitle: "Ultra-Luxury Dubai Experience",
      subtitle: "5-Star Marina & Downtown Stays, Private Yacht & Desert Camp",
      shortDescription: "Private yacht charter, Burj Khalifa 148th floor lounge & VIP desert experience.",
      category: "international",
      destination: "Dubai",
      duration: "7 Days / 6 Nights",
      days: 7,
      nights: 6,
      priceStarting: "₹92,000",
      rating: 5.0,
      reviewsCount: 89,
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
      tag: "Ultra Luxe",
      iconicLandmarks: ["Burj Khalifa At The Top SKY (148th Floor)", "Private 2-Hour Marina Yacht Charter", "Atlantis Aquaventure"],
      hiddenGems: ["VIP Vintage Land Rover Desert Safari", "Bab Al Shams Desert Resort lunch", "Miracle Garden VIP access"],
      localFoodHighlight: "Fine dining dinner at Atmosphere Burj Khalifa & gold-dusted cappuccino",
      freeDayNote: "Days 4 and 6 offer unhurried leisure for private beach clubs and personal shopping.",
      overview:
        "Curated for discerning travellers. Enjoy 5-star premier hospitality, private chauffeur transfers, exclusive private yacht sailing across the Arabian Gulf, and a heritage desert safari with five-star culinary dining.",
      itinerary: [
        { day: 1, title: "VIP Airport Concierge & Hotel Check-in", description: "Fast-track VIP arrival, private luxury sedan transfer to 5-star Marina waterfront suite." },
        { day: 2, title: "Private Yacht Charter & Burj Khalifa SKY", description: "Private 2-hour luxury motor yacht cruise along JBR & Atlantis, followed by 148th floor VIP lounge access at Burj Khalifa." },
        { day: 3, title: "Heritage Desert Safari in Vintage Land Rovers", description: "Conservation reserve drive in open-top vintage Land Rovers, falconry show, and 6-course royal desert dinner." },
        { day: 4, title: "A Complete Free Day at Leisure", description: "Relax by your resort infinity pool or indulge in spa wellness treatments." },
        { day: 5, title: "Abu Dhabi Luxury Tour & Louvre Museum", description: "Private day trip to Sheikh Zayed Grand Mosque and Louvre Abu Dhabi museum." },
        { day: 6, title: "Personal Shopping & Fine Dining", description: "Personal shopping concierge service at Dubai Mall Fashion Avenue and farewell dinner." },
        { day: 7, title: "Private Airport Transfer to Delhi", description: "Breakfast at leisure and luxury airport drop-off." },
      ],
      inclusions: ["6 Nights in 5-Star Luxury Hotels", "Private 2-Hour Luxury Yacht Charter", "Burj Khalifa 148th Floor SKY Tickets", "VIP Heritage Desert Safari", "All Private Luxury Transfers", "Complete Visa Support"],
      exclusions: ["International Flights from Delhi", "Personal shopping", "Tourism Dirham Fee"],
    },
  ];

  const handleOpenPackageModal = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  const faqs = [
    {
      q: "Is Dubai good for a holiday?",
      a: "Yes. Dubai is a popular holiday destination with attractions, shopping, beaches, adventure activities, entertainment, and cultural experiences.",
    },
    {
      q: "How many days should I spend in Dubai?",
      a: "Around 4 to 6 days can be a good duration for exploring many of Dubai's major attractions and enjoying popular activities.",
    },
    {
      q: "What is Dubai famous for?",
      a: "Dubai is famous for its modern architecture, luxury shopping, beautiful beaches, desert experiences, world-class attractions, and vibrant lifestyle.",
    },
    {
      q: "What are the best things to do in Dubai?",
      a: "Some popular activities include visiting Burj Khalifa, exploring Dubai Mall, enjoying a desert safari, taking a Marina cruise, visiting Palm Jumeirah, and relaxing at the beach.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col selection:bg-[#BFA13B]/20 selection:text-stone-950">
      
      {/* Global Header */}
      <Navbar
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenInquiryModal={() => {
          const formElem = document.getElementById("dubai-inquiry-box");
          if (formElem) {
            formElem.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }}
      />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* HERO SECTION: 3D MOVING PHOTOS + ARABIC CALLIGRAPHY + VERBATIM H1         */}
        {/* ========================================================================= */}
        <section className="relative pt-[128px] pb-10 sm:pt-[132px] sm:pb-12 lg:pt-[136px] lg:pb-14 bg-[#FAF9F6] border-b border-[#E5E0D5] overflow-hidden">
          
          {/* Subtle Atmospheric Backdrops */}
          <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/3 -left-20 w-[420px] h-[420px] bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Bar: Arabic Calligraphy Feature Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E0D5]">
              
              {/* ARABIC CALLIGRAPHY BADGE: Discover the magic of Dubai */}
              <div className="inline-flex items-center gap-3 bg-[#FBF7EE] border border-[#BFA13B]/40 px-4 py-1.5 rounded-full shadow-2xs">
                <span className="text-[#BFA13B] font-bold text-sm tracking-wide">✦</span>
                <span className="font-arabic text-stone-900 text-lg sm:text-xl font-bold tracking-wide" dir="rtl">
                  اكتشف سحر دبي
                </span>
                <span className="text-[#BFA13B]/60 hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm font-serif font-bold text-stone-800">
                  Discover the Magic of Dubai
                </span>
              </div>

              {/* Currency & Flight Distance Pills */}
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                <span className="bg-white px-3 py-1 rounded-full border border-[#E5E0D5] shadow-2xs flex items-center gap-1.5">
                  <Gem className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Currency: <strong className="text-stone-900">UAE Dirham (AED)</strong></span>
                </span>
                <span className="hidden sm:inline-flex bg-white px-3 py-1 rounded-full border border-[#E5E0D5] shadow-2xs items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>3.5h Non-Stop from Delhi</span>
                </span>
              </div>

            </div>

            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: Editorial Travel Brand Narrative & EXACT H1 */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                
                {/* Eyebrow Micro-caps */}
                <div className="inline-flex items-center gap-2 self-start text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                  <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Curated UAE Travel • Connaught Place, Delhi Planning Desk</span>
                </div>

                {/* SIGNATURE EDITORIAL H1 HEADING */}
                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-serif font-bold text-[#1C1917] tracking-tight leading-[1.14]">
                  Dubai Tour and Travel:{" "}
                  <span className="italic font-normal text-shining-gold">
                    Explore the Best of Dubai
                  </span>
                </h1>

                {/* Dynamic Moving Accent Line */}
                <div className="moving-line-track max-w-[160px]">
                  <div className="moving-line-beam" />
                </div>

                {/* Subtitle Highlight */}
                <p className="text-base sm:text-lg font-serif font-semibold text-stone-800 leading-relaxed">
                  Discover the Best of Dubai — From the Burj Khalifa and beautiful beaches to desert safaris and luxury experiences, see what a Dubai tour has to offer.
                </p>

                {/* VERBATIM INTRODUCTORY PARAGRAPHS */}
                <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  <p>
                    Dubai is one of the most popular tourist destinations in the world. It attracts visitors with marvellous places to explore, unique food to taste, and exciting activities to engage in. Moreover, Dubai is famous for its exceptional level of hospitality towards its tourists from around the globe. Dubai is also known as the city of gold; it is a melting pot for different cultures and beliefs. Furthermore, it is one of the 7 emirates in the Gulf country (UAE).
                  </p>
                  <p className="font-medium text-stone-800 bg-[#FBF7EE] p-3 rounded-xl border border-[#BFA13B]/30">
                    The UAE Dirham (AED) is the official currency used in Dubai.
                  </p>
                  <p>
                    Dubai is among the most popular travel destinations in the world because of its modern buildings, beautiful beaches, luxury shopping, exciting activities, and rich culture. It attracts millions of tourists to the city annually. Whether travelling with family, friends, or couples, a Dubai tour is suitable for everyone.
                  </p>
                  <p>
                    From exploring famous landmarks to experiencing a desert safari, there is always something to do in this amazing city. Furthermore, with the right Dubai tour and travel plan, you can ensure you enjoy your trip immensely without missing the best experiences.
                  </p>
                </div>

                {/* 3 Core Pillars Requested in Prompt */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#BFA13B]/30">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-[#1C1917]">Culture &amp; Heritage</h4>
                      <p className="text-[11px] text-stone-500">Souks &amp; Old Creek</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#BFA13B]/30">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-[#1C1917]">Adventure &amp; Fun</h4>
                      <p className="text-[11px] text-stone-500">4x4 Red Dune Safari</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#BFA13B]/30">
                      <Gem className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-[#1C1917]">Luxury Experiences</h4>
                      <p className="text-[11px] text-stone-500">Yachts &amp; 5-Star Stays</p>
                    </div>
                  </div>
                </div>

                {/* Best Places to Visit Quick Badges */}
                <div className="pt-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mr-1">
                    Best places to visit:
                  </span>
                  {["Burj Khalifa", "Desert Safari", "Dubai Marina", "Palm Jumeirah", "Dubai Mall"].map(
                    (place, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#FAF9F6] text-stone-800 border border-[#E5E0D5] shadow-2xs flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-[#BFA13B]" />
                        <span>{place}</span>
                      </span>
                    )
                  )}
                </div>

              </div>

              {/* Right Column: 3D MOVING POSITION PHOTOS SHOWCASE + QUICK INQUIRY CARD */}
              <div className="lg:col-span-5 space-y-6" id="dubai-inquiry-box">
                
                {/* ============================================================= */}
                {/* 3D MOVING POSITION PHOTOS SHOWCASE                          */}
                {/* User: "We can use give 3d animation to show these front photos in a moving position." */}
                {/* ============================================================= */}
                <div className="relative h-[290px] sm:h-[320px] rounded-2xl p-4 bg-[#0C0A09] overflow-hidden shadow-2xl border border-[#BFA13B]/30 flex items-center justify-center">
                  
                  {/* Subtle Background Desert Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(191,161,59,0.2),transparent_60%)]" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#BFA13B] px-3 py-1 rounded-full border border-[#BFA13B]/30">
                      <Sparkles className="w-3 h-3 text-[#BFA13B]" />
                      <span>Live 3D Destination Showcase</span>
                    </span>
                  </div>

                  {/* 3D Moving Perspective Photos Container */}
                  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
                    
                    {/* Card 1: Left 3D Moving Photo - Burj Khalifa */}
                    <div className="absolute -left-2 sm:left-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border border-[#BFA13B]/40 animate-3d-left z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
                        alt="Burj Khalifa towering over Dubai Downtown"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-[#BFA13B] block">World&apos;s Tallest</span>
                        <h4 className="text-xs font-serif font-bold leading-tight">Burj Khalifa</h4>
                      </div>
                    </div>

                    {/* Card 2: Center 3D Floating Hero - Red Dune Desert Safari */}
                    <div className="relative w-[180px] sm:w-[210px] h-[230px] sm:h-[250px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-[#BFA13B] animate-3d-center z-20 group cursor-pointer">
                      <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                        alt="Red Dune Desert Safari 4x4 thrilling experience"
                        fill
                        sizes="240px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/95 via-[#0C0A09]/30 to-transparent" />
                      <div className="absolute top-2.5 right-2.5 bg-[#BFA13B] text-stone-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        MUST VISIT
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10.5px] font-bold text-[#E8D08D] block">4x4 Dune Bashing</span>
                        <h4 className="text-sm font-serif font-bold leading-tight">Desert Safari &amp; BBQ</h4>
                      </div>
                    </div>

                    {/* Card 3: Right 3D Moving Photo - Dubai Marina & Yachts */}
                    <div className="absolute -right-2 sm:right-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 animate-3d-right z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=600&q=80"
                        alt="Dubai Marina luxury yachts and neon skyline"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-sky-400 block">Luxury Yachts</span>
                        <h4 className="text-xs font-bold leading-tight">Dubai Marina</h4>
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
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                          Dubai Tour Inquiry
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-stone-900 bg-[#FBF7EE] px-2.5 py-0.5 rounded-full border border-[#BFA13B]/40">
                        Delhi Desk Online
                      </span>
                    </div>

                    {/* Dynamic Moving Laser Beam Line */}
                    <div className="moving-line-track mb-3">
                      <div className="moving-line-beam" />
                    </div>

                    {submitted ? (
                      <div className="py-6 text-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-base font-bold text-slate-900">Dubai Inquiry Received</h4>
                        <p className="text-xs text-slate-600 max-w-xs mx-auto">
                          Thank you! Our senior UAE travel specialist from Delhi will call you within 15 minutes with curated itineraries and best flight deals.
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
                              placeholder="e.g. Rahul Sharma"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] focus:bg-white focus:border-[#BFA13B] focus:outline-none"
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
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                              Travel Duration
                            </label>
                            <select
                              value={formData.travelMonth}
                              onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            >
                              <option value="5 Days / 4 Nights">5 Days / 4 Nights (Highlights)</option>
                              <option value="6 Days / 5 Nights">6 Days / 5 Nights (Dubai + Abu Dhabi)</option>
                              <option value="7 Days / 6 Nights">7 Days / 6 Nights (Luxury Retreat)</option>
                              <option value="Custom Duration">Custom Duration</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                              Number of Guests
                            </label>
                            <select
                              value={formData.guests}
                              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            >
                              <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                              <option value="Family with Kids">Family with Kids</option>
                              <option value="Group of Friends">Group of Friends (4+)</option>
                              <option value="Solo Traveler">Solo Traveler</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-shining-gold shining-sweep hover:brightness-105 active:scale-[0.99] text-stone-950 shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 border border-[#BFA13B]/40 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <span>Submitting Dubai Inquiry...</span>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5 text-stone-950 fill-stone-950" />
                              <span>Request Custom Dubai Package Quote</span>
                            </>
                          )}
                        </button>

                        <p className="text-[10.5px] text-center text-slate-400 font-medium">
                          100% Privacy • No Spam • Verified Quotes from Delhi Office
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
        {/* SECTION 1: WHY VISIT DUBAI? (H2) & DESTINATIONS DEEP DIVE (H3)            */}
        {/* ========================================================================= */}
        <section id="why-visit-dubai" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-[#FBF7EE] border border-[#BFA13B]/40 text-[#BFA13B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span className="tracking-wide">The Global Jewel of Hospitality</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Why Visit <span className="italic font-normal text-[#BFA13B]">Dubai?</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Dubai is an excellent choice for anyone who is seeking an ultimate experience of adventure, entertainment, relaxation, and culture. This emirate offers unforgettable experiences and opportunities to suit every taste and interest.
              </p>
            </div>

            {/* 8 Reasons Cards Grid (Exact from User prompt) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
              {[
                { title: "Beautiful beaches and resorts", icon: Waves },
                { title: "World-class attractions", icon: Building },
                { title: "Adventure in the desert", icon: Sun },
                { title: "Shopping and entertainment", icon: ShoppingBag },
                { title: "Culinary delights worldwide", icon: UtensilsCrossed },
                { title: "Modern architecture", icon: Building },
                { title: "Family-friendly activities", icon: Award },
                { title: "Luxurious accommodations", icon: Gem },
              ].map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FBF7EE] border border-[#E5E0D5] hover:border-[#BFA13B]/50 hover:bg-white transition-all shadow-2xs group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#BFA13B]/30 text-[#BFA13B] flex items-center justify-center mb-2.5">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-serif font-bold text-[#1C1917] leading-snug group-hover:text-[#BFA13B] transition-colors">
                      {reason.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#FBF7EE] rounded-2xl p-4 sm:p-5 border border-[#BFA13B]/30 mb-12 text-center text-xs sm:text-sm font-medium text-stone-800 shadow-2xs">
              Dubai is also famous for its hospitality and is welcoming to tourists from all around the globe.
            </div>

            {/* TOP-RATED DESTINATIONS IN DUBAI: H3 CARDS */}
            <div className="space-y-6">
              
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
                  Top-Rated Destinations to Visit in Dubai
                </h3>
                <p className="text-sm text-stone-500 mt-1 font-normal">
                  Iconic world landmarks that define the spirit of the Emirates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Burj Khalifa - H3 */}
                <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#BFA13B]/40">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                      alt="Burj Khalifa Dubai"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0C0A09] text-[#BFA13B] border border-[#BFA13B]/30 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      World&apos;s Highest Building
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2 group-hover:text-[#BFA13B] transition-colors">
                        Burj Khalifa
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        Standing at 828 meters, the Burj Khalifa offers panoramic vistas from its 124th, 125th, and 148th floor observation decks, overlooking the Persian Gulf and desert horizon.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-semibold text-[#BFA13B]">
                      <span>Observation Deck Included</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Dubai Mall - H3 */}
                <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#BFA13B]/40">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80"
                      alt="Dubai Mall & Dubai Fountain"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0C0A09] text-[#BFA13B] border border-[#BFA13B]/30 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      Premier Retail &amp; Fun
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2 group-hover:text-[#BFA13B] transition-colors">
                        Dubai Mall
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        Dubai Mall is one of the best places to shop in Dubai. Here, one can find everything from fast food restaurants to sports equipment and entertainment venues for kids and adults. Besides, it is a perfect place to enjoy views of the world’s highest building – the Burj Khalifa, because these two landmarks are located close to each other.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-semibold text-[#BFA13B]">
                      <span>1,200+ Stores &amp; Aquarium</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Dubai Marina - H3 */}
                <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#BFA13B]/40">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80"
                      alt="Dubai Marina skyline and yachts"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0C0A09] text-[#BFA13B] border border-[#BFA13B]/30 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      Waterfront Skyline
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2 group-hover:text-[#BFA13B] transition-colors">
                        Dubai Marina
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        Another popular place to visit is Dubai Marina. It is famous for its spectacular skyline and great views of the Persian Gulf. Moreover, one can enjoy the local cuisine and spend evenings on a boat or a yacht.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-semibold text-[#BFA13B]">
                      <span>Yacht Dinners &amp; Marina Walk</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Palm Jumeirah - H3 */}
                <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#BFA13B]/40">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80"
                      alt="Palm Jumeirah aerial and Atlantis"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0C0A09] text-[#BFA13B] border border-[#BFA13B]/30 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      Palm Tree Island
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2 group-hover:text-[#BFA13B] transition-colors">
                        Palm Jumeirah
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        Finally, another place to visit in Dubai is Palm Jumeirah. It is an artificial island in the shape of a palm tree, popular among luxury hotel guests and local residents. Here one can find lots of restaurants, water sports facilities, and shopping malls.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-semibold text-[#BFA13B]">
                      <span>Atlantis &amp; The View Palm</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Dubai Desert - H3 */}
                <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-2 hover:border-[#BFA13B]/40">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                      alt="Dubai Desert Safari red dunes"
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0C0A09] text-[#BFA13B] border border-[#BFA13B]/30 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      Signature Arabian Adventure
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2 group-hover:text-[#BFA13B] transition-colors">
                        Dubai Desert
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        However, the most popular activity there is a desert safari. It is a unique opportunity to feel the desert vibes, experience dune bashing, camel riding, and enjoy a traditional dinner and a breathtaking view of the sunset.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-semibold text-[#BFA13B]">
                      <span>4x4 Dune Bashing, Sandboarding &amp; Starlit BBQ Shows</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: THINGS TO DO IN DUBAI (H2)                                     */}
        {/* ========================================================================= */}
        <section id="things-to-do-in-dubai" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-white border border-[#BFA13B]/30 text-[#BFA13B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span className="tracking-wide">Endless Thrills &amp; Leisure</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Things to do in <span className="italic font-normal text-[#BFA13B]">Dubai</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                A Dubai tour is not only about discovering the city&apos;s sights. There are also plenty of different activities for a traveler.
              </p>
            </div>

            {/* 8 Activities Grid (Verbatim from User prompt) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                {
                  title: "Experience an exciting desert safari",
                  tag: "Adventure & Thrill",
                  desc: "Feel the adrenaline of 4x4 dune bashing across golden sands, camel rides, and starlit barbecue dinners.",
                  img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
                },
                {
                  title: "Shop in Dubai Mall",
                  tag: "World's Largest Mall",
                  desc: "Explore over 1,200 shops, luxury high-fashion avenues, the Olympic-sized ice rink, and giant indoor aquarium.",
                  img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80",
                },
                {
                  title: "Have breathtaking views of the city from the Burj Khalifa",
                  tag: "Sky Views",
                  desc: "Take high-speed double-decker elevators up to the 124th & 125th floors for 360-degree Arabian Gulf vistas.",
                  img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
                },
                {
                  title: "Enjoy a Dubai Marina cruise",
                  tag: "Waterfront Dining",
                  desc: "Glide past neon skyscraper reflections aboard a traditional wooden dhow or private luxury yacht.",
                  img: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=600&q=80",
                },
                {
                  title: "Sunbathe at the city's beaches",
                  tag: "Turquoise Shorelines",
                  desc: "Relax along Kite Beach and JBR with crystal blue waters, beachside cafés, and view of the Burj Al Arab.",
                  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
                },
                {
                  title: "Get lost in traditional souks",
                  tag: "Heritage Markets",
                  desc: "Ride a wooden abra boat across Dubai Creek to haggle for authentic saffron, exotic perfumes, and gold jewellery.",
                  img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
                },
                {
                  title: "Try local and international delicacies",
                  tag: "Food & Flavours",
                  desc: "Taste hot Arabic shawarma, creamy hummus, fresh grilled kebabs, mezze platters, and decadent pistachio baklava.",
                  img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
                },
                {
                  title: "Have fun with water and adventure activities",
                  tag: "Aquatic Thrills",
                  desc: "Enjoy record-breaking slides at Aquaventure Waterpark, indoor skiing at Ski Dubai, or jet ski rides along Palm Jumeirah.",
                  img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80",
                },
              ].map((act, i) => (
                <div
                  key={i}
                  className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#BFA13B]/40"
                >
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={act.img}
                      alt={act.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#0C0A09]/80 backdrop-blur-sm text-[#BFA13B] border border-[#BFA13B]/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {act.tag}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-serif font-bold text-[#1C1917] mb-1.5 leading-snug group-hover:text-[#BFA13B] transition-colors">
                        {act.title}
                      </h3>
                      <p className="text-xs text-stone-600 font-normal leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs sm:text-sm font-medium text-stone-800 bg-[#FBF7EE] p-4 rounded-xl border border-[#BFA13B]/30 max-w-xl mx-auto shadow-2xs">
              Different activities are available for different budgets and time constraints.
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: BEST TIME TO VISIT DUBAI (H2)                                  */}
        {/* ========================================================================= */}
        <section id="best-time-to-visit" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-[#FBF7EE] border border-[#BFA13B]/40 text-[#BFA13B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Calendar className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span className="tracking-wide">Seasonal Planning Guide</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Best Time to Visit <span className="italic font-normal text-[#BFA13B]">Dubai</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Choose the season that fits your travel style, outdoor interests, and vacation plans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* Cool Season Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FBF7EE] border border-[#BFA13B]/40 shadow-xs relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0A09] text-[#BFA13B] border border-[#BFA13B]/30 text-xs font-bold mb-4 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Peak Recommended Season</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917] mb-2">
                  Cool Season (November to March)
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed font-normal">
                  The best time to visit Dubai is in the cool season, which is from November to March. During this time, the weather is nice and easy for sightseeing.
                </p>
                <div className="mt-5 space-y-2 text-xs font-medium text-stone-600">
                  <div className="flex items-center gap-2 text-stone-900">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Average daytime temps: 24°C – 28°C (Pleasant sunshine)</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-900">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Ideal for outdoor walking, desert safaris &amp; beach strolls</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-900">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Dubai Miracle Garden &amp; Global Village open</span>
                  </div>
                </div>
              </div>

              {/* Hot Season Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FBF7EE] border border-[#E5E0D5] shadow-xs relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-800 text-xs font-bold mb-4 shadow-xs">
                  <Building className="w-3.5 h-3.5" />
                  <span>Indoor Luxury &amp; Summer Deals</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917] mb-2">
                  Hot Season (April to October)
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed font-normal">
                  But during the hot season, you can also have fun in the air-conditioned places such as shopping malls, restaurants and entertainment venues.
                </p>
                <div className="mt-5 space-y-2 text-xs font-medium text-stone-600">
                  <div className="flex items-center gap-2 text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Massive summer hotel discounts &amp; shopping festival promotions</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Full climate-controlled venues (Ski Dubai, Aquarium, Theme Parks)</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Evening cruises and air-conditioned luxury lounge nightlife</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 text-center text-xs sm:text-sm font-medium text-stone-800 bg-[#FBF7EE] p-3.5 rounded-xl border border-[#BFA13B]/30 max-w-xl mx-auto flex items-center justify-center gap-2 shadow-2xs">
              <Info className="w-4 h-4 text-[#BFA13B] shrink-0" />
              <span>Check the weather forecast before you go to Dubai and make sure you engage in the activities suitable for the season.</span>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: DUBAI TOUR PACKAGES (H2)                                       */}
        {/* ========================================================================= */}
        <section id="dubai-tour-packages" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-white border border-[#BFA13B]/30 text-[#BFA13B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Gem className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span className="tracking-wide">Curated Escapes From Delhi</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Dubai Tour <span className="italic font-normal text-[#BFA13B]">Packages</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Dubai tour packages can assist you in finding the best holiday ever. Depending on the package, the accommodation, airport transfers, sightseeing, activities, and other tourist services are included.
              </p>
            </div>

            {/* What to consider box (Verbatim from prompt) */}
            <div className="mb-10 bg-[#FAF9F6] rounded-2xl p-6 sm:p-7 border border-[#E5E0D5] shadow-xs max-w-4xl mx-auto">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#1C1917] mb-3 text-center sm:text-left">
                When looking for the best tour operator, you need to consider the following:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
                {["Days", "Hotel or location", "Places included", "Activities involved", "Means of transportation", "Meals", "The overall expenses"].map((crit, idx) => (
                  <div key={idx} className="p-3 bg-[#FBF7EE] rounded-xl border border-[#E5E0D5] text-xs font-semibold text-stone-900 flex flex-col items-center justify-center">
                    <span className="text-[10px] text-[#BFA13B] font-bold block mb-0.5">#{idx + 1}</span>
                    <span>{crit}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs sm:text-[13px] text-stone-600 leading-relaxed font-medium text-center sm:text-left">
                Therefore, choose the most suitable option according to your needs and possibilities instead of going for the cheapest and risk losing your holiday.
              </p>
            </div>

            {/* 3 Featured Curated Dubai Packages Cards with Strikethrough Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dubaiPackages.map((pkg) => {
                const numericPrice = parseInt(pkg.priceStarting.replace(/[^\d]/g, ""), 10);
                const originalPrice = numericPrice ? Math.round(numericPrice * 1.24) : null;

                return (
                  <div
                    key={pkg.id}
                    className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#BFA13B]/40"
                  >
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                      
                      <span className="absolute top-3 left-3 bg-[#0C0A09]/85 backdrop-blur-md text-[#BFA13B] border border-[#BFA13B]/30 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                        {pkg.tag}
                      </span>

                      <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10">
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

                        <div className="p-2.5 bg-[#FBF7EE] rounded-xl border border-[#BFA13B]/30 text-[11px] font-semibold text-stone-900 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                          <span>{pkg.freeDayNote}</span>
                        </div>

                        <div className="space-y-1.5 pt-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                            Included Experiences:
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
                            <span className="text-xl font-serif font-bold text-[#1C1917]">{pkg.priceStarting}</span>
                            {originalPrice && (
                              <span className="text-xs text-stone-400 line-through">₹{originalPrice.toLocaleString("en-IN")}</span>
                            )}
                          </div>
                          <span className="text-[10.5px] text-stone-500 block">/ person (ex Delhi)</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleOpenPackageModal(pkg)}
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0C0A09] hover:bg-[#1C1917] text-[#BFA13B] border border-[#BFA13B]/30 hover:border-[#BFA13B] transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>View Itinerary</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: PLAN YOUR DUBAI TRIP - H2 (INTERACTIVE CLICKABLE PLANNER)       */}
        {/* User: "✈ Flights 🏨 Hotels 🚙 Transfers 🎟 Tours 🏜 Safari 🛍 Shopping    */}
        {/*        We can show it like this using each click valuable."               */}
        {/* ========================================================================= */}
        <section id="plan-your-trip" className="py-10 sm:py-12 lg:py-14 bg-[#0C0A09] text-white relative overflow-hidden border-y border-[#BFA13B]/20">
          
          {/* Atmospheric Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#BFA13B]/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-[#BFA13B]/30 text-[#BFA13B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span className="tracking-wide">Interactive Bespoke Trip Builder</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-white tracking-tight leading-tight">
                PLAN YOUR <span className="italic font-normal text-[#BFA13B]">DUBAI TRIP</span>
              </h2>

              <p className="text-base text-stone-300 leading-relaxed font-normal">
                Click each element below to customize your flights, hotels, transfers, and excursions. Make each click count towards your dream itinerary.
              </p>
            </div>

            {/* INTERACTIVE 6-STEP CLICKABLE CATEGORY TABS */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
              {[
                { id: "flights", label: "✈ Flights", subtitle: "Delhi to Dubai" },
                { id: "hotels", label: "🏨 Hotels", subtitle: "Downtown & Marina" },
                { id: "transfers", label: "🚙 Transfers", subtitle: "Private AC Fleet" },
                { id: "tours", label: "🎟 Tours", subtitle: "Burj & Monuments" },
                { id: "safari", label: "🏜 Safari", subtitle: "Red Dune 4x4 BBQ" },
                { id: "shopping", label: "🛍 Shopping", subtitle: "Malls & Gold Souk" },
              ].map((tab) => {
                const isActive = plannerCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setPlannerCategory(tab.id as any)}
                    className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex flex-col items-center cursor-pointer ${
                      isActive
                        ? "bg-[#BFA13B] text-stone-950 shadow-md scale-102 border-2 border-[#E8D08D]"
                        : "bg-white/10 hover:bg-white/15 text-stone-300 border border-white/10"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`text-[10px] ${isActive ? "text-stone-950 font-medium" : "text-stone-400"}`}>
                      {tab.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* PLANNER VALUE PANEL */}
            <div className="bg-[#1C1917]/80 border border-[#BFA13B]/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
              
              {/* Flights Content */}
              {plannerCategory === "flights" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-lg font-serif font-bold text-[#E8D08D] flex items-center gap-2">
                      <Plane className="w-5 h-5 text-[#BFA13B]" />
                      <span>Curated Flight Options from Delhi (DEL to DXB)</span>
                    </h3>
                    <span className="text-xs text-stone-400">Average Flight Time: 3h 40m</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Direct Flights from Delhi", desc: "Non-stop morning departures with IndiGo or Emirates. Arrive before noon.", tag: "Recommended" },
                      { name: "Connecting / Budget Airlines", desc: "Economical fares via Muscat or Sharjah with coordinated transfers.", tag: "Budget Value" },
                      { name: "Business Class Comfort", desc: "Lie-flat Emirates A380 comfort, lounge access & fast-track check-in.", tag: "Luxury Fly" },
                    ].map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedPlannerItems({ ...selectedPlannerItems, flights: opt.name })}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          selectedPlannerItems.flights === opt.name
                            ? "bg-[#BFA13B]/20 border-[#BFA13B] text-white"
                            : "bg-white/5 border-white/10 hover:border-white/30 text-stone-300"
                        }`}
                      >
                        <span className="text-[10px] font-bold text-[#BFA13B] block mb-1">{opt.tag}</span>
                        <h4 className="text-sm font-bold text-white mb-1">{opt.name}</h4>
                        <p className="text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hotels Content */}
              {plannerCategory === "hotels" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-lg font-serif font-bold text-[#E8D08D] flex items-center gap-2">
                      <Building className="w-5 h-5 text-[#BFA13B]" />
                      <span>Handpicked Hotel Stays in Prime Locations</span>
                    </h3>
                    <span className="text-xs text-stone-400">All Stays Include Daily Breakfast</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "4-Star Luxury City Hotel", desc: "Located in Deira / Bur Dubai close to metro and traditional souks.", tag: "Best Value" },
                      { name: "Dubai Marina 5-Star Waterfront", desc: "Walk to JBR Beach, yachts, and premier waterfront dining avenues.", tag: "Popular Pick" },
                      { name: "Downtown Burj View Luxury Suite", desc: "Overlooking the Dubai Fountain with direct walking access to Dubai Mall.", tag: "Ultra Luxe" },
                    ].map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedPlannerItems({ ...selectedPlannerItems, hotels: opt.name })}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          selectedPlannerItems.hotels === opt.name
                            ? "bg-[#BFA13B]/20 border-[#BFA13B] text-white"
                            : "bg-white/5 border-white/10 hover:border-white/30 text-stone-300"
                        }`}
                      >
                        <span className="text-[10px] font-bold text-[#BFA13B] block mb-1">{opt.tag}</span>
                        <h4 className="text-sm font-bold text-white mb-1">{opt.name}</h4>
                        <p className="text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Transfers Content */}
              {plannerCategory === "transfers" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-lg font-serif font-bold text-[#E8D08D] flex items-center gap-2">
                      <Car className="w-5 h-5 text-[#BFA13B]" />
                      <span>Seamless Chauffeur &amp; Airport Transfers</span>
                    </h3>
                    <span className="text-xs text-stone-400">Zero Wait Time Guarantee</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Private AC Sedan / Innova", desc: "Dedicated chauffeur for all airport arrivals, tours, and excursions.", tag: "Top Rated" },
                      { name: "Luxury Mercedes / BMW Sedan", desc: "Executive class transfers for couples and business travelers.", tag: "Executive" },
                      { name: "Shared AC Tourist Coach", desc: "Comfortable group coach transfers with experienced tour guides.", tag: "Budget Smart" },
                    ].map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedPlannerItems({ ...selectedPlannerItems, transfers: opt.name })}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          selectedPlannerItems.transfers === opt.name
                            ? "bg-[#BFA13B]/20 border-[#BFA13B] text-white"
                            : "bg-white/5 border-white/10 hover:border-white/30 text-stone-300"
                        }`}
                      >
                        <span className="text-[10px] font-bold text-[#BFA13B] block mb-1">{opt.tag}</span>
                        <h4 className="text-sm font-bold text-white mb-1">{opt.name}</h4>
                        <p className="text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tours Content */}
              {plannerCategory === "tours" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-lg font-serif font-bold text-[#E8D08D] flex items-center gap-2">
                      <Ticket className="w-5 h-5 text-[#BFA13B]" />
                      <span>Iconic Sightseeing Passes &amp; Monument Entries</span>
                    </h3>
                    <span className="text-xs text-stone-400">Skip-the-Line Access</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Burj Khalifa 124th Floor Ticket", desc: "Sunset entry to At The Top observation deck with high-speed elevator.", tag: "Must Do" },
                      { name: "Dubai Marina Yacht Cruise", desc: "2-hour illuminated cruise with five-star international dinner buffet.", tag: "Romantic" },
                      { name: "Abu Dhabi Sheikh Zayed Mosque Tour", desc: "Full-day guided excursion to the world's most breathtaking white marble mosque.", tag: "Cultural" },
                    ].map((opt, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border bg-[#BFA13B]/20 border-[#BFA13B] text-white"
                      >
                        <span className="text-[10px] font-bold text-[#BFA13B] block mb-1">{opt.tag}</span>
                        <h4 className="text-sm font-bold text-white mb-1">{opt.name}</h4>
                        <p className="text-xs text-stone-300 leading-relaxed">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Safari Content */}
              {plannerCategory === "safari" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-lg font-serif font-bold text-[#E8D08D] flex items-center gap-2">
                      <Sun className="w-5 h-5 text-[#BFA13B]" />
                      <span>Red Dune Desert Safari &amp; Bedouin Camp</span>
                    </h3>
                    <span className="text-xs text-stone-400">Signature Arabian Night</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Standard 4x4 Dune Bashing & BBQ", desc: "High-octane dune drive, camel ride, henna painting & buffet dinner.", tag: "Classic" },
                      { name: "VIP Red Dune Camp with Table Service", desc: "Dedicated VIP seating, premium BBQ banquet & quad bike rental.", tag: "Top Comfort" },
                      { name: "Overnight Desert Camping Under Stars", desc: "Sleep in Arabian desert tents, morning sunrise breakfast & dune drive.", tag: "Unforgettable" },
                    ].map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedPlannerItems({ ...selectedPlannerItems, safari: opt.name })}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          selectedPlannerItems.safari === opt.name
                            ? "bg-[#BFA13B]/20 border-[#BFA13B] text-white"
                            : "bg-white/5 border-white/10 hover:border-white/30 text-stone-300"
                        }`}
                      >
                        <span className="text-[10px] font-bold text-[#BFA13B] block mb-1">{opt.tag}</span>
                        <h4 className="text-sm font-bold text-white mb-1">{opt.name}</h4>
                        <p className="text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Shopping Content */}
              {plannerCategory === "shopping" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-lg font-serif font-bold text-[#E8D08D] flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-[#BFA13B]" />
                      <span>Tax-Free Shopping, Souks &amp; Gold Boutiques</span>
                    </h3>
                    <span className="text-xs text-stone-400">Guaranteed 1 Free Day</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Dubai Mall Fashion Avenue", desc: "World&apos;s luxury fashion houses, tax-free retail & fountain views.", tag: "Mega Mall" },
                      { name: "Gold & Spice Souks in Deira", desc: "Historic wooden market stalls, genuine 24k gold jewelry & saffron.", tag: "Heritage" },
                      { name: "Mall of the Emirates & Ski Dubai", desc: "Indoor snow park, mid-range luxury fashion & gourmet dining.", tag: "Family Favorite" },
                    ].map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedPlannerItems({ ...selectedPlannerItems, shopping: opt.name })}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          selectedPlannerItems.shopping === opt.name
                            ? "bg-[#BFA13B]/20 border-[#BFA13B] text-white"
                            : "bg-white/5 border-white/10 hover:border-white/30 text-stone-300"
                        }`}
                      >
                        <span className="text-[10px] font-bold text-[#BFA13B] block mb-1">{opt.tag}</span>
                        <h4 className="text-sm font-bold text-white mb-1">{opt.name}</h4>
                        <p className="text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Custom Trip Summary & Direct Action */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-300 space-y-1 text-center sm:text-left">
                  <div className="font-bold text-white text-sm">
                    Selected Custom Inclusions:
                  </div>
                  <div className="text-stone-400">
                    {selectedPlannerItems.flights} • {selectedPlannerItems.hotels} • {selectedPlannerItems.safari}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="https://wa.me/919810024680?text=Hello%20Altitude%20Travel,%20I%20am%20planning%20a%20Dubai%20trip%20with%20custom%20flights%20and%20hotels."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#BFA13B] hover:bg-[#d4b343] text-stone-950 flex items-center gap-1.5 transition-all shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Itinerary</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsCustomModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Finalize Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: HOW MANY DAYS ARE ENOUGH FOR A DUBAI TOUR? (H2)                */}
        {/* ========================================================================= */}
        <section id="how-many-days" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            
            <div className="inline-flex items-center gap-2 bg-[#FBF7EE] border border-[#BFA13B]/40 text-[#BFA13B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#BFA13B]" />
              <span className="tracking-wide">Recommended Duration</span>
            </div>

            {/* EXACT H2 */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
              How Many Days Are Enough for a <span className="italic font-normal text-[#BFA13B]">Dubai Tour?</span>
            </h2>

            {/* VERBATIM TEXT FROM PROMPT */}
            <div className="space-y-3.5 text-stone-600 text-sm sm:text-base leading-relaxed font-normal text-left sm:text-center max-w-3xl mx-auto">
              <p>
                A 4 to 6 day Dubai trip can give you enough time to explore many of the city&apos;s major attractions and enjoy some activities. However, the ideal duration depends on your interests and budget.
              </p>
              <p className="font-semibold text-stone-800 bg-[#FBF7EE] p-4 rounded-xl border border-[#BFA13B]/30 shadow-2xs">
                For a short trip, you can focus on major attractions such as Burj Khalifa, Dubai Mall, Dubai Marina, Palm Jumeirah, and a desert safari.
              </p>
            </div>

            {/* Quick 5-Day Plan Blueprint Timeline */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-5 gap-3 text-left">
              {[
                { day: "Day 01", title: "Arrival & Marina Dhow Cruise" },
                { day: "Day 02", title: "Burj Khalifa & Dubai Mall" },
                { day: "Day 03", title: "4x4 Desert Safari & BBQ Feast" },
                { day: "Day 04", title: "Guaranteed Leisure Free Day" },
                { day: "Day 05", title: "Palm Jumeirah & Return Flight" },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FBF7EE] border border-[#E5E0D5] text-xs shadow-2xs">
                  <span className="font-bold text-[#BFA13B] text-[11px] block">{item.day}</span>
                  <span className="font-serif font-bold text-[#1C1917] block mt-0.5">{item.title}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: DUBAI TRAVEL TIPS (H2) & FOOD AND CUISINE (H3)                 */}
        {/* ========================================================================= */}
        <section id="dubai-travel-tips" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-white border border-[#BFA13B]/30 text-[#BFA13B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span className="tracking-wide">Expert Insider Advice</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Dubai <span className="italic font-normal text-[#BFA13B]">Travel Tips</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                A little planning can make your Dubai holiday more comfortable and enjoyable.
              </p>
            </div>

            {/* Travel Tips 4 Cards (H3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              
              {/* Plan Your Itinerary - H3 */}
              <div className="bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-[#E5E0D5] shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center mb-3 border border-[#BFA13B]/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#1C1917]">
                  Plan Your Itinerary
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Dubai has many attractions, so plan your itinerary before travelling. Group attractions that are close to each other to save time.
                </p>
              </div>

              {/* Dress Comfortably and Respect Local Culture - H3 */}
              <div className="bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-[#E5E0D5] shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center mb-3 border border-[#BFA13B]/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#1C1917]">
                  Dress Comfortably and Respect Local Culture
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Wear comfortable clothes for sightseeing and follow local customs, especially when visiting religious or traditional places.
                </p>
              </div>

              {/* Carry Essential Items - H3 */}
              <div className="bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-[#E5E0D5] shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center mb-3 border border-[#BFA13B]/30">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#1C1917]">
                  Carry Essential Items
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Keep your passport, travel documents, money, medicines, and other important items safely with you.
                </p>
              </div>

              {/* Book Popular Attractions in Advance - H3 */}
              <div className="bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-[#E5E0D5] shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center mb-3 border border-[#BFA13B]/30">
                  <Ticket className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#1C1917]">
                  Book Popular Attractions in Advance
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Some popular attractions can get busy, especially during peak travel periods. Booking tickets in advance can help you save time.
                </p>
              </div>

            </div>

            {/* DUBAI FOOD AND CUISINE - H3 SPECIAL HIGHLIGHT CARD */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3 relative h-48 sm:h-52 rounded-xl overflow-hidden shrink-0 border border-[#E5E0D5]">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                  alt="Dubai Arabic Cuisine & Shawarma"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF7EE] text-[#BFA13B] border border-[#BFA13B]/30 text-xs font-bold">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span className="tracking-wide">Gastronomy Guide</span>
                </div>
                
                {/* EXACT H3 */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Dubai Food and Cuisine
                </h3>

                {/* VERBATIM TEXT FROM PROMPT */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Dubai is a great destination for food lovers. You can find traditional Middle Eastern dishes as well as Indian, Asian, European, and other international cuisines.
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  During your Dubai tour, you can try dishes such as shawarma, hummus, falafel, kebabs, and Arabic desserts. The city also has many restaurants and cafés for different budgets.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: FAQ’S (H2) WITH EXACT 4 QUESTIONS (H3)                         */}
        {/* ========================================================================= */}
        <section id="dubai-faqs" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-[#FBF7EE] border border-[#BFA13B]/40 text-[#BFA13B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <HelpCircle className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span className="tracking-wide">Frequently Asked Questions</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                FAQ’S About <span className="italic font-normal text-[#BFA13B]">Dubai Travel</span>
              </h2>

              <p className="text-base text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
                Everything you need to know about planning, booking, and enjoying your tour in Dubai.
              </p>
            </div>

            {/* Accordion with Exact H3 Headings */}
            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#FBF7EE] rounded-2xl border border-[#E5E0D5] shadow-xs overflow-hidden transition-all duration-200 hover:border-[#BFA13B]/40"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      {/* EXACT H3 HEADING */}
                      <h3 className="text-base sm:text-[17px] font-serif font-bold text-[#1C1917] hover:text-[#BFA13B] transition-colors leading-snug">
                        {faq.q}
                      </h3>

                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "bg-[#0C0A09] text-[#BFA13B] rotate-180" : "bg-stone-200/60 text-stone-600"
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
        {/* SECTION 9: CONCLUSION (H2) & FINAL DIRECT CTA BANNER                      */}
        {/* ========================================================================= */}
        <section id="conclusion" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-[#FBF7EE] border border-[#BFA13B]/40 text-[#BFA13B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
              <span className="tracking-wide">Begin Your Journey</span>
            </div>

            {/* EXACT H2 */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
              Conclusion
            </h2>

            {/* VERBATIM TEXT FROM PROMPT */}
            <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed font-normal max-w-2xl mx-auto">
              <p>
                Dubai is a great place to experience modernity, adventure, culture, cuisine, and luxury. A tour in Dubai can take you from popular sights to desert safaris, shopping, and relaxing in style.
              </p>
              <p className="font-semibold text-stone-900">
                With our expert guidance and special Dubai tour packages, you will be able to witness the best sights in Dubai and have a holiday of a lifetime.
              </p>
            </div>

            {/* Final Booking Concierge Banner */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0C0A09] border border-[#BFA13B]/30 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#BFA13B]">
                  Ready to explore Dubai?
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Speak Directly with Our Delhi Planners
                </h3>
                <p className="text-xs sm:text-sm text-stone-400">
                  Custom itineraries, flight coordination, visas, and handpicked 4/5-star stays.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <a
                  href="tel:+919810024680"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#BFA13B]" />
                  <span>Call +91 98100 24680</span>
                </a>

                <a
                  href="https://wa.me/919810024680?text=Hello%20Altitude%20Travel,%20I%20want%20to%20plan%20a%20Dubai%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#BFA13B] hover:bg-[#d4b343] text-stone-950 flex items-center gap-2 transition-all shadow-md cursor-pointer"
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
