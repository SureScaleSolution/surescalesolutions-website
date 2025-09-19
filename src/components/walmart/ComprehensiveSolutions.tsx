import React from "react";
import Image from "next/image";
import { Heading2 } from "../common/Heading2";
import { motion } from "motion/react";
import { childTranslateY, fadeUp, parentTranslateY } from "../common/MotionFunctions";

export const ComprehensiveSolutions = () => {
  const services = [
    {
      icon: 1,
      title: "Dropshipping",
      description:
        "Build a profitable Walmart dropshipping business without inventory risk, powered by our proven 2-step model.",
    },
    {
      icon: 2,
      title: "Wholesale via WFS",
      description:
        "Scale with bulk purchasing and Walmart Fulfillment Services (WFS) to maximize efficiency and sales growth.",
    },
    {
      icon: 3,
      title: "Ad Optimization",
      description:
        "Boost visibility with high-converting product listings and ad campaigns that deliver measurable results.",
    },
    {
      icon: 4,
      title: "Account Health Management",
      description:
        "Stay compliant with Walmart’s policies and safeguard your account with our expert monitoring and support.",
    },
  ];

  return (
    <section className="py-12 md:py-22 bg-white">
      <div className="flex flex-col items-center justify-center text-center gap-y-8 sm:gap-y-16 md:gap-y-24 lg:gap-y-32 px-6 sm:px-12 ">
        <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        className="flex flex-col gap-y-8 md:gap-y-16">

          <Heading2 first="Our Comprehensive" center=" Solutions" />
          <p className=" mx-auto w-full text-darkGray text-sm md:text-base ">
            We handle every aspect of your Walmart journey so you can focus on
            scaling your business with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-8   "
        >
          {services.map((service, index) => (
            <motion.div
              variants={childTranslateY}
              className="flex flex-col bg-white shadow-light px-4 md:px-7 py-5 md:pt-6 md:pb-10 rounded-xl gap-y-4 px"
              key={index}
            >
              <div className="flex items-center gap-x-3 md:gap-x-5">
                <div className="w-8 sm:w-12 lg:w-16">
                  <Image
                    src={`/walmart/comprehensive/${service.icon}.svg`}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
                <h3 className="font-semibold text-base md:text-xl lg:text-3xl">
                  {service.title}
                </h3>
              </div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl text-left ">
                <p className="text-darkGray">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
