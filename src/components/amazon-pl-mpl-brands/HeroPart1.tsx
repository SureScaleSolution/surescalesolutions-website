import React from "react";
import { Link1 } from "../common/Link1";
import { Link2 } from "../common/Link2";

import { motion } from "motion/react";
import { fadeUp } from "../common/MotionFunctions";
export const HeroPart1 = () => {
  return (
    <div className="flex flex-col px-6 sm:px-10  items-center justify-center gap-y-8 md:gap-y-12 ">
      <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-12">
        <motion.h1
          initial="hidden"
          variants={fadeUp}
          animate="visible"
          className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-secondary"
        >
          Amazon PL & MPL Brands
        </motion.h1>
        <motion.p
          initial="hidden"
          variants={fadeUp}
          animate="visible"
          className="font-light text-sm md:text-base lg:text-lg"
        >
          Your complete partner in building, launching, and scaling profitable
          Amazon brands
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        variants={fadeUp}
        animate="visible"
        className="flex flex-col md:flex-row gap-x-12 lg:gap-x-18 gap-y-8 "
      >
        <Link1 text="Get a Free Consultation" to="/contact-us" />
        <Link2 text="See Case Studies" to="/case-studies" />
      </motion.div>
    </div>
  );
};
