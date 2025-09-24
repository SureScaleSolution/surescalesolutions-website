import React from "react";
import { Heading2 } from "../common/Heading2";
import Image from "next/image";
import {
  childOpacity,
  childTranslateY,
  fadeUp,
  parentOpacity,
  parentTranslateY,
} from "../common/MotionFunctions";
import { motion } from "motion/react";

const WhyChooseUs = () => {
  const expertiseFeatures = [
    {
      icon: 1,
      title: "Platform-Specific Expertise",
      description:
        "We understand TikTok's algorithms, trends, and ad manager inside out.",
    },
    {
      icon: 2,
      title: "Creative That Converts",
      description:
        "Our content isn't just eye-catching; it's built to generate real sales.",
    },
    {
      icon: 3,
      title: "Performance-Driven",
      description:
        "Every strategy is focused on one outcome: growing your revenue.",
    },
  ];
  return (
    <section className="w-full  ">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:py-16 lg:py-20 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-18">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center gap-y-5 md:gap-y-8">
          <Heading2 first="Why Choose Us" />
        </motion.div>
        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {expertiseFeatures.map((feature, index) => (
            <motion.div
              variants={childTranslateY}
              key={index}
              className=" max-w-[420px] sm:w-full bg-white shadow-light flex flex-col items-center justify-center py-6 px-5 rounded-lg md:rounded-2xl gap-y-5">
              <div className=" w-[88px]">
                <Image
                  src={`/tiktok/why-choose-us/${feature.icon}.svg`}
                  alt={`Icon ${feature.icon}`}
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex  flex-col justify-center text-center gap-y-4">
                <h3 className="text-2xl flex-1 font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="flex-1 text-base text-darkGray font-medium ">
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

export const Outcomes = () => {
  const businessResults = [
    {
      title: "$0 to $200K+",
      heading: "Revenue Growth",
    },
    {
      title: "20%-30%",
      heading: "ROI Increased",
    },
    {
      title: "Stronger",
      heading: "Brand presence with optimized ads and product strategies",
    },
    {
      title: "Reduced",
      heading: "Significantly account suspensions",
    },
  ];
  return (
    <>
      <section className="w-full  outcomes-tiktok flex flex-col md:gap-y-4 py-8 bg-background">
        <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:py-16 lg:py-20 gap-y-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className="flex flex-col items-center gap-y-4 md:gap-y-5">
            <Heading2 first="Outcomes Our Clients See" />
            <p className="text-[10px] md:text-base lg:text-xl text-center text-darkGray">
              Within the first 90 days of working with us, clients have
              achieved:
            </p>
          </motion.div>
          <motion.div
            variants={parentOpacity}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-2 md:gap-8 sm:gap-x-4 sm:items-stretch">
            {businessResults.map((result, index) => (
              <motion.div
                variants={childOpacity}
                className="bg-white flex h-full flex-col text-left rounded-md md:rounded-xl p-4 md:p-6"
                key={index}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-2">
                  {result.title}
                </h3>
                <p className="flex-1 text-sm md:text-lg lg:text-xl text-black font-medium">
                  {result.heading}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Choose Us Part */}
      </section>
      <WhyChooseUs />
    </>
  );
};
