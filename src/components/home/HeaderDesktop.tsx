import React from "react";
import Link from "next/link";
import { navLinks } from "./NavLinks";
import Image from "next/image";
import { Link1 } from "../common/Link1";
import { motion } from "motion/react";
import { useRouter, usePathname } from "next/navigation";

const HeaderDesktop = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if we're on the home page
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
  };
  return (
    <header className="w-full text-black hidden lg:block bg-background ">
      <nav className="w-full mx-auto flex px-6 xl:px-12 py-3  ">
        <motion.div className="w-full flex justify-between items-center">
          <Link href="/">
            <Image
              src="/home/logo.svg"
              alt=""
              className="h-11 w-auto"
              width={100}
              height={100}
            />
          </Link>
          {/* Links */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-x-3 xl:gap-x-7"
          >
            {navLinks.map((link) => (
              <motion.li
                variants={itemVariants}
                key={link.name}
                className="relative group"
              >
                {link.name === 'Services' ? (
                  <button 
                    onClick={handleServicesClick}
                    className="text-lg hover:text-primary cursor-pointer"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link href={link.href} className="text-lg hover:text-primary">
                    {link.name}
                  </Link>
                )}
                <span className="absolute left-0 bottom-0 h-[3px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </motion.li>
            ))}
          </motion.ul>
          {/* Buttons */}
          <div className="flex items-center justify-center gap-x-4  xl:gap-x-6 ">
            <Link href="/contact-us" className="relative group">
              <span className="text-lg group-hover:text-primary">
                Contact Us
              </span>
              <span className="absolute left-0 bottom-0 h-[3px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>

            <Link1 text="Book a Demo" to="/contact-us" />
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
