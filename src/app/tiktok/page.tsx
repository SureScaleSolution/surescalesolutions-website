"use client";
import { CTO1 } from "@/components/common/CTO1";
import { Laptop } from "@/components/common/Laptop";
import PageWrapper from "@/components/common/PageWrapper";
import { Hero } from "@/components/tiktok/Hero";
import { Outcomes } from "@/components/tiktok/Outcomes";
import { TiktokServices } from "@/components/tiktok/TiktokServices";

export default function TiktokPage() {
  return (
    <PageWrapper>
      <Hero />
      <Laptop location="/tiktok/laptop-tiktok.svg" />
      <TiktokServices />
      <Outcomes />
      <CTO1
        first="Ready to Go Viral? "
        description="Your next big seller could be one video away. Let's find it, launch it, and scale it together."
      />
    </PageWrapper>
  );
}
