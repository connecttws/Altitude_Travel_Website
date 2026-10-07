"use client";

import React from "react";
import Image from "next/image";
import {
  Compass,
  CheckCircle,
  HeartHandshake,
  Bus,
  Palmtree,
  ShieldCheck,
  ArrowDown,
} from "lucide-react";

export default function AboutAgencySection() {
  return (
    <section id="about-agency" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Decorative Atmosphere Glow */}
      <div className="absolute top-1/4 -left-20 w-[480px] h-[480px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Brand Card with Coastal & Coach Stays */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Visual Photo Showcase */}
            <div className="relative">
              
              {/* Primary Image: Beach & Swaying Palms */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_36px_-6px_rgba(15,23,42,0.15)] border border-slate-200/80 bg-slate-900 h-[340px] sm:h-[380px] group">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
                  alt="Sunny Turquoise Beach and Palm Trees"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182B]/90 via-[#08182B]/20 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold shadow-xs">
                    <Palmtree className="w-3.5 h-3.5" /> Coastal &amp; Island Escapes
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Altitude Travel Co.
                  </h3>
                  <p className="text-xs sm:text-[13px] text-sky-100/90 line-clamp-2 font-normal">
                    Connaught Place, New Delhi • Curated experiences with guaranteed free days.
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Card: Luxury Bus & Mountain Journey */}
              <div className="absolute -bottom-6 -right-4 sm:-right-5 w-48 sm:w-56 h-32 rounded-xl overflow-hidden border-2 border-white shadow-lg hidden sm:block bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
                  alt="Scenic Travel Coach & Mountain Highway"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-2 left-2.5 text-white">
                  <span className="text-[11px] font-bold flex items-center gap-1.5 text-amber-300">
                    <Bus className="w-3.5 h-3.5" /> AC Volvo &amp; Cabs
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Stats Grid with Subtle Border System */}
            <div className="grid grid-cols-2 gap-3.5 pt-4">
              <div className="bg-white p-4.5 rounded-xl border border-slate-200/80 shadow-xs text-center">
                <span className="text-2xl sm:text-3xl font-bold text-[#08182B] block tracking-tight">10,000+</span>
                <span className="text-xs text-slate-600 font-medium mt-0.5 block">Happy Travellers from Delhi</span>
              </div>
              <div className="bg-white p-4.5 rounded-xl border border-slate-200/80 shadow-xs text-center">
                <span className="text-2xl sm:text-3xl font-bold text-sky-700 block tracking-tight">100%</span>
                <span className="text-xs text-slate-600 font-medium mt-0.5 block">Zero Hidden Deductions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Exact H2 & All 4 Verbatim Paragraphs */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-sky-700" />
              <span>Our Delhi Legacy &amp; Philosophy</span>
            </div>

            {/* Heading with 1 Psychological Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
              Best <span className="text-sky-700">Tour and Travel Agency in Delhi</span>
            </h2>

            {/* EXACT VERBATIM PARAGRAPH 1 */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Altitude Travel is a tour and travel agency in Delhi that designs curated journeys across India and around the world. We specialise in international tour packages and Indian tour packages that go beyond the standard sightseeing list, combining iconic landmarks with hidden gems, local food, shopping and time to explore at your own pace.
            </p>

            {/* EXACT VERBATIM PARAGRAPH 2 */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              As an international tour and travel agency, we plan overseas holidays for families, couples, friends and solo travellers. From flights, hotels and transfers to sightseeing and visa assistance, our team handles the details so you can focus on enjoying the destination. Every itinerary is built with local insight, from famous food spots and cafés to markets and offbeat places that most tourists miss.
            </p>

            {/* EXACT VERBATIM PARAGRAPH 3 */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              India is a destination for every kind of traveller, whether you love mountains, beaches, heritage cities, spiritual trails or food journeys. Our Indian tour packages are designed to show you the real character of each region, with comfortable stays, smooth transfers and recommendations from people who know the place well.
            </p>

            {/* EXACT VERBATIM PARAGRAPH 4 */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We aim to be the best tour operator in India for travellers who want more than a checklist of attractions. Our approach is simple: transparent pricing, honest advice, personal attention and one complete free day in your itinerary, wherever possible. We don&apos;t just sell tours. We curate the complete experience of a destination.
            </p>

            {/* Trust checklist */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Handpicked Stays</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>One Complete Free Day Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full Visa Guidance &amp; End-to-End Care</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Delhi-Based Personal Travel Experts</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

