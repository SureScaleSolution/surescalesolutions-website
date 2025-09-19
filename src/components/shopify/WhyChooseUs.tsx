import React from "react";
import { Heading2 } from "../common/Heading2";
import Image from "next/image";
import { motion } from "motion/react";
import { childTranslateY, fadeUp, parentTranslateY } from "../common/MotionFunctions";

export const WhyChooseUs = () => {
const features = [
  {
    icon: 1,
    title: "Proven Shopify Experts",
    description:
      "With years of hands-on experience across multiple niches, our team knows what it takes to build and scale successful stores.",
  },
  {
    icon: 2,
    title: "Data + Creativity",
    description:
      "We blend powerful analytics with innovative design thinking to deliver a store that's both visually engaging and performance-driven.",
  },
  {
    icon: 3,
    title: "Full-Service Approach",
    description:
      "From store setup to scaling strategies, we handle everything end-to-end so you can focus on growing your business.",
  },
  {
    icon: 4,
    title: "Performance-Focused",
    description:
      "We don’t just design; we focus on ROI, ensuring every step we take is aimed at boosting sales and long-term growth.",
  },
];
  return (
    <section className="w-full bg-gradient-to-b from-white via-background/50 to-background/50  ">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:py-16 lg:py-28 gap-y-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className=""
        >
          <Heading2 first="Why Choose SureScaleSolutions for Shopify?"  />
        </motion.div>
        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-x-8 md:gap-x-10 lg:gap-x-6"
        >
          {features.map((item, index) => (
            <motion.div
            variants={childTranslateY}
              key={index}
              className=" max-w-[420px] sm:w-full bg-white shadow-light flex flex-col items-center justify-center py-6 px-4 rounded-xl gap-y-5"
            >
              <div className="w-[75px]">
                <Image
                  src={`/shopify/why-choose-us/${item.icon}.svg`}
                  alt={`Icon ${item.icon}`}
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" flex flex-col justify-center text-center gap-y-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="flex-1 text-sm text-darkGray font-medium">
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
