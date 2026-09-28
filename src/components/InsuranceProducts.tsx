"use client";

import React from "react";
import {
  Calendar,
  Shield,
  Layers,
  Heart,
  Flower2,
  Sparkles,
} from "lucide-react";

interface InsuranceProductsProps {
  onRequestInfo: (productName?: string) => void;
}

export default function InsuranceProducts({ onRequestInfo }: InsuranceProductsProps) {
  const products = [
    {
      id: "term",
      title: "Term Life Insurance",
      description: "Available coverage options for a specific term.",
      tagline: "Flexible term options",
      ctaText: "View Term Life →",
      icon: Calendar,
      theme: {
        badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
        btn: "bg-emerald-700 hover:bg-emerald-800 text-white",
        cardBg: "from-emerald-50/60 to-white",
        highlightText: "text-emerald-700",
        border: "border-emerald-200/80 hover:border-emerald-400",
      },
    },
    {
      id: "whole",
      title: "Whole Life Insurance",
      description: "Lifetime protection with cash value.",
      tagline: "Lifetime protection",
      ctaText: "View Whole Life →",
      icon: Shield,
      theme: {
        badge: "bg-blue-100 text-blue-800 border-blue-300",
        btn: "bg-blue-700 hover:bg-blue-800 text-white",
        cardBg: "from-blue-50/60 to-white",
        highlightText: "text-blue-700",
        border: "border-blue-200/80 hover:border-blue-400",
      },
    },
    {
      id: "universal",
      title: "Universal Life Insurance",
      description: "Flexible permanent insurance.",
      tagline: "Customizable coverage",
      ctaText: "View Universal Life →",
      icon: Layers,
      theme: {
        badge: "bg-purple-100 text-purple-800 border-purple-300",
        btn: "bg-purple-700 hover:bg-purple-800 text-white",
        cardBg: "from-purple-50/60 to-white",
        highlightText: "text-purple-700",
        border: "border-purple-200/80 hover:border-purple-400",
      },
    },
    {
      id: "final-expense",
      title: "Final Expense Insurance",
      description: "Covers funeral & end-of-life costs.",
      tagline: "Coverage options vary by product and eligibility",
      ctaText: "View Final Expense →",
      icon: Heart,
      theme: {
        badge: "bg-rose-100 text-rose-800 border-rose-300",
        btn: "bg-rose-700 hover:bg-rose-800 text-white",
        cardBg: "from-rose-50/60 to-white",
        highlightText: "text-rose-700",
        border: "border-rose-200/80 hover:border-rose-400",
      },
    },
    {
      id: "burial",
      title: "Burial Insurance",
      description: "Burial insurance options.",
      tagline: "Available coverage options",
      ctaText: "View Burial Insurance →",
      icon: Flower2,
      theme: {
        badge: "bg-slate-100 text-slate-800 border-slate-300",
        btn: "bg-slate-700 hover:bg-slate-800 text-white",
        cardBg: "from-slate-100/60 to-white",
        highlightText: "text-slate-700",
        border: "border-slate-300 hover:border-slate-400",
      },
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Coverage Options
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Life Insurance Coverage That Fits Your Needs
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Compare flexible life insurance options designed to protect your family.
          </p>
        </div>

        {/* All Products Grid View (Clean, direct cards without tabs) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${item.theme.cardBg} border ${item.theme.border} shadow-sm card-hover-glow flex flex-col justify-between transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.theme.badge}`}>
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className={`font-semibold text-xs ${item.theme.highlightText}`}>
                    {item.tagline}
                  </span>
                  <button
                    onClick={() => onRequestInfo(item.title)}
                    className={`${item.theme.btn} px-4 py-2 rounded-full text-xs font-bold transition shadow-sm flex items-center justify-center gap-1 cursor-pointer shrink-0`}
                  >
                    <span>{item.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
