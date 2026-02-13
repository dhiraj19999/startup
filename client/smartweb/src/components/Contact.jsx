import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#020617] to-black flex items-center justify-center px-4 py-20">

      {/* Glass Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl grid md:grid-cols-2
        backdrop-blur-xl bg-white/5 border border-white/10
        rounded-3xl shadow-2xl overflow-hidden"
      >

        {/* LEFT INFO */}
        <div className="p-10 md:p-14 text-white flex flex-col justify-center bg-gradient-to-br from-[#22FF88]/20 to-[#00E5CC]/10">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Let’s Build <br />
            <span className="text-[#22FF88]">Something Amazing</span>
          </h2>

          <p className="text-white/80 mb-8 leading-relaxed">
            Have a project idea or need a powerful digital solution for your
            business? Fill out the form and our team will contact you within
            24 hours.
          </p>

          <div className="space-y-3 text-sm text-white/70">
            <p>📍 India</p>
            <p>📞 +91 8459116231</p>
            <p>✉️ dhirajgarad46@gmail.com</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-10 md:p-14 bg-white">

          <motion.h3
            variants={fadeUp}
            className="text-3xl font-extrabold mb-8 text-gray-900"
          >
            Contact Us
          </motion.h3>

          <form className="space-y-6">

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-[#22FF88]
                transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-[#22FF88]
                transition"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-[#22FF88]
                transition"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="4"
                placeholder="Your Message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-[#22FF88]
                transition resize-none"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white
              bg-gradient-to-r from-[#22FF88] via-[#00E5CC] to-[#3B82F6]
              shadow-lg hover:shadow-2xl transition"
            >
              Send Message 🚀
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
