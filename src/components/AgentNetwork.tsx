"use client";

import React from "react";
import { Phone, Users, ShieldCheck, CheckCircle2, UserCheck } from "lucide-react";

interface AgentNetworkProps {
  onRequestInfo: () => void;
}

export default function AgentNetwork({ onRequestInfo }: AgentNetworkProps) {
  const agents = [
    { name: "Licensed Agent Network", initials: "LA", role: "East Coast Region" },
    { name: "Independent Advisor", initials: "IA", role: "Central Region" },
    { name: "Senior Specialist", initials: "SS", role: "West Coast Region" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Visual: Agent Network Visual representation */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              
              {/* Background ambient glow circle */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl transform scale-90"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-sm text-white">Independent Agent Network</span>
                  </div>
                  <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    Active Across 50 States
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {agents.map((agent, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 text-slate-950 font-black flex items-center justify-center text-xs shadow-md">
                          {agent.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{agent.name}</p>
                          <p className="text-xs text-blue-200">{agent.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Licensed</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 text-center">
                  <p className="text-xs text-slate-300">
                    Connecting you directly with state-licensed insurance professionals.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text & CTA (Exact original copy) */}
          <div className="lg:col-span-6 text-center lg:text-left order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
              <Users className="w-3.5 h-3.5" />
              Nationwide Consultation
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Explore Life Insurance Options
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
              Learn about available life insurance options and request information from an appropriately licensed independent insurance agent.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onRequestInfo}
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-blue-950 font-bold rounded-full shadow-lg transition duration-200 cursor-pointer text-sm sm:text-base"
              >
                Request Information
              </button>

              <a
                href="tel:8005685005"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg transition duration-200 flex items-center justify-center gap-2.5 text-sm sm:text-base border border-blue-400/40"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>(800) 568-5005</span>
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No fees to request information • No obligation</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
