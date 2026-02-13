import Contact from "../models/Contact.js";
import { sendEmails } from "../services/emailService.js";


export const sendContact = async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    // save in DB
    await Contact.create({ fullName, email, phone, subject, message });

    // send notifications
    await sendEmails(req.body);
  

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
