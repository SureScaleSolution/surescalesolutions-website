import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  childTranslateY,
  fadeUp,
  parentTranslateY,
} from "../common/MotionFunctions";
import { EbayText } from "../common/EbayText";

export const HeroPart2 = () => {
  const stats = [
    {
      icon: 1,
      title: "Store Setup & Branding:",
      description: [
        "Professional eBay storefront design.",
        "Custom banners, logos, and branded layouts.",
        "Organized category structure for easy navigation.",
      ],
    },
    {
      icon: 2,
      title: "Listing Optimization:",
      description: [
        "SEO-friendly product titles and descriptions.",
        "High-quality product images and videos.",
        "Optimized item specifics to rank higher in eBay search.",
        "A/B testing of listings to maximize conversions.",
      ],
    },
    {
      icon: 3,
      title: "Pricing & Competitor Analysis:",
      description: [
        "Market research to find profitable price points.",
        "Competitor benchmarking for better positioning.",
        "Dynamic pricing strategies to boost sales and margins.",
      ],
    },
    {
      icon: 4,
      title: "Enhanced Product Visibility:",
      description: [
        "eBay Promoted Listings setup and optimization.",
        "Keyword-rich tags and descriptions for top search ranking.",
        "Cross-selling and up-selling integration.",
      ],
    },
    {
      icon: 5,
      title: "Policy & Compliance Alignment:",
      description: [
        "Ensure store policies (shipping, returns, payment) align with eBay standards.",
        "Avoid violations and maintain healthy account performance.",
      ],
    },
    {
      icon: 6,
      title: "Performance Monitoring & Growth:",
      description: [
        "Monthly performance reports (traffic, conversion, sales).",
        "Continuous improvements based on data-driven insights.",
        "Strategies for scaling with new categories and products.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center md:pt-6 gap-y-8 md:gap-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        className="flex flex-col gap-y-3  md:gap-y-6"
      >
          <h2 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center flex flex-wrap justify-center items-center gap-x-2">
            <span>Our</span>
            <EbayText />
            <span>Store Optimization Matters</span>
          </h2>
        <p className="lg:max-w- mx-auto  w-full text-darkGray text-xs sm:text-sm md:text-lg lg:text-xl ">
          Transform your eBay store into a high-performing sales machine.
        </p>
      </motion.div>
      <motion.div
        variants={parentTranslateY}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-7 gap-y-5 md:gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            variants={childTranslateY}
            key={index}
            className="bg-white flex py-4 px-4 rounded-lg gap-x-3 md:gap-x-4 shadow-light"
          >
            <div className="min-w-5 md:w-8">
              <Image
                src={`/walmart/hero/${stat.icon}.svg`}
                alt={stat.title}
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <div className="flex text-left flex-col gap-y-3">
              <h3 className="font-semibold text-base">{stat.title}</h3>
              <div className="text-sm md:text-base text-darkGray ">
                {Array.isArray(stat.description) ? (
                  stat.description.map((line, lineIndex) => (
                    <div key={lineIndex}>{line}</div>
                  ))
                ) : (
                  <div>{stat.description}</div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
