"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeLeft, fadeRight } from "../common/MotionFunctions";

export default function Hero() {
  return (
    <>
      <div className="max-w-[1660px] mx-auto w-full px-4 space-y-12 py-8 sm:px-8 md:py-16 md:px-12 lg:px-20 lg:space-y-20">
        <motion.h1
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary text-center">
          Our Background
        </motion.h1>
        <div className="flex flex-col gap-8 md:flex-row md:items-center lg:gap-14 xl:gap-20">
          <div className="space-y-6 lg:text-xl w-full xl:text-2xl">
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="text-justify">
              At SureScale Solutions, we specialize in turning eCommerce dreams
              into thriving businesses. From launching new stores to scaling
              established brands, we help sellers grow across the world&apos;s
              leading marketplaces Amazon FBA & FBM, Walmart Marketplace, TikTok
              Shop, eBay, and Shopify.
            </motion.p>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="text-justify">
              With proven strategies and trusted partnerships, we&apos;ve
              successfully scaled stores from zero to $10M in sales, delivering
              measurable growth and long-term success.
            </motion.p>
          </div>
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="mx-auto w-2/3 h-auto sm:w-1/2">
            <Image
              src="/about-us/hero.svg"
              alt="about-us-hero"
              width={1200}
              height={600}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
