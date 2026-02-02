import { motion } from "framer-motion";

/* ================= PNGs ================= */
const aboutImg = "https://illustrations.popsy.co/white/team-work.svg";
const valueImg = "https://illustrations.popsy.co/white/values.svg";

/* ================= ANIMATIONS ================= */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.22 }
  }
};

const item = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 110, damping: 18 }
  }
};

export default function About() {
  return (
    <main className="w-full overflow-x-hidden text-[#0F172A]">

      {/* ================= HERO ================= */}
      <section className="min-h-[85vh] pt-32 bg-gradient-to-br from-[#E6FFF5] via-[#ECFEFF] to-[#EEF2FF]">
        <div className="px-6 md:px-12 lg:px-28 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={item}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              About <span className="text-[#22FF88]">SmartWeb</span>
              <span className="text-[#3B82F6]">AI</span>
            </h1>

            <p className="text-lg text-gray-700">
              We are a modern digital technology company building scalable,
              high-impact web, app and AI solutions.
            </p>

            <p className="text-gray-600">
              Our goal is simple — reduce complexity, automate processes
              and help businesses grow faster.
            </p>
          </motion.div>

          <motion.img
            src={aboutImg}
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="max-w-md mx-auto"
          />
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-36 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">
        <div className="px-6 md:px-12 lg:px-28 max-w-7xl mx-auto">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={item}>
              <h2 className="text-4xl font-bold mb-6">
                Who <span className="text-[#00E5CC]">We Are</span>
              </h2>

              <p className="text-gray-700 mb-4">
                We are developers, designers and problem-solvers who believe
                technology should feel simple, fast and powerful.
              </p>

              <p className="text-gray-600">
                We don’t just build software — we build long-term solutions.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ y: -12, scale: 1.06 }}
              className="p-10 rounded-3xl bg-gradient-to-br
              from-[#22FF88]/30 via-[#00E5CC]/30 to-[#3B82F6]/30
              shadow-2xl backdrop-blur-xl"
            >
              <ul className="space-y-4 font-semibold">
                <li>🚀 50+ Projects Delivered</li>
                <li>🤝 Long-term Partnerships</li>
                <li>⚙️ Modern Tech Stack</li>
                <li>🧠 AI & Automation Focus</li>
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="py-36 bg-gradient-to-br from-[#ECFEFF] to-[#EEF2FF]">
        <div className="px-6 md:px-12 lg:px-28 max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-20">
            Our <span className="text-[#22FF88]">Values</span>
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              ["Transparency", "Clear communication & honest work.", "from-[#22FF88]/40 to-[#00E5CC]/40"],
              ["Quality", "Clean code & scalable systems.", "from-[#00E5CC]/40 to-[#3B82F6]/40"],
              ["Innovation", "Modern tools & AI-first mindset.", "from-[#3B82F6]/40 to-[#22FF88]/40"],
              ["Commitment", "Long-term success focus.", "from-[#EEF2FF] to-[#ECFEFF]"]
            ].map(([title, desc, bg], i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -16, rotate: 1.8, scale: 1.07 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${bg}
                shadow-2xl backdrop-blur-xl`}
              >
                {/* SMALL PNG ICON */}
                <img
                  src={valueImg}
                  className="h-12 mb-4"
                  alt="value-icon"
                />

                <h4 className="text-xl font-bold mb-3">{title}</h4>
                <p className="text-gray-700 text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-36 bg-gradient-to-r from-[#22FF88] via-[#00E5CC] to-[#3B82F6]">
        <div className="px-6 md:px-12 lg:px-28 max-w-7xl mx-auto">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 text-white text-center"
          >
            {[
              ["50+", "Projects"],
              ["30+", "Clients"],
              ["5+", "Industries"],
              ["24/7", "Support"]
            ].map(([num, label], i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.18, y: -8 }}
              >
                <h3 className="text-5xl font-extrabold">{num}</h3>
                <p className="mt-2 text-white/90">{label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-[#0F172A] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Let’s Build Something Impactful
        </motion.h2>

        <motion.button
          whileHover={{
            scale: 1.18,
            boxShadow: "0 0 40px rgba(34,255,136,0.7)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-16 py-4 rounded-full bg-gradient-to-r
          from-[#22FF88] to-[#00E5CC] font-bold shadow-xl"
        >
          Contact Us
        </motion.button>
      </section>

    </main>
  );
}
