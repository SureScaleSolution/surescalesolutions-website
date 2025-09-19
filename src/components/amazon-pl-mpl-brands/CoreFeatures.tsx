import Image from "next/image";
import React from "react";
import { Heading2 } from "../common/Heading2";
import { Heading } from "../common/Heading";
import {
  childOpacity,
  childTranslateY,
  fadeUp,
  parentOpacity,
  parentTranslateY,
} from "../common/MotionFunctions";
import { motion } from "motion/react";

export const WhyUS = () => {
  const highlights = [
    "$25K – $200K in monthly sales growth within the first quarter",
    "Zero product compliance issues due to proactive brand & packaging guidance",
    "Top 10 search rankings for primary keywords within 60 days",
    "4.7★ average customer ratings maintained across multiple SKUs",
    "Stable profit margins even in competitive categories",
  ];

  const renderTextWithGoldenStar = (text: string) => {
    return text.split("★").map((part, index, array) => (
      <span key={index}>
        {part}
        {index < array.length - 1 && <span className="text-[#F6A61F]">★</span>}
      </span>
    ));
  };

  return (
    <div className="max-w-[1660px] mx-auto w-full  flex flex-col bg-background   px-6  sm:px-10 md:px-16 gap-y-8 md:gap-y-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col gap-y-5 md:gap-y-8"
      >
        <Heading first="We grow When " center="you grow" />
        <p className="text-darkGray text-xs sm:text-sm lg:text-base text-center">
          Here what our clients have achieved with our Amazon Private & Micro
          Label services{" "}
        </p>
      </motion.div>
      {/* Mobile view */}
      <motion.div
        variants={parentOpacity}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-1 gap-y-4 sm:hidden"
      >
        {highlights.map((text, i) => (
          <motion.div variants={childOpacity} key={i} className="flex gap-x-1 ">
            <div className=" max-h-7 w-auto">
              <Image
                src="/fbm-dropshipping/tick.svg"
                alt="Client Result"
                width={100}
                height={100}
                className="h-full w-auto"
              />
            </div>
            <div className="text-[10px] flex-1">
              {renderTextWithGoldenStar(text)}
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Desktop view */}
      <motion.div
        variants={parentOpacity}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        className="w-full grid-cols-2 gap-y-6 md:gap-y-8 gap-x-2 lg:gap-x-4 hidden sm:grid lg:max-w-[80%]  mx-auto"
      >
        {highlights.map((text, i) => (
          <motion.div
            variants={childOpacity}
            key={i}
            className={` w-full flex gap-x-2 md:gap-x-3 sm:px-4 md:px-6 xl:px-12 ${
              i === highlights.length - 1
                ? "col-span-2 flex items-center  max-w-[480px] mx-auto   "
                : "col-span-1  "
            }`}
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
              {renderTextWithGoldenStar(text)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
const services = [
  {
    icon: "1",
    title: "Niche Research & Market Analysis",
    description:
      "Data-driven product validation to find profitable, low-competition opportunities.",
  },
  {
    icon: "2",
    title: "Supplier Sourcing & Negotiation",
    description:
      "Connect with vetted manufacturers to ensure quality and cost efficiency.",
  },
  {
    icon: "3",
    title: "Branding & Packaging Design",
    description:
      "Create compliant, visually stunning packaging that stands out on Amazon.",
  },
  {
    icon: "4",
    title: "Launch & Scaling Strategies",
    description:
      "PPC campaigns, review generation, and ranking methods for fast sales growth.",
  },
];
export const CoreFeatures = () => {
  return (
    <section className="w-full core-features-mpl-pl-brands  ">
      {/* Part 1 */}
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:py-16 gap-y-12">
        <motion.div
          initial="hidden"
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <Heading2 first="Our Core Features" />
        </motion.div>
        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-x-12 md:gap-x-20 lg:gap-x-10"
        >
          {services.map((item, index) => (
            <motion.div
            variants={childTranslateY}
              key={index}
              className=" max-w-[420px] sm:w-full bg-white shadow-light flex flex-col items-center justify-center py-6 px-5 rounded-xl gap-y-5"
            >
              <div className="max-w-16">
                <Image
                  src={`/wholesale/hero/${item.icon}.svg`}
                  alt={`Icon ${item.icon}`}
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center text-center gap-y-4">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="flex-1 text-base text-darkGray font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Part 2 */}
      <WhyUS />
    </section>
  );
};
