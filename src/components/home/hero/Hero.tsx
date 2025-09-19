import React from "react";
import { Link1 } from "../../common/Link1";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, fadeDown } from "../../common/MotionFunctions";
import { HeroSvgAnimation } from "./HeroSvgAnimation";
const Hero = () => {
  return (
    <section className="">
      <div className="max-w-[1660px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 pb-10 sm:py-10">
        <div className="w-full grid md:grid-cols-2 gap-8 items-center gap-y-8">
          {/* Image part Mobile */}
          <motion.div
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            className="flex sm:hidden justify-center md:justify-end md:order-2 pt-8 ">
            <HeroSvgAnimation />
          </motion.div>
          {/* Image part Desktop */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="hidden sm:flex justify-center md:justify-end md:order-2 pt-8 ">
            <HeroSvgAnimation />
          </motion.div>
          {/* Text part */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-start md:order-1 gap-y-2 md:gap-y-6 ">
            <h1 className="text-3xl md:text-4xl lg:text-[50px] font-semibold mb-4 text-secondary">
              Scale Your <span className="">Ecommerce</span> Business with
              Confidence
            </h1>
            <p className="text-sm md:text-lg font-light mb-6">
              From Amazon to TikTok Shop and Shopify - Full-Service Growth,
              Management & Reinstatement Support
            </p>
            <Link1 text="Get a Free Consultation" to="/contact-us" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
