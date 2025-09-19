import React from "react";
import SubIcon from "./SubIcon";
import MainIcon from "./MainIcon";
import { useAnimation } from "@/contexts/AnimationContext";

export default function SvgShopify() {
  const {
    pauseAnimation,
    resumeAnimation,
    getOrbitClass,
    getCounterRotateClass,
    setHoveredIcon,
  } = useAnimation();

  return (
    <>
      <div
        className={`group absolute top-1/2 left-1/2 ${getOrbitClass()} translate-x-[40%] translate-y-[30%] origin-[-40%_-40%] xs:translate-x-[60%] xs:translate-y-[50%] xs:origin-[-60%_-60%]`}
        onMouseEnter={() => {
          pauseAnimation();
          setHoveredIcon("shopify");
        }}
        onMouseLeave={() => {
          resumeAnimation();
          setHoveredIcon(null);
        }}>
        <div className={getCounterRotateClass()}>
          <MainIcon src="/home/hero/shopify.svg" alt="shopify" />
          <SubIcon
            href={"/shopify"}
            src="/home/hero/shopify1.svg"
            alt="shopify1"
            position="left"
          />
          <SubIcon
            href={"/account-reinstatement"}
            src="/home/hero/shopify2.svg"
            alt="shopify2"
            position="right"
          />
        </div>
      </div>
    </>
  );
}
