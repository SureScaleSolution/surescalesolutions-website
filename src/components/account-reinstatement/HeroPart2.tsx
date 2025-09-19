import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  childTranslateY,
  parentTranslateY,
} from "../common/MotionFunctions";

const Component = () => {
  // const data = [
  //   {
  //     icon: "1",
  //     title: "Private Label (PL) Benefits",
  //     benefits: [
  //       {
  //         title: "Brand Development:",
  //         description:
  //           "Build a unique brand that reflects your vision and connects with customers.",
  //       },
  //       {
  //         title: "Product Control:",
  //         description:
  //           "Own full control over product design, quality, and overall messaging.",
  //       },
  //       {
  //         title: "Profitability:",
  //         description:
  //           "Achieve higher margins compared to reselling existing products.",
  //       },
  //       {
  //         title: "Market Differentiation:",
  //         description:
  //           "Target specific niches to meet unique customer demands.",
  //       },
  //     ],
  //     example:
  //       "Walmart's Great Value, Target's Goodfellow & Co., Amazon's Amazon Basics.",
  //   },
  //   {
  //     icon: "2",
  //     title: "Micro Private Label (MPL) Advantages",
  //     benefits: [
  //       {
  //         title: "Smaller Scale:",
  //         description:
  //           "Focus on niche product lines with lower upfront investment.",
  //       },
  //       {
  //         title: "Niche Focus:",
  //         description:
  //           "Cater to specialized markets with unique product offerings.",
  //       },
  //       {
  //         title: "Lower Risk:",
  //         description:
  //           "Reduce costs testing the private label market without massive inventory.",
  //       },
  //       {
  //         title: "Faster Launch:",
  //         description:
  //           "Achieve quicker time-to-market thanks to smaller scope.",
  //       },
  //     ],
  //     example:
  //       "Selling a specific type of phone case or unique pet toy within a niche market.",
  //   },
  // ];

  const data = [
    {
      icon: "1",
      title: "Why Accounts Get Suspended",
      detail:
        "Online marketplaces have strict rules, and even a small mistake can lead to suspension. The most common reasons include:",
      benefits: [
        {
          title: "Policy Violations:",
          description:
            "Issues like intellectual property claims, counterfeit concerns, or incorrect listing practices.",
        },
        {
          title: "Performance Metrics:",
          description:
            "Late shipments, high order defect rates, or excessive customer complaints.",
        },
        {
          title: "Compliance Errors:",
          description:
            "Breaches of advertising guidelines, misleading creatives, or use of banned content.",
        },
        {
          title: "Ad & Content Violations:",
          description:
            "Advertising policy breaches, misleading creatives, or banned content.",
        },
      ],
    },
    {
      icon: "2",
      title: "Why Choose Us",
      benefits: [
        {
          title: "Multi-Platform Expertise:",
          description:
            "One expert team handling Amazon, Walmart, TikTok Shop, eBay, and Shopify.",
        },
        {
          title: "Proven Results:",
          description:
            "A strong track record of successful reinstatements across multiple industries.",
        },
        {
          title: "Faster Recovery:",
          description:
            "We know the exact compliance language each platform requires, ensuring quicker approvals.",
        },
        {
          title: "Long-Term Security:",
          description:
            "Beyond recovery, we implement strategies to safeguard your account from future suspensions.",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial="initial"
      whileInView="final"
      variants={parentTranslateY}
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 sm:items-stretch gap-4 md:gap-x-12"
    >
      {data.map((item, index) => (
        <motion.div
          variants={childTranslateY}
          key={index}
          className="bg-white flex-col justify-between flex rounded-xl py-5 pl-4 pr-6 md:py-8 md:pl-7 md:pr-9 gap-y-4 shadow-light sm:h-full"
        >
          <div className="flex items-start  gap-x-4">
            <div className="min-w-8 md:min-w-11 lg:min-w-15 h-auto">
              <Image
                src={`/account-reinstatement/hero/${item.icon}.svg`}
                alt={item.title}
                width={100}
                className="w-full h-auto"
                height={100}
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-black font-bold text-xl md:text-2xl">
                {item.title}
              </h3>
              <p className=" pr-2 md:pr-3 text-xs sm:text-sm lg:text-base">{item.detail}</p>
            </div>
          </div>
          <ul className="flex flex-col justify-center items-start gap-y-2 md:gap-y-4 lg:gap-y-6 md:mt-2">
            {item.benefits.map((benefit, index) => (
              <li key={index} className="flex gap-x-3 md:gap-x-4 ">
                <div className="h-5 sm:h-7 md:h-9 w-auto">
                  <Image
                    src={"/pl-mpl-brands/SureScaleSolutionsComesIn/tick.svg"}
                    alt={benefit.title}
                    width={100}
                    height={100}
                    className="h-full w-auto"
                  />
                </div>
                <p className="  space-x-2 md:space-x-3">
                  <span className="text-black font-bold text-base text-nowrap md:text-xl">
                    {benefit.title}
                  </span>
                  <span className="text-darkGray text-[10px] sm:text-xs md:text-base">
                    {benefit.description}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Component;

export const HeroPart2 = () => {
  return (
    <section className="w-full  ">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:pb-16  md:pt-10 gap-y-8 md:gap-y-12">
        <div>
          <Component />
        </div>
      </div>
    </section>
  );
};
