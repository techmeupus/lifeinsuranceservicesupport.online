"use client";

import React, { useState } from "react";
import { MessageCircleQuestion, Phone, FileText, X } from "lucide-react";

interface FloatingWidgetProps {
  onRequestInfo: () => void;
}

export default function FloatingWidget({ onRequestInfo }: FloatingWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popout menu */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 w-72 text-slate-900 animate-fadeIn space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
              Need Assistance?
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-snug">
            Speak with an independent licensed agent or submit an information request.
          </p>

          <div className="space-y-2">
            <a
              href="tel:8009344599"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 transition text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call (800) 934-4599</span>
            </a>

            <a
              href="tel:8005685005"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 transition text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call (800) 568-5005</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onRequestInfo();
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 transition text-xs font-bold shadow cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Request Information</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white border border-blue-600/40 shadow-2xl rounded-full px-5 py-3.5 transition-all transform hover:scale-105 cursor-pointer"
        aria-label="Need help?"
      >
        <MessageCircleQuestion className="w-5 h-5 text-amber-300" />
        <span className="text-sm font-bold tracking-wide">Need help?</span>
      </button>
    </div>
  );
}
