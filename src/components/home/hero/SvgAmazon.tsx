import React from "react";
import MainIcon from "./MainIcon";
import SubIcon from "./SubIcon";
import { useAnimation } from "@/contexts/AnimationContext";

export default function SvgAmazon() {
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
        className={`group absolute top-1/2 left-1/2 ${getOrbitClass()} translate-x-[-270%] translate-y-[-170%] origin-[270%_170%] xs:translate-x-[-380%] xs:translate-y-[-200%] xs:origin-[380%_200%]`}
        onMouseEnter={() => {
          pauseAnimation();
          setHoveredIcon("amazon");
        }}
        onMouseLeave={() => {
          resumeAnimation();
          setHoveredIcon(null);
        }}>
        <div className={getCounterRotateClass()}>
          <MainIcon src="/home/hero/amazon.svg" alt="amazon" />
          <SubIcon
            href={"/fbm-dropshipping"}
            src="/home/hero/amazon1.svg"
            alt="amazon1"
            position="left"
          />
          <SubIcon
            href={"/account-reinstatement"}
            src="/home/hero/amazon2.svg"
            alt="amazon2"
            position="right"
          />
        </div>
      </div>
    </>
  );
}
