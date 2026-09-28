"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InsuranceProducts from "@/components/InsuranceProducts";
import AgentNetwork from "@/components/AgentNetwork";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import RequestInfoModal from "@/components/RequestInfoModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Term Life Insurance");

  const handleOpenModal = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    }
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar with phone bars */}
      <Navbar onRequestInfo={handleOpenModal} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onRequestInfo={handleOpenModal} />

        {/* 2. Protect Your Future / 4 Feature Highlights */}
        <Features onRequestInfo={() => handleOpenModal()} />

        {/* 3. Life Insurance Coverage That Fits Your Needs (Products Showcase) */}
        <InsuranceProducts onRequestInfo={handleOpenModal} />

        {/* 4. Explore Life Insurance Options / Agent Network */}
        <AgentNetwork onRequestInfo={() => handleOpenModal()} />

        {/* 5. Why Choose Life Insurance Services */}
        <WhyChooseUs onRequestInfo={() => handleOpenModal()} />

        {/* 6. Need Help Choosing the Right Life Insurance / Direct Contact */}
        <ContactCta onRequestInfo={() => handleOpenModal()} />
      </main>

      {/* Floating Support Widget */}
      <FloatingWidget onRequestInfo={() => handleOpenModal()} />

      {/* Interactive Request Information Modal */}
      <RequestInfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProduct={selectedProduct}
      />

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
}
