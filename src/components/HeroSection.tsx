"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Clock,
  Phone,
  Bus,
  Palmtree,
  Compass,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  CheckCircle2,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";

// Crisp vector SVG for official WhatsApp branding
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  );
}

interface DestinationOption {
  id: string;
  name: string;
  tag: string;
  price: string;
  image: string;
  badge: string;
}

const DESTINATIONS: DestinationOption[] = [
  {
    id: "kashmir",
    name: "Kashmir Valley",
    tag: "Dal Lake Houseboats & Gulmarg Gondola",
    price: "₹18,499",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
  },
  {
    id: "dubai",
    name: "Dubai & Abu Dhabi",
    tag: "Burj Khalifa, Desert Safari & Marina Yachts",
    price: "₹38,999",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    badge: "Trending Global",
  },
  {
    id: "switzerland",
    name: "Switzerland Alpine",
    tag: "Alps, Mount Titlis & Scenic Express Trains",
    price: "₹1,24,999",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    badge: "Luxury Europe",
  },
  {
    id: "goa",
    name: "Goa Coastal",
    tag: "Portuguese Villas, Secret Shores & Catamarans",
    price: "₹12,999",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    badge: "Quick Getaway",
  },
  {
    id: "thailand",
    name: "Thailand & Phuket",
    tag: "Phi Phi Island Catamaran & Bangkok Nightlife",
    price: "₹29,999",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    badge: "Tropical Escapes",
  },
  {
    id: "bali",
    name: "Bali Tropical",
    tag: "Private Pool Villas, Ubud & Cliff Temples",
    price: "₹34,999",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    badge: "Couples & Island",
  },
  {
    id: "vietnam",
    name: "Vietnam Heritage",
    tag: "Halong Bay Luxury Cruise & Hoi An Lanterns",
    price: "₹32,999",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    badge: "Scenic Culture",
  },
  {
    id: "rajasthan",
    name: "Rajasthan Royal",
    tag: "Jaipur Havelis, Udaipur Lakes & Desert Camps",
    price: "₹16,999",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    badge: "Royal Heritage",
  },
];

const TRAVEL_STYLES = [
  "Couple / Honeymoon",
  "Family Holiday",
  "Friends Group",
  "Solo Explorer",
];

const DURATIONS = ["4-5 Days", "6-7 Days", "8+ Days"];

export default function HeroSection() {
  const [selectedDestId, setSelectedDestId] = useState("kashmir");
  const [selectedStyle, setSelectedStyle] = useState("Couple / Honeymoon");
  const [selectedDuration, setSelectedDuration] = useState("6-7 Days");

  const activeDest =
    DESTINATIONS.find((d) => d.id === selectedDestId) || DESTINATIONS[0];

  // Dynamic pre-filled message generator for WhatsApp leads
  const buildWhatsAppUrl = (destName?: string, style?: string, duration?: string) => {
    const d = destName || activeDest.name;
    const s = style || selectedStyle;
    const dur = duration || selectedDuration;
    const text = `Hi Altitude Travel! I want to plan a curated trip to ${d} for ${s} (${dur}). Please share customized itinerary options and transparent pricing from your Delhi desk!`;
    return `https://wa.me/919810024680?text=${encodeURIComponent(text)}`;
  };

  const marqueeItems = [
    "Kashmir High Passes & Dal Lake Houseboats",
    "Dubai Marina Yachts & Desert Safaris",
    "Swiss Alpine Glaciers & Scenic Trains",
    "Vietnam Halong Bay & Hoi An Lanterns",
    "Thailand Phi Phi & Phuket Beaches",
    "Goa Portuguese Heritage & Secret Shores",
    "Sri Lanka Kandy Temple & Bentota Coast",
    "Kerala Private Houseboats & Munnar Hills",
    "Himachal Scenic Coach & Solang Valley",
    "Rajasthan Lake Palaces & Royal Havelis",
  ];

  return (
    <>
      <section className="relative pt-[128px] pb-8 sm:pt-[132px] sm:pb-9 lg:pt-[136px] lg:pb-10 bg-[#FAF9F6] border-b border-[#E5E0D5]/80 overflow-hidden">
        
        {/* Subtle Architectural Atmosphere Backdrops */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#BFA13B]/8 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 -left-20 w-[420px] h-[420px] bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Travel Brand Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
              
              {/* Editorial Micro-caps Eyebrow: Strictly one line on mobile view */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start bg-white border border-[#E5E0D5] text-[#1C1917] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[9.5px] sm:text-[11px] font-bold tracking-[0.08em] sm:tracking-[0.16em] uppercase shadow-2xs whitespace-nowrap max-w-full">
                <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#0C0A09] text-[#BFA13B] flex items-center justify-center shrink-0">
                  <Compass className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" />
                </span>
                <span className="whitespace-nowrap">Connaught Place, New Delhi • Curated Agency</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-gold-pulse shrink-0" />
              </div>

              {/* SIGNATURE EDITORIAL H1 HEADING: Clean modern website style, bold presence, zero italic mix, high contrast */}
              <h1 className="text-3xl sm:text-5xl md:text-[52px] lg:text-[54px] xl:text-[58px] font-extrabold text-[#110E0C] tracking-tight leading-[1.14]">
                <span className="block font-black text-[#110E0C]">
                  Tour and Travel Agency in Delhi
                </span>
                <span className="block mt-2 sm:mt-2.5 font-bold text-[#A67C1E] text-2xl sm:text-4xl md:text-[38px] lg:text-[40px] xl:text-[44px] tracking-tight">
                  Travel Beyond the Tourist Trail
                </span>
              </h1>

              {/* Dynamic Moving Accent Line under Heading */}
              <div className="moving-line-track max-w-[220px] h-[3px] rounded-full overflow-hidden">
                <div className="moving-line-beam" />
              </div>

              {/* EXACT VERBATIM PARAGRAPH: High contrast, easily readable text */}
              <p className="text-[15px] sm:text-[16.5px] text-stone-800 leading-relaxed font-normal max-w-2xl">
                Altitude Travel is a tour and travel agency in Delhi offering international and Indian tour packages. We go beyond the usual tourist trail, combining iconic landmarks with hidden gems, local food, shopping, and free time, so you experience the destination, not just see it.
              </p>

              {/* Curated Travel Pillars Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-0.5">
                
                {/* Feature 1: Luxury AC Coach & Chauffeur Fleet */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-xs hover:border-[#BFA13B]/50 transition-all flex items-center gap-3">
                  <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-[#FAF9F6] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#E5E0D5]">
                    <Bus className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1917]">Luxury Bus Fleet</h4>
                    <p className="text-[10.5px] sm:text-[11px] text-stone-500 font-medium">Volvo &amp; AC Cabs</p>
                  </div>
                </div>

                {/* Feature 2: Handpicked Beach & Hillside Resorts */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-xs hover:border-[#BFA13B]/50 transition-all flex items-center gap-3">
                  <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-[#FAF9F6] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#E5E0D5]">
                    <Palmtree className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1917]">Beach &amp; Hills</h4>
                    <p className="text-[10.5px] sm:text-[11px] text-stone-500 font-medium">Handpicked Stays</p>
                  </div>
                </div>

                {/* Feature 3: Signature 1 Free Day Guarantee */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FBF7EE] border border-[#BFA13B]/40 shadow-xs hover:border-[#BFA13B] transition-all flex items-center gap-3 gold-glow-subtle">
                  <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-shining-gold text-stone-950 flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-950">A Free Day Always</h4>
                    <p className="text-[10.5px] sm:text-[11px] text-[#A6832A] font-semibold">Your Pace &amp; Leisure</p>
                  </div>
                </div>

              </div>

              {/* MOBILE ONLY: Form-Free 1-Tap WhatsApp & Call Hub (Zero friction, instant leads) */}
              <div className="block lg:hidden pt-1 space-y-2.5">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-[13.5px] bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white flex items-center justify-center gap-2.5 shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all border border-[#25D366]/40 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                  <span>Chat on WhatsApp — Instant Quotes</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919810024680"
                    className="py-2.5 px-3 rounded-xl font-semibold text-xs bg-white text-stone-900 border border-[#E5E0D5] flex items-center justify-center gap-1.5 shadow-2xs hover:bg-[#FAF9F6] active:scale-98"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                    <span className="truncate">+91 98100 24680</span>
                  </a>

                  <div className="py-2.5 px-3 rounded-xl text-[11px] font-semibold bg-[#FAF9F6] text-stone-800 border border-[#E5E0D5] flex items-center justify-center gap-1.5 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="truncate">Desk Online • 5m Reply</span>
                  </div>
                </div>
              </div>

              {/* Editorial Showcase: Curated Visual Cards */}
              <div className="pt-1">
                <div className="grid grid-cols-2 gap-3 max-w-xl">
                  
                  {/* Coastal & Beach Stays */}
                  <div className="relative h-28 sm:h-32 rounded-xl overflow-hidden shadow-xs border border-[#E5E0D5] group">
                    <Image
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                      alt="Pristine Tropical Beach with Palm Trees"
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white flex items-center justify-between">
                      <span className="text-[11px] sm:text-[11.5px] font-semibold flex items-center gap-1">
                        <Palmtree className="w-3 h-3 text-[#C9A84C]" /> Coastal Escapes
                      </span>
                      <span className="text-[9px] bg-[#FAF9F6]/20 backdrop-blur-md text-white font-medium px-2 py-0.5 rounded-full border border-white/30 hidden sm:inline-block">
                        Goa • Bali • Maldives
                      </span>
                    </div>
                  </div>

                  {/* Scenic Coach & Mountain Passes */}
                  <div className="relative h-28 sm:h-32 rounded-xl overflow-hidden shadow-xs border border-[#E5E0D5] group">
                    <Image
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
                      alt="Scenic Travel Coach & Mountain Drive"
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white flex items-center justify-between">
                      <span className="text-[11px] sm:text-[11.5px] font-semibold flex items-center gap-1">
                        <Bus className="w-3 h-3 text-[#C9A84C]" /> Coach &amp; SUV Tours
                      </span>
                      <span className="text-[9px] bg-[#FAF9F6]/20 backdrop-blur-md text-white font-medium px-2 py-0.5 rounded-full border border-white/30 hidden sm:inline-block">
                        Himachal • Kashmir
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Trending Destination Quick Filter Chips (Synchronized with Desktop Showcase) */}
              <div className="pt-0.5 hidden sm:flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mr-1">
                  Popular:
                </span>
                {DESTINATIONS.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setSelectedDestId(dest.id)}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg transition-all border shadow-xs cursor-pointer ${
                      selectedDestId === dest.id
                        ? "bg-[#0C0A09] text-[#BFA13B] border-[#BFA13B]"
                        : "bg-white hover:bg-[#FBF7EE] text-stone-700 hover:text-[#BFA13B] border-[#E5E0D5]"
                    }`}
                  >
                    {dest.name}
                  </button>
                ))}
              </div>

            </div>

            {/* Right Column (DESKTOP ONLY): Form-Free Luxury Travel Showcase & Instant WhatsApp Trip Concierge */}
            <div className="hidden lg:block lg:col-span-5" id="hero-inquiry-form">
              <div className="border-beam-card shadow-[0_20px_50px_-10px_rgba(28,25,23,0.14)] bg-white rounded-3xl border border-[#E5E0D5] overflow-hidden">
                <div className="border-beam-inner p-5 xl:p-6 space-y-4">
                  
                  {/* Visual Destination Header Card with Live Status */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-stone-950 border border-[#E5E0D5]/70 group">
                    <Image
                      src={activeDest.image}
                      alt={activeDest.name}
                      fill
                      sizes="500px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-950/10" />

                    {/* Top Status Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0C0A09]/85 backdrop-blur-md text-emerald-400 text-[10.5px] font-bold border border-emerald-500/30 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Delhi Desk Online</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#BFA13B] text-stone-950 text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                        {activeDest.badge}
                      </span>
                    </div>

                    {/* Bottom Destination Details on Image */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 text-white space-y-0.5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg xl:text-xl font-bold tracking-tight text-white drop-shadow-xs">
                          {activeDest.name}
                        </h3>
                        <div className="text-right">
                          <span className="text-[10px] uppercase font-bold text-stone-300 block leading-none">Starting</span>
                          <span className="text-base font-extrabold text-[#F5D77F] leading-tight">
                            {activeDest.price}
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-stone-300 line-clamp-1 font-normal">
                        {activeDest.tag} • 1 Free Day Guaranteed
                      </p>
                    </div>
                  </div>

                  {/* Header Title for WhatsApp Concierge */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-stone-950 tracking-tight flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#BFA13B]" />
                        <span>Instant WhatsApp Trip Concierge</span>
                      </h4>
                      <span className="text-[10.5px] font-bold text-[#A67C1E] bg-[#FAF9F6] px-2 py-0.5 rounded-md border border-[#E5E0D5]">
                        2-Min Reply
                      </span>
                    </div>
                    <p className="text-[12px] text-stone-600 leading-snug">
                      Tap your preferences below to connect directly with our Connaught Place travel planners on WhatsApp with custom quotes.
                    </p>
                  </div>

                  {/* 1. Destination Selectors (8 interactive chips) */}
                  <div className="space-y-1.5">
                    <label className="text-[10.5px] font-bold text-stone-700 uppercase tracking-wider block">
                      1. Select Destination:
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {DESTINATIONS.map((dest) => (
                        <button
                          key={dest.id}
                          type="button"
                          onClick={() => setSelectedDestId(dest.id)}
                          className={`px-2 py-1.5 rounded-lg text-[11px] font-bold transition-all truncate border cursor-pointer ${
                            selectedDestId === dest.id
                              ? "bg-[#0C0A09] text-[#BFA13B] border-[#BFA13B] shadow-xs"
                              : "bg-[#FAF9F6] hover:bg-stone-100 text-stone-700 border-[#E5E0D5]"
                          }`}
                        >
                          {dest.name.split(" ")[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Travel Style & Duration (Interactive Chips) */}
                  <div className="grid grid-cols-2 gap-2.5">
                    
                    {/* Style */}
                    <div className="space-y-1.5">
                      <label className="text-[10.5px] font-bold text-stone-700 uppercase tracking-wider block">
                        2. Travel Style:
                      </label>
                      <select
                        value={selectedStyle}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-lg text-xs font-semibold text-stone-900 focus:outline-none focus:border-[#BFA13B] cursor-pointer"
                      >
                        {TRAVEL_STYLES.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Duration */}
                    <div className="space-y-1.5">
                      <label className="text-[10.5px] font-bold text-stone-700 uppercase tracking-wider block">
                        3. Duration:
                      </label>
                      <select
                        value={selectedDuration}
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-lg text-xs font-semibold text-stone-900 focus:outline-none focus:border-[#BFA13B] cursor-pointer"
                      >
                        {DURATIONS.map((dur) => (
                          <option key={dur} value={dur}>
                            {dur}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Pre-filled Message Preview Pill */}
                  <div className="bg-[#FAF9F6] p-2.5 rounded-xl border border-[#E5E0D5] text-[11px] text-stone-600 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">💬 Message:</span>
                    <span className="line-clamp-2 italic text-stone-700">
                      &quot;Hi Altitude Travel! I want to plan a trip to {activeDest.name} for {selectedStyle} ({selectedDuration}). Please share itineraries!&quot;
                    </span>
                  </div>

                  {/* PRIMARY ACTION: Radiant WhatsApp Button */}
                  <div className="space-y-2 pt-1">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white flex items-center justify-center gap-2.5 shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all border border-[#25D366]/40 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                      <span>Chat on WhatsApp — Get Custom Itinerary</span>
                    </a>

                    <div className="flex items-center justify-between text-xs text-stone-600 pt-0.5 px-1">
                      <a
                        href="tel:+919810024680"
                        className="flex items-center gap-1.5 text-stone-800 hover:text-[#BFA13B] font-semibold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#BFA13B]" />
                        <span>Call Desk: +91 98100 24680</span>
                      </a>

                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Free Custom Plan</span>
                      </span>
                    </div>
                  </div>

                  {/* Trust Footer Ribbon */}
                  <div className="pt-2 border-t border-[#E5E0D5] flex items-center justify-between text-[10.5px] text-stone-600 font-medium">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Zero Hidden Fees
                    </span>
                    <span>★ 4.9/5 Rating (1,200+ Reviews)</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#A67C1E]" />
                      1 Free Day
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Subtle Scroll Cue */}
          <div className="mt-6 pt-3 border-t border-[#E5E0D5]/70 flex items-center justify-center">
            <a
              href="#top-destinations"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E0D5] text-xs font-semibold text-[#1C1917] hover:text-[#BFA13B] shadow-2xs transition-colors"
            >
              <span>Explore Tour Packages</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#BFA13B]" />
            </a>
          </div>

        </div>
      </section>

      {/* CONTINUOUS LUXURY MARQUEE TICKER RIBBON (The Trip Trails Signature) */}
      <div className="w-full bg-[#0C0A09] border-y border-[#BFA13B]/30 py-3 overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap text-xs sm:text-[13px] font-semibold tracking-[0.2em] text-[#FAF9F6] uppercase">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center mx-4 sm:mx-6 gap-3 sm:gap-4 shrink-0">
              <span className="text-[#BFA13B]">✦</span>
              <span className="hover:text-[#BFA13B] transition-colors">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
