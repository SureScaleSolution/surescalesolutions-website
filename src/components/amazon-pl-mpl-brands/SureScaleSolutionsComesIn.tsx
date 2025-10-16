import React from "react";
import { Heading2 } from "../common/Heading2";
import { motion } from "motion/react";
import Image from "next/image";
import {
  childTranslateY,
  fadeUp,
  parentTranslateY,
} from "../common/MotionFunctions";

const Component = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="final"
      variants={parentTranslateY}
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2  gap-4"
    >
      {data.map((item, index) => (
        <motion.div
          variants={childTranslateY}
          key={index}
          className="bg-white flex-col flex rounded-xl py-5 pl-4 pr-6 md:py-8 md:pl-7 md:pr-9 gap-y-4 shadow-light"
        >
          <div className="flex items-center gap-x-4">
            <div className="w-8 md:w-11 lg:w-15 h-auto">
              <Image
                src={`/pl-mpl-brands/SureScaleSolutionsComesIn/${item.icon}.svg`}
                alt={item.title}
                width={100}
                className="w-full h-auto"
                height={100}
              />
            </div>
            <h3 className="text-black font-bold text-xl md:text-2xl">
              {item.title}
            </h3>
          </div>
          <ul className="flex flex-col justify-center items-start gap-y-2 md:gap-y-4 md:mt-2">
            {item.benefits.map((benefit, index) => (
              <li key={index} className="flex gap-x-3 md:gap-x-4">
                <div className="h-5 sm:h-7 md:h-9 w-auto">
                  <Image
                    src={"/pl-mpl-brands/SureScaleSolutionsComesIn/tick.svg"}
                    alt={benefit.title}
                    width={100}
                    height={100}
                    className="h-full w-auto"
                  />
                </div>
                <p className="  space-x-2 md:space-x-3">
                  <span className="text-black font-bold text-base text-nowrap md:text-xl">
                    {benefit.title}
                  </span>
                  <span className="text-darkGray text-[10px] sm:text-xs md:text-base">
                    {benefit.description}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <div className="pl-5 md:pl-8">
            <p className="space-x-3">
              <span className=" font-bold text-primary">Example:</span>
              <span className="text-darkGray text-[10px] sm:text-xs md:text-sm">
                Selling a specific type of phone case or unique pet toy within a
                niche market.
              </span>
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Component;

const data = [
  {
    icon: "1",
    title: "Private Label (PL) Benefits",
    benefits: [
      {
        title: "Brand Development:",
        description:
          "Build a unique brand that reflects your vision and connects with customers.",
      },
      {
        title: "Product Control:",
        description:
          "Own full control over product design, quality, and overall messaging.",
      },
      {
        title: "Profitability:",
        description:
          "Achieve higher margins compared to reselling existing products.",
      },
      {
        title: "Market Differentiation:",
        description: "Target specific niches to meet unique customer demands.",
      },
    ],
    example:
      "Walmart's Great Value, Target's Goodfellow & Co., Amazon's Amazon Basics.",
  },
  {
    icon: "2",
    title: "Micro Private Label (MPL) Advantages",
    benefits: [
      {
        title: "Smaller Scale:",
        description:
          "Focus on niche product lines with lower upfront investment.",
      },
      {
        title: "Niche Focus:",
        description:
          "Cater to specialized markets with unique product offerings.",
      },
      {
        title: "Lower Risk:",
        description:
          "Reduce costs testing the private label market without massive inventory.",
      },
      {
        title: "Faster Launch:",
        description: "Achieve quicker time-to-market thanks to smaller scope.",
      },
    ],
    example:
      "Selling a specific type of phone case or unique pet toy within a niche market.",
  },
];
export const SureScaleSolutionsComesIn = () => {
  return (
    <section className="w-full  bg-white">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:pb-16  md:pt-10 gap-y-8 md:gap-y-12">
        <div className="flex flex-col gap-y-4 md:gap-y-8">
          <motion.div
            initial="hidden"
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            <Heading2 first="Where SureScaleSolutions Comes In" />
          </motion.div>
          <motion.p
            initial="hidden"
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className=" mx-auto w-full text-darkGray text-xs md:text-base text-center max-w-[900px] leading-8"
          >
            We provide end-to-end{" "}
            <span className="font-bold text-black">
              Private Label (PL) and Micro Private Label (MPL)
            </span>{" "}
            brand support,from identifying the right niche to sourcing,
            branding, packaging, launching, and scaling your Amazon business.
            <br />
            <br />
            Our approach combines market data analysis, creative branding, and
            proven launch strategies to help your products stand out from the
            competition. We also optimize Amazon PPC campaigns to deliver
            low-cost, high-value results for maximum profitability.
          </motion.p>
        </div>
        <div>
          <Component />
        </div>
      </div>
    </section>
  );
};
