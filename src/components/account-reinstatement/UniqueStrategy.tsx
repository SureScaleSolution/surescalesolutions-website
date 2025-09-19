import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  childTranslateY,
  fadeUp,
  parentTranslateY,
} from "../common/MotionFunctions";
import { Heading2 } from "../common/Heading2";

export const UniqueStrategy = () => {
const services = [ 
  {
    icon: 1,
    title: "Root Cause Analysis",
    description: "Review suspension notice and identify violation type & policy gaps.",
  },
  {
    icon: 2,
    title: "Customized Appeal Letter",
    description: "Drafted Plan of Action (POA) tailored to each marketplace with strong evidence & compliance commitments.",
  },
  {
    icon: 3,
    title: "Direct Submission & Follow-Up",
    description: "Official submission through seller support channels with constant follow-up until reinstated.",
  },
  {
    icon: 4,
    title: "Future-Proof Compliance",
    description: "Audit listings, ads & compliance history with training, guidelines & monitoring to prevent repeat suspensions.",
  },
];
  return (
    <section className="w-full bg-white  ">
      <div className="max-w-[1660px] mx-auto w-full  flex flex-col px-6 sm:px-12 md:px-20 py-10 md:py-16 lg:py-24 gap-y-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex flex-col items-center "
        >
          <Heading2 first="Our Our Unique Strategy" />

        </motion.div>
        <motion.div
          variants={parentTranslateY}
          initial="initial"
          whileInView="final"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-x-8 md:gap-x-10 lg:gap-x-4"
        >
          {services.map((item, index) => (
            <motion.div
              variants={childTranslateY}
              key={index}
              className=" max-w-[420px] sm:w-full bg-white  flex flex-col items-center justify-center py-6 px-4  gap-y-5"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src={`/account-reinstatement/unique-strategy/${item.icon}.svg`}
                  alt={`Icon ${item.icon}`}
                  className="w-full h-full object-contain"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex-1   flex flex-col justify-center text-center gap-y-4">
                <h3 className="  text-xl  font-semibold">{item.title}</h3>
                <p className="h-full text-base text-darkGray font-medium">
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
