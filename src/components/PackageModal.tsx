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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#08182B]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200/90">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08182B] via-[#08182B]/40 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-bold text-xs px-2.5 py-0.5 rounded-full shadow-xs">
                {pkg.category === "indian" ? "Indian Tour Package" : "International Tour Package"}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white font-medium text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/20">
                <MapPin className="w-3 h-3 text-sky-400" />
                {pkg.destination}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white font-medium text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/20">
                <Clock className="w-3 h-3 text-amber-400" />
                {pkg.duration}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {pkg.title}
            </h2>
            <p className="text-xs sm:text-sm text-sky-100/90 font-normal">
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
              <h3 className="text-xs font-black uppercase tracking-wider text-sky-900 mb-2">
                Trip Overview
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {pkg.overview}
              </p>
            </div>

            {/* Signature Features */}
            <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4.5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-black text-sky-950 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Altitude Signature Travel Experience:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                🎯 <strong>Free Day:</strong> {pkg.freeDayNote}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                🍲 <strong>Local Cuisine:</strong> {pkg.localFoodHighlight}
              </p>
            </div>

            {/* Day by Day Itinerary */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-sky-900 mb-3">
                Day-by-Day Journey Itinerary
              </h3>
              <div className="space-y-3">
                {pkg.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="p-4 rounded-2xl border border-sky-100 bg-sky-50/40 flex gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#08182B] text-amber-400 font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                      D{day.day}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-[#08182B]">
                        {day.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-emerald-900">
                  What&apos;s Included:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Exclusions:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-slate-400 text-xs shrink-0">•</span>
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
            <div className="bg-[#08182B] text-white rounded-[24px] p-5 shadow-xl space-y-1 text-center border border-sky-900">
              <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                Special Package Pricing
              </span>
              <div className="text-3xl font-black text-amber-400">
                {pkg.priceStarting}
                <span className="text-xs font-normal text-sky-200"> / person</span>
              </div>
              <p className="text-[11px] text-sky-300">
                Includes Handpicked Stays, Transfers &amp; Breakfast
              </p>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white border-2 border-amber-400 rounded-[28px] p-5 shadow-lg space-y-3">
              <div className="text-center">
                <h4 className="text-base font-black text-[#08182B]">
                  Inquire for This Package
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Get a personalized quote &amp; free day itinerary from our Delhi team.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h5 className="text-sm font-bold text-slate-900">Inquiry Received</h5>
                  <p className="text-xs text-slate-600">
                    We will call or WhatsApp you with exact options within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 bg-slate-50/70 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Travel Month
                      </label>
                      <input
                        type="text"
                        name="travelDate"
                        placeholder="e.g. May 2026"
                        value={formData.travelMonth}
                        onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50/70 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Guests
                      </label>
                      <input
                        type="text"
                        name="guests"
                        placeholder="2 Adults"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50/70 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xs hover:shadow transition-all flex items-center justify-center gap-1.5 border border-amber-300 cursor-pointer active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                    <span>Inquiry Now for This Package</span>
                  </button>
                </form>
              )}
            </div>

            <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Transparent Pricing • No Obligation Quote</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
