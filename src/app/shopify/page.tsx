"use client";
import { Laptop } from "@/components/common/Laptop";
import PageWrapper from "@/components/common/PageWrapper";
import { CTO } from "@/components/shopify/CTO";
import Hero from "@/components/shopify/Hero";
import { ShopifyServices } from "@/components/shopify/ShopifyServices";
import { SureScaleSolutionsComesIn } from "@/components/shopify/SureScaleSolutionsComesIn";
import { WhyChooseUs } from "@/components/shopify/WhyChooseUs";
import { WhyShopifyFails } from "@/components/shopify/WhyShopifyFails";
import { Outcomes } from "@/components/shopify/Outcomes";
<WhyShopifyFails />;

export default function ShofifyPage() {
  return (
    <PageWrapper>
      <div className="bg-gradient-to-b from-background to-white">
        <Hero />
        <WhyShopifyFails />
      </div>
      <SureScaleSolutionsComesIn />
      <Laptop location="/shopify/laptop-shopify.svg" />
      <ShopifyServices/>
      <WhyChooseUs />
      <Outcomes />
      <CTO />
    </PageWrapper>
  );
}
