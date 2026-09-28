"use client";

import React from "react";
import { Star, Shield } from "lucide-react";

interface HeroProps {
  onRequestInfo: (product?: string) => void;
}

export default function Hero({ onRequestInfo }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 sm:py-20 lg:py-28">
      {/* Background Decorative Mesh & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Star Rating & Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-900/60 border border-blue-700/50 backdrop-blur-md mb-8 shadow-sm">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-blue-100">
            Connecting Consumers With Independent Insurance Agents
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
          Explore Your Options
          <span className="block mt-2 bg-gradient-to-r from-blue-300 via-sky-200 to-amber-300 bg-clip-text text-transparent">
            Life Insurance Coverage
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
          Learn about different life insurance options and request information from an appropriate independent insurance agent.
        </p>

        {/* Request Information Button */}
        <div className="mt-10">
          <button
            onClick={() => onRequestInfo()}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold text-base sm:text-lg px-9 py-4 rounded-full shadow-xl shadow-amber-500/20 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Shield className="w-5 h-5 fill-slate-950/20 text-slate-950" />
            <span>Request Information</span>
          </button>
        </div>

      </div>
    </section>
  );
}
