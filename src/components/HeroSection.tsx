"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  Palmtree,
  Mountain,
  Globe2,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  const destinationPreviews = [
    {
      id: "tropical",
      tabLabel: "Island & Coastal",
      icon: Palmtree,
      title: "Maldives & Bali Private Atolls",
      tag: "Turquoise Lagoons & Overwater Stays",
      subtitle: "Handpicked 5-Star luxury villas, private sunset catamarans & 1 guaranteed free day.",
      price: "₹28,999",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
      badge: "Signature Escapes",
    },
    {
      id: "alpine",
      tabLabel: "Snow Peaks & Hills",
      icon: Mountain,
      title: "Kashmir Valley & Swiss Alpine",
      tag: "Dal Lake Houseboats & Glacier Express",
      subtitle: "Scenic high-mountain coach drives, luxury wooden chalets & unhurried regional dining.",
      price: "₹18,499",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      badge: "Curated Trails",
    },
    {
      id: "skyline",
      tabLabel: "Global Capitals",
      icon: Globe2,
      title: "Dubai Marina & Europe Discovery",
      tag: "Desert Safaris & Private Luxury Yachts",
      subtitle: "Burj Khalifa VIP access, premium private transfers, bespoke dining & full visa desk.",
      price: "₹38,999",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
      badge: "Worldwide Luxury",
    },
  ];

  const currentPreview = destinationPreviews[activeTab];

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
      {/* Streamlined Hero Section: Ample breathing room below fixed header */}
      <section className="relative pt-[132px] pb-10 sm:pt-[138px] sm:pb-12 lg:pt-[146px] lg:pb-14 bg-gradient-to-b from-[#FAF8F5] via-[#F6F2E8] to-[#FAF8F5] overflow-hidden">
        
        {/* Soft Golden Ambient Lighting */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#D4AF37]/15 via-[#BFA13B]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-gradient-to-tr from-[#E6CA65]/10 via-[#FAF0D4]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: High-Contrast Editorial Typography + Above-the-Fold Action Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-4.5">
              
              {/* Prestigious Eyebrow Capsule */}
              <div className="inline-flex items-center gap-2 self-start bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 px-3.5 py-1.5 rounded-full shadow-[0_2px_10px_rgba(212,175,55,0.15)] max-w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <Compass className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-stone-900 whitespace-nowrap truncate">
                  Connaught Place, New Delhi • Curated Agency
                </span>
                <span className="text-[9.5px] font-extrabold text-[#7A5200] bg-[#FFF5D6] px-2 py-0.5 rounded-full border border-[#D4AF37]/40 shrink-0 hidden sm:inline-block">
                  Est. 2018
                </span>
              </div>

              {/* H1 HEADING: Deep Obsidian Black + High-Contrast Dark Bronze-Gold (100% Sharp & Visible) */}
              <h1 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] xl:text-[54px] font-extrabold tracking-tight leading-[1.1] text-stone-950">
                <span className="block font-black text-[#0A0908]">
                  Tour and Travel Agency in Delhi
                </span>
                <span className="block mt-1.5 sm:mt-2 font-black text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[42px] tracking-tight text-[#7A5200] drop-shadow-xs">
                  Travel Beyond the Tourist Trail
                </span>
              </h1>

              {/* Moving Laser Gold Line Accent */}
              <div className="moving-line-track max-w-[220px] h-[3px] rounded-full overflow-hidden shadow-[0_0_12px_rgba(212,175,55,0.5)]">
                <div className="moving-line-beam" />
              </div>

              {/* EXACT VERBATIM PARAGRAPH: High contrast, easy to read */}
              <p className="text-[15px] sm:text-[16.5px] text-stone-800 leading-relaxed font-normal max-w-2xl">
                Altitude Travel is a <strong className="font-bold text-stone-950">tour and travel agency in Delhi</strong> offering international and Indian tour packages. We go beyond the usual tourist trail, combining <span className="text-[#7A5200] font-semibold">iconic landmarks with hidden gems</span>, local food, shopping, and <span className="text-[#7A5200] font-semibold">free time</span>, so you experience the destination, not just see it.
              </p>

              {/* ACTION BUTTONS: Placed directly below paragraph to be 100% visible on the initial screen */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#top-destinations"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wide bg-shining-gold shining-sweep hover:brightness-105 active:scale-98 text-stone-950 shadow-[0_6px_25px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 border border-[#D4AF37]/60 cursor-pointer"
                >
                  <span>Explore Curated Packages</span>
                  <ArrowRight className="w-4 h-4 text-stone-950" />
                </a>

                <a
                  href="#about-agency"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-stone-900 bg-white hover:bg-stone-50 border border-[#E5E0D5] hover:border-[#D4AF37] shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Our Delhi Legacy</span>
                </a>
              </div>

              {/* Clean Single-Line Trust Ribbon Under Buttons */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1.5 text-xs text-stone-700 font-semibold border-t border-stone-200/80 max-w-xl">
                <span className="flex items-center gap-1.5 text-stone-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>10,000+ Delhi Travellers</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#7A5200]">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37] shrink-0" />
                  <span>4.9/5 Google Rating</span>
                </span>
                <span className="flex items-center gap-1.5 text-stone-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>1 Guaranteed Free Day</span>
                </span>
              </div>

            </div>

            {/* Right Column: Clean, Contained, Non-Overlapping Visual Travel Card */}
            <div className="lg:col-span-5" id="hero-inquiry-form">
              
              {/* Interactive Style Switcher Pills (Contained neatly above card) */}
              <div className="flex items-center gap-1.5 p-1 bg-white/95 rounded-xl border border-[#D4AF37]/40 shadow-xs mb-2.5">
                {destinationPreviews.map((preview, idx) => {
                  const Icon = preview.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={preview.id}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-[#0C0A09] text-[#F5D77F] shadow-sm border border-[#D4AF37]/50"
                          : "text-stone-700 hover:text-stone-950 hover:bg-stone-100"
                      }`}
                    >
                      <Icon className={`w-3 h-3 ${isActive ? "text-[#D4AF37]" : "text-stone-500"}`} />
                      <span>{preview.tabLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Unified Single-Frame Photo Card (No overlapping floating elements) */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5E0D5] bg-stone-950 h-[300px] sm:h-[330px] lg:h-[350px] group">
                
                {/* High-Resolution Saturated Travel Image */}
                <Image
                  key={currentPreview.image}
                  src={currentPreview.image}
                  alt={currentPreview.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Deep Contrast Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/25 to-stone-950/15 pointer-events-none" />

                {/* Top Corner Badges (Fully contained within card) */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0C0A09]/85 text-[#F5D77F] text-[10.5px] font-bold border border-[#D4AF37]/40 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>{currentPreview.badge}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-stone-950 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    <Clock className="w-3 h-3 text-stone-950" />
                    1 Free Day
                  </span>
                </div>

                {/* Bottom Content Area (Fully contained within card) */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1.5 z-10">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#F5D77F]">
                      {currentPreview.tag}
                    </span>
                    <div className="text-right">
                      <span className="text-[9px] uppercase font-bold text-stone-300 block leading-none">Starting</span>
                      <span className="text-base sm:text-lg font-black text-[#FFF0B8] leading-tight">
                        {currentPreview.price}
                        <span className="text-[10px] font-normal text-stone-300"> /person</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
                    {currentPreview.title}
                  </h3>

                  <p className="text-[11.5px] sm:text-xs text-stone-200 font-normal leading-relaxed line-clamp-2">
                    {currentPreview.subtitle}
                  </p>

                  <div className="pt-1.5 flex items-center justify-between">
                    <a
                      href="#top-destinations"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-stone-100 text-stone-950 text-[11px] font-bold shadow-sm transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Explore Destination</span>
                      <ArrowRight className="w-3 h-3 text-[#7A5200]" />
                    </a>

                    <span className="text-[10.5px] text-stone-300 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Connaught Place Desk
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CONTINUOUS LUXURY MARQUEE TICKER RIBBON (The Trip Trails Signature) */}
      <div className="w-full bg-[#0C0A09] border-y border-[#BFA13B]/30 py-3 overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap text-xs sm:text-[13px] font-semibold tracking-[0.2em] text-[#FAF9F6] uppercase">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center mx-4 sm:mx-6 gap-3 sm:gap-4 shrink-0">
              <span className="text-[#D4AF37]">✦</span>
              <span className="hover:text-[#D4AF37] transition-colors">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
