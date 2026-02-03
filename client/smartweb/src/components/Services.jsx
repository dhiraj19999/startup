import { motion } from "framer-motion";
import app from "../assets/app.png";
import web from "../assets/web.png";
import ai from "../assets/ai.png";
import ecom from "../assets/e-commerce.png";
import dsahbord from "../assets/dashbord.png";
import custom from "../assets/custom.png";
import { Link } from "react-router-dom";

/* ================= ANIMATION (UNCHANGED) ================= */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
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
      {/* 🔥 FULL WIDTH CONTAINER */}
      <div className="w-full max-w-none px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">

        {/* ================= HEADING ================= */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Our <span className="text-[#22FF88]">Services</span>
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-4xl mx-auto mb-24">
          Business-focused digital solutions designed to increase revenue,
          automate operations and scale your company faster.
        </p>

        {/* ================= GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 2xl:gap-6"
        >
          {[
            {
              title: "Business Website Development",
              img: web,
              desc:
                "Looking for a professional website for your business We create modern, high-conve...",
              points: [
                "Professional & modern design",
                "Lead-focused website structure",
                "Fully mobile & tablet responsive",
                "SEO-optimized website",
              ],
              bg: "from-[#E6FFF5] to-[#C8FDEA]",
               link: "/services/web-development",
            },
            {
              title: "Mobile App Development",
              img: app,
              desc:
                "Looking for a mobile app to engage your customers better We build smooth, user-friendly...",
              points: [
                "Android & iOS app development",
                "Clean and intuitive UI/UX",
                "Customer engagement features",
                "High performance & scalability",
              ],
              bg: "from-[#ECFEFF] to-[#C7F5FF]",
              link: "/services/mobile-app",
            },
            {
              title: "AI Automation Solutions",
              img: ai,
              desc:
                "Looking to automate your business processes and save time Our AI automation solutions...",
              points: [
                "AI chatbots for 24/7 customer support",
                "Automated lead capture & follow-ups",
                "CRM & sales automation",
                "Smart analytics & insights",
              ],
              bg: "from-[#EEF2FF] to-[#DDE5FF]",
              link: "/services/ai-automation",

            },
            {
              title: "E-Commerce Solutions",
              img: ecom,
              desc:
                "Looking to sell your products online with full control We build powerful e-commerce platfor...",
              points: [
                "Mobile-friendly shopping experience",
                "Secure online payment integration",
                "Product, order, stock  & customer management",
                "Sales reports & performance analytics",
              ],
              bg: "from-[#FFF7ED] to-[#FFE4C7]",
              link: "/services/ecommerce",

            },
            {
              title: "Business Dashboards",
              img: dsahbord,
              desc:
                "Looking for real-time insights into your business performance Our custom dashboards give you...",
              points: [
                "Real-time reports & analytics",
                "Revenue & growth tracking",
                "Role-based access control",
                "Team performance monitoring",
              ],
              bg: "from-[#F0F9FF] to-[#DBEAFE]",
              link: "/services/dashboard",
            },
            {
              title: "Custom Business Software",
              img: custom,
              desc:
                "Looking for software built exactly for your business workflow We develop custom software solu...",
              points: [
                "Custom features & business logic",
                "High performance & reliability",
                "Scalable & secure architecture",
                "Long-term support & maintenance",
              ],
              bg: "from-[#FDF2F8] to-[#FBCFE8]",
              link: "/services/custom-software",
            },
          ].map((service, i) => (
        
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -10 }}
              className={`px-14 py-8 rounded-3xl bg-gradient-to-br ${service.bg}
              shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-36 mx-auto mb-6"
              />

              <h3 className="text-[26px] font-extrabold tracking-tight text-center mb-3">
                {service.title}
              </h3>

              <p className="text-[15px] leading-[1.7] font-medium text-gray-700 text-center mb-6">
                {service.desc}
              </p>

            <ul className="space-y-3 text-[15px] font-semibold text-gray-800">
  {service.points.map((point, idx) => (
    <li
      key={idx}
      className="relative pl-6 leading-snug"
    >
      <span className="absolute left-0 top-0.5 text-[#22FF88] font-extrabold text-lg">
        ✔
      </span>
      {point}
    </li>
  ))}
</ul>




<motion.div
  whileHover={{ x: 6 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="mt-6 text-center"
>
  <Link
    to={service.link}
    className="inline-flex items-center gap-2
    text-[#ff5252] font-extrabold text-[15px]
    hover:text-[#22FF88] transition-colors"
  >
    View Details
    <span className="text-lg">→</span>
  </Link>
</motion.div>


            </motion.div>





          ))}
        </motion.div> 
      </div>
    </section>
  );
}
