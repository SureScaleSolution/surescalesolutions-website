import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  childTranslateY,
  fadeUp,
  parentTranslateY,
} from "../common/MotionFunctions";
import { EbayText } from "../common/EbayText";

export const EbayOptimization = () => {
  const services = [
    {
      icon: 1,
      iconColor: "#FFF6DD",
      title: "Audit",
      description: "Analyze your current eBay store and identify gaps.",
    },
    {
      icon: 2,
      iconColor: "#EAEFFF",
      title: "Strategy",
      description: "Build a tailored plan for branding, SEO, and visibility.",
    },
    {
      icon: 3,
      iconColor: "#DEFDE4",
      title: "Implementation",
      description: "Optimize listings, design, and policies.",
    },
    {
      icon: 4,
      iconColor: "#FFF0E9",
      title: "Monitoring",
      description: "Track results and refine strategies for long-term growth.",
    },
  ];
  return (
    <section className="w-full bg-white  ">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:py-16 lg:py-24 gap-y-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center gap-y-4 md:gap-y-5"
        >
          <h2 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center flex flex-wrap justify-center items-center gap-x-2">
            <span>Our</span>
            <EbayText />
            <span> Optimization Process</span>
          </h2>

          <p className="text-[10px] md:text-base lg:text-xl text-center text-darkGray">
            We offer three different models: Dropshipping, Private Label (PL),
            and Managed Private Label (MPL).
          </p>
        </motion.div>
        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-x-8 md:gap-x-10 lg:gap-x-4"
        >
          {services.map((item, index) => (
            <motion.div
              variants={childTranslateY}
              key={index}
              className=" max-w-[420px]  sm:w-full bg-white  flex flex-col items-center justify-center py-6 px-4  gap-y-5"
            >
              <div className="  flex items-center justify-center">
                <div 
                  className="w-16 h-16 p-3.5 rounded-full"
                  style={{ backgroundColor: item.iconColor }}
                >
                  <Image
                    src={`/ebay/optimization/${item.icon}.svg`}
                    alt={`Icon ${item.icon}`}
                    className="w-full h-full object-contain"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <div className=" flex flex-col justify-center text-center gap-y-4">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className=" text-base text-darkGray font-medium">
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
