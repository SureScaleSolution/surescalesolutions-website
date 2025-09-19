"use client";
import HeroPart1 from "@/components/account-reinstatement/HeroPart1";
import { HeroPart2 } from "@/components/account-reinstatement/HeroPart2";
import { PlatformCoverage } from "@/components/account-reinstatement/PlatformCoverage";
import { UniqueStrategy } from "@/components/account-reinstatement/UniqueStrategy";
import { CTO1 } from "@/components/common/CTO1";
import { GrowthResult } from "@/components/common/GrowthResult";
import PageWrapper from "@/components/common/PageWrapper";

export default function AccountReinstatementPage() {
  return (
    <PageWrapper>
      <div className="bg-gradient-to-b from-background to-white">
        <HeroPart1 />
        <HeroPart2 />
      </div>
        <UniqueStrategy />
        <PlatformCoverage />
        <GrowthResult />
      <CTO1
        first="Don’t let suspension stop your growth."
        description="Whether you sell on Amazon, Walmart, or TikTok Shop, our Account Reinstatement Service helps you get back on track faster and stronger."
      />
    </PageWrapper>
  );
}
