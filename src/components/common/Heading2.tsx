import React from "react";

interface HeadingProps {
  first?: React.ReactNode;
  center?: React.ReactNode;
  last?: React.ReactNode;
  textColor?: string;
}


//text 20px - 36px
export const Heading2 = ({ first="", center="", last="",textColor="text-primary" }: HeadingProps) => {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-semibold text-center ">
      {first} <span className={textColor}>{center}</span> {last}
    </h2>
  );
};
