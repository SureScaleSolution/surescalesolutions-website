"use client";
import React from "react";
import Image from "next/image";
import { navLinks } from "./NavLinks";
import Link from "next/link";
import { Link1 } from "@/components/common/Link1";
import { motion, AnimatePresence } from "motion/react";
import { useRouter, usePathname } from "next/navigation";

interface HeaderMobileProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Menu = ({ isMenuOpen, toggleMenu }: HeaderMobileProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (link: typeof navLinks[0]) => {
    if (link.name === 'Services') {
      const isHomePage = pathname === '/';
      
      if (isHomePage) {
        // If on home page, scroll to services section
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // If on any other page, navigate to home page and then scroll to services
        router.push('/#services');
      }
      toggleMenu(); // Close the menu
    } else {
      // For other links, use the default behavior
      router.push(link.href);
      toggleMenu(); // Close the menu
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (

        <motion.header
          key="mobile-menu" // Add key for proper AnimatePresence tracking
          className="fixed left-0 top-0 h-screen w-full lg:hidden bg-gradient-to-b from-background via-white to-background z-50"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.nav
            className="w-full mx-auto flex px-4 py-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Add exit animation
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="w-full flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }} // Add exit animation
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Image
                  width={50}
                  height={50}
                  src="/home/logo.svg"
                  alt=""
                  className="h-8 w-auto"
                />
              </motion.div>
              <motion.button
                className="cursor-pointer"
                onClick={toggleMenu}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }} // Add exit animation
                transition={{ delay: 0.2, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  width={24}
                  height={24}
                  src="/home/cross.svg"
                  alt="Close"
                  className="h-6 w-auto"
                />
              </motion.button>
            </div>
          </motion.nav>

          {/* Menu Items */}
          <motion.div
            className="flex flex-col items-center mt-20 h-full menu-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Add exit animation
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                className="py-5  hover:text-primary text-xl hover:text-2xl duration-300 transition-all font-medium hover:font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }} // Add exit animation
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={() => handleLinkClick(link)}
                  className="w-full"
                >
                  {link.name}
                </button>
              </motion.div>
            ))}

            <motion.div
              className="py-5  hover:text-primary text-xl hover:text-2xl duration-300 transition-all font-medium hover:font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }} // Add exit animation
              transition={{
                delay: 0.4 + navLinks.length * 0.1,
                duration: 0.3,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={"/contact-us"} className="" onClick={toggleMenu}>
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              className="py-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                delay: 0.4 + (navLinks.length + 1) * 0.1,
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <Link1 text="Book a Demo" to="/contact-us" />
            </motion.div>
          </motion.div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Menu;
