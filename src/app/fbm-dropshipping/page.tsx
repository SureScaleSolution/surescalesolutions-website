"use client";
import { Hero } from "@/components/fbm-dropshipping/Hero";
import PageWrapper from "@/components/common/PageWrapper";
import { UniqueApproach } from "@/components/fbm-dropshipping/UniqueApproach";
import { ClientResult } from "@/components/fbm-dropshipping/ClientResult";
import { CTO1 } from "@/components/common/CTO1";
import { Laptop } from "@/components/common/Laptop";

export default function FbmDropshippingPage() {
  return (
    <PageWrapper>
      <Hero />
      <Laptop location="/fbm-dropshipping/laptop-fbm-dropshipping.svg" />
      <UniqueApproach />
      <ClientResult />
      <CTO1
        first="Ready to Build a Profitable Amazon Business?"
        description="Let’s discuss how we can scale your success, togather."
      />
    </PageWrapper>
  );
}
