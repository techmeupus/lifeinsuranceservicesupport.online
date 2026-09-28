"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Shield, Clock, Award, HelpCircle } from "lucide-react";

interface WhyChooseUsProps {
  onRequestInfo: () => void;
}

export default function WhyChooseUs({ onRequestInfo }: WhyChooseUsProps) {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            Clear &amp; Transparent
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Life Insurance Services?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Digital Sphere LLC does not directly work with or represent insurance companies. Life Insurance Services connects you with independent insurance agents to help you explore available coverage options for your loved ones.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onRequestInfo}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-blue-700 text-blue-700 font-bold hover:bg-blue-700 hover:text-white transition shadow-sm cursor-pointer"
            >
              <span>Request Information</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Key Checklist & Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm card-hover-glow flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold border border-blue-200">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Flexible term and whole life insurance options
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tailor policy durations, benefit amounts, and riders to suit your household income and long-term financial milestones.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm card-hover-glow flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold border border-amber-200">
                <CheckCircle2 className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Information About Available Options
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Receive personalized details, state-specific guidelines, and comprehensive plan summaries without any pressure or obligation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm card-hover-glow flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold border border-emerald-200">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Independent &amp; Objective Guidance
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Independent agents work with multiple carriers, empowering you to evaluate different tiers side-by-side.
                </p>
              </div>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 rounded-3xl p-8 text-white shadow-2xl border border-blue-800/60 relative overflow-hidden">
              
              <div className="relative z-10">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                  Our Mission &amp; Promise
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
                  Helping You Make Informed Choices for Your Family
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  We believe obtaining life insurance information should be straightforward, respectful of your privacy, and tailored to your specific situation.
                </p>

                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-xs text-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Quick responses from qualified independent agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-400" />
                    <span>Answers to all your policy questions</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs text-blue-200">Ready to review your options?</span>
                  <button
                    onClick={onRequestInfo}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 underline cursor-pointer"
                  >
                    Request Info Now →
                  </button>
                </div>
              </div>

              {/* Background ambient light */}
              <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
