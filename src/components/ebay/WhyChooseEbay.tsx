import React from "react";

import { motion } from "motion/react";
import { childOpacity, fadeUp, parentOpacity } from "../common/MotionFunctions";
import { EbayText } from "../common/EbayText";
export const WhyChooseEbay = () => {
  const features = [
    {
      heading: "Proven Results:",
      description:
        "A strong track record of boosting eBay sellers’ sales, visibility, and reputation.",
    },
    {
      heading: "SEO-Driven Listings:",
      description:
        "Optimized product listings for higher ranking and conversions.",
    },
    {
      heading: "Personalized Support:",
      description:
        "Dedicated account managers focused on your store’s success.",
    },
    {
      heading: "End-to-End Service:",
      description:
        "From setup and product sourcing to scaling and brand growth, we handle it all.",
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-14 px-6 sm:px-12 ">
        <motion.div
          initial="hidden"
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col gap-y-8 md:gap-y-12"
        >
          <h2 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center flex flex-wrap justify-center items-center gap-x-2">
            <span>Why Choose Us for </span>
            <EbayText />
            <span>Store Optimization?</span>
          </h2>
          <p className=" mx-auto w-full text-darkGray text-sm md:text-base ">
            We&apos;ve developed a comprehensive strategy to address every
            aspect of your wholesale business for maximum growth
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={parentOpacity}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8  max-w-[1200px]  "
        >
          {features.map((item, index) => (
            <motion.div
              variants={childOpacity}
              className="flex text-start bg-white shadow-light px-3 py-5 md:pt-6 md:pb-10 rounded-xl gap-x-3 md:gap-x-4"
              key={index}
            >
              <p className="space-x-2 text-sm sm:text-base md:text-lg lg:text-xl">
                <span className="font-bold text-primary">{item.heading}</span>
                <span className="text-darkGray">{item.description}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
