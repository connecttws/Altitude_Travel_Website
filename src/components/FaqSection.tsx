"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, ArrowDown } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      q: "1. Which is the best tour and travel agency in Delhi?",
      a: "Altitude Travel is a Delhi-based agency offering curated international and Indian tour packages with local insight, transparent pricing, and personal support.",
    },
    {
      q: "2. Is Altitude Travel Co. a trusted tour and travel agency in Delhi?",
      a: "Yes. Altitude Travel works with verified hotels and trusted local partners, shares clear inclusions and exclusions upfront, and has no hidden costs. Our team supports you at every stage, from planning and booking to your return home.",
    },
    {
      q: "3. Do you offer international tour packages from Delhi?",
      a: "Yes. Altitude Travel offers international tour packages from Delhi to popular destinations like Dubai, Switzerland, and Bangkok. Each destination has different itinerary options, covering iconic landmarks, local food, shopping, hidden gems, and free time.",
    },
    {
      q: "4. Do you offer Indian tour packages?",
      a: "Yes. We offer Indian tour packages to Kashmir, Himachal, Rajasthan, Kerala, Goa, and more, with handpicked stays and local experiences.",
    },
    {
      q: "5. Can I get a custom tour package?",
      a: "Yes. Altitude Travel creates custom tour packages for any destination. Share your travel dates, budget, group size, and interests, and our team will design a personalised itinerary and quote that matches your travel style.",
    },
    {
      q: "6. Can I modify a package itinerary?",
      a: "Yes. Every itinerary is flexible. We adjust hotels, activities, and timings to suit your needs at no extra planning charge.",
    },
    {
      q: "7 .Do you plan honeymoon, family, and group trips?",
      a: "Yes. Altitude Travel plans honeymoon, family, friends', and group trips, as well as trips for senior citizens. Each itinerary includes stays and activities that suit the group, with a free day wherever possible.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-10 sm:py-12 lg:py-14 bg-white border-y border-slate-200/80 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-sky-700" />
            <span>Clear Guidance &amp; Insights</span>
          </div>

          {/* Heading with 1 Psychological Highlight */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
            Frequently Asked Questions About <span className="text-sky-700">Altitude Travel</span>
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Everything you need to know about planning, booking, and travelling with Altitude Travel Co. from Delhi.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-sky-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4.5 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  {/* EXACT H3 HEADING */}
                  <h3 className="text-base sm:text-[17px] font-bold text-[#08182B] hover:text-sky-700 transition-colors leading-snug">
                    {faq.q}
                  </h3>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-amber-400 text-slate-950 rotate-180" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 font-normal">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions CTA Box */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-[#08182B]">Have a specific query about your upcoming trip?</h4>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">Speak directly with our senior destination planners in Connaught Place, Delhi.</p>
          </div>
          <a
            href="tel:+919810024680"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#08182B] hover:bg-slate-900 text-amber-300 hover:text-amber-200 flex items-center gap-2 shadow-xs shrink-0 border border-slate-800 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Call +91 98100 24680</span>
          </a>
        </div>

      </div>
    </section>
  );
}
