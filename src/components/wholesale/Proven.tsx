import React from "react";
import Image from "next/image";
import { Heading2 } from "../common/Heading2";

import { motion } from "motion/react";
import { childOpacity, fadeUp, parentOpacity } from "../common/MotionFunctions";
export const Proven = () => {
  const data = [
    {
      icon: "1",
      heading: "Brand Sourcing:",
      text: "We work directly with verified brands and authorized distributors to ensure consistent pricing, authentic products, and smooth approvals.",
    },
    {
      icon: "2",
      heading: "Dynamic Inventory Management:",
      text: "Advanced tools help us track stock levels and order trends to prevent stockouts and maintain healthy account metrics.",
    },
    {
      icon: "3",
      heading: "Competitive Pricing & Margin Analysis:",
      text: "We analyze the market to secure profitable deals and negotiate favorable terms, even in competitive environments.",
    },
    {
      icon: "4",
      heading: "Reliable Logistics & Fulfilment:",
      text: "Trusted courier partners and careful fulfillment processes ensure timely deliveries and reduce delays.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-14 px-6 sm:px-12 ">
        <motion.div
          initial="hidden"
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col gap-y-8 md:gap-y-12"
        >
          <Heading2 first="Our Proven Strategy" />
          <p className=" mx-auto w-full text-darkGray text-sm md:text-base ">
            We&apos;ve developed a comprehensive strategy to address every
            aspect of your wholesale business for maximum growth
          </p>
        </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={parentOpacity}
        viewport={{once: true, amount: 0.5}}
         className="w-full lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8  max-w-[1200px]  ">
          {data.map((item, index) => (
            <motion.div
            variants={childOpacity}
              className="flex text-start bg-white shadow-light px-3 py-5 md:pt-6 md:pb-10 rounded-xl gap-x-3 md:gap-x-4"
              key={index}
            >
              <div className="min-w-8">
                <Image
                  src={`/wholesale/proven/${item.icon}.svg`}
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
