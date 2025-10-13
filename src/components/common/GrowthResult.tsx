import React from "react";
import { Heading2 } from "./Heading2";
import { motion } from "motion/react";
import { childOpacity, fadeUp, parentOpacity } from "./MotionFunctions";

export const GrowthResult = () => {
  const results = [
    {
      title: "Authorized Account Management",
      description:
        "We manage accounts through trusted U.S.-based distribution channels like Essendant and SP Richards, ensuring full compliance with marketplace policies.",
    },
    {
      title: "20%+ Return On Investment",
      description:
        "Achieved by leveraging fully compliant sourcing and promotional strategies.",
    },
    {
      title: "99% Reduction in Violations",
      description:
        "Through preventive compliance audits and tailored seller guidelines that protect accounts from repeat suspensions.",
    },
    {
      title: "Sustainable Sales Growth",
      description:
        "Consistent growth across Amazon, Walmart, TikTok Shop, eBay, and Shopify, backed by strategies designed for long-term account stability.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-12 px-6 sm:px-12">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col gap-y-4 md:gap-y-6">
          <Heading2
            center="Growth Results After Reinstatement"
            textColor="text-secondary"
          />
          <p className="text-sm md:text-lg lg:text-xl text-black max-w-[800px] mx-auto text-center">
            At{" "}
            <span className="text-primary font-semibold">
              SureScaleSolution
            </span>
            , reinstatement is just the beginning we focus on long-term growth
            and compliance:
          </p>
        </motion.div>

        {/* Results Grid - Large screen*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={parentOpacity}
          viewport={{ once: true, amount: 0.6 }}
          className="hidden lg:grid w-full max-w-[1400px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((result, index) => (
            <motion.div
              variants={childOpacity}
              className="  px-4 md:px-6 text-center flex flex-col gap-y-3 md:gap-y-4"
              key={index}>
              <h3 className="font-bold text-primary text-base md:text-lg lg:text-xl">
                {result.title}
              </h3>
            </motion.div>
          ))}
          {results.map((result, index) => (
            <motion.div
              variants={childOpacity}
              className="  px-4 md:px-6 text-center flex flex-col gap-y-3 md:gap-y-4"
              key={index}>
              <p className="text-black text-xs md:text-sm leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        {/* Results Grid - Medium screen*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={parentOpacity}
          viewport={{ once: true, amount: 0.6 }}
          className="hidden sm:grid lg:hidden w-full max-w-[1400px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.slice(0, 2).map((result, index) => (
            <motion.div
              variants={childOpacity}
              className="  px-4 md:px-6 text-center flex flex-col gap-y-3 md:gap-y-4"
              key={index}>
              <h3 className="font-bold text-primary text-base md:text-lg lg:text-xl">
                {result.title}
              </h3>
            </motion.div>
          ))}
          {results.slice(0, 2).map((result, index) => (
            <motion.div
              variants={childOpacity}
              className="  px-4 md:px-6 text-center flex flex-col gap-y-3 md:gap-y-4 mb-8"
              key={index}>
              <p className="text-black text-xs md:text-sm leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
          {results.slice(2, 5).map((result, index) => (
            <motion.div
              variants={childOpacity}
              className="  px-4 md:px-6 text-center flex flex-col gap-y-3 md:gap-y-4"
              key={index}>
              <h3 className="font-bold text-primary text-base md:text-lg lg:text-xl">
                {result.title}
              </h3>
            </motion.div>
          ))}
          {results.slice(2, 5).map((result, index) => (
            <motion.div
              variants={childOpacity}
              className="  px-4 md:px-6 text-center flex flex-col gap-y-3 md:gap-y-4"
              key={index}>
              <p className="text-black text-xs md:text-sm leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Grid - Small screen*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={parentOpacity}
          viewport={{ once: true, amount: 0.6 }}
          className="grid sm:hidden mx-auto grid-cols-1 gap-10">
          {results.map((result, index) => (
            <motion.div
              variants={childOpacity}
              className="  px-4 md:px-6 text-center flex flex-col gap-y-3 md:gap-y-4"
              key={index}>
              <h3 className="font-bold text-primary text-base md:text-lg lg:text-xl">
                {result.title}
              </h3>
              <p className="text-black text-xs md:text-sm leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
