import React from "react";
import SubIcon from "./SubIcon";
import MainIcon from "./MainIcon";
import { useAnimation } from "@/contexts/AnimationContext";

export default function SvgCart() {
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
        className={`group absolute top-1/2 left-1/2 ${getOrbitClass()} translate-x-[-150%] translate-y-[100%] origin-[150%_-100%] xs:translate-x-[-200%] xs:translate-y-[150%] xs:origin-[200%_-150%]`}
        onMouseEnter={() => {
          pauseAnimation();
          setHoveredIcon("cart");
        }}
        onMouseLeave={() => {
          resumeAnimation();
          setHoveredIcon(null);
        }}>
        <div className={getCounterRotateClass()}>
          <MainIcon src="/home/hero/cart.svg" alt="cart" />
          <SubIcon
            href={"/wholesale"}
            src="/home/hero/cart1.svg"
            alt="cart1"
            position="left"
          />
          <SubIcon
            href={"/account-reinstatement"}
            src="/home/hero/cart2.svg"
            alt="cart2"
            position="right"
          />
        </div>
      </div>
    </>
  );
}
