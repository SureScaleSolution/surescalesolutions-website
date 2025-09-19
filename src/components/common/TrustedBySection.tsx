import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const trustedBy1 = ["1", "2", "3", "4", "5"];
const trustedBy2 = ["6", "7", "8", "9", "10"];

export const TrustedBySection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full  ">
      {/* Trusted by Section */}
      <div className="max-w-[1660px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center text-center  gap-y-4 md:gap-y-12 ">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.8 }}
          className="text-base sm:text-lg md:text-xl  text-[#7E7E7E] ">
          Trusted by major brands and Amazon FBA sellers
        </motion.p>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 1 }}
            className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
            {trustedBy1.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center h-4 md:h-8 lg:h-10 xl:h-12`}>
                  <Image
                    width={100}
                    height={100}
                    className="h-full w-auto object-contain"
                    src={`/home/trustedby/${item}.svg`}
                    alt={`Trusted Brand ${item}`}
                  />
                </div>
              );
            })}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 1 }}
            className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
            {trustedBy2.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center h-4 md:h-8 lg:h-10 xl:h-12`}>
                  <Image
                    width={100}
                    height={100}
                    src={`/home/trustedby/${item}.svg`}
                    alt={`Trusted Brand ${item}`}
                    className="h-full w-auto"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
