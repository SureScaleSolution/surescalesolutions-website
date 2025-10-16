import React from "react";
import { Link1 } from "../common/Link1";
import Image from "next/image";
import { Link2 } from "../common/Link2";
import { motion } from "motion/react";
import { fadeLeft, fadeRight } from "../common/MotionFunctions";

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-[1660px] flex items-center md:items-start justify-between mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16  py-10 sm:py-14 md:py-12 ">
        {/* Text part */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="md:w-[40%] flex flex-col justify-center items-center md:items-start gap-y-2 md:gap-y-6  md:text-left text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-semibold mb-4 text-secondary ">
            Shopify Store Development & Optimization Services
          </h1>
          <p className="text-sm md:text-lg font-light mb-6">
            At SureScale Solutions, we don&apos;t just build Shopify stores , we
            build businesses. Our team specializes in designing, developing, and
            scaling high-converting Shopify stores that increase your revenue,
            boost visibility, and build customer loyalty. We also help generate
            consistent sales for your store.{" "}
          </p>
          <div className="flex flex-col  md:flex-row gap-x-12 lg:gap-x-18 gap-y-8  mx-auto md:mx-0">
            <Link1 text="Get a Free Consultation" to="/contact-us" />
            <Link2 text="See Case Studies" to="/case-studies" />
          </div>
        </motion.div>
        {/* Image part */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="w-[40%]     hidden  md:flex"
        >
          <div className="pt-8 max-w-[330px] mx-auto ">
            <Image
              src="/shopify/hero/hero.svg"
              alt="TikTok Hero Image"
              width={500}
              height={500}
              className=" h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
