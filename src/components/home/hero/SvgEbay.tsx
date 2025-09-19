import React from "react";
import MainIcon from "./MainIcon";
import SubIcon from "./SubIcon";
import { useAnimation } from "@/contexts/AnimationContext";

export default function SvgEbay() {
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
        className={`group absolute top-1/2 left-1/2 ${getOrbitClass()} translate-x-[170%] translate-y-[-170%] origin-[-170%_170%] xs:translate-x-[250%] xs:translate-y-[-250%] xs:origin-[-250%_250%]`}
        onMouseEnter={() => {
          pauseAnimation();
          setHoveredIcon("ebay");
        }}
        onMouseLeave={() => {
          resumeAnimation();
          setHoveredIcon(null);
        }}>
        <div className={getCounterRotateClass()}>
          <MainIcon src="/home/hero/ebay.svg" alt="ebay" />
          <SubIcon
            href={"/ebay"}
            src="/home/hero/ebay1.svg"
            alt="ebay1"
            position="left"
          />
          <SubIcon
            href={"/account-reinstatement"}
            src="/home/hero/ebay2.svg"
            alt="ebay2"
            position="right"
          />
        </div>
      </div>
    </>
  );
}
