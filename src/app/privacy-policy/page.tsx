import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ShieldCheck, Lock, Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Altitude Travel Co.",
  description:
    "Read the Privacy Policy of Altitude Travel Co. to learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.altitudetravelco.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Altitude Travel Co.",
    description:
      "Read the Privacy Policy of Altitude Travel Co. to learn how we collect, use, and protect your personal information.",
    url: "https://www.altitudetravelco.com/privacy-policy",
    siteName: "Altitude Travel Co.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Altitude Travel Co.",
    description:
      "Read the Privacy Policy of Altitude Travel Co. to learn how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicyPage() {
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

          {/* Privacy Content Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-12 border border-[#E5E0D5] shadow-xs space-y-8">
            
            {/* Header */}
            <div className="space-y-3 border-b border-[#E5E0D5] pb-6">
              <div className="inline-flex items-center gap-2 bg-[#FAF9F6] text-[#7A5200] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#7A5200]/20">
                <Lock className="w-3.5 h-3.5 text-[#7A5200]" />
                <span>Data Protection &amp; Privacy</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">
                Last Updated: 23 October 2026
              </p>
            </div>

            {/* Policy Content */}
            <div className="space-y-7 text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
              
              <p>
                At Altitude Travel Co., we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or contact us for travel services.
              </p>

              {/* 1. Information We Collect */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
                  <span>1. Information We Collect</span>
                </h2>
                <p>
                  We may collect your name, phone number, email address, travel preferences, destination, travel dates, and other details you provide through our website forms, email, or WhatsApp.
                </p>
                <p>
                  For confirmed bookings, additional traveller information may be required to arrange travel services.
                </p>
              </section>

              {/* 2. How We Use Your Information */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
                  <span>2. How We Use Your Information</span>
                </h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                  <li>Respond to travel inquiries and prepare quotations.</li>
                  <li>Plan customised Indian and international tour packages.</li>
                  <li>Assist with bookings, accommodation, transfers, and visa guidance.</li>
                  <li>Share important travel updates.</li>
                  <li>Improve our website and services.</li>
                </ul>
              </section>

              {/* 3. Sharing of Information */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
                  <span>3. Sharing of Information</span>
                </h2>
                <p>
                  We do not sell your personal information. We may share necessary details with airlines, hotels, transport providers, visa service providers, payment processors, and other travel partners to deliver the services you request or where required by law.
                </p>
              </section>

              {/* 4. Cookies and Website Security */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
                  <span>4. Cookies and Website Security</span>
                </h2>
                <p>
                  Our website may use cookies and analytics tools to improve functionality and understand website usage. You can manage cookies through your browser settings.
                </p>
                <p>
                  We take reasonable steps to protect your information; however, no online system can guarantee complete security.
                </p>
              </section>

              {/* 5. Data Retention */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
                  <span>5. Data Retention</span>
                </h2>
                <p>
                  We retain personal information only as long as necessary for travel arrangements, business records, and applicable legal requirements.
                </p>
              </section>

              {/* 6. Your Privacy Rights */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
                  <span>6. Your Privacy Rights</span>
                </h2>
                <p>
                  You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable law. You may also request to stop receiving promotional communications.
                </p>
              </section>

              {/* 7. Third-Party Links */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
                  <span>7. Third-Party Links</span>
                </h2>
                <p>
                  Our website may contain links to third-party websites and services. We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
                </p>
              </section>

              {/* 8. Policy Updates */}
              <section className="space-y-2.5">
                <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
                  <span>8. Policy Updates</span>
                </h2>
                <p>
                  We may update this Privacy Policy when our services or legal requirements change. Updates will be published on this page.
                </p>
              </section>

              {/* 9. Contact Us */}
              <section className="space-y-3 pt-4 border-t border-[#E5E0D5]">
                <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
                  <span>9. Contact Us</span>
                </h2>
                <p>For privacy-related questions or requests, contact:</p>
                
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
