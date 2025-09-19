import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import {
  childTranslateY,
  fadeUp,
  parentTranslateY,
} from "../common/MotionFunctions";

const features = [
  {
    title: "Market Intelligence",
    description:
      "Uncover profitable niches, keyword trends, and competitor weaknesses using advanced analytics.",
    icon: "icon1",
  },
  {
    title: "Precision-Led Ad Strategy",
    description:
      "Maximize ROI with data-backed PPC, DSP, and advanced retargeting campaigns.",
    icon: "icon2",
  },
  {
    title: "Full-Funnel Optimization",
    description:
      "We don't just launch products, we grow brands. From listings to reviews to storefronts, we manage it all.",
    icon: "icon3",
  },
];

export const StrategyToGrowth = () => {
  return (
    <section>
      <div className="max-w-[1660px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-24 flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-16 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center justify-center text-center gap-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-nowrap font-semibold">
            From Strategy to Growth
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#] max-w-[500px] md:max-w-[650px] lg:max-w-[850px]">
            Visibility fuels growth. Our Amazon strategy framework unlocks deep
            insights to accelerate your brand’s performance from product
            visibility to total channel domination.
          </p>
        </motion.div>
        {/* Features Boxes */}
        <motion.div
          initial="initial"
          whileInView="final"
          variants={parentTranslateY}
          viewport={{ once: true, amount: 1 }}
          className="flex gap-x-2 md:gap-x-4  lg:gap-x-12"
        >
          {features.map((item, index) => (
            <motion.div
              variants={childTranslateY}
              key={index}
              className="w-1/3 flex flex-col items-center justify-center gap-y-4 md:gap-y-8 bg-white  rounded-lg md:rounded-2xl py-4 px-1 sm:px-3 sm:py-6 md:px-5 md:py-8 text-center shadow-light"
            >
              <div className=" flex-1 w-[17px] sm:w-6 md:w-12 lg:w-14 h-auto">
                <Image
                  src={`/home/features/${item.icon}.svg`}
                  alt={item.title}
                  width={30}
                  className="w-full h-auto object-contain"
                  height={30}
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-semibold ">
                {item.title}
              </h3>
              <p className="text-[8px] sm:text-[10px] md:text-sm lg:text-base text-darkGray">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
