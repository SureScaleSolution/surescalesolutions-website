import Link from "next/link";
import React from "react";

export const Link1 = ({ text = "", to = "" }) => {
  return (
    <Link
      href={to}
      className="flex items-center justify-center hover:bg-transparent  rounded bg-primary cursor-pointer font-bold text-white hover:text-primary  px-4 py-2 transition-colors duration-300 text-xs md:text-sm lg:text-base "
    >
      {text}
    </Link>
  );
};
