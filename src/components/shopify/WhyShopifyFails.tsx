import React from "react";
import { Heading2 } from "../common/Heading2";
import Image from "next/image";
import { motion } from "motion/react";
import {
  childTranslateY,
  fadeUp,
  parentTranslateY,
} from "../common/MotionFunctions";

export const WhyShopifyFails = () => {
  const services = [
    {
      icon: 1,
      title: "Poor store design with low conversion rates",
    },
    {
      icon: 2,
      title: "Slow, unoptimized websites driving customers away",
    },
    {
      icon: 3,
      title: "Weak SEO → products never show up on Google or Shopify search",
    },
    {
      icon: 4,
      title: "Abandoned carts left unrecovered",
    },
    {
      icon: 1,
      title: "Generic branding that doesn’t connect with customers",
    },
    {
      icon: 1,
      title: "No ongoing support or growth strategy",   
    },
  ];
  return (
    <section className="w-full bg-gradient-to-b ">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:py-16 gap-y-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center gap-y-4 md:gap-y-5"
        >
          <Heading2 first="Why Many Shopify Stores Fail" />
          <p className="text-[10px] md:text-sm lg:text-base  text-center text-darkGray">
            Many businesses face challenges when trying to scale their wholesale
            operations. We&apos;re here to help you overcome them.
          </p>
        </motion.div>
        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 mx-auto sm:grid-cols-3  gap-3 md:gap-7 lg:gap-10"
        >
          {services.map((item, index) => (
            <motion.div
              variants={childTranslateY}
              key={index}
              className=" max-w-[280px] sm:w-full bg-white shadow-light flex flex-col items-center justify-center py-6 px-4 rounded-xl gap-y-5"
            >
              <div className="w-8 sm:w-10 md:w-12 lg:w-15 h-auto ">
                <Image
                  src={`/shopify/why-shopify-fails/${item.icon}.svg`}
                  alt={`Icon ${item.icon}`}
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
                <p className="flex-1 text-xs md:text-sm text-darkGray font-medium text-center">
                  {item.title}
                </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
