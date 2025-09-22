"use server";

import { uploadToCloudinary } from "@/lib/cloudinary";
import nodemailer from "nodemailer";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  company?: string;
  service: string;
}

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const contactData: ContactFormData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      company: (formData.get("company") as string) || "",
      service: formData.get("service") as string,
    };

    // Handle multiple attachments: prefer client-provided presigned public URLs
    const attachmentUrls: string[] = [];
    
    // Check for client-provided URLs first
    const clientAttachmentUrls = formData.getAll("attachmentUrl") as string[];
    if (clientAttachmentUrls.length > 0) {
      attachmentUrls.push(...clientAttachmentUrls.filter(url => url && url.trim() !== ''));
    } else {
      // fallback: accept Files in the server action and upload to cloudinary
      const files = Array.from(formData.entries())
        .filter(([key]) => key.startsWith('attachment_'))
        .map(([, file]) => file as File)
        .filter(file => file instanceof File && file.size > 0);

      for (const file of files) {
        try {
          const buffer = Buffer.from(await file.arrayBuffer());
          const fileName = file.name;
          const uploadedUrl = await uploadToCloudinary(buffer, fileName);
          if (uploadedUrl) {
            attachmentUrls.push(uploadedUrl);
          }
        } catch (err) {
          console.error(`Cloudinary upload failed for ${file.name}:`, err);
          // Continue with other files even if one fails
        }
      }
    }

    // Validate required fields
    if (
      !contactData.fullName ||
      !contactData.email ||
      !contactData.phone ||
      !contactData.subject ||
      !contactData.service
    ) {
      return { success: false, message: "Please fill in all required fields." };
    }

    const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
    const SMTP_SECURE = SMTP_PORT === 465; // true for 465, false for other ports
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email content for support team
    const attachmentsText = attachmentUrls.length > 0 
      ? attachmentUrls.map((url, index) => `Attachment ${index + 1}: ${url}`).join('\n      ')
      : "No attachments provided";

    const supportEmailContent = `
      New Contact Form Submission
      
      Full Name: ${contactData.fullName}
      Email: ${contactData.email}
      Phone: ${contactData.phone}
      Subject: ${contactData.subject}
      Company/Startup: ${contactData.company || "Not provided"}
      Service of Interest: ${contactData.service}
      Attachments: 
      ${attachmentsText}
      
      Submitted at: ${new Date().toLocaleString()}
    `;

    // Confirmation email content for user
    const userConfirmationContent = `
      Dear ${contactData.fullName},

      Thank you for contacting SureScale Solutions. We have successfully received your inquiry regarding "${contactData.subject}".

      Our team will review your message and respond within 24-48 hours. We appreciate your interest in our services and look forward to assisting you.

      If you have any urgent questions, please feel free to contact us directly at sales@surescalesolutions.com.

      Best regards,
      SureScale Solutions Team
    `;

    // Send email to support team
    await transporter.sendMail({
      from: SMTP_USER,
      to: "sales@surescalesolutions.com",
      subject: `Contact Form: ${contactData.subject}`,
      text: supportEmailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Full Name:</strong> ${contactData.fullName}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Phone:</strong> ${contactData.phone}</p>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            <p><strong>Company/Startup:</strong> ${
              contactData.company || "Not provided"
            }</p>
            <p><strong>Service of Interest:</strong> ${contactData.service}</p>
            <p><strong>Attachments:</strong> ${
              attachmentUrls.length > 0
                ? attachmentUrls.map((url, index) => `<br>&nbsp;&nbsp;${index + 1}. <a href="${url}">${url}</a>`).join('')
                : "No attachments provided"
            }</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: SMTP_USER,
      to: contactData.email,
      subject: "Thank you for contacting SureScale Solutions",
      text: userConfirmationContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #007bff; margin: 0;">SureScale Solutions</h1>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px; border-left: 4px solid #007bff;">
            <h2 style="color: #333; margin-top: 0;">Thank you for reaching out!</h2>
            
            <p style="color: #555; line-height: 1.6;">
              Dear <strong>${contactData.fullName}</strong>,
            </p>
            
            <p style="color: #555; line-height: 1.6;">
              We have successfully received your inquiry regarding "<strong>${
                contactData.subject
              }</strong>". 
              Thank you for your interest in SureScale Solutions.
            </p>
            
            <p style="color: #555; line-height: 1.6;">
              Our team will carefully review your message and respond within <strong>24-48 hours</strong>. 
              We appreciate your patience and look forward to assisting you with your requirements.
            </p>
            
            <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; color: #1976d2; font-size: 14px;">
                <strong>Need immediate assistance?</strong><br>
        Contact us directly at: <a href="mailto:sales@surescalesolutions.com" style="color: #1976d2;">sales@surescalesolutions.com</a>
              </p>
            </div>

      ${
        attachmentUrls.length > 0
          ? `<div style="background-color: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
               <p style="margin: 0; color: #0369a1; font-size: 14px;">
                 <strong>Attachments uploaded:</strong><br>
                 ${attachmentUrls.map((url, index) => `${index + 1}. <a href="${url}" style="color: #0369a1;">${url}</a>`).join('<br>')}
               </p>
             </div>`
          : ""
      }
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 0;">
              Best regards,<br>
              <strong>The SureScale Solutions Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #888; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message:
        "Your message has been sent successfully! Check your email for confirmation.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
