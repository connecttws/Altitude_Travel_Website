"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TourPackage } from "@/data/packages";
import {
  X,
  MapPin,
  Clock,
  Star,
  Check,
  Sparkles,
  Send,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle2,
  Bus,
  Palmtree,
} from "lucide-react";

interface PackageModalProps {
  pkg: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PackageModal({ pkg, isOpen, onClose }: PackageModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelMonth: "Upcoming Month",
    guests: "2 Adults (Couple)",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !pkg) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          destination: pkg.title,
          tripType: `${pkg.category.toUpperCase()} Package Inquiry`,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0C0A09]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF9F6] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E5E0D5]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0C0A09]/80 hover:bg-[#0C0A09] text-white border border-[#BFA13B]/30 flex items-center justify-center transition-colors shadow-md cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-stone-950">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-[#0C0A09]/40 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#BFA13B] text-stone-950 font-bold text-xs px-2.5 py-0.5 rounded-full shadow-xs">
                {pkg.category === "indian" ? "Indian Tour Package" : "International Tour Package"}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white font-medium text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/20">
                <MapPin className="w-3 h-3 text-[#E8D08D]" />
                {pkg.destination}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white font-medium text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/20">
                <Clock className="w-3 h-3 text-[#E8D08D]" />
                {pkg.duration}
              </span>
            </div>

            <h2 className="text-xl sm:2xl font-serif font-bold text-white tracking-tight">
              {pkg.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200/90 font-normal">
              {pkg.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Content Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Itinerary & Inclusions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#BFA13B] mb-2">
                Trip Overview
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                {pkg.overview}
              </p>
            </div>

            {/* Signature Features */}
            <div className="bg-[#FBF7EE] border border-[#BFA13B]/30 rounded-2xl p-4.5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#BFA13B]" />
                <span>Altitude Signature Travel Experience:</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 font-medium">
                🎯 <strong>Free Day:</strong> {pkg.freeDayNote}
              </p>
              <p className="text-xs sm:text-sm text-stone-700 font-medium">
                🍲 <strong>Local Cuisine:</strong> {pkg.localFoodHighlight}
              </p>
            </div>

            {/* Day by Day Itinerary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#BFA13B] mb-3">
                Day-by-Day Journey Itinerary
              </h3>
              <div className="space-y-3">
                {pkg.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="p-4 rounded-2xl border border-[#E5E0D5] bg-white flex gap-3.5 shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0C0A09] text-[#E8D08D] font-serif font-bold text-xs flex items-center justify-center shrink-0 border border-[#BFA13B]/30 shadow-xs">
                      D{day.day}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-serif font-bold text-stone-900">
                        {day.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed font-normal">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-[#E5E0D5] rounded-2xl p-4 space-y-2 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  What&apos;s Included:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#BFA13B] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#E5E0D5] rounded-2xl p-4 space-y-2 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Exclusions:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-stone-300 text-xs shrink-0">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Pricing & Quick Booking Form */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Price Box */}
            <div className="bg-[#0C0A09] text-white rounded-[24px] p-5 shadow-xl space-y-1 text-center border border-[#BFA13B]/30">
              <span className="text-[11px] uppercase tracking-widest text-[#E8D08D] font-bold">
                Special Package Pricing
              </span>
              <div className="text-3xl font-serif font-bold text-white">
                {pkg.priceStarting}
                <span className="text-xs font-sans font-normal text-stone-400"> / person</span>
              </div>
              <p className="text-[11px] text-stone-300">
                Includes Handpicked Stays, Transfers &amp; Breakfast
              </p>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white border border-[#E5E0D5] rounded-[24px] p-5 sm:p-6 shadow-sm space-y-3">
              <div className="text-center">
                <h4 className="text-base font-serif font-bold text-stone-900">
                  Inquire for This Package
                </h4>
                <p className="text-xs text-stone-500 font-medium">
                  Get a personalized quote &amp; free day itinerary from our Delhi team.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center mx-auto border border-[#BFA13B]/40">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h5 className="text-sm font-serif font-bold text-stone-900">Inquiry Received</h5>
                  <p className="text-xs text-stone-600">
                    We will call or WhatsApp you with exact options within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs font-semibold text-stone-900 focus:outline-none focus:border-[#BFA13B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs font-semibold text-stone-900 focus:outline-none focus:border-[#BFA13B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs font-medium text-stone-900 focus:outline-none focus:border-[#BFA13B]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Travel Month
                      </label>
                      <input
                        type="text"
                        name="travelDate"
                        placeholder="e.g. May 2026"
                        value={formData.travelMonth}
                        onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs font-medium text-stone-900 focus:outline-none focus:border-[#BFA13B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Guests
                      </label>
                      <input
                        type="text"
                        name="guests"
                        placeholder="2 Adults"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl text-xs font-medium text-stone-900 focus:outline-none focus:border-[#BFA13B]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl font-serif font-bold text-xs uppercase tracking-wider bg-[#0C0A09] hover:bg-stone-900 text-[#E8D08D] shadow-xs hover:shadow transition-all flex items-center justify-center gap-1.5 border border-[#BFA13B]/40 cursor-pointer active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5 text-[#BFA13B]" />
                    <span>Inquiry Now for This Package</span>
                  </button>
                </form>
              )}
            </div>

            <div className="text-center text-xs text-stone-500 flex items-center justify-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#BFA13B]" />
              <span>Transparent Pricing • No Obligation Quote</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
