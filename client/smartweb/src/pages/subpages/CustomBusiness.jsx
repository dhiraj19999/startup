import { motion } from "framer-motion";
import softwareHero from "../../assets/custom.png";
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

export default function CustomBusinessDevelopment() {

  const handleWhatsApp = () => {
  const phone = "918459116231"; // apna number

  const message = `Hi SmartWeb AI 👋

I’m interested in your custom business software development services.


Please share more details.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


  return (
    <main className="w-full overflow-x-hidden text-[#0F172A] text-base sm:text-[15px]">
<Helmet>
<title>
Custom Business Software Development | SmartWeb AI
</title>

<meta
name="description"
content="SmartWeb AI provides custom business software development including CRM, ERP, dashboards and workflow automation. We build scalable software tailored to your business operations."
/>

<meta
name="keywords"
content="custom business software, CRM development, ERP software development, business automation software, custom dashboard development, workflow automation software"
/>

<meta name="robots" content="index, follow" />

<meta property="og:title" content="Custom Business Software | SmartWeb AI" />
<meta
property="og:description"
content="Tailor-made software solutions designed for your business workflow."
/>
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
              Custom <span className="text-[#22FF88]">Business</span><br />
              Software Development
            </h1>

            <p className="text-lg text-gray-900 max-w-xl">
              Looking for software built exactly for your business workflow?
              We develop powerful custom software solutions that tailored to your workflow, operations
and business goals. Automate processes, manage data efficiently and
scale your business with powerful custom-built solutions.
            </p>
          </motion.div>

          <motion.img
            src={softwareHero}
            alt="Custom Business Software"
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
  Custom business software is designed specifically for your workflow,
operations and business goals. Unlike generic tools, custom solutions
adapt to your processes and give you full control over your system.

We build scalable software for automation, data management, team
collaboration and business analytics. Our solutions help reduce manual
work, improve efficiency and streamline operations.

From CRM and ERP systems to dashboards and workflow automation,
we develop secure, high-performance software tailored to your
business growth and long-term scalability.
</motion.p>

        </div>
      </section>

      {/* ======================================================
         TARGET AUDIENCE + USE CASES
      ====================================================== */}
      <section className="py-32 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">
     <div className="px-4 sm:px-6 md:px-12 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">


          {/* Target Audience */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible">
            <motion.h3 variants={fadeUp}
              className="text-3xl font-extrabold mb-6">
              Target Audience
            </motion.h3>

            {[
"Businesses with unique workflows",
"Companies replacing manual processes",
"Enterprises needing internal software",
"Startups building scalable systems",
"Operations & management teams",
].map((item, i) => (
              <motion.p key={i} variants={fadeUp}
                className="text-gray-700 font-medium mb-3">
                ✔ {item}
              </motion.p>
            ))}
          </motion.div>

          {/* Use Cases */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible">
            <motion.h3 variants={fadeUp}
              className="text-3xl font-extrabold mb-6">
              Use Cases
            </motion.h3>

            <motion.ul variants={fadeUp}
              className="space-y-4 text-gray-700 font-medium">
              <li>• CRM & customer management systems</li>
<li>• ERP & business operations software</li>
<li>• Workflow automation systems</li>
<li>• Inventory & order management software</li>
<li>• Custom admin dashboards</li>
<li>• Business reporting & analytics systems</li>
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
{ text: "Custom software tailored to your business workflow", color: "from-cyan-100 to-cyan-200" },
{ text: "CRM, ERP and business management systems", color: "from-green-100 to-emerald-200" },
{ text: "Workflow automation and process optimization", color: "from-yellow-100 to-amber-200" },
{ text: "Secure role-based access and data protection", color: "from-indigo-100 to-blue-200" },
{ text: "Scalable architecture for business growth", color: "from-pink-100 to-rose-200" },
{ text: "Integration with existing tools and APIs", color: "from-sky-100 to-teal-200" },
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
         Custom Business Software  Designed & Developed in Just 5 Steps
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 text-center">

      {[
{ title: "Business Requirement Analysis", color: "from-cyan-100 to-sky-200" },
{ title: "Software Architecture Planning", color: "from-pink-100 to-rose-200" },
{ title: "Custom Software Development", color: "from-emerald-100 to-green-200" },
{ title: "Testing & Optimization", color: "from-amber-100 to-yellow-200" },
{ title: "Launch & Ongoing Support", color: "from-indigo-100 to-blue-200" },
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
         { name: "Web Development", color: "from-amber-100 to-yellow-200",link:"/services/web-development" },
      { name: "Mobile App Development", color: "from-cyan-100 to-sky-200",link:"/services/mobile-app" },
      { name: "AI Automation", color: "from-pink-100 to-rose-200",link:"/services/ai-automation" },
      { name: "E-Commerce Solutions", color: "from-emerald-100 to-green-200",link:"/services/ecommerce" },
       
      { name: "Business Dashboard", color: "from-violet-100 to-purple-200",link:"/services/dashboard" },
       {name:"Vfx and Motion Graphics",color:"from-amber-100 to-yellow-200",link:"/services/vfx"},
      {name:"Video Editing Services",color:"from-rose-100 to-pink-200",link:"/services/video-editing"}

    ].map((service, i) => (
      <Link to={service.link} key={i} style={{ textDecoration: 'none' }}>
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
         Ready to Build Custom Software?
        </h2>

        <p className="text-white/90 text-lg mb-10">
          Let’s create a software solution perfectly aligned with your business.
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
