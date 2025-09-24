"use client"
import React from "react";
import { CaseStudyDocument } from "@/types/caseStudy";
import Image from "next/image";
import { motion } from "motion/react";
import { childOpacity, fadeUp, imageAnimation, parentOpacity } from "../common/MotionFunctions";
import { Heading2 } from "../common/Heading2";

interface Props { caseStudy: CaseStudyDocument }
export const Challenges: React.FC<Props> = ({ caseStudy }) => {
  const challengesList = caseStudy.challenges?.challengesList || [];
  const isOdd = challengesList.length % 2 !== 0;

  return (
    <section className="bg-background">
      <motion.div className="max-w-[1660px] mx-auto w-full  flex flex-col  pt-10 sm:pt-12 md:pt-16 lg:pt-18 pb-5 sm:pb-7 md:pb-10 lg:pb-12   px-4 sm:px-8 md:px-12 lg:px-16 gap-y-8 md:gap-y-12 lg:gap-y-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 1 }}
        >
          <Heading2 first="Challenges" />
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
              className={`flex text-start bg-white shadow-light px-3 py-5 md:pt-6 md:pb-10 rounded-xl gap-x-3 md:gap-x-4 ${
                isOdd && index === challengesList.length - 1
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
                <h3 className="text-primary font-bold">{challenge.title}</h3>
                <p className="text-darkGray">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={imageAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{amount:0.7 , once: true }}
          className="w-full border border-primary"
        >
          {caseStudy.challenges?.challengeImageUrl && (
            <Image
              src={caseStudy.challenges.challengeImageUrl}
              alt={"Challenge Image"}
              width={1200}
              height={675}
              sizes="(max-width: 1024px) 100vw, 1200px"
              quality={90}
              className="w-full h-auto"
            />
          )}

        </motion.div>
      </motion.div>

    </section>
  );
};
