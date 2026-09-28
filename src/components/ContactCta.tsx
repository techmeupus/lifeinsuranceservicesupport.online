"use client";

import React from "react";
import { Phone, Clock, Users, ShieldCheck, Headphones } from "lucide-react";

interface ContactCtaProps {
  onRequestInfo: () => void;
}

export default function ContactCta({ onRequestInfo }: ContactCtaProps) {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-[36px] p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (Exact original text) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
                <Headphones className="w-3.5 h-3.5 text-amber-400" />
                Dedicated Agent Helpline
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Need Help Choosing the Right Life Insurance?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Request information and you may be connected with an appropriately licensed independent insurance agent. The agent can provide information about available insurance options.
              </p>

              {/* Exact Operating Schedule & Phone Numbers */}
              <div className="mt-8 space-y-3.5 text-slate-200">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="font-medium">
                    Mon – Sat · 9:00 AM – 9:00 PM (EST)
                  </span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:8009344599"
                    className="font-bold text-white hover:text-amber-300 transition text-base sm:text-lg"
                  >
                    (800) 934-4599
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:8005685005"
                    className="font-bold text-white hover:text-amber-300 transition text-base sm:text-lg"
                  >
                    (800) 568-5005
                  </a>
                </div>
              </div>

            </div>

            {/* Right Side: Human Support Stat + Action Buttons */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6 text-center lg:text-right">
              
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 w-full max-w-sm">
                
                {/* 100% Human Support badge */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    {["Agent A", "Agent B", "Agent C", "Agent D"].map((name, i) => (
                      <div
                        key={i}
                        className={`inline-block h-10 w-10 rounded-full ring-2 ring-blue-900 flex items-center justify-center text-xs font-black shadow-md ${
                          i === 0
                            ? "bg-amber-400 text-slate-950"
                            : i === 1
                            ? "bg-sky-400 text-slate-950"
                            : i === 2
                            ? "bg-emerald-400 text-slate-950"
                            : "bg-indigo-400 text-white"
                        }`}
                      >
                        {name.charAt(6)}
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-3xl font-black text-amber-400">100%</p>
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Human Support
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-300 text-left leading-relaxed">
                  Real people, licensed professionals, ready to answer your questions without high-pressure sales tactics.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full max-w-sm">
                <button
                  onClick={onRequestInfo}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-100 text-blue-950 font-bold transition shadow-md cursor-pointer text-sm"
                >
                  Request Information
                </button>

                <a
                  href="tel:8009344599"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-amber-400/20 text-sm"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero fees • Fast agent response</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
