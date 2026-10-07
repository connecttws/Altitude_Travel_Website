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
  FileText,
  UserCheck,
  HeartHandshake,
} from "lucide-react";

export default function VietnamClientPage() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Vietnam (Hanoi, Ha Long Bay & Hoi An)",
    travelMonth: "Next 30 Days",
    guests: "2 Adults (Couple)",
    notes: "Inquiring for Vietnam tour and travel packages from Delhi.",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  // Curated Vietnam Tour Packages
  const vietnamPackages: TourPackage[] = [
    {
      id: "vietnam-heritage-bays-lanterns",
      title: "North & Central Vietnam: Ha Long Bay Cruise, Hanoi & Hoi An",
      cardTitle: "Bays & Ancient Lantern Towns",
      subtitle: "Hanoi, Ha Long Bay Luxury Cruise, Da Nang & Hoi An",
      shortDescription: "Overnight Ha Long luxury junk cruise, Hanoi 36 guild streets, Ba Na Hills & Hoi An lanterns.",
      category: "international",
      destination: "Vietnam",
      duration: "7 Days / 6 Nights",
      days: 7,
      nights: 6,
      priceStarting: "₹42,000",
      rating: 4.9,
      reviewsCount: 143,
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
      tag: "Best Seller",
      iconicLandmarks: ["Ha Long Bay Limestone Karsts", "Hanoi Old Quarter & Train Street", "Hoi An Ancient Lantern Town", "Golden Bridge Ba Na Hills"],
      hiddenGems: ["Hanoi Train Street secret coffee balcony", "Ba Na Hills giant hands in morning mist", "Tra Que organic farming village"],
      localFoodHighlight: "Authentic Pho Bo, Banh Mi, Egg Coffee & fresh summer spring rolls",
      freeDayNote: "Day 5 in Hoi An is an unscheduled free day to tailor custom silk clothes or cycle through rural paddy fields.",
      overview:
        "Vietnam is Asia's most enchanting treasure. Cruise through emerald karsts on a luxury Ha Long ship, taste rich egg coffee in vintage Hanoi alleyways, marvel at the Golden Bridge held by giant stone hands, and release glowing paper lanterns on the Thu Bon river in Hoi An.",
      itinerary: [
        { day: 1, title: "Arrive in Hanoi & Street Food Discovery", description: "Arrival at Noi Bai Airport, private transfer to Old Quarter hotel, and evening guided walking street food tour tasting Pho and Banh Mi." },
        { day: 2, title: "Hanoi Heritage & Train Street Experience", description: "Visit Ho Chi Minh Mausoleum, Temple of Literature, and sip legendary egg coffee beside passing vintage train tracks." },
        { day: 3, title: "Ha Long Bay Overnight Luxury Cruise", description: "Board boutique cruise ship among thousands of limestone karsts. Kayak into secret sea caves, explore Sung Sot Cave and enjoy sunset deck party." },
        { day: 4, title: "Ha Long Sunrise & Flight to Da Nang / Hoi An", description: "Morning Tai Chi on sundeck, disembark and fly to Da Nang; scenic evening check-in to Hoi An riverside heritage resort." },
        { day: 5, title: "A Complete Free Day in Enchanting Hoi An", description: "Unscheduled free day! Cycle to An Bang beach, get bespoke clothes tailored within 24 hours, or take a riverboat lantern ride." },
        { day: 6, title: "Golden Hands Bridge at Ba Na Hills", description: "Ascend via world-record cable car to photograph the famous giant stone hands holding the Golden Bridge, followed by Da Nang Dragon Bridge evening show." },
        { day: 7, title: "Da Nang Departure to Delhi", description: "Breakfast overlooking the river, local coffee tasting, and private drop-off at Da Nang International Airport." },
      ],
      inclusions: ["4-Star Hotel Stays & 1 Night Luxury Ha Long Cruise", "All Meals Onboard Cruise + Daily Buffet Breakfasts", "Domestic Flight Hanoi to Da Nang", "Ba Na Hills Cable Car & Entry Pass", "Private Airport & Sightseeing Transfers", "Vietnam E-Visa Support"],
      exclusions: ["International Flights from Delhi", "Personal shopping & tailored clothes", "Tips & laundry"],
    },
    {
      id: "vietnam-classic-north-south",
      title: "Classic Vietnam North to South: Hanoi to Ho Chi Minh City",
      cardTitle: "Grand North to South Journey",
      subtitle: "Hanoi, Ha Long Bay, Hoi An, Da Nang & Ho Chi Minh City",
      shortDescription: "Complete cross-country discovery covering emerald bays, ancient lantern towns & vibrant Saigon.",
      category: "international",
      destination: "Vietnam",
      duration: "9 Days / 8 Nights",
      days: 9,
      nights: 8,
      priceStarting: "₹58,500",
      rating: 5.0,
      reviewsCount: 186,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
      tag: "Most Popular",
      iconicLandmarks: ["Ha Long Bay UNESCO Cruise", "Hoi An Ancient Lantern Town", "Cu Chi Tunnels Saigon", "Mekong Delta Floating Market"],
      hiddenGems: ["Saigon vintage rooftop cafe scene", "Bat Trang ceramic craft village", "Cam Thanh coconut forest basket boat dance"],
      localFoodHighlight: "Saigon Banh Xeo sizzling pancakes, grilled seafood & Mekong tropical fruits",
      freeDayNote: "Day 6 is a guaranteed free day in Hoi An to unwind on An Bang beach or take a culinary cooking class.",
      overview:
        "The quintessential journey through Vietnam's diverse soul. From the tranquil ancient capital of Hanoi and mist-shrouded limestone towers of Ha Long Bay, to the glowing lanterns of Hoi An and dynamic energy of Ho Chi Minh City with the Cu Chi Tunnels.",
      itinerary: [
        { day: 1, title: "Hanoi Arrival & Old Quarter Welcome", description: "Meet & greet at Hanoi airport, Old Quarter hotel check-in, and evening cyclo tour around Hoan Kiem Lake." },
        { day: 2, title: "Hanoi Cultural Wonders & French Quarter", description: "Tour the Temple of Literature, St. Joseph Cathedral, and afternoon egg coffee at Train Street." },
        { day: 3, title: "Ha Long Bay 5-Star Cruise Experience", description: "Scenic drive to Ha Long Bay. Check-in to luxury suite cabin, kayak emerald lagoons, and attend Vietnamese spring roll cooking class." },
        { day: 4, title: "Ha Long Caves & Flight to Central Vietnam", description: "Early morning Tai Chi, visit Ti Top Island viewpoint, transfer to Hanoi airport for flight to Da Nang / Hoi An." },
        { day: 5, title: "Hoi An Walking Tour & Basket Boat Ride", description: "Explore the Japanese Covered Bridge and Phuc Kien assembly hall, followed by spinning round basket boat ride in coconut forest." },
        { day: 6, title: "A Complete Free Day in Hoi An", description: "Relax at An Bang beach, rent a bicycle through emerald rice paddies, or explore silk lantern ateliers." },
        { day: 7, title: "Fly to Ho Chi Minh City & Colonial Heritage", description: "Morning flight to vibrant Ho Chi Minh City. Visit Notre Dame Cathedral, Central Post Office, and bustling Ben Thanh Market." },
        { day: 8, title: "Historic Cu Chi Tunnels & Mekong Delta Excursion", description: "Explore the historic underground Cu Chi network followed by a tranquil wooden sampan boat ride along Mekong Delta canals." },
        { day: 9, title: "Farewell Vietnam & Flight to Delhi", description: "Leisurely breakfast, souvenir shopping for Vietnamese drip coffee & silk, and private airport transfer." },
      ],
      inclusions: ["8 Nights in 4/5-Star Hotels & Luxury Cruise", "2 Domestic Flights (Hanoi-Da Nang & Da Nang-Saigon)", "All Guided Excursions with English-Speaking Guides", "Cu Chi Tunnels & Mekong Delta Day Tour", "All Private Airport Transfers", "Vietnam Visa Guidance"],
      exclusions: ["International Flights Delhi-Hanoi / Saigon-Delhi", "Personal expenses", "Camera fees if any"],
    },
    {
      id: "vietnam-grand-luxury-discovery",
      title: "Grand Vietnam Discovery: Heritage, Beaches & Mekong Delta",
      cardTitle: "Ultra-Luxury Vietnam Expedition",
      subtitle: "5-Star Resorts, Private Junk Charter & Mekong River Retreat",
      shortDescription: "Private Ha Long Bay junk charter, beachfront resort in Da Nang & executive Saigon luxury.",
      category: "international",
      destination: "Vietnam",
      duration: "10 Days / 9 Nights",
      days: 10,
      nights: 9,
      priceStarting: "₹76,000",
      rating: 5.0,
      reviewsCount: 94,
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=80",
      tag: "Ultra Luxe",
      iconicLandmarks: ["Private Ha Long Bay Luxury Balcony Cruise", "InterContinental Da Nang Sun Peninsula", "War Remnants Museum", "Mekong Luxury Riverboat"],
      hiddenGems: ["Private sunset champagne cruise on Thu Bon river", "Secret rooftop speakeasy in old Saigon", "Ninh Binh Trang An river rowboat"],
      localFoodHighlight: "Fine-dining modern Vietnamese fusion & 5-course seafood banquet on the bay",
      freeDayNote: "Days 5 and 8 are unscheduled free days for private beach resort relaxation and boutique shopping.",
      overview:
        "The ultimate bespoke expedition for discerning travellers seeking luxury comfort, private chauffeured cars, exclusive five-star beachfront resorts, and deep immersion into Vietnam's most scenic wonders.",
      itinerary: [
        { day: 1, title: "VIP Hanoi Arrival & Heritage Suite Check-In", description: "VIP fast-track arrival at Hanoi, luxury Mercedes transfer to boutique heritage hotel, and private fine dining welcome dinner." },
        { day: 2, title: "Private Hanoi Curator Tour & Ninh Binh Day Trip", description: "Private day trip to Ninh Binh (Ha Long on land) rowing past dramatic limestone caves and ancient temples." },
        { day: 3, title: "Ha Long Bay Private Luxury Balcony Cruise", description: "Executive limousine transfer to Ha Long. Board 5-star ship with private ocean-view balcony cabin, private kayaking, and gourmet dining." },
        { day: 4, title: "Bay Sunrise & Flight to Da Nang Beachfront Resort", description: "Sunrise meditation, private flight to Da Nang, check-in to premier luxury beachfront pool villa." },
        { day: 5, title: "A Complete Free Day on My Khe Beach", description: "Indulge in private spa wellness treatments, relax on white sands, or enjoy infinity pool cocktails." },
        { day: 6, title: "Ba Na Hills VIP Golden Bridge & Hoi An Lanterns", description: "VIP priority cable car to Golden Bridge, afternoon transfer to Hoi An with private sunset riverboat lantern release." },
        { day: 7, title: "Private Flight to Ho Chi Minh City & Rooftop Dinner", description: "Business class domestic flight to Saigon, luxury hotel check-in, and 360-degree skyline dinner." },
        { day: 8, title: "A Complete Free Day in Saigon", description: "Shop premier boutiques on Dong Khoi Street or explore vintage cafes along the French boulevards." },
        { day: 9, title: "Private Mekong Delta Luxury Speedboat Tour", description: "Exclusive speedboat ride through narrow mangrove canals, visiting organic tropical fruit orchards and honey farms." },
        { day: 10, title: "Private Airport Transfer to Delhi", description: "Breakfast at leisure and private airport transfer for your direct flight home." },
      ],
      inclusions: ["9 Nights in 5-Star Luxury Resorts & Balcony Suite Cruise", "Private Limousine Transfers Throughout", "All VIP Priority Attraction Passes & Cable Cars", "Private Mekong Delta Speedboat Charter", "Dedicated Private Tour Specialist", "Complete Visa Support"],
      exclusions: ["International Flights from Delhi", "Personal boutique shopping", "Travel insurance"],
    },
  ];

  const handleOpenPackageModal = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  const faqs = [
    {
      q: "Q1. How many days are enough for a trip to Vietnam?",
      a: "A 7-10-day tour is just enough to witness the beauty of the most popular destinations in Vietnam, such as Hanoi, Ha Long Bay, Hoi An, Da Nang, and Ho Chi Minh City.",
    },
    {
      q: "Do Indians need a visa to visit Vietnam?",
      a: "Indian citizens do require a visa to enter Vietnam. However, Indians can apply for an e-visa Vietnam entry visa.",
    },
    {
      q: "Is Vietnam a family-friendly destination?",
      a: "Vietnam is a family-friendly destination offering cultural, beach, nature, adventure activities, and much more for all ages.",
    },
    {
      q: "Are there vegetarian options in Vietnam?",
      a: "Yes, Vietnam offers vegetarian specialties. You can also find vegetarian meals in most local restaurants, cafes, and hotels.",
    },
    {
      q: "How much does a Vietnam tour package cost?",
      a: "The Vietnam package tour cost depends on the holiday plan, destination, accommodations, inclusions, and more. The Vietnam tour package can be chosen according to your travel budget.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-slate-800 flex flex-col selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Global Header */}
      <Navbar
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenInquiryModal={() => {
          const formElem = document.getElementById("vietnam-inquiry-box");
          if (formElem) {
            formElem.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }}
      />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* HERO SECTION: 3D MOVING PHOTOS + VIETNAMESE CALLIGRAPHY + VERBATIM H1     */}
        {/* ========================================================================= */}
        <section className="relative pt-[128px] pb-10 sm:pt-[132px] sm:pb-12 lg:pt-[136px] lg:pb-14 bg-gradient-to-b from-[#EEF7F2] via-[#F4FBF7] to-white border-b border-slate-200/80 overflow-hidden">
          
          {/* Subtle Emerald Atmosphere Glows */}
          <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/3 -left-20 w-[420px] h-[420px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Bar: Vietnamese-Inspired Elegant Font Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-emerald-200/50">
              
              {/* ELEGANT VIETNAMESE-INSPIRED BADGE */}
              <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/70 border border-emerald-300/80 px-4 py-1.5 rounded-full shadow-xs">
                <span className="text-emerald-700 font-bold text-sm tracking-wide">🏮</span>
                <span className="font-serif text-emerald-950 text-base sm:text-lg font-bold tracking-wide italic">
                  Khám phá vẻ đẹp diệu kỳ của Việt Nam
                </span>
                <span className="text-emerald-600/60 hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Discover the Magic of Vietnam
                </span>
              </div>

              {/* Currency & Direct Flight Pills */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1.5">
                  <Gem className="w-3.5 h-3.5 text-amber-500" />
                  <span>Currency: <strong>Vietnamese Dong (VND)</strong></span>
                </span>
                <span className="hidden sm:inline-flex bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-emerald-600" />
                  <span>4.5h Direct Flight from Delhi</span>
                </span>
              </div>

            </div>

            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: Editorial Narrative & EXACT H1 */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 self-start bg-white/90 backdrop-blur-md border border-emerald-200/80 text-emerald-950 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                  <Compass className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Curated Southeast Asia Holidays • Connaught Place, Delhi Planning Desk</span>
                </div>

                {/* EXACT H1 HEADING */}
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#08182B] tracking-tight leading-[1.18]">
                  Vietnam Tour and Travel:{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-800 to-amber-700">
                    Explore the Best of Vietnam
                  </span>
                </h1>

                {/* Subtitle Highlight */}
                <p className="text-base sm:text-lg font-medium text-emerald-950/90 leading-relaxed">
                  Discover the Best of Vietnam — Explore Vietnam with our expert-guided tours. Visit Hanoi, Ha Long Bay, Ho Chi Minh City, beautiful beaches, and experience the best of Vietnam.
                </p>

                {/* VERBATIM INTRODUCTORY PARAGRAPHS */}
                <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  <p>
                    Vietnam is among the most popular tourist destinations in southeast Asia. This country fascinates many people with its stunning beauty, intriguing history, rich cuisine, and unique culture.
                  </p>
                  <p>
                    The cities of Vietnam, from the vibrant metropolis of Ho Chi Minh City to the quiet bay of Ha Long, are undeniably charming and attract locals and tourists in droves. Vietnam tour packages are an excellent value for families, couples, and groups of friends.
                  </p>
                  <p>
                    Vietnam has a lot to offer in terms of landscapes, from spectacular beaches to ancient temples, and a wide variety of local markets, intriguing history, and unique culture. A well-structured Vietnam tour and travel itinerary will help you see the country’s highlights and make your holiday comfortable and stress-free.
                  </p>
                </div>

                {/* Core Pillars Ribbon */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                      <Ship className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#08182B]">Ha Long Bay Cruise</h4>
                      <p className="text-[11px] text-slate-500">Emerald Karsts &amp; Caves</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#08182B]">Hoi An Lantern Town</h4>
                      <p className="text-[11px] text-slate-500">Ancient Riverfront Glow</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-200">
                      <Palmtree className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#08182B]">Ba Na Hills &amp; Beaches</h4>
                      <p className="text-[11px] text-slate-500">Golden Bridge &amp; Da Nang</p>
                    </div>
                  </div>
                </div>

                {/* Popular Discovery Badges */}
                <div className="pt-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
                    Featured Destinations:
                  </span>
                  {["Hanoi Old Quarter", "Ha Long Bay", "Hoi An Ancient Town", "Da Nang Beaches", "Ho Chi Minh City", "Cu Chi Tunnels"].map(
                    (place, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-slate-800 border border-slate-200/80 shadow-2xs flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        <span>{place}</span>
                      </span>
                    )
                  )}
                </div>

              </div>

              {/* Right Column: 3D MOVING PHOTOS SHOWCASE + QUICK INQUIRY CARD */}
              <div className="lg:col-span-5 space-y-6" id="vietnam-inquiry-box">
                
                {/* ============================================================= */}
                {/* 3D MOVING POSITION PHOTOS SHOWCASE                          */}
                {/* User: "We can use 3d animation to show each place in Vietnam's*/}
                {/*        major attractions moving through the hero section."   */}
                {/* ============================================================= */}
                <div className="relative h-[290px] sm:h-[320px] rounded-2xl p-4 bg-gradient-to-tr from-[#08182B] via-[#0E2820] to-[#08182B] overflow-hidden shadow-xl border border-emerald-900/60 flex items-center justify-center">
                  
                  {/* Subtle Background Emerald Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_60%)]" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md text-emerald-300 px-3 py-1 rounded-full border border-white/20">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>Live 3D Attractions Showcase</span>
                    </span>
                  </div>

                  {/* 3D Moving Perspective Photos Container */}
                  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
                    
                    {/* Card 1: Left 3D Moving Photo - Ha Long Bay */}
                    <div className="absolute -left-2 sm:left-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 animate-3d-left z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80"
                        alt="Ha Long Bay emerald limestone karsts"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-emerald-400 block">UNESCO Wonder</span>
                        <h4 className="text-xs font-bold leading-tight">Ha Long Bay Cruise</h4>
                      </div>
                    </div>

                    {/* Card 2: Center 3D Floating Hero - Hoi An River Lanterns */}
                    <div className="relative w-[180px] sm:w-[210px] h-[230px] sm:h-[250px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-2 border-amber-400 animate-3d-center z-20 group cursor-pointer">
                      <Image
                        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
                        alt="Hoi An glowing night lanterns and riverboat"
                        fill
                        sizes="240px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08182B]/95 via-[#08182B]/30 to-transparent" />
                      <div className="absolute top-2.5 right-2.5 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        MUST VISIT
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10.5px] font-bold text-amber-300 block">Ancient Heritage Town</span>
                        <h4 className="text-sm font-bold leading-tight">Hoi An Lanterns</h4>
                      </div>
                    </div>

                    {/* Card 3: Right 3D Moving Photo - Ba Na Hills Golden Bridge */}
                    <div className="absolute -right-2 sm:right-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 animate-3d-right z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80"
                        alt="Ba Na Hills Golden Bridge giant hands Da Nang"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-amber-400 block">Iconic Hands Bridge</span>
                        <h4 className="text-xs font-bold leading-tight">Da Nang Ba Na Hills</h4>
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
                        Vietnam Tour Inquiry
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
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
                        Thank you! Our Vietnam travel planner from Connaught Place, Delhi will contact you shortly with custom itineraries and flight options.
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
                            placeholder="e.g. Aman Gupta"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none"
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
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                            Trip Duration
                          </label>
                          <select
                            value={formData.travelMonth}
                            onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none"
                          >
                            <option value="7 Days / 6 Nights">7 Days / 6 Nights (North & Central)</option>
                            <option value="9 Days / 8 Nights">9 Days / 8 Nights (Classic North to South)</option>
                            <option value="10 Days / 9 Nights">10 Days / 9 Nights (Grand Discovery)</option>
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
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none"
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
                        className="w-full py-3 px-5 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md transition-all flex items-center justify-center gap-2 border border-emerald-400 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Submitting Vietnam Inquiry...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 text-white fill-white" />
                            <span>Request Custom Vietnam Package Quote</span>
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
        {/* SECTION 1: WHY VISIT VIETNAM? (H2)                                        */}
        {/* ========================================================================= */}
        <section id="why-visit-vietnam" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Enchanting Southeast Asia</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Why visit <span className="text-emerald-700">Vietnam?</span>
              </h2>

              {/* VERBATIM TEXT FROM PROMPT */}
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Vietnam is great for those who want to have a cultural, adventurous, nature-loving, relaxing and culinary experience.
              </p>
            </div>

            {/* 9 Reasons Cards Grid (Verbatim from User prompt) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
              {[
                { title: "Beautiful beaches and islands", desc: "White sands in Da Nang, Phu Quoc tropical palms & Nha Trang turquoise bays.", icon: Waves, color: "text-sky-600 bg-sky-50" },
                { title: "Rich culture and history", desc: "Thousand-year-old dynastic temples, water puppetry & French colonial architecture.", icon: Award, color: "text-amber-600 bg-amber-50" },
                { title: "Beautiful scenery and nature", desc: "UNESCO limestone karsts of Ha Long Bay & emerald terraced rice fields.", icon: Palmtree, color: "text-emerald-600 bg-emerald-50" },
                { title: "Delicious Vietnamese food", desc: "World-famous Pho noodle soup, crusty Banh Mi baguettes & rich egg coffee.", icon: UtensilsCrossed, color: "text-rose-600 bg-rose-50" },
                { title: "Cheap things and experiences", desc: "Unmatched luxury value for boutique stays, tailoring, and dining.", icon: Gem, color: "text-indigo-600 bg-indigo-50" },
                { title: "Historic places and cities", desc: "Imperial Citadel of Hue, Hanoi 36 guild streets & historic Cu Chi tunnels.", icon: Building, color: "text-teal-600 bg-teal-50" },
                { title: "Adventurous activities and experiences", desc: "Kayaking through secret sea caves, Ba Na Hills cable cars & basket boat rides.", icon: Sun, color: "text-orange-600 bg-orange-50" },
                { title: "Traditional markets and culture", desc: "Vibrant night lantern river markets, floating Mekong boats & silk bazaars.", icon: ShoppingBag, color: "text-purple-600 bg-purple-50" },
                { title: "Perfect for families", desc: "Safe, welcoming locals, family-friendly cruises & diverse interactive activities.", icon: HeartHandshake, color: "text-blue-600 bg-blue-50" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFF] border border-slate-200/80 hover:border-emerald-300 transition-all shadow-2xs group"
                  >
                    <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center mb-2.5`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#08182B] mb-1 leading-snug group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* VERBATIM CLOSING PARAGRAPH FOR WHY VISIT VIETNAM */}
            <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/80 text-center text-xs sm:text-sm font-semibold text-emerald-950 max-w-4xl mx-auto">
              Vietnam has a lot to offer for everyone who wants to immerse themselves into a cultural and traditional country, but also explore and discover new things in a modern and globalized world.
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: BEST PLACES TO VISIT IN VIETNAM (H2) - ELABORATED IN DETAIL    */}
        {/* User: "Note: Elaborate each place in proper format and detail"             */}
        {/* ========================================================================= */}
        <section id="best-places-to-visit" className="py-10 sm:py-12 lg:py-14 bg-[#EEF4FA] border-b border-sky-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Compass className="w-3.5 h-3.5 text-sky-700" />
                <span>Detailed Destination Guide</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Best Places to Visit in <span className="text-emerald-700">Vietnam</span>
              </h2>

              {/* VERBATIM INTRODUCTORY COPY */}
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Vietnam is a country with a lot of different places to visit. Here is the list of the most popular destinations you may want to consider adding to your Vietnam tour:
              </p>
            </div>

            {/* 5 ELABORATED DESTINATIONS (H3) */}
            <div className="space-y-8 max-w-5xl mx-auto">
              
              {/* Place 1: Hanoi - H3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-5/12 relative h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
                    alt="Hanoi Old Quarter streets and Hoan Kiem Lake"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    The Historic Capital
                  </span>
                </div>
                <div className="flex-1 space-y-3 text-left">
                  {/* EXACT H3 */}
                  <h3 className="text-2xl font-bold text-[#08182B] flex items-center gap-2">
                    <span>Hanoi</span>
                  </h3>
                  {/* VERBATIM PROMPT COPY */}
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    Hanoi is the capital of Vietnam, which is famous for its ancient streets, traditional architecture, local markets and vibrant food scene. Explore the alleys of the Old Quarter, Hoan Kiem Lake, and many other places unique to this city.
                  </p>
                  {/* ELABORATED DETAILS */}
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>36 Ancient Guild Streets &amp; French Quarter</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Hoan Kiem Lake &amp; Ngoc Son Island Temple</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Famous Train Street &amp; Egg Coffee Cafes</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Temple of Literature (1070 AD first university)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Place 2: Ha Long Bay - H3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row-reverse gap-6 items-center">
                <div className="w-full md:w-5/12 relative h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
                    alt="Ha Long Bay emerald limestone islands and junk boats"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    UNESCO World Heritage
                  </span>
                </div>
                <div className="flex-1 space-y-3 text-left">
                  {/* EXACT H3 */}
                  <h3 className="text-2xl font-bold text-[#08182B] flex items-center gap-2">
                    <span>Ha Long Bay</span>
                  </h3>
                  {/* VERBATIM PROMPT COPY */}
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    Ha Long Bay is famous for its emerald waters and unique landscape of limestone islands. The best way to explore this place is by taking a boat tour on the bay’s waters.
                  </p>
                  {/* ELABORATED DETAILS */}
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Overnight Luxury Junk Boat Cruise with Balcony</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Kayaking through Sung Sot &amp; Luon Cave Lagoons</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Ti Top Island Panoramic Summit Viewpoint</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Morning Tai Chi &amp; Sunset Seafood Dinner Deck</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Place 3: Ho Chi Minh City - H3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-5/12 relative h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80"
                    alt="Ho Chi Minh City skyline, Ben Thanh Market and French architecture"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#08182B] text-sky-300 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Vibrant Metropolis
                  </span>
                </div>
                <div className="flex-1 space-y-3 text-left">
                  {/* EXACT H3 */}
                  <h3 className="text-2xl font-bold text-[#08182B] flex items-center gap-2">
                    <span>Ho Chi Minh City</span>
                  </h3>
                  {/* VERBATIM PROMPT COPY */}
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    Ho Chi Minh City is a busy city offering a mix of ancient temples and skyscrapers, shops, cafes, and local eateries.
                  </p>
                  {/* ELABORATED DETAILS */}
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Historic Cu Chi Underground Tunnels Excursion</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Notre Dame Cathedral &amp; Central Post Office</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Bustling Ben Thanh Market Bargain Shopping</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Day Trip to Mekong Delta Floating Markets</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Place 4: Hoi An - H3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row-reverse gap-6 items-center">
                <div className="w-full md:w-5/12 relative h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
                    alt="Hoi An ancient river town with glowing night lanterns"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full shadow-xs">
                    The Lantern Town
                  </span>
                </div>
                <div className="flex-1 space-y-3 text-left">
                  {/* EXACT H3 */}
                  <h3 className="text-2xl font-bold text-[#08182B] flex items-center gap-2">
                    <span>Hoi An</span>
                  </h3>
                  {/* VERBATIM PROMPT COPY */}
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    Hoi An is a small ancient town located along the river, decorated with lanterns in various shapes and colors, offering a chance to shop for local souvenirs and taste local specialties in the evening.
                  </p>
                  {/* ELABORATED DETAILS */}
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>UNESCO Ancient Town &amp; Japanese Covered Bridge</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Evening Thu Bon Riverboat Floating Lantern Release</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>World-Renowned 24-Hour Custom Silk Tailor Shops</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Bicycle Rides through Paddy Fields to An Bang Beach</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Place 5: Da Nang - H3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-5/12 relative h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80"
                    alt="Da Nang Golden Bridge Ba Na Hills and My Khe Beach"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-sky-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Coastal Wonder
                  </span>
                </div>
                <div className="flex-1 space-y-3 text-left">
                  {/* EXACT H3 */}
                  <h3 className="text-2xl font-bold text-[#08182B] flex items-center gap-2">
                    <span>Da Nang</span>
                  </h3>
                  {/* VERBATIM PROMPT COPY */}
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    Da Nang is a large city with wonderful beaches and numerous attractions. It also serves as a great starting point for exploring other nearby regions.
                  </p>
                  {/* ELABORATED DETAILS */}
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Giant Hands Golden Bridge at Ba Na Hills</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Pristine White Sands along My Khe Beach</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sacred Caves &amp; Pagodas at Marble Mountains</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Illuminated Weekend Fire-Breathing Dragon Bridge</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: BEST TIME TO VISIT VIETNAM (H2)                                */}
        {/* ========================================================================= */}
        <section id="best-time-to-visit" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>Weather &amp; Seasons</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Best Time to Visit <span className="text-emerald-700">Vietnam</span>
              </h2>

              {/* VERBATIM COPY FROM PROMPT */}
              <div className="space-y-3 text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  The best time to go to Vietnam depends on where you want to go because it can get pretty cold in the morning and hot in the afternoon in some places.
                </p>
                <p>
                  In general, the months of spring and autumn are good for exploring most of Vietnam. But it&apos;s always a good idea to check the weather forecast for your planned destinations to help decide when to go.
                </p>
              </div>
            </div>

            {/* 3 Climate Regions Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/30 border border-emerald-200 shadow-xs">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">North Vietnam</span>
                <h3 className="text-lg font-bold text-[#08182B] mb-2">Hanoi &amp; Ha Long Bay</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>Spring (March–April)</strong> and <strong>Autumn (September–November)</strong> offer pleasant temperatures (22°C–28°C), clear skies, and calm waters ideal for cruising Ha Long Bay.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50/70 to-blue-50/30 border border-sky-200 shadow-xs">
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">Central Vietnam</span>
                <h3 className="text-lg font-bold text-[#08182B] mb-2">Da Nang &amp; Hoi An</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>February to August</strong> is sunny and dry with crystal-clear seas, perfect for cycling through Hoi An and beach relaxing at My Khe Beach in Da Nang.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/70 to-yellow-50/30 border border-amber-200 shadow-xs">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">South Vietnam</span>
                <h3 className="text-lg font-bold text-[#08182B] mb-2">Ho Chi Minh &amp; Mekong</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>November to April</strong> brings the dry season with steady warmth, blue skies, and optimal conditions for exploring urban street markets and Mekong canals.
                </p>
              </div>

            </div>

            {/* VERBATIM CLOSING WEATHER CALLOUT */}
            <div className="mt-8 bg-sky-50/60 p-4 rounded-xl border border-sky-200 text-center text-xs sm:text-sm font-semibold text-sky-950 max-w-2xl mx-auto flex items-center justify-center gap-2">
              <Info className="w-4 h-4 text-sky-700 shrink-0" />
              <span>So if you&apos;re going out on adventures, take notice! Checking the weather in your intended destinations ahead of time can help you find the best time to go on your Vietnam tour.</span>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: BEST VIETNAM TOUR PACKAGES (H2) & 12 INCLUSIONS GRID           */}
        {/* User requested: Should look like this (12 Inclusions)                     */}
        {/* ========================================================================= */}
        <section id="vietnam-tour-packages" className="py-10 sm:py-12 lg:py-14 bg-[#F8FBFF] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Gem className="w-3.5 h-3.5 text-emerald-700" />
                <span>All-Inclusive Handcrafted Itineraries</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                Best Vietnam <span className="text-emerald-700">Tour Packages</span>
              </h2>

              {/* VERBATIM PROMPT COPY */}
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Vietnam tour packages are an excellent option to help plan your holiday, as they can bring together several important elements of the trip.
              </p>
            </div>

            {/* ===================================================================== */}
            {/* 12 PACKAGE INCLUSIONS GRID (Exact Format Requested by User)          */}
            {/* ✈️ Flights, 🏨 Accommodation, 🚐 Airport Transfers, 🗺️ Sightseeing Tours,*/}
            {/* 🚢 Ha Long Bay Cruise, 🎟️ Activities & Entry Tickets, 🍜 Meals, etc. */}
            {/* ===================================================================== */}
            <div className="mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm max-w-5xl mx-auto">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Complete Altitude Travel Assurance
                </span>
                <h3 className="text-xl font-bold text-[#08182B]">
                  What&apos;s Included in Our Handcrafted Vietnam Packages
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {[
                  { icon: "✈️", label: "Flights", desc: "Non-stop Delhi departures" },
                  { icon: "🏨", label: "Accommodation", desc: "Handpicked 4 & 5-star stays" },
                  { icon: "🚐", label: "Airport Transfers", desc: "Private AC fleet with driver" },
                  { icon: "🗺️", label: "Sightseeing Tours", desc: "Curated cultural trails" },
                  { icon: "🚢", label: "Ha Long Bay Cruise", desc: "Overnight luxury junk ship" },
                  { icon: "🎟️", label: "Activities & Tickets", desc: "Cable cars & cave passes" },
                  { icon: "🍜", label: "Meals", desc: "Daily breakfast & cruise feast" },
                  { icon: "🚗", label: "Local Transportation", desc: "Private intercity transfers" },
                  { icon: "👨‍💼", label: "Tour Guide", desc: "English-speaking experts" },
                  { icon: "🛡️", label: "Travel Insurance", desc: "Comprehensive cover options" },
                  { icon: "📋", label: "Visa Assistance", desc: "Smooth Vietnam E-Visa" },
                  { icon: "📞", label: "Travel Support", desc: "24/7 Delhi concierge desk" },
                ].map((inc, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#F8FBFF] border border-slate-200/80 hover:border-emerald-300 transition-all flex items-center gap-3 shadow-2xs"
                  >
                    <span className="text-2xl shrink-0">{inc.icon}</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-snug">{inc.label}</h4>
                      <p className="text-[10.5px] text-slate-500 font-medium leading-tight">{inc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curated Vietnam Packages Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vietnamPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                    
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      {pkg.tag}
                    </span>

                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-300" />
                      <span>{pkg.duration}</span>
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-xs text-emerald-200 block font-medium">{pkg.subtitle}</span>
                      <h3 className="text-lg font-bold text-white leading-snug">{pkg.cardTitle}</h3>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {pkg.shortDescription}
                      </p>

                      <div className="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-[11px] font-semibold text-emerald-950 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
                        <span className="text-[10.5px] text-slate-500 block">/ person (ex Delhi)</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenPackageModal(pkg)}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-[#08182B] hover:bg-emerald-900 text-amber-300 hover:text-amber-200 transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>View Itinerary</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: FAQ’S (H2) - 5 EXACT QUESTIONS & VERBATIM ANSWERS               */}
        {/* ========================================================================= */}
        <section id="vietnam-faqs" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>Frequently Asked Questions</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
                FAQ’S About <span className="text-emerald-700">Vietnam Travel</span>
              </h2>

              <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
                Clear answers for planning and booking your Vietnam tour package from Delhi.
              </p>
            </div>

            {/* Accordion with Exact H3 Headings */}
            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-emerald-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      {/* EXACT H3 HEADING */}
                      <h3 className="text-base sm:text-[17px] font-bold text-[#08182B] hover:text-emerald-700 transition-colors leading-snug">
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
        {/* SECTION 6: CONCIERGE BOOKING CTA BANNER                                   */}
        {/* ========================================================================= */}
        <section id="vietnam-booking" className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#EEF7F2] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Bespoke Vietnam Planning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
              Ready to Explore <span className="text-emerald-700">Vietnam?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Connect directly with our senior destination specialists in Connaught Place, New Delhi. We curate flights, luxury Ha Long Bay junk boats, E-Visas, and handpicked stays with transparent pricing and zero hidden fees.
            </p>

            {/* Concierge Action Box */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-tr from-[#08182B] via-[#0E2820] to-[#08182B] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Direct Delhi Concierge
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Plan Your Handcrafted Vietnam Itinerary
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Custom dates, family trips, honeymoon retreats &amp; E-Visa support.
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
                  href="https://wa.me/919810024680?text=Hello%20Altitude%20Travel,%20I%20want%20to%20plan%20a%20Vietnam%20tour%20package."
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
