"use client";
import { CTO1 } from "@/components/common/CTO1";
import { Laptop } from "@/components/common/Laptop";
import PageWrapper from "@/components/common/PageWrapper";
import { ComprehensiveSolutions } from "@/components/walmart/ComprehensiveSolutions";
import { Hero } from "@/components/walmart/Hero";
import { PartnerInGrowth } from "@/components/walmart/PartnerInGrowth";

export default function WalmartPage() {
  return (
    <PageWrapper>
      <Hero/>
      <Laptop location="/walmart/laptop-walmart.svg"/>
      <ComprehensiveSolutions/>
      <PartnerInGrowth/>
      <CTO1
        first="Ready to Dominate Walmart?"
        description="Whether you're a new seller or an established brand, we'll help you grow faster, sell smarter, and scale smoothly without stress."
      />
    </PageWrapper>
  );
}
