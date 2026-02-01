import { motion } from "framer-motion";

/* ================= DUMMY IMAGE LINKS ================= */
const heroImg = "https://illustrations.popsy.co/white/startup-launch.svg";
const webImg = "https://illustrations.popsy.co/white/web-design.svg";
const appImg = "https://illustrations.popsy.co/white/mobile-app.svg";
const aiImg = "https://illustrations.popsy.co/white/artificial-intelligence.svg";
const processImg = "https://illustrations.popsy.co/white/process.svg";
const teamImg = "https://illustrations.popsy.co/white/team-work.svg";
const techImg = "https://illustrations.popsy.co/white/programming.svg";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden font-inter">

      {/* =====================================================
          HERO SECTION – LIVE / FLOATING / ROTATING
      ====================================================== */}
      <section className="relative min-h-screen pt-40 overflow-hidden
        bg-gradient-to-br from-[#E6FFF5] via-[#ECFEFF] to-[#EEF2FF]">

        {/* Floating blobs */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#22FF88]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/30 rounded-full blur-3xl animate-pulse"></div>

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:22px_22px]"></div>

        <div className="relative z-10 px-10 lg:px-28 grid md:grid-cols-2 gap-24 items-center">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl xl:text-6xl font-extrabold text-[#0F172A] leading-tight">
              We Build <br />
              <span className="text-[#22FF88]">Websites</span>,{" "}
              <span className="text-[#00E5CC]">Mobile Apps</span> &{" "}
              <span className="text-[#3B82F6]">AI Automation</span>
            </h1>

            <p className="text-lg text-gray-700 max-w-xl">
              We are a full-service digital development studio that helps
              startups, businesses and brands build powerful online presence,
              scalable applications and intelligent automation systems.
            </p>

            <p className="text-gray-600 max-w-xl">
              From business websites to mobile apps and AI-powered automation,
              we focus on real growth, real users and real results.
            </p>

            <div className="flex gap-6 flex-wrap">
              <button className="px-10 py-4 rounded-full
                bg-gradient-to-r from-[#22FF88] to-[#00E5CC]
                text-[#0F172A] font-bold
                hover:scale-110 hover:shadow-2xl transition-all duration-300">
                Get Free Quote
              </button>

              <button className="px-10 py-4 rounded-full
                border-2 border-[#3B82F6] text-[#3B82F6]
                hover:bg-[#3B82F6] hover:text-white
                hover:scale-105 transition-all duration-300">
                WhatsApp Us
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.img
            src={heroImg}
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full max-w-xl mx-auto hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* =====================================================
          TRUST / STATS
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="px-10 lg:px-28 grid grid-cols-2 md:grid-cols-4 gap-14 text-center">
          {[
            ["50+", "Projects Delivered"],
            ["30+", "Happy Clients"],
            ["5+", "Industries Served"],
            ["24/7", "Support & Maintenance"],
          ].map(([num, label], i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="transition"
            >
              <h3 className="text-5xl font-extrabold text-[#22FF88]">{num}</h3>
              <p className="mt-3 text-gray-600">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SERVICES – FULL EXPLANATION + HOVER
      ====================================================== */}
      <section className="py-36 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">
        <div className="px-10 lg:px-28">
          <h2 className="text-5xl font-bold text-center mb-24 text-[#0F172A]">
            Our <span className="text-[#22FF88]">Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "Web Development",
                img: webImg,
                color: "#22FF88",
                desc:
                  "We design and develop fast, responsive and SEO-friendly websites that help your business attract customers, build trust and convert visitors into leads."
              },
              {
                title: "App Development",
                img: appImg,
                color: "#00E5CC",
                desc:
                  "We build modern Android and iOS applications with smooth user experience, scalable backend and clean architecture."
              },
              {
                title: "AI Automation",
                img: aiImg,
                color: "#3B82F6",
                desc:
                  "We automate your business using AI chatbots, CRM automation, workflows and smart systems to save time and cost."
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -20, rotate: 1 }}
                className="relative p-12 rounded-[30px] bg-white shadow-xl
                hover:shadow-2xl transition-all duration-500"
              >
                <img src={s.img} className="h-40 mx-auto mb-8" />
                <h3 className="text-3xl font-bold mb-4" style={{ color: s.color }}>
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS – STEP BY STEP
      ====================================================== */}
      <section className="py-36 bg-white">
        <div className="px-10 lg:px-28 grid md:grid-cols-2 gap-24 items-center">

          <motion.img
            src={processImg}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="max-w-md mx-auto"
          />

          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-[#0F172A]">
              How We <span className="text-[#00E5CC]">Work</span>
            </h2>

            {[
              "Understanding your business and goals",
              "Designing user-friendly interfaces",
              "Developing scalable & secure systems",
              "Testing, launching & continuous improvement",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 rounded-xl bg-[#F8FFFE] shadow"
              >
                <strong>{i + 1}.</strong> {step}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECH STACK / TEAM
      ====================================================== */}
      <section className="py-36 bg-gradient-to-br from-[#ECFEFF] to-[#F0FFF9]">
        <div className="px-10 lg:px-28 grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-[#0F172A]">
              Technology & Expertise
            </h2>
            <p className="text-gray-700 mb-6">
              We use modern frameworks, tools and cloud technologies
              to ensure performance, security and scalability.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>✔ React, Node.js, MongoDB</li>
              <li>✔ Cloud & API integrations</li>
              <li>✔ AI & Automation systems</li>
              <li>✔ Long-term support</li>
            </ul>
          </div>

          <motion.img
            src={techImg}
            whileHover={{ scale: 1.05 }}
            className="max-w-md mx-auto"
          />
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="py-36 bg-gradient-to-r from-[#22FF88] via-[#00E5CC] to-[#3B82F6] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-white mb-8"
        >
          Ready to Build Something Powerful?
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.15 }}
          className="px-16 py-5 rounded-full bg-white
          font-bold text-xl shadow-xl"
        >
          Start Your Project
        </motion.button>
      </section>

    </main>
  );
}
