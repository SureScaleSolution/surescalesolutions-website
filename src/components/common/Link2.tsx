import Link from "next/link";
import React from "react";

export const Link2 = ({ text = "", to = "" }) => {
  return (
    <Link
      href={to}
      className="flex items-center justify-center   rounded hover:text-white hover:bg-primary cursor-pointer font-bold text-primary  px-6 py-2 transition-colors duration-300 text-xs md:text-sm lg:text-base "
    >
      {text}
    </Link>
  );
};
