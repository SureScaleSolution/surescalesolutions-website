import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { fadeUp } from "../common/MotionFunctions";
export const GrowthSolutions = () => {
  const solutions = [
    {
      title:
        "Unify data and strategy to win across Amazon, Walmart, and TikTok Shop.",
      icon: "icon1",
    },
    {
      title:
        "Access millions of live insights via dashboards, reports, or API integration.",
      icon: "icon2",
    },
    {
      title:
        "Accelerate growth with tailored insights and hands-on marketplace expertise.",
      icon: "icon3",
    },
  ];


  return (
    <section className="w-full  hero-enterprise-growth-solutions">
      <div className="max-w-[1660px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12  md:py-16 xl:py-20  flex flex-col md:flex-row   gap-y-12 gap-x-2">
        {/* Text Part */}
        <div className=" md:w-[54%] flex flex-col gap-y-8 md:gap-y-16 text-center  md:text-left ">
          <div className="flex flex-col gap-y-6 md:gap-y-10 font-semibold ">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              className="text-3xl md:text-4xl lg:text-5xl text-black"
            >
              Enterprise Growth Solutions
            </motion.h3>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              className="text-lg md:text-2xl text-secondary"
            >
              Powerful Performance Platform for Brands, Aggregators & Agencies
            </motion.p>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className="text-sm md:text-base lg:text-lg text-darkGray"
          >
            Take your multichannel ecommerce strategy to the next level. Our
            enterprise-ready toolkit combines precision analytics, smart
            automation, and expert services to help you scale profitably across
            Amazon, Walmart, and TikTok Shop.
          </motion.p>
        </div>
        {/* Animated Boxes Part */}
        <div className="md:w-[46%] flex flex-col justify-between gap-y-6 ">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`flex items-center w-[80%] p-2 md:p-5 rounded-lg gap-x-4 ${
                index == 1 ? "bg-primary text-white" : "bg-white text-black"
              }`}
              initial={{
                x: index === 1 ? 0 : "20%",
              }}
              animate={{
                x: index === 1 ? [0, "20%", 0] : ["20%", 0, "20%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <div className="w-6 sm:w-9 md:w-12">
                <Image
                  src={`/home/growthSolutions/${solution.icon}.svg`}
                  alt={solution.title}
                  className="w-full h-auto"
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-sm md:text-base  xl:text-xl ">
                {solution.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
