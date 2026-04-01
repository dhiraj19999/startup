import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuote = () => {
    const phone = "918459116231";

    const message = `Hi SmartWeb AI 👋
I want to get a FREE quote for:
Service: Web Development
Please share pricing & details.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Clients", id: "clients" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      


<Helmet>
<title>
SmartWeb AI | Website Development, Mobile Apps, AI Automation India
</title>

<meta
name="description"
content="SmartWeb AI offers website development, mobile app development, AI automation, ecommerce, VFX and video editing services in Pune, Latur, Ambejogai and across India."
/>

<meta
name="keywords"
content="SmartWeb AI, website developer India, mobile app developer India, AI automation company India, ecommerce developer India, video editing services India, VFX services India"
/>

<meta name="robots" content="index, follow" />

<meta property="og:title" content="SmartWeb AI" />

<meta
property="og:description"
content="Business websites, mobile apps, AI automation and digital solutions across India."
/>

<meta name="author" content="SmartWeb AI" />
</Helmet>









      <div
        className={`w-full transition-all duration-500
        bg-gradient-to-r from-[#22FF88] via-[#00E5CC] to-[#3B82F6]
        ${scrolled ? "py-3 shadow-2xl" : "py-4"}`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-2xl font-extrabold text-white">
            SmartWeb
            <span className="ml-1 bg-white text-[#0F172A] px-2 py-0.5 rounded-md">
              AI
            </span>
          </h1>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex gap-4 lg:gap-8 xl:gap-10 text-white font-semibold">
            {links.map((link) => (
              <li key={link.id} className="relative group">
                <Link  className="transition-colors duration-200 hover:text-[#518f69]" to={`/#${link.id}`}>{link.name}</Link>
                <span
                  className="absolute left-0 -bottom-2 h-[3px] w-0
                  bg-white rounded-full transition-all duration-300
                  group-hover:w-full "
                />
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <motion.button
            onClick={handleQuote}
            className="hidden md:block px-4 lg:px-6 py-2 text-sm lg:text-base rounded-full
            bg-white text-[#0F172A] font-bold
            hover:scale-110 transition"
          >
            Free Quote
          </motion.button>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white shadow-xl"
            >
              <ul className="flex flex-col items-center gap-6 py-6 font-semibold text-[#0F172A]">
                {links.map((link) => (
                  <li key={link.id} className="relative group">
                <Link onClick={()=>setOpen(false)}  className=" whitespace-nowrap  transition-colors duration-200 hover:text-[#518f69]" to={`/#${link.id}`}>{link.name}</Link>
                <span
                  className="absolute left-0 -bottom-2 h-[3px] w-0
                  bg-white rounded-full transition-all duration-300
                  group-hover:w-full "
                />
              </li>
                ))}

                <button
                  onClick={handleQuote}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-[#22FF88] to-[#00E5CC] text-white"
                >
                  Get Free Quote
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}