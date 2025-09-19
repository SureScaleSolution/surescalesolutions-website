"use client"
import React from "react";
import { CaseStudyDocument } from "@/types/caseStudy";
import Image from "next/image";
import { motion } from "motion/react";
import { childOpacity, fadeUp, parentOpacity } from "../common/MotionFunctions";
import { Heading2 } from "../common/Heading2";

interface Props { caseStudy: CaseStudyDocument }
export const Approach: React.FC<Props> = ({ caseStudy }) => {
  const approachList = caseStudy.approach?.approachList || [];
  const isOdd = approachList.length % 2 !== 0;

  return (
    <section>
      <motion.div className="max-w-[1660px] mx-auto w-full  flex flex-col  pt-10 sm:pt-14 md:pt-20 lg:pt-28 pb-5 sm:pb-7 md:pb-10 lg:pb-12   bg-white px-4 sm:px-8 md:px-12 lg:px-16 gap-y-8 md:gap-y-10 lg:gap-y-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center justify-center gap-y-6 md:gap-10"
        >
          <Heading2 first="Our Approach" />
          <p className="text-center text-darkGray text-md md:text-lg lg:text-xl mx-auto max-w-[1100px]">
            {caseStudy.approach?.approachTitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={parentOpacity}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8  max-w-[1200px]  "
        >
          {approachList.map((approach, index) => (
            <motion.div
              variants={childOpacity}
              className={`flex text-start bg-white shadow-light px-3 py-5 md:pt-6 md:pb-10 rounded-xl gap-x-3 md:gap-x-4 ${
                isOdd && index === approachList.length - 1
                  ? "sm:col-span-2 sm:max-w-[50%] sm:mx-auto"
                  : ""
              }`}
              key={index}
            >
              <div className="min-w-8">
                <Image
                  src={`/case-studies/challenges-icon.svg`}
                  alt={"image"}
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-xs sm:text-sm md:text-base flex flex-col gap-y-2  ">
                <h3 className="font-bold">{approach.title}</h3>
                <p className="text-darkGray">{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
