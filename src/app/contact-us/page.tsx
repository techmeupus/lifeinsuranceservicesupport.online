"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import RequestInfoModal from "@/components/RequestInfoModal";
import { Phone, Mail, Clock, MapPin, ShieldCheck, Send } from "lucide-react";

export default function ContactUsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onRequestInfo={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Contact Us
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
              Have questions about exploring life insurance options? Get in touch with our team or connect directly with an independent agent.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Contact Info Cards */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                  <h2 className="text-xl font-bold text-slate-900">Direct Support Lines</h2>
                  
                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Toll-Free Phone</p>
                        <a href="tel:8009344599" className="text-blue-700 font-bold hover:underline block">
                          (800) 934-4599
                        </a>
                        <a href="tel:8005685005" className="text-blue-700 font-bold hover:underline block mt-0.5">
                          (800) 568-5005
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Email Address</p>
                        <a href="mailto:contact@lifeinsuranceservices.us" className="text-blue-700 hover:underline break-all">
                          contact@lifeinsuranceservices.us
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Hours of Operation</p>
                        <p className="text-slate-600">Mon – Sat · 9:00 AM – 9:00 PM (EST)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900 text-white p-6 rounded-3xl shadow-lg border border-blue-800">
                  <h3 className="font-bold text-lg mb-2">Operated By Digital Sphere LLC</h3>
                  <p className="text-xs text-blue-200 leading-relaxed">
                    Life Insurance Services is an independent lead-generation website. Digital Sphere LLC does not directly work with or represent insurance companies.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheck className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
                      <p className="text-slate-600 text-sm">
                        Thank you for reaching out. We will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                            First Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                            Last Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Doe"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="(555) 000-0000"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                          How can we help you?
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Your message or question regarding life insurance options..."
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </button>
                    </form>
                  )}
                </div>
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
