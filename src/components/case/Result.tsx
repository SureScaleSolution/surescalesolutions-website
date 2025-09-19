"use client"
import React from "react";
import { CaseStudyDocument } from "@/types/caseStudy";
import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeUp,
  imageAnimation,
} from "../common/MotionFunctions";
import { Heading2 } from "../common/Heading2";

interface Props { caseStudy: CaseStudyDocument }
export const Result: React.FC<Props> = ({ caseStudy }) => {

  return (
    <section>
      <motion.div className="max-w-[1660px] mx-auto w-full  flex flex-col  pt-10 sm:pt-12 md:pt-16 lg:pt-18 pb-5 sm:pb-7 md:pb-10 lg:pb-12   bg-white px-4 sm:px-8 md:px-12 lg:px-16 gap-y-8 md:gap-y-12 lg:gap-y-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center justify-center gap-y-6 md:gap-10"
        >
          <Heading2 first="Result" />
          {caseStudy.result?.resultText && (
            <p className="text-center text-darkGray text-md md:text-lg lg:text-xl mx-auto max-w-[1100px]">{caseStudy.result.resultText}</p>
          )}
        </motion.div>
        <motion.div
          variants={imageAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7, once: true }}
          className="w-full border border-primary"
        >
          {caseStudy.result?.resultImageUrl && (
            <Image
              src={caseStudy.result.resultImageUrl}
              alt={"Result Image"}
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
