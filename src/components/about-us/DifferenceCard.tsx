import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function DifferenceCard({ title, description, icon }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex items-start gap-4 rounded-xl bg-white shadow-light p-4 pb-8">
        <Image src={icon} alt={title} width={32} height={32} />
        <div className="flex flex-col space-y-3">
          <h3 className="font-bold">{title}</h3>
          <p className="text-darkGray text-sm lg:text-base">{description}</p>
        </div>
      </motion.div>
    </>
  );
}
