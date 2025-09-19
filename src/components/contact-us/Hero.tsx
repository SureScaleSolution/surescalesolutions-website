import Image from "next/image";
import React, { useState } from "react";
import ContactForm from "./ContactForm";
export const Hero = () => {
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const details = [
    { icon: "mail", text: "sales@surescalesolutions.com" },
    { icon: "phone", text: "+92-303-067-6364" },
  ];

  const Details = () => {
    return (
      <div className="flex flex-col items-start  gap-y-3 md:gap-y-6 mt-6 md:mt-0">
        {details.map((item, index) => (
          <div key={index} className="flex items-center gap-x-4">
            <div className="w-5 h-auto md:w-7 ">
              <Image
                src={`/contact-us/${item.icon}.svg`}
                alt={item.icon}
                width={24}
                height={24}
              />
            </div>
            <span className="text-darkGray text-sm sm:text-base md:text-lg lg:text-xl">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section className="bg-gradient-to-b from-background via-background to-white">
      <div className="max-w-[1660px] flex-col flex  mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-4 pb-8 md:pt-8 md:pb-12 lg:pb-20   ">
        <div className="flex flex-col md:flex-row items-center  justify-center md:gap-x-12 gap-y-6">
          {/* Text Part */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-y-4 md:gap-y-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-semibold  ">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl">
              We&apos;d love to hear from you! Whether you&apos;re looking for
              expert support, have questions about our services, or want to
              discuss how we can help grow your business, we&apos;re here to
              connect.
            </p>
            <div className="hidden md:flex">
              <Details />
            </div>
          </div>
          {/* Input Part */}
          <div className="w-full md:w-1/2 bg-white  rounded-md md:rounded-xl  p-6  md:py-12 md:px-10">
            <ContactForm setMessage={setMessage} />
          </div>
        </div>
        <div className=" flex items-center justify-center md:hidden">
          <Details />
        </div>
      </div>

      {/* Success/Error Modal - Top Right */}
      {message && (
        <div className="fixed top-4 right-4 z-[9999] max-w-sm w-full">
          <div className="bg-white rounded-xl shadow-2xl border p-6 relative animate-in slide-in-from-right-5 duration-300">
            <button
              onClick={() => setMessage(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold w-6 h-6 flex items-center justify-center">
              ×
            </button>

            <div className="pr-6">
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === "success" ? "bg-green-100" : "bg-red-100"
                  }`}>
                  {message.type === "success" ? (
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </div>

                <div className="flex-1">
                  <h3
                    className={`text-sm font-semibold mb-1 ${
                      message.type === "success"
                        ? "text-green-800"
                        : "text-red-800"
                    }`}>
                    {message.type === "success" ? "Message Sent!" : "Error"}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {message.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
