"use client";

import React from "react";
import Link from "next/link";
import { Shield, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & Description Column */}
          <div className="md:col-span-7 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white shadow-md">
                <Shield className="w-5 h-5 text-amber-300 fill-amber-300/20" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Life Insurance<span className="text-blue-400"> Services</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              Life Insurance Services is an independent lead-generation website owned and operated by Digital Sphere LLC. Consumers may request information and may be connected with appropriately licensed independent insurance agents.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                🔒 SSL Encrypted &amp; Secure
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                🇺🇸 US Licensed Agents
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                ⭐ Independent Comparisons
              </span>
            </div>
          </div>

          {/* Contact Us Column */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-white font-bold text-lg">
              <Link href="/contact-us" className="hover:text-blue-400 transition inline-flex items-center gap-1.5">
                <span>Contact Us</span>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </Link>
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 border border-slate-700">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:contact@lifeinsuranceservices.us"
                  className="hover:text-blue-400 transition break-all"
                >
                  contact@lifeinsuranceservices.us
                </a>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 border border-slate-700">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:8009344599"
                  className="hover:text-blue-400 transition font-semibold"
                >
                  (800) 934-4599
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 border border-slate-700">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:8005685005"
                  className="hover:text-blue-400 transition font-semibold"
                >
                  (800) 568-5005
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Legal & Disclaimers Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between gap-6 text-xs text-slate-500 leading-relaxed">
          
          <div className="space-y-2 md:max-w-2xl">
            <p className="text-slate-400 font-medium">
              © 2026 Life Insurance Services. All rights reserved.
            </p>
            <p>
              Life Insurance Services is a lead-generation website owned and operated by Digital Sphere LLC. Digital Sphere LLC does not directly work with or represent insurance companies. Coverage, rates, and availability may vary by state, age, and eligibility.
            </p>
            <p>
              This website is not affiliated with or endorsed by any government agency.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-x-6 gap-y-2 shrink-0">
            <Link href="/contact-us" className="hover:text-blue-400 transition">
              Contact Us
            </Link>
            <Link href="/about-us" className="hover:text-blue-400 transition">
              About Us
            </Link>
            <Link href="/terms-conditions" className="hover:text-blue-400 transition">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
