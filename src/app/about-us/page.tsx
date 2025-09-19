import PageWrapper from "@/components/common/PageWrapper";
import Hero from "@/components/about-us/Hero";
import React from "react";
import WhatMakesUsDifferent from "@/components/about-us/WhatMakesUsDifferent";
import OurMission from "@/components/about-us/OurMission";

export default function AboutUsPage() {
  return (
    <>
      <PageWrapper>
        <div className="bg-gradient-to-b from-background to-white">
          <Hero />
          <WhatMakesUsDifferent />
        </div>
        <OurMission />
      </PageWrapper>
    </>
  );
}
