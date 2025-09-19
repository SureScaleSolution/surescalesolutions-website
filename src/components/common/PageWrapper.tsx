"use client";

import React, { useState } from "react";
import HeaderDesktop from "@/components/home/HeaderDesktop";
import HeaderMobile from "@/components/home/HeaderMobile";
import Menu from "@/components/home/Menu";
import { ScrollToTopButton } from "@/components/home/ScrollToTopButton";
import { Footer } from "../home/Footer";
import { Footer2 } from "../home/Footer2";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <HeaderMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <HeaderDesktop />
      {children}
      <Footer />
      <Footer2 />
      <ScrollToTopButton />
    </div>
  );
}
