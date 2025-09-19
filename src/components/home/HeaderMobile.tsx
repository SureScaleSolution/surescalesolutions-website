"use client";
import React from "react";
import Image from "next/image";

interface HeaderMobileProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderMobile = ({ isMenuOpen, toggleMenu }: HeaderMobileProps) => {
  return (
    <header className="w-full lg:hidden  bg-background">
      <nav className="w-full mx-auto flex px-4 py-6 relative  ">
        <div className="w-full flex justify-between items-center">
          <div>
            <Image
              width={50}
              height={50}
              src="/home/logo.svg"
              alt=""
              className="h-8 w-auto"
            ></Image>
          </div>
          <button className="cursor-pointer" onClick={toggleMenu}>
            {!isMenuOpen ? (
              <Image
                width={24}
                height={24}
                src="/home/menu.svg"
                alt="Menu"
                className="h-6 w-auto "
              />
            ) : (
              <Image
                width={24}
                height={24}
                src="/home/cross.svg"
                alt="Close"
                className="h-6 w-auto "
              />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMobile;
