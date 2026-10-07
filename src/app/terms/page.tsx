import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, ArrowLeft, Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Altitude Travel Co. Delhi",
  description:
    "Review the terms and conditions for booking Indian and international tour packages with Altitude Travel Co., Delhi.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-lg border border-amber-200 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-3 border-b border-slate-100 pb-6">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                Altitude Travel Co. • Delhi, India
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Term and Conditions
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Last updated: October 2026 • Effective for all Indian and International Tour Packages
              </p>
            </div>

            <section className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <h2 className="text-xl font-bold text-slate-900">1. Booking & Agreement</h2>
              <p>
                By booking any Indian tour package, international tour package, or custom travel itinerary with Altitude Travel Co. (Connaught Place, New Delhi), you agree to comply with and be bound by the terms detailed herein. All quotations and reservations are subject to availability at the time of confirmed deposit.
              </p>

              <h2 className="text-xl font-bold text-slate-900">2. Transparent Pricing & Inclusions</h2>
              <p>
                At Altitude Travel Co., transparent pricing is our core principle. Every itinerary document shared with travellers explicitly defines all inclusions (hotels, daily breakfast, private AC transport, sightseeing tickets) and exclusions (personal expenses, optional sports, monument camera fees). There are no hidden fees.
              </p>

              <h2 className="text-xl font-bold text-slate-900">3. Itinerary Flexibility & Free Days</h2>
              <p>
                Wherever possible, our itineraries incorporate one complete free day to shop, eat, explore, or simply relax at your own pace. While we make every endeavor to maintain the planned sequence of visits, weather conditions, border regulations, or flight adjustments may necessitate flexible adjustments with your agreement.
              </p>

              <h2 className="text-xl font-bold text-slate-900">4. Travel Documents & Visa Guidance</h2>
              <p>
                For international travel (including Dubai, Switzerland, Thailand, Bali, Singapore, Vietnam), clients must carry a valid passport with at least six months validity from the date of return. While Altitude Travel Co. provides complete visa documentation assistance and guidance, the issuance of visas remains solely at the discretion of the respective sovereign embassies and consulates.
              </p>

              <h2 className="text-xl font-bold text-slate-900">5. Health & Travel Insurance</h2>
              <p>
                We strongly recommend comprehensive international travel and medical insurance for all overseas holidays. Altitude Travel Co. can facilitate suitable insurance coverage upon request.
              </p>

              <h2 className="text-xl font-bold text-slate-900">6. Contact & Jurisdiction</h2>
              <p>
                All legal disputes shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India. For any questions regarding terms, reach us at inquiries@altitudetravel.in or +91 98100 24680.
              </p>
            </section>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
