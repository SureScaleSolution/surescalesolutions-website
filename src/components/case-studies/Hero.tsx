import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, fadeUp } from "../common/MotionFunctions";

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col  items-center justify-center py-10 sm:py-14 md:py-16 lg:py-20  px-4 sm:px-8 md:px-12 lg:px-16  gap-y-12 ">
        <div className="flex">
          {/* Text part */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-y-2 md:gap-y-6  md:text-left text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-[50px] font-semibold mb-4 text-secondary ">
              Real Success Stories, Real Results{" "}
            </h1>
            <p className="text-sm md:text-lg font-light mb-6">
              At{" "}
              <span className="font-medium text-primary">
                SureScaleSolution
              </span>
              , we believe that results speak louder than words. Our case
              studies highlight how we&apos;ve helped businesses overcome
              challenges, scale their operations, and achieve measurable growth
              across leading e-commerce platforms.{" "}
            </p>
          </motion.div>
          {/* Image part */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="w-1/2   hidden  md:flex"
          >
            <div className="    pt-8 w-[600px] mx-auto ">
              <Image
                src="/case-studies/hero.svg"
                alt="Case Studies Hero Image"
                width={500}
                height={500}
                className=" h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <p className="text-sm md:text-lg lg:text-xl text-center max-w-[1100px] sm:px-12">
            Each case study reflects our proven expertise in account
            reinstatement, eBay store optimization, Shopify store setup, and
            multi-platform growth strategies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
