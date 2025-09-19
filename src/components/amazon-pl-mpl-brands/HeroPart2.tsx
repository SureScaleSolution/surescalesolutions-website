import React from "react";
import Image from "next/image";
import { Heading2 } from "../common/Heading2";
import { childOpacity, fadeUp, parentOpacity } from "../common/MotionFunctions";
import { motion } from "motion/react";

export const HeroPart2 = () => {
  const issues = [
    {
      icon: "1",
      heading: "High Competition & Low Differentiation",
      text: "Many PL and HPL products are in crowded categories, making it difficult to stand out without strong branding or marketing.",
    },
    {
      icon: "2",
      heading: "Poor Product Selection & Thin Margins",
      text: "Choosing low-demand products or those with small profit margins limits profitability.",
    },
    {
      icon: "3",
      heading: "Inventory & Cash Flow Issues",
      text: "Stockouts, overstocking, and high PPC spending negatively impact account health and sales.",
    },
    {
      icon: "4",
      heading: "Weak Marketing, Listings & Compliance",
      text: "Ineffective listings or policy violations can lead to low sales and potential account suspensions.",
    },
  ];

  return (
    <section className="py-8 md:py-12 ">
      <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-12 px-6 sm:px-12 ">
        <motion.div
          initial="hidden"
          variants={fadeUp}
          animate="visible"
          className="flex flex-col gap-y-8 md:gap-y-12"
        >
          <Heading2 first="Why PL & MPL Businesses Fail on Amazon" />
          <p className=" mx-auto w-full text-darkGray text-sm md:text-base text-center max-w-[1100px] ">
            Many sellers entering the Amazon FBM (Fulfilled by Merchant) or
            dropshipping model face a series of operational pitfalls that can
            severely impact performance and profitability:
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          variants={parentOpacity}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-[1200px]"
        >
          {issues.map((item, index) => (
            <motion.div
            variants={childOpacity}
              className="flex text-start bg-white shadow-light px-3 py-5 md:pt-6 md:pb-10 rounded-xl gap-x-3 md:gap-x-4"
              key={index}
            >
              <div className="min-w-8">
                <Image
                  src={`/pl-mpl-brands/hero/${item.icon}.svg`}
                  alt={item.heading}
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-xs sm:text-sm md:text-base  ">
                <h3 className="font-bold">{item.heading}</h3>
                <p className="text-darkGray">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
