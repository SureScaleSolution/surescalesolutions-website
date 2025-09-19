import React from "react";
import { fadeUp } from "../common/MotionFunctions";
import { motion } from "motion/react";
import { EbayText } from "../common/EbayText";

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
          <h2 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center flex flex-wrap justify-center items-center gap-x-2">
            <span>Why</span>
            <EbayText />
            <span>Store Optimization Matters</span>
          </h2>

          <p className="text-sm md:text-base lg:text-xl max-w-[700x] mx-auto  text-darkGray">
            With millions of active buyers, eBay is a competitive marketplace.
            Having just listings isn’t enough your store must be optimized for
            search visibility, conversion, and branding. A well-optimized store
            attracts more buyers, builds trust, and ensures consistent revenue
            growth.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
