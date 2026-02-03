import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFramer
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function TechStack() {
  return (
    <section className="w-full py-32 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">
      <div className="px-6 md:px-12 lg:px-28 max-w-7xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Our <span className="text-[#22FF88]">Technology Stack</span>
        </motion.h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-20">
          We use modern, trusted, and scalable technologies to build
          fast, secure, and future-ready websites for your business.
        </p>

        {/* 🔵 BALANCED CIRCULAR TECH STACK */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
          className="
            relative mx-auto
            w-[280px] h-[280px]
            sm:w-[360px] sm:h-[360px]
            md:w-[420px] md:h-[420px]
            lg:w-[500px] lg:h-[500px]
            mt-20
          "
        >
          {[
            { icon: <SiHtml5 />, label: "HTML", color: "from-orange-400 to-orange-600" },
            { icon: <SiCss3 />, label: "CSS", color: "from-blue-400 to-blue-600" },
            { icon: <SiJavascript />, label: "JavaScript", color: "from-yellow-300 to-yellow-500" },
            { icon: <SiReact />, label: "React", color: "from-cyan-400 to-cyan-600" },
            { icon: <SiNextdotjs />, label: "Next.js", color: "from-gray-700 to-gray-900" },
            { icon: <SiTailwindcss />, label: "Tailwind", color: "from-sky-400 to-sky-600" },
            { icon: <SiNodedotjs />, label: "Node.js", color: "from-green-400 to-green-600" },
            { icon: <SiMongodb />, label: "MongoDB", color: "from-emerald-400 to-emerald-600" },
            { icon: <SiMysql />, label: "SQL", color: "from-indigo-400 to-indigo-600" },
            { icon: <FaAws />, label: "AWS", color: "from-amber-400 to-amber-600" },
            { icon: <SiReact />, label: "React Native", color: "from-cyan-400 to-cyan-600" },
            { icon: <SiFramer />, label: "Framer Motion", color: "from-pink-400 to-pink-600" },
          ].map((tech, i) => {
            const angle = (360 / 12) * i;
            const radius =
              typeof window !== "undefined" && window.innerWidth < 640
                ? 110
                : window.innerWidth < 1024
                ? 150
                : 190;

            return (
              <div
                key={i}
                style={{
                  transform: `rotate(${angle}deg) translate(0, -${radius}px) rotate(-${angle}deg)`
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`
                      w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                      rounded-full bg-gradient-to-br ${tech.color}
                      shadow-xl
                      flex items-center justify-center
                      text-lg sm:text-xl md:text-2xl
                      text-white
                      transition-all duration-300
                      hover:scale-125
                    `}
                  >
                    {tech.icon}
                  </div>

                  <span className="text-[10px] sm:text-xs md:text-sm font-extrabold text-gray-800 text-center">
                    {tech.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
