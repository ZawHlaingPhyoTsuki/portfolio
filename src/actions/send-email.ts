"use server";

export async function sendEmail(formData: FormData) {
  // Your existing email sending logic
  const name = formData.get("name") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Add your email sending logic here
  // Return { success: true } or { error: "Error message" }

  return { success: true, error: null };
}
