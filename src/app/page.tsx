"use client";
import { ClientTrust } from "@/components/home/ClientTrust";
import { CustomerCarousel } from "@/components/common/carousel/CustomerCarousel";
import { GrowthSolutions } from "@/components/home/GrowthSolutions";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/home/Services";
import { SuccessStories } from "@/components/home/SuccessStories";
import { TrustedBySection } from "@/components/common/TrustedBySection";
import PageWrapper from "@/components/common/PageWrapper";
import { CTO1 } from "@/components/common/CTO1";
import { GrowthResult } from "@/components/common/GrowthResult";
// import { StrategyToGrowth } from "@/components/home/StrategyToGrowth";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Check if there's a hash in the URL when the page loads
    const hash = window.location.hash;
    if (hash === '#services') {
      // Add a small delay to ensure the DOM is fully rendered
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <PageWrapper>
      <div className="bg-gradient-to-b from-background to-white">
        <Hero />
        <TrustedBySection />
        {/* <StrategyToGrowth /> */}
      </div>
      <Services />
      <GrowthSolutions />
      <ClientTrust />
      <CustomerCarousel />
      <SuccessStories />
      <GrowthResult />
      <CTO1
        first="Don’t let suspension stop your growth."
        description="Whether you sell on Amazon, Walmart, or TikTok Shop, our Account Reinstatement Service helps you get back on track faster and stronger."
      />
    </PageWrapper>
  );
}
