"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopDestinationsSection from "@/components/TopDestinationsSection";
import IndianPackagesSection from "@/components/IndianPackagesSection";
import InternationalPackagesSection from "@/components/InternationalPackagesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutAgencySection from "@/components/AboutAgencySection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import PackageModal from "@/components/PackageModal";
import CustomTripModal from "@/components/CustomTripModal";
import { TourPackage } from "@/data/packages";

export default function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const handleOpenPackageDetails = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  const handleInquirePackage = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col selection:bg-[#BFA13B]/20 selection:text-stone-950">
      
      {/* Global Header & Mega Navigation */}
      <Navbar
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenInquiryModal={() => {
          if (typeof window !== "undefined" && window.innerWidth < 1024) {
            setIsCustomModalOpen(true);
          } else {
            const heroForm = document.getElementById("hero-inquiry-form");
            if (heroForm) {
              heroForm.scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
              setIsCustomModalOpen(true);
            }
          }
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section + Yellow Marked Inquiry Form */}
        <HeroSection />

        {/* 2. Destinations & Packages: Top Destinations and Tour Packages Slider */}
        <TopDestinationsSection
          onSelectPackage={handleOpenPackageDetails}
          onInquirePackage={handleInquirePackage}
        />

        {/* 3. Best Indian Tour Packages Slider */}
        <IndianPackagesSection
          onSelectPackage={handleOpenPackageDetails}
          onInquirePackage={handleInquirePackage}
        />

        {/* 4. Best International Tour Packages Slider */}
        <InternationalPackagesSection
          onSelectPackage={handleOpenPackageDetails}
          onInquirePackage={handleInquirePackage}
        />

        {/* 5. Why Choose Us: 7 Core Pillars */}
        <WhyChooseUsSection />

        {/* 6. Testimonials: Client Photo Space & Authentic Reviews */}
        <TestimonialsSection />

        {/* 7. Authority Editorial: Best Tour and Travel Agency in Delhi (4 Verbatim Paragraphs) */}
        <AboutAgencySection />

        {/* 8. Services We Offer: 5 Feature Cards */}
        <ServicesSection
          onOpenCustomModal={() => setIsCustomModalOpen(true)}
        />

        {/* 9. FAQs: 7 Exact Questions (H3) with Answers */}
        <FaqSection />

      </main>

      {/* Footer & Policies */}
      <Footer />

      {/* Interactive Package Detail Modal */}
      <PackageModal
        pkg={selectedPackage}
        isOpen={isPackageModalOpen}
        onClose={() => {
          setIsPackageModalOpen(false);
          setSelectedPackage(null);
        }}
      />

      {/* Interactive Custom Tour Planner Modal */}
      <CustomTripModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />

    </div>
  );
}
