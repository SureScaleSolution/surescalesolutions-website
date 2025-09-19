"use client";

import { CTO1 } from "@/components/common/CTO1";
import PageWrapper from "@/components/common/PageWrapper";
import { EbayOptimization } from "@/components/ebay/EbayOptimization";
import { Hero } from "@/components/ebay/Hero";
import { WhyChooseEbay } from "@/components/ebay/WhyChooseEbay";
import { WhyUsEbay } from "@/components/ebay/WhyUsEbay";

export default function EbayPage() {
  return (
    <PageWrapper>
      <Hero />
      <EbayOptimization />
      <WhyChooseEbay />
      <WhyUsEbay/>
      <CTO1
        first="Don’t let suspension stop your growth. "
        description="Whether you sell on Amazon, eBay, Walmart, or TikTok Shop, our Account Reinstatement Service helps you get back on track faster and stronger."
      />
    </PageWrapper>
  );
}
