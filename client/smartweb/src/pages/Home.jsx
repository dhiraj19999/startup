import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import Services from "../components/Services";

/* Dummy images */
const heroImg = hero
const webImg = "https://illustrations.popsy.co/white/web-design.svg";
const appImg = "https://illustrations.popsy.co/white/mobile-app.svg";
const aiImg = "https://illustrations.popsy.co/white/artificial-intelligence.svg";

/* Animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden text-[#0F172A]">

      {/* ================= HERO ================= */}
      <section className="w-full min-h-screen pt-32 bg-gradient-to-br from-[#E6FFF5] via-[#ECFEFF] to-[#EEF2FF]">
        <div className="w-full px-6 md:px-12 lg:px-28 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              We Build <br />
              <span className="text-[#22FF88]">Websites</span>,{" "}
              <span className="text-[#00E5CC]">Mobile Apps</span> &{" "}
              <span className="text-[#3B82F6]">AI Automation</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 max-w-2xl">
              We help startups and businesses build strong digital presence,
              scalable products and intelligent automation systems that save time
              and increase growth.
            </p>

            <div className="flex gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#22FF88] to-[#00E5CC]
                font-semibold shadow-md"
              >
                Get Free Quote
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border-2 border-[#3B82F6]
                text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition"
              >
                WhatsApp Us
              </motion.button>
            </div>
          </motion.div>

          <motion.img
            src={heroImg}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="w-full max-w-md md:max-w-lg mx-auto"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section>
        <Services/>
      </section>
      
      {/* ================= HOW WE WORK ================= */}
      <section className="w-full py-32 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">
        <div className="w-full px-6 md:px-12 lg:px-28">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            How We <span className="text-[#00E5CC]">Work</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["1. Understand", "We deeply understand your business goals", "from-[#E6FFF5] to-[#C8FDEA]"],
              ["2. Plan", "We plan architecture & user journey", "from-[#ECFEFF] to-[#C7F5FF]"],
              ["3. Build", "We develop scalable & clean systems", "from-[#EEF2FF] to-[#DDE5FF]"],
              ["4. Launch & Support", "We launch, monitor & improve continuously", "from-[#FFF7ED] to-[#FFE4C7]"],
            ].map(([title, desc, bg], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotate: 0.6 }}
                transition={{ duration: 0.45 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${bg}
                shadow-lg hover:shadow-xl`}
              >
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-sm text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-32 bg-gradient-to-r from-[#22FF88] via-[#00E5CC] to-[#3B82F6] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Let’s Build Something Powerful Together 🚀
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260 }}
          className="px-12 py-4 rounded-full bg-white
          font-semibold text-lg shadow-xl"
        >
          Start Your Project
        </motion.button>
      </section>

    </main>
  );
}
