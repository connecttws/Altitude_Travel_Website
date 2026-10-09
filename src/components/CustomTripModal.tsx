"use client";

import React, { useState } from "react";
import {
  X,
  Compass,
  Sliders,
  Calendar,
  Users,
  ShieldCheck,
  Sparkles,
  Phone,
  CheckCircle2,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  );
}

interface CustomTripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomTripModal({ isOpen, onClose }: CustomTripModalProps) {
  const [destination, setDestination] = useState("Kashmir & Ladakh");
  const [duration, setDuration] = useState("5 to 7 Days (Popular)");
  const [tripType, setTripType] = useState("Family Holiday");
  const [hotelTier, setHotelTier] = useState("4-Star Boutique (Recommended)");

  if (!isOpen) return null;

  const quickDests = [
    "Kashmir & Ladakh",
    "Dubai & Abu Dhabi",
    "Switzerland Alps",
    "Goa Beaches",
    "Thailand & Phuket",
    "Bali Private Villas",
    "Vietnam Halong",
    "Rajasthan Havelis",
  ];

  const whatsappMessage = `Hi Altitude Travel! I want to plan a custom trip to ${destination} for ${duration} (${tripType}, ${hotelTier}). Please share customized itinerary options and pricing from your Delhi desk!`;
  const whatsappUrl = `https://wa.me/919810024680?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0C0A09]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF9F6] rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E5E0D5] p-5 sm:p-7">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#7A5200]/30 text-[#7A5200] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#7A5200]" />
            <span>Instant WhatsApp Custom Planner</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Design Your Bespoke Itinerary
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto font-normal leading-relaxed">
            Select your preferences below to connect directly with our Connaught Place travel planners on WhatsApp with handcrafted itineraries and zero waiting time.
          </p>
        </div>

        {/* 100% Form-Free Interactive Customizer */}
        <div className="space-y-4">
          
          {/* Destination Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              1. Choose or Enter Destination
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Kashmir, Dubai, Switzerland, Maldives"
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5E0D5] rounded-xl text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none focus:border-[#BFA13B]"
            />
            
            {/* Quick chips */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {quickDests.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setDestination(q)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                    destination === q
                      ? "bg-[#0C0A09] text-[#BFA13B] border-[#BFA13B]"
                      : "bg-white text-stone-700 border-[#E5E0D5] hover:bg-[#FAF9F6]"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Duration & Occasion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                2. Trip Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-xl text-xs font-semibold text-stone-900 focus:outline-none focus:border-[#BFA13B] cursor-pointer"
              >
                <option value="3 to 4 Days (Quick Getaway)">3 to 4 Days (Quick Getaway)</option>
                <option value="5 to 7 Days (Popular)">5 to 7 Days (Popular)</option>
                <option value="8 to 10 Days (Comprehensive)">8 to 10 Days (Comprehensive)</option>
                <option value="12+ Days (Grand Tour)">12+ Days (Grand Tour)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                3. Travel Group
              </label>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-xl text-xs font-semibold text-stone-900 focus:outline-none focus:border-[#BFA13B] cursor-pointer"
              >
                <option value="Couple / Honeymoon">Couple / Honeymoon</option>
                <option value="Family Holiday">Family Holiday</option>
                <option value="Friends Getaway">Friends Getaway</option>
                <option value="Senior Citizens Trip">Senior Citizens Trip</option>
                <option value="Solo Explorer">Solo Explorer</option>
              </select>
            </div>
          </div>

          {/* Hotel Tier */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              4. Preferred Stay Category
            </label>
            <select
              value={hotelTier}
              onChange={(e) => setHotelTier(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-xl text-xs font-semibold text-stone-900 focus:outline-none focus:border-[#BFA13B] cursor-pointer"
            >
              <option value="3-Star Premium & Cozy">3-Star Premium &amp; Cozy</option>
              <option value="4-Star Boutique (Recommended)">4-Star Boutique (Recommended)</option>
              <option value="5-Star Luxury & Palaces">5-Star Luxury &amp; Palaces</option>
              <option value="Heritage Havelis / Houseboats">Heritage Havelis / Unique Stays</option>
            </select>
          </div>

          {/* WhatsApp Message Preview Pill */}
          <div className="bg-[#FAF9F6] p-3 rounded-xl border border-[#E5E0D5] text-xs text-stone-600 flex items-start gap-2">
            <span className="text-emerald-600 font-bold shrink-0">💬 Pre-filled Message:</span>
            <span className="italic text-stone-700">
              &quot;Hi Altitude Travel! I want to plan a custom trip to {destination} for {duration} ({tripType}, {hotelTier})...&quot;
            </span>
          </div>

          {/* Direct WhatsApp & Call Action Buttons */}
          <div className="space-y-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white flex items-center justify-center gap-2.5 shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all border border-[#25D366]/40 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>Chat on WhatsApp — Send Custom Request</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+919810024680"
                className="py-2.5 px-3 rounded-xl font-semibold text-xs bg-white text-stone-900 border border-[#E5E0D5] flex items-center justify-center gap-1.5 shadow-2xs hover:bg-[#FAF9F6]"
              >
                <Phone className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                <span className="truncate">Call: +91 98100 24680</span>
              </a>

              <div className="py-2.5 px-3 rounded-xl text-[11px] font-semibold bg-[#FAF9F6] text-stone-800 border border-[#E5E0D5] flex items-center justify-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="truncate">Desk Online • Instant Reply</span>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-stone-500 flex items-center justify-center gap-1.5 pt-1 border-t border-stone-200 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Free Custom Planning • 1 Guaranteed Free Day • 0 Hidden Costs</span>
          </div>

        </div>

      </div>
    </div>
  );
}
