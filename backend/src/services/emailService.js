import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmails = async (data) => {
  const receivers = process.env.EMAIL_RECEIVERS.split(",");

  const html = `
    <h2>New Contact Message</h2>
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
