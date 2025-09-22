import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (
  file: Buffer,
  fileName: string
): Promise<string> => {
  try {
    // Convert buffer to base64 with proper MIME type detection
    const fileStr = `data:application/octet-stream;base64,${file.toString("base64")}`;

    const result = await cloudinary.uploader.upload(fileStr, {
      folder: "contact-form-files",
      public_id: `${Date.now()}-${fileName.split(".")[0]}`,
      resource_type: "auto", // Automatically detect the file type
      use_filename: true,
      unique_filename: true,
    });

    return result.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload file to Cloudinary");
  }
};

export default cloudinary;
