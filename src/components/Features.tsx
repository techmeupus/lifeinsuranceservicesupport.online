"use client";

import React from "react";
import {
  DollarSign,
  Globe2,
  FileSpreadsheet,
  LockKeyhole,
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";

interface FeaturesProps {
  onRequestInfo: () => void;
}

export default function Features({ onRequestInfo }: FeaturesProps) {
  const features = [
    {
      id: "flexible",
      title: "Flexible Coverage Options",
      description:
        "Learn about term, whole life, and other life insurance options. Availability, pricing, eligibility, and coverage vary by state and individual circumstances.",
      icon: DollarSign,
      color: "from-emerald-500/10 to-teal-500/10",
      iconBg: "bg-emerald-100 text-emerald-700 border-emerald-300",
      accent: "border-emerald-200/80 hover:border-emerald-400",
      badge: "Customizable Plans",
    },
    {
      id: "nationwide",
      title: "Nation wide Support",
      description:
        "Independent insurance agents have helped individuals and families explore life insurance options across the U.S.",
      icon: Globe2,
      color: "from-amber-500/10 to-yellow-500/10",
      iconBg: "bg-amber-100 text-amber-700 border-amber-300",
      accent: "border-amber-200/80 hover:border-amber-400",
      badge: "50 States",
    },
    {
      id: "request",
      title: "Request Information",
      description:
        "Eligibility and application requirements vary by product, state, and individual circumstances.",
      icon: FileSpreadsheet,
      color: "from-pink-500/10 to-rose-500/10",
      iconBg: "bg-pink-100 text-pink-700 border-pink-300",
      accent: "border-pink-200/80 hover:border-pink-400",
      badge: "Fast & Free",
    },
    {
      id: "security",
      title: "Your Data Is Secure",
      description:
        "We prioritize your privacy and protect your personal information using industry-standard security and compliance practices.",
      icon: LockKeyhole,
      color: "from-blue-500/10 to-indigo-500/10",
      iconBg: "bg-blue-100 text-blue-700 border-blue-300",
      accent: "border-blue-200/80 hover:border-blue-400",
      badge: "Encrypted & Private",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Reliable Protection
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Protect Your Future with Reliable Life Insurance
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore Life Insurance Options With an Independent Agent for coverage that helps safeguard your family’s financial future — today and tomorrow.
          </p>
          
          <div className="mt-6 flex justify-center">
            <button
              onClick={onRequestInfo}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-full font-semibold transition shadow-md shadow-blue-700/20 hover:scale-[1.02] cursor-pointer group"
            >
              <span>Request Information</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3-Column Layout: Left Highlight Card + 4 Right Feature Cards */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column Showcase Card */}
          <div className="lg:col-span-4 flex">
            <div className="w-full relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white p-7 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-700/50 min-h-[380px]">
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-6">
                  <Award className="w-6 h-6" />
                </div>
                
                <span className="inline-block text-xs font-bold tracking-wider text-amber-400 uppercase mb-2">
                  Guidance You Can Trust
                </span>
                
                <h3 className="text-2xl font-bold text-white leading-snug">
                  Financial security starts with the right coverage
                </h3>
                
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  Choosing life insurance doesn’t have to be overwhelming. Let experienced independent agents match you with the policy suited for your budget and future goals.
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Licensed Independent Agents</span>
                </div>
                <button
                  onClick={onRequestInfo}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 underline cursor-pointer"
                >
                  Get Started →
                </button>
              </div>

              {/* Subtle background glow */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: 4 Core Feature Cards Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5 sm:gap-6">
            {features.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className={`relative rounded-3xl p-6 sm:p-7 bg-white border ${item.accent} shadow-sm card-hover-glow flex flex-col justify-between transition-all duration-300`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.iconBg}`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                    <span className="hover:underline cursor-pointer" onClick={onRequestInfo}>
                      Explore options
                    </span>
                    <span className="text-slate-400">›</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
