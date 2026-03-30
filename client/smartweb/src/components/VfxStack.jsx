


import capcut from "../assets/capcut.png"
import { motion } from "framer-motion";
import { BiLogoAdobe } from "react-icons/bi"
import { FaAws } from "react-icons/fa";
import { SiWondersharefilmora } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { SiBlackmagicdesign } from "react-icons/si";
import { SiNuke } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { FaClosedCaptioning } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
export default function Vfxtechstack() {
  return (
    <section className="w-full py-32 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">

<Helmet>
<title>
VFX Tools & Video Editing Technology Stack | SmartWeb AI
</title>

<meta
name="description"
content="SmartWeb AI uses professional VFX and video editing tools including Adobe, Blender, DaVinci Resolve, Nuke, CapCut, Filmora and Canva to create cinematic videos and motion graphics."
/>

<meta
name="keywords"
content="VFX tools, video editing tools, Adobe Premiere, After Effects, Blender VFX, DaVinci Resolve, Nuke VFX, CapCut editing, Filmora editing, motion graphics tools"
/>

<meta name="robots" content="index, follow" />

<meta property="og:title" content="VFX Technology Stack | SmartWeb AI" />

<meta
property="og:description"
content="Professional VFX and video editing tools used to create cinematic videos and motion graphics."
/>

<meta property="og:type" content="website" />
</Helmet>




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
        We use advanced VFX and professional video editing tools to create cinematic, high-quality videos, visual effects, motion graphics, and engaging content for brands, YouTube, and social media.
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
            { icon: <BiLogoAdobe />, label: "Adobe Suite", color: "from-orange-400 to-orange-600" },
            { icon: <FaClosedCaptioning/>, label: "CapCut", color: "from-blue-400 to-blue-600" },
            { icon: <SiWondersharefilmora />, label: "Wondershare Filmora", color: "from-green-400 to-green-600" },
            { icon: <SiDavinciresolve />, label: "DaVinci Resolve", color: "from-purple-400 to-purple-600" },
            { icon: <SiBlender />, label: "Blender", color: "from-pink-400 to-pink-600" },
            { icon: <SiBlackmagicdesign />, label: "Blackmagic Design", color: "from-gray-400 to-gray-600" },
            { icon: <SiNuke />, label: "Nuke", color: "from-gray-400 to-gray-600" },
            { icon: <SiCanva />, label: "Canva", color: "from-pink-400 to-pink-600" },
           
          ].map((tech, i) => {
            const angle = (360 / 8) * i;
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
