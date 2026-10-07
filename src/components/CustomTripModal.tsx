"use client";

import React, { useState } from "react";
import {
  X,
  Compass,
  Sliders,
  Send,
  Calendar,
  Users,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Bus,
  Palmtree,
} from "lucide-react";

interface CustomTripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomTripModal({ isOpen, onClose }: CustomTripModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    duration: "5 to 7 Days",
    tripType: "Family Holiday",
    hotelTier: "4-Star Boutique",
    budget: "₹50,000 - ₹1,00,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tripType: `Custom Trip: ${formData.tripType} (${formData.hotelTier})`,
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
      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200/90">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-900 border border-sky-200/80 px-3.5 py-1 rounded-full text-xs font-semibold shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-sky-700" />
            <span>Tailor-Made Tour Planner • Delhi Desk</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#08182B] tracking-tight">
            Build Your Custom Tour Package
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-normal leading-relaxed">
            Share your destination, dates, budget and interests. Altitude Travel Co. will design an itinerary tailored precisely to you, including our signature free day.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Custom Request Received!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you! Our custom itinerary specialist in Delhi is reviewing your requirements and will reach out with a handcrafted day-by-day plan and transparent quote.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-3 text-xs font-black bg-[#08182B] text-amber-300 rounded-2xl shadow-md cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Destination & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Target Destination(s)
                </label>
                <input
                  type="text"
                  name="destination"
                  required
                  placeholder="e.g. Kashmir + Ladakh or Switzerland + Paris"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-2.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Trip Duration
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-2.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                >
                  <option value="3 to 4 Days (Quick Getaway)">3 to 4 Days (Quick Getaway)</option>
                  <option value="5 to 7 Days (Popular)">5 to 7 Days (Popular)</option>
                  <option value="8 to 10 Days (Comprehensive)">8 to 10 Days (Comprehensive)</option>
                  <option value="12+ Days (Grand Tour)">12+ Days (Grand Tour)</option>
                </select>
              </div>
            </div>

            {/* Travel Style & Hotel Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Travel Occasion / Group
                </label>
                <select
                  value={formData.tripType}
                  onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                >
                  <option value="Honeymoon / Couple">Honeymoon / Couple</option>
                  <option value="Family Holiday">Family Holiday</option>
                  <option value="Friends Getaway">Friends Getaway</option>
                  <option value="Senior Citizens Trip">Senior Citizens Trip</option>
                  <option value="Solo Explorer">Solo Explorer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Hotel Tier
                </label>
                <select
                  value={formData.hotelTier}
                  onChange={(e) => setFormData({ ...formData, hotelTier: e.target.value })}
                  className="w-full px-4 py-2.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                >
                  <option value="3-Star Premium & Cozy">3-Star Premium &amp; Cozy</option>
                  <option value="4-Star Boutique (Recommended)">4-Star Boutique (Recommended)</option>
                  <option value="5-Star Luxury & Palaces">5-Star Luxury &amp; Palaces</option>
                  <option value="Heritage Havelis / Houseboats">Heritage Havelis / Unique Stays</option>
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98XXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Additional details */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                Specific Interests or Sightseeing Wishes
              </label>
              <textarea
                rows={2}
                name="message"
                placeholder="e.g. Include vegetarian meals, offbeat market visits, or relaxed morning departures..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 border border-amber-300 cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Inquiry Now for Custom Package</span>
              </button>
            </div>

            <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>No extra planning charge • Free itinerary revision</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
