import React from "react";
import { Heading2 } from "../common/Heading2";
import { fadeUp } from "../common/MotionFunctions";
import { motion } from "motion/react";

export const SureScaleSolutionsComesIn = () => {
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
          <Heading2 first="Where SureScaleSolutions Comes In" />
          <p className="text-sm md:text-base lg:text-xl max-w-[1000px] mx-auto  text-darkGray">
            We provide complete end-to-end Shopify solutions that take your
            business from idea to consistent revenue. Our approach combines
            creative design, technical expertise, and data-driven marketing to
            ensure your store performs at its peak.{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
