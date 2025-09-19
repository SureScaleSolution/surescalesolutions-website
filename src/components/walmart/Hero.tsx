
import React from "react";
import { HeroPart1 } from "./HeroPart1";
import { HeroPart2 } from "./HeroPart2";
import { WhyHero } from "./WhyHero";

export const Hero = () => {
  return (
    <section className="w-full ">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col gap-y-8 sm:gap-y-16 md:gap-y-24 lg:gap-y-28 py-10 sm:py-14 md:py-20 lg:py-24  bg-gradient-to-b from-background to-white">
        <HeroPart1 />
        <WhyHero/>

        <HeroPart2 />
      </div>
    </section>
  );
};
