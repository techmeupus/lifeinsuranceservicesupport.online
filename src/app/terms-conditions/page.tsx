"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import RequestInfoModal from "@/components/RequestInfoModal";

export default function TermsConditionsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onRequestInfo={() => setModalOpen(true)} />

      <main className="flex-grow py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-slate-800">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: 2026 · Life Insurance Services
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
            <h2 className="text-xl font-bold text-slate-900">Lead-Generation Disclosure</h2>
            <p>
              <strong>LifeInsuranceServices.us</strong> is an independent lead-generation website owned and operated by <strong>Digital Sphere LLC</strong>. Digital Sphere LLC does not directly work with, represent, or underwrite policies for insurance companies.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Coverage &amp; Pricing Disclaimer</h2>
            <p>
              Coverage, rates, product availability, and eligibility may vary widely by state, age, medical history, and individual circumstances. Submitting a request for information does not guarantee coverage or a specific premium rate.
            </p>

            <h2 className="text-xl font-bold text-slate-900">No Government Endorsement</h2>
            <p>
              This website is not affiliated with, endorsed by, or sponsored by any government agency or public program.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Consent to Contact</h2>
            <p>
              By providing your telephone number and contact details, you agree that licensed independent insurance agents may contact you via telephone call, prerecorded message, or SMS/text message regarding life insurance products, even if your phone number is on a national or state Do-Not-Call registry.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
            <p>
              Digital Sphere LLC makes no warranties regarding the accuracy or completeness of information provided on this website. Consumers are encouraged to thoroughly review all terms and conditions of specific insurance policies with their licensed agent.
            </p>
          </div>
        </div>
      </main>

      <FloatingWidget onRequestInfo={() => setModalOpen(true)} />
      <RequestInfoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </div>
  );
}
