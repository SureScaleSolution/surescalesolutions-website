"use client";
import { Heading } from "@/components/common/Heading";
import React from "react";
import CarouselDesktop from "./CarouselDesktop";
import { motion } from "motion/react";
import { fadeUp } from "../MotionFunctions";
import CarouselMobile from "./CarouselMobile";

const testimonials = [
  {
    stars: 5,
    text: `<b class="text-primary">Surescalesolutions</b> research was spot on, helping me find great wholesale products with high potential. The brand approval process was seamless, and I felt supported throughout. A must-have service for anyone looking to succeed in Amazon FBA. Highly Recommended!`,
    customerImage: "https://randomuser.me/api/portraits/men/1.jpg",
    customerName: "Malcom Waller",
  },
  {
    stars: 4,
    text: `Outstanding Amazon FBA Wholesale service! The entire process—from product sourcing to supplier negotiation—was handled with precision and professionalism. The supplier connections were solid, and the strategy helped me scale my business efficiently. If you're looking for a reliable and profitable wholesale solution, this is the service to go for!`,
    customerImage: "https://randomuser.me/api/portraits/men/4.jpg",
    customerName: "Shawn Penning",
  },
  {
    stars: 5,
    text: `<b class="text-primary">Surescalesolutions</b> has done Excellent work! The product research was thorough, and the brand approval support was incredibly helpful. If you're looking to succeed in Amazon FBA, this is the service you need!`,
    customerImage: "https://randomuser.me/api/portraits/men/5.jpg",
    customerName: "Jason Morris",
  },
  {
    stars: 4,
    text: `<b class="text-primary">Surescalesolutions</b> found profitable wholesale products and guided me through the brand approval process. Their knowledge and professionalism made everything smooth. Amazing experience! Will definitely use this service again!`,
    customerImage: "https://randomuser.me/api/portraits/men/8.jpg",
    customerName: "Lloyd Lewis",
  },
  {
    stars: 5,
    text: `Highly Recommended! <b class="text-primary">Surescalesolutions</b> is the best for Amazon Wholesale product sourcing! They found profitable products and provided valuable insights. Very informative, professional, and easy to work with. Excellent communication and top-notch service. I'll definitely use their services again!`,
    customerImage: "https://randomuser.me/api/portraits/women/8.jpg",
    customerName: "Viviana Greeley",
  },
];

export const CustomerCarousel = () => {
  return (
    <section className="w-full py-10 sm:py-14 md:py-20 lg:py-40  customer-carousel overflow-x-hidden">
      <div className="max-w-[1660px] mx-auto w-full   flex flex-col gap-y-6 md:gap-y-16   ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}>
          <Heading first="Our" center="Satisfied" last="Customers" />
        </motion.div>

        <div className="w-full ">
          <CarouselDesktop testimonials={testimonials} />
          <CarouselMobile testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};
