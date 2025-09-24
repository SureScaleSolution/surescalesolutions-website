"use client"
import React from "react";
import { CaseStudyDocument } from "@/types/caseStudy";
import { motion } from "motion/react";
import Image from "next/image";
import { Heading2 } from "../common/Heading2";
import { fadeUp } from "../common/MotionFunctions";

interface Props { caseStudy: CaseStudyDocument }
export const Testimonial: React.FC<Props> = ({ caseStudy }) => {
  return (
    <section className="bg-white">
      <motion.div className="max-w-[1660px] mx-auto w-full  flex flex-col pt-16 md:pt-24 lg:pt-30  ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="py-10"
        >
          <Heading2 first="Client Testimonial" />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col   shadow-dark px-6 mb-12 rounded-xl "
        >
          <div className="flex flex-col w-full max-w-[980px] py-10 md:py-16 lg:py-20  mx-auto gap-y-5 md:gap-y-8">
            {/* stars */}
            <div className="flex justify-center  gap-x-2 w-7 md:w-10 h-auto  items-center mx-auto ">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/case-studies/star-case.svg"
                  className="w-full h-auto"
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            {/* Text */}
            {caseStudy.testimonial?.testimonialText && (
              <p className="text-sm md:text-lg  lg:text-xl text-darkGray  flex-1 mb-4">
                {caseStudy.testimonial.testimonialText}
              </p>
            )}
            <div className="flex items-center  justify-between">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center w-7 h-7 md:w-13 md:h-13 border-3 rounded-full border-primary p-0.5 ">
                  <Image
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                    alt={"Customer Image"}
                    className="rounded-full w-full h-auto object-cover"
                    width={64}
                    height={64}
                    unoptimized
                  />
                </div>
                <span className="text-sm md:text-2xl text-medium text-black">
                  {caseStudy.testimonial?.testimonialTitle || "Client"}
                </span>
              </div>
              {/* 2nd half */}
              <div className="w-5 h-auto md:w-10   ">
                <Image
                  src="/case-studies/double-quotation.svg"
                  alt="Double Quotation Mark"
                  className=" w-full h-auto object-contain"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
