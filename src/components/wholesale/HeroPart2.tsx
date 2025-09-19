import React from "react";
import { Heading2 } from "../common/Heading2";
import Image from "next/image";
import { childTranslateY, fadeUp, parentTranslateY } from "../common/MotionFunctions";
import { motion } from "motion/react";
export const HeroPart2 = () => {
  const data = [
    {
      icon: "1",
      text: "Finding reliable and profitable brands, along with getting approvals for them, is one of the biggest hurdles for wholesale sellers.",
    },
    {
      icon: "2",
      text: "Many sellers struggle with fluctuating prices and unreliable supplier terms.",
    },
    {
      icon: "3",
      text: "Late shipments and stockouts negatively impact storage limits and account health.",
    },
    {
      icon: "4",
      text: "Many sellers fail to secure profitable deals due to aggressive competition and small margins.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-8 md:gap-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 pb-8 md:pb-12">
      <motion.div
        initial="hidden"
        variants={fadeUp}
        whileInView="visible"
        className="flex flex-col gap-y-5  md:gap-y-8"
      >
        <Heading2 first="Common Challenges We Solve" />
        <p className="lg:max-w-4/5 mx-auto  w-full text-black text-xs md:text-sm lg:text-base ">
          Many businesses face hurdles when trying to scale their wholesale
          operations. We&apos;re here to help you overcome them.
        </p>
      </motion.div>
      <motion.div
        initial="initial"
        variants={parentTranslateY}
        whileInView="final"
        viewport={{ once: true, amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-x-12 md:gap-x-20 lg:gap-x-10"
      >
        {data.map((item, index) => (
          <motion.div
          variants={childTranslateY}
            key={index}
            className=" max-w-[420px] sm:w-full bg-white flex flex-col items-center justify-center py-6 px-5 rounded-xl gap-y-5 shadow-light"
          >
            <div className="max-w-16">
              <Image
                src={`/wholesale/hero/${item.icon}.svg`}
                alt={`Icon ${item.icon}`}
                className="w-full h-auto"
                width={100}
                height={100}
              />
            </div>
            <p className="flex-1 text-xs md:text-sm font-medium">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
