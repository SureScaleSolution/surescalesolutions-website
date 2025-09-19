"use client";

import { CoreFeatures } from "@/components/amazon-pl-mpl-brands/CoreFeatures";
import { Hero } from "@/components/amazon-pl-mpl-brands/Hero";
import { SureScaleSolutionsComesIn } from "@/components/amazon-pl-mpl-brands/SureScaleSolutionsComesIn";
import { CTO1 } from "@/components/common/CTO1";
import { Laptop } from "@/components/common/Laptop";
import PageWrapper from "@/components/common/PageWrapper";

export default function AmazonPlMplBrandsPage() {
  return (
    <PageWrapper>
      <Hero />
      <Laptop location="/pl-mpl-brands/laptop-pl-mpl-brands.svg" />
      <SureScaleSolutionsComesIn />
      <CoreFeatures />
      <CTO1
        first="Ready to Transform Your Amazon PL & MPL Brands  "
        description="Let’s discuss how we can scale your success, togather."
      />
    </PageWrapper>
  );
}
