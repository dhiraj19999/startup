import { motion } from "framer-motion";
import app from "../assets/app.png";
import web from "../assets/web.png";
import ai from "../assets/ai.png";
import ecom from "../assets/e-commerce.png";
import dsahbord from "../assets/dashbord.png";
import custom from "../assets/custom.png";

/* ================= ANIMATION FIX ================= */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,   // 👈 ek-ek card delay
      delayChildren: 0.15
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-28">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Our <span className="text-[#22FF88]">Services</span>
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-20">
          Business-focused digital solutions designed to increase revenue,
          automate operations and scale your company faster.
        </p>

        {/* 🔥 MAIN FIX HERE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {[
            {
              title: "Business Website Development",
              img: web,
              desc: "Professional websites that generate leads and build trust.",
              points: [
                "Lead generation",
                "SEO & Google ranking",
                "Mobile friendly",
                "Fast performance",
              ],
              bg: "from-[#E6FFF5] to-[#C8FDEA]",
            },
            {
              title: "Mobile App Development",
              img: app,
              desc: "Apps that increase customer engagement & retention.",
              points: [
                "Android & iOS apps",
                "Push notifications",
                "Customer engagement",
                "Secure backend",
              ],
              bg: "from-[#ECFEFF] to-[#C7F5FF]",
            },
            {
              title: "AI Automation Solutions",
              img: ai,
              desc: "Automate support, sales & internal workflows.",
              points: [
                "Chatbots",
                "CRM automation",
                "Lead handling",
                "Smart analytics",
              ],
              bg: "from-[#EEF2FF] to-[#DDE5FF]",
            },
            {
              title: "E-Commerce Solutions",
              img: ecom,
              desc: "Sell products online with full control & insights.",
              points: [
                "Online payments",
                "Order management",
                "Inventory control",
                "Sales analytics",
              ],
              bg: "from-[#FFF7ED] to-[#FFE4C7]",
            },
            {
              title: "Business Dashboards",
              img: dsahbord,
              desc: "Monitor sales, team & performance in one place.",
              points: [
                "Real-time reports",
                "Revenue tracking",
                "Role management",
                "Decision insights",
              ],
              bg: "from-[#F0F9FF] to-[#DBEAFE]",
            },
            {
              title: "Custom Business Software",
              img: custom,
              desc: "Software built exactly for your business workflow.",
              points: [
                "Custom logic",
                "Scalable system",
                "High security",
                "Long-term support",
              ],
              bg: "from-[#FDF2F8] to-[#FBCFE8]",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className={`p-7 rounded-2xl bg-gradient-to-br ${service.bg}
              shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <img
                src={service.img}
                className="h-32 mx-auto mb-4"
                alt={service.title}
              />

              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-700 text-center mb-4">
                {service.desc}
              </p>

              <ul className="space-y-2 text-sm text-gray-700">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#22FF88] font-bold">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
