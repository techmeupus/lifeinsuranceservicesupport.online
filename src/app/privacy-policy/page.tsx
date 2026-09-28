"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import RequestInfoModal from "@/components/RequestInfoModal";

export default function PrivacyPolicyPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onRequestInfo={() => setModalOpen(true)} />

      <main className="flex-grow py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-slate-800">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: 2026 · Life Insurance Services
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
            <p>
              <strong>LifeInsuranceServices.us</strong> is owned and operated by <strong>Digital Sphere LLC</strong>. We respect your privacy and are committed to protecting personal information you provide when using our website and services.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
            <p>
              When you submit a request for information on our website, we may collect information including your name, email address, telephone number, ZIP code, age range, and general insurance preferences.
            </p>

            <h2 className="text-xl font-bold text-slate-900">How We Use Your Information</h2>
            <p>
              We use information collected to connect you with licensed independent insurance agents who can assist you with your inquiry, provide policy quotes, and answer questions regarding life insurance coverage options.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Information Sharing &amp; Third Parties</h2>
            <p>
              By submitting an inquiry on our site, you expressly authorize Digital Sphere LLC and participating licensed independent insurance agents to contact you via phone, email, or SMS regarding your request. Digital Sphere LLC does not sell your personal information to unaffiliated third parties outside of insurance inquiry fulfillment.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Security</h2>
            <p>
              We implement industry-standard security safeguards to protect personal data against unauthorized access, loss, or alteration.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Contacting Us</h2>
            <p>
              If you have any questions about this Privacy Policy, you may contact us by email at{" "}
              <a href="mailto:contact@lifeinsuranceservices.us" className="text-blue-700 underline">
                contact@lifeinsuranceservices.us
              </a>{" "}
              or by phone at (800) 934-4599.
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
