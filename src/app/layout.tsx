import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Life Insurance Services | Connect With Independent Agents",
  description:
    "LifeInsuranceServices.us is operated by Digital Sphere LLC, an independent lead-generation company connecting consumers with licensed independent insurance agents.",
  keywords: [
    "life insurance",
    "term life insurance",
    "whole life insurance",
    "universal life insurance",
    "final expense insurance",
    "burial insurance",
    "independent insurance agents",
  ],
  authors: [{ name: "Life Insurance Services" }],
  openGraph: {
    title: "Life Insurance Services | Connect With Independent Agents",
    description:
      "LifeInsuranceServices.us is operated by Digital Sphere LLC, an independent lead-generation company connecting consumers with licensed independent insurance agents.",
    url: "https://lifeinsuranceservices.us/",
    siteName: "Life Insurance Services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Insurance Services | Connect With Independent Agents",
    description:
      "LifeInsuranceServices.us is operated by Digital Sphere LLC, an independent lead-generation company connecting consumers with licensed independent insurance agents.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Life Insurance Services",
  url: "https://lifeinsuranceservices.us/",
  description:
    "LifeInsuranceServices.us is operated by Digital Sphere LLC, an independent lead-generation company connecting consumers with licensed independent insurance agents.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-800-934-4599",
      contactType: "Customer Service",
      areaServed: "US",
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-800-568-5005",
      contactType: "Support",
      areaServed: "US",
    },
  ],
  areaServed: "US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
