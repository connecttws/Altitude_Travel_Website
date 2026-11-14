"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Compass,
  Sparkles,
  MessageSquare,
  AlertCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const TRIP_TYPES = [
  { id: "Family", label: "Family" },
  { id: "Honeymoon", label: "Honeymoon" },
  { id: "Friends", label: "Friends" },
  { id: "Solo", label: "Solo" },
  { id: "Group", label: "Group" },
];

const POPULAR_DESTINATIONS = [
  "Vietnam",
  "Thailand",
  "Dubai",
  "Goa",
  "Kashmir",
  "Sri Lanka",
  "Bali",
  "Europe",
];

const BUDGET_OPTIONS = [
  "Budget-Friendly",
  "Standard Comfort",
  "Luxury Premium",
  "Custom Budget",
];

const TRAVELLER_OPTIONS = [
  "1 Solo",
  "2 Couple / Pair",
  "3 to 4 Family",
  "5+ Group",
];

export default function ContactClientForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    destination: "",
    tripType: "Family",
    travelDate: "",
    travellers: "2 Couple / Pair",
    budget: "Standard Comfort",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleDestinationSelect = (dest: string) => {
    setFormData((prev) => ({ ...prev, destination: dest }));
  };

  const handleTripTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, tripType: type }));
  };

  const constructWhatsAppUrl = () => {
    const text = [
      "Hello Altitude Travel Co., I would like to enquire about a tour package:",
      `• Name: ${formData.fullName.trim()}`,
      `• Phone: ${formData.phoneNumber.trim()}`,
      formData.email.trim() ? `• Email: ${formData.email.trim()}` : "",
      formData.destination.trim() ? `• Preferred Destination: ${formData.destination.trim()}` : "",
      `• Type of Trip: ${formData.tripType}`,
      formData.travelDate.trim() ? `• Travel Date: ${formData.travelDate.trim()}` : "",
      `• Number of Travellers: ${formData.travellers}`,
      `• Approximate Budget: ${formData.budget}`,
      formData.requirements.trim() ? `• Requirements: ${formData.requirements.trim()}` : "",
      "\nPlease share customized itinerary options and best quotes. Thank you!",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/919639320101?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!formData.phoneNumber.trim()) {
      setErrorMessage("Please enter your contact phone / WhatsApp number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // 1. Submit lead to local server API / CRM tracker
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          phone: formData.phoneNumber.trim(),
          email: formData.email.trim() || undefined,
          destination: formData.destination.trim() || "Unspecified",
          travelDate: formData.travelDate.trim() || "Flexible",
          guests: formData.travellers,
          tripType: formData.tripType,
          budget: formData.budget,
          message: formData.requirements.trim() || undefined,
        }),
      });

      // 2. Open WhatsApp link with pre-formatted enquiry details
      const waUrl = constructWhatsAppUrl();
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting contact form:", err);
      // Even if network API call fails, still give user the WhatsApp link option
      const waUrl = constructWhatsAppUrl();
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      destination: "",
      tripType: "Family",
      travelDate: "",
      travellers: "2 Couple / Pair",
      budget: "Standard Comfort",
      requirements: "",
    });
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-10 shadow-sm relative overflow-hidden">
      {/* Decorative Accent Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/10 via-[#BFA13B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {isSubmitted ? (
        <div className="py-12 sm:py-16 text-center space-y-6 max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 border-2 border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-md">
            <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Enquiry Submitted Successfully!
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Thank you, <span className="font-bold text-stone-900">{formData.fullName}</span>. Our travel specialists in Bazpur, Uttarakhand are reviewing your preferences and will connect with you shortly.
            </p>
          </div>

          <div className="p-4 bg-[#FAF9F6] border border-[#E5E0D5] rounded-2xl text-xs sm:text-sm text-stone-700 space-y-2 text-left">
            <div className="flex items-center gap-2 font-bold text-stone-900 pb-1 border-b border-stone-200">
              <Sparkles className="w-4 h-4 text-[#BFA13B]" />
              <span>Enquiry Summary:</span>
            </div>
            {formData.destination && (
              <div><strong className="text-stone-900">Destination:</strong> {formData.destination}</div>
            )}
            <div><strong className="text-stone-900">Trip Type:</strong> {formData.tripType} • {formData.travellers}</div>
            <div><strong className="text-stone-900">Contact:</strong> {formData.phoneNumber}</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={constructWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Continue on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 relative z-10">
          
          {/* Header */}
          <div className="space-y-2 pb-2 border-b border-stone-100">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#D4AF37]/30 text-[#7A5200] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
              <span>Send Us Your Travel Enquiry</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-stone-950 tracking-tight">
              Tell Us About Your Dream Journey
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm font-normal leading-relaxed">
              Looking for a suitable holiday package? Share a few details about your travel plans using the enquiry form. This will help our team understand your requirements and suggest relevant options.
            </p>
          </div>

          {/* Inline Error Alert */}
          {errorMessage && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Full Name & Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. Rajesh Sharma"
                className="w-full px-4 py-2.5 sm:py-3 text-sm text-stone-900 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl focus:outline-hidden focus:border-[#BFA13B] focus:ring-2 focus:ring-[#BFA13B]/20 transition-all placeholder:text-stone-400 font-medium"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                Phone / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 sm:py-3 text-sm text-stone-900 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl focus:outline-hidden focus:border-[#BFA13B] focus:ring-2 focus:ring-[#BFA13B]/20 transition-all placeholder:text-stone-400 font-medium"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 hidden sm:inline-block">
                  WhatsApp Enabled
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Email Address & Travel Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                Email Address <span className="text-stone-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 sm:py-3 text-sm text-stone-900 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl focus:outline-hidden focus:border-[#BFA13B] focus:ring-2 focus:ring-[#BFA13B]/20 transition-all placeholder:text-stone-400 font-medium"
              />
            </div>

            <div>
              <label htmlFor="travelDate" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                Expected Travel Date / Month
              </label>
              <input
                id="travelDate"
                name="travelDate"
                type="text"
                value={formData.travelDate}
                onChange={handleInputChange}
                placeholder="e.g. Next Month / December 2026"
                className="w-full px-4 py-2.5 sm:py-3 text-sm text-stone-900 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl focus:outline-hidden focus:border-[#BFA13B] focus:ring-2 focus:ring-[#BFA13B]/20 transition-all placeholder:text-stone-400 font-medium"
              />
            </div>
          </div>

          {/* Preferred Destination */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="destination" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                Preferred Destination
              </label>
              <span className="text-[11px] text-stone-500 hidden sm:inline">
                Click a popular spot or type your own
              </span>
            </div>

            <input
              id="destination"
              name="destination"
              type="text"
              value={formData.destination}
              onChange={handleInputChange}
              placeholder="e.g. Vietnam, Thailand, Dubai, Goa, Kashmir, or Custom Destination"
              className="w-full px-4 py-2.5 sm:py-3 text-sm text-stone-900 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl focus:outline-hidden focus:border-[#BFA13B] focus:ring-2 focus:ring-[#BFA13B]/20 transition-all placeholder:text-stone-400 font-medium"
            />

            {/* Quick Destination Pills */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1">
              <span className="text-[11px] font-bold text-stone-500 mr-1">Popular:</span>
              {POPULAR_DESTINATIONS.map((dest) => (
                <button
                  key={dest}
                  type="button"
                  onClick={() => handleDestinationSelect(dest)}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                    formData.destination === dest
                      ? "bg-[#0C0A09] text-[#F5D77F] border-[#D4AF37]/50 font-bold shadow-2xs"
                      : "bg-[#FAF9F6] text-stone-700 hover:text-stone-950 hover:bg-stone-100 border-[#E5E0D5]"
                  }`}
                >
                  {dest}
                </button>
              ))}
            </div>
          </div>

          {/* Type of Trip */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
              Type of Trip
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {TRIP_TYPES.map((type) => {
                const isSelected = formData.tripType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleTripTypeSelect(type.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                      isSelected
                        ? "bg-[#0C0A09] text-[#F5D77F] border-[#D4AF37] shadow-xs"
                        : "bg-[#FAF9F6] text-stone-700 hover:text-stone-950 hover:bg-stone-100 border-[#E5E0D5]"
                    }`}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 3: Number of Travellers & Approximate Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="travellers" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                Number of Travellers
              </label>
              <select
                id="travellers"
                name="travellers"
                value={formData.travellers}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 sm:py-3 text-sm text-stone-900 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl focus:outline-hidden focus:border-[#BFA13B] focus:ring-2 focus:ring-[#BFA13B]/20 transition-all font-medium cursor-pointer"
              >
                {TRAVELLER_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                Approximate Travel Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 sm:py-3 text-sm text-stone-900 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl focus:outline-hidden focus:border-[#BFA13B] focus:ring-2 focus:ring-[#BFA13B]/20 transition-all font-medium cursor-pointer"
              >
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Travel Requirements / Special Requests */}
          <div>
            <label htmlFor="requirements" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
              Your Travel Requirements & Preferences
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows={3}
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Tell us about hotel categories (4-Star/5-Star/Resort), flights requirement, sightseeing preferences, dietary requirements, or any specific requests..."
              className="w-full px-4 py-2.5 sm:py-3 text-sm text-stone-900 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl focus:outline-hidden focus:border-[#BFA13B] focus:ring-2 focus:ring-[#BFA13B]/20 transition-all placeholder:text-stone-400 font-medium resize-y"
            />
          </div>

          {/* Action Row: Send Enquiry Button + Trust Assurance */}
          <div className="pt-2 space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 sm:py-4 px-6 rounded-xl font-bold text-sm sm:text-base bg-shining-gold text-stone-950 hover:brightness-105 active:scale-[0.99] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.4)] border border-[#D4AF37]/60 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Your Travel Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-stone-950" />
                  <span>Send My Enquiry</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp Quick-Bar Alternative */}
            <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-600">
                <ShieldCheck className="w-4 h-4 text-[#BFA13B] shrink-0" />
                <span>Zero spam guarantee • 100% transparent pricing • No booking fees</span>
              </div>
              <a
                href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20want%20to%20plan%20a%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#25D366] hover:underline shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>Prefer Instant WhatsApp? Click Here</span>
              </a>
            </div>
          </div>

        </form>
      )}
    </div>
  );
}
