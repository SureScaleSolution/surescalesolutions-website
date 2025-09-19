import React from "react";

import AnimatedCounter from "../common/AnimatedCounter";
import { fadeUp } from "../common/MotionFunctions";
import { motion } from "motion/react";
import { Heading2 } from "../common/Heading2";

export const Outcomes = () => {
  return (
    <section className="w-full  bg-background">
      <div className="flex flex-col max-w-[1660px] mx-auto w-full px-6 sm:px-12  py-14 md:py-28 gap-y-12">
        {/* First half */}
        <motion.div
          initial="hidden"
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col items-center gap-y-5 md:gap-y-8"
        >
          <Heading2 first="Outcomes that Matter " />
          <p className="max-w-[800px] text-sm sm:text-base md:text-lg text-center text-darkGray">
            Here&apos;s what our clients have achieved within their first 90 days of
            working with us:{" "}
          </p>
        </motion.div>

        {/* second half */}
        <div className=" flex flex-col md:flex-row items-center justify-center gap-x-8 lg:gap-x-12 xl:gap-x-20 font-bold gap-y-6">
          <div className="flex flex-col">
            <AnimatedCounter char={"x"} value={32} duration={2} />
            <span className="max-w-[200px] text-center flex-1 text-darkGray font-light">
              Growth in Conversions <br />
              Through optimized UI/UX design and high-performing sales funnels.{" "}
            </span>
          </div>
          <div className="flex flex-col">
            <AnimatedCounter char={"%"} value={40} duration={2.5} />
            <span className="max-w-[200px] text-center flex-1 text-darkGray font-light">
              Increase in Profits <br />
              By implementing smarter pricing, sourcing, and upsell strategies.{" "}
            </span>
          </div>
          <div className="flex flex-col">
            <AnimatedCounter char={"%"} value={25} duration={3} />
            <span className="max-w-[200px] text-center flex-1 text-darkGray font-light">
              Faster Site Speed <br />
              Resulting in lower bounce rates and higher sales.{" "}
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[40px] text-primary font-semibold">
              {" "}
              Recovery
            </h3>
            <span className="max-w-[200px] text-center flex-1 text-darkGray font-light">
              Of Lost Sales <br />
              With abandoned cart recovery campaigns and automated email flows.{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
