import Image from "next/image";
import { Heading2 } from "../common/Heading2";
import { motion } from "motion/react";
import { childOpacity, fadeUp, parentOpacity } from "../common/MotionFunctions";

export const ClientResult = () => {
  const highlights = [
    "$0 → $250K+ in Monthly Sales – Scaling stores to $100K+ monthly revenue within the first year.",
    "15%–20%+ ROI – Achieving strong, consistent returns through compliant, data-driven sourcing.",
    "30% Faster Delivery – Leveraging a nationwide network of authorized distributors.",
    "80%+ Buy Box Win Rate – Powered by optimized listings and proactive account health strategies.",
    "100% Policy Compliance – Zero suspensions. Zero risk.",
  ];

  return (
    <section className="w-full bg-background">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col   px-6  sm:px-10 md:px-16 lg:max-w-[80%] gap-y-8 md:gap-y-12 py-12 sm:py-16 md:py-20 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-y-5 md:gap-y-8"
        >
          <Heading2 first="Client Results" />
          <p className="text-darkGray text-xs sm:text-sm lg:text-base text-center">
            Here&apos;s what our clients have achieved within their first 90
            days of working with us:
          </p>
        </motion.div>
        {/* Mobile view */}
        <motion.div
          variants={parentOpacity}
          initial="hidden"
                    viewport={{ once: true, amount: 0.5 }}

          whileInView="visible"
          className="grid grid-cols-1 gap-y-4 sm:hidden"
        >
          {highlights.map((text, i) => (
            <motion.div
              variants={childOpacity}
              key={i}
              className="flex gap-x-1 "
            >
              <div className=" max-h-7 w-auto">
                <Image
                  src="/fbm-dropshipping/tick.svg"
                  alt="Client Result"
                  width={100}
                  height={100}
                  className="h-full w-auto"
                />
              </div>
              <div className="text-[10px] flex-1">{text}</div>
            </motion.div>
          ))}
        </motion.div>
        {/* Desktop view */}
        <motion.div
          variants={parentOpacity}
          initial="hidden"
          viewport={{ once: true, amount: 1 }}
          whileInView="visible"
          className="w-full grid-cols-2 gap-y-8 xl:gap-y-10 gap-x-2 lg:gap-x-4 hidden sm:grid"
        >
          {highlights.map((text, i) => (
            <motion.div
              variants={childOpacity}
              key={i}
              className={` w-full flex gap-x-2 md:gap-x-3 ${
                i === highlights.length - 1
                  ? "col-span-2 flex items-center  max-w-[480px] mx-auto   "
                  : "col-span-1  "
              }`}
            >
              <div className=" max-h-7 w-auto">
                <Image
                  src="/fbm-dropshipping/tick.svg"
                  alt="Client Result"
                  width={100}
                  height={100}
                  className="h-full w-auto"
                />
              </div>
              <div className="text-xs base:text-sm lg:text-base flex-1">
                {text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
