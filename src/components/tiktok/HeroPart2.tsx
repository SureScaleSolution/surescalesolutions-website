import React from "react";
import { Heading2 } from "../common/Heading2";
import { fadeUp } from "../common/MotionFunctions";
import { motion } from "motion/react"

export const HeroPart2 = () => {
  return (
    <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
    
     className="flex flex-col px-6 sm:px-14 md:20 lg:px-32  text-center items-center justify-center gap-y-6 md:gap-y-10 py-2 pb-8 md:py-8">
      <Heading2 first="Solution" center="SureSolutions" last="Provides" />
      <p className="text-xs sm:text-base md:text-xl max-w-[850px] md:leading-8 mx-auto text-darkGray ">
        We offer end-to-end TikTok Shop growth management-from finding
        viral-ready products to producing high-performing creatives and running
        targeted ads that convert. Plus, we handle all compliance and violation
        management to keep your shop running smoothly.
      </p>
    </motion.div>
  );
};
