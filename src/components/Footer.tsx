"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowUpRight,
  Bus,
  Palmtree,
  Plane,
} from "lucide-react";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact-footer" className="bg-[#0A0A0A] text-stone-300 pt-10 pb-8 sm:pt-12 sm:pb-10 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Column 1: Brand Info & Fleet badges */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C0A09] border border-[#BFA13B]/30 text-[#BFA13B] flex items-center justify-center font-bold shadow-xs">
                <Compass className="w-5 h-5 text-[#BFA13B]" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-white tracking-tight">
                  Altitude Travel<span className="text-[#BFA13B]">.</span>
                </span>
                <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#C9A84C] block -mt-0.5 font-semibold">
                  Connaught Place, New Delhi
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-stone-400 leading-relaxed max-w-sm font-normal">
              Altitude Travel Co. is a tour and travel agency in Delhi offering international tour packages, Indian tour packages, and custom trips. We combine iconic landmarks with hidden gems, local food, and a complete free day.
            </p>

            {/* Travel badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-[#141210] border border-[#BFA13B]/20 text-stone-300 px-2.5 py-0.5 rounded-full">
                <Bus className="w-3 h-3 text-[#BFA13B]" /> Luxury Bus &amp; Cabs
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-[#141210] border border-[#BFA13B]/20 text-stone-300 px-2.5 py-0.5 rounded-full">
                <Palmtree className="w-3 h-3 text-[#BFA13B]" /> Beach Resorts
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-[#141210] border border-[#BFA13B]/20 text-stone-300 px-2.5 py-0.5 rounded-full">
                <Clock className="w-3 h-3 text-[#BFA13B]" /> 1 Free Day Guaranteed
              </span>
            </div>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-stone-300 font-normal">
                <MapPin className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                <span>Connaught Place, Central Delhi, New Delhi 110001, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-300 font-normal">
                <Phone className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                <a href="tel:+919810024680" className="hover:text-[#BFA13B] transition-colors">
                  +91 98100 24680 / +91 11 4321 0000
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-stone-300 font-normal">
                <Mail className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                <a href="mailto:inquiries@altitudetravel.in" className="hover:text-[#BFA13B] transition-colors">
                  inquiries@altitudetravel.in
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-stone-400 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Column 2: Indian Tour Packages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#BFA13B] rounded-full inline-block" />
              <span>Indian Tour Packages</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#indian-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Kashmir Tour Packages</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="#indian-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Himachal Pradesh Volvo Tours</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="/goa-tour-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Goa Tropical Beach Escapes</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="#indian-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Rajasthan Royal Heritage Tours</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="#indian-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Kerala Backwaters &amp; Munnar Hills</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="#indian-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Ladakh High Pass Expeditions</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: International Tour Packages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#BFA13B] rounded-full inline-block" />
              <span>International Packages</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/dubai-tour-and-travel" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Dubai &amp; Abu Dhabi Tour Packages</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="#international-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Switzerland Alpine Glaciers &amp; Trains</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="#international-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Bali Tropical Sanctuary (Indonesia)</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="/thailand-tour-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Thailand &amp; Bangkok Tour Packages</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="/kandy-bentota-tour-packages" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Kandy Bentota Sri Lanka Packages</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
              <li>
                <Link href="/vietnam-tour-and-travel" className="hover:text-[#BFA13B] transition-colors flex items-center justify-between text-stone-300">
                  <span>Vietnam Heritage &amp; Halong Bay</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#BFA13B] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#BFA13B] rounded-full inline-block" />
              <span>Policies</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#BFA13B] transition-colors block text-stone-300"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-[#BFA13B] transition-colors block text-stone-300"
                >
                  Refund &amp; Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#BFA13B] transition-colors block text-stone-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="text-[11px] text-[#BFA13B] hover:text-[#C9A84C] font-bold cursor-pointer"
                >
                  ↑ Back to Top
                </button>
              </li>
            </ul>
          </div>

        </div>


        {/* Copyright & Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div>
            © {new Date().getFullYear()} Altitude Travel Co. All rights reserved. Registered Tour and Travel Agency in Delhi, India.
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <span className="flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Delhi Tour Operator
            </span>
            <span>•</span>
            <span className="text-[#BFA13B] font-bold">
              Transparent Pricing &amp; Zero Hidden Charges
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
