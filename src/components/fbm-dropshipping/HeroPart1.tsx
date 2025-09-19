import React from "react";
import { Link1 } from "../common/Link1";
import { motion } from "motion/react";
import { Link2 } from "../common/Link2";
import { fadeUp } from "../common/MotionFunctions";


export const HeroPart1 = () => {
  return (
    <div className="flex flex-col px-6 sm:px-10  items-center  justify-center gap-y-8 md:gap-y-12">
      <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-12">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 1 }}
          className="font-semibold text-secondary text-3xl sm:text-4xl lg:text-5xl"
        >
          Amazon FBM & Dropshipping
        </motion.h1>
        <motion.p
          initial="hidden"
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="font-light text-sm md:text-base lg:text-lg"
        >
          A hands-off, data-backed approach to profitable Amazon selling
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 1 }}
        className="flex flex-col md:flex-row gap-x-12 lg:gap-x-18 gap-y-8 "
      >
        <Link1 text="Get a Free Consultation" to="/contact-us" />
        <Link2 text="See Case Studies" to="/case-studies" />
      </motion.div>
    </div>
  );
};
