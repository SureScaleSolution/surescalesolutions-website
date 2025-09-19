import { submitContactForm } from "@/actions/contactService";
import React, { useState } from "react";

type Props = {
  setMessage: React.Dispatch<
    React.SetStateAction<{ type: "success" | "error"; text: string } | null>
  >;
};

export default function ContactForm({ setMessage }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    setMessage({
      type: result.success ? "success" : "error",
      text: result.message,
    });

    setIsSubmitting(false);

    // Reset form if successful
    if (result.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }
  };

  return (
    <>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="flex items-end flex-col gap-y-6">
        {/* Full Name */}
        <div className="flex flex-col w-full gap-y-2">
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full px-4 py-1.5 md:py-3 border border-primary rounded md:rounded-md text-darkGray placeholder-gray-400 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Full Name"
          />
        </div>
        {/* Email Address */}
        <div className="flex flex-col w-full gap-y-2">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-1.5 md:py-3 border border-primary rounded md:rounded-md text-darkGray placeholder-gray-400 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Email Address"
          />
        </div>
        {/* Phone Number */}
        <div className="flex flex-col w-full gap-y-2">
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-1.5 md:py-3 border border-primary rounded md:rounded-md text-darkGray placeholder-gray-400 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Phone Number"
          />
        </div>
        {/* Subject */}
        <div className="flex flex-col w-full gap-y-2">
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-1.5 md:py-3 border border-primary rounded md:rounded-md text-darkGray placeholder-gray-400 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Subject"
          />
        </div>
        {/* Company/Startup (Optional) */}
        <div className="flex flex-col w-full gap-y-2">
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-1.5 md:py-3 border border-primary rounded md:rounded-md text-darkGray placeholder-gray-400 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Company/Startup (Optional)"
          />
        </div>
        {/* Service of Interest */}
        <div className="flex flex-col w-full gap-y-2">
          <textarea
            id="service"
            name="service"
            required
            rows={4}
            className="w-full px-4 pt-1.5 md:pt-3 pb-2 md:pb-4 border border-primary rounded md:rounded-md text-darkGray placeholder-gray-400 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            placeholder="Service of Interest"
          />
        </div>
        {/* Attachment (Optional) */}
        <div className="flex flex-col w-full gap-y-2">
          <input
            type="file"
            id="attachment"
            name="attachment"
            className="w-full px-4 py-1.5 md:py-3 border border-primary rounded md:rounded-md text-darkGray placeholder-gray-400 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-x-2 hover:bg-transparent disabled:hover:bg-primary border-primary border-1 bg-primary cursor-pointer font-bold text-white hover:text-primary disabled:hover:text-white px-10 py-2 transition-colors duration-300 text-xs md:text-sm lg:text-base disabled:opacity-75 disabled:cursor-not-allowed">
          {isSubmitting && (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          )}
          {isSubmitting ? "Sending..." : "Contact Us"}
        </button>
      </form>
    </>
  );
}
