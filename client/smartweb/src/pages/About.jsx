import { motion } from "framer-motion";
import about from "../assets/about.webp"
import commitment from "../assets/commitment.webp"
import transparency from "../assets/transperncy.webp"
import innovation from "../assets/Inovation.webp"
import quality from "../assets/quality.webp"
import { Helmet } from "react-helmet-async";
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

<Helmet>
<title>
About SmartWeb AI | Website Development & AI Automation Company
</title>

<meta
name="description"
content="SmartWeb AI is a digital technology company providing website development, mobile app development and AI automation solutions. We help businesses build digital presence, generate leads and grow online."
/>

<meta
name="keywords"
content="about smartweb ai, website development company, AI automation company, web design agency, mobile app development, business website, digital solutions"
/>

<meta name="robots" content="index, follow" />
<meta name="author" content="SmartWeb AI" />

<meta property="og:title" content="About SmartWeb AI" />
<meta
property="og:description"
content="We build websites, mobile apps and AI automation solutions for business growth."
/>

<meta property="og:type" content="website" />
</Helmet>



      {/* ================= HERO ================= */}
     <section className="w-full pt-20 pb-10 md:pt-28 md:pb-14 bg-gradient-to-br from-[#E6FFF5] via-[#ECFEFF] to-[#EEF2FF]">
  <div className="px-6 md:px-12 lg:px-28 max-w-7xl mx-auto 
  grid md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={item}
      className="space-y-5 md:space-y-6 text-center md:text-left"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        About <span className="text-[#22FF88]">SmartWeb</span>
        <span className="text-[#3B82F6]">AI</span>
      </h1>

      <p className="text-base sm:text-lg text-gray-900">
        SmartWeb AI is a digital technology company specializing in website
        development, mobile app development and AI automation solutions for
        businesses.
      </p>

      <p className="text-gray-900 text-sm sm:text-base">
        We help startups, service providers and businesses build strong digital
        presence, attract customers and automate operations with modern,
        SEO-optimized and scalable solutions.
      </p>

      <p className="text-gray-600 text-xs sm:text-sm">
        Website Development • Web Design • Mobile Apps • AI Automation • Business Growth
      </p>
    </motion.div>

    <motion.img
      src={about}
      alt="About SmartWeb AI"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
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

              <p className="text-gray-900 mb-4">
               We are a team of developers, designers and AI engineers focused on building
high-performing digital products that help businesses grow faster and
serve customers better.
              </p>

              <p className="text-gray-900">
              Our approach is simple — understand your business, design user-focused
solutions and deliver scalable systems that generate leads and increase revenue.
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
<li>🚀 Business Focused Solutions</li>
<li>📈 Growth Driven Strategy</li>
<li>⚙️ Modern Tech Stack</li>
<li>🤖 AI Automation Expertise</li>
</ul>
            </motion.div>
          </motion.div>

        </div>
      </section>

     
     {/* ================= Why Choose SmartWeb AI ================= */}
<section className="py-32 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">
  <div className="px-6 md:px-12 lg:px-28 max-w-7xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
      Why Choose <span className="text-[#22FF88]">SmartWeb AI</span>
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon:"👨‍💻",
          badge:"Professional Team",
          title:"Experienced Team",
          desc:"Our experienced developers, designers and AI experts build modern websites, mobile apps and automation systems tailored for your business. We focus on performance, scalability and conversion-driven design to help you attract customers and grow faster online."
        },
        {
          icon:"⚡",
          badge:"All-in-One Service",
          title:"Comprehensive Solutions",
          desc:"We provide complete digital solutions including website development, mobile apps, AI automation, dashboards, video editing and VFX. Everything is handled under one roof to ensure consistent quality, faster delivery and seamless business growth."
        },
        {
          icon:"✅",
          badge:"Tested & Reliable",
          title:"Quality Assurance",
          desc:"Every project goes through proper testing, performance optimization and security checks. We ensure your website or software is fast, responsive, SEO-friendly and ready to handle real business traffic and customers."
        },
        {
          icon:"⏱️",
          badge:"On-Time Delivery",
          title:"Timely Delivery",
          desc:"We follow structured planning and milestone-based development to deliver projects on schedule. Our process ensures smooth communication, faster turnaround and reliable deployment without delays."
        },
        {
          icon:"🛠️",
          badge:"Lifetime Help",
          title:"24/7 Support",
          desc:"We provide ongoing support, updates and maintenance after project launch. Whether it's improvements, fixes or scaling your system, our team stays available to ensure your business runs smoothly."
        },
        {
          icon:"💰",
          badge:"Affordable Pricing",
          title:"Cost Effective",
          desc:"Get premium quality development at startup-friendly pricing. We offer flexible packages designed for small businesses, startups and growing companies without compromising performance or features."
        }
      ].map((item,i)=>(
        <motion.div
          key={i}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5,delay:i*0.1}}
          whileHover={{y:-8,scale:1.02}}
          className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all"
        >

          {/* badge */}
          <span className="inline-block mb-4 text-xs font-bold px-3 py-1 rounded-full bg-[#22FF88]/20 text-[#00a86b]">
            {item.badge}
          </span>

          {/* icon */}
          <div className="text-4xl mb-4">
            {item.icon}
          </div>

          <h3 className="text-xl font-extrabold mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-[15px]">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>
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
            {
            [
[
"Transparency",
"Clear communication, fixed pricing and regular updates so you always know your project progress.",
"from-[#22FF88]/40 to-[#00E5CC]/40",
transparency
],
[
"Quality",
"Fast, SEO optimized and scalable websites designed to attract customers and grow your business.",
"from-[#00E5CC]/40 to-[#3B82F6]/40",
quality
],
[
"Innovation",
"Modern web technologies, automation tools and AI solutions to improve efficiency and customer experience.",
"from-violet-300/50 to-purple-500/50",
innovation
],
[
"Commitment",
"We focus on long-term business growth, lead generation and reliable support after delivery.",
"from-pink-300/50 to-rose-500/50",
commitment
]
].map(([title, desc, bg, icon], i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -16, rotate: 1.8, scale: 1.07 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${bg}
                shadow-2xl backdrop-blur-xl`}
              >
                {/* SMALL PNG ICON */}
                <img
                  src={icon}
                  className="h-[105px] mb-4 ml-[24px]"
                  alt="value-icon"
                />

                <h4 className="text-xl font-bold mb-3">{title}</h4>
                <p className="text-gray-900 text-md">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= STATS ================= */}
     
    
 {/*
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
      </section>  */}

  <section className="w-full py-32 bg-gradient-to-br from-[#F0FFF9] to-[#ECFEFF]">
        <div className="w-full px-6 md:px-12 lg:px-28">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
How <span className="text-[#00E5CC]">SmartWeb AI</span> Helps Your Business Grow
</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
[
"1. Understand Business",
"We analyze your business, target customers and goals to create a website that generates leads.",
"from-[#00E5CC]/40 to-[#3B82F6]/40"
],
[
"2. Strategy & Design",
"We plan UI/UX, structure and SEO optimized layout to improve user experience and conversions.",
"from-[#22FF88]/40 to-[#00E5CC]/40"
],
[
"3. Development",
"We build fast, responsive and scalable websites, apps and AI automation solutions.",
"from-violet-300/50 to-purple-500/50"
],
[
"4. Launch & Support ",
"We launch your project,provide support, optimize performance and help your business grow online.",
"from-pink-300/50 to-rose-500/50"
]
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
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-md text-gray-700 font-semibold">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



    </main>
  );
}
