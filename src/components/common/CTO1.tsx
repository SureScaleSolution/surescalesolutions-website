"use client"
import React from "react";
import { Heading2 } from "../common/Heading2";
import { Link3 } from "./Link3";
import { motion } from "motion/react";
import { fadeUp } from "./MotionFunctions";

export const CTO1 = ({
  first = "",
  center = "",
  last = "",
  description = "",
  textColor = "text-primary",
}) => {

  return (
    <section className="w-full bg-primary text-white ">
      <div className=" w-full  flex flex-col py-8  md:py-16  max-w-[900px] mx-auto px-6 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 1, once: true }}
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-6 md:gap-8 "
        >
          <Heading2
            first={first}
            center={center}
            last={last}
            textColor={textColor}
          />
          <p className="text-white/70 text-xs  sm:text-sm lg:text-lg text-center mb-2">
            {description}
          </p>
          <Link3 text="Book a Demo Call" to="/contact-us" />
        </motion.div>
      </div>
    </section>
  );
};
