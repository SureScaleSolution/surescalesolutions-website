import Image from "next/image";
import { Heading2 } from "../common/Heading2";
import { motion } from "motion/react";
import { childOpacity, fadeUp, parentOpacity } from "../common/MotionFunctions";

export const WhyUsEbay = () => {
  const highlights = [
    "80% more visibility in eBay search results",
    "Higher click-through rates through compelling, SEO-optimized listings",
    "Increased buyer trust with professional branding and store design",
    "Up to 55% sales growth from an optimized store structure",
  ];

  return (
    <section className="w-full bg-background">
      <div className="max-w-[750px] mx-auto w-full  flex flex-col   px-6  sm:px-10 md:px-16 lg:max-w-[900px]  gap-y-8 md:gap-y-12 py-12 sm:py-16 md:py-20 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-y-5 md:gap-y-8"    
        >
          <Heading2 first="Growth Results You Can Expect" />
          <p className="text-darkGray text-xs sm:text-sm lg:text-base text-center mx-auto max-w-[750px]">
            Here&apos;s what our clients have achieved with our eBay Dropshipping, Private Label, and Micro Label brand services:
          </p>
        </motion.div>
        {/* Mobile view */}
        <motion.div
          variants={parentOpacity}
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
          className="grid grid-cols-1 gap-y-4  sm:hidden"
        >
          {highlights.map((text, i) => (
            <motion.div
              variants={childOpacity}
              key={i}
              className="flex gap-x-1 "
            >
              <div className=" max-h-7 w-auto">
                <Image
                  src="/fbm-dropshipping/tick.svg"
                  alt="Client Result"
                  width={100}
                  height={100}
                  className="h-full w-auto"
                />
              </div>
              <div className="text-[10px] flex-1">{text}</div>
            </motion.div>
          ))}
        </motion.div>
        {/* Desktop view */}
        <motion.div
          variants={parentOpacity}
          initial="hidden"
          viewport={{ once: true, amount: 1 }}
          whileInView="visible"
          className="w-full grid-cols-2 gap-y-8 xl:gap-y-10 gap-x-2 md:gap-x-5 lg:gap-x-8 hidden sm:grid"
        >
          {highlights.map((text, i) => (
            <motion.div
              variants={childOpacity}
              key={i}
              className={` w-full flex gap-x-2 md:gap-x-3  `}
            >
              <div className=" max-h-7 w-auto">
                <Image
                  src="/fbm-dropshipping/tick.svg"
                  alt="Client Result"
                  width={100}
                  height={100}
                  className="h-full w-auto"
                />
              </div>
              <div className="text-xs base:text-sm lg:text-base flex-1">
                {text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
