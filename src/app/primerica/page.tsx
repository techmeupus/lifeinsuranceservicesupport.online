"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  FileText,
  CreditCard,
  Headphones,
  HelpCircle,
  FileCheck,
  Zap,
} from "lucide-react";
import RequestInfoModal from "@/components/RequestInfoModal";

export default function PrimericaLandingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-[#1e293b] antialiased selection:bg-[#d90429] selection:text-white">
      
      {/* 1. TOP DISCLAIMER / DIRECTORY BAR */}
      <div className="w-full bg-[#f8fafc] text-[#64748b] text-[11px] sm:text-xs py-2 px-4 border-b border-[#e2e8f0] text-center leading-relaxed">
        <div className="max-w-7xl mx-auto">
          This website is an independent customer service information directory and is not affiliated with Primerica or any other insurance company. All trademarks and brand names are the property of their respective owners.
        </div>
      </div>

      {/* 2. HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#e2e8f0] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Primerica Brand Logo */}
            <Link href="/primerica" className="flex items-center gap-2">
              <div className="relative h-12 w-48 sm:w-56">
                <Image
                  src="/primericalogonew (1).png"
                  alt="Primerica authorized independent agent directory"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Header Direct Call CTA */}
            <div className="flex items-center gap-4">
              <a
                href="tel:8002274683"
                className="bg-[#d90429] hover:bg-[#b8001f] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-md shadow-md transition-all duration-200 transform hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      <main className="flex-grow">
        
        {/* 3. HERO SECTION WITH OUTDOOR PICNIC FAMILY VISUAL */}
        <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#0f172a] text-[#0f172a] overflow-hidden">
          
          {/* Outdoor Picnic / Camper Nature Scene Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop')`,
            }}
          >
            {/* Clean, light gradient overlay for readability while keeping the vivid family aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Headlines & Call Actions */}
              <div className="lg:col-span-8 text-left">
                
                {/* Live Support Alert Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fee2e2] text-[#b91c1c] text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#fecaca]">
                  <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse"></span>
                  LIVE CUSTOMER SUPPORT IS AVAILABLE NOW
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
                  Life Insurance Phone Number
                </h1>

                {/* Exact Copy Paragraphs */}
                <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#334155] leading-relaxed max-w-2xl">
                  Looking for the <strong>life insurance phone number</strong> or <strong>life insurance customer service number</strong>? You&apos;ve come to the right place. Our licensed independent insurance agents provide fast, knowledgeable assistance for existing life insurance policyholders and individuals seeking policy information.
                </p>

                <p className="mt-3 text-sm sm:text-base font-medium text-[#1e293b]">
                  Skip the long hold times and speak with a real licensed insurance professional today.
                </p>

                {/* Dual Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="tel:8002274683"
                    className="bg-[#d90429] hover:bg-[#b8001f] text-white font-extrabold px-8 py-3.5 rounded-md flex items-center justify-center gap-2.5 shadow-lg shadow-red-900/10 transition text-sm sm:text-base cursor-pointer"
                  >
                    <span>Call Toll-Free Direct Line</span>
                  </a>

                  <a
                    href="tel:8002274683"
                    className="bg-white hover:bg-slate-50 text-[#d90429] font-extrabold px-7 py-3.5 rounded-md border-2 border-[#d90429] flex items-center justify-center gap-2 shadow-md transition text-sm sm:text-base cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-[#d90429]" />
                    <span>(800) 227-4683</span>
                  </a>
                </div>

                {/* 4 Feature Checkmarks */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold text-[#334155]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#d90429]" />
                    <span>No Hold Queues</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#d90429]" />
                    <span>Speak with a Real Licensed Agent</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#d90429]" />
                    <span>Nationwide Support</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#d90429]" />
                    <span>Fast Answers</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Floating Testimonial/Assistance Card */}
              <div className="lg:col-span-4 hidden lg:flex justify-end">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl max-w-sm">
                  <div className="w-10 h-10 rounded-full bg-[#fee2e2] text-[#d90429] flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    Dedicated professionals to help you find the right information and assist with any life insurance questions you may have.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. REAL HELP FROM LICENSED INSURANCE PROFESSIONALS (4 Cards) */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Real Help from Licensed Insurance Professionals
              </h2>
              <p className="mt-4 text-base text-[#475569] leading-relaxed">
                Whether you&apos;re searching for the <strong>life insurance customer service phone number</strong>, <strong>life insurance contact number</strong>, or simply need help understanding your policy, our licensed agents are ready to assist.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] hover:shadow-md transition">
                <h3 className="text-lg font-bold text-[#b91c1c] mb-3">
                  Licensed Independent Insurance Agents
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Our experienced, state-licensed insurance professionals provide assistance as permitted for insurance legislation. You&apos;ll speak with a knowledgeable person—not an automated phone tree from a generic call center.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] hover:shadow-md transition">
                <h3 className="text-lg font-bold text-[#b91c1c] mb-3">
                  Fast, No-Hold Assistance
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Don&apos;t spend hours on generic hold. Our team provides prompt assistance with billing questions, policy information, beneficiary updates, and general customer service inquiries.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] hover:shadow-md transition">
                <h3 className="text-lg font-bold text-[#b91c1c] mb-3">
                  Expert Policy Guidance
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Need help understanding your life insurance coverage? We can answer questions about policy benefits, premium costs, policy changes, coverage amounts, and other policy-related matters.
                </p>
              </div>

            </div>

            {/* 4th Card: Nationwide Support (spanning or matching clean layout) */}
            <div className="mt-6">
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] max-w-md hover:shadow-md transition">
                <h3 className="text-lg font-bold text-[#b91c1c] mb-3">
                  Nationwide Support
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  We assist customers throughout all 50 states. Whether you&apos;re looking for the <strong>life insurance telephone number</strong> or need assistance with an existing policy, our licensed agents are here to help.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 5. HOW CAN WE HELP YOU TODAY? (6 Numbered Crimson Cards) */}
        <section className="py-16 lg:py-24 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                How Can We Help You Today?
              </h2>
              <p className="mt-4 text-base text-[#475569] leading-relaxed">
                Whether you&apos;re searching for the life insurance customer service number or need assistance with your policy, these are the most common reasons customers call us:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Box 1 */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] hover:shadow-md transition">
                <span className="text-xs font-bold text-[#b91c1c] uppercase tracking-wider block mb-1">
                  01.
                </span>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  Policy Questions &amp; Billing
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Get help understanding your premium payments, billing history, policy status, payment options, and general account questions.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] hover:shadow-md transition">
                <span className="text-xs font-bold text-[#b91c1c] uppercase tracking-wider block mb-1">
                  02.
                </span>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  Customer Service Assistance
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Looking for the life insurance customer service phone number? Our licensed agents can help answer your questions and connect you with the appropriate resources when needed.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] hover:shadow-md transition">
                <span className="text-xs font-bold text-[#b91c1c] uppercase tracking-wider block mb-1">
                  03.
                </span>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  Claims Support
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Need assistance with filing a life insurance claim? We&apos;ll explain the process, required documentation, and the next steps.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] hover:shadow-md transition">
                <span className="text-xs font-bold text-[#b91c1c] uppercase tracking-wider block mb-1">
                  04.
                </span>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  Policy Changes
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Need to update your beneficiary, mailing address, payment method, or other policy details? We&apos;ll guide you through each step.
                </p>
              </div>

              {/* Box 5 */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] hover:shadow-md transition">
                <span className="text-xs font-bold text-[#b91c1c] uppercase tracking-wider block mb-1">
                  05.
                </span>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  Coverage Questions
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Understand your current coverage, policy details, riders, and available options to change even if you need more or less protection.
                </p>
              </div>

              {/* Box 6 */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-[#e2e8f0] border-t-4 border-t-[#d90429] hover:shadow-md transition">
                <span className="text-xs font-bold text-[#b91c1c] uppercase tracking-wider block mb-1">
                  06.
                </span>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  New Life Insurance Options
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Interested in exploring new life insurance? Our licensed agents can discuss available coverage options and help you compare policies based on your needs.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 6. CALL CTA PROMINENT BOX */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-8 sm:p-12 shadow-sm">
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Call the Primerica Life Insurance Phone Number Today
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
                Our licensed insurance professionals are standing by to answer your questions. One phone call connects you with a knowledgeable agent without the long wait.
              </p>

              {/* Large Crimson Dial Number */}
              <div className="my-8">
                <a
                  href="tel:8002274683"
                  className="text-3xl sm:text-5xl font-black text-[#d90429] hover:text-[#b8001f] transition tracking-tight inline-block"
                >
                  (800) 227-4683
                </a>
              </div>

              <div>
                <a
                  href="tel:8002274683"
                  className="inline-flex items-center justify-center bg-[#d90429] hover:bg-[#b8001f] text-white font-bold px-10 py-3.5 rounded-md shadow-md text-base transition cursor-pointer"
                >
                  Call Now
                </a>
              </div>

              {/* Operating Info */}
              <div className="mt-6 space-y-1 text-xs text-[#64748b]">
                <p className="font-semibold text-[#334155]">
                  Monday – Friday | 8:00 AM – 8:00 PM CT
                </p>
                <p>
                  Average Answer Time: <strong className="text-[#d90429]">Under 2 Minutes</strong>
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 7. DARK DISCLAIMER FOOTER */}
      <footer className="bg-[#0f172a] text-[#94a3b8] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1e293b]">
        <div className="max-w-5xl mx-auto text-center text-xs leading-relaxed space-y-4">
          
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">
            Disclaimer
          </h4>

          <p className="text-[#94a3b8]">
            We are an independent customer service directory for life insurance information. We are not directly affiliated with, sponsored by, endorsed by, or affiliated with Primerica, nor do we claim to be them. All trademarks, service marks, and logos belong to their respective owners and are used strictly for informational purposes.
          </p>

          <div className="pt-2">
            <Link
              href="/privacy-policy"
              className="text-[#cbd5e1] hover:text-white underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </div>

          <p className="text-[11px] text-[#64748b] pt-2">
            © 2026 Life Insurance Support Directory. All Rights Reserved. This site complies with all applicable TCPA and telemarketing regulations.
          </p>

        </div>
      </footer>

      {/* Interactive Modal */}
      <RequestInfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProduct="Primerica Life Insurance Customer Service Inquiry"
      />
    </div>
  );
}
