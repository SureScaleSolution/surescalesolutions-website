import { useAnimation } from "@/contexts/AnimationContext";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
};

const MainIcon = ({ src, alt }: Props) => {
  const { hoveredIcon } = useAnimation();
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`relative rounded-full shadow-[4px_4px_50px_0_rgba(0,0,0,0.25)] z-[1] transition-opacity duration-500 ${
          !hoveredIcon ? "opacity-100" : "opacity-30"
        }`}
        width={50}
        height={50}
      />
    </>
  );
};

export default MainIcon;
