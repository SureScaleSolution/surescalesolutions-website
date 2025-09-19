import React from "react";
import { Heading2 } from "../common/Heading2";
import Image from "next/image";
import { motion } from "motion/react";
import { childTranslateY, fadeUp, parentTranslateY } from "../common/MotionFunctions";

export const TiktokServices = () => {
  const services = [
    {
      icon: 1,
      title: "Dropshipping Model",
      description:
        "We fully manage your TikTok Shop from product sourcing to order fulfillment. Our team works on a profit-sharing basis, typically generating 20% to 30% ROI.",
    },
    {
      icon: 2,
      title: "Private Label (PL) Model",
      description:
        "We set up and manage your store, run advertising campaigns, and handle product sourcing. This model works on a fixed service fee.",
    },
    {
      icon: 3,
      title: "Managed Private Label (MPL)",
      description:
        "Similar to PL, but with additional support including appeal processes, compliance checks, and ongoing account monitoring to keep your store safe and profitable.",
    },
    {
      icon: 4,
      title: "Suspension Support",
      description:
        "Step Appeal Process for quick and effective account reinstatement. Compliance reviews to prevent policy violations before they happen.",
    },
  ];
  return (
    <section className="w-full bg-white  ">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:py-16 gap-y-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center gap-y-4 md:gap-y-5"
        >
          <Heading2 first="Our " center="Tiktok" last="Services" />
          <p className="text-[10px] md:text-base lg:text-xl text-center text-darkGray">
            We offer three different models: Dropshipping, Private Label (PL),
            and Managed Private Label (MPL).
          </p>
        </motion.div>
        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-x-8 md:gap-x-10 lg:gap-x-6"
        >
          {services.map((item, index) => (
            <motion.div
            variants={childTranslateY}
              key={index}
              className=" max-w-[420px] sm:w-full bg-white shadow-light flex flex-col items-center justify-center py-6 px-4 rounded-xl gap-y-5"
            >
              <div className="w-[75px]">
                <Image
                  src={`/tiktok/services/${item.icon}.svg`}
                  alt={`Icon ${item.icon}`}
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" flex flex-col justify-center text-center gap-y-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="flex-1 text-sm text-darkGray font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
