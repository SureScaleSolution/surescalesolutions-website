import React from "react";
import Image from "next/image";
import { Heading2 } from "../common/Heading2";

import { motion } from "motion/react";

export const HeroPart2 = () => {
  const challenges = [
    {
      title: "Violation of Amazon’s Dropshipping Policy",
      description:
        "Using third-party retailers (like Walmart or Target) instead of direct suppliers results in packaging or invoices showing another retailer’s name, which Amazon forbids.",
    },
    {
      title: "Poor Inventory Management",
      description:
        "Without reliable supplier stock feeds, sellers oversell or list out-of-stock products, causing late shipment rates and order cancellations.",
    },
    {
      title: "Low Profit Margins",
      description:
        "High competition and Amazon fees often eat up profits, especially when sourcing from retail instead of wholesale.",
    },
    {
      title: "Slow Shipping Times",
      description:
        "Long delivery windows from overseas or unreliable suppliers lead to negative reviews and low seller ratings.",
    },
    {
      title: "Lack of Brand Approvals / Ungating",
      description:
        "Many dropshippers ignore category or brand restrictions, leading to blocked listings and wasted effort.",
    },
    {
      title: "Manual Operations",
      description:
        "Lack of automation leads to inconsistent order tracking, fulfillment errors, and time-draining administrative tasks.",
    },
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const TranlateY = {
    initial: {},
    final: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const childTranslateY = {
    initial: { y: 30, opacity: 0 },
    final: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 1 }}
        className="flex flex-col gap-y-8  md:gap-y-12"
      >
        <Heading2 first="Why most" center="Sellers" last="Struggle" />
        <p className="lg:max-w-4/5 mx-auto  w-full text-black text-xs md:text-sm lg:text-base ">
          Many sellers entering the Amazon FBM (Fulfilled by Merchant) or
          dropshipping model face a series of operational pitfalls that can
          severely impact performance and profitability:
        </p>
      </motion.div>
      <motion.div
      variants={TranlateY}
      initial="initial"
      whileInView="final"
      viewport={{ once: true, amount: 0.4 }}
       className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-7 gap-y-5 md:gap-8">
        {challenges.map((challenge, index) => (
          <motion.div
            variants={childTranslateY}
            key={index}
            className="bg-white flex py-4 px-2 rounded-lg gap-x-3 shadow-light"
          >
            <div className="min-w-5 md:w-8">
              <Image
                src={`/fbm-dropshipping/cross.svg`}
                alt={challenge.title}
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <div className="flex text-left flex-col gap-y-3">
              <h3 className="font-semibold">{challenge.title}</h3>
              <p className="text-sm text-black">{challenge.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
