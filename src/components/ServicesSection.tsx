"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Compass,
  Globe2,
  MapPin,
  Sliders,
  Headphones,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenCustomModal?: () => void;
}

export default function ServicesSection({ onOpenCustomModal }: ServicesSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const services = [
    {
      id: "curated",
      icon: Compass,
      shortTitle: "Curated Itineraries",
      title: "Curated Itineraries for Every Traveller",
      description:
        "No two travellers are alike, and neither should their trips be. Altitude Travel Co. offers different itinerary options for every destination, so you can choose the experience that matches your travel style, whether that is relaxed sightseeing, offbeat exploration or a food-and-shopping-led holiday. Each itinerary mixes iconic sights with local discoveries and leaves room for your own time.",
      tag: "Tailored Focus",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
      highlights: ["Multiple Itinerary Options", "Iconic Sights & Hidden Gems", "Free Time Built-In"],
      btnText: "Explore Custom Itineraries",
      action: onOpenCustomModal,
    },
    {
      id: "international",
      icon: Globe2,
      shortTitle: "International Packages",
      title: "International Tour Packages",
      description:
        "Explore popular destinations across Asia, Europe, the Middle East and beyond with our international tour packages. We take care of flights, hotels, transfers, sightseeing and visa guidance, along with local recommendations for cafés, markets, nightlife and hidden spots you won't find in a generic brochure.",
      tag: "Global Holidays",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
      highlights: ["Flights & Hotel Stays", "Full Visa Assistance", "Local Cafés & Nightlife"],
      btnText: "View International Packages",
      anchor: "#international-packages",
    },
    {
      id: "indian",
      icon: MapPin,
      shortTitle: "Indian Tour Packages",
      title: "Indian Tour Packages",
      description:
        "From the mountains of Kashmir and Himachal to the beaches of Goa and the heritage cities of Rajasthan, our Indian tour packages help you discover India beyond the usual tourist stops. Expect handpicked stays, comfortable transport, and authentic regional food, along with the must-visit highlights.",
      tag: "Incredible India",
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=80",
      highlights: ["Luxury AC Volvo & Cabs", "Handpicked Heritage Stays", "Authentic Regional Cuisine"],
      btnText: "View Indian Tour Packages",
      anchor: "#indian-packages",
    },
    {
      id: "custom",
      icon: Sliders,
      shortTitle: "Custom Tour Packages",
      title: "Custom Tour Packages",
      description:
        "Have your own plan in mind? Our custom tour packages are built around your destination, dates, budget, hotel preference, and interests. Whether it is a honeymoon, family holiday, friends' getaway, or group trip, we design the itinerary with you and adjust it until it feels right.",
      tag: "Bespoke Plans",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
      highlights: ["Tailored to Budget & Dates", "Honeymoon & Family Focus", "Flexible Revisions"],
      btnText: "Build Your Custom Plan",
      action: onOpenCustomModal,
    },
    {
      id: "support",
      icon: Headphones,
      shortTitle: "24/7 Personal Support",
      title: "Support Before, During, and After Your Trip",
      description:
        "Our service does not end at booking. Our team is available to help you with itinerary changes, travel questions, and local recommendations throughout your journey. If you need help, you are just a message or call away.",
      tag: "24/7 Concierge",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
      highlights: ["Delhi-Based Travel Desk", "Real-Time Trip Support", "Immediate Phone & WhatsApp"],
      btnText: "Connect With Our Team",
      anchor: "#contact-footer",
    },
  ];

  const activeService = services[selectedIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.22em] uppercase text-[#BFA13B] whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
            <span>Comprehensive Travel Solutions</span>
          </div>

          {/* Clean Modern Website Style Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-stone-950 tracking-tight leading-tight">
            Services We Offer — <span className="text-[#A67C1E]">Crafted for Every Journey</span>
          </h2>

          <p className="text-[15px] sm:text-base text-stone-800 leading-relaxed font-normal">
            End-to-end travel craftsmanship tailored for modern travellers in Delhi and across India.
          </p>
        </div>

        {/* DESKTOP VIEW: Interactive Master Showcase (Takes only ~460px height, eliminates lengthy stacking) */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-stretch">
          
          {/* Left Column (5 cols): Interactive Service Selector List */}
          <div className="col-span-5 flex flex-col justify-between space-y-2">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full p-3.5 rounded-xl text-left transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                    isSelected
                      ? "bg-white border-[#BFA13B] shadow-md ring-1 ring-[#BFA13B]/30"
                      : "bg-[#F7F4EE]/80 hover:bg-white border-[#E5E0D5] text-stone-700 hover:text-stone-950"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#0C0A09] text-[#BFA13B]"
                          : "bg-white text-stone-600 border border-[#E5E0D5]"
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4
                        className={`text-[14px] font-bold leading-tight ${
                          isSelected ? "text-stone-950" : "text-stone-700"
                        }`}
                      >
                        {srv.shortTitle}
                      </h4>
                      <span className="text-[10.5px] text-stone-600 font-medium">
                        {srv.tag}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#A67C1E] translate-x-1" : "text-stone-400 opacity-60"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Showcase Feature Card */}
          <div className="col-span-7 bg-white rounded-2xl border border-[#E5E0D5] shadow-xs overflow-hidden flex flex-col justify-between">
            {/* Visual Photo Header */}
            <div className="relative h-44 w-full overflow-hidden bg-stone-950">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                sizes="600px"
                className="object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#BFA13B] text-stone-950 shadow-xs">
                  {activeService.tag}
                </span>
                <span className="text-xs text-stone-200 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E8D08D]" />
                  Verified Altitude Service
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF9F6] text-[#A67C1E] flex items-center justify-center border border-[#E5E0D5]">
                    <ActiveIcon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-950 tracking-tight">
                    {activeService.title}
                  </h3>
                </div>

                {/* EXACT VERBATIM DESCRIPTION */}
                <p className="text-[14px] text-stone-800 leading-relaxed font-normal">
                  {activeService.description}
                </p>
              </div>

              {/* Feature Highlights Ribbon */}
              <div className="pt-3 border-t border-[#E5E0D5] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {activeService.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-800 bg-[#FAF9F6] border border-[#E5E0D5] px-2.5 py-0.5 rounded-md"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                {activeService.action ? (
                  <button
                    type="button"
                    onClick={activeService.action}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#0C0A09] hover:bg-stone-800 text-[#BFA13B] transition-colors shadow-xs cursor-pointer whitespace-nowrap"
                  >
                    <span>{activeService.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : activeService.anchor ? (
                  <a
                    href={activeService.anchor}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#0C0A09] hover:bg-stone-800 text-[#BFA13B] transition-colors shadow-xs cursor-pointer whitespace-nowrap"
                  >
                    <span>{activeService.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE & TABLET VIEW: Compact Horizontal Carousel (Zero vertical clutter) */}
        <div className="block lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-3 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory">
            {services.map((srv, idx) => {
              const Icon = srv.icon;

              return (
                <div
                  key={srv.id}
                  className="w-[290px] sm:w-[320px] shrink-0 snap-start bg-white rounded-2xl border border-[#E5E0D5] overflow-hidden shadow-xs flex flex-col justify-between"
                >
                  <div className="relative h-36 w-full bg-stone-900">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#BFA13B] text-stone-950">
                        {srv.tag}
                      </span>
                      <span className="text-[10px] text-stone-300">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-[#A67C1E] shrink-0" />
                        <h3 className="text-sm font-bold text-stone-950 leading-tight">
                          {srv.title}
                        </h3>
                      </div>
                      <p className="text-[12.5px] text-stone-700 leading-relaxed font-normal line-clamp-4">
                        {srv.description}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-[#E5E0D5]">
                      {srv.action ? (
                        <button
                          type="button"
                          onClick={srv.action}
                          className="w-full py-2 rounded-lg text-xs font-bold bg-[#0C0A09] text-[#BFA13B] flex items-center justify-center gap-1.5"
                        >
                          <span>{srv.btnText}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ) : srv.anchor ? (
                        <a
                          href={srv.anchor}
                          className="w-full py-2 rounded-lg text-xs font-bold bg-[#0C0A09] text-[#BFA13B] flex items-center justify-center gap-1.5"
                        >
                          <span>{srv.btnText}</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
