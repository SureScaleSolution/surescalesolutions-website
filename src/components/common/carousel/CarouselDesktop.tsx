import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselDesktop.css";

type CarouselDesktopProps = {
  testimonials: {
    stars: number;
    text: string;
    customerImage: string;
    customerName: string;
  }[];
};

export default function CarouselDesktop({ testimonials }: CarouselDesktopProps) {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "400px",
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          centerPadding: "350px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "300px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerPadding: "230px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: "150px",
          slidesToShow: 1,
        },
      },
    ],
  };

  

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        // Filled star
        stars.push(
          <span key={i} className="text-primary w-3 h-auto md:w-5">
            <Image
              src="/home/star.svg"
              alt="Filled Star"
              className="inline-block"
              width={24}
              height={24}
            />
          </span>
        );
      }
    }

    return stars;
  };

  return (
    <div className=" hidden md:block bg-white">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="py-2">
            <div className="flex flex-col bg-white  shadow-carousel h-full min-h-[300px] text-black gap-y-3 md:gap-y-7 px-2 py-3 md:px-4 md:py-5 rounded-xl">
              {/* stars */}
              <div className="flex gap-x-2 items-center">
                {renderStars(testimonial.stars)}
              </div>
              {/* Text */}
              <p
                className="text-xs md:text-lg text-darkGray  flex-1 mb-4"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}></p>
              {/* Image */}
              <div className="flex items-center  justify-between">
                {/* 1st half */}
                <div className="flex items-center gap-x-2">
                  <div className="w-7 h-7 md:w-13 md:h-13 border-3 rounded-full border-primary p-0.5 ">
                    <Image
                      src={testimonial.customerImage}
                      alt={testimonial.customerName}
                      className="rounded-full w-full h-auto object-cover"
                      width={64}
                      height={64}
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col text-black ">
                    <span className="text-sm md:text-2xl text-medium">
                      {testimonial.customerName}
                    </span>
                    <span className="text-xs md:text-lg text-gray-500">
                      Satisfied Customer
                    </span>
                  </div>
                </div>
                {/* 2nd half */}
                <div className="w-5 h-auto md:w-10   ">
                  <Image
                    src="/home/doubleQMark.svg"
                    alt="Double Quotation Mark"
                    className=" w-full h-auto object-contain"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
