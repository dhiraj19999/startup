import mongoose from "mongoose";

/* ---------- IST TIME FORMAT FUNCTION ---------- */
const getISTTimeString = () => {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 🔥 AM/PM format
  });
};

/* ---------- MESSAGE SCHEMA ---------- */
const messageSchema = new mongoose.Schema(
  {
    text: String,

    time: {
      type: String,
      default: getISTTimeString, // 🔥 IST + AM/PM auto save
    },
  },
  { _id: false }
);

/* ---------- CONTACT SCHEMA ---------- */
const contactSchema = new mongoose.Schema(
  {
    fullName: String,
    email: { type: String, required: true, unique: true },
    phone: String,

    messages: [messageSchema], // 🔥 array of messages with IST time
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
