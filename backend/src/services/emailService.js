import nodemailer from "nodemailer";
import { Resend } from 'resend';
import dotenv from "dotenv";

dotenv.config();

/*const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmails = async (data) => {
  const receivers = process.env.EMAIL_RECEIVERS.split(",");
  

  const html = `
    <h2>New  Client Contact Message from SmartwebAI</h2>
    <p><b>Name:</b> ${data.fullName}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Phone:</b> ${data.phone}</p>
     <p><b>Message:</b> ${data.message}</p>
  `;

  for (const mail of receivers) {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: mail.trim(),
      subject: "New Contact Message",
      html,
    });
  }
};
*/

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmails = async (data) => {
  const receivers = process.env.EMAIL_RECEIVERS.split(",");

  for (const mail of receivers) {
    await resend.emails.send({
      from:  process.env.EMAIL_USER, // verified domain or Resend address
      to: mail.trim(),
      subject: "New Contact Message",
      
      html: `
        <h2>New Client Contact Message from SmartwebAI</h2>
        <p><b>Name:</b> ${data.fullName}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });
  }
};
