import { Link1 } from "@/components/common/Link1";
import { Heading } from "@/components/common/Heading";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { fadeUp } from "../common/MotionFunctions";

type AnimationProp = Partial<
  Pick<
    HTMLMotionProps<"div">,
    "initial" | "whileInView" | "transition" | "viewport" | "variants"
  >
>;

export const ServicesCards = ({
  animationProp,
  useStagger = false,
}: {
  animationProp: AnimationProp;
  useStagger?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    initial: {},
    final: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const services = [
    {
      link: "fbm-dropshipping",
      icon: "icon1",
      title: "Amazon FBM & Dropshipping",
      description:
        "End-to-end management for FBM and dropshipping stores—from product research to customer service, all on a commission-based model.",
    },
    {
      link: "account-reinstatement",

      icon: "icon7",
      title: "Account Reinstatement Support",
      description:
        "Recover your accounts quickly—Amazon, Walmart, or TikTok. We handle reinstatements and violation disputes efficiently.",
    },

    {
      link: "walmart",

      icon: "icon4",
      title: "Walmart Marketplace",
      description:
        "Specialized dropshipping and wholesale services—WFS inventory, listing optimization, and account reinstatement all under one roof.",
    },
    {
      link: "tiktok",

      icon: "icon5",
      title: "TikTok Shop Growth",
      description:
        "Launch and scale with viral potential—product sourcing, branding, TikTok ad strategies, and violation handling.",
    },
    {
      link: "ebay",

      icon: "icon6",
      title: "eBay Store Optimization",
      description:
        "Full-service eBay growth solutions—SEO listings, account management, customer handling, and sales acceleration.",
    },
    {
      link: "shopify",

      icon: "icon8",
      title: "Shopify Store Services",
      description:
        "Custom Shopify builds with optimized product pages, sales funnels, branding, and integration for a seamless ecommerce experience.",
    },
    {
      link: "wholesale",

      icon: "icon2",
      title: "Amazon FBA Wholesale",
      description:
        "Fixed-fee scaling for your wholesale business—involves product sourcing, supplier onboarding, PPC, and full inventory & sales management.",
    },
    {
      link: "amazon-pl-mpl-brands",
      icon: "icon3",
      title: "Amazon PL & MPL Brands",
      description:
        "Private & Micro Label brand support with niche research, supplier sourcing, packaging guidance, and complete launch strategies.",
    },
  ];

  return (
    <motion.div
      {...(useStagger && {
        variants: containerVariants,
        initial: "initial",
        whileInView: "final",
        viewport: { once: true, amount: 0.5 },
      })}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {services.map((service, index) => (
        <motion.div {...animationProp} key={index} className=" ">
          <Link
            href={`/${service.link}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group hover:bg-primary hover:text-white px-6 py-8 gap-y-3 rounded-lg flex flex-col items-center bg-white text-black transition-colors duration-300 shadow-light sm:h-full"
          >
            <div className=" h-14 w-auto">
              <Image
                className="h-full w-auto mb-2 object-contain  "
                src={
                  hoveredIndex === index
                    ? `/home/services/hovered/${service.icon}.svg`
                    : `/home/services/${service.icon}.svg`
                }
                alt={service.title}
                width={64}
                height={64}
              />
            </div>
            <h4 className="text-base font-semibold cursor-pointer">
              {service.title}
            </h4>
            <p className="text-xs flex-1  text-center cursor-pointer group-hover:text-white text-lightGray mx-auto w-11/12 transition-colors duration-300 ">
              {service.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

// -----------------Main Part ---------------------

export default function Services() {

  // Animation props for different screen sizes
  const prop1 = {
    initial: { x: 50 },
    whileInView: { x: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true, amount: 0.8 },
  };

  const prop2 = {
    variants: {
      initial: { y: 50 },
      final: {
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut" as const,
        },
      },
    },
  };

  return (
    <section id="services" className="w-full py-4 sm:py-8 md:py-12 lg:py-24   ">
      <div className="max-w-[1660px] mx-auto w-full px-6 sm:px-10  overflow-hidden   flex flex-col gap-y-6 md:gap-y-16  ">
        {/* Text */}
        <div className="flex flex-col items-center gap-x-4 md:gap-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className="flex flex-col gap-y-2"
          >
            <Heading first="Scalable" center="Ecommerce" last="Services" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className="text-sm sm:text-base md:text-lg text-center "
          >
            Drive growth across all major platforms with expert-led,
            full-service management. From Amazon to Shopify, we power your
            success.
          </motion.p>
        </div>
        {/* Services Boxes */}
        <div className="sm:hidden">
          <ServicesCards animationProp={prop1} />
        </div>
        <div className="hidden sm:block">
          <ServicesCards animationProp={prop2} useStagger={true} />
        </div>

        {/* Link1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="flex justify-center"
        >
          <Link1 text="Book a Demo" to="/contact-us" />
        </motion.div>
      </div>
    </section>
  );
}
