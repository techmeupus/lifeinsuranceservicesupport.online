"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import RequestInfoModal from "@/components/RequestInfoModal";
import { Shield, Users, CheckCircle2, Phone, Mail, Award, ArrowRight } from "lucide-react";

export default function AboutUsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onRequestInfo={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              About Life Insurance Services
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Connecting You With Independent Insurance Agents
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We empower consumers across the United States to explore flexible life insurance options with licensed independent insurance professionals.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
            
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-slate-900">Who We Are</h2>
              <p>
                <strong>LifeInsuranceServices.us</strong> is operated by <strong>Digital Sphere LLC</strong>, an independent lead-generation company connecting consumers with licensed independent insurance agents.
              </p>
              <p>
                Digital Sphere LLC does not directly work with or represent insurance companies. Our platform makes it straightforward for families and individuals to research coverage options, understand policy differences, and request information from licensed agents in their home state.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Independent Network</h3>
                <p className="text-sm text-slate-600">
                  Independent agents have the autonomy to help you explore multiple life insurance options from various carriers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No High-Pressure Sales</h3>
                <p className="text-sm text-slate-600">
                  We believe in transparency and honest information. Requesting information is 100% free with no obligation to purchase.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to explore your life insurance options?</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto">
                Connect with an independent agent today to get personalized policy information.
              </p>
              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-lg transition cursor-pointer"
                >
                  Request Information
                </button>
              </div>
            </div>

          </div>
        </section>
      </main>

      <FloatingWidget onRequestInfo={() => setModalOpen(true)} />
      <RequestInfoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </div>
  );
}
