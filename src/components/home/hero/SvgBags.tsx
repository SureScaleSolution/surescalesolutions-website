import React from "react";
import MainIcon from "./MainIcon";
import SubIcon from "./SubIcon";
import { useAnimation } from "@/contexts/AnimationContext";

export default function SvgBags() {
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
        className={`group absolute top-1/2 left-1/2 ${getOrbitClass()} translate-x-[-160%] translate-y-[-100%] origin-[160%_100%] xs:translate-x-[-200%] xs:translate-y-[-100%] xs:origin-[200%_100%]`}
        onMouseEnter={() => {
          pauseAnimation();
          setHoveredIcon("bags");
        }}
        onMouseLeave={() => {
          resumeAnimation();
          setHoveredIcon(null);
        }}>
        <div className={getCounterRotateClass()}>
          <MainIcon src="/home/hero/bags.svg" alt="bags" />
          <SubIcon
            href={"/amazon-pl-mpl-brands"}
            src="/home/hero/bags1.svg"
            alt="bags1"
            position="left"
          />
          <SubIcon
            href={"/account-reinstatement"}
            src="/home/hero/bags2.svg"
            alt="bags2"
            position="right"
          />
        </div>
      </div>
    </>
  );
}
