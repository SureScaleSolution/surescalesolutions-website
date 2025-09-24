"use client"
import React from "react";
import { CaseStudyDocument } from "@/types/caseStudy";
import { motion } from "motion/react";
import { childOpacity, fadeUp, parentOpacity } from "../common/MotionFunctions";
import { Heading2 } from "../common/Heading2";

interface Props { caseStudy: CaseStudyDocument }
export const Impact: React.FC<Props> = ({ caseStudy }) => {
  const challengesList = caseStudy.impact?.impactList || [];
  const isOdd = challengesList.length % 2 !== 0;

  return (
    <section className="bg-gradient-to-b from-white to-background">
      <motion.div className="max-w-[1660px] mx-auto w-full  flex flex-col  pt-10 sm:pt-14 md:pt-20 lg:pt-24 pb-5 sm:pb-7 md:pb-10 lg:pb-12 px-4 sm:px-8 md:px-12 lg:px-16 gap-y-8 md:gap-y-12 lg:gap-y-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center justify-center gap-y-6 md:gap-10"
        >
          <Heading2 first="The" center="Impact" textColor="text-primary" />
          <p className="text-center text-darkGray text-md md:text-lg lg:text-xl mx-auto max-w-[1100px]">
            {caseStudy.impact?.impactTitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={parentOpacity}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8  max-w-[1200px]  "
        >
          {challengesList.map((challenge, index) => (
            <motion.div
              variants={childOpacity}
              className={`flex flex-col text-start bg-white shadow-light px-5 py-5 md:pt-6 md:pb-10 rounded-xl gap-y-3 md:gap-y-4 ${
                isOdd && index === challengesList.length - 1
                  ? "sm:col-span-2 sm:max-w-[50%] sm:mx-auto"
                  : ""
              }`}
              key={index}
            >
              <h3 className=" text-lg md:text-xl lg:text-2xl font-semibold">
                {challenge.title}
              </h3>
              <p className="text-darkGray text-md md:text-lg">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
