import { Heading } from "@/components/common/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import {motion} from "motion/react";
import { fadeUp } from "../common/MotionFunctions";

const caseStudies = [
  {
    brand: "Nisolo",
    stat: "291%",
    title: "Revenue Increase",
    description:
      "An extensive overhaul of assets and strategies led to consistent growth across years.",
    img: "img1",
  },
  {
    brand: "chirp.",
    stat: "519%",
    title: "Growth to Date",
    description:
      "Producing more success for a well-known brand, in a loaded market.",
    img: "img2",
  },
  {
    brand: "Death Wish Coffee",
    stat: "$2M+",
    title: "Monthly revenue",
    description:
      "Huge revenue boost in the first month of working with My Amazon Guy.",
    img: "img3",
  },
];


export const SuccessStories = () => {
  return (
    <section className="w-full   bg-[#F9F9FD]">
      <div className="max-w-[1660px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 gap-y-12 flex flex-col py-8 md:py-16 ">
        {/* First part */}
        <div className="flex flex-col items-center gap-y-5 md:gap-y-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            <Heading first="Real Results," center="Proven" last="Stories" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className="max-w-[800px] text-sm sm:text-base md:text-lg text-center text-black"
          >
            Case Studies That Speak for Themselves
          </motion.p>
        </div>
        {/* 2nd part */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden text-black group"
            >
              {/* Image Part */}
              <div className="group-hover:scale-105 duration-700 transition-transform">
                <Image
                  src={`/home/successStories/${study.img}.png`}
                  alt={study.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Text Part */}
              <div className="flex flex-col justify-center p-4 md:p-5 ">
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-4">
                    <span className=" text-primary text-4xl md:text-5xl">
                      <FaArrowCircleUp />
                    </span>
                    <span className="text-primary text-3xl md:text-[40px] font-semibold">
                      {study.stat}
                    </span>
                  </div>

                  <span className="text-xl md:text-2xl font-semibold">
                    {study.title}
                  </span>
                </div>

                <div className="w-11/12 bg-gray-400 h-[1px] mx-auto mt-2 mb-3" />

                <div className="flex flex-col ">
                  <span className="text-base md:text-lg font-semibold">
                    {study.brand}
                  </span>
                  <p className="text-xs md:text-sm ">{study.description}</p>
                </div>
                <Link
                  href="/case-studies"
                  className="flex items-center gap-x-3  mt-4 hover:underline hover:text-primary duration-500 transition-colors"
                >
                  <div className="w-6 h-auto ">
                    <Image
                      src={"/home/chevronRight.svg"}
                      width={16}
                      height={16}
                      className="w-full has-user-valid:"
                      alt="Chevron Right"
                    />
                  </div>
                  <span className="text-sm md:text-base font-bold  ">
                    Read Case Studies
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
