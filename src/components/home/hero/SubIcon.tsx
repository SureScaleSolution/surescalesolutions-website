import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  src: string;
  alt: string;
  position: "left" | "right";
  className?: string;
};

const SubIcon = ({ href, src, alt, position, className = "" }: Props) => {
  let positionClass = "";
  if (position === "left") {
    positionClass = "group-hover:translate-x-[-125%]";
  } else {
    positionClass = "group-hover:translate-x-[25%]";
  }

  return (
    <>
      <Link
        href={href}
        className={`w-[54px] h-[54px] p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-1/2 ${positionClass} group-hover:translate-y-0 transition-all duration-300 ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={38}
          height={38}
          className="w-[38px] h-[38px] rounded-full shadow-[4px_4px_50px_0_rgba(0,0,0,0.25)]"
        />
      </Link>
    </>
  );
};

export default SubIcon;
