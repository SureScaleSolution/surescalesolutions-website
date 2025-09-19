import React from "react";

import AnimatedCounter from "../common/AnimatedCounter";
import { Heading } from "@/components/common/Heading";
import { motion } from "motion/react";
import { fadeUp } from "../common/MotionFunctions";
export const ClientTrust = () => {

  return (
    <section className="w-full  bg-background ">
      <div className="flex flex-col max-w-[1660px] mx-auto w-full px-4 sm:px-8  py-8 gap-y-12">
        {/* First half */}
        <div className="flex flex-col items-center gap-y-5 md:gap-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            <Heading first="Why Clients" center="Trust" last="Us" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className="max-w-[800px] text-sm sm:text-base md:text-lg text-center text-darkGray"
          >
            We deliver results with transparency, dedication, and proven
            expertise, backed by real success stories and long-term
            partnerships.
          </motion.p>
        </div>

        {/* second half */}
        <div className=" flex flex-col md:flex-row items-center justify-center gap-x-8 lg:gap-x-12 xl:gap-x-20">
          <div className="flex flex-col">
            <AnimatedCounter char={"+"} value={100} duration={4} />
            <span className="text-darkGray font-light">Order Managed</span>
          </div>
          <div className="flex flex-col">
            <AnimatedCounter char={"%"} value={98} duration={2} />
            <span className="text-darkGray font-light">
              Client Retention Rate
            </span>
          </div>
          <div className="flex flex-col">
            <AnimatedCounter char={"+"} value={19} duration={4} />
            <span className="text-darkGray font-light">Brands Served</span>
          </div>
          <div className="flex flex-col">
            <AnimatedCounter char={"+"} value={30} duration={3} />
            <span className="text-darkGray font-light">Team Members</span>
          </div>
        </div>
      </div>
    </section>
  );
};
