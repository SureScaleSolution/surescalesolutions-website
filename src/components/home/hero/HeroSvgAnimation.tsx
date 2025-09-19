import React from "react";
import SvgAmazon from "./SvgAmazon";
import SvgShopify from "./SvgShopify";
import SvgWalmart from "./SvgWalmart";
import SvgBags from "./SvgBags";
import SvgEbay from "./SvgEbay";
import SvgTiktok from "./SvgTiktok";
import SvgCart from "./SvgCart";
import { AnimationProvider } from "@/contexts/AnimationContext";
import Image from "next/image";

export const HeroSvgAnimation = () => {
  return (
    <AnimationProvider>
      <div className="w-full flex items-center justify-center relative">
        <Image
          src={"/home/hero/bg.svg"}
          alt="Background"
          width={440}
          height={440}
        />
        <SvgShopify />
        <SvgBags />
        <SvgCart />
        <SvgWalmart />
        <SvgEbay />
        <SvgTiktok />
        <SvgAmazon />
      </div>
    </AnimationProvider>
  );
};
