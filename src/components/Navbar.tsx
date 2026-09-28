"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Shield, Menu, X, Clock } from "lucide-react";

interface NavbarProps {
  onRequestInfo: (product?: string) => void;
}

export default function Navbar({ onRequestInfo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Notice Bar with Phone Numbers */}
      <div className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 text-white text-center py-2 px-4 text-xs sm:text-sm font-medium border-b border-blue-700/50 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-blue-100 font-normal">
          <span>Call</span>
          <a
            href="tel:8009344599"
            className="font-bold text-white hover:text-amber-300 transition-colors underline decoration-blue-400 underline-offset-2"
          >
            (800) 934-4599
          </a>
          <span>or</span>
          <a
            href="tel:8005685005"
            className="font-bold text-white hover:text-amber-300 transition-colors underline decoration-blue-400 underline-offset-2"
          >
            (800) 568-5005
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-900 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-amber-400 fill-amber-400/20" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-blue-800 transition-colors">
                  Life Insurance<span className="text-blue-600"> Services</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-500 mt-1">
                  Connecting Consumers With Licensed Agents
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-slate-700">
              <Link
                href="/"
                className="relative py-2 text-blue-700 font-bold hover:text-blue-800 transition"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
              </Link>
              <Link
                href="/about-us"
                className="relative py-2 hover:text-blue-700 transition group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 rounded-full group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact-us"
                className="relative py-2 hover:text-blue-700 transition group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 rounded-full group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Call Section & CTA */}
            <div className="hidden md:flex items-center gap-5">
              <div className="text-right">
                <p className="text-[11px] font-bold text-blue-700 uppercase tracking-wider flex items-center justify-end gap-1">
                  <Clock className="w-3 h-3 text-blue-600" />
                  CALL US NOW
                </p>
                <a
                  href="tel:8009344599"
                  className="flex items-center gap-1.5 font-extrabold text-slate-900 text-lg hover:text-blue-700 transition"
                >
                  <Phone className="w-4 h-4 text-blue-600 fill-blue-600" />
                  (800) 934-4599
                </a>
              </div>

              <button
                onClick={() => onRequestInfo()}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-full shadow-md shadow-amber-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                Request Information
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:8009344599"
                className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200"
                aria-label="Call (800) 934-4599"
              >
                <Phone className="w-5 h-5 fill-blue-700" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 animate-fadeIn shadow-xl">
            <nav className="flex flex-col space-y-2 text-base font-semibold">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-blue-50 text-blue-800"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </nav>

            <div className="pt-2 border-t border-slate-100 space-y-2.5">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase">Toll-Free Support Lines</p>
                <div className="mt-1 flex flex-col gap-1.5 font-bold text-blue-800">
                  <a href="tel:8009344599" className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-blue-600" /> (800) 934-4599
                  </a>
                  <a href="tel:8005685005" className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-blue-600" /> (800) 568-5005
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestInfo();
                }}
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 px-4 rounded-xl shadow text-center cursor-pointer"
              >
                Request Information
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
