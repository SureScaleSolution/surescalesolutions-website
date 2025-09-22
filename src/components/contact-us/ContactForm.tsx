import { submitContactForm } from "@/actions/contactService";
import React, { useState } from "react";

type Props = {
  setMessage: React.Dispatch<
    React.SetStateAction<{ type: "success" | "error"; text: string } | null>
  >;
};

interface AttachedFile {
  id: string;
  file: File;
  name: string;
  size: number;
}

export default function ContactForm({ setMessage }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);

  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles: AttachedFile[] = Array.from(files).map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      file,
      name: file.name,
      size: file.size,
    }));

    // Calculate total size including existing files
    const currentTotalSize = attachedFiles.reduce(
      (total, file) => total + file.size,
      0
    );
    const newFilesTotalSize = newFiles.reduce(
      (total, file) => total + file.size,
      0
    );
    const totalSize = currentTotalSize + newFilesTotalSize;

    // 20MB limit (20 * 1024 * 1024 bytes)
    const MAX_TOTAL_SIZE = 20 * 1024 * 1024;

    if (totalSize > MAX_TOTAL_SIZE) {
      setMessage({
        type: "error",
        text: `Total file size cannot exceed 20MB. Current total: ${formatFileSize(
          currentTotalSize
        )}, Selected files: ${formatFileSize(
          newFilesTotalSize
        )}, Combined: ${formatFileSize(totalSize)}`,
      });
      e.target.value = ""; // Clear the input
      return;
    }

    setAttachedFiles((prev) => [...prev, ...newFiles]);

    // Clear the input so the same file can be selected again if removed
    e.target.value = "";
  };

  const handleFileRemoval = (fileId: string) => {
    setAttachedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getTotalSize = (): number => {
    return attachedFiles.reduce((total, file) => total + file.size, 0);
  };

  const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20MB
  const currentTotalSize = getTotalSize();
  const remainingSize = MAX_TOTAL_SIZE - currentTotalSize;
  const usagePercentage = (currentTotalSize / MAX_TOTAL_SIZE) * 100;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);

    // Add all attached files to form data
    attachedFiles.forEach((attachedFile, index) => {
      formData.append(`attachment_${index}`, attachedFile.file);
    });

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
      setAttachedFiles([]);
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
            multiple
            onChange={handleFileSelection}
            className="w-full px-4 py-1.5 md:py-3 border border-primary rounded md:rounded-md text-darkGray placeholder-gray-400 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          {/* Attached Files Preview */}
          {attachedFiles.length > 0 && (
            <div className="mt-2 space-y-2">
              <p className="text-sm text-gray-600 font-medium">
                Attached Files:
              </p>
              {attachedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleFileRemoval(file.id)}
                    className="ml-3 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors duration-200"
                    aria-label={`Remove ${file.name}`}>
                    <svg
                      className="w-4 h-4"
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
                  </button>
                </div>
              ))}
            </div>
          )}
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
