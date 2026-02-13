import Contact from "../models/Contact.js";
import { sendEmails } from "../services/emailService.js";


export const sendContact = async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    let contact = await Contact.findOne({ email });

    if (contact) {
     
      contact.messages.push({ text: message });
      await contact.save();
    } else {
      // 🆕 Create new contact with first message
      contact = await Contact.create({
        fullName,
        email,
        phone,
        messages: [{ text: message }],
      });
    }



    // send notifications
   await sendEmails(req.body);
  

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
