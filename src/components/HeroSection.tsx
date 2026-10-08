"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Users,
  Send,
  CheckCircle2,
  Sparkles,
  Clock,
  Phone,
  Bus,
  Palmtree,
  Compass,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Kashmir Valley",
    travelMonth: "Next 30 Days",
    guests: "2 Adults (Couple)",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tripType: "Hero Inquiry Form",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Travel Brand Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Editorial Micro-caps Eyebrow: Strictly one line on mobile view */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start bg-white border border-[#E5E0D5] text-[#1C1917] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[9.5px] sm:text-[11px] font-bold tracking-[0.08em] sm:tracking-[0.16em] uppercase shadow-2xs whitespace-nowrap max-w-full">
                <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#0C0A09] text-[#BFA13B] flex items-center justify-center shrink-0">
                  <Compass className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" />
                </span>
                <span className="whitespace-nowrap">Connaught Place, New Delhi • Curated Agency</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-gold-pulse shrink-0" />
              </div>

              {/* SIGNATURE EDITORIAL H1 HEADING: Clean modern website style, bold presence, zero italic mix, high contrast */}
              <h1 className="text-3xl sm:text-5xl md:text-[52px] lg:text-[56px] xl:text-[62px] font-extrabold text-[#110E0C] tracking-tight leading-[1.14]">
                <span className="block font-black text-[#110E0C]">
                  Tour and Travel Agency in Delhi
                </span>
                <span className="block mt-2 sm:mt-2.5 font-bold text-[#A67C1E] text-2xl sm:text-4xl md:text-[38px] lg:text-[42px] xl:text-[46px] tracking-tight">
                  Travel Beyond the Tourist Trail
                </span>
              </h1>

              {/* Dynamic Moving Accent Line under Heading */}
              <div className="moving-line-track max-w-[220px] h-[3px] rounded-full overflow-hidden">
                <div className="moving-line-beam" />
              </div>

              {/* EXACT VERBATIM PARAGRAPH: High contrast, easily readable text */}
              <p className="text-[15.5px] sm:text-[17px] text-stone-800 leading-relaxed font-normal max-w-2xl">
                Altitude Travel is a tour and travel agency in Delhi offering international and Indian tour packages. We go beyond the usual tourist trail, combining iconic landmarks with hidden gems, local food, shopping, and free time, so you experience the destination, not just see it.
              </p>

              {/* Curated Travel Pillars Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                
                {/* Feature 1: Luxury AC Coach & Chauffeur Fleet */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-xs hover:border-[#BFA13B]/50 transition-all flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#E5E0D5]">
                    <Bus className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1917]">Luxury Bus Fleet</h4>
                    <p className="text-[11px] text-stone-500 font-medium">Volvo &amp; AC Cabs</p>
                  </div>
                </div>

                {/* Feature 2: Handpicked Beach & Hillside Resorts */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-xs hover:border-[#BFA13B]/50 transition-all flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#E5E0D5]">
                    <Palmtree className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1917]">Beach &amp; Hills</h4>
                    <p className="text-[11px] text-stone-500 font-medium">Handpicked Stays</p>
                  </div>
                </div>

                {/* Feature 3: Signature 1 Free Day Guarantee */}
                <div className="p-3.5 rounded-xl bg-[#FBF7EE] border border-[#BFA13B]/40 shadow-xs hover:border-[#BFA13B] transition-all flex items-center gap-3 gold-glow-subtle">
                  <div className="w-9 h-9 rounded-lg bg-shining-gold text-stone-950 flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-950">A Free Day Always</h4>
                    <p className="text-[11px] text-[#A6832A] font-semibold">Your Pace &amp; Leisure</p>
                  </div>
                </div>

              </div>

              {/* Editorial Showcase: Curated Visual Cards */}
              <div className="pt-2">
                <div className="grid grid-cols-2 gap-3.5 max-w-xl">
                  
                  {/* Coastal & Beach Stays */}
                  <div className="relative h-32 rounded-xl overflow-hidden shadow-xs border border-[#E5E0D5] group">
                    <Image
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                      alt="Pristine Tropical Beach with Palm Trees"
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/25 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between">
                      <span className="text-[11.5px] font-semibold flex items-center gap-1.5">
                        <Palmtree className="w-3.5 h-3.5 text-[#C9A84C]" /> Coastal Escapes
                      </span>
                      <span className="text-[9.5px] bg-[#FAF9F6]/20 backdrop-blur-md text-white font-medium px-2 py-0.5 rounded-full border border-white/30">
                        Goa • Bali • Maldives
                      </span>
                    </div>
                  </div>

                  {/* Scenic Coach & Mountain Passes */}
                  <div className="relative h-32 rounded-xl overflow-hidden shadow-xs border border-[#E5E0D5] group">
                    <Image
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
                      alt="Scenic Travel Coach & Mountain Drive"
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/25 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between">
                      <span className="text-[11.5px] font-semibold flex items-center gap-1.5">
                        <Bus className="w-3.5 h-3.5 text-[#C9A84C]" /> Coach &amp; SUV Tours
                      </span>
                      <span className="text-[9.5px] bg-[#FAF9F6]/20 backdrop-blur-md text-white font-medium px-2 py-0.5 rounded-full border border-white/30">
                        Himachal • Kashmir
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Trending Destination Quick Filter Chips */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mr-1">
                  Popular:
                </span>
                {["Kashmir Valley", "Dubai", "Switzerland", "Himachal Coach", "Rajasthan Royal", "Goa Beaches", "Bali", "Thailand"].map(
                  (place) => (
                    <button
                      key={place}
                      type="button"
                      onClick={() => setFormData({ ...formData, destination: place.replace(" Coach", "").replace(" Royal", "").replace(" Beaches", "") })}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white hover:bg-[#FBF7EE] text-stone-700 hover:text-[#BFA13B] transition-all border border-[#E5E0D5] shadow-xs cursor-pointer"
                    >
                      {place}
                    </button>
                  )
                )}
            </div>

          </div>

          {/* Right Column: Refined Private Concierge Inquiry Card with Moving Border Beam */}
          <div className="lg:col-span-5" id="hero-inquiry-form">
            <div className="border-beam-card shadow-[0_16px_40px_-6px_rgba(28,25,23,0.12)]">
              <div className="border-beam-inner p-6 sm:p-7">
                
                {/* Refined Gold Header Pill */}
                <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-[#E5E0D5]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-gold-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">
                      Bespoke Trip Inquiry
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#BFA13B] bg-[#FAF9F6] px-2 py-0.5 rounded-full border border-[#BFA13B]/20">
                    Delhi Planning Desk
                  </span>
                </div>

                {/* Dynamic Moving Laser Beam Line */}
                <div className="moving-line-track mb-3">
                  <div className="moving-line-beam" />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-stone-950 tracking-tight">
                    Plan Your Dream Itinerary
                  </h3>
                  <p className="text-[13px] text-stone-700 mt-1 font-normal leading-relaxed">
                    Direct connection with our Connaught Place travel planners. Handcrafted itineraries with zero hidden charges.
                  </p>
                </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3.5">
                  <div className="w-14 h-14 rounded-full bg-[#FAF9F6] text-[#BFA13B] flex items-center justify-center mx-auto border border-[#BFA13B]/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-[#1C1917]">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-xs mx-auto leading-relaxed">
                    Thank you! Our senior travel planner from Delhi will contact you shortly with curated itineraries and custom pricing.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  
                  {/* Destination Field */}
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Where would you like to travel?
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#BFA13B] absolute left-3 top-3 pointer-events-none" />
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#BFA13B] focus:bg-white transition-all cursor-pointer"
                        required
                      >
                        <optgroup label="India Tour Packages">
                          <option value="Kashmir Valley">Kashmir (Srinagar, Gulmarg, Dal Lake)</option>
                          <option value="Himachal Pradesh">Himachal Pradesh (Manali, Solang Valley)</option>
                          <option value="Goa Coastal">Goa Coastal (Beaches &amp; Heritage)</option>
                          <option value="Rajasthan Royal">Rajasthan (Jaipur, Jodhpur, Udaipur)</option>
                          <option value="Kerala Backwaters">Kerala Backwaters &amp; Munnar Hills</option>
                          <option value="Ladakh High Passes">Ladakh (Leh, Pangong Azure Lake)</option>
                          <option value="Uttarakhand Trails">Uttarakhand (Rishikesh, Nainital, Corbett)</option>
                          <option value="Andaman Islands">Andaman Islands (Havelock Scuba &amp; Beach)</option>
                        </optgroup>
                        <optgroup label="International Tour Packages">
                          <option value="Dubai & Abu Dhabi">Dubai &amp; Abu Dhabi (Burj Khalifa, Desert Safari)</option>
                          <option value="Switzerland Alpine">Switzerland Alpine (Alps, Lucerne, Interlaken)</option>
                          <option value="Bali Tropical">Bali Tropical (Ubud Terraces &amp; Seminyak)</option>
                          <option value="Thailand & Bangkok">Thailand (Bangkok &amp; Phuket Island)</option>
                          <option value="Singapore & Sentosa">Singapore &amp; Sentosa Island</option>
                          <option value="Vietnam Heritage">Vietnam (Halong Bay Cruise, Hoi An)</option>
                          <option value="Maldives Atolls">Maldives Private Island Atolls</option>
                          <option value="Europe Discovery">Europe Grand Discovery (Paris, Rome, Swiss)</option>
                        </optgroup>
                        <option value="Custom Tailored Package">Custom Tailored / Other Destination</option>
                      </select>
                    </div>
                  </div>

                  {/* Travel Month & Guests */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Travel Month
                      </label>
                      <div className="relative">
                        <Calendar className="w-3.5 h-3.5 text-[#BFA13B] absolute left-2.5 top-3 pointer-events-none" />
                        <select
                          name="travelDate"
                          value={formData.travelMonth}
                          onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                          className="w-full pl-8 pr-2 py-2.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#BFA13B] focus:bg-white transition-all cursor-pointer"
                        >
                          <option value="Next 30 Days">Next 30 Days</option>
                          <option value="April - May 2026">April - May 2026</option>
                          <option value="June - July 2026">June - July 2026</option>
                          <option value="August - September 2026">Aug - Sept 2026</option>
                          <option value="October - December 2026">Festive 2026</option>
                          <option value="Flexible Dates">Flexible Dates</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Travellers
                      </label>
                      <div className="relative">
                        <Users className="w-3.5 h-3.5 text-[#BFA13B] absolute left-2.5 top-3 pointer-events-none" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full pl-8 pr-2 py-2.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#BFA13B] focus:bg-white transition-all cursor-pointer"
                        >
                          <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                          <option value="1 Solo Traveller">1 Solo Explorer</option>
                          <option value="Family (3-4 Members)">Family (3-4 Members)</option>
                          <option value="Group of Friends (4-8)">Friends Group (4-8)</option>
                          <option value="Corporate / Large Group">Large Group (8+)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#BFA13B] focus:bg-white transition-all placeholder:text-stone-400"
                    />
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#BFA13B] focus:bg-white transition-all placeholder:text-stone-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="vikram@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#BFA13B] focus:bg-white transition-all placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  {/* Optional Note */}
                  <div>
                    <textarea
                      name="notes"
                      rows={2}
                      placeholder="Special preferences (e.g. 4-star boutique stay, scenic balcony, relaxed itinerary)"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs font-normal text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#BFA13B] focus:bg-white transition-all placeholder:text-stone-400 resize-none"
                    />
                  </div>

                  {/* PROMINENT RADIANT SHINING GOLD CTA BUTTON: Inquiry Now */}
                  <div className="pt-1.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide bg-shining-gold shining-sweep hover:brightness-105 active:scale-[0.99] text-stone-950 shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-all duration-200 flex items-center justify-center gap-2 border border-[#BFA13B]/40 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-stone-950 fill-stone-950" />
                          <span>Inquiry Now</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-stone-500 pt-1 font-medium flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Privacy • No Spam • Handcrafted Quotes from Delhi Desk</span>
                  </p>
                </form>
              )}
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


