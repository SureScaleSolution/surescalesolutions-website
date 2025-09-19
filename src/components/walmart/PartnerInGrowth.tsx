import React from "react";
import { Heading2 } from "../common/Heading2";
import Image from "next/image";
import { childOpacity, fadeUp, parentOpacity } from "../common/MotionFunctions";
import { motion } from "motion/react";
export const PartnerInGrowth = () => {
  const services = [
    {
      icon: 1,
      title: "End-to-End Management",
      description:
        "From product sourcing to customer service and account performance, we provide a complete hands-off solution while keeping you updated on Walmart’s policies.",
    },
    {
      icon: 2,
      title: "Platform Expertise",
      description:
        "Backed by years of specialized experience in navigating Walmart Marketplace complexities.",
    },
    {
      icon: 3,
      title: "Data-Driven Strategies",
      description:
        "A growth-focused, analytical approach tailored to maximize profitability and long-term success.",
    },
  ];

  return (
    <section className="w-full bg-background ">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:py-16 gap-y-18">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center gap-y-5 md:gap-y-8"
        >
          <Heading2 first="Your Partner in Growth" />

          <p className="max-w-[800px] text-sm sm:text-base md:text-lg text-center text-darkGray">
            We&apos;re more than a service provider, we&apos;re your dedicated
            team for Walmart success
          </p>
        </motion.div>
        <motion.div
          variants={parentOpacity}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:"
        >
          {services.map((item, index) => (
            <motion.div
              variants={childOpacity}
              key={index}
              className=" max-w-[420px] sm:w-full bg-white flex flex-col items-center justify-center py-6 px-5 rounded-lg md:rounded-2xl gap-y-5"
            >
              <div className=" w-[88px]">
                <Image
                  src={`/walmart/growth-partner/${item.icon}.svg`}
                  alt={`Icon ${item.icon}`}
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex  flex-col justify-center text-center gap-y-4">
                <h3 className="text-2xl flex-1 font-semibold">{item.title}</h3>
                <p className="flex-1 text-base text-darkGray font-medium ">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
