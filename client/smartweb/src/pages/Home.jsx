import { motion } from "framer-motion";
import hero from "../assets/hero.webp";
import Services from "../components/Services";
import About from "./About";
import Clients from "../components/Clients";
import Projects from "../components/Project";
import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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



const handleWhatsApp = () => {
  const phone = "918459116231"; // apna number

  const message = `Hi SmartWeb AI 👋

I’m interested in your web development services.


Please share more details.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

const handleQuote = () => {
  const phone = "918459116231";

  const message = `Hi SmartWeb AI 👋

I want to get a FREE quote for:

Service: Web Development
Please share pricing & details.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  return (
    <main className="w-full overflow-x-hidden text-[#0F172A]">

      <Helmet>
<title>
SmartWeb AI - Website Development Company in Pune, Latur, Ambejogai | India
</title>

<meta
name="description"
content="SmartWeb AI provides website development, mobile app development and AI automation services in Pune, Latur, Ambejogai and across India. We build SEO optimized business websites that generate leads and grow your business."
/>

<meta
name="keywords"
content="website developer Pune, website developer Latur,Mobile app developement , website developer Ambejogai, web development India, business website India, AI automation India, web design Maharashtra, ecommerce website India, SmartWeb AI"
/>

<meta name="robots" content="index, follow" />
<meta name="author" content="SmartWeb AI" />

<meta property="og:title" content="SmartWeb AI - Website Development & AI Automation" />
<meta property="og:description" content="We build business websites, mobile apps and AI automation across India." />
<meta property="og:type" content="website" />
</Helmet>

      {/* ================= HERO ================= */}
      <section id="home" className="w-full pt-24 pb-12 md:pt-32 md:pb-16  bg-gradient-to-br from-[#E6FFF5] via-[#ECFEFF] to-[#EEF2FF]">
        <div className="w-full px-6 md:px-12 lg:px-28 grid md:grid-cols-2 gap-16 items-start md:items-center">

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
             SmartWeb AI helps businesses create powerful digital presence with modern
        websites, mobile apps and intelligent automation. We design fast, SEO
        optimized solutions that attract customers, generate leads and increase
        your business revenue.
            </p>

 <div className="flex flex-wrap gap-3 text-sm font-semibold">
        <span className="bg-white px-4 py-2 rounded-full shadow">
          🚀 Lead Generating Websites
        </span>
        <span className="bg-white px-4 py-2 rounded-full shadow">
          📱 Business Mobile Apps
        </span>
        <span className="bg-white px-4 py-2 rounded-full shadow">
          🤖 AI Automation
        </span>
        <span className="bg-white px-4 py-2 rounded-full shadow">
          📈 SEO Optimized Design
        </span>
         <span className="bg-white px-4 py-2 rounded-full shadow">
    🎬 Video Editing
  </span>

  <span className="bg-white px-4 py-2 rounded-full shadow">
    ✨ VFX & Motion Graphics
  </span>
        
      </div>

            <div className="flex gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.08 }}
                onClick={handleQuote}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#22FF88] to-[#00E5CC]
                font-semibold shadow-md"
              >
                 Get Free Website Demo
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="px-8 py-3 rounded-full border-2 border-[#3B82F6]
                text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition"
              >
                WhatsApp Us
              </motion.button>
            </div>
             <p className="text-sm text-gray-500">
        Website Development • Web Design • Business Websites • AI Automation •
        Landing Pages • E-commerce • Digital Growth
      </p>
          </motion.div>

          <motion.img
            src={heroImg}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="w-full max-w-md md:max-w-lg mx-auto"
           loading="eager"
  fetchPriority="high"

          />
        </div>
      </section>


 {/* ================= About ================= */}

<section id="about">

  <About/>
</section>

    {/* ================= HOW WE WORK ================= */}
    


      {/* ================= SERVICES ================= */}



      <section id="services">
        <Services/>
      </section>

{/* ================= Clients ================= */}
<section id="clients">
  <Clients/>
</section>
      
  {/* =======            Projects             ======== */}
<search id="projects">  <Projects/></search>
   



 <section className="py-28 text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Ready to Be Our Next Success Story?
        </h2>

         <div className="flex gap-4 flex-wrap justify-center items-center text-center mt-8">
  <motion.button
    whileHover={{ scale: 1.08 }}
    onClick={handleQuote}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#22FF88] to-[#00E5CC]
    font-semibold shadow-md"
  >
    Get Free Website Demo
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handleWhatsApp}
    className="px-8 py-3 rounded-full border-2 border-[#3B82F6]
    text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition"
  >
    WhatsApp Us
  </motion.button>
</div>
      </section>

{/* === Contact  ==    */}

<section id="contact"> <Contact/> </section>



      {/* ================= CTA ================= */}
    
    </main>
  );
}
