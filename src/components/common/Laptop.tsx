import React from "react";
import Image from "next/image";
import { Button } from "../common/Button";
import { Heading2 } from "../common/Heading2";
import { motion } from "motion/react";
import { fadeUp, imageAnimation } from "./MotionFunctions";

export const Laptop = ({ location = "" }) => {


  return (
    <div className="flex flex-col px-6 sm:px-12 md:20 lg:px-32  items-center justify-center gap-y-6 md:gap-y-10 laptop-background-image py-12 md:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className=" z-0"
        viewport={{ once: true, amount: 1 }}
      >
        <Heading2 first="Have a Look on Sales snapshot" />
      </motion.div>
      <motion.div
        className="w-full z-10"
        variants={imageAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={`${location}`}
          alt="Sales snapshot"
          width={10000}
          className="w-full h-auto"
          height={10000}
        />
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className=" z-0"
        viewport={{ once: true, amount: 1 }}
      >
        <Button text="See More" />
      </motion.div>
    </div>
  );
};

// src="/fbm-dropshipping/laptop-fbm-dropshipping.svg"
