"use client";
import Hero from "@/components/case-studies/Hero";
import { ResultCards } from "@/components/case-studies/ResultCards";
import { CustomerCarousel } from "@/components/common/carousel/CustomerCarousel";
import PageWrapper from "@/components/common/PageWrapper";
import { TrustedBySection } from "@/components/common/TrustedBySection";

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <div className="bg-gradient-to-b from-background via-background to-white">

      <Hero />
      <TrustedBySection />
      </div>
      <ResultCards/>
      <CustomerCarousel/>
    </PageWrapper>
  );
}
