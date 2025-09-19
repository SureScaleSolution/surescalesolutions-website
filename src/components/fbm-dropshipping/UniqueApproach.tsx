import React from "react";
import Image from "next/image";
import { Heading2 } from "../common/Heading2";
import { motion } from "motion/react";
import {
  childTranslateY,
  fadeUp,
  parentTranslateY,
} from "../common/MotionFunctions";

export const UniqueApproach = () => {
  const features = [
    {
      icon: "1",
      title: "Authorized Distributor Partnerships",
      description:
        "We source exclusively from trusted suppliers like Essendant & S.P. Richards, ensuring all products are 100% genuine, fully compliant with Amazon policies, and backed by manufacturer warranties.",
    },
    {
      icon: "2",
      title: "Proven Sales Scaling Model",
      description:
        "From zero to $1M+ in sales, we have a track record of building profitable Amazon stores through data-driven strategies, optimized listings, and competitive pricing that wins the Buy Box.",
    },
    {
      icon: "3",
      title: "Store Optimization & Automation",
      description:
        "We streamline operations by implementing automation tools that manage inventory, pricing, and order processing giving you a hands-free, stress-free business experience.",
    },
    {
      icon: "4",
      title: "Fast & Reliable Fulfillment",
      description:
        "Our nationwide distribution network ensures faster delivery times, improved customer satisfaction, and stronger seller ratings helping you scale without risks.",
    },
  ];

  return (
    <section className="py-18 ">
      <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-y-8 md:gap-y-12"
        >
          <Heading2 first="Our" center="Unique" last="Approach" />
          <p className="lg:max-w-4/5 mx-auto w-full text-black text-sm md:text-base lg:text-lg">
            We approach Amazon FBM and dropshipping with a comprehensive,
            data-driven strategy designed to maximize scalability while
            minimizing risk:
          </p>
        </motion.div>

        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg:w-[70vw] mx-auto grid grid-cols-2 gap-4 sm:gap-8 md:gap-x-7 gap-y-5 md:gap-8 lg:max-w-[90%]  "
          >
          {features.map((feature, index) => (
            <motion.div
            variants={childTranslateY}
            viewport={{ once: true, amount: 1 }}
              key={index}
              className="bg-white flex flex-col justify-center items-center py-4 md:py-12 px-2 md:px-6 rounded-sm md:rounded-2xl gap-y-3 md:gap-y-7 shadow-light"
            >
              <div className="w-4 md:w-11 lg:w-15 ">
                <Image
                  src={`/fbm-dropshipping/uniqueApproach/${feature.icon}.svg`}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col text-center gap-y-2 md:gap-y-7 flex-1">
                <h3 className="font-semibold text-[10px] sm:text-base md:text-xl lg:text-2xl mx-auto max-w-4/5">
                  {feature.title}
                </h3>
                <p className="text-[8px] sm:text-sm md:text-base text-darkGray">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
