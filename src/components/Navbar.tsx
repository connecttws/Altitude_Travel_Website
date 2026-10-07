"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Compass,
  ChevronDown,
  Phone,
  MapPin,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Calendar,
} from "lucide-react";

interface NavbarProps {
  onOpenCustomModal?: () => void;
  onOpenInquiryModal?: (packageName?: string) => void;
}

export default function Navbar({ onOpenCustomModal, onOpenInquiryModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const indianDestinations = [
    { name: "Kashmir Valley", desc: "Gulmarg Gondola, Dal Lake Houseboats & Doodhpathri", tag: "Snow & Pines", href: "#indian-packages" },
    { name: "Goa Coastal & Heritage", desc: "Tropical Palms, Secluded Beaches & Latin Quarter", tag: "Beach & Palms", href: "/goa-tour-packages" },
    { name: "Himachal Pradesh", desc: "Volvo Coach to Manali, Solang Valley & River Cafés", tag: "Scenic Coach", href: "#indian-packages" },
    { name: "Rajasthan Royal Heritage", desc: "Jaipur, Jodhpur, Udaipur Lake Palaces & Havelis", tag: "Royal Haveli", href: "#indian-packages" },
    { name: "Kerala Backwaters & Hills", desc: "Munnar Tea Estates, Alleppey Houseboats & Palms", tag: "Tropical Serene", href: "#indian-packages" },
    { name: "Ladakh High Passes", desc: "Leh, Pangong Azure Lake, Nubra Valley & Sand Dunes", tag: "High Pass", href: "#indian-packages" },
    { name: "Uttarakhand Hill Trails", desc: "Rishikesh Ganga Ghats, Nainital Lake & Jim Corbett", tag: "Nature Trail", href: "#indian-packages" },
    { name: "Andaman Islands", desc: "Havelock Turquoise Waters, Scuba Coral Reefs", tag: "Island Beach", href: "#indian-packages" },
  ];

  const internationalDestinations = [
    { name: "Dubai & Abu Dhabi", desc: "Burj Khalifa, Red Dune Desert Safari & Marina Yachts", tag: "Modern Luxe", href: "/dubai-tour-and-travel" },
    { name: "Switzerland Alpine Wonder", desc: "Zurich, Lucerne, Interlaken & Swiss Alps Glaciers", tag: "Alpine Dreams", href: "#international-packages" },
    { name: "Bali Tropical Sanctuary", desc: "Ubud Rice Terraces, Secret Waterfalls & Beach Clubs", tag: "Tropical Island", href: "#international-packages" },
    { name: "Thailand & Bangkok", desc: "Phuket Beaches, Phi Phi Islands & Bangkok Markets", tag: "Beaches & Food", href: "/thailand-tour-packages" },
    { name: "Sri Lanka: Kandy & Bentota", desc: "Temple of Tooth, Peradeniya Gardens & Bentota Beach", tag: "Culture & Beach", href: "/kandy-bentota-tour-packages" },
    { name: "Vietnam Heritage & Bays", desc: "Halong Bay Overnight Cruise & Hoi An River Lanterns", tag: "Bay & Culture", href: "/vietnam-tour-and-travel" },
    { name: "Maldives Private Atolls", desc: "Overwater Villas, Seaplane & Coral Lagoons", tag: "Ultra Luxe", href: "#international-packages" },
    { name: "Europe Grand Discovery", desc: "Paris, Rome, Amsterdam & Swiss Panorama Trains", tag: "Classic Grand", href: "#international-packages" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* 1. TOP ANNOUNCEMENT BAR: Refined, Understated, Compact Luxury (34px) */}
      <div className="bg-[#0B1320] text-slate-300 text-[11px] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[34px] flex items-center justify-between">
          
          {/* Left Agency Info */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Tour &amp; Travel Agency in Delhi</span>
            </span>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-sky-400" />
              <span>Connaught Place, New Delhi</span>
            </span>

            <span className="text-slate-600 hidden lg:inline">•</span>

            <span className="hidden lg:inline text-sky-300 font-medium">
              A Free Day Included in Every Itinerary
            </span>
          </div>

          {/* Right Direct Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/919810024680"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Support</span>
            </a>

            <span className="text-slate-700 hidden md:inline">|</span>

            <a
              href="tel:+919810024680"
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 98100 24680</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR: Balanced, Elegant, Perfectly Aligned Height (68px) */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)] border-b border-slate-100"
            : "bg-white/95 backdrop-blur-md border-b border-slate-100/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">
          
          {/* Brand Logo: Clean, Proportional, Luxury Typographic Mark */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-900 via-sky-900 to-sky-700 text-amber-300 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center leading-none">
                <span className="text-[18px] sm:text-[19px] font-bold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                  Altitude Travel
                </span>
                <span className="text-amber-500 font-bold text-lg leading-none ml-0.5">.</span>
              </div>
              <span className="text-[8.5px] uppercase tracking-[0.2em] font-semibold text-slate-400 mt-1">
                Travel Beyond The Tourist Trail
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: Refined Font Size & Uniform Baseline Alignment */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            
            {/* Home */}
            <Link
              href="/"
              className="px-3 py-1.5 text-[13px] xl:text-[13.5px] font-medium text-slate-700 hover:text-sky-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>

            {/* Indian Tour Packages ▾ Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("indian")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`px-3 py-1.5 text-[13px] xl:text-[13.5px] font-medium rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  activeDropdown === "indian"
                    ? "text-sky-700 bg-sky-50/80"
                    : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                }`}
                aria-expanded={activeDropdown === "indian"}
              >
                <span>Indian Tour Packages</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "indian" ? "rotate-180 text-sky-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel */}
              {activeDropdown === "indian" && (
                <div className="absolute top-full left-0 w-[540px] bg-white rounded-2xl shadow-[0_20px_45px_-12px_rgba(15,23,42,0.14)] border border-slate-100 p-4 mt-1.5 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Explore Indian Destinations
                    </span>
                    <Link
                      href="#indian-packages"
                      className="text-[11px] font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span>View All Indian Packages</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {indianDestinations.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all flex flex-col group/item"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-slate-900 group-hover/item:text-sky-700">
                          {item.name}
                        </span>
                        <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-sky-50 group-hover/item:text-sky-700">
                          {item.tag}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* International Tour Packages ▾ Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("international")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`px-3 py-1.5 text-[13px] xl:text-[13.5px] font-medium rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  activeDropdown === "international"
                    ? "text-sky-700 bg-sky-50/80"
                    : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                }`}
                aria-expanded={activeDropdown === "international"}
              >
                <span>International Tour Packages</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "international" ? "rotate-180 text-sky-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel */}
              {activeDropdown === "international" && (
                <div className="absolute top-full left-0 w-[560px] bg-white rounded-2xl shadow-[0_20px_45px_-12px_rgba(15,23,42,0.14)] border border-slate-100 p-4 mt-1.5 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      International Holidays from Delhi
                    </span>
                    <Link
                      href="#international-packages"
                      className="text-[11px] font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span>View All International Packages</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {internationalDestinations.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all flex flex-col group/item"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-slate-900 group-hover/item:text-sky-700">
                          {item.name}
                        </span>
                        <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-sky-50 group-hover/item:text-sky-700">
                          {item.tag}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Custom Tour Packages */}
            <button
              type="button"
              onClick={onOpenCustomModal}
              className="px-3 py-1.5 text-[13px] xl:text-[13.5px] font-medium text-slate-700 hover:text-sky-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Custom Tour Packages</span>
              <span className="text-[9.5px] uppercase tracking-wide font-semibold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-full border border-sky-100">
                Tailored
              </span>
            </button>

            {/* About Us */}
            <Link
              href="#about-agency"
              className="px-3 py-1.5 text-[13px] xl:text-[13.5px] font-medium text-slate-700 hover:text-sky-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link
              href="#contact-footer"
              className="px-3 py-1.5 text-[13px] xl:text-[13.5px] font-medium text-slate-700 hover:text-sky-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Action: Refined Yellow "Inquiry Now" CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const heroForm = document.getElementById("hero-inquiry-form");
                if (heroForm) {
                  heroForm.scrollIntoView({ behavior: "smooth", block: "center" });
                } else if (onOpenInquiryModal) {
                  onOpenInquiryModal();
                }
              }}
              className="h-9 px-4.5 rounded-full font-semibold text-[13px] bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xs hover:shadow transition-all duration-200 flex items-center gap-1.5 border border-amber-300 cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>Inquiry Now</span>
            </button>
          </div>

          {/* Mobile Actions: Compact CTA and Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const heroForm = document.getElementById("hero-inquiry-form");
                if (heroForm) {
                  heroForm.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="h-8 px-3 rounded-full text-xs font-semibold bg-amber-400 text-slate-950 shadow-xs border border-amber-300 flex items-center"
            >
              Inquiry Now
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-5 max-h-[80vh] overflow-y-auto shadow-xl animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Home
              </Link>

              {/* Mobile Indian Packages Accordion */}
              <div className="border-t border-slate-100 pt-1">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "indian" ? null : "indian")
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
                >
                  <span>Indian Tour Packages</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      mobileSubmenu === "indian" ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>
                {mobileSubmenu === "indian" && (
                  <div className="pl-3 pr-2 py-1 space-y-0.5 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                    {indianDestinations.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-1.5 px-2 text-xs font-medium text-slate-700 hover:text-sky-700"
                      >
                        <span>{item.name}</span>
                        <span className="text-[9.5px] text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          {item.tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile International Packages Accordion */}
              <div className="border-t border-slate-100 pt-1">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "intl" ? null : "intl")
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
                >
                  <span>International Tour Packages</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      mobileSubmenu === "intl" ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>
                {mobileSubmenu === "intl" && (
                  <div className="pl-3 pr-2 py-1 space-y-0.5 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                    {internationalDestinations.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-1.5 px-2 text-xs font-medium text-slate-700 hover:text-sky-700"
                      >
                        <span>{item.name}</span>
                        <span className="text-[9.5px] text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          {item.tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Custom Tour Packages */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenCustomModal) onOpenCustomModal();
                }}
                className="text-left px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg flex items-center justify-between"
              >
                <span>Custom Tour Packages</span>
                <span className="text-[9.5px] bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded-full font-semibold border border-sky-100">
                  Tailored
                </span>
              </button>

              <Link
                href="#about-agency"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                About Us
              </Link>

              <Link
                href="#contact-footer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Contact Us
              </Link>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href="tel:+919810024680"
                  className="w-full py-2.5 bg-amber-400 text-slate-950 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-xs border border-amber-300"
                >
                  <Phone className="w-3.5 h-3.5" /> Call +91 98100 24680
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
