

import { motion } from "framer-motion";
import aiHero from "../../assets/ai.png";
import { FaPython } from "react-icons/fa";
import TechStack from "../../components/Techstack";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";


/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AIAutomationSolutions() {


const handleWhatsApp = () => {
  const phone = "918459116231"; // apna number

  const message = `Hi SmartWeb AI 👋

I’m interested in your Ai automation services.


Please share more details.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};



  return (
    <main className="w-full overflow-x-hidden text-[#0F172A] text-base sm:text-[15px]">



       <Helmet>
<title>
AI Automation Solutions for Business | SmartWeb AI
</title>

<meta
name="description"
content="SmartWeb AI provides AI automation solutions for businesses including chatbots, workflow automation, CRM automation and intelligent systems. Automate operations, reduce manual work and grow faster."
/>

<meta
name="keywords"
content="AI automation solutions, business automation, AI chatbot development, workflow automation, CRM automation, AI business solutions, automation software, smartweb ai"
/>

<meta name="robots" content="index, follow" />
<meta name="author" content="SmartWeb AI" />

<meta property="og:title" content="AI Automation Solutions | SmartWeb AI" />
<meta
property="og:description"
content="Automate workflows, reduce manual work and grow your business using AI automation."
/>

<meta property="og:type" content="website" />
</Helmet>

      {/* ======================================================
         HERO
      ====================================================== */}
     <section className="pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28 bg-gradient-to-br from-[#E6FFF5] via-[#ECFEFF] to-[#EEF2FF]">
  <div className="px-4 sm:px-6 md:px-12 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">


          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              AI <span className="text-[#22FF88]">Automation</span><br />
              Solutions for Business Growth
            </h1>

             <p className="text-lg text-gray-900 max-w-xl">
              Looking to automate your business processes and save time?
              Our AI automation solutions help automate repetitive tasks, reduce manual work and improve efficiency with
AI-powered automation. We build intelligent systems that handle customer
interactions, lead management, workflows and business operations automatically.
            </p>
          </motion.div>

          <motion.img
            src={aiHero}
            alt="Business AI Automation Solutions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
           className="w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto"

          />
        </div>
      </section>

      {/* ======================================================
         OVERVIEW
      ====================================================== */}
      <section className="py-20 sm:py-24 md:py-32 bg-white">
        <div className="px-6 md:px-12 lg:px-28 max-w-5xl mx-auto text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible"
            className="text-4xl font-extrabold mb-6">
            Overview
          </motion.h2>

         <motion.p
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  className="text-base sm:text-lg text-gray-900 leading-relaxed"
>
   AI automation helps businesses streamline operations, reduce costs and
increase productivity. Our solutions automate lead generation, customer
support, data processing and internal workflows.

We design AI-driven systems that work 24/7, improve decision making and
eliminate repetitive tasks. This allows your team to focus on growth while
automation handles routine operations.

From chatbots to workflow automation, we create scalable AI solutions
that improve efficiency and accelerate business growth.
</motion.p>

        </div>
      </section>

      {/* ======================================================
         TARGET AUDIENCE + USE CASES
      ====================================================== */}
    <section className="py-32 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">
        <div className="px-4 sm:px-6 md:px-12 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          <motion.div variants={stagger} initial="hidden" whileInView="visible">
            <motion.h3 variants={fadeUp} className="text-3xl font-extrabold mb-6">
              Target Audience
            </motion.h3>

            {[
              "Businesses looking to automate manual tasks",
"Companies handling high customer inquiries",
"Startups scaling with small teams",
"Sales & marketing automation needs",
"Service-based businesses",
            ].map((item, i) => (
              <motion.p key={i} variants={fadeUp}
                className="text-gray-700 font-medium mb-3">
                ✔ {item}
              </motion.p>
            ))}
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible">
            <motion.h3 variants={fadeUp} className="text-3xl font-extrabold mb-6">
              Use Cases
            </motion.h3>

            <motion.ul variants={fadeUp}
              className="space-y-4 text-gray-700 font-medium">
                <li>• AI chatbots for customer support</li>
<li>• Automated lead capture & follow-up</li>
<li>• CRM & sales automation</li>
<li>• Workflow automation</li>
<li>• Email & notification automation</li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
         TECHNOLOGY STACK
      ====================================================== */}
    
     {/* ================= TECHNOLOGY STACK ================= */}
        <TechStack/>




      {/* ======================================================
         KEY FEATURES
  
{/* ======================================================
   KEY FEATURES
====================================================== */}
{/* ======================================================
   KEY FEATURES
====================================================== */}
<section className="py-32 bg-gradient-to-br from-[#ECFEFF] to-[#EEF2FF]">
  <div className="px-6 md:px-12 lg:px-28">
    <h2 className="text-4xl font-extrabold text-center mb-20">
      Key Features
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        { text: "AI-powered business automation", color: "from-cyan-100 to-cyan-200" },
        { text: "Smart chatbots & virtual assistants", color: "from-green-100 to-emerald-200" },
        { text: "Automated lead generation systems", color: "from-yellow-100 to-amber-200" },
        { text: "Workflow & task automation", color: "from-indigo-100 to-blue-200" },
        { text: "CRM & sales automation", color: "from-pink-100 to-rose-200" },
        { text: "Reduced manual workload", color: "from-sky-100 to-teal-200" },
      ].map((feature, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -10, scale: 1.03 }}
          className={`
            p-9 rounded-2xl
            bg-gradient-to-br ${feature.color}
            shadow-lg hover:shadow-2xl
            transition-all duration-300
            font-semibold text-gray-800
          `}
        >
          <div className="flex items-start gap-3">
            <span className="text-[#22FF88] font-extrabold text-2xl leading-none">
              ✔
            </span>
            <span className="text-[16px] leading-relaxed">
              {feature.text}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ======================================================
         5 STEP PROCESS
      ====================================================== */}
    <section className="py-32 bg-white">
  <div className="px-6 md:px-12 lg:px-28">
    <h2 className="text-4xl font-extrabold text-center mb-20">
     AI Automation Solutions in just 5 steps
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 text-center">

      {[
        { title: "Business Requirement Analysis", color: "from-cyan-100 to-sky-200" },
        { title: "Automation Strategy Planning", color: "from-pink-100 to-rose-200" },
        { title: "AI Model & Workflow Development", color: "from-emerald-100 to-green-200" },
        { title: "Testing & Optimization", color: "from-amber-100 to-yellow-200" },
        { title: "Launch & Ongoing  Support", color: "from-indigo-100 to-blue-200" },
      ].map((step, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -10, scale: 1.05 }}
          className={`
            p-7 rounded-2xl
            bg-gradient-to-br ${step.color}
            shadow-lg hover:shadow-2xl
            transition-all duration-300
            font-semibold
          `}
        >
          <div className="text-sm font-extrabold text-gray-600 tracking-wide">
            Step {i + 1}
          </div>

          <p className="mt-4 text-gray-800 font-bold text-[15px] leading-snug">
            {step.title}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ======================================================
         RELATED SERVICES
      ====================================================== */}
<section className="py-32 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-extrabold text-center mb-16"
  >
    Related Services
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.18,
        },
      },
    }}
    className="flex flex-wrap justify-center gap-6 md:gap-8"
  >
    {[
      { name: "Business Website Development", color: "from-cyan-100 to-sky-200",link:"/services/web-development" },
      { name: "Mobile App Development", color: "from-pink-100 to-rose-200",link:"/services/mobile-app" },
      { name: "E-Commerce Solutions", color: "from-emerald-100 to-green-200",link:"/services/ecommerce" },
      { name: "Custom Business Software", color: "from-indigo-100 to-blue-200",link:"/services/custom-software" },
      { name: " Business Dashboard ", color: "from-violet-100 to-purple-200",link:"/services/dashboard" },
      {name:"Vfx and Motion Graphics",color:"from-amber-100 to-yellow-200",link:"/services/vfx"},
      {name:"Video Editing Services",color:"from-rose-100 to-pink-200",link:"/services/video-editing"}
    ].map((service, i) => (
      <Link to={service.link} key={i} >
      <motion.div
        key={i}
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.55,
              ease: "easeOut",
            },
          },
        }}
        whileHover={{
          y: -12,
          scale: 1.08,
        }}
        whileTap={{ scale: 0.96 }}
        className={`
          px-10 py-6
          rounded-2xl
          bg-gradient-to-br ${service.color}
          shadow-lg hover:shadow-2xl
          font-extrabold
          text-gray-800
          cursor-pointer
          transition-shadow duration-300
        `}
      >
        {service.name}
        


        <motion.div
  whileHover={{ x: 6 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="mt-6 text-center"
>
  <h3
    
    className="inline-flex items-center gap-2
    text-[#ff5252] font-extrabold text-[15px]
    hover:text-[#22FF88] transition-colors"
  >
    View Details
    <span className="text-lg">→</span>
  </h3>
</motion.div>
      </motion.div>





</Link>


    ))}
  </motion.div>
</section>


      {/* ======================================================
         FINAL CTA
      ====================================================== */}
      <section className="py-32 bg-gradient-to-r from-[#22FF88] via-[#00E5CC] to-[#3B82F6] text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
       Ready to Automate Your Business Operations?
        </h2>

        <p className="text-white/90 text-lg mb-10">
         Automate workflows, reduce manual work and scale your business with AI automation solutions.
        </p>

      <button onClick={handleWhatsApp}
  className="px-10 sm:px-14 py-4 sm:py-5 rounded-full bg-white
  font-extrabold text-base sm:text-lg shadow-xl hover:scale-110 transition"
>

          Start Your Project
        </button>
      </section>

    </main>
  );
}
