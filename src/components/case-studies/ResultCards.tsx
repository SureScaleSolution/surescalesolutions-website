"use client";
import React, { useEffect, useState } from "react";
import { Heading2 } from "../common/Heading2";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleUp } from "react-icons/fa";
import { childOpacity, fadeUp, parentOpacity } from "../common/MotionFunctions";
import { motion } from "motion/react";
import { CaseStudyDocument } from "@/types/caseStudy";

export const ResultCards = () => {
  const filters = [
    "Amazon FBM & Dropshipping",
    "Account Reinstatement",
    "Walmart Market Place",
    "TikTok Shop Growth",
    "eBay Store Optimization",
    "Shopify Store Services",
    "Amazon FBA Wholesale",
    "Amazon PL & MPL",
  ];

  const [activeFilter, setActiveFilter] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [caseStudies, setCaseStudies] = useState<CaseStudyDocument[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 6; // 2 rows of 3 cards

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("/api/case-studies", { cache: "no-store" });
        const json = await res.json();
        if (!res.ok || !json?.success) {
          throw new Error(json?.error || "Failed to fetch case studies");
        }
        setCaseStudies(json.data as CaseStudyDocument[]);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Something went wrong while loading case studies");
        } else {
          setError("Something went wrong while loading case studies");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCaseStudies();
  }, []);

  // Filter case studies based on selected service
  const filteredCaseStudies = activeFilter !== null 
    ? caseStudies.filter((cs) => cs.serviceType === filters[activeFilter])
    : caseStudies;

  // Pagination calculations
  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);

  const handleFilterChange = (index: number) => {
    // Toggle filter: if clicking the same filter, deselect it; otherwise select the new filter
    setActiveFilter(activeFilter === index ? null : index);
    // Reset to first page when filter changes
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <motion.div
        variants={fadeUp}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex justify-center items-center mt-12 gap-2"
      >
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
            currentPage === 1
              ? 'border-gray-300 text-gray-400 cursor-not-allowed'
              : 'border-primary text-primary hover:bg-primary hover:text-white'
          }`}
        >
          Previous
        </button>

        {/* Page numbers */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-lg border-2 transition-all duration-300 ${
              currentPage === page
                ? 'bg-primary text-white border-primary'
                : 'border-primary text-primary hover:bg-primary hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
            currentPage === totalPages
              ? 'border-gray-300 text-gray-400 cursor-not-allowed'
              : 'border-primary text-primary hover:bg-primary hover:text-white'
          }`}
        >
          Next
        </button>
      </motion.div>
    );
  };

  return (
    <section className="bg-primary/5">
      <div className="max-w-[1660px] mx-auto w-full flex flex-col items-center justify-center py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="mb-8"
        >
          <Heading2 first="Driving results across diverse product lines" />
        </motion.div>

        {error && (
          <div className="text-center text-red-600">Failed to load case studies.</div>
        )}

        {/* Filters */}
        {/* Mobile & Tablet: Simple Dropdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="block md:hidden w-full mb-8"
        >
          <select
            value={activeFilter ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setActiveFilter(null);
              } else {
                const selectedIndex = Number(value);
                // Toggle behavior: if same filter is selected, deselect it
                setActiveFilter(activeFilter === selectedIndex ? null : selectedIndex);
              }
              // Reset to first page when filter changes
              setCurrentPage(1);
            }}
            className="w-full max-w-md mx-auto block p-3 border-2 border-primary rounded-lg text-darkGray bg-white shadow-md hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50 transition-all duration-300"
          >
            <option value="">Select a category to filter</option>
            {filters.map((filter, index) => (
              <option key={index} value={index}>
                {filter}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Desktop: Original grid design */}
        <motion.div
          variants={parentOpacity}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full "
        >
          {filters.map((filter, index) => (
            <motion.button
              variants={childOpacity}
              key={index}
              onClick={() => handleFilterChange(index)}
              className={`p-4 text-center  transition-all duration-700 cursor-pointer ${
                activeFilter === index
                  ? "text-primary font-bold  "
                  : "text-darkGray  hover:text-primary hover:font-bold "
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={fadeUp}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 px-8 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden text-black">
                  <div className="w-full h-48 bg-gray-200 animate-pulse" />
                  <div className="p-4 space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                    <div className="h-px bg-gray-300 my-2" />
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
                    <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse" />
                  </div>
                </div>
              ))
            : currentCaseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden text-black group"
            >
              {/* Image Part */}
              <div className="group-hover:scale-105 duration-700 transition-transform">
                <Image
                  src={caseStudy.thumbnailImageUrl}
                  alt={caseStudy.caseStudyTitle || caseStudy.thumbnailTitle || "Case study thumbnail"}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Text Part */}
              <div className="flex flex-col justify-center p-4 md:p-5 ">
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-4">
                    <span className=" text-primary text-4xl md:text-5xl">
                      <FaArrowCircleUp />
                    </span>
                    <span className="text-primary text-3xl md:text-[40px] font-semibold">
                      {caseStudy.thumbnailTitle}{" "}
                      {/* thumbnail text will appear here */}
                    </span>
                  </div>

                  <span className="text-xl md:text-2xl  font-semibold">
                    {caseStudy.caseStudyTitle}{" "}
                    {/* case header title will appear here */}
                  </span>
                </div>

                <div className="w-11/12 bg-gray-400 h-[1px] mx-auto mt-2 mb-3" />

                <div className="flex flex-col ">
                  <span className="text-base md:text-lg font-semibold">
                    {caseStudy.serviceType}
                  </span>
                  <p className="text-xs md:text-sm ">
                    {caseStudy.caseStudySubtitle}{" "}
                    {/* case header subtitle will appear here */}
                  </p>
                </div>
                <Link
                  href={`/case-studies/${caseStudy._id}`}
                  className="flex items-center gap-x-3  mt-4 hover:underline hover:text-primary duration-500 transition-colors"
                >
                  <div className="w-6 h-auto ">
                    <Image
                      src={"/home/chevronRight.svg"}
                      width={16}
                      height={16}
                      className="w-full h-auto"
                      alt="Chevron Right"
                    />
                  </div>
                  <span className="text-sm md:text-base font-bold  ">
                    Read Case Study
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Pagination */}
        {renderPagination()}
      </div>
    </section>
  );
};
