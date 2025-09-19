import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselMobile.css";

type CarouselMobileProps = {
  testimonials: {
    stars: number;
    text: string;
    customerImage: string;
    customerName: string;
  }[];
};

export default function CarouselMobile({ testimonials }: CarouselMobileProps) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className="px-10 md:hidden bg-white carousel-mobile">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="py-2">
            <div className="flex flex-col bg-white  shadow-carousel h-full min-h-[180px] text-black gap-y-3 md:gap-y-7 px-2 py-3 md:px-4 md:py-5 rounded-xl">
              {/* stars */}
              <div className="flex gap-x-2 items-center">
                {renderStars(testimonial.stars)}
              </div>
              {/* Text */}
              <p
                className="text-xs md:text-lg text-darkGray  flex-1 mb-4"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              ></p>
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
