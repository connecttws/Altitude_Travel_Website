"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  CheckCircle,
  HeartHandshake,
  Bus,
  Palmtree,
  Globe2,
  CalendarCheck2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AboutAgencySection() {
  const [activeTab, setActiveTab] = useState<"international" | "indian" | "philosophy">("international");

  return (
    <section id="about-agency" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] relative overflow-hidden">
      
      {/* Decorative Atmosphere Glow */}
      <div className="absolute top-1/4 -left-20 w-[480px] h-[480px] bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Visual Brand Card with Coastal & Coach Stays */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Photo Showcase */}
            <div className="relative">
              
              {/* Primary Image: Beach & Swaying Palms */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_36px_-6px_rgba(28,25,23,0.12)] border border-[#E5E0D5] bg-stone-900 h-[290px] sm:h-[330px] group">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
                  alt="Sunny Turquoise Beach and Palm Trees"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/90 via-[#0C0A09]/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#BFA13B] text-stone-950 text-[11px] font-bold shadow-xs">
                    <Palmtree className="w-3 h-3" /> Coastal &amp; Island Escapes
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Altitude Travel Co.
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-1 font-normal">
                    Connaught Place, New Delhi • Curated agency with guaranteed free days.
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Card: Luxury Bus & Mountain Journey */}
              <div className="absolute -bottom-4 -right-3 sm:-right-4 w-44 sm:w-52 h-28 rounded-xl overflow-hidden border-2 border-white shadow-lg hidden sm:block bg-stone-900">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
                  alt="Scenic Travel Coach & Mountain Highway"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent" />
                <div className="absolute bottom-2 left-2.5 text-white">
                  <span className="text-[10.5px] font-bold flex items-center gap-1.5 text-[#C9A84C]">
                    <Bus className="w-3 h-3" /> AC Volvo &amp; Cabs Fleet
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-[#E5E0D5] shadow-xs text-center">
                <span className="text-xl sm:text-2xl font-bold text-stone-950 block tracking-tight">10,000+</span>
                <span className="text-[11px] text-stone-600 font-medium mt-0.5 block">Happy Travellers from Delhi</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#E5E0D5] shadow-xs text-center">
                <span className="text-xl sm:text-2xl font-bold text-[#7A5200] block tracking-tight">100%</span>
                <span className="text-[11px] text-stone-600 font-medium mt-0.5 block">Zero Hidden Deductions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative + Interactive Compact Story Pills */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.22em] uppercase text-[#7A5200] whitespace-nowrap">
              <HeartHandshake className="w-3.5 h-3.5 text-[#7A5200] shrink-0" />
              <span>Our Delhi Legacy &amp; Philosophy</span>
            </div>

            {/* Clean Modern Website Style Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-stone-950 tracking-tight leading-tight">
              Best <span className="text-[#7A5200] drop-shadow-xs">Tour and Travel Agency in Delhi</span>
            </h2>

            {/* EXACT VERBATIM PARAGRAPH 1: Core Lead Introduction */}
            <p className="text-[14.5px] sm:text-[15.5px] text-stone-800 leading-relaxed font-normal">
              Altitude Travel is a tour and travel agency in Delhi that designs curated journeys across India and around the world. We specialise in international tour packages and Indian tour packages that go beyond the standard sightseeing list, combining iconic landmarks with hidden gems, local food, shopping and time to explore at your own pace.
            </p>

            {/* Interactive Pillar Switcher Pills: Eliminates Lengthy Stacking */}
            <div className="pt-1">
              <div className="flex items-center gap-1.5 sm:gap-2 p-1 bg-[#F5F2ED] rounded-xl border border-[#E5E0D5] overflow-x-auto no-scrollbar">
                <button
                  type="button"
                  onClick={() => setActiveTab("international")}
                  className={`flex-1 min-w-[130px] px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    activeTab === "international"
                      ? "bg-[#0C0A09] text-[#BFA13B] shadow-xs"
                      : "text-stone-700 hover:text-stone-950 hover:bg-white/60"
                  }`}
                >
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>International Holidays</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("indian")}
                  className={`flex-1 min-w-[110px] px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    activeTab === "indian"
                      ? "bg-[#0C0A09] text-[#BFA13B] shadow-xs"
                      : "text-stone-700 hover:text-stone-950 hover:bg-white/60"
                  }`}
                >
                  <Bus className="w-3.5 h-3.5" />
                  <span>Indian Escapes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("philosophy")}
                  className={`flex-1 min-w-[140px] px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    activeTab === "philosophy"
                      ? "bg-[#0C0A09] text-[#BFA13B] shadow-xs"
                      : "text-stone-700 hover:text-stone-950 hover:bg-white/60"
                  }`}
                >
                  <CalendarCheck2 className="w-3.5 h-3.5" />
                  <span>Free Day Guarantee</span>
                </button>
              </div>

              {/* Dynamic Interactive Story Card */}
              <div className="mt-3 bg-white p-4.5 sm:p-5 rounded-2xl border border-[#E5E0D5] shadow-xs min-h-[140px] flex flex-col justify-between">
                {activeTab === "international" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    {/* EXACT VERBATIM PARAGRAPH 2 */}
                    <p className="text-[13.5px] sm:text-[14px] text-stone-800 leading-relaxed font-normal">
                      As an international tour and travel agency, we plan overseas holidays for families, couples, friends and solo travellers. From flights, hotels and transfers to sightseeing and visa assistance, our team handles the details so you can focus on enjoying the destination. Every itinerary is built with local insight, from famous food spots and cafés to markets and offbeat places that most tourists miss.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-stone-100">
                      <span className="text-[11px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#7A5200]/20">
                        Flights, Hotels &amp; Transfers
                      </span>
                      <span className="text-[11px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#7A5200]/20">
                        Dedicated Visa Guidance
                      </span>
                      <span className="text-[11px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#7A5200]/20">
                        Local Food &amp; Offbeat Spots
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "indian" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    {/* EXACT VERBATIM PARAGRAPH 3 */}
                    <p className="text-[13.5px] sm:text-[14px] text-stone-800 leading-relaxed font-normal">
                      India is a destination for every kind of traveller, whether you love mountains, beaches, heritage cities, spiritual trails or food journeys. Our Indian tour packages are designed to show you the real character of each region, with comfortable stays, smooth transfers and recommendations from people who know the place well.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-stone-100">
                      <span className="text-[11px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#7A5200]/20">
                        Hills, Beaches &amp; Royal Heritage
                      </span>
                      <span className="text-[11px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#7A5200]/20">
                        Handpicked Verified Stays
                      </span>
                      <span className="text-[11px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#7A5200]/20">
                        Regional Cuisine &amp; Local Culture
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "philosophy" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    {/* EXACT VERBATIM PARAGRAPH 4 */}
                    <p className="text-[13.5px] sm:text-[14px] text-stone-800 leading-relaxed font-normal">
                      We aim to be the best tour operator in India for travellers who want more than a checklist of attractions. Our approach is simple: transparent pricing, honest advice, personal attention and one complete free day in your itinerary, wherever possible. We don&apos;t just sell tours. We curate the complete experience of a destination.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-stone-100">
                      <span className="text-[11px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#7A5200]/20">
                        100% Upfront Transparent Pricing
                      </span>
                      <span className="text-[11px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#7A5200]/20">
                        1 Guaranteed Free Day
                      </span>
                      <span className="text-[11px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#7A5200]/20">
                        Honest Advice &amp; Personal Care
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Trust checklist in clean compact ribbon */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E5E0D5] text-xs font-semibold text-stone-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Handpicked Stays</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>One Free Day Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Full Visa Guidance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Delhi Personal Travel Team</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

