"use client";
import React from "react";
import { motion } from "motion/react";

export default function OurMission() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
        className="max-w-[1660px] mx-auto w-full px-4 space-y-12 py-12 sm:px-8 md:py-16 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary text-center">
          Our Mission
        </h1>
        <p className="mx-auto max-w-4xl border-2 border-primary text-lg p-4 text-center lg:p-8 lg:text-xl">
          Our mission is to empower businesses and entrepreneurs with innovative
          eCommerce solutions that ensure compliance, authenticity, and
          profitability. We are committed to building long-term partnerships
          with our clients and helping them achieve consistent growth across
          multiple online platforms.
        </p>
      </motion.div>
    </>
  );
}
