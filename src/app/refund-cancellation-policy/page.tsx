import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, RefreshCw, MapPin, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Altitude Travel Co.",
  description:
    "Read Altitude Travel Co.'s Refund & Cancellation Policy for tour bookings, cancellation charges, refund eligibility, and booking changes.",
  alternates: {
    canonical: "https://www.altitudetravelco.com/refund-cancellation-policy/",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | Altitude Travel Co.",
    description:
      "Read Altitude Travel Co.'s Refund & Cancellation Policy for tour bookings, cancellation charges, refund eligibility, and booking changes.",
    url: "https://www.altitudetravelco.com/refund-cancellation-policy/",
    siteName: "Altitude Travel Co.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Refund & Cancellation Policy | Altitude Travel Co.",
    description:
      "Read Altitude Travel Co.'s Refund & Cancellation Policy for tour bookings, cancellation charges, refund eligibility, and booking changes.",
  },
};

export default function RefundCancellationPolicyPage() {
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

          {/* Refund Content Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-12 border border-[#E5E0D5] shadow-xs space-y-8">
            
            {/* Header */}
            <div className="space-y-3 border-b border-[#E5E0D5] pb-6">
              <div className="inline-flex items-center gap-2 bg-[#FAF9F6] text-[#7A5200] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#7A5200]/20">
                <RefreshCw className="w-3.5 h-3.5 text-[#7A5200]" />
                <span>Fair &amp; Transparent</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
                Refund &amp; Cancellation Policy
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">
                Altitude Travel Co. • Transparent policies and guidelines
              </p>
            </div>

            {/* Policy Content */}
            <div className="space-y-7 text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
              
              <p>
                At Altitude Travel Co., we understand that travel plans may change due to unforeseen circumstances. This policy explains how booking cancellations, changes, and refund requests are handled.
              </p>

              {/* 1. Booking Cancellation */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  1. Booking Cancellation
                </h2>
                <p>
                  Customers who wish to cancel a confirmed booking must contact us through email or WhatsApp and provide their booking details.
                </p>
                <p>
                  Cancellation requests will be processed according to the cancellation terms communicated at the time of booking and the applicable policies of airlines, hotels, transport providers, and other travel partners.
                </p>
              </section>

              {/* 2. Refund Eligibility */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  2. Refund Eligibility
                </h2>
                <p>
                  Refund eligibility depends on the services booked, the timing of the cancellation, and the applicable supplier terms.
                </p>
                <p>
                  Eligible refunds will be processed after the relevant cancellation charges and non-refundable costs, where applicable, have been determined.
                </p>
                <p>
                  Non-refundable bookings, tickets, deposits, or services may not qualify for a refund.
                </p>
                <p>
                  Any applicable refund conditions will be communicated during the booking process.
                </p>
              </section>

              {/* 3. Refund Processing Time */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  3. Refund Processing Time
                </h2>
                <p>
                  Once a refund is approved and the refundable amount is confirmed, we will initiate the refund through the applicable payment method.
                </p>
                <p>
                  The time taken for the amount to reflect in your account may depend on the payment provider, bank, and relevant travel supplier.
                </p>
              </section>

              {/* 4. Changes to Bookings */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  4. Changes to Bookings
                </h2>
                <p>
                  Requests to change travel dates, destinations, accommodation, or other booking details are subject to availability and supplier approval. Additional charges or fare differences may apply.
                </p>
              </section>

              {/* 5. Cancellations by Travel Service Providers */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  5. Cancellations by Travel Service Providers
                </h2>
                <p>
                  If an airline, hotel, transport operator, or another supplier cancels or changes a service, available alternatives or refunds will be handled according to the relevant supplier&apos;s terms and applicable law.
                </p>
              </section>

              {/* 6. Unforeseen Circumstances */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950">
                  6. Unforeseen Circumstances
                </h2>
                <p>
                  Weather disruptions, natural events, government restrictions, transport interruptions, or other circumstances beyond our reasonable control may affect travel arrangements. Refunds or alternative arrangements will depend on the services affected, supplier policies, and applicable law.
                </p>
              </section>

              {/* 7. How to Request a Cancellation or Refund */}
              <section className="space-y-3 pt-4 border-t border-[#E5E0D5]">
                <h2 className="text-xl font-bold text-stone-950">
                  7. How to Request a Cancellation or Refund
                </h2>
                <p>
                  To submit a cancellation or refund request, contact us using the details below:
                </p>

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
                      <a
                        href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel%20Co.,%20I%20would%20like%20to%20inquire%20about%20a%20booking%20cancellation%20or%20refund."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-stone-950 hover:text-[#7A5200] underline underline-offset-2 decoration-[#D4AF37]/50"
                      >
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

                <p className="text-xs sm:text-sm text-stone-600 pt-1">
                  Please include your name, booking reference, travel dates, and reason for cancellation. We will review your request and communicate the applicable terms and next steps.
                </p>
              </section>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
