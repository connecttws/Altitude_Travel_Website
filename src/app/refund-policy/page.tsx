import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, RefreshCw } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Altitude Travel Co. Delhi",
  description:
    "Read the clear and transparent refund and cancellation policy for Altitude Travel Co. tour packages.",
};

export default function RefundPolicyPage() {
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
                <RefreshCw className="w-3.5 h-3.5 text-amber-600" />
                Fair & Transparent
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Refund &amp; Cancellation Policy
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Altitude Travel Co., New Delhi • Transparent policies with no hidden deductions
              </p>
            </div>

            <section className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                At Altitude Travel Co., we understand that unforeseen situations may arise requiring itinerary modifications or cancellations. We maintain fair, transparent cancellation policies that honor both our travellers and our trusted hotel partners.
              </p>

              <h2 className="text-xl font-bold text-slate-900">1. Cancellation Timelines & Refunds</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-900 font-bold">
                    <tr>
                      <th className="p-3 border-b border-slate-200">Cancellation Notice</th>
                      <th className="p-3 border-b border-slate-200">Refund Eligibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-medium">30 days or more before travel departure</td>
                      <td className="p-3 text-emerald-700 font-semibold">90% refund (minimal administrative fee retained)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">15 to 29 days before travel departure</td>
                      <td className="p-3 text-amber-800 font-semibold">70% refund of total tour cost</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">7 to 14 days before travel departure</td>
                      <td className="p-3 text-amber-800 font-semibold">50% refund of total tour cost</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Fewer than 7 days or No-Show</td>
                      <td className="p-3 text-rose-700 font-semibold">Non-refundable due to pre-committed partner hotel bookings</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-bold text-slate-900">2. Free Itinerary Date Rescheduling</h2>
              <p>
                Every Altitude Travel package is flexible. If you notify our team at least 15 days prior to your travel departure, we permit one free date rescheduling without additional planning charges, subject to seasonal hotel rate differences.
              </p>

              <h2 className="text-xl font-bold text-slate-900">3. Non-Refundable Components</h2>
              <p>
                Certain third-party components—including non-refundable airline tickets, special entry passes (e.g. Jungfraujoch summit tickets, Burj Khalifa timed entries), and embassy visa processing fees—are governed by their respective issuers and cannot be refunded once issued.
              </p>

              <h2 className="text-xl font-bold text-slate-900">4. Refund Processing Time</h2>
              <p>
                Approved refunds are processed via the original payment method (NEFT, UPI, or Credit Card) within 7 to 10 working days of official cancellation approval.
              </p>

              <h2 className="text-xl font-bold text-slate-900">5. Assistance Desk</h2>
              <p>
                For cancellation or rescheduling requests, write to <a href="mailto:inquiries@altitudetravel.in" className="text-amber-700 underline font-semibold">inquiries@altitudetravel.in</a> or call our Connaught Place office directly at +91 98100 24680.
              </p>
            </section>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
