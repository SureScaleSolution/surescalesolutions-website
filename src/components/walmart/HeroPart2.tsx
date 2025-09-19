import React from "react";
import Image from "next/image";
import { Heading2 } from "../common/Heading2";
import { motion } from "motion/react";
import {
  childTranslateY,
  fadeUp,
  parentTranslateY,
} from "../common/MotionFunctions";

export const HeroPart2 = () => {
  const stats = [
    {
      icon: "1",
      title: "Revenue Growth",
      description:
        "Significant sales boost through WFS and Seller Fulfillment while maintaining strong account health.",
    },
    {
      icon: "2",
      title: "Refund Rate Reduction",
      description: (
        <>
          Dropped from <span className="text-primary font-bold">7% to 2%</span>{" "}
          with proactive quality control.
        </>
      ),
    },
    {
      icon: "3",
      title: "Faster Performance",
      description: (
        <>
          <span className="text-primary font-bold">65%</span> quicker order
          processing with optimized inventory and logistics.
        </>
      ),
    },
    {
      icon: "4",
      title: "Higher ROI",
      description:
        "Achieved 15–20% return on investment after inventory optimization.",
    },
    {
      icon: "5",
      title: "Seller Ranking",
      description: (
        <>
          Reached the Top <span className="text-primary font-bold">1%</span> in
          competitive categories with over{" "}
          <span className="text-primary font-bold">12,000+</span> orders
          processed.
        </>
      ),
    },
    {
      icon: "6",
      title: "Account Security",
      description: (
        <>
          <span className="text-primary font-bold">0%</span> account
          suspensions.
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        className="flex flex-col gap-y-3  md:gap-y-6"
      >
        <Heading2 first="Growth Results from Our" center="Walmart Clients" />
        <p className="lg:max-w- mx-auto  w-full text-darkGray text-xs sm:text-sm md:text-lg lg:text-xl ">
          Here&apos;s what our sellers have achieved within 90 days of
          partnering with us
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
              <p className="text-sm md:text-base text-darkGray">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
