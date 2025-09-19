"use client";
import { Hero } from "@/components/wholesale/Hero";
import PageWrapper from "@/components/common/PageWrapper";
import { Proven } from "@/components/wholesale/Proven";
import { Outcomes } from "@/components/wholesale/Outcomes";
import { CTO1 } from "@/components/common/CTO1";
import { Laptop } from "@/components/common/Laptop";

export default function WholesalePage() {
  return (
    <PageWrapper>
      <Hero />
      <Laptop location="wholesale/laptop-wholesale.svg" />
      <Proven />
      <Outcomes />

      <CTO1
        first="Ready to Transform Your Whole Business?"
        description="Let’s discuss how we can scale your success, togather."
      />
    </PageWrapper>
  );
}
