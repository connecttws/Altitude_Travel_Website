import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText, MapPin, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Altitude Travel Co.",
  description:
    "Read Altitude Travel Co.'s terms covering tour bookings, payments, cancellations, refunds, and travel requirements for Indian and international holidays.",
  alternates: {
    canonical: "https://www.altitudetravelco.com/terms-and-conditions/",
  },
  openGraph: {
    title: "Terms & Conditions | Altitude Travel Co.",
    description:
      "Read Altitude Travel Co.'s terms covering tour bookings, payments, cancellations, refunds, and travel requirements for Indian and international holidays.",
    url: "https://www.altitudetravelco.com/terms-and-conditions/",
    siteName: "Altitude Travel Co.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Altitude Travel Co.",
    description:
      "Read Altitude Travel Co.'s terms covering tour bookings, payments, cancellations, refunds, and travel requirements for Indian and international holidays.",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen text-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A5200] hover:text-stone-950 bg-white px-3.5 py-1.5 rounded-xl border border-[#E5E0D5] hover:border-[#D4AF37] shadow-2xs transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          {/* Terms Content Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-12 border border-[#E5E0D5] shadow-xs space-y-8">
            
            {/* Header */}
            <div className="space-y-3 border-b border-[#E5E0D5] pb-6">
              <div className="inline-flex items-center gap-2 bg-[#FAF9F6] text-[#7A5200] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#7A5200]/20">
                <FileText className="w-3.5 h-3.5 text-[#7A5200]" />
                <span>Legal &amp; Booking Terms</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">
                Last Updated: 23 October 2026
              </p>
            </div>

            {/* Introductory Text */}
            <div className="space-y-7 text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
              
              <p>
                Welcome to Altitude Travel Co. By accessing our website or using our travel planning services, you agree to the following Terms &amp; Conditions. Please read them carefully before making an inquiry or booking.
              </p>

              {/* 1. Our Services */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  1. Our Services
                </h2>
                <p>
                  Altitude Travel Co. offers Indian tour packages, international holidays, and customised travel planning services. Travel arrangements depend on availability, destination requirements, and the package selected.
                </p>
              </section>

              {/* 2. Bookings and Payments */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  2. Bookings and Payments
                </h2>
                <p>
                  All bookings are subject to confirmation and availability. Customers must review the itinerary, package inclusions, exclusions, total price, and payment terms before confirming a booking.
                </p>
                <p>
                  Any applicable advance payment or balance payment must be made according to the agreed booking terms.
                </p>
              </section>

              {/* 3. Pricing and Inclusions */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  3. Pricing and Inclusions
                </h2>
                <p>
                  Package prices may vary depending on travel dates, accommodation, transportation, availability, and other travel requirements.
                </p>
                <p>
                  Only the services specifically mentioned in the confirmed itinerary or booking documents are included. Additional expenses, personal purchases, optional activities, and excluded services are the customer&apos;s responsibility.
                </p>
              </section>

              {/* 4. Changes and Cancellations */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  4. Changes and Cancellations
                </h2>
                <p>
                  Requests to change or cancel a booking are subject to the applicable supplier policies and the agreed booking terms.
                </p>
                <p>
                  Cancellation charges, refund eligibility, and processing timelines will depend on the services booked and the applicable Refund &amp; Cancellation Policy.
                </p>
              </section>

              {/* 5. Travel Documents and Visa Requirements */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  5. Travel Documents and Visa Requirements
                </h2>
                <p>
                  Travellers are responsible for ensuring that their passports, visas, identification documents, and other required travel documents are valid.
                </p>
                <p>
                  We may provide visa guidance and assistance; however, visa approval and entry permission are determined by the relevant authorities and cannot be guaranteed.
                </p>
              </section>

              {/* 6. Third-Party Services */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  6. Third-Party Services
                </h2>
                <p>
                  Certain travel services may be provided by airlines, hotels, transport operators, and other third-party suppliers. Their applicable terms, availability, and service conditions may apply.
                </p>
              </section>

              {/* 7. Traveller Responsibilities */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  7. Traveller Responsibilities
                </h2>
                <p>
                  Customers are expected to provide accurate booking information, follow applicable travel rules, arrive on time, and comply with destination laws and supplier requirements.
                </p>
                <p>
                  Any additional costs resulting from incorrect information, missed departures, or failure to meet travel requirements may be the customer&apos;s responsibility, subject to applicable law.
                </p>
              </section>

              {/* 8. Itinerary Changes */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  8. Itinerary Changes
                </h2>
                <p>
                  We aim to deliver the confirmed itinerary as agreed. However, changes may become necessary due to weather, operational issues, transport disruptions, government restrictions, or other circumstances beyond our reasonable control.
                </p>
                <p>
                  Where possible, we will communicate relevant changes and assist with suitable alternatives according to the booking terms.
                </p>
              </section>

              {/* 9. Limitation of Liability */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  9. Limitation of Liability
                </h2>
                <p>
                  Altitude Travel Co. will make reasonable efforts to coordinate the agreed travel services. Our responsibility for disruptions, losses, or service failures will be determined by applicable law, the confirmed booking terms, and the responsibilities of the relevant service providers.
                </p>
                <p>
                  Nothing in these Terms &amp; Conditions excludes any liability that cannot legally be excluded.
                </p>
              </section>

              {/* 10. Website Information */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  10. Website Information
                </h2>
                <p>
                  We make reasonable efforts to keep website information accurate and up to date. Package details, prices, images, and availability may change. Final arrangements will be based on the confirmed booking documents.
                </p>
              </section>

              {/* 11. Privacy */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  11. Privacy
                </h2>
                <p>
                  Personal information provided to us will be handled in accordance with our{" "}
                  <Link href="/privacy-policy" className="text-[#7A5200] font-semibold underline hover:text-stone-950">
                    Privacy Policy
                  </Link>{" "}
                  and applicable data protection laws.
                </p>
              </section>

              {/* Contact Information */}
              <section className="space-y-3 pt-4 border-t border-[#E5E0D5]">
                <h2 className="text-xl font-bold text-stone-950">
                  Contact Information
                </h2>
                <p>For questions regarding our Terms &amp; Conditions or booking inquiries, contact:</p>
                
                <div className="p-5 bg-[#FAF9F6] rounded-2xl border border-[#E5E0D5] space-y-2 max-w-md">
                  <div className="font-bold text-stone-950 text-base">
                    Altitude Travel Co.
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 text-sm">
                    <MapPin className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Bazpur, Uttarakhand, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 text-sm">
                    <Phone className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>
                      Phone / WhatsApp:{" "}
                      <a href="tel:+919639320101" className="font-bold text-stone-950 hover:text-[#7A5200]">
                        +91 96393 20101
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 text-sm">
                    <Mail className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>
                      Email:{" "}
                      <a href="mailto:altitudetravelco@gmail.com" className="font-bold text-stone-950 hover:text-[#7A5200]">
                        altitudetravelco@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </section>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
