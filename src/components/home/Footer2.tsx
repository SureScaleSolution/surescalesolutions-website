import React from "react";
import Link from "next/link";

export const Footer2 = () => {
  return (
    <footer>
      <p className="w-full text-[9px] sm:text-sm md:text-lg mx-auto font-light py-3 text-center bg-white text-black transition-all duration-300">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/" className="text-primary hover:underline font-bold">
          SureScaleSolutions
        </Link>{" "}
        Towing Website Design. All Right Reserved
      </p>
    </footer>
  );
};
