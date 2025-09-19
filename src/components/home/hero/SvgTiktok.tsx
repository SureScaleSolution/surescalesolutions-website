import React from "react";
import MainIcon from "./MainIcon";
import SubIcon from "./SubIcon";
import { useAnimation } from "@/contexts/AnimationContext";

export default function SvgTiktok() {
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
        className={`group absolute top-1/2 left-1/2 ${getOrbitClass()} translate-x-[50%] translate-y-[180%] origin-[-50%_-180%] xs:translate-x-[100%] xs:translate-y-[280%] xs:origin-[-100%_-280%]`}
        onMouseEnter={() => {
          pauseAnimation();
          setHoveredIcon("tiktok");
        }}
        onMouseLeave={() => {
          resumeAnimation();
          setHoveredIcon(null);
        }}>
        <div className={getCounterRotateClass()}>
          <MainIcon src="/home/hero/tiktok.svg" alt="tiktok" />
          <SubIcon
            href={"/tiktok"}
            src="/home/hero/tiktok1.svg"
            alt="tiktok1"
            position="left"
          />
          <SubIcon
            href={"/account-reinstatement"}
            src="/home/hero/tiktok2.svg"
            alt="tiktok2"
            position="right"
          />
        </div>
      </div>
    </>
  );
}
