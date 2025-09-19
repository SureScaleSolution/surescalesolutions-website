import React from "react";
import { Heading2 } from "../common/Heading2";
import { fadeUp } from "../common/MotionFunctions";
import {motion} from "motion/react"

export const WhyHero = () => {
  return (
    <div>
      <div className=" mx-auto w-full flex flex-col px-6 sm:px-10 md:px-16 text-center py-2 sm:py-8 md:py-12 lg:py-20   gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className=" mx-auto w-full flex flex-col px-6 sm:px-10 md:px-16 text-center  gap-y-8  "
        >
          <Heading2 first="Why TikTok Sellers Fail?" />
          <p className="text-sm md:text-base lg:text-xl max-w-[700x] mx-auto  text-darkGray">
            Chasing trends without proper product validation. Poor video
            creative that fails to grab attention. Violation strikes leading to
            account suspension. No structured ad strategy. Lack of influencer
            partnerships.{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
