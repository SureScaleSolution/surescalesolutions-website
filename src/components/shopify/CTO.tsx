import React from "react";
import { Heading2 } from "../common/Heading2";
import { motion } from "motion/react";
import { fadeUp } from "../common/MotionFunctions";
import { Link3 } from "../common/Link3";

export const CTO = () => {
  return (
    <section className="w-full bg-primary text-white ">
      <div className=" w-full  flex flex-col py-8  md:py-16  max-w-[900px] mx-auto px-6 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 1, once: true }}
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-6 md:gap-8 "
        >
          <Heading2 first="Ready to Build & Scale Your Shopify Store?" />
          <p className="text-white/70 text-xs  sm:text-sm lg:text-lg text-center mb-2">
            Your eCommerce journey deserves more than just a website it deserves
            a revenue-driven Shopify store that converts. <br /> Let
           <span className="text-white "> SureScaleSolutions</span> build, optimize, and grow your brand today.{" "}
          </p>
          <Link3 text="Book a Demo Call" to="/contact-us" />
        </motion.div>
      </div>
    </section>
  );
};
