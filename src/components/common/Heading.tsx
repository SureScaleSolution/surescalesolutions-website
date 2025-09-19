import React from "react";

interface HeadingProps {
  first?: React.ReactNode;
  center?: React.ReactNode;
  last?: React.ReactNode;
}


//text 30px - 40px
export const Heading = ({ first="", center="", last="" }: HeadingProps) => {
  return (
    <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-center ">
      {first} <span className="text-primary ">{center}</span> {last}
    </h2>
  );
};
