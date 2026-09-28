"use client";

import React, { useState } from "react";
import { X, ShieldCheck, CheckCircle, PhoneCall, ArrowRight, Lock } from "lucide-react";

interface RequestInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function RequestInfoModal({
  isOpen,
  onClose,
  defaultProduct = "Term Life Insurance",
}: RequestInfoModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    coverageType: defaultProduct,
    coverageAmount: "$250,000",
    ageRange: "35 - 44",
    zipCode: "",
    fullName: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-slate-900">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Request Information</h3>
              <p className="text-xs text-blue-200">Connect with an independent licensed agent</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h4>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Thank you, <strong>{formData.fullName || "valued customer"}</strong>. An independent licensed insurance agent will review your inquiry and connect with you shortly to explore available options in your area.
              </p>
              
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl mb-6 text-left">
                <div className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide">Prefer immediate assistance?</p>
                    <p className="text-sm text-slate-700 mt-0.5">Call our support helpline directly:</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <a href="tel:8009344599" className="inline-flex items-center font-bold text-blue-700 bg-white px-3 py-1.5 rounded-lg border border-blue-200 text-xs hover:bg-blue-50">
                        (800) 934-4599
                      </a>
                      <a href="tel:8005685005" className="inline-flex items-center font-bold text-blue-700 bg-white px-3 py-1.5 rounded-lg border border-blue-200 text-xs hover:bg-blue-50">
                        (800) 568-5005
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition shadow-md"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Type of Coverage
                    </label>
                    <select
                      value={formData.coverageType}
                      onChange={(e) => setFormData({ ...formData, coverageType: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                    >
                      <option value="Term Life Insurance">Term Life Insurance</option>
                      <option value="Whole Life Insurance">Whole Life Insurance</option>
                      <option value="Universal Life Insurance">Universal Life Insurance</option>
                      <option value="Final Expense Insurance">Final Expense Insurance</option>
                      <option value="Burial Insurance">Burial Insurance</option>
                      <option value="Not Sure / General Inquiry">Not Sure / General Inquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Coverage Range
                      </label>
                      <select
                        value={formData.coverageAmount}
                        onChange={(e) => setFormData({ ...formData, coverageAmount: e.target.value })}
                        className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      >
                        <option value="$10,000 - $25,000 (Final Expense)">$10k - $25k</option>
                        <option value="$50,000 - $100,000">$50k - $100k</option>
                        <option value="$250,000">$250,000</option>
                        <option value="$500,000">$500,000</option>
                        <option value="$1,000,000+">$1,000,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Age Group
                      </label>
                      <select
                        value={formData.ageRange}
                        onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                        className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                      >
                        <option value="18 - 34">18 - 34</option>
                        <option value="35 - 44">35 - 44</option>
                        <option value="45 - 54">45 - 54</option>
                        <option value="55 - 64">55 - 64</option>
                        <option value="65+">65+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Your ZIP Code
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 90210"
                      maxLength={5}
                      pattern="[0-9]{5}"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value.replace(/\D/g, "") })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Availability, pricing, and coverage vary by state and individual circumstances.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.zipCode || formData.zipCode.length < 5) {
                        alert("Please enter a valid 5-digit ZIP code");
                        return;
                      }
                      setStep(2);
                    }}
                    className="w-full mt-2 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-blue-900/10 cursor-pointer"
                  >
                    <span>Continue to Step 2</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                    <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      By clicking Request Information, you authorize licensed independent insurance agents to contact you at the phone number and email provided.
                    </span>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3.5 px-4 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-100 transition text-sm cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20 text-sm cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? "Submitting..." : "Request Information"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
