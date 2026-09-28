"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  FileText,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Lock,
  Menu,
  X,
  Shield,
} from "lucide-react";
import RequestInfoModal from "@/components/RequestInfoModal";

export default function MutualOfOmahaLandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-[#1e293b] antialiased selection:bg-[#005a9c] selection:text-white">
      
      {/* 1. TOP REGULATORY DISCLAIMER BAR */}
      <div className="w-full bg-[#1e293b] text-[#94a3b8] text-[11px] sm:text-xs py-2 px-4 border-b border-[#334155] leading-relaxed text-center">
        <div className="max-w-7xl mx-auto">
          Life Insurance Services is an independent lead generation website owned and operated by Digital Sphere LLC. Digital Sphere LLC is not an insurance company, does not represent or underwrite for Mutual of Omaha or any other insurance company, and does not provide insurance directly. Consumers requesting information will be connected with licensed independent insurance agents who can provide information about life insurance products. Not affiliated with or endorsed by any government agency.
        </div>
      </div>

      {/* 2. HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#e2e8f0] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Brand */}
            <Link href="/mutual-of-omaha" className="flex items-center gap-2.5">
              <span className="font-bold text-lg sm:text-xl text-[#0a2540] tracking-tight">
                Independent Insurance Agency
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-[#005a9c] transition cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="hover:text-[#005a9c] transition cursor-pointer"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#005a9c] transition cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Right Phone & Get Help */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:8008055710"
                className="flex items-center gap-2 font-bold text-[#0a2540] hover:text-[#005a9c] text-sm sm:text-base transition"
              >
                <div className="w-7 h-7 rounded-full bg-[#e8f4fc] text-[#005a9c] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 fill-[#005a9c]" />
                </div>
                <span>(800) 805-5710</span>
              </a>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#005a9c] hover:bg-[#004a80] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-md shadow-sm transition cursor-pointer"
              >
                Get Help
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:8008055710"
                className="p-2 rounded-lg bg-[#e8f4fc] text-[#005a9c]"
                aria-label="Call (800) 805-5710"
              >
                <Phone className="w-4 h-4 fill-[#005a9c]" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#334155] hover:bg-[#f1f5f9] rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e2e8f0] bg-white px-4 py-4 space-y-3 shadow-xl">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection("services");
              }}
              className="block w-full text-left py-2 text-sm font-semibold text-[#334155]"
            >
              Services
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection("why-us");
              }}
              className="block w-full text-left py-2 text-sm font-semibold text-[#334155]"
            >
              Why Us
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection("contact");
              }}
              className="block w-full text-left py-2 text-sm font-semibold text-[#334155]"
            >
              Contact
            </button>
            <div className="pt-2 border-t border-[#f1f5f9] flex flex-col gap-2">
              <a
                href="tel:8008055710"
                className="flex items-center justify-center gap-2 py-2.5 bg-[#e8f4fc] text-[#005a9c] font-bold rounded-md text-sm"
              >
                <Phone className="w-4 h-4 fill-[#005a9c]" /> Call (800) 805-5710
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full py-2.5 bg-[#005a9c] text-white font-bold rounded-md text-sm"
              >
                Get Help
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        
        {/* 3. HERO SECTION (Exact multi-generation kitchen family visual + dark gradient overlay) */}
        <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#0a192f] text-white overflow-hidden">
          
          {/* Authentic Multi-Generational Family Kitchen Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1609234656388-0ff363383899?q=80&w=2000&auto=format&fit=crop')`,
            }}
          >
            {/* Custom overlay reproducing the exact look from the screenshot */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/92 via-[#0a192f]/80 to-[#0a192f]/45"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
            <div className="max-w-2xl text-left">
              
              {/* Tagline */}
              <div className="text-xs sm:text-sm font-bold tracking-wider text-[#7dd3fc] uppercase mb-3">
                LICENSED INDEPENDENT INSURANCE AGENT
              </div>

              {/* Exact Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14]">
                Speak With a Licensed Independent Agent About Life Insurance
              </h1>

              {/* Subtext */}
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#e2e8f0] leading-relaxed max-w-xl">
                Looking for help with your life insurance policy? Speak directly with a licensed agent for assistance with policy information, claims, coverage questions, or benefit reviews.
              </p>

              {/* Buttons matching screenshot style */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="tel:8008055710"
                  className="bg-white hover:bg-[#f8fafc] text-[#005a9c] font-bold px-7 py-3.5 rounded-md flex items-center justify-center gap-2.5 shadow-md transition text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 fill-[#005a9c]" />
                  <span>Call Now: (800) 805-5710</span>
                </a>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-transparent hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-md border border-white/60 transition text-sm sm:text-base cursor-pointer"
                >
                  Request Callback
                </button>
              </div>

              {/* Micro-Disclaimer */}
              <p className="mt-4 text-[11px] sm:text-xs text-[#94a3b8] leading-normal">
                Call now to connect with a licensed independent agent. Not affiliated with Mutual of Omaha. Rates and terms vary by product and state.
              </p>

            </div>
          </div>
        </section>

        {/* 4. OVERLAPPING 3 CARDS SECTION (Matching blue top border & styling) */}
        <section id="services" className="relative z-20 -mt-14 lg:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-7 shadow-lg border border-[#e2e8f0] border-t-4 border-t-[#005a9c] flex flex-col justify-between hover:shadow-xl transition">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#e8f4fc] text-[#005a9c] flex items-center justify-center mb-5">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2">
                  Policy Review &amp; Coverage Guidance
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                  Evaluate your coverage to make sure it matches your current life goals with our licensed independent insurance contact number.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-[#005a9c] hover:text-[#004a80] font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer group"
                >
                  <span>Get Support</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-7 shadow-lg border border-[#e2e8f0] border-t-4 border-t-[#005a9c] flex flex-col justify-between hover:shadow-xl transition">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#e8f4fc] text-[#005a9c] flex items-center justify-center mb-5">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2">
                  Beneficiary Updates
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                  Securely update your policy beneficiaries after major life events with guidance from a licensed insurance agent.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-[#005a9c] hover:text-[#004a80] font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer group"
                >
                  <span>Update Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-7 shadow-lg border border-[#e2e8f0] border-t-4 border-t-[#005a9c] flex flex-col justify-between hover:shadow-xl transition">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#e8f4fc] text-[#005a9c] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2">
                  Claims Assistance
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                  Receive compassionate, step-by-step guidance through the entire claims process from a Licensed Agent.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-[#005a9c] hover:text-[#004a80] font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer group"
                >
                  <span>File a Claim</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* 5. WHY CHOOSE US SECTION */}
        <section id="why-us" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight">
                Why Choose Us
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#64748b] leading-relaxed">
                Our licensed agents provide expert guidance to help you make informed decisions about your life insurance coverage, policy options, and benefits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Feature 1 */}
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-7 text-center hover:bg-white hover:shadow-md transition">
                <div className="w-11 h-11 rounded-full bg-[#005a9c] text-white flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2">
                  Fiduciary Responsibility
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  Speak with a licensed insurance agent through our insurance support phone number for guidance focused on your needs.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-7 text-center hover:bg-white hover:shadow-md transition">
                <div className="w-11 h-11 rounded-full bg-[#005a9c] text-white flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2">
                  Personalized Strategy
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  Receive personalized insurance recommendations based on your coverage goals and financial needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-7 text-center hover:bg-white hover:shadow-md transition">
                <div className="w-11 h-11 rounded-full bg-[#005a9c] text-white flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2">
                  Licensed Expertise
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  Speak with fully licensed and trained insurance agents who can help answer your policy and coverage questions.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 6. SIGNATURE BLUE CTA BANNER */}
        <section className="py-16 bg-[#005a9c] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Ready to Speak With a Licensed Agent?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#e0f2fe]">
              Discuss coverage, options, and advantages with an insurance professional.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="tel:8008055710"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-[#f8fafc] text-[#005a9c] font-extrabold px-8 py-3.5 rounded-md shadow-md transition text-base sm:text-lg"
              >
                <Phone className="w-5 h-5 fill-[#005a9c]" />
                <span>(800) 805-5710</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-[#bae6fd]">
              Calls are connected to a licensed independent insurance agent. Not affiliated with Mutual of Omaha Insurance Company.
            </p>
          </div>
        </section>

        {/* 7. WANT TO SPEAK WITH A PROFESSIONAL? + FORM */}
        <section id="contact" className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="w-11 h-11 rounded-lg bg-[#e8f4fc] text-[#005a9c] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight leading-tight">
                  Want to speak with a professional?
                </h2>

                <p className="text-base text-[#64748b] leading-relaxed">
                  A licensed representative is a dedicated professional who will work to understand your specific needs and concerns, and help you build a comprehensive financial plan.
                </p>

                {/* Call Box */}
                <div className="p-6 rounded-xl bg-white border border-[#e2e8f0] shadow-sm space-y-2">
                  <p className="text-xs font-bold text-[#64748b] uppercase tracking-wider">
                    CALL US DIRECTLY
                  </p>
                  <a
                    href="tel:8008055710"
                    className="inline-flex items-center gap-2.5 text-2xl sm:text-3xl font-black text-[#005a9c] hover:text-[#004a80] transition"
                  >
                    <Phone className="w-6 h-6 fill-[#005a9c]" />
                    <span>(800) 805-5710</span>
                  </a>
                  <p className="text-xs text-[#64748b] pt-1">
                    Connect with a licensed independent insurance agent. Not affiliated with Mutual of Omaha.
                  </p>
                </div>
              </div>

              {/* Right Column: Request a Free Callback Form */}
              <div className="lg:col-span-6">
                <div className="bg-white p-7 sm:p-9 rounded-2xl border border-[#e2e8f0] shadow-lg">
                  {formSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0a2540]">Request Submitted!</h3>
                      <p className="text-[#64748b] text-sm max-w-sm mx-auto">
                        Thank you, <strong>{formData.fullName || "valued client"}</strong>. A licensed independent insurance agent will call you shortly at {formData.phone || "the number provided"}.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="mt-4 px-6 py-2.5 bg-[#005a9c] text-white rounded-md font-semibold text-sm"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <h3 className="text-xl font-bold text-[#0a2540] mb-4">
                        Request a Free Callback
                      </h3>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#475569] mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Smith"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-[#cbd5e1] rounded-md text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#005a9c] text-sm placeholder:text-[#94a3b8]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#475569] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-[#cbd5e1] rounded-md text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#005a9c] text-sm placeholder:text-[#94a3b8]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#475569] mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-[#cbd5e1] rounded-md text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#005a9c] text-sm placeholder:text-[#94a3b8]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[#475569] mb-1.5">
                          How can we help?
                        </label>
                        <textarea
                          rows={3}
                          placeholder="I'd like to review my existing policy..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-[#cbd5e1] rounded-md text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#005a9c] text-sm placeholder:text-[#94a3b8] resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#005a9c] hover:bg-[#004a80] text-white font-bold py-3.5 px-6 rounded-md transition shadow-sm text-sm cursor-pointer"
                      >
                        Submit Request
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748b] pt-1">
                        <Lock className="w-3.5 h-3.5 text-[#94a3b8]" />
                        <span>Your information is confidential and secure.</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. MIDDLE LEGAL DISCLAIMER BOX */}
        <section className="bg-[#f1f5f9] py-10 border-t border-[#e2e8f0] text-[#64748b] text-xs leading-relaxed">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-2">
            <p>
              Life Insurance Services is an independent lead-generation website owned and operated by Digital Sphere LLC. Digital Sphere LLC is not an insurance company, does not represent or underwrite for Mutual of Omaha or any other insurance company, and does not provide insurance directly. Consumers requesting information will be connected with licensed independent insurance agents who can provide information about life insurance products, policy options, rates, and coverage. Independent agents are licensed insurance professionals and can answer questions regarding policy details, coverage options, and assist with general inquiries. Mutual of Omaha and related trademarks are property of their respective owners and are used solely to identify the products or services described on this website.
            </p>
          </div>
        </section>
      </main>

      {/* 9. DARK NAVY FOOTER */}
      <footer className="bg-[#0b1e36] text-[#94a3b8] border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1e293b]">
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold text-lg text-white">
                Independent Insurance Agency
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#cbd5e1]">
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-white transition cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="hover:text-white transition cursor-pointer"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-white transition cursor-pointer"
              >
                Contact Form
              </button>
              <a
                href="tel:8008055710"
                className="hover:text-white font-semibold text-[#38bdf8] transition"
              >
                Call: (800) 805-5710
              </a>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 grid md:grid-cols-12 gap-6 text-xs text-[#64748b] leading-relaxed">
            <div className="md:col-span-8 space-y-2">
              <p className="font-medium text-[#94a3b8]">
                © 2026 Life Insurance Services, US. All Rights Reserved.
              </p>
              <p>
                Disclaimer: Life Insurance Services is a lead-generation website owned and operated by Digital Sphere LLC. Digital Sphere LLC is not an insurance company and does not directly work with, represent, or underwrite policies for Mutual of Omaha or any other insurance company. Rates and availability may vary by state and eligibility. Mutual of Omaha is a registered trademark of Mutual of Omaha Insurance Company. All other trademarks are property of their respective owners and are used solely to identify the products or services described on this website.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col md:items-end justify-between gap-4">
              <div className="flex flex-wrap gap-4 text-[#94a3b8]">
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Do Not Sell My Personal Information
                </Link>
                <Link href="/contact-us" className="hover:text-white transition">
                  Customer Service
                </Link>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Interactive Request Info Modal */}
      <RequestInfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProduct="Mutual of Omaha Life Insurance Inquiry"
      />
    </div>
  );
}
