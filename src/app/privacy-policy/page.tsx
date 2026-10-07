import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Altitude Travel Co. Delhi",
  description:
    "Altitude Travel Co. is committed to protecting your personal information and privacy.",
};

export default function PrivacyPolicyPage() {
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
                <Lock className="w-3.5 h-3.5 text-amber-600" />
                Data Protection & Privacy
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Altitude Travel Co., New Delhi • Committed to safeguarding client privacy
              </p>
            </div>

            <section className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                At Altitude Travel Co., we prioritize the privacy and security of our travellers. This Privacy Policy outlines what information we collect when you visit our website, submit trip inquiries, or book tour packages, and how that information is safeguarded.
              </p>

              <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
              <p>
                When you request quotes or inquire about Indian or international tour packages, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                <li>Personal identification details: Name, email address, phone number, WhatsApp contact.</li>
                <li>Travel preferences: Desired destinations, tentative travel dates, group size, and special requirements.</li>
                <li>Booking documentation: Passport copies (strictly for international hotel bookings, flights, and visa processing).</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
              <p>
                Your information is used solely for the following legitimate purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                <li>Designing and delivering customized travel itineraries matching your style.</li>
                <li>Facilitating bookings with verified hotels, transport chauffeurs, and excursion providers.</li>
                <li>Providing pre-trip preparation guidance and real-time support during your holiday.</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900">3. Zero Third-Party Selling Guarantee</h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party telemarketers or external advertisers. Data is shared only with verified service partners (e.g., airlines, hotels, and consular visa processing units) as required to execute your holiday.
              </p>

              <h2 className="text-xl font-bold text-slate-900">4. Data Security</h2>
              <p>
                We employ industry-standard encryption protocols and administrative safeguards to protect your personal and contact details against unauthorized access.
              </p>

              <h2 className="text-xl font-bold text-slate-900">5. Contact Our Privacy Officer</h2>
              <p>
                If you have inquiries or wish to request data deletion, contact us at:
                <br />
                <strong>Altitude Travel Co.</strong>
                <br />
                Connaught Place, New Delhi 110001, India
                <br />
                Email: <a href="mailto:inquiries@altitudetravel.in" className="text-amber-700 underline">inquiries@altitudetravel.in</a>
                <br />
                Phone: +91 98100 24680
              </p>
            </section>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
