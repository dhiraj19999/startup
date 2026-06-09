import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const toastId = toast.loading("Sending message...", {
    style: {
      background: "#0F172A",
      color: "#fff",
    },
  });

  try {





    const result = await emailjs.send(
      "service_efqke0p", // service id
      "template_cjun0zq", // template id
      {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      "wjLJKMc9ui9-Tcnk8" // public key
    );

    if (result.status === 200) {
      toast.success(
        "Message sent successfully! Our team will contact you shortly 🚀",
        { id: toastId }
      );

      setForm({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  } catch (error) {
    toast.error("Failed to send message ❌", { id: toastId });
  }

  setLoading(false);
};
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#020617] to-black flex items-center justify-center px-4 ">
     
     <Helmet>
<title>
Contact SmartWeb AI | Website, App & AI Development Company India
</title>

<meta
name="description"
content="Contact SmartWeb AI for website development, mobile app development, AI automation, ecommerce, video editing and VFX services. Get a free quote for your business project across India."
/>

<meta
name="keywords"
content="contact SmartWeb AI, website development contact India, mobile app development contact, AI automation company India, ecommerce developer contact, VFX video editing company India, SmartWeb AI contact"
/>

<meta name="robots" content="index, follow" />

<meta property="og:title" content="Contact SmartWeb AI" />

<meta
property="og:description"
content="Get in touch with SmartWeb AI for websites, mobile apps, AI automation, ecommerce and VFX services."
/>

<meta property="og:type" content="website" />

<link rel="canonical" href="https://smartwebai.in/contact" />
</Helmet>
     
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl grid md:grid-cols-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* LEFT */}
        <div className="p-10 md:p-14 text-white flex flex-col justify-center bg-gradient-to-br from-[#22FF88]/20 to-[#00E5CC]/10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Let’s Build <br />
            <span className="text-[#22FF88]">Something Amazing</span>
          </h2>

          <p className="text-white/80 mb-8 leading-relaxed">
            Fill the form and our team will contact you within 24 hours.
          </p>

          <div className="space-y-3 text-sm text-white/70">
            <p>📍 India</p>
            <p>📞 +91 8459116231</p>
            <p>✉️ info@smartwebai.in</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-10 md:p-14 bg-white">
          <h3 className="text-3xl font-extrabold mb-8 text-gray-900">
            Contact Us
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#22FF88]"
              required
            />
                  

                                                         
                                          
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#22FF88]"
              required
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#22FF88]"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message..."
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#22FF88]"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              disabled={loading}
              className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#22FF88] via-[#00E5CC] to-[#3B82F6]"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
