import React from "react";
import Image from "next/image";
import { Heading2 } from "../common/Heading2";
import { motion } from "motion/react";
import {
  childTranslateY,
  fadeUp,
  parentTranslateY,
} from "../common/MotionFunctions";

export const ShopifyServices = () => {
  const stats = [
    {
      icon: "1",
      title: "Shopify Store Setup & Configuration",
      description: [
        "Branded store setup tailored to your identity",
        "Secure payment gateways & shipping setup",
        "Navigation, product collections & catalog organization",
      ],
    },
    {
      icon: "2",
      title: "Custom Theme Design & Development",
      description: [
        "Mobile-first, responsive theme design",
        "UI/UX layouts built to maximize conversions",
        "Lightweight, fast-loading themes for performance",
      ],
    },
    {
      icon: "3",
      title: "Shopify SEO & Growth Optimization",
      description: [
        "SEO-friendly product pages & collections",
        "Advanced keyword research & ranking strategies",
        "On-page SEO & technical fixes to boost visibility",
      ],
    },
    {
      icon: "4",
      title: "Shopify App Integration & Custom Features",
      description: [
        "CRM, email & marketing automation integration",
        "Custom Shopify app development with unique features",
        "Analytics dashboards for data-driven decisions",
      ],
    },
    {
      icon: "5",
      title: "Conversion & Marketing Solutions",
      description: [
        "Sales funnel design & optimization",
        "Abandoned cart recovery campaigns",
        "Email, SMS & social media marketing automation",
        "Upsell & cross-sell strategies to increase AOV",
      ],
    },
    {
      icon: "6",
      title: "Shopify Maintenance & Support",
      description: [
        "Regular updates, bug fixes & security monitoring",
        "Store speed and performance optimization",
        "24/7 dedicated support team",
      ],
    },
  ];

  return (
    <section>
      <div className="maxw-[1660px] mx-auto flex flex-col items-center justify-center text-center gap-y-8 md:gap-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 py-6 sm:py-12 md:py-18 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col gap-y-3  md:gap-y-6"
        >
          <Heading2 first="Our Shopify Services" />
          <p className="lg:max-w-[1200px] mx-auto  w-full text-darkGray text-xs sm:text-sm md:text-lg lg:text-xl ">
            We don&apos;t just build stores we build profitable sales machines.
            At SureScale Solutions, our Shopify services are designed to set up,
            optimize, and scale your online store so you can focus on growth
            while we handle the rest.{" "}
          </p>
        </motion.div>
        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-7 gap-y-5 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              variants={childTranslateY}
              key={index}
              className="bg-white flex py-4 px-4 rounded-lg gap-x-3 md:gap-x-4 shadow-light"
            >
              <div className="min-w-5 md:w-8">
                <Image
                  src={`/shopify/shopify-services/${stat.icon}.svg`}
                  alt={stat.title}
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex text-left flex-col gap-y-3">
                <h3 className="font-semibold text-base">{stat.title}</h3>
                <div className="text-sm md:text-base text-darkGray">
                  {stat.description.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
