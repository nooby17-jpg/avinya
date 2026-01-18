import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function sendContactEmail(data: ContactPayload) {
  if (!process.env.CONTACT_TO_EMAIL) {
    throw new Error("CONTACT_TO_EMAIL not configured");
  }

  await resend.emails.send({
    from: "Avinya <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL,
    subject: `New Contact Message from ${data.name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
}
