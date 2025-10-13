import Link from "next/link";
import React from "react";

export const Link3 = ({ text = "", to = "" }) => {
  return (
    <Link
      href={to}
      className="flex items-center justify-center border-1 rounded hover:border-white hover:text-white hover:bg-primary bg-white cursor-pointer font-bold text-primary   px-6 md:px-10 py-3  duration-300 text-xs md:text-sm lg:text-base  transition-all "
    >
      {text}
    </Link>
  );
};
