import React from "react";
import MainIcon from "./MainIcon";
import SubIcon from "./SubIcon";
import { useAnimation } from "@/contexts/AnimationContext";

export default function SvgWalmart() {
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
        className={`group absolute top-1/2 left-1/2 ${getOrbitClass()} translate-x-[-40%] translate-y-[-230%] origin-[40%_230%] xs:translate-x-[-50%] xs:translate-y-[-300%] xs:origin-[50%_300%]`}
        onMouseEnter={() => {
          pauseAnimation();
          setHoveredIcon("walmart");
        }}
        onMouseLeave={() => {
          resumeAnimation();
          setHoveredIcon(null);
        }}>
        <div className={getCounterRotateClass()}>
          <MainIcon src="/home/hero/walmart.svg" alt="walmart" />
          <SubIcon
            href={"/walmart"}
            src="/home/hero/walmart1.svg"
            alt="walmart1"
            position="left"
          />
          <SubIcon
            href={"/account-reinstatement"}
            src="/home/hero/walmart2.svg"
            alt="walmart2"
            position="right"
          />
        </div>
      </div>
    </>
  );
}
