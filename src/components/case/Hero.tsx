"use client"
import React from "react";
import { CaseStudyDocument } from "@/types/caseStudy";
import Image from "next/image";
import { motion } from "motion/react";
import {  fadeRight, fadeUp } from "../common/MotionFunctions";
import { Heading2 } from "../common/Heading2";

interface Props { caseStudy: CaseStudyDocument }
export const Hero: React.FC<Props> = ({ caseStudy }) => {

  return (
    <section>
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col  py-10 sm:py-14 md:py-20 lg:py-24  bg-gradient-to-b from-background to-white px-4 sm:px-8 md:px-12 lg:px-16 gap-y-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col justify-center items-center  gap-y-4 md:gap-y-8  text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-semibold mb-4 text-secondary ">
            {caseStudy.caseStudyTitle}
          </h1>
          <p className="text-base md:text-xl lg:text-2xl  max-w-[1100px] mx-auto ">
            {caseStudy.caseStudySubtitle}
          </p>
          <div className="flex flex-col  md:flex-row gap-x-12 lg:gap-x-18 gap-y-8  mx-auto md:mx-0"></div>
        </motion.div>
        <div className="flex flex-col">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Heading2 first=" Client Background" />
          </motion.div>
          <div className="flex flex-col md:flex-row  items-center justify-center md:justify-around gap-x-4 gap-y-8 ">
            {/* Text */}
            <motion.p
              variants={{
                hidden: { 
                  opacity: 0, 
                  x: -50,
                  y: 0
                },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="hidden md:block text-base md:text-xl lg:text-2xl w-full max-w-[840px] text-center md:text-left text-darkGray"
            >
              {caseStudy.clientBackground}
            </motion.p>
            
            {/* Mobile version with different animation */}
            <motion.p
              variants={{
                hidden: { 
                  opacity: 0, 
                  x: 0,
                  y: 50
                },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="block md:hidden text-base md:text-xl lg:text-2xl w-full max-w-[840px] text-center md:text-left text-darkGray"
            >
              {caseStudy.clientBackground}
            </motion.p>
            {/* Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              className="w-[350px] "
            >
              <Image
                src={"/case-studies/case-client-background.svg"}
                alt="client background"
                width={800}
                height={600}
                quality={90}
                className="w-full h-auto"
              ></Image>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
