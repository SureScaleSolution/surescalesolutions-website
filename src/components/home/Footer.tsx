"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { navLinks2, servicesLinks } from "./NavLinks";
import Link from "next/link";

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const socialLinks = [
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61578418564882",
      label: "Facebook",
    },
    {
      Icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/107954645/admin/dashboard/",
      label: "LinkedIn",
    },
    {
      Icon: FaXTwitter,
      href: "/",
      label: "Twitter",
    },
    {
      Icon: FaInstagram,
      href: "/",
      label: "Instagram",
    },
  ];

  const handleLinkClick = (link: (typeof navLinks2)[0]) => {
    if (link.name === "Services") {
      const isHomePage = pathname === "/";

      if (isHomePage) {
        // If on home page, scroll to services section
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // If on any other page, navigate to home page and then scroll to services
        router.push("/#services");
      }
    } else {
      // For other links, use the href from the link object
      router.push(link.href);
    }
  };

  return (
    <>
      <footer className="pt-8 lg:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1350px] mx-auto p-4 sm:p-6 lg:p-8 rounded-lg">
          {/* Footer 1 */}
          <div className="w-full mx-auto text-sm">
            <div className="flex flex-col gap-y-12 lg:flex-row lg:gap-x-8 lg:items-start lg:justify-between">
              {/* Box 1 */}
              <div className="flex flex-col items-start justify-center gap-y-6">
                <div className="h-9 lg:h-11 w-auto">
                  <Image
                    src="/home/logo.svg"
                    alt="Company Logo"
                    width={100}
                    height={100}
                    className="h-full w-auto"
                  />
                </div>
                <p className=" text-sm sm:text-base leading-relaxed max-w-md text-darkGray">
                  We help multichannel ecommerce brands scale profitably with
                  data-driven strategy, hands-on marketplace management, and
                  fast account reinstatement to protect and grow revenue.
                </p>
                {/* Social Media Icons */}
                <div className="flex  flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                  {socialLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="w-10 h-10  flex items-center justify-center transition-colors duration-200 p-2 bg-black rounded-full  text-white hover:bg-secondary"
                      aria-label={item.label}
                      title={item.label}
                      target="_blank"
                      rel="noopener noreferrer">
                      <span>{<item.Icon className="text-lg " />}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block w-[1px] h-60 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

              {/* Box 2 */}
              <ul className="flex flex-col items-start justify-center gap-y-2">
                <li className="mb-4">
                  <h4 className="text-secondary text-lg sm:text-xl font-semibold">
                    Navigation Links
                  </h4>
                </li>
                {navLinks2.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="cursor-pointer flex items-center  gap-x-3 transition-all duration-300 text-left">
                      <div className="block text-darkGray    hover:text-secondary transition-all duration-300 text-sm sm:text-base py-1  ">
                        {link.name}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="hidden lg:block w-[1px] h-60 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

              {/* Box 3 */}
              <ul className="flex flex-col items-start justify-center gap-y-2">
                <li className="mb-4">
                  <h4 className="text-secondary text-lg sm:text-xl font-semibold">
                    Our Services
                  </h4>
                </li>
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="cursor-pointer flex items-center  gap-x-3 transition-all duration-300 text-left">
                      <div className="block text-darkGray    hover:text-secondary transition-all duration-300 text-sm sm:text-base py-1  ">
                        {link.name}
                      </div>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => router.push("/#services")}
                    className="cursor-pointer flex items-center  gap-x-3 transition-all duration-300 text-left">
                    <div className="block text-darkGray    hover:text-secondary transition-all duration-300 text-sm sm:text-base py-1  ">
                      and more...
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto lg:hidden mt-8 w-[100%] h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 " />
        </div>
      </footer>
    </>
  );
};
