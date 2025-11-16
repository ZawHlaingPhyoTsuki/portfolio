"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  name: z.string().min(1, "Name is required"),
  senderEmail: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function sendEmail(formData: FormData) {
  try {
    // Parse and validate form data
    const rawFormData = {
      name: formData.get("name") as string,
      senderEmail: formData.get("senderEmail") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const validatedData = emailSchema.parse(rawFormData);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Replace with verified domain
      to: ["tro2233zhp@gmail.com"],
      subject: `Portfolio Contact: ${validatedData.subject}`,
      replyTo: validatedData.senderEmail,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Contact Form Submission</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; margin-bottom: 5px; }
              .value { padding: 10px; background: #f8f9fa; border-radius: 4px; border-left: 4px solid #007acc; }
              .message { white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>You have received a new message from your portfolio website.</p>
              </div>
              
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${validatedData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${validatedData.senderEmail}</div>
              </div>
              
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${validatedData.subject}</div>
              </div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="value message">${validatedData.message}</div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666;">
                <p>This email was sent from your portfolio contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.senderEmail}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
This email was sent from portfolio contact form.
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: "Failed to send email. Please try again later." };
    }

    console.log("Email sent successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Send email error:", error);

    if (error instanceof z.ZodError) {
      return { error: "Invalid form data. Please check your input." };
    }

    return { error: "An unexpected error occurred. Please try again." };
  }
}
