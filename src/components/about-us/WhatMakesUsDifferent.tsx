"use client";
import React from "react";
import DifferenceCard from "./DifferenceCard";
import { motion } from "motion/react";
import { fadeUp } from "../common/MotionFunctions";

const differences = [
  {
    title: "Authenticity & Compliance",
    description:
      "We source through leading distributors like Essendant and SP Richards to ensure quality and marketplace approval.",
    icon: "/about-us/1.svg",
  },
  {
    title: "Multi-Platform Expertise",
    description:
      "Amazon, Walmart, TikTok Shop, eBay, or Shopify — we know how to make each platform work for you.",
    icon: "/about-us/2.svg",
  },
  {
    title: "Full-Service Approach",
    description:
      "From product sourcing and brand approvals to account management and fulfillment, we handle it all.",
    icon: "/about-us/3.svg",
  },
  {
    title: "Growth-Driven Results",
    description:
      "Our mission is simple to help you build sustainable revenue and scale confidently.",
    icon: "/about-us/4.svg",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <>
      <div className="max-w-[1660px] mx-auto w-full px-4 space-y-12 py-12 sm:px-8 md:py-16 md:px-12 lg:px-20 lg:space-y-20">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary text-center">
          What makes us different?
        </motion.h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
          {differences.map((diff, index) => (
            <DifferenceCard
              key={index}
              title={diff.title}
              description={diff.description}
              icon={diff.icon}
            />
          ))}
        </div>
        <p className="text-lg text-center lg:text-xl">
          At{" "}
          <span className="text-primary font-semibold">
            SureScale Solutions
          </span>
          , we don&apos;t just manage stores we build success stories.
        </p>
      </div>
    </>
  );
}
