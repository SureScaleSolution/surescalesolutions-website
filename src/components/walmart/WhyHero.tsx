import React from "react";
import { Heading2 } from "../common/Heading2";
import Image from "next/image";
import { fadeUp, imageAnimation } from "../common/MotionFunctions";
import { motion } from "motion/react";

export const WhyHero = () => {
  return (
    <div className=" ">
      <div className=" mx-auto w-full flex flex-col px-6 sm:px-10 md:px-16 text-center py-2 sm:py-8 md:py-12 lg:py-20   gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-6 ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex items-center justify-center gap-x-2  "
        >
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="w-[55px] xl:w-[70px] hidden md:block"
          >
            <Image
              src="/walmart/hero/extra-hero.svg"
              alt="Extra Hero"
              width={500}
              className="w-full h-auto"
              height={300}
            />
          </motion.div>
          <Heading2 first="Why Sell on Walmart?" />
        </motion.div>
        <motion.p 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}

        className="text-sm md:text-base lg:text-xl max-w-[900x] mx-auto ">
          Join the world’s largest retail marketplace trusted by millions of
          shoppers. <br className="hidden md:block" />
          Leverage Walmart Fulfillment Services (WFS) or Fulfillment by Seller
          to maximize efficiency. <br className="hidden md:block" />
          Boost your brand’s reach, sales, and credibility on this powerful
          eCommerce platform.
        </motion.p>
      </div>
    </div>
  );
};
